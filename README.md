# Projet_virtualisation

CE PROJET A ÉTÉ RÉALISÉ PAR PAYS CHRISTOPHE TD47 FISE

Ce projet permet de gérer des utilisateurs avec les fonctionnalités suivantes :

L'application est construite avec un frontend HTML/CSS et un Backend utilisant Node.js , une base de données MySQL
Les services sont conteneurisés à l'aide de Docker et orchestrés avec Docker Compose

--------------FONCTIONNALITÉS----------------------------------------------------------
Frontend : Affichage de la liste des utilisateurs et formulaire d'inscription 
Backend : API REST qui peut récupérer, ajouter supprimer des utilisateurs.
Base de données : MySQL pour stocker les informations des utilisateurs.

Technologies utilisées

Frontend : HTML,CSS, JavaScript
Backend : Node.js, Express.js
Base de données : MySQL
Containerisation : Docker
Orchestration : Docker Compose


##Prérequis 
Docker, Docker Compose doivent être installés.

clonez le dépôt :
git@github.com:chrichripc/Projet_virtualisation.git

Dans le répertoire du projet, construisez l'image Docker et lancez les services avec Docker Compose 
avec la commande : docker-compose up --build
l'application sera accessible aux adresses suivante :
Frontend : http://localhost:3000
Backend : http://localhost:5000


Utilisation: 
charger les utilisateurs : 
 Cliquez sur le bouton charger les utilisateurs pour afficher la liste des utilisateurs inscrit si elle n'apparait pas

Ajouter des utilisateur : 
Remplissez le formulaire "Ajouter un Utilisateur" avec un nom et un email, puis cliquez sur le bouton "s'inscrire" pour ajouter un utilisateur à la base de données

Supprimer un utilisateur : 
cliquez sur le bouton "supprimer" à côté de l'utilisateur que vous souhaitez supprimer de la liste

DOCKER 

Dockerfile pour le backend
Le Dockerfile pour le backend configure une image pour exécuter un serveur Node.js. il expose le port 5000 pour l'API.
j'utilise wait-for-it un petit script shell utilisé principalement dans les environnements Docker pour garantir qu'une ressource comme une base de donnée est prete avant de lancer une autre application
liens du téléchargement du fichier https://github.com/vishnubob/wait-for-it/blob/master/wait-for-it.sh

Frontend Dockerfile

Le Dockerfile pour le frontend configure un serveur statique Nginx pour servir les fichiers HTML, CSS et JS sur le port 3000

docker-compose.yml 
Le fichier docker-compose.yml orchestre les services statique backend, frontend et la base de donnée MySQL. Il definit les liens entre les services pour qu'ils communiquent entre eux.



Exemple d'API 
Récupérer tous les utilisateurs :

GET http://localhost:5000/users
Ajouter un utilisateur :
POST http://localhost:5000/users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john.doe@example.com"
}
Supprimer un utilisateur :
DELETE http://localhost:5000/users/:id

FIN
