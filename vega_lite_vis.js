//Embedd muliple visualiztions

//Line 1 defines a variable called “vg_1” which contains the location of the Vega-Lite JSON file. 
//This file name should be the same as the file you created in Section 3.1 – Method 2 (Figure 3).

//Line 2 embeds the Vega-Lite visualisation stored in “vg_1” in the div container named “bar_chart” (do not forget the “#” key before the div name).


var vg_1 = "total_number_of_disasters_occur_each_year.vg.json";
vegaEmbed("#line_chart", vg_1).then(function(result) {
// Access the Vega view instance
//(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "natural_disasters_contributes_to_death.vg.json";
vegaEmbed("#pie_chart", vg_2).then(function(result) {
// Access the Vega view instance
//(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_3 = "people_affected_by_disasters_2020.vg.json";
vegaEmbed("#map1", vg_3).then(function(result) {
// Access the Vega view instance 
//(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
