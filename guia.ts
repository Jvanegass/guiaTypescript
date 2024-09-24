// Ejercicio 1: Clase CabeceraPagina
class CabeceraPagina {
    private titulo: string;
    private color: string;
    private fuente: string;
    private alineacion: 'izquierda' | 'centro' | 'derecha';

    constructor(titulo: string, color: string, fuente: string, alineacion: 'izquierda' | 'centro' | 'derecha') {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
        this.alineacion = alineacion;
    }

    public imprimirPropiedades(): void {
        const headerElement = document.getElementById('header');
        if (headerElement) {
            headerElement.innerText = this.titulo;
            headerElement.style.color = this.color;
            headerElement.style.fontFamily = this.fuente;
            headerElement.style.textAlign = this.getAlineacion();
        }
    }

    private getAlineacion(): string {
        switch (this.alineacion) {
            case 'centro':
                return 'center';
            case 'izquierda':
                return 'left';
            case 'derecha':
                return 'right';
            default:
                return 'left';
        }
    }
}

// Ejercicio 2: Clase Calculadora
class Calculadora {
    public sumar(a: number, b: number): number {
        return a + b;
    }

    public restar(a: number, b: number): number {
        return a - b;
    }

    public multiplicar(a: number, b: number): number {
        return a * b;
    }

    public dividir(a: number, b: number): number {
        if (b === 0) {
            throw new Error("No se puede dividir entre cero.");
        }
        return a / b;
    }

    public potencia(base: number, exponente: number): number {
        return Math.pow(base, exponente);
    }

    public factorial(n: number): number {
        if (n < 0) {
            throw new Error("El factorial no está definido para números negativos.");
        }
        if (n === 0 || n === 1) {
            return 1;
        }
        let resultado = 1;
        for (let i = 2; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    }
}

// Ejercicio 3: Clase Cancion
class Cancion {
    public titulo: string;
    public genero: string;
    private autor: string;

    constructor(titulo: string, genero: string) {
        this.titulo = titulo;
        this.genero = genero;
        this.autor = ""; // Inicializa el autor como cadena vacía
    }

    public setAutor(autor: string): void {
        this.autor = autor;
    }

    public getAutor(): string {
        return this.autor;
    }

    public mostrarDatos(): void {
        const cancionElement = document.getElementById('cancion');
        if (cancionElement) {
            cancionElement.innerText = `Título: ${this.titulo}, Género: ${this.genero}, Autor: ${this.autor}`;
        }
    }
}

// Ejercicio 4: Clase Cuenta
class Cuenta {
    private nombre: string;
    private cantidad: number;
    private tipoCuenta: string;
    private numeroCuenta: string;

    constructor(nombre: string, cantidad: number, tipoCuenta: string, numeroCuenta: string) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
    }

    public depositar(cantidadDeposito: number): void {
        if (cantidadDeposito < 5) {
            console.log("El valor a depositar debe ser mayor a $5.00");
        } else {
            this.cantidad += cantidadDeposito;
            console.log(`Se ha depositado correctamente $${cantidadDeposito}. Nuevo saldo: $${this.cantidad}.`);
        }
        this.mostrarDatos();
    }

    public retirar(valor: number): void {
        if (this.cantidad <= 0) {
            console.log("No hay efectivo en la cuenta.");
        } else if (valor < 5) {
            console.log("El valor a retirar debe ser mayor a $5.00");
        } else if (valor > this.cantidad) {
            console.log("No hay suficiente saldo para retirar esa cantidad.");
        } else {
            this.cantidad -= valor;
            console.log(`Se ha retirado $${valor}. Saldo restante: $${this.cantidad}.`);
        }
        this.mostrarDatos();
    }

    public mostrarDatos(): void {
        const cuentaElement = document.getElementById('cuerpo-cuenta');
        if (cuentaElement) {
            cuentaElement.innerText = `Nombre: ${this.nombre}, Tipo de cuenta: ${this.tipoCuenta}, Número de cuenta: ${this.numeroCuenta}, Saldo: $${this.cantidad}`;
        }
    }
}

