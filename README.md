# VoteEnLigne
Elles sont nombreuses les entreprises qui bonifient leurs employés selon leur performance durant une période donnée En effet, souvent les critères de choix sur les agents à primer font polémiques car certains révèlent du favoritisme ou népotisme. Cette application permet donc de dématérialiser le processus de sélection. Elle permet de disponibilité la liste des employés et de procéder aux vote en ligne. Les résultats sont instantanés et ne nécessitent aucune intervention pour éviter de manipuler les données. 
## Technologie utilisee:
 Nodejs  le framework qui permet de developper des applications cote serveur entierement en javaSCript                            
 Mongoose  le package permettant de creer le model de base de donnees MOngoDB(creer egalement un compte pour votre application et renseigner les acces et l'url dans votre code) et y acceder en ligne                                                                
body-parser le package qui permet d'analyser les requetes http venant des clients                                                           
express le middleware qui permet de rendre le contenu en html                                                                     
pusher une plateforme (API) en ligne qui permet de s'enregistrer dans un canal evenementiel (il faut y creer un compte https://pusher.com/ pour son app et renseigner code d'acces dans votre code pour son authentification.                                
CORS (Cross Origin Ressource Sharing) qui facilite les requetes d'origine diverses (entendez par ici: venant de domaines differents)
## Comment l'utiliser ?
### Installer les dependances:
npm install 

### Demarrer le serveur local sur le port 3000
npm run dev

### Demarrer l'application  de facon generale: 
npm start 

## Info sur l'application
### Autheur: 
Abdoul-Kader Traore
### Version: 
1.0.0
## NB 
Cette application est juste un exemple de code en Nodejs. Elle n'est pas complete et ne fait pas forcement tout( Par exemple eviter qu'une personne vote plus d'une fois. Creer juste des login pour chaque employe et limiter le nombre de votes lie a la session et l'identifiant). Vous pouvez l'ameliorer.


