var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse(); 

var topSevenCities = sortedCities.slice(0,7);

var topSevenCityNames = cityGrowths.map(city => city.City);
var topSevenCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016));

var traceseven = {
    x: topSevenCityNames,
    y: topSevenCityGrowths,
    type: "bar"
  };
  var data = [traceseven];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);