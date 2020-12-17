// Create a copy of the data
var tableData = data;

//show the table 
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

var filterobject = {};

//get the filtered entry and call multifilter function
function filterinput(){
  var changedelement = d3.select(this).select("input");
  var elementvalue = changedelement.property("value");
  var filterid = changedelement.attr("id");
  if (elementvalue){
    filterobject[filterid] = elementvalue;
  }
  else {
    delete filterobject[filterid];
  }
multifilter();
}

//filters data according to the entry
function multifilter(){
  var filterdata = tableData;
  Object.entries(filterobject).forEach(([key, value]) => {
  filterdata = filterdata.filter(rowobject => rowobject[key] === value);
  });

  console.log(filterdata);

  //write filtered table to html
  showTable(filterdata);
};


d3.selectAll(".filter").on("change", filterinput);


