import { buscarImformacoes } from "../services/cards_services.js";

const cardsSection = document.getElementById("cards");

export async function createCards() {
    let bdCards = await buscarImformacoes();
    for (let i = 0; i < bdCards.length; i++) {
        let card = document.createElement('div');
        card.className = 'card flip-card';

        let nomeJogador = document.createElement('h2');
        nomeJogador.textContent = bdCards[i].nome;

        let imagem = document.createElement('img');
        imagem.src = bdCards[i].imagem;

        let idolo = document.createElement('p');
        idolo.textContent = bdCards[i].dataNascimento;

        let dataChegada = document.createElement('p');
        dataChegada.textContent = bdCards[i].periodo;

        let descricao = document.createElement('p');
        descricao.className = 'descricao'; 
        descricao.textContent = bdCards[i].descricao;

        card.appendChild(nomeJogador);
        card.appendChild(imagem);
        card.appendChild(idolo);
        card.appendChild(dataChegada);
        card.appendChild(descricao);

        cardsSection.appendChild(card);
    }
}
