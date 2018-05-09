const Base = require('./base.js');
const cheerio = require('cheerio');
const request = require('request');
const dataUrl = 'https://m.pc6.com/xcx/all.html';

const requestAction = function (url) {
  return new Promise( function (resolve, reject) {
    request({url: url, method: 'GET'}, function (error, response, body) {
      if (error) return reject(error);

      resolve(body);
    });
  });
};

module.exports = class extends Base {
  indexAction() {

    return this.success('aaa');
  }

  testAction() {
    this.requestCollect();
    // return this.success(bodyT);
  }

  async requestCollect() {
    const a = await requestAction('https://m.pc6.com/xcx/all.html');
    console.log(a);
  }
};
