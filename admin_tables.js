import { ref, set } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { db } from "./firebase.js";

const raceBody = document.getElementById("raceBody");

for (let i = 1; i <= 5; i++) {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${i}</td>
    <td><input id="r${i}l1" type="number"></td>
    <td><input id="r${i}l2" type="number"></td>
    <td><input id="r${i}l3" type="number"></td>
  `;
  raceBody.appendChild(tr);
}

window.saveRounds = () => {
  const data = {};
  for (let i = 1; i <= 5; i++) {
    data[i] = {
      lane1: document.getElementById(`r${i}l1`).value || "-",
      lane2: document.getElementById(`r${i}l2`).value || "-",
      lane3: document.getElementById(`r${i}l3`).value || "-"
    };
  }

  set(ref(db, "rounds"), data)
    .then(() => alert("✅ บันทึกข้อมูลแล้ว"))
    .catch(err => alert(err.message));
};
