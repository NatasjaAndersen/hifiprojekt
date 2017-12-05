const db = require('../config/sql').connect();

module.exports = function (app) {

   app.post('/create', function (req, res) {

       let navn = req.body.navn;
        let email = req.body.email;
        let besked = req.body.besked;


       console.log(navn);
        console.log(email);
        console.log(besked);

       let sql = `INSERT INTO formular(id, navn, email, besked, oprettet) VALUES (null, ?,?,?, CURRENT_TIMESTAMP)`;

       db.query(sql,[navn,email,besked], function (err, data) {

           if (err) {
                console.log(err);
            } else {
                res.send("Ok");
            }
        })

   });

}