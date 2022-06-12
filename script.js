let prato;
let bebida;
let sobremesa;

function selecionarComida(elemento) {
    prato = document.querySelector(".comidaSelecionada");
    if (prato !== null) {
        prato.classList.remove("comidaSelecionada");
    }
    elemento.classList.add("comidaSelecionada");
}

function selecionarBebida(elemento) {
    bebida = document.querySelector(".bebidaSelecionada");
    if (bebida !== null) {
        bebida.classList.remove("bebidaSelecionada");
    }
    elemento.classList.add("bebidaSelecionada");
}

function selecionarSobremesa(elemento) {
    sobremesa = document.querySelector(".sobremesaSelecionada");
    if (sobremesa !== null) {
        sobremesa.classList.remove("sobremesaSelecionada");
    }
    elemento.classList.add("sobremesaSelecionada");
}

function finalizarPedido() {
    prato = document.querySelector(".comidaSelecionada");
    bebida = document.querySelector(".bebidaSelecionada");
    sobremesa = document.querySelector(".sobremesaSelecionada");
    
    if ((prato !== null) && (bebida !== null) && (sobremesa !== null)) {
        const elemento = document.querySelector(".finalizar");
        elemento.classList.add("pedido-completo");
        elemento.innerHTML = 'Fechar pedido';
    }
}