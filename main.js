//Condicional: ejemplo//

let edad =parseInt(prompt("Ingresa tu edad"))

if (edad >= 18){

    alert ("Bienvenido a la pagina oficial de Quilmes")
    console.log("Acceso permitido");

}else{
    alert ("Sos menor de Edad, no podes entrar")
    console.log("Acceso denegado");
}





//Ciclos: ejemplo//

let contraseña = prompt("Ingrese contraseña");

 do {

     console.log (contraseña);

     contraseña = prompt("Confirme su contraseña");

 } 
   
   while (contraseña !== contraseña);
   console.log("Contraseña correcta");


   while (contraseña != contraseña);
   alert("incorrecto")
   console.log("Contraseña incorrecta");









//Funciones: ejemplo//



 
 const mostrarMensaje = (mensaje) => {
    console.log(mensaje);
}


let producto1= parseInt (prompt ("ingrese el costo del primer producto"))
let producto2= parseInt (prompt ("ingrese el costo del segundo producto"))


const sumar = (producto1, producto2) => {
    return producto1 + producto2;
}


const resultado = sumar(producto1, producto2);


console.log(resultado);

alert ("el total es de: $" + resultado );




