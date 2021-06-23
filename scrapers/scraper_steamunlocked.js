const getHTML = require("../static/js/scraper.js");
const getSearch = require("../static/js/util.js");

async function scrape_steamunlocked(ele) {
    const searchTerm = getSearch(ele);

    const url = `https://steamunlocked.net/?s=${searchTerm}`;
    console.log(url);
    const $ = await getHTML(url);

    const coverItems = $("div.cover-item.category");
    console.log(coverItems);
    let entries = [];

    $(coverItems).each((i, el) => {
        el = $(el);
        const entryTitle = el.find(".cover-item-title").find("h1").text();
        const entryImage = el.find(".cover-item-image").find("img").attr("src");
        const entryLink = el.find(".cover-item-image").find("a").attr("href");

        let entry = {
            entryTitle,
            entryImage,
            entryLink,
        };
        entries.push(entry);
    });

    console.log(entries);

    var table = document.createElement("table");
    table.id = "mytable";
    table.className = "table table-striped table-hover";

    var thead = document.createElement("thead");
    thead.className = "thead-dark";
    table.appendChild(thead);

    var tbody = document.createElement("tbody");
    table.appendChild(tbody);

    //Add a header
    var header = document.createElement("tr");

    var titleHeaderCell = document.createElement("th");
    // var dateHeaderCell = document.createElement("th");

    titleHeaderCell.appendChild(document.createTextNode("Title"));
    // dateHeaderCell.appendChild(document.createTextNode("Date"));

    header.appendChild(titleHeaderCell);
    // header.appendChild(dateHeaderCell);

    thead.appendChild(header);

    //Add the rest of the data to the table
    for (var i = 0; i < entries.length; i++) {
        var title = entries[i].entryTitle;
        // var date = entries[i].entryDate;
        var link = entries[i].entryLink;

        var tr = document.createElement("tr");

        var titleCell = document.createElement("td");
        // var dateCell = document.createElement("td");

        titleTextNode = document.createElement("a");
        titleTextNode.appendChild(document.createTextNode(title));
        titleTextNode.href = link;

        titleCell.appendChild(titleTextNode);
        // dateCell.appendChild(document.createTextNode(date));

        tr.appendChild(titleCell);
        // tr.appendChild(dateCell);

        tbody.appendChild(tr);
    }
    document.body.appendChild(table);
}

module.exports = scrape_steamunlocked;
