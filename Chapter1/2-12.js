let firstCount = +prompt("Enter the first count");
let secondCount = +prompt("Enter the second count");
let thirdCount = +prompt("Enter the third count");

alert(firstCount ?? secondCount ?? thirdCount);         //Ищет первое определённое значение != null | undefined
alert(firstCount || secondCount || thirdCount);         //Ищет первое истинное значение, не отличая false, 0, null, undefined и ""
//?? не пишется вместе с &&