//Create dropdown options
var dropdownOptions = d3.select(#selDataset);
d3.json("samples.json").then(function(data) {
  var options = data.names;
  options.forEach((sample) => {dropdownOptions.append("selection").text(sample).property("value", sample);
});
}




  