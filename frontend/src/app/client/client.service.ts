import { Injectable, Inject } from '@angular/core';
import { Client } from './client';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Conseiller } from '../conseiller/conseiller';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class ClientService {

  constructor(private route: ActivatedRoute,
    private http: HttpClient,
    @Inject('BACKEND_URL') private baseURL: string
  ) { }

  /**
  * Affiche la liste des clients.
  */
  loadClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseURL + 'client/all')
      .map((clients: any[]) => clients.map(clientdata => new Client(clientdata)));
  }

  /**
  * Affiche la liste des clients par conseiller.
  */
  loadClientsParConseiller(idConseiller: number): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseURL + 'client/' + idConseiller + "/all")
      .map((clients: any[]) => clients.map(clientdata => new Client(clientdata)));
  }

  /**
  * Affiche un client par son id.
  */
  loadClient(idClient: number): Observable<Client> {
    return this.http.get(`${this.baseURL}client/${idClient}`)
      .map(clientData => new Client(clientData));
  }

  /**
  * Sauvegarde le client du formulaire (nouveau ou édité selon l'url).
  */
  saveClient(client: Client): Observable<any> {
    const url = `${this.baseURL}client/` + (client.idClient ? `${client.idClient}` : '');
    const method = client.idClient ? 'put' : 'post';
    return this.http.request(method, url, { body: client });
  }

  /**
  * Sauvegarde le client du formulaire (nouveau ou édité selon l'url) et l'attribut au conseiller loggé.
  */
  saveClientAvecConseiller(client: Client, idConseiller: number): Observable<any> {
    const url = `${this.baseURL}conseiller/${idConseiller}/client/` + (client.idClient ? `${client.idClient}` : '');
    const method = client.idClient ? 'put' : 'post';
    return this.http.request(method, url, { body: client });
  }

  /**
  * Supprime le client sélectionné.
  */
  deleteClient(clientId: number): Observable<any> {
    return this.http.delete(`${this.baseURL}client/${clientId}`);
  }

  /**
  * Audit de tous les clients de l'agence.
  */
  auditAgence(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseURL + 'audit')
      .map((clients: any[]) => clients.map(clientdata => new Client(clientdata)));
  }

}
