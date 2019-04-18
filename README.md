# VoteEnLigne
Elles sont nombreuses les entreprises qui bonifient leurs employes selon leur performance durant une periode donnee
En effet, souvent les criteres de choix sur les agents a primer font polemiques car certains revelent du favoritisme ou nepotisme.
Cette application permet donc de dematerialiser le processus de selection. Elle permet de disponibliser la liste des employes et de proceder aux vote en ligne. Les resultats sont instantanes et ne necessitent aucune intervention pour eviter de manipuler les donnees. 
## La technologie utilisee est la suivante:
# Nodejs ====> le framework aui permet de developper des applications cote serveur entierement en javaSCript
# Mongoose ===> le package permettant de creer le model de base de donnees MOngoDB(creer egalement un compte pour votre application et renseigner les acces et l'url dans votre code) et y acceder en ligne 
# body-parser ===> le package qui permet d'analyser les requetes http venant des clients
# express ===> le middleware qui permet de rendre le contenu en html
# pusher ===> une plateforme (API) en ligne qui permet de s'enregistrer dans un canal evenementiel (il faut y creer un compte https://pusher.com/ pour son app et renseigner code d'acces dans votre code pour son authentification
# CORS ===> (Cross Origin Ressource Sharing) qui facilite les requetes d'origine diverses (entendez par ici: venant de domaines differents)
## Comment l'utiliser ?
# Installer les dependances
npm install 

# Demarrer le serveur local sur le port 3000
npm run dev

# Demarrer l'application  de facon generale 
npm start 

## Info sur l'application
### Autheur 
Abdoul-Kader Traore
### Version 
1.0.0
# NB 
Cette application est juste un exemple de code en Nodejs. Elle n'est pas complete et ne fait pas forcement tout( Par exemple eviter qu'une personne vote plus d'une fois === Creer juste des login pour chaque employe et limiter le nombre de vote lie a la seesion et l'identifiant). Vous pouvez l'ameliorer.


