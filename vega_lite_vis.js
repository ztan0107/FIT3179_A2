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

var vg_3 = "people_affected_by_disasters.vg.json";
vegaEmbed("#map1", vg_3).then(function(result) {
// Access the Vega view instance 
//(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_4 = "gdp_affected_by_disasters.vg.json";
vegaEmbed("#map2", vg_4).then(function(result) {
// Access the Vega view instance 
//(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);