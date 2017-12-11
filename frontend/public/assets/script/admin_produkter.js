(() => {
    document.addEventListener('DOMContentLoaded', () => {
        hentDataAdmin(0);
    });
})();


// Funktion som henter data til visning i content
// Funktionen har en parameter - hvis tallet nul hentes alt indhold, og hvis større end nul hentes kun denne ene kategori
function hentDataAdmin(type = 0) {
    // let url = 'http://localhost:3000/produkter';
    // if (type > 0) url += '/' + type;
    fetch('http://localhost:3000/produkter', {
        'method': 'GET',
        'mode':'cors',
        'cache': 'default'
    })
        .then((response) => {
            // grib svarets indhold (body) og send det som et json objekt til næste .then()
            return response.json();
        })
        .then((data) => {
            // nu er json objektet lagt ind i data variablen, udskriv data
            console.log(data);
            var type = '';
            document.getElementById('contentAdmin').innerHTML = "";
            data.forEach(function (item) {
                if (type != item.type) {
                    document.getElementById('contentAdmin').innerHTML += `<h1>${item.type}</h1><br>`;
                    type = item.type;
                }
                document.getElementById('contentAdmin').innerHTML += `
                
                <h2 class="tablecap">${item.navn}</h2><br>
                <table style="width:100%">
                
                  <tr>
                    <th>Pris</th>
                    <th>Kategori</th> 
                    <th>Producent</th>
                    <th>Billede</th>
                    <th>Opdater</th>
                    <th>Slet</th>
                  </tr>
                  <tr>
                    <td>${item.pris} kr</td>
                    <td>${item.type}</td>
                    <td>${item.producent}</td>
                    <td><img src="./assets/media/${item.billede}"></td>
                    <td><button onclick="hentProduktAdmin(${item.ID})" class="opdaterknap">Opdater</button></td>
                <td><button onclick="sletProdukt(${item.ID})" class="slet">Slet produkt</button></td>
                  </tr>
                </table> <hr class="testhr">
                
                </div>
                 `;

            })
        }) 
        
}



//.......OPDATER PRODUKT......

