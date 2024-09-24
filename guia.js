var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Ejercicio 1: Clase CabeceraPagina
var CabeceraPagina = /** @class */ (function () {
    function CabeceraPagina(titulo, color, fuente, alineacion) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
        this.alineacion = alineacion;
    }
    CabeceraPagina.prototype.imprimirPropiedades = function () {
        var headerElement = document.getElementById('header');
        if (headerElement) {
            headerElement.innerText = this.titulo;
            headerElement.style.color = this.color;
            headerElement.style.fontFamily = this.fuente;
            headerElement.style.textAlign = this.getAlineacion();
        }
    };
    CabeceraPagina.prototype.getAlineacion = function () {
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
    };
    return CabeceraPagina;
}());
// Ejercicio 2: Clase Calculadora
var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    Calculadora.prototype.sumar = function (a, b) {
        return a + b;
    };
    Calculadora.prototype.restar = function (a, b) {
        return a - b;
    };
    Calculadora.prototype.multiplicar = function (a, b) {
        return a * b;
    };
    Calculadora.prototype.dividir = function (a, b) {
        if (b === 0) {
            throw new Error("No se puede dividir entre cero.");
        }
        return a / b;
    };
    Calculadora.prototype.potencia = function (base, exponente) {
        return Math.pow(base, exponente);
    };
    Calculadora.prototype.factorial = function (n) {
        if (n < 0) {
            throw new Error("El factorial no está definido para números negativos.");
        }
        if (n === 0 || n === 1) {
            return 1;
        }
        var resultado = 1;
        for (var i = 2; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    };
    return Calculadora;
}());
// Ejercicio 3: Clase Cancion
var Cancion = /** @class */ (function () {
    function Cancion(titulo, genero) {
        this.titulo = titulo;
        this.genero = genero;
        this.autor = ""; // Inicializa el autor como cadena vacía
    }
    Cancion.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    Cancion.prototype.getAutor = function () {
        return this.autor;
    };
    Cancion.prototype.mostrarDatos = function () {
        var cancionElement = document.getElementById('cancion');
        if (cancionElement) {
            cancionElement.innerText = "T\u00EDtulo: ".concat(this.titulo, ", G\u00E9nero: ").concat(this.genero, ", Autor: ").concat(this.autor);
        }
    };
    return Cancion;
}());
// Ejercicio 4: Clase Cuenta
var Cuenta = /** @class */ (function () {
    function Cuenta(nombre, cantidad, tipoCuenta, numeroCuenta) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
    }
    Cuenta.prototype.depositar = function (cantidadDeposito) {
        if (cantidadDeposito < 5) {
            console.log("El valor a depositar debe ser mayor a $5.00");
        }
        else {
            this.cantidad += cantidadDeposito;
            console.log("Se ha depositado correctamente $".concat(cantidadDeposito, ". Nuevo saldo: $").concat(this.cantidad, "."));
        }
        this.mostrarDatos();
    };
    Cuenta.prototype.retirar = function (valor) {
        if (this.cantidad <= 0) {
            console.log("No hay efectivo en la cuenta.");
        }
        else if (valor < 5) {
            console.log("El valor a retirar debe ser mayor a $5.00");
        }
        else if (valor > this.cantidad) {
            console.log("No hay suficiente saldo para retirar esa cantidad.");
        }
        else {
            this.cantidad -= valor;
            console.log("Se ha retirado $".concat(valor, ". Saldo restante: $").concat(this.cantidad, "."));
        }
        this.mostrarDatos();
    };
    Cuenta.prototype.mostrarDatos = function () {
        var cuentaElement = document.getElementById('cuerpo-cuenta');
        if (cuentaElement) {
            cuentaElement.innerText = "Nombre: ".concat(this.nombre, ", Tipo de cuenta: ").concat(this.tipoCuenta, ", N\u00FAmero de cuenta: ").concat(this.numeroCuenta, ", Saldo: $").concat(this.cantidad);
        }
    };
    return Cuenta;
}());
// Ejercicio 5: Clase Persona y Clase Empleado
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, direccion, telefono, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }
    Persona.prototype.esMayorDeEdad = function () {
        if (this.edad >= 18) {
            console.log("".concat(this.nombre, " ").concat(this.apellido, " es mayor de edad."));
        }
        else {
            console.log("".concat(this.nombre, " ").concat(this.apellido, " no es mayor de edad."));
        }
    };
    return Persona;
}());
// Clase Empleado que hereda de Persona
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(nombre, apellido, direccion, telefono, edad, sueldo) {
        var _this = _super.call(this, nombre, apellido, direccion, telefono, edad) || this;
        _this.sueldo = sueldo;
        return _this;
    }
    Empleado.prototype.cargarSueldo = function (sueldo) {
        this.sueldo = sueldo;
    };
    Empleado.prototype.imprimirSueldo = function () {
        console.log("El sueldo de ".concat(this.nombre, " ").concat(this.apellido, " es: $").concat(this.sueldo));
    };
    Empleado.prototype.mostrarDatos = function () {
        var empleadoElement = document.getElementById('empleado');
        if (empleadoElement) {
            empleadoElement.innerText = "Nombre: ".concat(this.nombre, ", Apellido: ").concat(this.apellido, ", Direcci\u00F3n: ").concat(this.direccion, ", Tel\u00E9fono: ").concat(this.telefono, ", Edad: ").concat(this.edad);
            this.esMayorDeEdad();
        }
    };
    return Empleado;
}(Persona));
// Inicializar la cuenta
var cuenta1;
// Inicializar funciones al cargar la página
window.onload = function () {
    // Ejercicio 1: Inicializar cabecera
    var cabecera = new CabeceraPagina("Bienvenidos a la Calculadora", "blue", "Arial", "centro");
    cabecera.imprimirPropiedades();
    // Ejercicio 2: Inicializar calculadora
    var calculadora = new Calculadora();
    window.realizarOperacion = function (operacion) {
        var resultado;
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
        }
        catch (error) {
            resultado = error.message;
        }
        document.getElementById('result').innerText = "Resultado: ".concat(resultado);
    };
    // Ejercicio 3: Inicializar canción
    var cancion = new Cancion("Bohemian Rhapsody", "Rock");
    cancion.setAutor("Queen");
    cancion.mostrarDatos();
    // Ejercicio 4: Inicializar empleado
    var empleado = new Empleado("Juan", "Martinez", "San Martin", "789-1234", 30, 2500);
    empleado.mostrarDatos();
    empleado.imprimirSueldo();
    // Ejercicio 5: Inicializar cuenta
    cuenta1 = new Cuenta("Juan Martinez", 100, "Ahorros", "123456789");
    cuenta1.mostrarDatos();
};
// Funciones para depositar y retirar en la cuenta
window.depositar = function () {
    var cantidadDeposito = parseFloat(document.getElementById('cantidad-deposito').value);
    cuenta1.depositar(cantidadDeposito);
};
window.retirar = function () {
    var cantidadRetiro = parseFloat(document.getElementById('cantidad-retiro').value);
    cuenta1.retirar(cantidadRetiro);
    cuenta1.retirar(cantidadRetiro);
};
