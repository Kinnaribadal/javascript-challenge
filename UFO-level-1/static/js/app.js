
// from data.js
var tableData = data;

// YOUR CODE HERE!

// Select the button
var button = d3.select("filter-btn");

// Select the table
var form = d3.select("ufo-table");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.tableData("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(tableData = tableData.datetime === inputValue);

  console.log(filteredData);
