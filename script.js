const tabela = document.querySelector('.tabela')
const tabelaAcao = document.getElementById('tabelaAcao')
const tabelaSentimento = document.getElementById('tabelaSentimento')
const tabelaComentarios = document.getElementById('tabelaComentarios')
const tabelaInteresse = document.getElementById('tabelaInteresse')


const data = await fetch('https://dashboard.nbshare.io/api/v1/apps/reddit')
    .then((response) => response.json())
    .then((valor) => valor)

console.log(data)


function criarTabela(array) {
    for (let i = 0; i < array.length; i++) {
        const linha = document.createElement('tr')
        const acao = document.createElement('td')
        const sentimento = document.createElement('td')
        const comentarios = document.createElement('td')
        const interesse = document.createElement('td')

        linha.classList.add('linha')
        acao.classList.add('acao')
        sentimento.classList.add('sentimento')
        comentarios.classList.add('comentarios')
        interesse.classList.add('interesse')

        tabela.appendChild(linha)
        linha.appendChild(acao)
        linha.appendChild(sentimento)
        linha.appendChild(comentarios)
        linha.appendChild(interesse)

        acao.innerHTML = array[i].ticker
        if (array[i].sentiment === "Bullish") {
            sentimento.innerText = array[i].sentiment	
            linha.style.background = '#00fa9a'
        } else {
            sentimento.innerText = array[i].sentiment	
            linha.style.background = '#f08080'
        }
        comentarios.innerHTML = array[i].no_of_comments
        interesse.innerHTML = `${array[i].sentiment_score * 100}% `

    }
}

criarTabela(data)