// window.addEventListener("load", start);
/*
Ao utilizar a palavra chave defer na tag script do html, 
o navegador vai invocar o script após todo o DOM estar carregado.
Mas precisa lembrar de chamar a função start() ao final do arquivo javascript.
*/

function start() {
    const slider = document.querySelector("#slider");
    slider.addEventListener("change", getValue);
}

function getValue(event) {
    var value = event.target.value;
    const number = document.querySelector("#number");
    const textNumber = document.querySelector("#text_number");
    number.value = parseInt(value);
    textNumber.value = numberToText(value);
}

function numberToText(number) {
    if (number == "0") {
        return "zero";
    }
    if (number == "100") {
        return "cem";
    }
    var centenas, dezenas, unidades;
    switch (number.length) {
        case 3:
            centenas = number.substring(0, 1);
            dezenas = number.substring(1, 2);
            unidades = number.substring(2);
            console.log(`centenas: ${centenas}, dezenas: ${dezenas}, unidades:${unidades}`);
            break;
        case 2:
            centenas = 0;
            dezenas = number.substring(0, 1);
            unidades = number.substring(1);
            console.log(`centenas: ${centenas}, dezenas: ${dezenas}, unidades:${unidades}`);
            break;
        case 1:
            centenas = 0;
            dezenas = 0;
            unidades = number;
            console.log(`centenas: ${centenas}, dezenas: ${dezenas}, unidades:${unidades}`);
            break;
        default:
            break;
    }
    
    centenas = parseInt(centenas)*100;
    dezenas = parseInt(dezenas)*10;
    unidades = parseInt(unidades);

    if (centenas === 0 && dezenas <= 10) {
        
        console.log("número de 1 a 19");
        return extensoDe1a19(dezenas+unidades);
    }

    if (centenas === 0 && dezenas >= 2) {
        if (unidades === 0){
            return extensoDe20a90(dezenas);
        }
        return extensoDe20a90(dezenas) + " e " + extensoDe1a19(unidades);
        // console.log(extenso);
    }

    if (centenas >= 1) {
        if (dezenas === 0 && unidades === 0){
            return extensoDe100a900(centenas);
        }
        if (dezenas <= 10){
            return `${extensoDe100a900(centenas)} e ${extensoDe1a19(dezenas+unidades)}`;
        }
        if (dezenas >= 20){
            if (unidades === 0){
                return `${extensoDe100a900(centenas)} e ${extensoDe20a90(dezenas)}`;
            } else {
                return `${extensoDe100a900(centenas)} e ${extensoDe20a90(dezenas)} e ${extensoDe1a19(unidades)}`;
            }
        }
    }

    function extensoDe1a19(number){
        var extenso1a19 = ['um','dois','três','quatro','cinco','seis','sete','oito','nove','dez','onze','doze','treze','quatorze','quinze','dezesseis','dezessete','dezoito','dezenove'];
        var key = parseInt(number)- 1;
        return extenso1a19[key];
    }

    function extensoDe20a90(number){
        var extenso20a90 = ['vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'];
        var key = number/10 - 2;
        return extenso20a90[key];
    }

    function extensoDe100a900(number){
        var extenso100a900 = ['cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos'];
        var key = number/100 - 1;
        return extenso100a900[key];
    }

}

start();