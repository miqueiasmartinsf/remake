let arrJogadores = [];
let jogadorNovo  = {}
let jogadorNovoElement = null;



function addJogador(){

    let listaJogadores = document.getElementById('listaJogadores');
    

    jogadorNovo.posicaoJogador = document.getElementById('posicaoJogador').value;

    jogadorNovo.nomeJogador = document.getElementById('nomeJogador').value;

    jogadorNovo.numeroJogador = document.getElementById('numeroJogador').value;

    
    arrJogadores.push(jogadorNovo);

    console.log(arrJogadores);
    console.log(jogadorNovo);

    jogadorNovoElement = document.createElement('li');
    jogadorNovoElement.innerText = jogadorNovo.posicaoJogador + ': ' + jogadorNovo.nomeJogador + ' (' + jogadorNovo.numeroJogador + ')'

    listaJogadores.appendChild(jogadorNovoElement);

    return jogadorNovoElement, jogadorNovo

    

}

function removeJogador(){

    let listaJogadores = document.getElementById('listaJogadores');
    let jogadorRemovido = document.getElementById('jogadorRemovido').value;

    if(jogadorRemovido == arrJogadores.numeroJogador){
        listaJogadores.removeChild(jogadorNovoElement);
    }


    for(let i = 0; i < arrJogadores.length; i++){
        if(jogadorRemovido == arrJogadores[i].numeroJogador){
            listaJogadores.removeChild(jogadorNovoElement);
        }
    }


    
    

    console.log(arrJogadores);
    
    





}