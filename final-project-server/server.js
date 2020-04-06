const express = require('express');
const pgDao = require('./dao');
const cors = require('cors');
const app = express();

const PORT = 3500;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get('/api/playlist', pgDao.getPlaylists);
app.get('/api/playlist/:id', pgDao.getPlaylist);
app.post('/api/playlist', pgDao.postTrack);
