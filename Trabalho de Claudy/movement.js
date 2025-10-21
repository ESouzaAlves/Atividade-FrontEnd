function verificarPedido() {

    var pedido = document.getElementById("pedidoInput").value.toLowerCase();

    var escolhadocliente = document.getElementById("escolhadocliente");

    if (pedido === "pão com ovo") {
        escolhadocliente.textContent = "Isso é Café da Manhã!";
    } else if (pedido === "feijão com arroz") {
        escolhadocliente.textContent = "Isso é Almoço!";
    } else {
        escolhadocliente.textContent = "Isso é Janta!"
    }
}