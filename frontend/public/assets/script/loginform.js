(() => {
    document.addEventListener('DOMContentLoaded', () => {/*Spørger om DOM er loadet, så når det er indlæst henter vi loginformen*/
        const form = document.querySelector('.loginForm');// ^^ 

        form.onsubmit = () => {/*Og så bliver den her handler kort som når man submitter på sin form så gør vi noget*/
            const data = JSON.stringify({/*Det vi gør når man trykker ok så laver vi et JSON objekt, get = JSON vi får tilbage
                POSTER = JSON vi sender til serveren*/
                'username': form.username.value,/*JSON objektet skal have to værdier som er username og password metoden kalder vi data*/
                'password': form.password.value//Username og pass er properties
            });
            console.log('hej');

            fetch('http://178.62.227.144:3000/login', { /*Vi laver derefter et fetch der sender det op til en route som hedder login*/
                'method': 'POST',/*Nu skal vi sende informationer med til routen som også er et JSON objekt, omkring hvad er det for en
                method, som her er post, hvilke headers, det er et JSON object*/
                'headers': { 
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Content-Length': data.length 
                },
                'mode': 'cors',
                'cache': 'default',
                'body': data /*Body får værdien data som er et json objekt med bruger og password som vi lavede længere oppe :) */
            })
                .then((result) => result.json())/*Hvis der bliver returneret fra routen så får vi resultatet her, vi kører metoden JSON*/
                .then((data) => { //Så data er nu et JSON objekt som kommer tilbage som så er vores token og id
                    localStorage.setItem('token', data.AccessToken);/*Nu skriver vi i lcoal storage som vi sætter som token og , en værdi som er
                    vores data (det der bliver sendt tilbage) som hedder accesstokn*/
                    localStorage.setItem('userid', data.ID);/*Ny variabel som også er et dataobjekt med id som er genereret længere oppe i koden*/
                    document.getElementById('status').innerHTML = "Du er logget ind"; // kan også hentes fra localStorage
                    alert('Du er nu logget ind');
                    window.location.replace('admin.html');
                })/*Ovenover laver vi en status som kommer frem når man er logget ind :)*/
                .catch((err) => { /*Hvis det går galt så ender vi nede i catchen som jo betyder fejl (error)*/
                   console.log(err);
                   alert('Forkert login');
                });

            return false;
        };
    });
})();

document.querySelector('#logud').addEventListener('click', (event3) => {/*Her laver vi en localstoage clear, som clearer din storage og logger
    dig af systemet*/
    if (confirm('vil du logge af?')) {
        localStorage.clear();
        alert('Du er nu logget ud');
        window.location.replace('login.html');
    }
})
