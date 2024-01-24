const CodeSouhaité = [0, 0, 0, 0, 0, 0]
let Compteur = 0
let num1 = ''
let num2 = ''
let num3 = ''
let num4 = ''
let num5 = ''
let num6 = ''
let ChaineNum = [num1, num2, num3, num4, num5, num6]
let opération
let nombre1
let nombre2
let Capcha = [nombre1, opération, nombre2]
let CalculCapcha
let valeurId
let CapchaDonné

function ReinitialiserFormulaire() {
    console.log('Reinitialisation...')
    document.getElementById("id_identifiant").value = ''
    document.getElementById("id_CapchaDonné").value = ''
}

function EcrireCode(id_code, num) {
    console.log("On ajoute un numéro au code...")
    Compteur = Compteur + 1
    if (Compteur > 7) {
        Compteur = Compteur - 1
    }
    if (Compteur == 1) {
        num1 = num
    }
    if (Compteur == 2) {
        num2 = num
    }
    if (Compteur == 3) {
        num3 = num
    }
    if (Compteur == 4) {
        num4 = num
    }
    if (Compteur == 5) {
        num5 = num
    }
    if (Compteur == 6) {
        num6 = num
    }
    ChaineNum = [num1, num2, num3, num4, num5, num6]
    let code = document.getElementById(id_code)
    code.innerHTML = ChaineNum[0] + ChaineNum[1] + ChaineNum[2] + ChaineNum[3] + ChaineNum[4] + ChaineNum[5]
}

function supprimeChiffre(id_code,) {
    console.log('On supprime un chiffre du code...')
    if (Compteur == 7) {
        Compteur = Compteur - 1
    }
    if (Compteur == 1) {
        num1 = ''
    }
    if (Compteur == 2) {
        num2 = ''
    }
    if (Compteur == 3) {
        num3 = ''
    }
    if (Compteur == 4) {
        num4 = ''
    }
    if (Compteur == 5) {
        num5 = ''
    }
    if (Compteur == 6) {
        num6 = ''
    }
    ChaineNum = [num1, num2, num3, num4, num5, num6]
    let code = document.getElementById(id_code)
    code.innerHTML = ChaineNum[0] + ChaineNum[1] + ChaineNum[2] + ChaineNum[3] + ChaineNum[4] + ChaineNum[5]
    Compteur = Compteur - 1
}

function videCode(id_code) {
    console.log('Le code se vide...')
    num1 = ''
    num2 = ''
    num3 = ''
    num4 = ''
    num5 = ''
    num6 = ''
    ChaineNum = [num1, num2, num3, num4, num5, num6]
    let code = document.getElementById(id_code)
    code.innerHTML = ChaineNum[0] + ChaineNum[1] + ChaineNum[2] + ChaineNum[3] + ChaineNum[4] + ChaineNum[5]
    Compteur = 0
}

function Agrandir() {
    console.log("Agrandissement du texte...")

}

function CréationCapcha() {
    console.log("Création du Capcha...")
    nombre1 = Math.floor(Math.random() * 10) + 1
    nombre2 = Math.floor(Math.random() * 10) + 1
    var typeOpération = Math.random() * 30
    if (typeOpération < 10) {
        opération = '*'
        CalculCapcha = nombre1 * nombre2
    }
    else {
        if (typeOpération < 20) {
            opération = '+'
            CalculCapcha = nombre1 + nombre2
        }
        else {
            opération = '-'
            CalculCapcha = nombre1 - nombre2
        }
    }
    Capcha = [nombre1, opération, nombre2]
}

function Nouveau(id_capcha) {
    CréationCapcha()
    noterCapcha = document.getElementById(id_capcha)
    noterCapcha.innerHTML = Capcha[0] + Capcha[1] + Capcha[2]
}

function Vérification() {
    console.log('Vérification des données...')
    //Récupération des valeures
    valeurId = document.getElementById("id_identifiant").value
    var tailleId = valeurId.length
    CapchaDonné = document.getElementById("id_CapchaDonné").value
    //Vérification et redirection
    let a = VérifId(tailleId)
    let b = VérifCode()
    let c = VérifCapcha(CapchaDonné)
    if ((a == true) && (b == true) && (c == true)) {
        console.log("Formulaire Correcte")
        return true
    }
    else {
        console.log("Formulaire Incorrecte")
        return false
    }
}

function VérifId(longueur) {
    console.log('tailleId = ' + longueur)
    let BooleenId
    if (longueur >= 8) {
        console.log("La taille de l'identifiant est correcte")
        BooleenId = true
        var couleur = document.getElementById("id_identifiant")
        couleur.style.color = 'black'
    }
    else {
        console.log("L'identifiant est incorrecte")
        BooleenId = false
        var couleur = document.getElementById("id_identifiant")
        couleur.style.color = 'red'
    }
    return (BooleenId)
}

function VérifCode() {
    console.log("Code Donnée : " + ChaineNum)
    console.log("Le code souhaité est : " + CodeSouhaité)
    let BooleenCode
    if (ChaineNum.toString() === CodeSouhaité.toString()) {
        console.log("Le code est bon")
        BooleenCode = true
    }
    else {
        console.log("Le mot de passe est incorrect")
        BooleenCode = false
    }
    return (BooleenCode)
}

function VérifCapcha(CapchaDonné) {
    console.log('CapchaDonné = ' + CapchaDonné)
    console.log('CalculCapcha = ' + CalculCapcha)
    let BooleenCapcha
    if (CalculCapcha == CapchaDonné) {
        console.log("Le Capcha est correcte")
        BooleenCapcha = true
        var couleur = document.getElementById("id_CapchaDonné")
        couleur.style.color = 'black'
    }
    else {
        console.log("Le capcha est incorrect")
        var couleur = document.getElementById("id_CapchaDonné")
        couleur.style.color = 'red'
    }
    return (BooleenCapcha)
}
function Blanchir() {
    var blanc = document.getElementById("id_fomulaire")
    blanc.style.backgroundColor = 'rgba(255,255,255,0.7)'
}

function DeBlanchir() {
    var blanc = document.getElementById("id_fomulaire")
    blanc.style.backgroundColor = 'rgba(255,255,255,0.5)'
}