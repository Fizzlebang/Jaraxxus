const request = require('request');
const util = require('util');

/**
 * returns a promise of a twitch api call based on the passed url
 * @param {String} id
 */
function getTwitchData(url) {
  const get = util.promisify(request.get);
  const options = {
    url,
    headers: {
      'Client-ID': process.env.TWITCH_CLIENT_ID,
      Accept: 'application/vnd.twitchtv.v5+json'
    }
  };
  return get(options);
}

/**
 * returns a promise of a twitch VOD's metadata based on the passed VOD id
 * @param {String} id
 */
export function getVODMeta(vodID) {
  return getTwitchData(`https://api.twitch.tv/kraken/videos/${vodID}`);
}

/**
 * returns a promise of a twitch VOD's chat log based on the passed VOD id
 *
 * @param {String} id
 */
export function getVODChat(vodID) {
  return getTwitchData(`https://api.twitch.tv/kraken/videos/${vodID}/comments`);
}
