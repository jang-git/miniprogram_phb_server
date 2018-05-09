const Base = require('./base.js');
const cheerio = require('cheerio');
const request = require('request');
const iconv = require('iconv-lite');

const dataUrl = 'https://m.pc6.com/xcx/all.html';

const requestAction = function (url) {
  return new Promise( function (resolve, reject) {
    request({url: url, method: 'GET', encoding:null}, function (error, response, body) {
      // response.setEncoding('utf-8');
      console.log(response);
      if (error) return reject(error);
      const buf =  iconv.decode(body, 'gb2312');
      resolve(buf);
    });
  });
};

module.exports = class extends Base {
  indexAction() {
    this.requestCollect();
    
    
    // this.assign('index',xx);
    return this.display();
    // return this.success('aaa');
  }

  testAction() {
    // const b = this.requestCollect();

    // return this.success(b.toString());
  }

  async requestCollect() {
    const a = await requestAction('https://m.pc6.com/xcx/all.html');
    console.log(a);
    const $ = cheerio.load(a);
    console.log($)
    const xx = $('#cateAll').length;
    console.log(xx);
    return a;
  }
};
