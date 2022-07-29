function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
    if (elemento = !mull && elementoName === "audio") {
        elemento.play();
    } else {
        console.log("elemento not found");
    }
}
const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaDeTeclas.length; i++) {

    const tecla = listaDeTeclas[i];
    const intrumento = tecla.classList[1];
    //Template String
    const idAudio = `#som_${intrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }

        tecla.onkeyup = function () {
            tecla.classList.remove('ativa');

        }
    }

}
