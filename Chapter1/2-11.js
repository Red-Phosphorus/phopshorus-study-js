alert("May I come in?");

let hour = prompt("What time is it now?");

if (hour < 9 || hour > 22){                         //Оператор || (ИЛИ)
  alert("Nope, it doesn't work now.");
} else alert("Yep, you can.");


let minute = +prompt("What is the minute now?");
alert(`Now is a ${hour}:${minute}, by the way`)     //Оператор && (И)

let number = +prompt("Say random number");
let newNumber = !number;                            //Перевод в логику и newNumber = false, если число не ноль 
let x = !!5;                                        //!! переводит значение в булевый тип
