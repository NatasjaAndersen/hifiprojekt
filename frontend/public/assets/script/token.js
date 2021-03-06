(() => {
    document.addEventListener('DOMContentLoaded', () => {
        if (localStorage.getItem('token') === null) {
            window.location.assign('178.62.227.144:3001/login.html');
        } else {
            const template = document.querySelector('template');
            const userElem = template.content.querySelector('.userInfo');
            console.log(localStorage.getItem('token'));
            fetch('http://178.62.227.144:3001/admin.html', {
                'method': 'GET',
                'headers': {
                    'Authorization': localStorage.getItem('token'),
                    'userID': localStorage.getItem('userid')
                },
                'mode': 'cors',
                'cache': 'default'
            })
                .then((result) => result.json())
                .then((users) => {
                    users.forEach(function (user) {
                        userElem.textContent = `Brugernavn: ${user.username}`;
                        document.querySelector('main').appendChild(document.importNode(template.content, true));
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    });
})();