function hentProduktAdmin(id) {
    let url = 'http://localhost:3000/produkt/';
    if (id != undefined) {
        url += '/' + id;
    }
    fetch(url)
        .then((response) => {
            // grib svarets indhold (body) og send det som et json objekt til næste .then()
            return response.json();
        })
        .then((data) => {
            // nu er json objektet lagt ind i data variablen, udskriv data
            console.log(data);
            var type = '';
            document.getElementById('contentAdmin').innerHTML = "";
            data.forEach(function (item) {
                if (type != item.type) {
                    document.getElementById('contentAdmin');
                    type = item.type;
                }
                document.getElementById('contentAdmin').innerHTML += `
                
                <div><h3>${item.navn}</h3>
                <div><img src="./assets/media/${item.billede}"></div>
                <p>Pris: ${item.pris} kr.</p>
                <p>Beskrivelse: ${item.beskrivelse}</p>
                </div><hr>

                
                    <h2>Opdater produkt</h2>
                    <!--INDTAST NAVN INPUT-->
                    <input name="navn" type="text" id="opdaternavn" placeholder="Indtast navn" class="col-md-6 col-md-offset-3 col-xs-12"
                    value="${item.navn}">
                    <br>
                    <!--INDTAST PRIS INPUT-->
                    <input name="pris" type="text" id="opdaterpris" placeholder="Indtast pris" class="col-md-6 col-md-offset-3 col-xs-12"
                    value="${item.pris}">
                    <br>
                    <!--BESKRIVELSE TEXTAREA-->
                    <textarea name="beskrivelse" id="opdaterbeskrivelse" rows="4" cols="57" class="col-md-6 col-md-offset-3 col-xs-12" 
                    placeholder="skriv din kommentar her">${item.beskrivelse}</textarea>
                    <br>
                    <!--SELECT BOKS 1, KATEGORI-->
                    <select name="select1" id="opdaterfk_kategori_id" class="col-md-4 col-md-offset-4">
                <option>Vælg kategori</option>
                    <option value="1">CD afspillere</option>
                    <option value="2">DVD afspillere</option>
                    <option value="3">Effektforstærkere</option>
                    <option value="4">Forforstærkere</option>
                    <option value="5">Højtalere</option>
                    <option value="6">Int. Forstærkere</option>
                    <option value="7">Pladespillere</option>
                    <option value="8">Rørforstærkere</option>
          
            </select><br>
                    <!--SELECT BOKS 2, PRODUCENT-->
                    <select name="select2" id="opdaterfk_producent" class="col-md-4 col-md-offset-4">
                    <option>Vælg producent</option>
                        <option value="1">Creek Audio Ltd</option>
                        <option value="2">Exposure</option>
                        <option value="3">Parasound</option>
                        <option value="4">Manley</option>
                        <option value="5">Pro-ject Audio systems</option>
                        <option value="6">Bösendorfer</option>
                        <option value="7">Epos Ltd</option>
                        <option value="8">Harbeth Loudspeakers</option>
                        <option value="9">Jolida</option>
                       
            </select>
            <br>
            <button id="opdaterProdukt" class="opdaterknap col-md-12 col-md-offset-3 btn-success">Gem opdatering</button>
            <button class="slet col-md-12">Slet produkt</button>
            
          
                        `;

                document.querySelector('#opdaterProdukt').addEventListener('click', (event) => {
                    console.log('event ok');
                    event.preventDefault();
                    let navn = document.querySelector('#opdaternavn').value;
                    let pris = document.querySelector('#opdaterpris').value;
                    let beskrivelse = document.querySelector('#opdaterbeskrivelse').value;
                    let fk_kategori_id = document.querySelector('#opdaterfk_kategori_id').value;
                    let fk_producent = document.querySelector('#opdaterfk_producent').value;
                    // let billede = document.querySelector('#billede').value;

                    if (navn == "") {
                        alert("Angiv navn");
                    } else if (pris == "") {
                        alert("Angiv en pris");
                    } else if (beskrivelse == "") {
                        alert("Angiv en beskrivelse");
                    } else if (fk_kategori_id == "") {
                        alert('Angiv en kategori');
                    } else if (fk_producent == "") {
                        alert("Angiv en producent");
                    } else {

                        alert('Produktet er opdateret!');
                        let headers = new Headers();
                        headers.append('Content-Type', 'application/json');

                        let init = {
                            method: 'PUT',
                            headers: {
                                'Authorization': localStorage.getItem('token'),
                                'userID': localStorage.getItem('userid'), 'Content-Type': 'application/json'
                            },
                            body: `{"navn":"${navn}","pris":${pris},"beskrivelse":"${beskrivelse}",
                                "fk_kategori_id":"${fk_kategori_id}", "fk_producent":"${fk_producent}"}`,
                            cache: 'no-cache',
                            mode: 'cors'
                        };
                        console.log('hejhejhej');
                        let request = new Request('http://localhost:3000/produkt/' + id, init);
                        console.log('hhhhhh');
                        fetch(request)
                            .then(response => {window.location.replace(`admin.html`); console.log(response) }).catch(err => { console.log(err) });
                        console.log('ooooo');
                    }
                });

            })
        })

}


//..............................OPRET PRODUKT.......................


