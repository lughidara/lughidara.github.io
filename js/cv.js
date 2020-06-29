function requerido(input){    
    //let expresionNombre = /\w+\w[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]/;
    let expresionNombre = /\w+\w[a-zA-Z]/;
    if(input.value != "" && expresionNombre.test(input.value)){
        input.className = "form-control is-valid";
        return true;
    }else{
        input.className = "form-control is-invalid";
        return false;
    }
}

function revisarEmail(input){
    let expresion = /\w+@\w+\.[a-z]/;
    
    if(input.value != "" && expresion.test(input.value)){
        input.className = "form-control is-valid";
        return true;
    }else{
        input.className = "form-control is-invalid";
        return false;
    }
}

function revisarNumeros(input){
    if(input.value != "" && !isNaN(input.value)){
        input.className = "form-control is-valid";
        return true;
    }else{
        input.className = "form-control is-invalid";
        return false;
    }
}

function revisarMensaje(mensaje){
    if(mensaje.value.length >= 10){
        mensaje.className = "form-control is-valid";
        return true;
    }else{
        mensaje.className = "form-control is-invalid";
        return false;
    }
}

function validarGeneral(event){
    event.preventDefault(); //para que prevenga el comportamiento por defecto del evento
    console.log("Desde la funcion validar general" + event);
    if (requerido(document.getElementById("nombre")) && 
    revisarEmail(document.getElementById("email")) &&
    revisarNumeros(document.getElementById("telefono")) &&
    revisarMensaje(document.getElementById("mensaje"))){
        alert("El formulario esta listo para ser enviado");
    }else{
        alert("Ocurrio un error, formulario incompleto.")
    }
}

