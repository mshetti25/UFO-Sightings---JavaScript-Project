// from data.js
let tableData = data;

// YOUR CODE HERE!
let tbody = d3.select("tbody");
function TableDataNew(data){
    
    data.forEach((ufo2) => {
        let row = tbody.append("tr");
        Object.entries(ufo2).forEach(([key, value]) => {
        let cell = row.append("td");
        cell.text(value);
        });
    });
}
TableDataNew(tableData);


function eventHandler(event){
    let DataFilter = tableData;
    
    DataFilter = applyFilter("datetime", DataFilter, (row, value) => row.datetime === value);
    DataFilter = applyFilter("city", DataFilter, (row, value) => row.city === value);
    DataFilter = applyFilter("state", DataFilter, (row, value) => row.state === value);
    DataFilter = applyFilter("country", DataFilter, (row, value) => row.country === value);
    DataFilter = applyFilter("shape", DataFilter, (row, value) => row.shape === value);

    tbody.text("");
    TableDataNew(DataFilter);
}

function applyFilter(id, tableData, predicate) {
    let field = d3.select("#" + id);
    let value = field.property("value");
    if(value)
    {
        return tableData.filter(data => predicate(data, value));
    }
    return tableData;
}


let button = d3.selectAll("filter-btn");
button.on("click", eventHandler);

let filtered = document.getElementsByClassName("filter");
for (let i = 0; i < filtered.length; i++) {
    filtered[i].addEventListener("change", eventHandler);
}