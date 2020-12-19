// Create a copy of the data
var tableData = data;

//function created to show table
function displayTable(tableData){
  var tbody = d3.select(".table").select("tbody");
  tbody.html("");
  //using the forEach function
  tableData.forEach((entry) => {
    var row = tbody.append("tr");
    Object.entries(entry).forEach(([key, value]) => {
      var cellValue = row.append("td");
      cellValue.text(value);
    });
  });
};

//write table to html
displayTable(tableData);

//listen for filter button
var button1 = d3.select("#filter-btn");
button1.on("click", function() {
  // Select the input element and get the raw HTML node
  var inputElement1= d3.select("#datetime");
    var inputValue = inputElement1.property("value");
    var filteredData = tableData.filter(function(event){
        if(inputValue !== null && inputValue !== ''){
            return event.datetime === inputValue;};
          return event.datetime;
        });

  //write filtered table to html
  displayTable(filteredData);
});

//clear form filters and show full table
function resetForm(element) {
  element.form.reset();
  displayTable(tableData);
};
