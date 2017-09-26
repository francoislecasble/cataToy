class Jouet {

    constructor(libelle,trancheAge,categorie){
        this._libelle = libelle;
        this._trancheAge = trancheAge;
        this._categorie = categorie;

        this._categorie.ajouterJouet(this);
    }

    get libelle(){

        return this._libelle;

    }

    get trancheAge(){
        return this._trancheAge.toString();
    }

    get categorie(){
        return this._categorie.libelle;

    }
}
module.exports = Jouet;