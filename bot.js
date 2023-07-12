// Importa las dependencias necesarias
const express = require('express');
const Twit = require('twit');

// Configura las credenciales de Twitter
const T = new Twit({
  consumer_key: '0ulEcdkRJa9JyP1wUXdLg0G92',
  consumer_secret: 'h5hLQuc4HMEP6EW1rusGCnf8pgrcrpibrbExjeMLS6npWeji0y',
  access_token: '1678888146069512193-EDVKgB8foVMRYOMnAD7Iuxi3pJ2Gdv-',
  access_token_secret: 'vGKEfYMuaAnfOrdOYdWGtsIaBkDpTSTNc63wF327YdOzK',
});

// Crea una instancia de Express
const app = express();

// Ruta para recibir las confesiones
app.post('/confessions', (req, res) => {
  // Obtén la confesión enviada en la solicitud
  const confession = req.body.confession;

  // Publica la confesión en Twitter
  T.post('statuses/update', { status: confession }, (err, data, response) => {
    if (err) {
      console.error('Error al publicar la confesión en Twitter:', err);
      res.status(500).send('Error al publicar la confesión en Twitter');
    } else {
      console.log('Confesión publicada en Twitter:', confession);
      res.status(200).send('Confesión publicada en Twitter');
    }
  });
});

// Inicia el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor web iniciado en el puerto 3000');
});
