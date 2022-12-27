const login = document.getElementById('login');
const signup = document.getElementById('signup');
const login2 = document.getElementById('login2');
const signup2 = document.getElementById('signup2');
const signupDiv = document.getElementById('registerDiv');
const loginDiv = document.getElementById('loginDiv');
const signupLink = document.getElementById('signupLink');
const loginLink = document.getElementById('loginLink');


signup.addEventListener('click', function() {
    signup.style.color ='white';
    login.style.color ='black';
    login.style.backgroundColor ='white';
    signup.style.backgroundColor = 'rgb(51, 122, 255)';
    signup2.style.color ='white';
    login2.style.color ='black';
    login2.style.backgroundColor ='white';
    signup2.style.backgroundColor = 'rgb(51, 122, 255)';

    loginDiv.style.display = 'none';
    signupDiv.style.display = 'flex';

    window.history.replaceState(null, null, 'index.php');

    document.getElementById('warn').style.display = 'none';
    document.getElementById('success').style.display = 'none';
    document.getElementById('warn2').style.display = 'none';
})
login2.addEventListener('click', function() {
    signup.style.backgroundColor ='white';
    signup.style.color ='black';
    login.style.backgroundColor = 'rgb(51, 122, 255)';
    login.style.color = 'white';
    signup2.style.backgroundColor ='white';
    signup2.style.color ='black';
    login2.style.backgroundColor = 'rgb(51, 122, 255)';
    login2.style.color = 'white';

    loginDiv.style.display = 'flex';
    signupDiv.style.display = 'none';

    window.history.replaceState(null, null, 'index.php');

    document.getElementById('warn').style.display = 'none';
    document.getElementById('success').style.display = 'none';
    document.getElementById('warn2').style.display = 'none';
})

signupLink.addEventListener('click', function () {
    signup.click();
});
loginLink.addEventListener('click', function () {
    login2.click();
});

const checkbox = document.getElementById('checkbox');
const password = document.getElementById('password');

checkbox.addEventListener('change', function() {
    if (password.getAttribute('type') == 'password') {
        document.getElementById('password').setAttribute('type', 'text');
    }
    else{
        document.getElementById('password').setAttribute('type', 'password');
    }
})
const regcheckbox = document.getElementById('regcheckbox');
const regpassword = document.getElementById('regpassword');

regcheckbox.addEventListener('change', function() {
    if (regpassword.getAttribute('type') == 'password') {
        document.getElementById('regpassword').setAttribute('type', 'text');
        document.getElementById('regpasswordr').setAttribute('type', 'text');
    }
    else{
        document.getElementById('regpassword').setAttribute('type', 'password');
        document.getElementById('regpasswordr').setAttribute('type', 'password');
    }
})