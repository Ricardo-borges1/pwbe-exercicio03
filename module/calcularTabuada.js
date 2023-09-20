function calcularTabuada(tabuadaInicial, tabuadaFinal, contadorInicial, contadorFinal) {
    
    for (let tabuada = tabuadaInicial; tabuada <= tabuadaFinal; tabuada++) {
        console.log(`Tabuada do [${tabuada}]`);

        for (let n = contadorInicial; n <= contadorFinal; n++) {
            console.log(`${tabuada} x ${n} = ${tabuada * n}`);
        }

        console.log(); 
    }
}

module.exports = {
    calcularTabuada
};