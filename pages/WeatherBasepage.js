

var WeatherBasepage = function() {
  var searchFormClean = element(by.css('input.input--search'));
  var searchFormDirty = element(by.css('input.typeahead__input'));
  var savedLocations = element(by.className('SavedLocations__text'));
  var name = "Portland, OR";

  this.get = function() {
    browser.get('https://weather.com');
  };

  this.setSearch = function(name) {
    searchFormClean.sendKeys(name + protractor.Key.ENTER);
  };

  this.getName = function(){
    return this.name;
  };

};

module.exports = new WeatherBasepage();
