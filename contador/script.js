     
        //capturo el elemento h1 
        let conteo=document.getElementById("conteo")
        //inicializo una variable contador en 0
        let contador=0
        //le asigno el valor del contador al textContent del h1
        conteo.textContent=contador

        //capturo el evento del boton reset
        document.getElementById("reset").addEventListener("click",()=>{
            contador=0
            conteo.textContent=contador  
        })
        //capturo el boton sumar donde incremento el contador en uno
        //le asigno nuevamente el valor del contador al textcontent del h1
        document.getElementById("sumar").addEventListener("click",()=>{
            contador=contador+1
            conteo.textContent=contador        
        })
        //capturo el boton restar donde decremento el contador en uno
        //le asigno nuevamente el valor del contador al textcontent del h1
        document.getElementById("restar").addEventListener("click",()=>{
            //aqui evito numero negativos
            if(contador<=0){
                alert("no se aceptan numeros negativos")
            }else{
                contador=contador-1
            }
            
            conteo.textContent=contador     
        })

