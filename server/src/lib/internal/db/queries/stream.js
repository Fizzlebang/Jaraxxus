/**
 * @file Defines the queries for streams
 */
import { getDatabase } from '..';

/**
 * Creates a single stream
 *
 * @param {string} channelId the ID of the channel
 * @param {string} streamId the ID of the stream
 * @param {datetime} startTime the start time of the stream
 * @param {datetime} endTime the end time of the stream
 * @returns {Stream} the new stream
 */
export async function createStream(channelId, streamId, startTime, endTime) {
  const db = await getDatabase();
  const channels = await db.collection('channel');
  const stream = {
    id: streamId,
    start_time: startTime,
    end_time: endTime
  };
  const update = await channels.updateOne({ id: channelId }, { $push: { streams: stream } });

  if (update.matchedCount == 0) {
    throw Error('Channel not found');
  }
  if (update.modifiedCount == 0) {
    throw Error('Update failed');
  }
  return stream;
}

/**
 * Gets a stream by ID
 *
 * @param {string} id ID of the stream
 * @returns {Stream} retrived stream
 */
export async function getStreamById(id) {
  const db = await getDatabase();
  const channels = await db.collection('channel');
  const streams = await channels
    .aggregate([
      { $unwind: '$streams' },
      { $match: { 'streams.id': id } },
      {
        $replaceRoot: {
          newRoot: '$streams'
        }
      }
    ])
    .toArray();
  // Should return only 1 row because IDs are unique
  if (streams.length == 1) {
    return streams[0];
  } else if (streams.length == 0) {
    throw Error('Stream not found');
  } else {
    throw Error('Duplicate stream IDs found');
  }
}

/**
 * Removes a single stream
 *
 * @param {string} id ID of the stream
 */
export async function deleteStream(id) {
  const db = await getDatabase();
  const channels = await db.collection('channel');
  await channels.updateOne({ 'streams.id': id }, { $pull: { streams: { 'streams.id': id } } });
}

/**
 * Update analytics
 *
 * @param {string} id ID of stream
 */
export async function updateAnalytics(id, analytics) {
  const db = await getDatabase();
  const channels = await db.collection('channel');
  const update = await channels.updateOne(
    { 'streams.id': id },
    { $set: { 'streams.$.analytics': analytics } }
  );
  if (update.matchedCount == 0) {
    throw Error('Stream not found');
  }
}
