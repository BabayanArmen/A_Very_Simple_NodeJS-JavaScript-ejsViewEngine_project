let loginfo = localStorage.getItem('loggedin')
let status = localStorage.getItem('status')

if(loginfo) {
    document.getElementById("logout").style.display = "block"
    document.getElementById("login").style.display = "none"

    document.getElementById('newsLink').href = "news";
    document.getElementById('contactLink').href = "contact";
    document.getElementById('aboutLink').href = "about";
} 

if(status === 'admin'){
    document.querySelector("#showAdmin").style.display = "block"
} else {document.querySelector("#showAdmin").style.display = "none"}    

async function logout() {
    const response = await fetch('http://localhost:3000/user/logout', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    // const data = await response
    const logioutInfo = await response.json()
    console.log('logout')
    // console.log(data)
    console.log(logioutInfo)
    // alert(logioutInfo.message)
    window.localStorage.removeItem('loggedin')
    window.localStorage.removeItem('status')
    document.getElementById('newsLink').href = "/"
    document.getElementById('contactLink').href = "/"
    document.getElementById('aboutLink').href = "/"
    document.getElementById('adminLink').href = "/"
    document.getElementById("logout").style.display = "none"
    document.getElementById("login").style.display = "block"
    document.querySelector("#showAdmin").style.display = 'none'
    // document.location.href = "/"
}