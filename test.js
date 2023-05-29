const SerpApi = require('google-search-results-nodejs');
const search = new SerpApi.GoogleSearch("no api key for you!");

const params = {
  q: "Coffee",
  hl: "en",
  gl: "us"
};

const callback = function(data) {
  console.log(data);
};

// Show result as JSON
search.json(params, callback);