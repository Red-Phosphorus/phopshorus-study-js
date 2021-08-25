let sayHi = function(){                                                  //Function Expression, то есть функциональное выражение, объявляемое локально
    alert("Hello");
}
let func = sayHi;
alert(func());


let question = confirm("Do you want to take a ticket? Take it!");        //Function Arrow
let getTicket = () => alert("Now you have the ticket")   
alert(getTicket());      


let sum = (a, b) => a + b;

let fN = +prompt("First number");
let sN = +prompt("Second number");

alert(sum(fN, sN));


let action = (question, yes, no) => (confirm(question) == true) ? yes() : no();

action("You want it?",
    () => alert("Yep!"),
    () => alert("Nope!"),
);
