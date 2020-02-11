/**
 * @file Defines queries for channels
 */
import { getDatabase } from '..';
import { Collection } from 'mongodb';

/**
 * Creates a channel
 *
 * @param {string} id
 * @param {string} name
 * @returns {any} created channel
 */
export async function createChannel(id, name) {
  const channel = await getChannelById(id);

  if (channel) {
    return channel;
  }
  const db = await getDatabase();
  const channels = await db.collection('channel');

  const insertedChannel = await channels.insertOne({ id: id, name: name });
  return insertedChannel;
}

/**
 * Gets a channel by id
 *
 * @param {string} id
 * @returns {any} channel
 */
export async function getChannelById(id) {
  const db = await getDatabase();
  const channels = await db.collection('channel');
  const channel = await channels.findOne({ id: id });

  if (!channel) {
    return null;
  }
  return channel;
}

/**
 * Gets a channel by name
 *
 * @param {string} name
 * @returns {any} channel
 */
export async function getChannelByName(name) {
  const db = await getDatabase();
  const channels = await db.collection('channel');
  const channel = await channels.findOne({ name: name });

  if (!channel) {
    return null;
  }
  return channel;
}

/**
 * Updates a channel name
 *
 * @param{string} id
 */
export async function updateChannelNameById(id) {
  const db = await getDatabase();
  const channels = await db.collection('channel');
  const update = await channels.updateOne({ id: id }, { $set: { name: name } });
  if (update.matchedCount == 0) {
    throw Error('Item not found');
  }
}

/**
 * Deletes a channel by id
 */
export async function deleteChannel(id) {
  const db = await getDatabase();
  const channels = await db.collection('channel');
  await channels.deleteOne({ id: id });
}
