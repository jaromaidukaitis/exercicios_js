var itens = [false, false, false, false, false]; // [Guarda-chuva, Máscara, Chave do carro, Chave do laboratório, Dinheiro]
var filas = [false, false, false]; // [Preferencial, Caixa Eletrônico, Normal]
var corona = false;
var procurouChefe = false;
var escolhaChefe;
var jaJogou = 0;
var pesquisarVacina = 0;

var btn1 = elementFactory("button", "btn1", "btn", "Iniciar Aventura");
var btn2 = elementFactory("button", "btn2", "btn", "Iniciar Aventura");
var btn3 = elementFactory("button", "btn3", "btn", "Iniciar Aventura");
var p = elementFactory(
	"p",
	"txtId",
	"txtC",
	`Olá, aventureiro! Você está prestes a iniciar uma jornada pelo Mundo de Corona. Escolha sabiamente suas ações e se torne uma lenda entre os vivos!<br>Como pesquisador, seu objetivo é encontrar a cura para o vírus. Mas lembre-se, o tempo é valioso!`
);

btn1.addEventListener("click", iniciarPartida);
btn2.classList.add("hide");
btn3.classList.add("hide");

var text = document.querySelector(".texto");
var btnClass = document.querySelector(".btnDiv");

text.appendChild(p);
btnClass.appendChild(btn1);
btnClass.appendChild(btn2);
btnClass.appendChild(btn3);

function elementFactory(type, id, classe, textContent) {
	var elementCreated = document.createElement(`${type}`);
	elementCreated.setAttribute("id", `${id}`);
	elementCreated.classList.add(`${classe}`);
	elementCreated.innerHTML = `${textContent}`;

	return elementCreated;
}

function deletElement(id, classePai) {
	var element = document.getElementById(`${id}`);
	classePai.removeChild(element);
}

function changeBtn(acao1, acao2, acao3) {
	btn1.addEventListener("click", acao1);
	btn2.addEventListener("click", acao2);
	btn3.addEventListener("click", acao3);
}

function buildLayout(textP, textBtn1, textBtn2, textBtn3) {
	deletElement("btn1", btnClass);
	deletElement("btn2", btnClass);
	deletElement("btn3", btnClass);
	deletElement("txtId", text);
	p = elementFactory("p", "txtId", "txtC", `${textP}`);
	btn1 = elementFactory("button", "btn1", "btn", `${textBtn1}`);
	btn2 = elementFactory("button", "btn2", "btn", `${textBtn2}`);
	btn3 = elementFactory("button", "btn3", "btn", `${textBtn3}`);
	text.appendChild(p);
	btnClass.appendChild(btn1);
	btnClass.appendChild(btn2);
	btnClass.appendChild(btn3);
}

function iniciarPartida() {
	buildLayout(
		"Bom dia, caro Cientista! Qual será sua próxima ação?",
		"Sair de Casa",
		"Ficar em Casa",
		""
	);
	changeBtn(fase1, iniciarPartida);
	btn3.classList.add("hide");
}

function fase1() {
	buildLayout(
		"O mundo lá fora está uma bagunça! Pense bem nos recursos que você irá levar. Sua mochila tem espaço para dois itens.",
		"Guarda-chuva e Máscara",
		"Guarda-chuva e Chave do Carro",
		"Máscara e Chave do Carro"
	);
	changeBtn(opcao1, opcao2, opcao3);
}

function opcao1() {
	buildLayout(
		"Guarda-chuva e Máscara, tem certeza disso?",
		"Sim, sair de casa",
		"Não, escolher novamente",
		""
	);
	changeBtn(fase2, fase1);
	btn3.classList.add("hide");
	itens[0] = true;
	itens[1] = true;
	itens[2] = false;
	console.log(itens);
}

function opcao2() {
	buildLayout(
		"Guarda-chuva e Chave do Carro, tem certeza disso?",
		"Sim, sair de casa",
		"Não, escolher novamente",
		""
	);
	changeBtn(fase2, fase1);
	btn3.classList.add("hide");
	itens[0] = true;
	itens[1] = false;
	itens[2] = true;
	console.log(itens);
}

function opcao3() {
	buildLayout(
		"Máscara e Chave do Carro, tem certeza disso?",
		"Sim, sair de casa",
		"Não, escolher novamente",
		""
	);
	changeBtn(fase2, fase1);
	btn3.classList.add("hide");
	itens[0] = false;
	itens[1] = true;
	itens[2] = true;
	console.log(itens);
}

