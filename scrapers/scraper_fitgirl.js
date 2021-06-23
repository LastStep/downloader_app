const getHTML = require('../static/js/scraper.js');
const getSearch = require('../static/js/util.js');


async function scrape_fitgirl(ele) {
    
    const searchTerm = getSearch(ele);

    const url = `https://fitgirl-repacks.to/search/${searchTerm}`;

    const $ = await getHTML(url);

    const articles = $('article');

    let entries = [];

    $(articles).each((i, el) => {
        el = $(el)
        const entryCategory = el.find('.cat-links').text();
        const entryTitle = el.find('.entry-title').text();
        const entryLink = el.find('.entry-title').find('a').attr('href');
        const entryDate = el.find('time.entry-date').text();

        let entry = {
            entryTitle,
            entryCategory,
            entryLink,
            entryDate,
        };
        entries.push(entry);
    })

    console.log(entries);

    var table = document.createElement("table");
    table.id = 'mytable';
    table.className = 'table table-striped table-hover';

    var thead = document.createElement("thead");
    thead.className = 'thead-dark';
    table.appendChild(thead);

    var tbody = document.createElement("tbody");
    table.appendChild(tbody);

    //Add a header
    var header = document.createElement("tr");

    var titleHeaderCell = document.createElement("th");
    var dateHeaderCell = document.createElement("th");

    titleHeaderCell.appendChild(document.createTextNode('Title'))
    dateHeaderCell.appendChild(document.createTextNode('Date'))

    header.appendChild(titleHeaderCell);
    header.appendChild(dateHeaderCell);

    thead.appendChild(header);

    //Add the rest of the data to the table
    for (var i = 0; i < entries.length; i++) {
        var title = entries[i].entryTitle;
        var date = entries[i].entryDate;
        var link = entries[i].entryLink;

        var tr = document.createElement("tr");

        var titleCell = document.createElement("td");
        var dateCell = document.createElement("td");

        titleTextNode = document.createElement('a');
        titleTextNode.appendChild(document.createTextNode(title));
        titleTextNode.href = link;

        titleCell.appendChild(titleTextNode);
        dateCell.appendChild(document.createTextNode(date));

        tr.appendChild(titleCell);
        tr.appendChild(dateCell);

        tbody.appendChild(tr);
    }
    document.body.appendChild(table);
}


module.exports = scrape_fitgirl;