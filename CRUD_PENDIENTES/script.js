
//capturo el evento click del boton para agregar tarea
document.getElementById("agregar").addEventListener("click",()=>{
    //capturo en una variable el elemento <ul> ="lista"
    let lista=document.getElementById("lista")
    //capturo el value del <input> "descripccion" !importante accedo a su value! no al taxtContent
    let descripcion=document.getElementById("descripccion").value
    //creo un elemento <li> para meterlo dentro de la <ul>
    let tarea=document.createElement("li")
    //modifico el textConntent del elemento <li> que voy a meter dentro del <ul> 
    tarea.textContent=descripcion
    //agrego mediante append en la lista <ul> la tarea 

    if(tarea.textContent==""){
        alert("todavia no has agragado una tarea")
        alert("escribe una tarea en el campo de texto y luego pulsa agregar")
    }else{
        lista.append(tarea)
        descripcion.value=""
    }

    
})

//Evitar agregar tareas vacías 
// //Si el usuario aprieta “agregar” con el input vacío, no debe crear un li vacío.
