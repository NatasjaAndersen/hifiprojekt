const db = require('../config/sql').connect();
const security = require('../services/security');

module.exports = (app) => {
    app.get('/users', security.isAuthenticated, (req, res) => {
        db.query('SELECT id, username FROM users', (error, rows) => {
            res.send(rows);
        });
    });

    app.get('/getUser', security.isAuthenticated, (req, res) => {
        db.query('SELECT username FROM users where id = ?', req.header('userID'), (error, rows) => {
            res.send(rows);
        });
    });
};