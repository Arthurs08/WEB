function finalizarCompra(){

    let objProduto1 = document.getElementById('produto1');
    let objProduto2 = document.getElementById('produto2');
    let objParag = document.getElementById('conteiner');
    let objSaldo = document.getElementById('saldo');

    let Saldo = objSaldo.value;
    let Produto1 = objProduto1.value;
    let Produto2 = objProduto2.value;
    console.log(Saldo)

    Produto1 = parseFloat(Produto1);
    Produto2 = parseFloat(Produto2);


    let soma = Produto1 + Produto2;
    if (Saldo > soma){
        Saldo = soma - Saldo;
        objParag.setAttribute("class", "mostra");
        objParag.innerHTML = "Compra efetuada com sucesso! <br>Valor 1° Produto: " + Produto1 + "<br>Valor 2° Produto: " + Produto2 + "<br>Saldo final do cliente:" + Saldo;
    }
    else{
        objParag.setAttribute("class", "mostra");
        objParag.innerHTML = "Informar ao cliente que o saldo é insuficiente para a compra!";
    }
}



objBotao = document.getElementById('botao');
objBotao.addEventListener('click', finalizarCompra);