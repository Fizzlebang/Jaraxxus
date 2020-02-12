const axios = require('axios').default;

/**
 * axios objects configured to get data from the helix and kraken iterations of the twitch API
 * respectively.
 */
const helix = () => {
  return axios.create({
    baseURL: 'https://api.twitch.tv/helix/',
    headers: {
      'Client-ID': process.env.TWITCH_CLIENT_ID
    }
  });
};

const kraken = () => {
  return axios.create({
    baseURL: 'https://api.twitch.tv/kraken/',
    headers: {
      'Client-ID': process.env.TWITCH_CLIENT_ID,
      Accept: 'application/vnd.twitchtv.v5+json'
    }
  });
};

/**
 * returns a promise of a twitch VOD's metadata based on the passed VOD id
 * @param {String} id
 */
export async function getVODMeta(vodID) {
  return helix().get(`videos?id=${vodID}`);
}

/**
 * returns a promise of a twitch VOD's chat log based on the passed VOD id using the older Kraken
 * iteration of the Twitch API due to lack of support from newer iterations.
 * @param {String} id
 */
export async function getVODChat(vodID) {
  return kraken().get(`videos/${vodID}/comments`);
}

/**
 * returns a promise of a twitch channels metadata based on the login name of the owner.
 *
 * @param {String} login Login name of the owner of the channel
 */
export async function getChannelMeta(login) {
  return helix().get(`users?login=${login}`);
}
