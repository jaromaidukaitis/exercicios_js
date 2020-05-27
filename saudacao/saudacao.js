function saudacao() {
	var nome = document.getElementById("nome").value;
	var boasvindas = "Olá, " + nome + ", seja muito bemvindo!";
	document.getElementById("saudacaotexto").textContent = boasvindas;
}