function fase2() {
	if (itens[0] && itens[1]) {
		buildLayout(
			"Você fez escolhas interessantes, mas precisará se locomover de transporte público",
			"Escolher Destino",
			"",
			""
		);
		changeBtn(paraOnde);
		btn2.classList.add("hide");
		btn3.classList.add("hide");
	} else if (itens[0] && itens[2]) {
		buildLayout(
			"Você saiu sem máscara e o PM viu. Ele mandou você voltar para casa",
			"Voltar para Casa",
			"",
			""
		);
		changeBtn(iniciarPartida);
		btn2.classList.add("hide");
		btn3.classList.add("hide");
	} else {
		buildLayout(
			"Máscaras para proteção e um veículo para locomoção rápida? Sábias escolhas!",
			"Escolher Destino",
			"",
			""
		);
		changeBtn(paraOnde);
		btn2.classList.add("hide");
		btn3.classList.add("hide");
	}
}

function paraOnde() {
	buildLayout(
		"Você já está equipado, agora precisa decidir o seu destino:",
		"Universidade",
		"Brasília",
		"Agência da Caixa"
	);
	changeBtn(irUniversidade, irBrasilia, irAgCaixa);
}

function irUniversidade() {
	buildLayout(
		"Você está chegando no Valonguinho e ouve uma música alta vindo do DCE (Choppada Rolando)",
		"Ir para o DCE",
		"Ir para o laboratório",
		"Escolher novo Destino"
	);
	changeBtn(irDce, irLaboratorio);
	btn3.classList.add("hide");
}

function irDce() {
	if (corona) {
		if (itens[4] >= 20) {
			buildLayout(
				"Festa rolando, muita gente bêbada e corona no ar. Sorte sua que você já foi infectado e ainda possuí os anticorpos",
				"Sair da Festa",
				"Tomar uma Coca-cola geladinha",
				""
			);
			changeBtn(irUniversidade, tomarCoca);
			btn3.classList.add("hide");
		} else {
			buildLayout(
				"Festa rolando, muita gente bêbada e corona no ar. sorte sua que você já foi infecato e ainda possúi os anticorpos, mas você não tem dinheiro para nada.",
				" Sair da Festa",
				"Ficar mais um Pouco",
				""
			);
			changeBtn(irUniversidade, irDce);
			btn3.classList.add("hide");
		}
	} else {
		corona = true;
		buildLayout(
			"Festa rolando, muita gente bêbada e corona no ar. Você logo percebe que isso não foi uma boa idéia, mas já é tarde demais: VOCÊ FOI INFECTADO.<br>Os Hospitais estão lotados, vá para casa e torça para se recuperar sozinho",
			"Ir para casa e tentar se recuperar",
			"",
			""
		);
		changeBtn(fase1);
		btn2.classList.add("hide");
		btn3.classList.add("hide");
	}
}

function tomarCoca() {
	itens[4] -= 20;
	irDce();
}

function irLaboratorio() {
	if (itens[3]) {
		buildLayout(
			"Muito bem, você entrou no laboratório. E agora?",
			"Pesquisar a cura com Cloroquina",
			"Pesquisar Vacina"
		);
		changeBtn(tentarCloroquina, tentarVacina);
		btn3.classList.add("hide");
	} else {
		buildLayout(
			"O laboratório está tracando e só o Chefe do Lab tem a chave. Há rumores de que ele foi para as manifestações em Brasília",
			"Voltar",
			"",
			"",
			""
		);
		changeBtn(paraOnde);
		btn2.classList.add("hide");
		btn3.classList.add("hide");
	}
}

function tentarCloroquina() {
	buildLayout(
		"Você gastou um tempo razoável tentando encontrar uma cura pela Cloroquina, mas não descobriu nada de útil ainda.<br>E agora?",
		"Continuar Pesquisando",
		"Pesquisar Vacina",
		"Sair do laboratório"
	);
	changeBtn(tentarCloroquina, tentarVacina, paraOnde);
}

