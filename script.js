function mostrarInfo(tipo){

    const info = document.getElementById("info");

    if(tipo === "compostagem"){
        info.innerHTML =
        "<strong>Compostagem:</strong> transforma restos de alimentos em adubo natural, reduzindo o lixo e enriquecendo o solo.";
    }

    if(tipo === "agua"){
        info.innerHTML =
        "<strong>Economia de Água:</strong> sistemas de captação da água da chuva ajudam na irrigação e diminuem o desperdício.";
    }

    if(tipo === "organico"){
        info.innerHTML =
        "<strong>Adubação Orgânica:</strong> utiliza materiais naturais para nutrir as plantas sem produtos químicos agressivos.";
    }

    if(tipo === "biodiversidade"){
        info.innerHTML =
        "<strong>Biodiversidade:</strong> diferentes espécies atraem polinizadores e fortalecem o equilíbrio ambiental.";
    }
}

function iniciarContador(){

    let numero = 0;
    const contador = document.getElementById("numero");

    const intervalo = setInterval(() => {

        numero++;

        contador.textContent = numero;

        if(numero >= 100){
            clearInterval(intervalo);
        }

    }, 20);
}
