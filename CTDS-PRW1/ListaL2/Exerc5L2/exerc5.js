
function contarCaracteres(){

    let objProduto = document.getElementById('nome');
    let objParag = document.getElementById('conteiner');
    let tamanhoNome, nomeDoProduto;

    nomeDoProduto = objProduto.value;

    //vamos fazer o JS dispensar os caracteres em branco antes da primeira letra do nome do produto e após a última letra do nome do produto
    nomeDoProduto = nomeDoProduto.trim();

    tamanhoNome = nomeDoProduto.length;

    objParag.setAttribute("class", "mostra");
    objParag.innerHTML = "Resultado da contagem de caracteres: <br>Nome do produto= " + nomeDoProduto + "<br>Número de caracteres do nome = " + tamanhoNome;
}



objBotao = document.getElementById('botao');
objBotao.addEventListener('click', contarCaracteres);