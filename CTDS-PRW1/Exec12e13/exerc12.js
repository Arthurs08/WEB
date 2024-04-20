function calcularMedia(){
    let objCaixaNome = document.getElementById("nome");
    let objCaixaNota1 = document.getElementById('nota1');
    let objCaixaNota2 = document.getElementById('nota2');
    let objCaixaNota3 = document.getElementById('nota3');
    let objParag = document.getElementById('conteiner')

    let nome = objCaixaNome.value;
    let nota1 = objCaixaNota1.value;
    let nota2 = objCaixaNota2.value;
    let nota3 = objCaixaNota3.value;
    let media;

    nota1 = parseFloat(nota1);
    nota2 = parseFloat(nota2);
    nota3 = parseFloat(nota3);



    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)){
        objParag.innerHTML = "Algum valor digitado não é um número!";
        objParag.setAttribute("class", "mostra");
    }
    else{
        media=(nota1 + nota2 + nota3)/3;
        media = media.toFixed(1);
    }

    if (media > 6.0){
        objParag.setAttribute("class", "mostra");
        objParag.innerHTML = "A média final da(o) " + nome + " é " + media + "<br> Ele(a) está APROVADO(A)";
    }
    else{
        objParag.setAttribute("class", "mostra");
        objParag.innerHTML = "A média final da(o) " + nome + " é " + media + "<br> Ele(a) está REPROVADO(A)";
    }
 }