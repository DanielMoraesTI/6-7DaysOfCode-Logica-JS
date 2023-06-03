let corrida = [];
let acao = [];
let fps = [];
let aventura = [];
let nomeJogo = "";
let categoria = "";
let nome = prompt('Qual o seu nome?');

let adicionarJogo = "sim";
while(adicionarJogo != "não"){
    adicionarJogo = prompt(`${nome}, você deseja adicionar jogo na lista de compras? Responda: 'sim' ou 'não.`);
    while (adicionarJogo != "sim" && adicionarJogo != "não") { 
	alert(`Por favor, responda sim ou não.`);
        adicionarJogo = prompt(`${nome}, você deseja adicionar um Jogo na lista de compras? Responda: 'sim' ou 'não.`);
    }
	
    if (adicionarJogo === "não"){
        break;
    }
	
    nomeJogo = prompt(`${nome}, qual Jogo você deseja inserir?`);
    categoria = prompt("Em qual categoria esse jogo se encaixa: 'xbox', 'ps', 'nintendo' ou 'pc'?");
    if(categoria === 'xbox'){
        xbox.push(nomeJogo);
    } else if (categoria === 'ps'){
        ps.push(nomeJogo);
    } else if (categoria === 'nintendo'){
        nintendo.push(nomeJogo);
    } else if (categoria === 'pc'){
        pc.push(nomeJogo);
    } else {
        alert("Essa categoria não foi pré-definida.")
    }
}
alert(`Lista de Jogos:\n  Xbox: ${xbox}\n  PS: ${ps}\n  Nintendo: ${nintendo}\n  PC: ${pc}`);