// Ejercicio 5: Clase Persona y Clase Empleado
abstract class Persona {
    protected nombre: string;
    protected apellido: string;
    protected direccion: string;
    protected telefono: string;
    protected edad: number;

    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }

    public esMayorDeEdad(): void {
        if (this.edad >= 18) {
            console.log(`${this.nombre} ${this.apellido} es mayor de edad.`);
        } else {
            console.log(`${this.nombre} ${this.apellido} no es mayor de edad.`);
        }
    }

    public abstract mostrarDatos(): void;
}

// Clase Empleado que hereda de Persona
class Empleado extends Persona {
    private sueldo: number;

    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number, sueldo: number) {
        super(nombre, apellido, direccion, telefono, edad);
        this.sueldo = sueldo;
    }

    public cargarSueldo(sueldo: number): void {
        this.sueldo = sueldo;
    }

    public imprimirSueldo(): void {
        console.log(`El sueldo de ${this.nombre} ${this.apellido} es: $${this.sueldo}`);
    }

    public mostrarDatos(): void {
        const empleadoElement = document.getElementById('empleado');
        if (empleadoElement) {
            empleadoElement.innerText = `Nombre: ${this.nombre}, Apellido: ${this.apellido}, Dirección: ${this.direccion}, Teléfono: ${this.telefono}, Edad: ${this.edad}`;
            this.esMayorDeEdad();
        }
    }
}

// Inicializar la cuenta
let cuenta1: Cuenta;

// Inicializar funciones al cargar la página
window.onload = () => {
    // Ejercicio 1: Inicializar cabecera
    const cabecera = new CabeceraPagina("Bienvenidos a la Calculadora", "blue", "Arial", "centro");
    cabecera.imprimirPropiedades();

    // Ejercicio 2: Inicializar calculadora
    const calculadora = new Calculadora();
    (window as any).realizarOperacion = (operacion: string) => {
        let resultado: number | string;
        try {
            switch (operacion) {
                case 'sumar':
                    resultado = calculadora.sumar(5, 3);
                    break;
                case 'restar':
                    resultado = calculadora.restar(10, 4);
                    break;
                case 'multiplicar':
                    resultado = calculadora.multiplicar(7, 6);
                    break;
                case 'dividir':
                    resultado = calculadora.dividir(20, 5);
                    break;
                case 'potencia':
                    resultado = calculadora.potencia(2, 3);
                    break;
                case 'factorial':
                    resultado = calculadora.factorial(5);
                    break;
                default:
                    resultado = 'Operación no reconocida';
            }
        } catch (error) {
            resultado = (error as Error).message;
        }
        document.getElementById('result')!.innerText = `Resultado: ${resultado}`;
    };

    // Ejercicio 3: Inicializar canción
    const cancion = new Cancion("Bohemian Rhapsody", "Rock");
    cancion.setAutor("Queen");
    cancion.mostrarDatos();

    // Ejercicio 4: Inicializar empleado
    const empleado = new Empleado("Juan", "Martinez", "San Martin", "789-1234", 30, 2500);
    empleado.mostrarDatos();
    empleado.imprimirSueldo();

    // Ejercicio 5: Inicializar cuenta
    cuenta1 = new Cuenta("Juan Martinez", 100, "Ahorros", "123456789");
    cuenta1.mostrarDatos();
};

// Funciones para depositar y retirar en la cuenta
(window as any).depositar = () => {
    const cantidadDeposito = parseFloat((document.getElementById('cantidad-deposito') as HTMLInputElement).value);
    cuenta1.depositar(cantidadDeposito);
};

(window as any).retirar = () => {
    const cantidadRetiro = parseFloat((document.getElementById('cantidad-retiro') as HTMLInputElement).value);
    cuenta1.retirar(cantidadRetiro);
    cuenta1.retirar(cantidadRetiro);
};
