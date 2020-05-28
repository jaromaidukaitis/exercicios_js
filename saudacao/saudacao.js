/* function saudar() {
	var nome = document.getElementById("nome").value;
	var boasvindas = "Olá, " + nome + ", seja muito bemv indo!";
	document.getElementById("saudacaotexto").textContent = boasvindas;
}
 */

function saudar() {
	var nome = document.querySelector("#nome").value;
	var saudacao = document.getElementById("saudacaotexto");
	saudacao.innerHTML = `Olá, seja bem vindo, ${nome}`;
}
