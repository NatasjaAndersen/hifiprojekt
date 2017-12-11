const mysql = require('mysql2');

module.exports = {
    'connect': () => {
        return mysql.createConnection({
            'host': '178.62.227.144',
            'user': 'root',
            'password': 'baliosseahorsey6507',
            'database': 'hifi'
        });
    }
};//HUSK AT ÆNDR I ALLE LOCALHOST TIL IPEN FRA DIGITAL OCEAN I DET PROJEKT DER ER FORBUNDET TIL PUTTY (DET HER PROJEKT ER FORBUNDET)
//Det vil sige at det hifiprojekt der ligger på github og bliver comitted til github skal have ip adressen i stedet for localhost
//Localhost skal vi bruger når vi arbejder lokalt som er i et andet projekt på computeren, når man er sikker på at det lokale projekt virker
//Sætter vi det over i cloud projektet og comitter til github via visual studio og putty, localhost projektet skal ALDRIG comittes til github