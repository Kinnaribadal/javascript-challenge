// Create a copy of the data
var tableData = data;

function showTable(tableData){
  var tbody = d3.select(".table").select("tbody");
  tbody.html("");
  tableData.forEach((x) => {
    var row = tbody.append("tr");
    Object.entries(x).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};

//write table to html
showTable(tableData);

//listen for filter button
var button1 = d3.select("#filter-btn");
button1.on("click", function() {
  // Select the input element and get the raw HTML node
  var inputElement1 = d3.select("#datetime");
    var inputValue = inputElement1.property("value");
    var filteredData = tableData.filter(function(event){
        if(inputValue !== null && inputValue !== ''){
            return event.datetime === inputValue;};
          return event.datetime;
        });

  //write filtered table to html
  showTable(filteredData);
});

//clear form filters and show full table
function resetForm(element) {
  element.form.reset();
  showTable(tableData);
};
