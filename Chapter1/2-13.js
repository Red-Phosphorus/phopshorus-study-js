let count = 1;

while (count < 4){                                                          //while (цикл)
    alert(`You have notification: ${count}`);
    count++;
};


let money = 1000;
do {                                                                        //do...while (цикл)   (Выполняется минимум 1 раз)
    alert(money);
    money = money + 500;
}   while (money <= 3000);


for (let area = 0; area < 400; area = area + 120){                          //for (цикл) (0.Данные => 1.Действие => 2.Условие => 3.Изменение => снова с 1 по 3 по условию)
    alert(`Your area has been increased for 120 metres: ${area}`);
};


let savings = 0;
while (true){
    let userSavings = +prompt("Make a deposit for savings")
    savings += userSavings;        //savings = savings + userSavings
    if (savings > 5000) break;                                              //break (директива)
    alert(`Your balance is: ${savings}`);
};


for (let userLucky = 1; userLucky <= 15; userLucky++){                       //continue (директива)
    if (userLucky % 3 != 0) continue;
    alert(`Your are the lucky-hand! Every third wins! Contibutor number: ${userLucky}`);
};


path:
for (let travels = 0; travels < 10; travels++) {
    for (let remain = 10; remain > 0; remain--) {
        let way = confirm(`Tap "OK" to ride. Remain: ${remain}. Travels: ${travels}.`)
        if (!way) break path;
   }
}
alert("Nice travel :D")