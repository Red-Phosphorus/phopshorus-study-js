let browser = prompt("Enter your browser name");            //Пример switch => if

if (browser == "Edge"){
    alert("You've got the Edge");
} else if (browser == "Chrome" 
|| browser == "Firefox" 
|| browser == "Safari" 
|| browser == "Opera"){
    alert("Okay we support these browsers too");
} else alert("We hope that this page looks ok!");


let number = +prompt("Enter your number between 0 and 3"); //Пример if => switch

switch(number){
    case 0:
        alert("You entered the number 0");
        break;

    case 1:
        alert("You entered the number 1");
        break;

    case 2:
    case 3:
        alert("You entered the numbers 2 or 3");
        break;
}