const pg = require('pg');
pg.defaults.poolSize = 100;

const pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    database: 'final-project-music-albums',
    password: 'admin'
});

const getPlaylists = async (request, response) => {
    try {
        const client = await pool.connect();
        const results = await pool.query('SELECT * from playlist');
        response.status(200).json(results.rows);
        client.release();
    } catch (e) {
        response.status(400).send(e);
    }
};

const postTrack = async (req, res) => {
    try {
        const { id, playlist_id: playlistId, title, uri, master_id: masterId } = req.body;
        const client = await pool.connect();
        const results = await pool.query(`INSERT INTO track VALUES (${id}, ${playlistId}, '${title}', '${uri}',${masterId});`);
        res.status(200).json({ "Response": 'Insert Successful', "Affected Rows": results.rowCount });
        client.release();
    } catch (e) {
        res.status(400).json({ "Error": e.detail, "constraint": e.constraint, "table": e.table });
    }
};

const getPlaylist = async (req, res) => {
    try {
        const id = req.params.id;
        const client = await pool.connect();
        const results = await pool.query(`SELECT * from track WHERE playlist_id = ${id}`);
        res.status(200).json(results.rows);
        client.release();
    } catch (e) {
        res.status(400).json({ "Error": e.detail, "constraint": e.constraint, "table": e.table });
    }
}

module.exports = {
    getPlaylists,
    postTrack,
    getPlaylist
};
