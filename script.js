// Funkce pro generování Fibonacciho posloupnosti
function generateFibonacci(n) {
    const divFibonacci = document.getElementById("fibonacci");
    divFibonacci.innerHTML = "";
    let a = 1, b = 1, temp;
    let i = 0;
    while (i <= n) {
        const divRabbit = document.createElement("div");
        let j = 0;
        let str = "";
        while (j<a){
            str += "🐇🐇";
            j++;
        }
        divRabbit.classList.add("rabbit");
        divRabbit.innerHTML = str;
        divFibonacci.appendChild(divRabbit);
        temp = a + b;
        a = b;
        b = temp;
        i++;
    }
}

// Spuštění generování Fibonacciho posloupnosti s 6 prvky
const n = document.getElementById("months");
const btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    const months = parseInt(n.value);
    if (!isNaN(months) && months > 0) {
        generateFibonacci(months);
    } else {
        alert("Please enter a valid positive number of months.");
    }
});