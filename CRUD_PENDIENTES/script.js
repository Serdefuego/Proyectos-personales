   /********************************************************************/
    /********************************************************************/
//capturo el evento click del boton para agregar tarea
document.getElementById("agregar").addEventListener("click",()=>{
    //capturo en una variable el elemento <ul> ="lista"
    let lista=document.getElementById("lista")
    //capturo el value del <input> "descripccion" !importante accedo a su value! no al taxtContent
    let descripcion=document.getElementById("descripccion").value
    //creo un elemento <li> para meterlo dentro de la <ul>
    let tarea=document.createElement("li")
    //modifico el textConntent del elemento <li> que voy a meter dentro del <ul> 
    tarea.append(descripcion)

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
    /********************************************************************/

    //Evitar agregar tareas vacías 
    if(descripcion==""){
        alert("todavia no has agragado una tarea")
        alert("escribe una tarea en el campo de texto y luego pulsa agregar")
    }else{
        //agrego mediante append en la lista <ul> la tarea 
        lista.append(tarea)
        //luego de agregar la lista vacio el campo de escritura
        document.getElementById("descripccion").value=""
      }
    
})


