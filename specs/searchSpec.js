var weatherBasepage = require('../pages/WeatherBasepage.js');

describe ('base page search feature', function(){
  it ('should submit location to search', function(){
    weatherBasepage.get();
    weatherBasepage.setSearch("Portland, OR");

  expect(weatherBasepage.savedLocations).toEqual(weatherBasepage.getName());
  });
});
