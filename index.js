
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Bienvenue sur mon projet DevOps !');
});

app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong' });
});

// Exporter l'application pour les tests (sans démarrer le serveur)
if (require.main === module) {
  app.listen(port, () => {
    console.log(`L'application tourne sur le port ${port}`);
  });
}

module.exports = app;