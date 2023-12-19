// filterTable()

function filterTable(group) {
  const table = document.getElementById("functionsTable");
  const rows = table.getElementsByTagName("tr");

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const groupCell = row.cells[1].textContent.toLowerCase();

    if (group === 'all' || groupCell === group.toLowerCase()) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  }
}