function playSound(idSound){
    document.querySelector(idSound).play();
}

const listaDeBotoes = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeBotoes.length; contador++) {

    const botao = listaDeBotoes[contador];
    const instrumento = botao.classList[1];
    const idSound = `#som_$(instrumento)`; //template string
        botao.onclick = function () {
        playSound(idSound);
    }
  
}
