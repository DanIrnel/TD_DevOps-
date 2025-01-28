const express = require('express');
const app = express();
const port = 3000;

// Route qui existe
app.get('/', (req, res) => {
  res.send('Page d\'accueil');
});

// Middleware pour gérer les routes non trouvées
app.use((req, res) => {
  res.status(404).send('Page non trouvée');
});

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
