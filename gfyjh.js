document.getElementById('Busca').addEventListener('submit', function(event) {
    event.preventDefault();

    const termoBusca = document.getElementById('campoBusca').value.trim();
    
    if (termoBusca === '') {
        alert('Por favor, digite um nome de jogador.');
        return;
    }

    
    const endpoint = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${termoBusca}`;

    fetch(endpoint)
        .then(resposta => resposta.json())
        .then(dados => {
            exibirResultados(dados);
        })
        .catch(erro => {
            console.error('Erro ao buscar dados:', erro);
            alert('Ocorreu um erro ao buscar informações. Tente novamente mais tarde.');
        });
});

function exibirResultados(dados) {
    const containerResultados = document.getElementById('resultados');
    containerResultados.innerHTML = ''; 

    if (!dados.player) {
        containerResultados.innerHTML = '<p>Nenhuma informação encontrada para este termo de busca.</p>';
        return;
    }

    const jogador = dados.player[0]; 

    const nomeJogador = jogador.strPlayer;
    const timeJogador = jogador.strTeam;
    const posicaodejogador = jogador.strPosition;
    const nacionalidadeJogador = jogador.strNationality;
    const valordejogador = jogador.strSigning;
    const alturadejogador = jogador.strHeight;
    const pesoodejogador = jogador.strWeight;
    const instadejogador = jogador.strInstagram;
    const descricaoJogador = jogador.strDescriptionEN;
   
    console.log(jogador.strCutout);

    const jogadorHTML = `<img src=${jogador.strCutout}></img>
                        <h2>${nomeJogador}</h2>
                        <p><strong>Time:</strong> ${timeJogador}</p>
                        <p><strong>Posição:</strong> ${posicaodejogador}</p>
                        <p><strong>Nacionalidade:</strong> ${nacionalidadeJogador}</p>
                        <p><strong>Valor de Mercado:</strong> ${valordejogador}</p>
                        <p><strong>Altura:</strong> ${alturadejogador}</p>
                        <p><strong>Peso:</strong> ${pesoodejogador}</p>
                        <p><strong>Instagram:</strong> ${instadejogador}</p>
                        <p><strong>Descrição:</strong> ${descricaoJogador}</p>`
        

    containerResultados.innerHTML = jogadorHTML;
}




    