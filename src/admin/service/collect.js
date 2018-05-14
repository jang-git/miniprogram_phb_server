const cheerio = require('cheerio');
const charset = require('superagent-charset');
const superagent = charset(require('superagent'));
const fetchData = function(url, charset='utf8', method='GET') {
  return new Promise(function(resolve, reject) {
    superagent(method, url).charset(charset).end(
      function(err, res) {
        if (err) return reject(err);
        resolve(res.text);
      }
    );
  });
};

module.exports = class extends think.Service {
  async getPc6Web() {
    const url = 'https://m.pc6.com/xcx/all.html';
    const charset = 'gb2312';
    const dataTemp = await fetchData(url, charset);
    const $ = cheerio.load(dataTemp, {decodeEntities: false});
    const cc = [];
    $('#cateAll ul li a').each(function(i, ele) {
      const name = $(this).text();
      const url = $(this).attr('href');
      cc.push({
        'name': name,
        'href': url
      })
    });
    return cc;
  }
};
