const mysql = require('mysql2');

module.exports = {
    'connect': () => {
        return mysql.createConnection({
            'host': '178.62.227.144',
            'user': 'root',
            'password': '',
            'database': 'hifi'
        });
    }
};