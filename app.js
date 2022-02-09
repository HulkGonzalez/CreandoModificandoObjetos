class Paciente {
    constructor(nombre, edad, rut, diagnostico) {
        this.nombre = nombre;
        this.edad = edad;
        this.rut = rut;
        this.diagnostico = diagnostico;
        
    }

get nombre() {
    return this._nombre
}
get edad() {
    return this._edad
}
get rut() {
    return this._rut
}
get diagnostico() {
    return this._diagnostico
}
set nombre(value) {
    this._nombre = value
}
set edad(value) {
    this._edad = value
}
set rut(value) {
    this._rut = value
}
set diagnostico(value) {
    this._diagnostico = value
}
}    

class Consultorio {
    constructor(nombre){
        this.nombre = nombre;
        this._pacientes = [];
    }

get getPacientes() {
    return this.pacientes;
}

set pacientes(value) {
    this._pacientes.push(value)
}

agregarPaciente(value) {
    this._pacientes.push(value)
}  

};

Consultorio.prototype.buscarPaciente = function (nombre) {
    return this._pacientes.find (item => item.nombre === value)
}

Consultorio.prototype.mostrarTodo = function () {
    this.pacientes.forEach(paciente => {
        console.log(paciente);
    })
}

const franco = new Consultorio ("Lo Franco");

const cesar = new Paciente ("Cesar Gonzalez", 43, "12.127.952-5", "Ciatica");
const felipe = new Paciente ("Felipe Gonzalez", 29, "18.848.636-3", "Esguince");


console.log(cesar);
franco.agregarPaciente(felipe);
console.log(franco);
