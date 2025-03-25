function hitung() {
    let angka1 = parseFloat(document.getElementById("num1").value);
    let angka2 = parseFloat(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;
    let hasil = 0;

    if (operator === "+") {
        hasil = angka1 + angka2;
    } else if (operator === "-") {
        hasil = angka1 - angka2;
    } else if (operator === "*") {
        hasil = angka1 * angka2;
    } else if (operator === "/") {
        hasil = angka1 / angka2;
    } else if (operator === "%") {
        hasil = angka1 % angka2;
    }

    document.getElementById("hasil").innerText = hasil;
}