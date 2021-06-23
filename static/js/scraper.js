const axios = require('axios');
const cheerio = require('cheerio');


async function getHTML(url) {
    const response = await axios.get(url);
    const data = await response.data;
    const html = cheerio.load(data);
    return html;
}


module.exports = getHTML;
