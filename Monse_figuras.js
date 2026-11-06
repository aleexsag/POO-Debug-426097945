// Archivo asignado a: Monse
// Objetivo: que el programa corra sin errores en Node.js

class Figura {
    constructor(nombre) {
        this.nombre = nombre
    }

    calcularArea() {
        throw new Error("Metodo no implementado")
    }

    calcularPerimetro() {
        throw new Error("Metodo no implementado")
    }
}

class Hexagono extends Figura {

    constructor(lado) {
        // ERROR: Faltaba llamar a super() para inicializar la clase padre 
        // y pasarle el nombre si no Node.js lanza Error al usar 'this'.
        super("Hexagono")
        this.lado = lado
    }

    calcularArea() {
        return (3 * Math.sqrt(3) * this.lado ** 2) / 2
    }

    calcularPerimetro() {
        return 6 * this.lado
    }
}

class Pentagono extends Figura {

    constructor(lado) {
        super("Pentagono")
        // ERROR: '#lado' por 'this.lado' 
        // con campos privados no declarados fuera del constructor
        this.lado = lado
    }

    calcularArea() {
        // [ERROR ARREGLADO]: Se actualizo a 'this.lado'.
        return (Math.sqrt(25 + 10 * Math.sqrt(5)) * this.lado ** 2) / 4
    }

    calcularPerimetro() {
        // [ERROR ARREGLADO]: Se actualizó a 'this.lado'.
        return 5 * this.lado
    }
}

const hexagono = new Hexagono(5)
const pentagono = new Pentagono(5)

console.log("=== FIGURAS GEOMETRICAS ===")

console.log("\nHexagono:")
console.log("Area:", hexagono.calcularArea())
console.log("Perimetro:", hexagono.calcularPerimetro())

console.log("\nPentagono:")
console.log("Area:", pentagono.calcularArea())
console.log("Perimetro:", pentagono.calcularPerimetro())