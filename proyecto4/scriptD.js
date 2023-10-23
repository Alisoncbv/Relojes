function calcularTiempo(){

    //Guadar hora local del sistema
    let tiempo = new Date();

    //Capturar hora 
    let hora = tiempo.getHours();
    //Capturar minutos
    let minuto = tiempo.getMinutes();
    //Capturar segundo
    let segundo = tiempo.getSeconds();
    let ampm = hora >=12 ? "pm" : "am";

    hora = hora < 10 ? "0" + hora : hora;
    minuto = minuto < 10 ? "0" + minuto : minuto;
    segundo = segundo < 10 ? "0" + segundo : segundo;

    //Concatenar la pantalla del reloj con la hora, minutos y segundos
    let pantallaReloj = hora + ":" + minuto + ":" + segundo + ampm;

    //Guardar reloj 
    let relojDigital = document.querySelector(".relojDi");

    //Enviar informacion a la pantalla 
    relojDigital.innerHTML = pantallaReloj;
}

//llamar función calcularTiempo 
setInterval(calcularTiempo, 1000);