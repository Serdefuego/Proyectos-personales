//capturo el contenedor ul
let contenedorLi=document.getElementById("lista")
/****************************************************/
               //primero declaro la funcion

function agregar(){
  
    //capturo el input de entrada de texto
    let texto=document.getElementById("entradaDeTexto").value
    //compruebo que no este vacio
    if(texto==""){
        alert("no has ingresado tarea")
    }else{
    //creo un elemento li
    let li=document.createElement("li")
    //le asigno al nuevo li creado el texto que se encuentra en el input
    li.textContent=texto

            //creo boton eliminar para la li
    let eliminar=document.createElement("button")
    //le pongo el nombre accediendo al textContent
    eliminar.textContent="eliminar"
    //la inserto dentro del elemento li
    li.append(eliminar)
    //capturo el evento del boton eliminar

    let estado=document.createElement("input")
    estado.type("radio")
    
    estado.addEventListener("change",()=>{
        li.classList("echo")
    })
    li.append(estado)
    eliminar.addEventListener("click",()=>{
        //remuevo el li item mediante el atriburo remove()
        li.remove()
    })
    //agrego el elemento li con el texto dentro del contenedor ul
    contenedorLi.append(li)

    //vacio el input signandole un string vacio como valor
    document.getElementById("entradaDeTexto").value=""
    }
   
}


/******************************************************/
        //capturo el evento agregar que dispara la funcion
document.getElementById("agregar").addEventListener("click",agregar)



