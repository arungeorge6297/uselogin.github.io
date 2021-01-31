// Namukku html content javascriptil kittan kure method undu like document.getElementById,getElementByClass,document.queryselector('#password) etc...

let usernameInput = document.getElementById('username')
let passwordInput = document.getElementById('password')
let usernamemsg = document.getElementById('username-msg')
let passwordmsg = document.getElementById('password-msg')
let usernameok = false;
let passwordok = false;

// Ini nammal textfieldil enthu type cheythalum aa value namuku kittanam.Athinu <input type="text" name="username" id="username" onkeyup="usernameHandler()"><br/> ingane cheythittu "usernameHandler" ne script.js il function il vilikanam."event" anu namukku ee values tharunna function."event.target" vivlichal namukku aa type field full kittum."event.target.value" vilvichal namuku aa fieldil adikunna correct value kittum.

function usernameHandler()
{
    let uservalue = event.target.value
    if (uservalue.length<5){
        usernamemsg.innerHTML = 'Atleast 5 characters required';
    }else{
        usernameok = true;
        usernamemsg.innerHTML = '';

    }
}

function passwordHandler()
{
    let passwordvalue = event.target.value
    if (passwordvalue.length<8){
        passwordmsg.innerHTML = 'Atleast 8 characters required';
    }else{
        passwordok = true;
        passwordmsg.innerHTML = '';
    }
}

function submitHandler()
{
    event.preventDefault() 
    if ( usernameok && passwordok) {
        usernameInput.style.border = '2px solid green'
        passwordInput.style.border = '2px solid green'
    }else{
        usernameInput.style.border = '2px solid red'
        passwordInput.style.border = '2px solid red'
    }
}

// ivide event.preventDefault() use cheyyunne,allenkil submit adikumbol red color pettennu vannu pokum,cause,page refresh akunnakondu.

