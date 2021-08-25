let stringWord = "Слово"
stringWord = Boolean(stringWord);
stringWord = Number(stringWord);
alert(stringWord);

let strictCompare = (undefined == null);   //Строгое сравнение, результат - true
alert(`${strictCompare},  так как оба типа равны по значению относительно логики`)
let laxCompare = (undefined === null);     //Нестрогое сравнение, результат - false
alert(`${laxCompare}, так как это всё же разные типы, несмотря на значения относительно логики`);