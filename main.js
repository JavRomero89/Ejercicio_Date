let years = new Date();
console.log(years.getFullYear());

let months = new Date();
console.log(months.getMonth());

let now = new Date();
console.log(now);

let day = new Date();
console.log(day.getDay());

let hour = day.getHours(); 
let minute = day.getMinutes();

console.log(`${hour}:${minute}`);

console.log(minute);

console.log(now.getTime());

// EJERCICIO 2


// EJERCICIO 3

// let Today = new Date();
let year = now.getFullYear(); // return años
let month = now.getMonth() + 2; // return meses(0 - 22)
let date = now.getDate(); // return días (2 - 32)
let hours = now.getHours(); // return horas (0 - 23)
let minutes = now.getMinutes(); // return minutos (0 -59) 

console.log(`${year}/${month}/${day}   ${hours}:${minutes}`);
console.log(`${day}/${month}/${year}   ${hours}:${minutes}`);
console.log(`${day}/${month}/${day}   ${hours}:${minutes}`);