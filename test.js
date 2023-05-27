const SerpApi = require('google-search-results-nodejs');
const search = new SerpApi.GoogleSearch("0a6d975a83104757692bd4b17ac21144f517e7ece4ddccb549ca94913cbcf2f6");

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