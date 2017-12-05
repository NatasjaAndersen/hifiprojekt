const db = require('../config/sql').connect();
const passwordHash = require('password-hash');
const crypto = require('crypto');



module.exports = (app) => {
    app.post('/login', (req, res) => { //route som bliver sendt med post vi kalder det login, med req og res
        if (req.body.password !== '' && req.body.username !== '') {/*spørger om der er sendt med req body fra formularen, altså er der sendt
info om username og password, hvis ja så bliver det trukket ud fra db, eller det giver i hvert fald mening at gøre det*/
console.log(passwordHash.generate(req.body.password)); //Udksriver hvordan det bliver generet
db.execute('SELECT id, password FROM users WHERE username = ?', [req.body.username], (selError, rows) => {/*nu udtrækker vi i db
                fra tabelen user for at se om vi har en bruger med det brugernavn der bliver sendt til db, her henter vi id og pass fra brugeren
                fra bruger tabelen hvor brugernavnet er = username, hvis det ikke går godt så laver vi en select error, og går det godt
                så får vi de her rows med user og pass*/
                if (passwordHash.verify(req.body.password, rows[0].password)) {/*Hvis pass matcher den række der er hentet ud som er row 0.password
                    så skal vi...: */
                    crypto.randomBytes(256, (err, buf) => { /*Hvis det er sandt så fortsætter vi her hvor vi generere en streng/token som er 
                        krypteret, 256tegn lang.*/
                        if (err) return res.status(500).end();//Hvis det ikke passer sender vi denne fejlkode til brugeren
                        else {
                            const token = buf.toString('hex');/*Hvis det går som det skal bliver token genereret og hernede laver vi en variabel
                            der hedder token, som er lig med buff(token) som vi laver til en streng med argumentet hex som er et to cifret tal
                            det betyder at de 256 tegn bliver gagget med to og derefor ender med at blive 512tegn lang, tegnene fylder en byte
                            men når det bliver konverteret til hex fylder de naturligvis 2 bytes.*/
                            db.execute('INSERT INTO accesstokens SET userid = ?, token = ?', [rows[0].id, token], (insError) => {/*Når token er
                                lavet så kan vi indsætte den i db som vi gør med denne SQL sætning hvor vi sætter et userid som er lig med det der
                                bliver hentet ud fra databasen, og en token som er den token vi har lavet ovenover, første værdi ind til userid, token ind i token*/
                                if (insError) return res.status(500).end();/*Hvis der er noget der går galt så returnerer vi en status 500 til brugeren, og lukker 
                                med en end*/
                                else return res.send({ "ID": rows[0].id, "AccessToken": token });/*Hvis det går godt sender vi et JSON objekt med userid
                                og den token der bliver genereret så det bliver sendt tilbage til brugeren (local/session storage)*/
                            });
                        }
                    });
                } else {
                    res.send(401);
                }
            });
        } else {
            res.send(401);
        }
    });
};