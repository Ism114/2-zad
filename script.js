function horse() {
const chess = [
    ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8'],
    ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8'],
    ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8'],
    ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8'],
    ['E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8'],
    ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8'],
    ['G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8'],
    ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8'],
];

var  b, c;
var theHorse = document.getElementById("alp").value;
var solveArray = [];

//Находим в массиве chess положение коня и записываем в переменные a и b
    for (var j = 0; j < chess.length; j++)
    for (var i = 0; i < chess.length; i++)

if (chess[i][j] === theHorse)    {b=i;c=j}  ;    


// Если нашли,	перебираем  8 вариантов хода. 
 if (typeof b == 'undefined' )   alert('Введите корректное значение')
else 	 {
		if ((b + 2) < 8 && (c + 1) < 8 ) 
			solveArray[solveArray.length] = chess[b+2][c+1]+' '; 
		// Если координаты принадлежат шахматной доске, 
		// записываем значение элемента массива chess в массив solveArray
	if ((b + 2) < 8 && ((c - 1) >= 0) ) 
			solveArray[solveArray.length] = chess[b+2][c-1]+' ';
		
		if ((b + 1) < 8 && (c + 2) < 8 ) 
			solveArray[solveArray.length] = chess[b+1][c+2]+' ';
	if ((b + 1) < 8 && (c - 2) >= 0 ) 
			solveArray[solveArray.length] = chess[b+1][c-2]+' ';
		
		if ((b -2) >=0 && (c + 1) < 8 ) 
			solveArray[solveArray.length] = chess[b-2][c+1]+' ';
	if ((b - 2) >= 0 && (c - 1) >= 0 ) 
			solveArray[solveArray.length] = chess[b-2][c-1]+' ';
		
		if ((b - 1) >=0 && (c + 2) < 8 ) 
			solveArray[solveArray.length] = chess[b-1][c+2]+' ';
	if ((b - 1) >= 0 && (c - 2) >=0 ) 
			solveArray[solveArray.length] = chess[b-1][c-2]+' ';
	
	alert(solveArray); // Выводим массив с координатами ходов
	
}  ;  
}
