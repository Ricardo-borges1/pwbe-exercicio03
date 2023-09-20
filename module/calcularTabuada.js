const readline = require('readline');

const teclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularTabuada(tabuadaInicial, tabuadaFinal, contadorInicial, contadorFinal) {
    for (let tabuada = tabuadaInicial; tabuada <= tabuadaFinal; tabuada++) {
        console.log(`Tabuada do [${tabuada}]`);

        for (let n = contadorInicial; n <= contadorFinal; n++) {
            console.log(`${tabuada} x ${n} = ${tabuada * n}`);
        }

        console.log();
    }
}

function solicitarEntrada() {
    teclado.question('Digite a tabuada inicial (entre 2 e 100): ', (tabuadaInicial) => {
        tabuadaInicial = parseInt(tabuadaInicial);

        if (isNaN(tabuadaInicial) || tabuadaInicial < 2 || tabuadaInicial > 100) {
            console.log('Tabuada inicial inválida. Deve estar entre 2 e 100.');
            solicitarEntrada();
            return;
        }

        teclado.question('Digite a tabuada final (entre 2 e 100): ', (tabuadaFinal) => {
            tabuadaFinal = parseInt(tabuadaFinal);

            if (isNaN(tabuadaFinal) || tabuadaFinal < 2 || tabuadaFinal > 100) {
                console.log('Tabuada final inválida. Deve estar entre 2 e 100.');
                solicitarEntrada();
                return;
            }

            teclado.question('Digite o contador inicial (entre 0 e 50): ', (contadorInicial) => {
                contadorInicial = parseInt(contadorInicial);

                if (isNaN(contadorInicial) || contadorInicial < 0 || contadorInicial > 50) {
                    console.log('Contador inicial inválido. Deve estar entre 0 e 50.');
                    solicitarEntrada();
                    return;
                }

                teclado.question('Digite o contador final (entre 1 e 50): ', (contadorFinal) => {
                    contadorFinal = parseInt(contadorFinal);

                    if (isNaN(contadorFinal) || contadorFinal < 1 || contadorFinal > 50) {
                        console.log('Contador final inválido. Deve estar entre 1 e 50.');
                        solicitarEntrada();
                        return;
                    }

                    calcularTabuada(tabuadaInicial, tabuadaFinal, contadorInicial, contadorFinal);
                    teclado.close();
                });
            });
        });
    });
}

module.exports = {
    solicitarEntrada
};