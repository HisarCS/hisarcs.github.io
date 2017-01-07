function createTable(tableData) {
  var table = document.createElement('table');
  var tableBody = document.createElement('tbody');
  tableData.forEach(function(rowData) {
    var row = document.createElement('tr');
    rowData.forEach(function(cellData) {
      var cell = document.createElement('td');
      cell.appendChild(document.createTextNode(cellData));
      row.appendChild(cell);
    });
    tableBody.appendChild(row);
  });
  table.appendChild(tableBody);
  document.body.appendChild(table);
}
function start(){
  createTable([["row 1, cell 1", "row 1, cell 2"], ["row 2, cell 1", "row 2, cell 2"]]);
}
