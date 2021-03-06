import { Compte, CompteCourant, CompteEpargne } from "../compte/compte";

export class Client {
  idClient: number;
  nom: string;
  prenom: string;
  email: string;
  adresse: string;
  codePostal: string;
  ville: string;
  telephone: string;
  compteCourant: CompteCourant;
  compteEpargne: CompteEpargne;

  constructor(options: {
    idClient?: number;
    nom?: string;
    prenom?: string;
    email?: string;
    adresse?: string;
    codePostal?: string;
    ville?: string;
    telephone?: string;
    compteCourant?: any;
    compteEpargne?: any;
  }={}) {
    this.idClient = options.idClient || null;
    this.nom = options.nom || '';
    this.prenom = options.prenom || '';
    this.email = options.email || '';
    this.adresse = options.adresse || '';
    this.codePostal = options.codePostal || '';
    this.ville = options.ville || '';
    this.telephone = options.telephone || '';
    this.compteCourant = options.compteCourant || null;
    this.compteEpargne = options.compteEpargne || null;
  }
}