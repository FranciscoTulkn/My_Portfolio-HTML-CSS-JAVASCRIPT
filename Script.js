// Funcion para aplicar el funcionamiento del menu al seleccionar una opción.

function seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    // Desaparece el menu una vez selecciona opción.

    var x = document.getElementById("nav");
    x.className = "";
}

// Funcion para el menu responsive.

function responsiveMenu(){
    var x =  document.getElementById('nav');
    if(x.className===''){
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

//Detección del scrolling en la animación de la barra de habilidades. 

window.onscroll = function(){
    efectoHabilidades();
};

//Funcion que aplica la animación de la barra de habilidades. 
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("ps").classList.add("barra-progreso4");
        document.getElementById("python").classList.add("barra-progreso5");
        document.getElementById("java").classList.add("barra-progreso6");
        document.getElementById("csharp").classList.add("barra-progreso7");
    }
}