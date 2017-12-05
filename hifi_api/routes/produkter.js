const db = require('../config/sql').connect();
const security = require('../services/security');
module.exports = function (app) {
    app.get('/produkter', function (req, res) {
        db.query(`SELECT produkter.ID, produkter.navn, produkter.pris, produkter.beskrivelse, produkter.billede, kategori.kategori AS type, producent.producent
                    FROM produkter INNER JOIN kategori ON produkter.fk_kategori_id = kategori.ID
                    INNER JOIN producent ON produkter.fk_producent = producent.ID ORDER BY kategori.kategori
                    `, function (err, data) {
            res.send(data);
        })
    });
//.......SØGEFUNKTION..................
    app.get('/produkter/sog/:id', function (req, res, id) {
        db.query(`SELECT *, fk_kategori_id AS type FROM produkter INNER JOIN kategori ON produkter.fk_kategori_id = kategori.id where navn LIKE "%${req.params.id}%"`, function (err, data) {
            res.send(data);
        })
    });
//.......PRODUKT NÅR DER TRYKKES......
app.get('/produkter/:id', function (req, res, id) {
    db.query(`SELECT produkter.ID, produkter.navn, produkter.pris, produkter.beskrivelse, produkter.billede, kategori.kategori AS type, producent.producent FROM produkter INNER JOIN kategori ON produkter.fk_kategori_id = kategori.ID INNER JOIN producent ON produkter.fk_producent = producent.ID where produkter.fk_kategori_id = ?`, [req.params.id], function (err, data) {
        res.send(data);
    })
});
    
    app.get('/produkt/:id', function (req, res, id) {
        db.query(`SELECT produkter.ID, produkter.navn, produkter.pris, produkter.beskrivelse, produkter.billede FROM produkter where produkter.id = ?`, [req.params.id], function (err, data) {
            res.send(data);
        })
    });


//..........................................ADMIN CRUD AF PRODUKTER.................................

app.post('/oprett', security.isAuthenticated, function (req, res, next) {
    
            let navn = req.body.navn;
            let pris = req.body.pris;
            let beskrivelse = req.body.beskrivelse;
            let fk_kategori_id = req.body.fk_kategori_id;
            let fk_producent = req.body.fk_producent;
            let billede = req.body.billede;
    console.log(navn);
    
           let sql = `INSERT INTO produkter(id, navn, pris, beskrivelse, fk_kategori_id, fk_producent, billede) 
           VALUES (null, ?,?,?,?,?,"pladespiller.jpg")`;
    
           db.query(sql,[navn,pris,beskrivelse,fk_kategori_id,fk_producent,billede], function (err, data) {
    
               if (err) {
                    console.log(err);
                } else {
                    res.send("Ok");
                    
                }
            })
    
       });

       //.............................OPRET KATEGORI.......................

       app.post('/opretkategori', security.isAuthenticated, function (req, res, next) {
        
                let kategori = req.body.kategori;
               
        console.log(kategori);
        
          
        
               let sql = `INSERT INTO kategori(ID,kategori)values(null,?)`;
        
               db.query(sql,[kategori], function (err, data) {
        
                   if (err) {
                        console.log(err);
                    } else {
                        res.send("Ok");
                    }
                })
        
           });



          
           app.put('/produkt/:id', security.isAuthenticated, function (req, res) { // selve routet som har put metoden
            let navn = req.body.navn;
            let pris = req.body.pris;
            let beskrivelse = req.body.beskrivelse;
            let fk_kategori_id = req.body.fk_kategori_id;
            let fk_producent = req.body.fk_producent;
            console.log(navn);
            let sql = `UPDATE produkter SET navn=?,pris=?,beskrivelse=?,fk_kategori_id=?,fk_producent=? WHERE ID=?`;
            db.query(sql, [navn, pris, beskrivelse, fk_kategori_id, fk_producent, req.params.id], function (err, data) {
                if (err) {
                    console.log(err);
                } else {
                    res.send("Ok");
                }
            })
        });




        app.del('/produkt/:id', security.isAuthenticated, function (req, res) { //Husk a "del" er restify depending
           
            let sql = `DELETE FROM produkter WHERE id = ?`
            db.query(sql,[req.params.id], function (err, data) {
                if (err){
                    console.log(err);
                }else{
                   res.send("Ok"); 
                }
            
        })
        });




}