function mostrar(id) {
    esconder('proteger');
    esconder('transmitir');
    esconder('sintomas');
    esconder('prototipo');


    document.getElementById(id)    
        .removeAttribute('class','escondido')
}

function esconder(id){

    document.getElementById(id)
        .classList.add('escondido')
}