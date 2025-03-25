function generateFibonacci() {
    let n = document.getElementById("fibonacciInput").value;
    let hasil = [0, 1];

    for (let i = 2; i < n; i++) {
        hasil.push(hasil[i - 1] + hasil[i - 2]);
    }

    document.getElementById("fibonacciResult").innerText = hasil.join(", ");
}