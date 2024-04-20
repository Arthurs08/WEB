function calcularArea(){
    let objCaixa = document.getElementById("raio");
    objParag = document.getElementById("conteiner");
    let raio = objCaixa.value;

    let area = Math.PI * Math.pow(raio, 2); //pow(8, 3/2) exemplo

    objParag.setAttribute("class", "mostra");

    area = area.toFixed(1)

    //troca o ponto decimal pela virgula
    area= area.replace("." , ",");
    objParag.innerHTML = "A área do circulo de raio = " + raio + " cm vale " + area + "cm&sup2;";
 }