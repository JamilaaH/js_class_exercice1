// exo 1 
class Personnage  {
    constructor (nom, prenom,age,taille){ //permet de créer un ensemble d'objet
        this.nom = nom ; 
        this.prenom = prenom;
        this.age =age;
        this.taille = taille;
        this.se_presenter = () => {
            console.log(`Bonjour je m'appelle ${this.prenom} ${this.nom}, j'ai ${this.age} ans`);
        }
    }
}
let jamila = new Personnage ("hammani", "jamila", 26, "1m57")
let test = new Personnage ("Test", "mila", 27, "1m57")
let bene = new Personnage ("teste", "bene", 29, "1m77")

jamila.se_presenter()
test.se_presenter()
bene.se_presenter()

// exo 2
class Personnage2 {
    constructor(nom,age,ville){
        this.nom = nom ;
        this.age = age;
        this.ville = ville;
        this.se_presenter = () => {
            console.log(`Bonjour je m'appelle ${this.nom}`);
        }
    }
}

let eloise = new Personnage2 ("eloise", 22, "bruxelles");
let charlotte = new Personnage2 ("charlotte", 26, "charleroi");

eloise.se_presenter()
charlotte.se_presenter()


// exo 3
class Lieu {
    constructor(nom, contenu,ingredient){
        this.nom = nom;
        this.contenu = contenu;
        this.ingredient = ingredient;
    }
}

let maison = new Lieu ("maison", [], [])
console.log(maison);
let epicerie = new Lieu ("epicerie",[], [])
console.log(epicerie);
let cuisine = new Lieu ("cuisine",[], [])
console.log(cuisine);


console.log("_____");


class Ingredient {
    constructor(nom, etat, prix){
        this.nom = nom;
        this.etat = etat;
        this.prix = prix;
    }
}

let poivron = new Ingredient ("poivron", "entier", 1);
let oignon = new Ingredient ("oignon", "entier", 2);
let oeuf = new Ingredient ("oeuf", "entier", 4);
let epice = new Ingredient ("epice", "moulu", 3.25);
let paprika = new Ingredient ("paprika", "moulu", 1.5);
let fromage = new Ingredient ("fromage", "coupé", 1.6);

console.log("______");

class Personne {
    constructor(nom, lieu, argent, panier){
        this.nom = nom;
        this.lieu = lieu;
        this.argent = argent;
        this.panier = panier;
    }
    seDeplacer(x){

    }
    payer(x){

    }
    couper(x,y){

    } 

}
let pseudo = new Personne ("Maxime","neant",100,[])


// exo4

class Objet {
    constructor(nom,prix){
        this.nom = nom ;
        this.prix = prix;
    }
}

let yoyo = new Objet ("yoyo", 2);
let camera = new Objet ("camera", 100);
let boite = [yoyo, camera];
console.log(boite); 

class Perso {
    constructor(nom,sac,argent){
        this.nom = nom;
        this.sac = sac;
        this.argent = argent;
    }
    prendre (objet){
        this.sac.push(objet)
        boite.splice(boite.indexOf(objet),1)
    }
    acheter (vendeur, objet) {
        this.argent -= objet.prix
        vendeur.argent += objet.prix;

        this.sac.push(objet)
        vendeur.sac.splice(vendeur.sac.indexOf(objet),1)
    }
}

let elias = new Perso ('elias', [], 800);
let max = new Perso ('max', [], 1000)