function tentarVacina() {
	if (pesquisarVacina == 0) {
		buildLayout(
			"Você gastou um tempo razoável tentando encontrar uma vacina que funcione. Não descobriu muito ainda, mas sente que está no caminho certo.<br>E agora?",
			"Continuar Pesquisando",
			"Pesquisar Cloroquina",
			"Sair do Labaoratório"
		);
		changeBtn(tentarVacina, tentarCloroquina, paraOnde);
		pesquisarVacina++;
	} else if (pesquisarVacina < 2) {
		buildLayout(
			"Você está chegando cada vez mais perto de uma vacina confiável, continue tentado",
			"Continuar Pesquisando",
			"Pesquisar Cloroquina",
			"Sair do Labaoratório"
		);
		changeBtn(tentarVacina, tentarCloroquina, paraOnde);
		pesquisarVacina++;
	} else {
		buildLayout(
			"Muito bem, você encontrou a vacina. Junte seus amigos e vá derrotar o Bolsodrácula.",
			"Ir ao Encontro do Bolsodrácula",
			"",
			""
		);
		changeBtn(irBolsodracula);
		btn2.classList.add("hide");
		btn3.classList.add("hide");
	}
}

function irAgCaixa() {
	buildLayout(
		"Você chegou na agência e encontra a seguinte situação:<ol><li>Duas pessoas na fila preferencial;</li><li>Ninguém na fila dos caixas eletrônicos;</li><li>Cinco pessoas na fila normal</li></ol><br>Para qual fila você se dirige?",
		"Fila Preferencial",
		"Caixa Eletrônico",
		"Fila Normal"
	);
	changeBtn(irFilaPreferencial, irCaixaEletronico, irFilaNormal);
}

function irFilaPreferencial() {
	filas[0] = true;
	if (filas[1]) {
		buildLayout(
			"Você espera calmamente a sua vez, ansioso com o tempo passando, até que finalmente chamam sua senha.<i>VOCÊ NÃO DEVERIA ESTAR NESSA FILA. Não posso te atender.</i>",
			"Fila Normal",
			"",
			""
		);
		changeBtn(irCaixaEletronico, irFilaNormal);
		btn2.classList.add("hide");
		btn3.classList.add("hide");
	} else {
		buildLayout(
			"Você espera calmamente a sua vez, ansioso com o tempo passando, até que finalmente chamam sua senha.<i>VOCÊ NÃO DEVERIA ESTAR NESSA FILA. Não posso te atender.</i>",
			"Caixa Eletrônico",
			"Fila Normal",
			""
		);
		changeBtn(irCaixaEletronico, irFilaNormal);
		btn3.classList.add("hide");
	}
}

function irCaixaEletronico() {
	filas[1] = true;
	if (filas[0]) {
		buildLayout(
			"Não é de se estrnanhar que não houvesse fila para os caixas eletrônicos, estão todos desativados;",
			"Fila Normal",
			"",
			""
		);
		changeBtn(irFilaNormal);
		btn2.classList.add("hide");
		btn3.classList.add("hide");
	} else {
		buildLayout(
			"Não é de se estrnanhar que não houvesse fila para os caixas eletrônicos, estão todos desativados;",
			"Fila Preferencial",
			"Fila Normal",
			""
		);
		changeBtn(irFilaPreferencial, irFilaNormal);
		btn3.classList.add("hide");
	}
}

function irFilaNormal() {
	itens[4] = 1000;
	buildLayout(
		"Muito bem, você conseguiu sacar o auxílio emergencial. Faça bom uso dele",
		"Escolher Destino",
		"",
		""
	);
	changeBtn(paraOnde);
	btn2.classList.add("hide");
	btn3.classList.add("hide");
}

function irBrasilia() {
	if (itens[2] && itens[4] < 800) {
		buildLayout(
			"Você pode até ter seu próprio caror, mas sem dinheiro para Gasolina não vai a lugar algum!",
			"Escolher Novo Destino",
			"",
			""
		);
		changeBtn(paraOnde);
		btn2.classList.add("hide");
		btn3.classList.add("hide");
	} else if (itens[2] && itens[4] >= 800) {
		itens[4] -= 800;
		buildLayout(
			"Você tem seu carro e dinheiro para a Gasolina. Aperte o cinto, aí vamos nós",
			"Escolher Destinho em Brasília",
			"",
			""
		);
		changeBtn(emBrasilia);
		btn2.classList.add("hide");
		btn3.classList.add("hide");
		console.log(itens[4]);
	}

	if (itens[2] == false && itens[4] < 500) {
		buildLayout(
			"Você não tem dinheiro para a passagem de ônibus.",
			"Escolher Novo Destino",
			"",
			""
		);
		changeBtn(paraOnde);
		btn2.classList.add("hide");
		btn3.classList.add("hide");
	} else if (itens[2] == false && itens[4] >= 500) {
		buildLayout(
			"O pé na estrada eu vou botar, e já está na hora de ir.",
			"Escolher Destino em Brasília",
			"",
			""
		);
		changeBtn(emBrasilia);
		btn2.classList.add("hide");
		btn3.classList.add("hide");
	}
}

