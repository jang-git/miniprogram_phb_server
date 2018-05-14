const Base = require('./base.js');
// const request = require('request');
// const iconv = require('iconv-lite');

// const dataUrl = 'https://m.pc6.com/xcx/all.html';

// const requestAction = function (url) {
// return new Promise( function (resolve, reject) {
//   request({url: url, method: 'GET', encoding:null}, function (error, response, body) {
//     // response.setEncoding('utf-8');
//     // console.log(response);
//     if (error) return reject(error);
//     const buf =  iconv.decode(body, 'gb2312');
//     resolve(buf);
//   });
// });
// };

module.exports = class extends Base {
  async indexAction() {
    // let xx = '';
    // this.requestCollect().then( function(res) {
    //   xx = res;
    //   console.log(xx);
    // });
    const CollectSerivce = this.service('collect', 'admin');
    // const a = await CollectSerivce.getPc6Web();
    const a = await this.model('user').select();
    // this.assign('index', a);
    return this.success(a);
    // return this.display();
  }

  async testAction() {
    // const b = this.requestCollect();
    // return this.success(b.toString());
  }
};
