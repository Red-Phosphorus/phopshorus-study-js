let questionAge = prompt("How old are you?", "");

if (questionAge > 18){                                         //Ветвление if-else
    alert("Access granted!");
} else if (questionAge == 18){
    alert("Access granted, newcomer!");
} else alert("Access denied!");

let firstOperand = +prompt("Enter the first number");
let secondOperand = +prompt("Enter the second one");


let result = firstOperand + secondOperand;                      //Ветвление с "?"
(result < 10) ? alert("This number is less than ten") :
    (result > 10) ? alert("This number is bigger than ten") :
        alert("This number is ten");