function emBrasilia() {
	if (procurouChefe) {
		buildLayout(
			"Você tem uma pista de que o chefe do laboratório está no meio da multidão no protesto.<br>Qual é a sua próxima ação?",
			"Mandar mensagem de whatsapp",
			"Brigar com os manifestantes. Manifestação é coisa de vagabundo",
			""
		);
		changeBtn(enviarWpp, brigar);
	} else {
		buildLayout(
			"Você tem uma pista de que o chefe do laboratório está no meio da multidão no protesto.<br>Qual é a sua próxima ação?",
			"Procurar por ele",
			"Mandar mensagem de whatsapp",
			"Brigar com os manifestantes. Manifestação é coisa de vagabundo"
		);
		changeBtn(procurarChefe, enviarWpp, brigar);
	}
}

function procurarChefe() {
	procurouChefe = true;
	if (corona) {
		buildLayout(
			"Apesar de estar de máscara, essa não foi uma escolha muito sábia.<br>Sorte que você já foi infectado e ainda tem os anticorpos, mas não é uma boa idéia ficar dando chance",
			"Sair da multidão",
			"",
			""
		);
		changeBtn(emBrasilia);
		btn2.classList.add("hide");
		btn3.classList.add("hide");
	} else {
		buildLayout(
			"Apesar de estar de máscara, essa não foi uma escolha muito sábia.<br>Você contrariu o vírus e sem vaga nos hospitais precisará ir para um Hotel para tentar se recuperar",
			"Ir para um Hotel",
			"",
			""
		);
		changeBtn(irHotel);
	}
}

function irHotel() {
	itens[4] -= 300;
	buildLayout(
		"Você deu sorte e se recuperou do coronavírus, mas passou por maus bocados. E ainda gastou todo seu dinheiro de rapaz trabalhado com as diárias do Hotel",
		"Tentar Falar com o Chefe do Lab",
		"",
		""
	);
	changeBtn(emBrasilia);
	btn2.classList.add("hide");
	btn3.classList.add("hide");
}

function enviarWpp() {
	buildLayout(
		"Seu chefe respondeu e combinou de encontrar com você num bar vazio.",
		"Esperar por ele no Bar",
		"Brigar com os manifestantes. Manifestação é coisa de vagabundo",
		""
	);
	changeBtn(irBar, brigar);
	btn3.classList.add("hide");
}

function irBar() {
	buildLayout(
		`"Você veio até aqui para me encontrar só para pegar a chave do laboratório?<br>Muito bem! Vamos aproveitar esse momento para um desafio.<br>Me vença em uma partida de Jokenpo que eu lhe darei a chave"`,
		"",
		"",
		""
	);
	changeBtn(jogarJokenpo);
	btn2.classList.add("hide");
	btn3.classList.add("hide");
}

function jogarJokenpo() {
	escolhaChefe = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
	if (jaJogou < 1) {
		buildLayout("Jo - Ken - Pô", "Jogar Pedra", "Jogar Papel", "Jogar Tesoura");
		changeBtn(resultadoPedra, resultadoPapel, resultadoTesoura);
		jaJogou++;
		console.log(jaJogou);
		console.log(escolhaChefe);
	} else if (jaJogou < 3) {
		buildLayout(
			`Não foi dessa vez, vamos tentar de novo!<br>Chefe: ${jaJogou}, Você : 0`,
			"Jogar Pedra",
			"Jogar Papel",
			"Jogar Tesoura"
		);
		changeBtn(resultadoPedra, resultadoPapel, resultadoTesoura);
		console.log(jaJogou);
		console.log(escolhaChefe);
		console.log("entrei no else jogo");
		jaJogou++;
	} else {
		itens[3] = true;
		buildLayout(
			"Já jogamos demais, toma logo essa chave e vai fazer suas pesquisas.",
			"Voltar para Niterói",
			"",
			""
		);
		changeBtn(paraOnde);
		btn2.classList.add("hide");
		btn3.classList.add("hide");
	}
}

function resultadoPedra() {
	if (escolhaChefe == 1) {
		itens[3] = true;
		buildLayout(
			"Parabéns, Pedra ganha da Tesoura. Toma aqui a chave e vai fazer suas pesquisas",
			"Voltar para Niterói"
		);
		changeBtn(paraOnde);
		btn2.classList.add("hide");
		btn3.classList.add("hide");
	} else {
		jogarJokenpo();
		console.log("entrei no else pedra");
	}
}

