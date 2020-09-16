// from data.js
let tableData = data;

// YOUR CODE HERE!
let tbody = d3.select("tbody");
function TableDataNew(data){
    
    data.forEach((ufo1) => {
        let row = tbody.append("tr");
        Object.entries(ufo1).forEach(([key, value]) => {
        let cell = row.append("td");
        cell.text(value);
        });
    });
}
TableDataNew(tableData);

let inputField = d3.select("#datetime");
let button = d3.selectAll("filter-btn");
function eventHandler(){
    d3.event.preventDefault();
    tbody.text("");
    let filteredData = tableData.filter(data => data.datetime === inputField.property("value"));
    console.log(filteredData);
    TableDataNew(filteredData);
}
  

button.on("click", eventHandler);
inputField.on("change", eventHandler);