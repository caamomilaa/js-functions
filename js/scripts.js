// function printOne() {
//     console.log(1);}

// printOne();


function printNumber(numberA, numberB){
    const result = numberA + numberB;
    console.log('El resultado es ' + result); 
}

printNumber(1, 3)

// 1️⃣ Camila atiende 120 llamadas en 4 horas. ¿Cuántas llamadas atiende por hora?

function totalCalls (calls, hours){
    const result = calls / hours;
    console.log('Camila atiende '+result +' llamadas por hora.');
    
}
totalCalls(120, 4)

// 2️⃣ Bego compró 5 cajas de lápices. Cada caja tiene 12 lápices. ¿Cuántos lápices tiene en total?

function totalPencils (boxes, pencils){
    const result= boxes * pencils;
    console.log('Bego tiene ' +result+' lápices.');
}
totalPencils (5, 12);

// 3️⃣ Camila tiene 25 caramelos y quiere repartirlos en grupos de 4. ¿Cuántos caramelos le sobrarán después del reparto?

function leftCandys (candys, groups){
    const result = candys % groups;
    console.log('Sobra '+ result +' caramelo.');
}
leftCandys(25,4)

// 4️⃣ Sabrina recorre 90 kilómetros en 3 horas. ¿Cuántos kilómetros recorre en 2 horas?

function totalKilometers (kilometers, hours){
    const result = kilometers
}