function resultadoPapel() {
	if (escolhaChefe == 2) {
		itens[3] = true;
		buildLayout(
			"Parabéns, Papel ganha da Pedra. Toma aqui a chave e vai fazer suas pesquisas",
			"Voltar para Niterói"
		);
		changeBtn(paraOnde);
		btn2.classList.add("hide");
		btn3.classList.add("hide");
	} else {
		jogarJokenpo();
	}
}

function resultadoTesoura() {
	if (escolhaChefe == 3) {
		itens[3] = true;
		buildLayout(
			"Parabéns, Tesoura ganha do Papel. Toma aqui a chave e vai fazer suas pesquisas",
			"Voltar para Niterói"
		);
		changeBtn(paraOnde);
		btn2.classList.add("hide");
		btn3.classList.add("hide");
	} else {
		jogarJokenpo();
	}
}

function brigar() {
	buildLayout(
		"Você se deparou com um bloqueio. Vou te levar de volta",
		"Escolher Destino em Brasília",
		"",
		""
	);
	changeBtn(emBrasilia);
	btn2.classList.add("hide");
	btn3.classList.add("hide");
}

function irBolsodracula() {
	buildLayout(
		"Você e Bolsodrácula estão cara a cara, a tensão está no ar. Seus amigos fogem, mas você está destinado a coisas maiores, você não pode fugir. Bolsodrácula ajeita sua capa, limpa suas presas e se prepara para atacar.<br> Rápido! O que você faz?",
		"Tentar se Esquivar",
		"Injetar a vacina em você mesmo",
		"Tentar acertar Bolsodrácula com a Vacina"
	);
	changeBtn(round1Esquivar, finalJogo, gameOver);
}

function round1Esquivar() {
	buildLayout(
		"Bolsodrácula, num movimento rápido, parte para o ataque. Com um pouco de agilidade e muita sorte você desvia de suas presas.<br>Novamente, ele te encara e se prepara para atacar.<br>Rápido! O que você faz?",
		"Tentar se Esquivar",
		"Injetar a vacina em você mesmo",
		"Tentar acertar Bolsodrácula com a Vacina"
	);
	changeBtn(gameOverEsquivar, finalJogo, gameOver);
}

function gameOverEsquivar() {
	buildLayout(
		"Quando Bolsodrácula pula para o ataque você ajeita suas pernas para mais um movimento rápido de esquiva, porém seus anos estudando ao invés de praticando esportes cobraram um preço caro. Seu tornozelo não aguenta a pressão do movimento e dobra, ao invés de impulsionar seu corpo para o lado.<br> A última coisa que seus olhos conseguem enxergar é a capa do Bolsodrácula enquanto ele injeta Coronavírus na sua mais forte mutação.<br> GAME OVER!",
		"Reiniciar",
		"",
		""
	);
	changeBtn(iniciarPartida);
	btn2.classList.add("hide");
	btn3.classList.add("hide");
}

function gameOver() {
	buildLayout(
		`Bolsodrácula inicia sua investida contra você. Você, de maneira sorrateira (ao menos foi o que você pensou), esconde a seringa com a vacina na gola da camisa. Bolsodrácula, em um movimento rápido, imboliza você. Você é tomado por um sentimento de esperança e dever cumprido, quando Bolsodrácula parece se preparar para atacar seu pescoço e injetar o Coronavírus na sua mais forte mutação.<br>E 'snap'. Um estalo no pescoço e a vida esvaindo do seu corpo. Bolsodrácula havia percebido o seu movimento não tão sutil.<br>Game Over!`,
		"Reiniciar Partida"
	);
	changeBtn(iniciarPartida);
	btn2.classList.add("hide");
	btn3.classList.add("hide");
}

function finalJogo() {
	buildLayout(
		"Você injeta a vacina na perna, sem que Bolsodrácula perceba. Ele continua sua investida e crava as presas no seu pescoço. A vacina que você descobriu começa a se espalhar pelo corpo do Bolsodrácula e sua forma volta à original. Hitler foi, mais uma vez, vencido antes de dominar o mundo.<br> Você é um Herói Nacional e a humanidade está novamente em segurança.<br> Parabéns!",
		"Jogar de Novo",
		"",
		""
	);
	changeBtn(iniciarPartida);
	btn2.classList.add("hide");
	btn3.classList.add("hide");
}
