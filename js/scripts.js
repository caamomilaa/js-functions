// 1️⃣ Camila atiende 120 llamadas en 4 horas. ¿Cuántas llamadas atiende por hora?

function getTotalCalls(calls, hours) {
	const totalCalls = calls / hours;
	console.log('Camila atiende ' + totalCalls + ' llamadas por hora.');
}
getTotalCalls(120, 4);

// 2️⃣ Bego compró 5 cajas de lápices. Cada caja tiene 12 lápices. ¿Cuántos lápices tiene en total?

function getTotalPencils(boxes, pencils) {
	const totalPencils = boxes * pencils;
	console.log('Bego tiene ' + totalPencils + ' lápices.');
}
getTotalPencils(5, 12);

// 3️⃣ Camila tiene 25 caramelos y quiere repartirlos en grupos de 4. ¿Cuántos caramelos le sobrarán después del reparto?

function getLeftCandys(candys, groups) {
	const leftCandys = candys % groups;
	console.log('Sobra ' + leftCandys + ' caramelo.');
}
getLeftCandys(25, 4);

// 4️⃣ Sabrina recorre 90 kilómetros en 3 horas. ¿Cuántos kilómetros recorre en 2 horas?

function getlKilometersTraveled(totalKilometers, totalHours, hoursTraveled) {
	const kilometersTraveled = (totalKilometers * hoursTraveled) / totalHours;
	console.log(
		'Sabrina recorre ' + kilometersTraveled + ' kilómetros en 2 horas.'
	);
}
getlKilometersTraveled(90, 3, 2);

// 5️⃣ Macarena cosechó 240 manzanas y las quiere repartir en 8 cajas. ¿Cuántas manzanas tendrá cada caja?

function getHowManyApplesPerBox(apples, boxes) {
	const applesPerBox = apples / boxes;
	console.log('Cada caja tendrá ' + applesPerBox + ' manzanas.');
}
getHowManyApplesPerBox(240, 8);

// 6️⃣ Bego tiene 57 tornillos y quiere guardarlos en cajitas de 10 tornillos cada una. ¿Cuántos tornillos quedarán fuera?

function getScrewsLeft(screws, boxes) {
	const screwsLeft = screws % boxes;
	console.log('Quedarán fuera ' + screwsLeft + ' tornillos.');
}
getScrewsLeft(57, 10);

// 7️⃣ Abby cobra 35 euros por misión. Si hizo 5 misiones en un día, ¿cuánto dinero ganó?

function getTotalEarn(euros, missions) {
	const totalEarn = euros * missions;
	console.log('Ganó ' + totalEarn + ' euros.');
}
getTotalEarn(35, 5);

// 8️⃣ Sabrina horneó 92 galletas y las quiere empaquetar en bolsas de 8 galletas cada una. ¿Cuántas galletas sobrarán?

function getLeftCookies(cookies, bags) {
	const leftCookies = cookies % bags;
	console.log('Sobrarán ' + leftCookies + ' galletas.');
}
getLeftCookies(92, 8);

// 9️⃣ Camila tenía 45 libros y compró 23 más. ¿Cuántos libros tiene ahora?

function getTotalBooks(ownBooks, boughtBooks) {
	const totalBooks = ownBooks + boughtBooks;
	console.log('En total tiene ' + totalBooks + ' libros.');
}
getTotalBooks(45, 23);

// 🔟 Macarena tiene 123 monedas antiguas y quiere exhibirlas en vitrinas con capacidad para 5 monedas cada una. ¿Cuántas monedas no cabrán?

function getLeftCoins(coins, showcase) {
	const leftCoins = coins % showcase;
	console.log('No cabrán ' + leftCoins + ' monedas.');
}
getLeftCoins(123, 5);

// 1️⃣1️⃣ El coche de Bego consume 7 litros de gasolina por cada 100 kilómetros. Si el tanque tiene 42 litros, ¿cuántos kilómetros podrá recorrer?

