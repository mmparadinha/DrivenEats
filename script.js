let comida;
let bebida;
let sobremesa;
let comidaEscolhida;
let bebidaEscolhida;
let sobremesaEscolhida;
let custoComida;
let custoBebida;
let custoSobremesa;

function selecionarComida(elemento) {
    comida = document.querySelector(".comidaSelecionada");
    if (comida !== null) {
        comida.classList.remove("comidaSelecionada");
    }
    elemento.classList.add("comidaSelecionada");
    comidaEscolhida = elemento.getElementsByTagName("h1")[0].innerHTML;
    custoComida = Number(elemento.getElementsByTagName("p")[0].innerHTML);
}

function selecionarBebida(elemento) {
    bebida = document.querySelector(".bebidaSelecionada");
    if (bebida !== null) {
        bebida.classList.remove("bebidaSelecionada");
    }
    bebidaEscolhida = elemento.getElementsByTagName("h1")[0].innerHTML;
    custoBebida = Number(elemento.getElementsByTagName("p")[0].innerHTML);
}

function selecionarSobremesa(elemento) {
    sobremesa = document.querySelector(".sobremesaSelecionada");
    if (sobremesa !== null) {
        sobremesa.classList.remove("sobremesaSelecionada");
    }
    sobremesaEscolhida = elemento.getElementsByTagName("h1")[0].innerHTML;
    custoSobremesa = Number(elemento.getElementsByTagName("p")[0].innerHTML);
}

function finalizarPedido() {
    comida = document.querySelector(".comidaSelecionada");
    bebida = document.querySelector(".bebidaSelecionada");
    sobremesa = document.querySelector(".sobremesaSelecionada");

    if ((comida !== null) && (bebida !== null) && (sobremesa !== null)) {
        const elemento = document.querySelector(".finalizar");
        elemento.classList.add("pedido-completo");
        elemento.innerHTML = 'Fechar pedido';
    }
}

function enviarPedido(elemento) {
    const custoTotal = custoComida + custoBebida + custoSobremesa;

    if (elemento.innerHTML === 'Fechar pedido') {
        window.open(`https://wa.me/5554996301243?text=Olá,+gostaria+de+fazer+o+pedido:%0a-+Prato:+${comidaEscolhida}%0a-+Bebida:+${bebidaEscolhida}%0a-+Sobremesa:+${sobremesaEscolhida}%0aTotal:+R$+${custoTotal}`)
    }
}