# 1. On part d'une base Node.js officielle et allégée (alpine)
FROM node:18-alpine

# 2. On crée un dossier de travail à l'intérieur du conteneur
WORKDIR /app

# 3. On copie d'abord les fichiers listant les dépendances (package.json)
COPY package*.json ./

# 4. On demande à Docker d'installer les dépendances à l'intérieur du conteneur
RUN npm install

# 5. On copie tout le reste de notre code  dans le conteneur
COPY . .

# 6. On indique que notre application va utiliser le port 3000
EXPOSE 3000

# 7. La commande qui sera exécutée au démarrage du conteneur
CMD ["npm", "start"]