function getHowManyKmWillTravel(liters, kilometers, litersInTheTank) {
	const howManyKmWillTravel = (litersInTheTank * kilometers) / liters;
	console.log('Podrá recorrer ' + howManyKmWillTravel + ' kilómetros.');
}
getHowManyKmWillTravel(7, 100, 42);

// 1️⃣2️⃣ Sabrina tiene 6 gallineros, y en cada gallinero hay 25 gallinas. ¿Cuántas gallinas tiene en total?

function getTotalChickens(chickenCoop, chickens) {
	const totalChickens = chickens * chickenCoop;
	console.log('En total tiene ' + totalChickens + ' gallinas.');
}
getTotalChickens(6, 25);

// 1️⃣3️⃣ Abby tiene 48 balas y cada cargador de su pistola tiene espacio para 7 balas. ¿Cuántas balas le sobrarán sin cargar?

function getLeftBullets(bullets, charger) {
	const leftBullets = bullets % charger;
	console.log('Le sobrarán ' + leftBullets + ' balas.');
}
getLeftBullets(48, 7);

// 1️⃣4️⃣ Bego corrió 3 kilómetros por la mañana y 4 kilómetros por la tarde. ¿Cuántos kilómetros corrió en total?
function getTotalKmRun(kmInTheMornig, kmInTheAfternoon) {
	const totalKmRun = kmInTheMornig + kmInTheAfternoon;
	console.log('En total corrió ' + totalKmRun + ' kilómetros.');
}
getTotalKmRun(3, 4);

// 1️⃣5️⃣ Camila tiene 100 hojas y quiere agruparlas en pilas de 6. ¿Cuántas hojas quedarán fuera?

function getLeftSheets(sheets, groupOfSheets) {
	const leftSheets = sheets % groupOfSheets;
	console.log('Quedarán ' + leftSheets + ' hojas fuera.');
}
getLeftSheets(100, 6);

// 1️⃣6️⃣ Macarena tiene 30000 euros y quiere repartirlos en 4 cuentas iguales. ¿Cuánto dinero recibirá cada cuenta?

function getMoneyInEveryAccount(euros, accounts) {
	const moneyInEveryAccount = euros / accounts;
	console.log('Cada cuenta recibirá ' + moneyInEveryAccount + ' euros.');
}
getMoneyInEveryAccount(30000, 4);

// 1️⃣7️⃣ Abby mata 5201 infectados cada semana. ¿Cuántos infectados mata al día?

function getInfectedKilledPerDay(infecteds, daysOfAWeek, day) {
	const infectedKilledPerDay = (infecteds * day) / daysOfAWeek;
	console.log('Al día mata ' + infectedKilledPerDay + ' infectados.');
}
getInfectedKilledPerDay(5201, 7, 1);

// 1️⃣8️⃣ Bego tiene 3 paquetes de canicas, cada paquete contiene 24 canicas. ¿Cuántas canicas tiene en total?

function getTotalMarbles(marbles, bagOfMarbles) {
	const totalMarbles = bagOfMarbles * marbles;
	console.log('En total tiene ' + totalMarbles + ' canicas.');
}
getTotalMarbles(24, 3);

// 1️⃣9️⃣ Camila y su hermano juntaron 135 monedas. Si Camila aportó 78 monedas, ¿cuántas monedas puso su hermano?

function getHowManyBrosCoins(camilasCoins, totalCoins) {
	const howManyBrosCoins = totalCoins - camilasCoins;
	console.log('No tengo hermano, pero puso ' + howManyBrosCoins + ' monedas.');
}
getHowManyBrosCoins(78, 135);

// 2️⃣0️⃣ Sabrina tiene 500 piezas de lego y quiere dividirlas en lotes de 80 para construir maquetas. ¿Cuántas piezas le quedarán fuera?

function getLeftPieces(pieces, lots) {
	const leftPieces = pieces % lots;
	console.log('Sobrarán ' + leftPieces + ' piezas.');
}
getLeftPieces(500, 80);

