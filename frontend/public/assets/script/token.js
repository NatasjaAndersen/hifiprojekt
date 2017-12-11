(() => {
    document.addEventListener('DOMContentLoaded', () => {
        if (localStorage.getItem('token') === null) {
            window.location.assign('178.62.227.144:3000/login.html');
        } else {
            const template = document.querySelector('template');
            const userElem = template.content.querySelector('.userInfo');
            console.log(localStorage.getItem('token'));
<<<<<<< HEAD
<<<<<<< HEAD
            fetch('http://178.62.227.144:3001/admin.html', {
=======
            fetch('http://localhost:3001/admin.html', {
>>>>>>> 14d4dd3a02cf6b5bc948b98225bee1e1d5818760
=======
            fetch('http://178.62.227.144:3000/admin.html', {
>>>>>>> bdf270c4b4aa5c798d6bc7c173177d8f73a121e2
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
