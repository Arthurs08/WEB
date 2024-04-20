function converterTemp(){
    let objTempF = document.getElementById('tempF');
    let objParag = document.getElementById('conteiner');
    let TempF    = objTempF.value;
    let TempC    = (5/9) * (TempF - 32);

    TempC = TempC.toFixed(1);

    objParag.setAttribute("class", "mostra");
    objParag.innerHTML = "Dados da conversão termométrica: <br> Temperatura em °F = " + TempF + "°F <br> Temperatura convertida em °C = " + TempC + "°C";
}



let objBotao = document.getElementById('botao');
objBotao.addEventListener("click", converterTemp);