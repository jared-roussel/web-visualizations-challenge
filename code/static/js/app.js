//Create dropdown options
var dropdownOptions = d3.select(#selDataset);
d3.json("samples.json").then(function(data) {
  var options = data.names;
  options.forEach((sample) => {dropdownOptions.append("selection").text(sample).property("value", sample);
});
}

//Charts values
d3.json("samples.json").then(function(data) {
  var samples = data.samples;
  var otu_ids = sample.otu_ids;
  var otu_labels = sample.otu_labels;
  var values = sample.values;

});



  