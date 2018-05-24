const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username, callback) => {
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  request.get(options, (err, data) => {
    if (err) throw err;
    console.log('Data: ', data);
    callback(data);
  })
}

module.exports.getReposByUsername = getReposByUsername;