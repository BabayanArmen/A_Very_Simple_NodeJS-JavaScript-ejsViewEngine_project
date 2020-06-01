var username = document.querySelector('#username')
var password = document.querySelector('#password')

async function login() {
    obj = {
        username: username.value,
        password: password.value,
    }
    const response = await fetch('http://localhost:3000/user/login', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response
    const loginInfo = await response.json()
    // console.log(data)
    // console.log(loginInfo.login)  // says true or false
    if(loginInfo.login) {
        window.localStorage.setItem('loggedin', true)
        switch (loginInfo.status) {
            case 'admin': {
                window.location.href = '/admin';
                window.localStorage.setItem('status', 'admin');
                break;
            }
            case 'user': {
                window.location.href = '/';
                window.localStorage.setItem('status', 'user');
                break;
            }
        }
         
    } else alert('login failed')
    username.value = ''
    password.value = ''
}
