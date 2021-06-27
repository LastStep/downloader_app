const scraper_fitgirl = require("./scraper_fitgirl.js");
const scraper_steamunlocked = require("./scraper_steamunlocked.js");

async function scrapeSites() {
    var selectedWebsite = document.querySelector(".selectWebsite").value;
    var searchSection = document.querySelector(".searchTerm").parentNode;

    if (selectedWebsite == "all") {
        var scraperFunctions = document.querySelectorAll(
            ".selectWebsite option:not(:first-child)"
        );
        for (var eachFunc of scraperFunctions) {
            var funcName = eachFunc.value;
            await eval(funcName)(searchSection);
        }
    } else {
        await eval(selectedWebsite)(searchSection);
    }
}

module.exports = scrapeSites;
