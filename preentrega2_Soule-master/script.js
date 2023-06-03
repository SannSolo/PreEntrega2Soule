console.log("hola mundo");

// Scipt OK // 

alert ("Bienvenidx a INCOMODO")

let nombre = prompt("Ingresa tu nombre")

console.log("El nombre ingresado es " + nombre)

let edad = prompt("Ingresá el año de tu nacimiento")

edad  = parseInt(edad)

var mayorOk = (2023 - edad)

console.log("Tu edad es de " + mayorOk + " años")
 
if((mayorOk >= 18) && (mayorOk <= 90) ) {
    alert ("Estás listx para vestirte con INCOMODO")
    
}

else{
    alert ("No podes realizar compras")
    throw new Error("Finalización de ejecución")
}
 
// finaliza evaluacion de edad mayor de 18 años y menor de 90 años  //


console.log("              LOS MODELOS SON                      ")

let prendas = [
  {
    id: 1,
    nombre: "pantalon sabri",
    precio: 8900,
    stock: 5,
    talle: "unico",
  },
  {
    id: 2,
    nombre: "bluson urban escote v",
    precio: 7000,
    stock: 3,
    talle: "unico",
  },
  {
    id: 3,
    nombre: "pollera pantalon momo",
    precio: 6900,
    stock: 0,
    talle: "s",
  },
  {
    id: 4,
    nombre: "solero japon",
    precio: 8600,
    stock: 6,
    talle: "m",
  },
  {
    id: 5,
    nombre: "vestido rectangulo",
    precio: 7580,
    stock: 4,
    talle: "unico",
  },
  {
    id: 6,
    nombre: "bluson urban bote",
    precio: 2900,
    stock: 0,
    talle: "s",
  },
  {
    id: 7,
    nombre: "chaqueta mirta",
    precio: 1900,
    stock: 1,
    talle: "m",
  },
  {
    id: 8,
    nombre: "saco vasco",
    precio: 6900,
    stock: 2,
    talle: "unico",
  }
];

prendas.forEach((prenda) => console.log(prenda.nombre));

console.log("              LOS PRECIOS (en mismo orden que modelo)                      ")

prendas.forEach((prenda) => console.log(prenda.precio));

console.log("          PRODUCTOS EN STOCK              ");


let enStock = prendas.filter((prenda) => prenda.stock > 0);
console.log(enStock);

console.log("          PRODUCTOS TALLE UNICO              ");

let talleUnico = prendas.filter((prenda) => prenda.talle === "unico");
console.log(talleUnico);
