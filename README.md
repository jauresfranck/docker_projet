#  Projet DevOps de A à Z - API Node.js

Ce projet a été réalisé dans le cadre du TP Final DevOps. Il s'agit d'une API REST simple développée en Node.js (Express), entièrement conteneurisée avec Docker et dotée d'une chaîne d'Intégration et de Déploiement Continus (CI/CD) via GitHub Actions.

##  Description du Projet

L'application est une API basique comprenant :
- Une route d'accueil (`/`) renvoyant un message de bienvenue.
- Une route de "Health Check" (`/ping`) permettant de vérifier que l'API est en ligne (utile pour la surveillance de conteneurs).

Des tests unitaires (avec **Jest** et **Supertest**) ont été implémentés pour valider le comportement de ces routes lors du processus d'Intégration Continue.

##  Conteneurs Docker utilisés

L'application est packagée dans une image Docker personnalisée basée sur `node:18-alpine` (choisie pour sa légèreté).
Le projet utilise **Docker Compose** pour orchestrer le lancement :
- **Service `api-devops`** : Contient notre application Node.js exposée sur le port 3000.

##  Comment installer et lancer le projet en local

### Prérequis
- Avoir [Docker](https://www.docker.com/) et Docker Compose installés sur votre machine.
- Avoir Git pour cloner le dépôt.

### Instructions de lancement

1. **Cloner le dépôt :**
   ```bash
   git clone [https://github.com/jauresfranck/docker_projet.git](https://github.com/jauresfranck/docker_projet.git)
   cd mon-projet-devops