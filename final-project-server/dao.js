const { Pool } = require('pg');

const pool = new Pool({
    "host" : "localhost",
    "port" : 5432,
    "user" : "postgres",
    "password" : "admin"
});

const getPlaylists = async (request, response) => {
    try {
        await pool.connect();
        const results = await pool.query('SELECT * from playlist');
        response.status(200).send(results.rows);
    } catch (e) {
        response.status(400).send(e);
    }
};

module.exports.getPlaylists = getPlaylists;
