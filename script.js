/* 
Minimální velikost pro králíky:
https://www.pdsa.org.uk/pet-help-and-advice/looking-after-your-pet/rabbits/creating-the-ideal-home-for-your-rabbits
10ft x 6ft x 3ft/3m x 2m x 1m
3 * 2 = 6 m2 (jeden králík)
*/

// Funkce pro generování Fibonacciho posloupnosti
function generateFibonacci(n) {
    divFibonacci.innerHTML = "";
    let a = 1, b = 1, num = 0, temp;
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

        num += a * 2;

        temp = a + b;
        a = b;
        b = temp;
        i++;
    }
    return num;
}

// Spuštění generování Fibonacciho posloupnosti s 6 prvky
const divFibonacci = document.getElementById("fibonacci");
const n = document.getElementById("meters");
const btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    let meters = parseInt(n.value);

    if (meters < 12) {
        divFibonacci.innerHTML = "Pár králíků se nemůže vejít na pozemek";
    }
    else {
        meters = (meters / 12) - 1;
        num = generateFibonacci(meters);
        console.log("Králíci =" + " " + num);
        num = num * 6;
        console.log("Rozměr =" + " " + num);
        console.log("Meters =" + " " + meters);
        generateFibonacci(meters);
    }
    console.log("");
});