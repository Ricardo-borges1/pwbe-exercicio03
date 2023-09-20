/****************************************************
* Objetivo: Calcular a tabuada.
* Data: 20/09/23
* Autor: Ricardo Borges
* Versão: 1.0
*****************************************************/

const calcularTabuadaModule = require('./module/calcularTabuada');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularTabuada() {
    rl.question('Digite a tabuada inicial (valores entre 2 e 100): ', (tabuadaInicial) => {
        tabuadaInicial = parseInt(tabuadaInicial);

    if (isNaN(tabuadaInicial) || tabuadaInicial < 2 || tabuadaInicial > 100) {
    console.log('Tabuada inicial inválida. Deve estar entre 2 e 100.');
    rl.close();
    return;
        }

        rl.question('Digite a tabuada final (valores entre 2 e 100): ', (tabuadaFinal) => {
            tabuadaFinal = parseInt(tabuadaFinal);

            if (isNaN(tabuadaFinal) || tabuadaFinal < 2 || tabuadaFinal > 100) {
                console.log('Tabuada final inválida. Deve estar entre 2 e 100.');
                rl.close();
                return;
            }

            rl.question('Digite o contador inicial (valores entre 0 e 50): ', (contadorInicial) => {
                contadorInicial = parseInt(contadorInicial);

                if (isNaN(contadorInicial) || contadorInicial < 0 || contadorInicial > 50) {
                    console.log('Contador inicial inválido. Deve estar entre 0 e 50.');
                    rl.close();
                    return;
                }

                rl.question('Digite o contador final (valores entre 1 e 50): ', (contadorFinal) => {
                    contadorFinal = parseInt(contadorFinal);

                    if (isNaN(contadorFinal) || contadorFinal < 1 || contadorFinal > 50) {
                        console.log('Contador final inválido. Deve estar entre 1 e 50.');
                        rl.close();
                        return;
                    }

                    calcularTabuadaModule.calcularTabuada(tabuadaInicial, tabuadaFinal, contadorInicial, contadorFinal);
                    rl.close();
                });
            });
        });
    });
}

calcularTabuada();
