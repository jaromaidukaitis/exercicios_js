/* var num = document.getElementById("numero").value;
var result; */

function dobro(num) {
	var num = document.getElementById("numero").value;
	var result;
	result = num * 2;
	document.getElementById("numero").value = result;
}

function metade(num) {
	var num = document.getElementById("numero").value;
	var result;
	result = num / 2;
	document.getElementById("numero").value = result;
}
