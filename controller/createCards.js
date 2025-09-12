const cardsSection = document.getElementById("cards");

export function createCards() {
    for (let i = 0; i < 15; i++) {
        let card = document.createElement('div');
        card.className = 'card';

        let nomeJogador = document.createElement('h2');
        nomeJogador.textContent = 'Zico';

        let imagem = document.createElement('img');
        imagem.src = 'zico.webp';

        let idolo = document.createElement('p');
        idolo.textContent = 'Ídolo da nação';

        let dataChegada = document.createElement('p');
        dataChegada.textContent = 'Data de chegada ao clube: 03/03/1953';

        let dataSaida = document.createElement('p');
        dataSaida.textContent = 'Data de saída do clube: 06/01/1990'

        card.appendChild(nomeJogador);
        card.appendChild(imagem);
        card.appendChild(idolo);
        card.appendChild(dataChegada);
        card.appendChild(dataSaida);

        cardsSection.appendChild(card);
    }
}