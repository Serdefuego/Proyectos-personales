/********************************************************************/
/********************************************************************/
//capturo el evento click del boton para agregar tarea
document.getElementById("agregar").addEventListener("click",()=>{
    //capturo el value del <input> "descripccion" !importante accedo a su value! no al taxtContent
    let descripcion=document.getElementById("descripccion").value
    if (descripcion.trim() == ""){
        alert("escriba una tarea")
    }else{
        //capturo en una variable el elemento <ul> ="lista"
         let lista=document.getElementById("lista")
         //creo un elemento <li> para meterlo dentro de la <ul>
        let tarea=document.createElement("li")
        //pongo lo que se escribio dentro del elemento li "tarea"
         tarea.append(descripcion)
        //agrego la tarea osea el elemento li dentro de lista osea el elemeto ul
         lista.append(tarea)
        /*********************************************************************/
        //creo el boton que ira dentro de cada <li> "tarea" de la "lista"
        let remover=document.createElement("button")
        //le agrego el texto "eliminar" al boton 
        remover.textContent="eliminar"
        //agrega con un append el boton "remover"
        tarea.append(remover)
        //capturo el click que se le hace al boton de remover
        remover.addEventListener("click",()=>{
            tarea.remove()
    })
     // Limpio el input luego de agragar la tarea
        document.getElementById("descripccion").value = ""
    
    }
    
})


