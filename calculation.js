var data = [[], [], []];
var typeOptions = ["4 * 2", "3 * 2", "5 * 3"];

function createTable() {
  var length = Number(document.getElementById("length").value);
  var pieceCount = Number(document.getElementById("pCount").value);
  if (!length || !pieceCount) {
    return;
  }

  var typeValue = Number(document.getElementById("type").value);
  var optionType = document.getElementById("type");
  var selectedOption = optionType.selectedIndex;
  var type = optionType[selectedOption].dataset.optionType;
  var total = (length * typeValue * pieceCount) / 144;
  data[selectedOption].push({ length, type, pieceCount, total });

  tableGeneration();
}

function tableGeneration() {
  var fullTable = "";
  var totalCf = 0;

  data.forEach((currentTable, index) => {
    if (currentTable.length) {
      var totalCF = 0;
      let tableGenerate =
        `<h4>Type - ` +
        typeOptions[index] +
        `</h4><table width="80%" border="1">
  <thead>
  <tr style="text-align:left">
	  <th>Length</th>
	  <th>Type</th>
	  <th>Piece Count</th>
	  <th>Total</th>
	  </tr>
  </thead>
  <tbody>`;

      for (let { length, type, pieceCount, total } of currentTable) {
        totalCF += total;
        tableGenerate +=
          `<tr style="text-align:left">
	<td>` +
          length +
          `</td>
	<td>` +
          type +
          `</td>
	<td>` +
          pieceCount +
          `</td>
	  <td>` +
          total +
          `</td>
  </tr>`;
      }
      tableGenerate +=
        `</tbody>
    </table> <p>This Table Total <b>` +
        totalCF +
        `</b></p>`;

      fullTable += tableGenerate;
      totalCf += totalCF;
    }
  });

  document.getElementById("tableGenerate").innerHTML = fullTable;
  document.getElementById("totalcf").innerHTML =
    "Your Total Cf <b>" + totalCf + "</b>";
}
