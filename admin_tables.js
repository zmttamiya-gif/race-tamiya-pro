const raceBody = document.getElementById("raceBody");

for (let i = 1; i <= 5; i++) {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${i}</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
  `;
  raceBody.appendChild(tr);
}
