const scraper_fitgirl = require("./scraper_fitgirl.js");
const scraper_steamunlocked = require("./scraper_steamunlocked.js");

async function scrapeSites(category) {
    // define all available functions for each category here
    var scraperCategories = {
        games: {
            fitgirl: scraper_fitgirl,
            steamunlocked: scraper_steamunlocked,
        },
        anime: {},
        movies: {},
    };

    // filter functions for specific category
    var scraperFunctions = scraperCategories[category];

    var selectedWebsite = document.querySelector(".selectWebsite").value;
    var searchSection = document.querySelector(".searchTerm").parentNode;

    if (selectedWebsite == "all") {
        for (var eachFunc in scraperFunctions) {
            await scraperFunctions[eachFunc](searchSection);
        }
    } else {
        await scrapeFunctions[siteSelection](searchSection);
    }
}

module.exports = scrapeSites;
