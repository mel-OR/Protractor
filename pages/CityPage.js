var WeatherBasepage = require ("./pages/WeatherBasepage.js");

var CityPage = function (){
  var nowLocation = element(by.className("h4 today_nowcard-location"));


};
CityPage.prototype = weatherHomepage;
module.exports = new CityPage();
