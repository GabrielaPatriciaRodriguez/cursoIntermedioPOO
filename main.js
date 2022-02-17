//Creando un objeto para ver sus propiedades a traves de metodos estaticos del
//super prototipo Object

const Juan = {
    name: "Juan",
    age: 18,
    email: "Juanito@gmail.com",
    aprovedCourses: ["Curso 1"],
    AddCourses(newCourse){
        this.aprovedCourses.push(newCourse);
    }
}


// console.log(Object.keys(Juan));
// console.log(Object.getOwnPropertyNames(Juan));
// console.log(Object.entries(Juan));


Object.defineProperty(Juan, "pruebaNasa", {
    writable: true,//como false impide que se pueda modificar su valor
    //Tambien por object.freeze()
    configurable: true,//como false impide que se pueda eliminar la propiedad 
    //Lo mismo sucede con object.seal() y object.freeze()
    enumerable: true,//como false no se puede listar con object.keys
    value: "extraterrestre"
})

console.log(Object.getOwnPropertyDescriptors(Juan));

//Copiando objetos que tengan objetos por dentro
//con JSON.stringify() y JSON.parse()
//Creando un objeto 2 desde objeto 1

const obj1 = {
    name: "Juan",
    age: 18,
    email: "Juanito@gmail.com",
    aprovedCourses: {
        curso1: "Curso 1",
        curso2: "Curso 2"
    },
    AddCourses(newCourse){
        this.aprovedCourses.push(newCourse);
    }
}

const objComplejo = JSON.stringify(obj1);

const obj2 = JSON.parse(objComplejo);

//Solucionan el tema de crear aobjetos que tengan objetos por dentro pero no cuando se trata
//de funciones




