
let objBotao = document.getElementById('botao');
objBotao.addEventListener("click", function(){



let objRaio = document.getElementById("raio");
objParag = document.getElementById("conteiner");
let raio = objRaio.value;

let area = Math.PI * Math.pow(raio, 2);

objParag.setAttribute("class", "mostra");

area = area.toFixed(1)

//troca o ponto decimal pela virgula
area = area.replace("." , ",");
objParag.innerHTML = "A área do circulo de raio = " + raio + " cm vale " + area + "cm&sup2;";
});