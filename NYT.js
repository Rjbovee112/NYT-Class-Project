var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=IpG44rHfGTHu1tDo8AEfuzr0PT2ZEOds"
var apiKey = "IpG44rHfGTHu1tDo8AEfuzr0PT2ZEOds"

var searchTerm = $('#search-term').val();
var startYear = $('#start-year').val();
var endYear = $('#end-year').val();
var search = $('#run-search').val();
var clearResults = $('#clear-all').val();

function clear() {
    $('#articleSection').empty();
}


function buildQueryURL() {
    var myKey = "IpG44rHfGTHu1tDo8AEfuzr0PT2ZEOds"
    var searchTerm = $('#search-term').val();
    var startYear = $('#start-year').val();
    var endYear = $('#end-year').val();
    var search = $('#run-search').val();
    var clearResults = $('#clear-all').val();
    var nytimes = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"
    var url = nytimes + "q=" + searchTerm + "begin_date=" + startYear + "&end_date=" + endYear + "&api_keys=" + myKey;
    console.log(url)
    return url;
}

$('#run-search').on('click', function () {
    event.preventDefault()
    var url = buildQueryURL()
    console.log(url)
})



$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
})
