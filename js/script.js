// scripts.js

var a = prompt('Enter a');
var	b = prompt('Enter b');
var	value =  (a * a) - (2 * a * b) + (b * b);

console.log('value((a * a) - (2 * a * b) + (b * b)) with base a: ' + a + ' and  b: ' + b + ' is equal to: ' + value);

if ( (value > 0) ) {
	
	alert('Result(wynik dodatni) = ' + value);
	console.log('wynik dodatni');
} else if ( (value < 0) ) {
	
	alert('Result (wynik ujemny) = ' + value);
	console.log('wynik ujemny');
}else {
	alert('Result (wynik = 0) = ' + value);
	console.log('wynik = 0');
}