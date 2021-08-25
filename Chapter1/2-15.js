let a = +prompt("Enter the number");
let b = +prompt("Enter the power");

function power(){
    let result = a;                         //function степень
    for (let i = 1; i < b; i++){
        result *= a;
    }
    return result;
}

if (b < 1){
    alert(`Степень ${b} не поддерживается, только натуральное число`);
}   else alert(power());

function checkAge(age) {                                                //function и return
    return (age > 18) ? true : confirm('Родители разрешили?');
};


let firstNumber = +prompt("Enter the first number");
let secondNumber = +prompt("Enter the second one");

function leastNumber(){                             //function минимальное число
    if (firstNumber < secondNumber){
        return alert(`First number is bigger than second one (${firstNumber}>${secondNumber})`);
    } else if (firstNumber > secondNumber){
        return alert(`First number is less than second one (${firstNumber} < ${secondNumber})`);
    } else return alert(`Both numbers are equal (${firstNumber} = ${secondNumber})`);
};

alert(leastNumber());