document.querySelector('#gemProdukt').addEventListener('click', (event2) => {
    console.log('event ok');

    event2.preventDefault();
    let navn = document.querySelector('#navn').value;
    let pris = document.querySelector('#pris').value;
    let beskrivelse = document.querySelector('#beskrivelse').value;
    let fk_kategori_id = document.querySelector('#fk_kategori_id').value;
    let fk_producent = document.querySelector('#fk_producent').value;
    // let billede = document.querySelector('#billede').value;

    if (navn == "") {
        alert("Angiv navn");
    } else if (pris == "") {
        alert("Angiv en pris");
    } else if (beskrivelse == "") {
        alert("Angiv en beskrivelse");
    } else if (fk_kategori_id == "") {
        alert('Angiv en kategori');
    } else if (fk_producent == "") {
        alert("Angiv en producent");
    } else {

        alert('Produktet er nu oprettet');
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let init = {
            method: 'POST',
            headers: {
                'Authorization': localStorage.getItem('token'),
                'Content-Type': 'application/json',
                'userID': localStorage.getItem('userid')
            },
            body: `{"navn":"${navn}","pris":${pris},"beskrivelse":"${beskrivelse}","fk_kategori_id":"${fk_kategori_id}", 
        "fk_producent":"${fk_producent}"}`,
            cache: 'no-cache',
            mode: 'cors'
        };
        console.log('hejhejhej');
        let request = new Request('http://localhost:3000/oprett', init);
        console.log('hhhhhh');
        fetch(request)
            .then(response => { window.location.replace(`admin.html`); console.log(response) }).catch(err => { console.log(err) });
        console.log('ooooo');
    }
});


//.........................OPRET KATEGORI.......................
document.querySelector('#gemKategori').addEventListener('click', (event2) => {
    console.log('event ok');
    event2.preventDefault();
    let kategori = document.querySelector('#kategori').value;
    if (kategori == "") {
        alert("Angiv navn");
    } else {

        alert('Kategorien er nu oprettet');
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let init = {
            method: 'POST',
            headers: {
                'Authorization': localStorage.getItem('token'),
                'Content-Type': 'application/json',
                'userID': localStorage.getItem('userid')
            },
            body: `{"kategori":"${kategori}"}`,
            cache: 'no-cache',
            mode: 'cors'
        };
        console.log('hejhejhej');
        let request = new Request('http://localhost:3000/opretkategori', init);
        console.log('hhhhhh');
        fetch(request)
            .then(response => {  window.location.replace(`admin.html`); console.log(response)}).catch(err => { console.log(err) });
        console.log('ooooo');
    }
});




//........SLET PRODUKT.......

function sletProdukt(id) {
    if(confirm('Er du sikker på at du vil slette dette produkt? Du kan ikke fortryde dette.')){
    let url = 'http://localhost:3000/produkt'; // API'et/routet, det som der står i URL'en i browseren
    if (id != undefined) {
        url += '/' + id;
    }
    console.log(url);
    alert('Produktet er nu slettet fra databasen');
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let init = {
        method: 'DELETE',
        headers: {
            'Authorization': localStorage.getItem('token'),
            'Content-Type': 'application/json',
            'userID': localStorage.getItem('userid')
        },
        cache: 'no-cache',
        mode: 'cors'
    };
    let request = new Request(url, init);
    fetch(request) // fetch udskriver API'et
        .then((response) => {
            // grib svarets indhold (body) og send det som et json objekt til næste .then()
            return response.json();
        })
        .then((data) => {
            // nu er json objektet lagt ind i data variablen, udskriv data
            console.log(data);
            window.location.replace(`admin.html`);
        })
        .catch(err => { console.log(err); });
} 


};

document.getElementById('logud').addEventListener('click', () => {/*Her laver vi en localstoage clear, som clearer din storage og logger
    dig af systemet*/
    if (confirm('vil du logge af?')) { //Jeg beder JS om at spørge brugeren om personen er sikker på at ville logge af
        localStorage.clear(); //Hvis brugeren bekræfter det ryger vi herned hvor jeg beder koden om at rydde det lokale 'lager' fra browseren
        alert('Du er nu logget ud');//Derefter kommer der en alert der informerer om at brugeren nu er logget af
        window.location.replace('login.html');//Til sidst bliver brugeren omdirigeret til login siden.
    }
})
