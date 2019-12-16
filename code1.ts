export class Calculadora {
    resultado: number;
    constructor(presultado: number) {
    this.resultado = presultado;
    }

    let calc: Calculadora = new Calculadora(3);
calc.somar(5)
calc.subtrair(2)
calc.multiplicar(3)
calc.dividir(2)
alert(calc.mostrarResultado())