//Plotly.newPlot("myplot", [{x: [5, 7, 9], y: [10, 20, 30]}]);

//var trace = [{
    //x: ["burrito", "pizza", "chicken"],
    //y: [10, 18, 5],
    //type: "bar"
//}];

//Plotly.newPlot("plotArea", trace);

var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "pie"
   };
   var data = [trace];
   var layout = {
    title: "'Pie' Chart",
    xaxis: {title: "Drinks"},
    yaxis: {title: "% of Drinks Ordered"}
   };
   Plotly.newPlot("plotArea", data, layout);