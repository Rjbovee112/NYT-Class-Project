var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=IpG44rHfGTHu1tDo8AEfuzr0PT2ZEOds"
var apiKey = "IpG44rHfGTHu1tDo8AEfuzr0PT2ZEOds"

var searchTerm = $('#search-term').val();
var startYear = $('#start-year').val();
var endYear = $('#end-year').val();
var search = $('#run-search').val();
var clearResults = $('#clear-all').val();



$('#run-search').on('click', function () {
    event.preventDefault()
    var search = $('#search-term').val();
})



$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
})
