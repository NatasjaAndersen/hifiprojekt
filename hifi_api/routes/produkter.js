const db = require('../config/sql').connect();
const security = require('../services/security');
const fs = require('fs');
const path = require('path');
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

    // app.post('/produkter', security.isAuthenticated, (req, res, next) => { // Route som uploader billeder 
        
    //             let image = 'no-image.png';
        
    //             let sql = `INSERT INTO produkter SET navn=?,pris=?,beskrivelse=?,fk_kategori_id=?,fk_producent=?, billede=?`;
        
    //             let name = (req.body.navn == undefined ? '' : req.body.navn);
    //             let description = (req.body.beskrivelse == undefined ? '' : req.body.beskrivelse);
    //             let price = (req.body.pris == undefined ? 0 : req.body.pris);
    //             let kategori_id = req.body.kategori_id;
    //             let producent_id = req.body.producent_id;
    //             price = price.replace(',', '.');
    //             if (name != '' && description != '' && !isNaN(price)) {
    //                 // håndter billedet, hvis der er sendt et billede 
    //                 if (req.files.billede.name != '') {
    //                     image = req.files.billede.name;
        
    //                     // flyt den uploadede midlertidige fil til billede mappen
    //                     var temp_image = fs.createReadStream('./' + req.files.billede.path); // input stream
    //                     var final_image = fs.createWriteStream('./images/' + image); // output stream
    //                     temp_image.pipe(final_image); // flyt data fra temp til final
    //                     temp_image.on('end', function () {
    //                         // slet den midlertidige fil, når "final_image" er oprettet  
    //                         fs.unlink('./' + req.files.billede.path);
    //                     });
    //                 } else {
    //                     // denne er nødvendig, pga en tom fil bliver lagt i uploadmappen hver gang formularen sendes.
    //                     fs.unlink('./' + req.files.billede.path);
    //                 }
        
    //                 console.log(name, price, description, kategori_id, producent_id, image);
    //                 db.query(sql, [name, price, description, kategori_id, producent_id, image], function (err, data) {
    //                     if (err) {
    //                         console.log(err);
    //                     } else {
    //                         res.json(200, data);
    //                     }
    //                 })
    //             } else {
    //                 res.json(400, {
    //                     message: 'validering fejlede'
    //                 });
    //             }
    //     });

    //     app.get('/images/:name', (req, res, next) => { // Route som gør at uploadede billeder midlertidigt kommer i temp mappen
    //         // det er kun jpg eller png filer jeg ønsker at tillade adgang til her
    //         if (path.extname(req.params.name) == '.jpg' || path.extname(req.params.name) == '.png' || path.extname(req.params.name) == '.gif') {
    //             // forsøg at læs billede filen fra images mappen...
    //             fs.readFile('./images/' + req.params.name, function (err, file) {
    //                 if (err) {
    //                     // den ønskede fil blev ikke fundet, vi sender standard "no-image.png" i stedet
    //                     // dette kunne også have været en res.json(404) 
    //                     fs.readFile('./images/no-image.png', (err2, default_file) => {
    //                         res.writeHead(200);
    //                         res.write(default_file);
    //                         res.end();
    //                     });
    
    //                 } else {
    //                     // her kunne der skaleres "on-the-fly" ... det tager vi en anden dag
    //                     res.writeHead(200);
    //                     res.write(file);
    //                     res.end();
    //                 }
    //             });
    //         } else {
    //             // hvis den ønskede fil ikke er en .jpg eller .png, 
    //             // sendes no-image som standard eller res.json(404)
    //             res.json(404);
    //             // fs.readFile('./api/images/no-image.png', (err, default_file) => {
    //             //    res.writeHead(200);
    //             //    res.write(default_file);
    //             //    res.end();
    //             // });
    //         }
    //     });
    







    // app.post('/produkter', security.isAuthenticated, (req, res, next) => {

    //     let image = 'no-image.png';

    //     let sql = `INSERT INTO produkter SET navn=?,pris=?,beskrivelse=?,fk_kategori_id=?,fk_producent=?, billede=?`;

    //     let name = (req.body.navn == undefined ? '' : req.body.navn);
    //     let description = (req.body.beskrivelse == undefined ? '' : req.body.beskrivelse);
    //     let price = (req.body.pris == undefined ? 0 : req.body.pris);
    //     let kategori_id = req.body.select1;
    //     let producent_id = req.body.select2;
    //     price = price.replace(',', '.');
    //     if (name != '' && description != '' && !isNaN(price)) {
    //         // håndter billedet, hvis der er sendt et billede 
    //         if (req.files.billede.name != '') {
    //             image = req.files.billede.name;

    //             // flyt den uploadede midlertidige fil til billede mappen
    //             var temp_image = fs.createReadStream('./' + req.files.billede.path); // input stream
    //             var final_image = fs.createWriteStream('./images/' + image); // output stream
    //             temp_image.pipe(final_image); // flyt data fra temp til final
    //             temp_image.on('end', function () {
    //                 // slet den midlertidige fil, når "final_image" er oprettet  
    //                 fs.unlink('./' + req.files.billede.path);
    //             });
    //         } else {
    //             // denne er nødvendig, pga en tom fil bliver lagt i uploadmappen hver gang formularen sendes.
    //             fs.unlink('./' + req.files.billede.path);
    //         }

            
    //         console.log(name, price, description, kategori_id, producent_id, image);
    //         db.query(sql, [name, price, description, kategori_id, producent_id, image], function (err, data) {
    //             if (err) {
    //                 console.log(err);
    //             } else {
    //                 res.json(200, data);
    //             }
                
    //         }) 
    //     } else {
    //         res.json(400, {
    //             message: 'validering fejlede'
    //         });
    //     }
    // });


    // app.get('/images/:name', (req, res, next) => {
    //     // det er kun jpg eller png filer jeg ønsker at tillade adgang til her
    //     if (path.extname(req.params.name) == '.jpg' || path.extname(req.params.name) == '.png' || path.extname(req.params.name) == '.gif') {
    //         // forsøg at læs billede filen fra images mappen...
    //         fs.readFile('./images/' + req.params.name, function (err, file) {
    //             if (err) {
    //                 // den ønskede fil blev ikke fundet, vi sender standard "no-image.png" i stedet
    //                 // dette kunne også have været en res.json(404) 
    //                 fs.readFile('./images/no-image.png', (err2, default_file) => {
    //                     res.writeHead(200);
    //                     res.write(default_file);
    //                     res.end();
    //                 });

    //             } else {
    //                 // her kunne der skaleres "on-the-fly" ... det tager vi en anden dag
    //                 res.writeHead(200);
    //                 res.write(file);
    //                 res.end();
    //             }
    //         });
    //     } else {
    //         // hvis den ønskede fil ikke er en .jpg eller .png, 
    //         // sendes no-image som standard eller res.json(404)
    //         res.json(404);
    //         // fs.readFile('./api/images/no-image.png', (err, default_file) => {
    //         //    res.writeHead(200);
    //         //    res.write(default_file);
    //         //    res.end();
    //         // });
    //     }
    // });


    app.post('/oprett', security.isAuthenticated, function (req, res, next) {

                let navn = req.body.navn;
                let pris = req.body.pris;
                let beskrivelse = req.body.beskrivelse;
                let fk_kategori_id = req.body.fk_kategori_id;
                let fk_producent = req.body.fk_producent;
                let billede = req.body.billede;
        console.log(navn);

               let sql = `INSERT INTO produkter(id, navn, pris, beskrivelse, fk_kategori_id, fk_producent, billede) 
               VALUES (null, ?,?,?,?,?,no-image.jpg)`;

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

        db.query(sql, [kategori], function (err, data) {

            if (err) {
                console.log(err);
            } else {
                res.send("Ok");
            }
        });
        

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
        }); 
    });




    app.del('/produkt/:id', security.isAuthenticated, function (req, res) { //Husk a "del" er restify depending
        
        let sql = `DELETE FROM produkter WHERE id = ?`;
        db.query(sql, [req.params.id], function (err, data) {
            if (err) {
                console.log(err);
            } else {
                res.send("Ok");
            }

        }); 
    });




}