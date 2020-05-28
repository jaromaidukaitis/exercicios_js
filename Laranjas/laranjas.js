function dividirLaranjas() {
	var totalLaranjas = document.getElementById("qtdLaranjas").value;
	var totalVizinhos = document.getElementById("qtdVizinhos").value;
	var resultadoDivisao = document.querySelector("#resultadodivisao");
	var sobraDivisao = document.querySelector("#sobradivisao");

	var divisao = totalLaranjas / totalVizinhos;
	divisao = Math.trunc(divisao);
	var sobra = totalLaranjas % totalVizinhos;

	if (divisao == 0) {
		resultadoDivisao.innerHTML = `Nenhum vizinho receberá laranjas.`;
	} else if (divisao == 1) {
		resultadoDivisao.innerHTML = `Cada vizinho receberá ${divisao} laranja`;
	} else {
		resultadoDivisao.innerHTML = `Cada vizinho receberá ${divisao} laranjas.`;
	}

	if (sobra == 0) {
		sobraDivisao.innerHTML = ``;
	} else if (sobra == 1) {
		sobraDivisao.innerHTML = ` Sobrará ${sobra} laranja!`;
	} else {
		sobraDivisao.innerHTML = ` Sobrarão ${sobra} laranjas!`;
	}
}
