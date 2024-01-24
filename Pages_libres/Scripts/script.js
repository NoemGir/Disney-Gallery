let memoire1 = 0
let memoire2 = 0
let memoire3 = 0
let memoire4 = 0

function sousMenu() {
    console.log('Le sous-menu s affiche')
    var sousMenu1 = document.getElementById("id_SousMenu")
    sousMenu1.style.display = 'block'

}
function EnleverSousMenu() {
    console.log('Le sous-menu s enlève')
    var sousMenu1 = document.getElementById("id_SousMenu")
    sousMenu1.style.display = 'none'
}

function OuvrirFermer1() {
    console.log(" memoire = " + memoire1)
    if (memoire1 == 0) {
        console.log("Affichage du texte 1");
        var text = document.getElementById('id_creation')
        text.style.display = 'block'
        memoire1 = 1
        var image = document.getElementById('case1')
        image.style.transform = "rotate(180deg)"
    }
    else {
        console.log("Le texte 1 se cache");
        var text = document.getElementById('id_creation')
        text.style.display = 'none'
        memoire1 = 0;
        var image = document.getElementById('case1')
        image.style.transform = "rotate(0deg)"
    }
}

function OuvrirFermer2() {
    console.log(" memoire = " + memoire2)
    if (memoire2 == 0) {
        console.log("Affichage du texte 2");
        var text = document.getElementById('id_animation')
        text.style.display = 'block'
        memoire2 = 1
        var image = document.getElementById('case2')
        image.style.transform = "rotate(180deg)"
    }
    else {
        console.log("Le texte 2 se cache");
        var text = document.getElementById('id_animation')
        text.style.display = 'none'
        memoire2 = 0;
        var image = document.getElementById('case2')
        image.style.transform = "rotate(0deg)"
    }
}

function OuvrirFermer3() {
    console.log(" memoire = " + memoire3)
    if (memoire3 == 0) {
        console.log("Affichage du texte 3");
        var text = document.getElementById('id_modelisation')
        text.style.display = 'block'
        memoire3 = 1
        var img = document
        var image = document.getElementById('case3')
        image.style.transform = "rotate(180deg)"
    }
    else {
        console.log("Le texte 3 se cache");
        var text = document.getElementById('id_modelisation')
        text.style.display = 'none'
        memoire3 = 0;
        var image = document.getElementById('case3')
        image.style.transform = "rotate(0deg)"
    }
}

function OuvrirFermer4() {
    console.log(" memoire = " + memoire4)
    if (memoire4 == 0) {
        console.log("Affichage du texte 4");
        var text = document.getElementById('id_final')
        text.style.display = 'block'
        memoire4 = 1
        var image = document.getElementById('case4')
        image.style.transform = "rotate(180deg)"
    }
    else {
        console.log("Le texte 4 se cache");
        var text = document.getElementById('id_final')
        text.style.display = 'none'
        memoire4 = 0;
        var image = document.getElementById('case4')
        image.style.transform = "rotate(0deg)"
    }
}