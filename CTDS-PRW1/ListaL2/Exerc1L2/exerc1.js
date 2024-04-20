function ProcessarTriangulo(){
    objHipotenusa = document.getElementById("hipotenusa");
    objCateto     = document.getElementById("cateto");
    objAltura     = document.getElementById("altura");
    objParag      = document.getElementById("conteiner")

    let hipotenusa = objHipotenusa.value;
    let cateto     = objCateto.value;
    let altura     = objAltura.value;

    let area, mensagem;

    //calcular a area do triângulo
    area = (cateto * altura) / 2;
    
    //testar se o triângulo é isósceles
    if(hipotenusa == cateto || hipotenusa == altura || cateto == altura){
         mensagem = "Sim, o triângulo testato é isósceles";
    }
    else{
         mensagem = "Não, o triângulo testado não é isósceles";
    }
    //mostrar o parágrafo
    objParag.setAttribute("class", "mostra");
    objParag.innerHTML = "A área do triângulo fornecido vale = " + area + "<br>" + mensagem;
}



//asssociando o botão html ao objeto botão no JS
let objBotao = document.getElementById('botao');


//associar o método addEventListener() ao objeto botão 
objBotao.addEventListener("click", ProcessarTriangulo)