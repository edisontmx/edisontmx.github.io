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
        habilidades[1].classList.add("nodejs");
        habilidades[2].classList.add("golang");
        habilidades[3].classList.add("Python");
        habilidades[4].classList.add("react");
        habilidades[5].classList.add("mysql");
        habilidades[6].classList.add("mongo");
        habilidades[7].classList.add("github");
        habilidades[8].classList.add("docker");
        habilidades[9].classList.add("equipo");
        habilidades[10].classList.add("activo");
        habilidades[11].classList.add("auto");
        habilidades[12].classList.add("result");
        habilidades[13].classList.add("dedicado");
    }
}
//deteccion del scrolling para aplicar la animacion de la barra
window.onscroll=function(){
    efecto();
}