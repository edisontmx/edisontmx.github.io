let menuVisible=false;
//fucnion que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible=false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible=true;
    }
}
function seleccionar(){
    //se oculta el menu una ves que selecciona una opcion
    document.getElementById("nav").classList="";
    menuVisible=false;
}
//animaciones de las habilidades
function efecto(){
    var skills=document.getElementById("skills");
    var long = window.innerHeight-skills.getBoundingClientRect().top;
    if(long>=300){
        let habilidades=document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("Go");
        habilidades[2].classList.add("Go");
        habilidades[3].classList.add("Python");
        habilidades[4].classList.add("Go");
        habilidades[5].classList.add("equipo");
        habilidades[6].classList.add("creatividad");
        habilidades[7].classList.add("comunicacion");
        habilidades[8].classList.add("PM");
        habilidades[9].classList.add("dedicacion");
        habilidades[10].classList.add("dedicacion");
        habilidades[11].classList.add("dedicacion");
        habilidades[12].classList.add("dedicacion");
        habilidades[13].classList.add("dedicacion");
    }
}
//deteccion del scrolling para aplcar la animacion de la barra
window.onscroll=function(){
    efecto();
}