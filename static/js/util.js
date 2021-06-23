
function getSearch(ele) {
    var searchTerm = ele.querySelector('input');
    searchTerm = searchTerm.value;
    return searchTerm;
}

module.exports = getSearch;