// 2️⃣1️⃣ Macarena quiere repartir 72 galletas entre 9 perros. ¿Cuántas galletas recibirá cada perro?

function getHowManyCookiesPerDog(cookies, dogs) {
	const howManyCookiesPerDog = cookies / dogs;
	console.log('Cada perro recibirá ' + howManyCookiesPerDog + ' galletas.');
}
getHowManyCookiesPerDog(72, 9);

// 2️⃣2️⃣ Abby quiere comprar 5 cuchillos. Si cada uno cuesta 18 euros, ¿cuánto pagará en total?

function getFullPayment(knife, euros) {
	const fullPayment = knife * euros;
	console.log('En total pagará ' + fullPayment + ' euros.');
}
getFullPayment(5, 18);

// 2️⃣3️⃣ Bego tiene 480 galletas y quiere ponerlas en bolsas de 40 galletas cada una. ¿Cuántas bolsas llenará?

function getTotalBagsOfCookies(cookies, bagOfCookies) {
	const totalBagsOfCookies = cookies / bagOfCookies;
	console.log('Llenará ' + totalBagsOfCookies + ' bolsas de galletas.');
}
getTotalBagsOfCookies(480, 40);

// 2️⃣4️⃣ Camila recorrió 1.200 km en un viaje de 4 días. ¿Cuántos kilómetros recorrió por día?

function getKilometersPerDay(totalKilometers, totalDays, days) {
	const kilometersPerDay = (totalKilometers * days) / totalDays;
	console.log('Recorrió ' + kilometersPerDay + ' kilómetros al día.');
}
getKilometersPerDay(1200, 4, 1);

// 2️⃣5️⃣ Sabrina ahorró 120 euros en enero y 85 euros en febrero. ¿Cuánto dinero ha ahorrado en total?

function getTotalSavings(januarySavings, februarySavings) {
	const totalSavings = januarySavings + februarySavings;
	console.log('En total ha ahorrado ' + totalSavings + ' euros.');
}
getTotalSavings(120, 85);

// 2️⃣6️⃣ Macarena tiene 73 caramelos y quiere repartirlos entre sus amigos en grupos de 6. ¿Cuántos caramelos le sobrarán?

function getTotalLeftCandys(candys, groups) {
	const leftCandys = candys % groups;
	console.log('Sobra ' + leftCandys + ' caramelo.');
}
getTotalLeftCandys(73, 6);

// 2️⃣7️⃣ Abby registró 17 casas por la mañana y 8 por la tarde. ¿Cuántas casas registró en total?
function getTotalHousesRegistered(morningRegister, afternoonRegister) {
	const totalHousesRegistered = morningRegister + afternoonRegister;
	console.log('Registró ' + totalHousesRegistered + ' casas.');
}
getTotalHousesRegistered(17, 8);

// 2️⃣8️⃣ Bego tiene 95 fotos y quiere hacer álbumes donde caben 12 fotos en cada uno. ¿Cuántas fotos no podrá guardar en los álbumes?

function getLeftPhotos(photos, albums) {
	const leftPhotos = photos % albums;
	console.log('No podrá guardar ' + leftPhotos + ' fotos.');
}
getLeftPhotos(95, 12);

// 2️⃣9️⃣ Camila tiene un descuento de 15 euros en un producto que cuesta 120 euros. ¿Cuánto cuesta el producto después del descuento?

function getPriceAfterDiscount(discount, price) {
	const priceAfterDiscount = price - discount;
	console.log('El producto valdrá ' + priceAfterDiscount + ' euros.');
}
getPriceAfterDiscount(15, 120);

// 3️⃣0️⃣ Sabrina tiene 500 gramos de harina y quiere hacer porciones de 24 gramos cada una para preparar galletas. ¿Cuánta harina le sobrará después de hacer todas las porciones completas?

function getLeftFlour(gramsOfFlour, gramsPerPortion) {
	const leftFlour = gramsOfFlour % gramsPerPortion;
	console.log('Sobrarán ' + leftFlour + ' gramos.');
}
getLeftFlour(500, 24);
