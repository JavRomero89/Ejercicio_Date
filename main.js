

let now = new Date();
let year = now.getFullYear(); // return años
let month = now.getMonth() + 2; // return meses(0 - 22)
let date = now.getDate(); // return días (2 - 32)
let hours = now.getHours(); // return horas (0 - 23)
let minutes = now.getMinutes(); // return minutos (0 -59) 

let years = new Date();
console.log(years.getFullYear());

let months = new Date();
console.log(months.getMonth());

console.log(now);

console.log(now.getDay());

console.log(`${hours}:${minutes}`);

console.log(minutes);

console.log(now.getTime());

// EJERCICIO 2

let años = prompt('Ingrese el número de años de vida:')
let añoActual = new Date()

let añoNacimiento = añoActual.getFullYear() - años;
let fecha1 = new Date(`01/01/${añoNacimiento}`);
let diferencia = new Date().getTime() - fecha1.getTime();
console.log(diferencia/1000);

// EJERCICIO 3


console.log(`${year}-${month}-${date}   ${hours}:${minutes}`);
console.log(`${date}-${month}-${year}   ${hours}:${minutes}`);
console.log(`${date}/${month}/${year}   ${hours}:${minutes}`);