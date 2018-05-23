export abstract class Compte {
    numeroCompte: number;
    solde: number;
    dateOuverture: string;

    constructor(options: {
        numeroCompte?: number;
        solde?: number;
        dateOuverture?: string;
    } = {}) {
        this.numeroCompte = options.numeroCompte || null;
        this.solde = options.solde || null;
        this.dateOuverture = options.dateOuverture || '';
    }
}

export class CompteCourant extends Compte {
    decouvertAutorise: number = 1000;
    carte: string = 'AUCUNE';

    constructor(options: {
        decouvertAutorise?: number;
        carte?: string;
    } = {}) {
        super();
        this.decouvertAutorise = options.decouvertAutorise || null;
        this.carte = options.carte || '';
    }
}

export class CompteEpargne extends Compte {
    tauxRemuneration: number = 0.3;

    constructor(options: {
        tauxRemuneration?: number;
    } = {}) {
        super();
        this.tauxRemuneration = options.tauxRemuneration || null;
    }
}