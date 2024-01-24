function changeImageM1(url, nom) {
  console.log("DEBUG : changeImageM3 : url = " + url + ", nom = " + nom);
  let bTag = document.querySelectorAll('div>div+div b')
  bTag[0].innerHTML = nom
  let imgTag = document.querySelectorAll('div>div+div img')
  imgTag[0].src = url
}

function changeImageM2(id_url, id_nom, url, nom) {
  console.log("DEBUG : changeImageM2 : id_url = " + id_url + ", id_nom = " + id_nom +
    ", url = " + url + ", nom = " + nom);
  let un_animal = document.getElementById(id_nom)
  un_animal.innerHTML = nom
  let url_image = document.getElementById(id_url)
  url_image.src = url
}

function changeImageM3(url, nom) {
  console.log("DEBUG : changeImageM3 : url = " + url + ", nom = " + nom);
  let bTag = document.querySelectorAll('div>div+div b')
  bTag[0].innerHTML = nom
  let imgTag = document.querySelectorAll('div>div+div img')
  imgTag[0].src = url
}

function EtatInitial() {
  let bTag = document.querySelectorAll('div>div+div b')
  bTag[0].innerHTML = 'Bienvenue dans la galerie !'
  let imgTag = document.querySelectorAll('div>div+div img')
  imgTag[0].src = 'Images/walt-disney_chateau.jpg'
}

function Souris(url, nom) {
  let bTag = document.querySelectorAll('div>div+div b')
  bTag[0].innerHTML = nom
  let imgTag = document.querySelectorAll('div>div+div img')
  imgTag[0].src = url
}

function ChangeCouleur() {
  let Couleur = 256
  var c1 = CouleursAléat()
  var c2 = CouleursAléat()
  var c3 = CouleursAléat()
  console.log(c1, c2, c3)
  Back.backgroundColor = rgb(c1, c2, c3,)
  console.log('back : ' + Back)
  clearTimeout(temps)
  Timing()
  return false
}

function CouleurOriginal() {
  Back.backgroundColor = 'white'
  console.log('retour au blanc ')
}

function Timing() {
  temps = setTimeout(CouleurOriginal, 4000)
}

function rgb(r, g, b) {
  return "rgb(" + r + "," + g + "," + b + ")";
}

function CouleursAléat() {
  let Couleur = 256
  let Random
  while (!(255 >= Couleur)) {
    Random = Math.random()
    if (Math.random() * 10 > 5) {
      Aug = Random * 100
    }
    else {
      Aug = Random * 1000
    }
    Couleur = Math.floor(Aug)
  }
  console.log('Changement de couleur' + Couleur)
  return Couleur
}
