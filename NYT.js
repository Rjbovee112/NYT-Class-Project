var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=IpG44rHfGTHu1tDo8AEfuzr0PT2ZEOds"
var apiKey = "IIpG44rHfGTHu1tDo8AEfuzr0PT2ZEOds"

var searchTerm = $('#search-term').val();
var startYear = $('#start-year').val();
var endYear = $('#end-year').val();
var search = $('#run-search').val();
var clearResults = $('#clear-all').val();

function clear() {
    $('#articleSection').empty();
}

function updatePage(NYTData) {
    var numArticles = $('#article-count').val();
    for (var i = 0; i < numArticles; i++) {

    }
}


function buildQueryURL() {
    var myKey = "IIpG44rHfGTHu1tDo8AEfuzr0PT2ZEOds"
    var searchTerm = $('#search-term').val();
    var startYear = $('#start-year').val();
    var endYear = $('#end-year').val();
    var search = $('#run-search').val();
    var clearResults = $('#clear-all').val();
    var nytimes = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"
    var url = nytimes + "q=" + searchTerm + "begin_date=" + startYear + "&end_date=" + endYear + "&api_keys=" + myKey;
    console.log(url)
    return url;

    if (parseInt(startYear)) {
        startYear = startYear + "0101";
    }

    if (parsenInt(endYear)) {
        endYear = endYear + "0101";
    }
}



$('#run-search').on('click', function () {
    event.preventDefault()
    clear();
    var queryUrl = buildQueryURL()
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(updatePage()) {
    });
});








