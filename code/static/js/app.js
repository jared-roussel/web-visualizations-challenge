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
  var otu_ids = samples.otu_ids;
  var otu_labels = samples.otu_labels;
  var values = samples.values;

});

var bubbleLayout = {
  margin: { t: 0 },
  xaxis: { title: "OTU ID" },
  hovermode: "closest",
  };

  //Convert to a list
  var dataBubble = [ 
  {
    x: otu_ids,
    y: values,
    text: otu_labels,
    mode: "markers",
    marker: {
      color: otu_ids,
      size: values,
      }
  }
];

Plotly.newPlot("bubble", dataBubble, bubbleLayout);

  