// Funkce pro generování Fibonacciho posloupnosti
function generateFibonacci(n) {
    let a = 1, b = 1, temp;
    let i = 0;
    while (i <= n) {
        let j = 0;
        let str = "";
        while (j<a){
            str += "🐇"
            j++;
        }
        console.log(a);
        temp = a + b;
        a = b;
        b = temp;
        i++;
    }
}


// Spuštění generování Fibonacciho posloupnosti s 6 prvky
const n = 6;
generateFibonacci(n);