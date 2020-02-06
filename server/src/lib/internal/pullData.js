var request = require('request');

/**
 * returns a request object of a twitch VOD's metadata based on the passed VOD id
 * 
 * @param {String} id
 */
exports.getVODMeta = function (vodID){
    return getTwitchData(`https://api.twitch.tv/kraken/videos/${vodID}`);
}

/**
 * returns a request object of a twitch VOD's chat log based on the passed VOD id
 * 
 * @param {String} id
 */
exports.getVODChat = function (vodID){
    return getTwitchData(`https://api.twitch.tv/kraken/videos/${vodID}/comments`);
}


/**
 * returns a request object of a twitch api call based on the passed url
 * 
 * @param {String} id
 */
function getTwitchData(url){
    var options = {
        url: url,
        headers: {
            'Client-ID': process.env.TWITCH_CLIENT_ID,
            'Accept': 'application/vnd.twitchtv.v5+json'
        }
    }
    return request.get(options);
}