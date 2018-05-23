package fr.proxibanque.proxibanquesi.service;

import java.util.List;

import fr.proxibanque.proxibanquesi.exceptions.ServiceException;
import fr.proxibanque.proxibanquesi.model.Client;

public interface GestionClientService {
	
	void creerClient(Client client) throws ServiceException;
	
	void creerClientAvecConseiller(Client client, long idConseiller) throws ServiceException;
	
	Client obtenirClient(long idClient);
	
	List<Client> obtenirTousClients();
	
	List<Client> obtenirClientsParIdConseiller(long idConseiller);
	
	void modifierClient(Client client) throws ServiceException;
	
	void supprimerClient(long idClient) throws ServiceException;
	
}
