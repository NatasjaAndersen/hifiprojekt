

document.querySelector('#gem').addEventListener('click', (event) => {
    console.log('event ok');
    event.preventDefault();
    let navn = document.querySelector('#navn').value;
    let email = document.querySelector('#email').value;
    let besked = document.querySelector('#besked').value;
    let dotpos = email.lastIndexOf('.');
    let atpos = email.indexOf('@');

    if (navn == "") {
        alert("Angiv navn");
    } else if (email == "") {
        alert("Angiv en gyldig email");
    } else if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        alert("Angiv en gyldig email");
    } else if (besked == "") {
        alert("Du mangler at skrive en besked");
    } else {

    alert('Beskeden er sendt');
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    
    let init = {
        method: 'POST',
        headers: headers,
        body: `{"navn":"${navn}","email":"${email}","besked":"${besked}" }`,
        cache: 'no-cache',
        mode: 'cors'
    };
    console.log('hejhejhej');
    let request = new Request('http://178.62.227.144/create', init);
    console.log('hhhhhh');
    fetch(request)
        .then(response => { console.log(response) }).catch(err => { console.log(err) });
        console.log('ooooo');
}
});
