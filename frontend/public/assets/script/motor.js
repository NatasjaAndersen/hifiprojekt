(() => {
    document.addEventListener('DOMContentLoaded', () => {
        hentData(0);
    });
})();
// Funktion som henter data til visning i content
// Funktionen har en parameter - hvis tallet nul hentes alt indhold, og hvis større end nul hentes kun denne ene kategori
function hentData(type = 0) {
<<<<<<< HEAD
    let url = 'http://localhost:3000/produkter';
=======
    let url = 'http://178.62.227.144:3000/produkter';
>>>>>>> bdf270c4b4aa5c798d6bc7c173177d8f73a121e2
    if (type > 0) url += '/' + type;
    fetch(url)
        .then((response) => {
            // grib svarets indhold (body) og send det som et json objekt til næste .then()
            return response.json();
        })
        .then((data) => {
            // nu er json objektet lagt ind i data variablen, udskriv data
            console.log(data);
            var type = '';
            document.getElementById('content').innerHTML = "";
            data.forEach(function (item) {
                if (type != item.type) {
                    document.getElementById('content').innerHTML += `<h2 class="col-md-12 kategoriHeading">${item.type}</h2><br>`;
                    type = item.type;
                }
                document.getElementById('content').innerHTML += `
                <div class="miniwrap">
                    <div class="col-md-3">
                <div><h3>${item.navn}</h3>
                        
                <div><img src="./assets/media/${item.billede}" class="produktBilleder"></div>
                       
                            
                <p>Pris: ${item.pris} kr.</p>
                            

                <p>Kategori: ${item.type}</p>
                <p>Producent: ${item.producent}</p>
                    
                <p><a onclick="hentProdukt(${item.ID})">Læs mere</a><br><br><br></p></div>
                </div>
                </div>
                        `;
                        
            })
        })
}
document.querySelector('#selecttype').addEventListener('change', (event) => {
    let obj = document.querySelector('#selecttype');
    hentData(obj.value);
})
//______________________________________________________________________________________________

document.querySelector('#soge').addEventListener('input', (event) => {
    let obj = document.querySelector('#soge');
    sogebar(obj.value);
})
function sogebar(type) {
<<<<<<< HEAD
    let url = 'http://localhost:3000/produkter/sog';
=======
    let url = 'http://178.62.227.144:3000/produkter/sog';
>>>>>>> bdf270c4b4aa5c798d6bc7c173177d8f73a121e2
    url += '/' + type;
    fetch(url)
        .then((response) => {
            // grib svarets indhold (body) og send det som et json objekt til næste .then()
            return response.json();
        })
        .then((data) => {
            // nu er json objektet lagt ind i data variablen, udskriv data
            console.log(data);
            // var type = '';
            document.getElementById('content').innerHTML = "";
            data.forEach(function (item) {
                
                document.getElementById('content').innerHTML += `
                <div><h3>${item.navn}</h3>
                <div><img src="./assets/media/${item.billede}"></div>
                <p>Pris: ${item.pris} kr.</p>
                <p>Kategori: ${item.kategori}</p>
                <p><a onclick="hentProdukt(${item.id})"> Læs mere</a><br><br><br></p>
                </div><hr>
                        `;
                        
            })
        })
}
//______________________________________________________________________________________________
function hentProdukt(id) {
    let url = 'http://localhost:3000/produkt/'+id;
    
    fetch(url)
        .then((response) => {
            // grib svarets indhold (body) og send det som et json objekt til næste .then()
            return response.json();
        })
        .then((data) => {
            // nu er json objektet lagt ind i data variablen, udskriv data
            console.log(data);
            var type = '';
            document.getElementById('content').innerHTML = "";
            data.forEach(function (item) {
                if (type != item.type) {
                    document.getElementById('content');
                    type = item.type;
                }
                document.getElementById('content').innerHTML += `
                <div><h3>${item.navn}</h3>
                <div><img src="./assets/media/${item.billede}"></div>
                <p>Pris: ${item.pris} kr.</p>
                <p>Beskrivelse: ${item.beskrivelse}</p>
                </div><hr>
                        `;
                        
            })
        })
    }







