import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CompteService } from '../compte.service';
import { CompteEpargne } from '../compte';
import { Client } from '../../client/client';

@Component({
  selector: 'app-compte-epargne-form',
  templateUrl: './compte-epargne-form.component.html',
})
export class CompteEpargneFormComponent implements OnInit {

  compteEpargneForm: FormGroup;
  currentCompteEpargne: CompteEpargne;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private compteService: CompteService) { }

  ngOnInit() {
    const numCompte = +this.route.snapshot.params['numCompte'];
    if (numCompte) {   // ÉDITION
      this.compteService.loadCompte(numCompte).subscribe(compteEpargne => {
        this.currentCompteEpargne = compteEpargne;
        this.buildForm();
      });
    } else {   // CRÉATION
      this.currentCompteEpargne = new CompteEpargne({ tauxRemun: 3 });
      this.currentCompteEpargne.solde = 0;
      this.buildForm();
    }
  }

  buildForm() {
    this.compteEpargneForm = this.formBuilder.group({
      solde: [this.currentCompteEpargne.solde,Validators.pattern('^[0-9]+\\.?[0-9]*$')],
      tauxRemun: [this.currentCompteEpargne.tauxRemun, [Validators.max(100), Validators.pattern('^[0-9]+\\.?[0-9]*$')]]
    });
  }

  saveCompteEpargne() {
    const clientId = +this.route.snapshot.params['idClient'];
    const numCompte = +this.route.snapshot.params['numCompte'];
    const compteEpargne: CompteEpargne = Object.assign(this.currentCompteEpargne, this.compteEpargneForm.value);
    if (numCompte) { compteEpargne.numCompte = numCompte; }
    this.compteService.saveCompteEpargne(clientId, compteEpargne).subscribe(() => {
      alert('Le compte a été enregistré avec succès');
      this.router.navigate([`../../conseiller/idConseiller/clients/`]);
    });
  }

  goBack() {
    this.router.navigate(['conseiller/:idConseiller/clients']);
  }
}
