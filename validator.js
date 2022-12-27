const loginField = document.getElementById('loginin');
const passwordField = document.getElementById('password');
const loginButton = document.getElementById('loginButton');

//login page's login field validator.

loginField.addEventListener('input', function() {

    const loginRegExp = new RegExp(/^\w*$/);



    if (!loginRegExp.test(loginField.value)) {
        let nodess = loginField.nextElementSibling;
        if (!(nodess.tagName == 'SPAN') || nodess.textContent == 'minLength:3') {

            let testNode = document.createElement('span');
            testNode.textContent = 'only alphabetical and numeric symbols';
            testNode.style.color = 'red';
            loginField.after(testNode);
            loginField.style.border ='1px solid red';
            loginField.style.outlineColor = 'red';
            loginButton.setAttribute('disabled', '');
            loginButton.style.textDecoration ='line-through';
        }
    }


    if (loginField.value.length < 3 && loginField.value.length > 0 && (loginRegExp.test(loginField.value))) {
        let nodess = loginField.nextElementSibling;
        if (!(nodess.tagName == 'SPAN')) {

            let testNode = document.createElement('span');
            testNode.textContent = 'minLength:3';
            testNode.style.color = 'red';
            loginField.after(testNode);
            loginField.style.border ='1px solid red';
            loginField.style.outlineColor = 'red';
            loginButton.setAttribute('disabled', '');
            loginButton.style.textDecoration ='line-through';
        }
    }
    else if(loginField.value.length == 0){
        loginField.style.border ='none';
        let node = loginField.nextElementSibling;
        let nextNode = node.nextElementSibling;
        if (node.tagName == 'SPAN') {
            node.remove();
            loginButton.removeAttribute('disabled');
            loginButton.style.textDecoration ='none';
            loginField.style.outlineColor = 'rgb(51, 122, 255)';
        }
        if (nextNode.tagName == 'SPAN') {
            nextNode.remove();
        }
    }
    else if(loginField.value.length > 30 && (loginRegExp.test(loginField.value))){
        let nodess = loginField.nextElementSibling;
        if (!(nodess.tagName == 'SPAN')) {

            let testNode = document.createElement('span');
            testNode.textContent = 'maxLength:30';
            testNode.style.color = 'red';
            loginField.after(testNode);
            loginField.style.border ='1px solid red';
            loginField.style.outlineColor = 'red';
            loginButton.setAttribute('disabled', '');
            loginButton.style.textDecoration = 'line-through';
        }

    }
     else {

        let node = loginField.nextElementSibling;
        if (node.tagName == 'SPAN' && (loginRegExp.test(loginField.value))) {
            node.remove();
            loginButton.removeAttribute('disabled');
            loginButton.style.textDecoration ='none';
            loginField.style.outlineColor = 'green';
            loginField.style.border ='1px solid green';
        }

    }

})

//login page's password field validator

passwordField.addEventListener('input', function() {
    const passwordRegExp = new RegExp(/^\w*$/);


    if (!passwordRegExp.test(passwordField.value)) {
        let nodess = passwordField.nextElementSibling;
        if (!(nodess.tagName == 'SPAN') || nodess.textContent == 'minLength:6') {

            let testNode = document.createElement('span');
            testNode.textContent = 'only alphabetical and numeric symbols';
            testNode.style.color = 'red';
            passwordField.after(testNode);
            passwordField.style.border ='1px solid red';
            passwordField.style.outlineColor = 'red';
            loginButton.setAttribute('disabled', '');
            loginButton.style.textDecoration ='line-through';
        }
    }





    if (passwordField.value.length < 6 && passwordField.value.length > 0 && (passwordRegExp.test(passwordField.value))) {
        let nodess = passwordField.nextElementSibling;
        if (!(nodess.tagName == 'SPAN')) {

            let testNode = document.createElement('span');
            testNode.textContent = 'minLength:6';
            testNode.style.color = 'red';
            passwordField.after(testNode);
            passwordField.style.border ='1px solid red';
            passwordField.style.outlineColor = 'red';
            loginButton.setAttribute('disabled', '');
            loginButton.style.textDecoration = 'line-through';
        }
    }
    else if(passwordField.value.length == 0){
        passwordField.style.border ='none';
        let node = passwordField.nextElementSibling;
        let nextNode = node.nextElementSibling;
        if (node.tagName == 'SPAN') {
            node.remove();
            loginButton.removeAttribute('disabled');
            loginButton.style.textDecoration ='none';
            passwordField.style.outlineColor = 'rgb(51, 122, 255)';
        }
        if (nextNode.tagName == 'SPAN') {
            nextNode.remove();
        }
    }
    else if(passwordField.value.length > 15 && (passwordRegExp.test(passwordField.value))){
        let nodess = passwordField.nextElementSibling;
        if (!(nodess.tagName == 'SPAN')) {

            let testNode = document.createElement('span');
            testNode.textContent = 'maxLength:15';
            testNode.style.color = 'red';
            passwordField.after(testNode);
            passwordField.style.border ='1px solid red';
            passwordField.style.outlineColor = 'red';
            loginButton.setAttribute('disabled', '');
            loginButton.style.textDecoration = 'line-through';


        }
    }
     else {
        let node = passwordField.nextElementSibling;
        if (node.tagName == 'SPAN' && (passwordRegExp.test(passwordField.value))) {
            node.remove();
            passwordField.style.border ='1px solid green';
            passwordField.style.outlineColor = 'green';
            loginButton.removeAttribute('disabled');
            loginButton.style.textDecoration ='none';
        }
    }
});


//SignUp page validator starts.

const usernameField = document.getElementById('reglogin');
const firstNameField = document.getElementById('firstName');
const lastNameField = document.getElementById('lastName');
const mobileNumberField = document.getElementById('mobileNumber');
const emailField = document.getElementById('email');
const PasswordField = document.getElementById('regpassword');
const rePasswordField = document.getElementById('regpasswordr');
const signupButton = document.getElementById('regsignup');



usernameField.addEventListener('input', function() {

    const loginRegExp = new RegExp(/^\w*$/);


    if (!loginRegExp.test(usernameField.value)) {
        let nodess = usernameField.nextElementSibling;
        if (!(nodess.tagName == 'SPAN') || nodess.textContent == 'minLength:3') {

            let testNode = document.createElement('span');
            testNode.textContent = 'only alphabetical and numeric symbols';
            testNode.style.color = 'red';
            usernameField.after(testNode);
            usernameField.style.border ='1px solid red';
            usernameField.style.outlineColor = 'red';
            signupButton.setAttribute('disabled', '');
            signupButton.style.textDecoration ='line-through';
        }
    }


    if (usernameField.value.length < 3 && usernameField.value.length > 0 && (loginRegExp.test(usernameField.value))) {
        let nodess = usernameField.nextElementSibling;
        if (!(nodess.tagName == 'SPAN')) {

            let testNode = document.createElement('span');
            testNode.textContent = 'minLength:3';
            testNode.style.color = 'red';
            usernameField.after(testNode);
            usernameField.style.border ='1px solid red';
            usernameField.style.outlineColor = 'red';
            signupButton.setAttribute('disabled', '');
            signupButton.style.textDecoration ='line-through';
        }
    }
    else if(usernameField.value.length == 0){
        usernameField.style.border ='none';
        let node = usernameField.nextElementSibling;
        let nextNode = node.nextElementSibling;
        if (node.tagName == 'SPAN') {
            node.remove();
            signupButton.removeAttribute('disabled');
            signupButton.style.textDecoration ='none';
            usernameField.style.outlineColor = 'rgb(51, 122, 255)';
        }
        if (nextNode.tagName == 'SPAN') {
            nextNode.remove();
        }
    }
    else if(usernameField.value.length > 30 && (loginRegExp.test(usernameField.value))){
        let nodess = usernameField.nextElementSibling;
        if (!(nodess.tagName == 'SPAN')) {

            let testNode = document.createElement('span');
            testNode.textContent = 'maxLength:30';
            testNode.style.color = 'red';
            usernameField.after(testNode);
            usernameField.style.border ='1px solid red';
            usernameField.style.outlineColor = 'red';
            signupButton.setAttribute('disabled', '');
            signupButton.style.textDecoration = 'line-through';
        }

    }
     else {

        let node = usernameField.nextElementSibling;
        if (node.tagName == 'SPAN' && (loginRegExp.test(usernameField.value))) {
            node.remove();
            signupButton.removeAttribute('disabled');
            signupButton.style.textDecoration ='none';
            usernameField.style.outlineColor = 'green';
            usernameField.style.border ='1px solid green';
        }

    }
})

firstNameField.addEventListener('input', function() {

    const loginRegExp = new RegExp(/^([a-zA-z])+$/);


    if (!loginRegExp.test(firstNameField.value)) {
        let nodess = firstNameField.nextElementSibling;
        if (!(nodess.tagName == 'SPAN') || nodess.textContent == 'minLength:3') {

            let testNode = document.createElement('span');
            testNode.textContent = 'only alphabetical symbols';
            testNode.style.color = 'red';
            firstNameField.after(testNode);
            firstNameField.style.border ='1px solid red';
            firstNameField.style.outlineColor = 'red';
            signupButton.setAttribute('disabled', '');
            signupButton.style.textDecoration ='line-through';
        }
    }


    if (firstNameField.value.length < 3 && firstNameField.value.length > 0 && (loginRegExp.test(firstNameField.value))) {
        let nodess = firstNameField.nextElementSibling;
        if (!(nodess.tagName == 'SPAN')) {

            let testNode = document.createElement('span');
            testNode.textContent = 'minLength:3';
            testNode.style.color = 'red';
            firstNameField.after(testNode);
            firstNameField.style.border ='1px solid red';
            firstNameField.style.outlineColor = 'red';
            signupButton.setAttribute('disabled', '');
            signupButton.style.textDecoration ='line-through';
        }
    }
    else if(firstNameField.value.length == 0){
        firstNameField.style.border ='none';
        let node = firstNameField.nextElementSibling;
        let nextNode = node.nextElementSibling;
        if (node.tagName == 'SPAN') {
            node.remove();
            signupButton.removeAttribute('disabled');
            signupButton.style.textDecoration ='none';
            firstNameField.style.outlineColor = 'rgb(51, 122, 255)';
        }
        if (nextNode.tagName == 'SPAN') {
            nextNode.remove();
        }
    }
    else if(firstNameField.value.length > 30 && (loginRegExp.test(firstNameField.value))){
        let nodess = firstNameField.nextElementSibling;
        if (!(nodess.tagName == 'SPAN')) {

            let testNode = document.createElement('span');
            testNode.textContent = 'maxLength:30';
            testNode.style.color = 'red';
            firstNameField.after(testNode);
            firstNameField.style.border ='1px solid red';
            firstNameField.style.outlineColor = 'red';
            signupButton.setAttribute('disabled', '');
            signupButton.style.textDecoration = 'line-through';
        }

    }
     else {

        let node = firstNameField.nextElementSibling;
        if (node.tagName == 'SPAN' && (loginRegExp.test(firstNameField.value))) {
            node.remove();
            signupButton.removeAttribute('disabled');
            signupButton.style.textDecoration ='none';
            firstNameField.style.outlineColor = 'green';
            firstNameField.style.border ='1px solid green';
        }

    }
})

lastNameField.addEventListener('input', function() {

    const loginRegExp = new RegExp(/^([a-zA-z])+$/);


    if (!loginRegExp.test(lastNameField.value)) {
        let nodess = lastNameField.nextElementSibling;
        if (!(nodess.tagName == 'SPAN') || nodess.textContent == 'minLength:3') {

            let testNode = document.createElement('span');
            testNode.textContent = 'only alphabetical symbols';
            testNode.style.color = 'red';
            lastNameField.after(testNode);
            lastNameField.style.border ='1px solid red';
            lastNameField.style.outlineColor = 'red';
            signupButton.setAttribute('disabled', '');
            signupButton.style.textDecoration ='line-through';
        }
    }


    if (lastNameField.value.length < 3 && lastNameField.value.length > 0 && (loginRegExp.test(lastNameField.value))) {
        let nodess = lastNameField.nextElementSibling;
        if (!(nodess.tagName == 'SPAN')) {

            let testNode = document.createElement('span');
            testNode.textContent = 'minLength:3';
            testNode.style.color = 'red';
            lastNameField.after(testNode);
            lastNameField.style.border ='1px solid red';
            lastNameField.style.outlineColor = 'red';
            signupButton.setAttribute('disabled', '');
            signupButton.style.textDecoration ='line-through';
        }
    }
    else if(lastNameField.value.length == 0){
        lastNameField.style.border ='none';
        let node = lastNameField.nextElementSibling;
        let nextNode = node.nextElementSibling;
        if (node.tagName == 'SPAN') {
            node.remove();
            signupButton.removeAttribute('disabled');
            signupButton.style.textDecoration ='none';
            lastNameField.style.outlineColor = 'rgb(51, 122, 255)';
        }
        if (nextNode.tagName == 'SPAN') {
            nextNode.remove();
        }
    }
    else if(lastNameField.value.length > 30 && (loginRegExp.test(lastNameField.value))){
        let nodess = lastNameField.nextElementSibling;
        if (!(nodess.tagName == 'SPAN')) {

            let testNode = document.createElement('span');
            testNode.textContent = 'maxLength:30';
            testNode.style.color = 'red';
            lastNameField.after(testNode);
            lastNameField.style.border ='1px solid red';
            lastNameField.style.outlineColor = 'red';
            signupButton.setAttribute('disabled', '');
            signupButton.style.textDecoration = 'line-through';
        }

    }
     else {

        let node = lastNameField.nextElementSibling;
        if (node.tagName == 'SPAN' && (loginRegExp.test(lastNameField.value))) {
            node.remove();
            signupButton.removeAttribute('disabled');
            signupButton.style.textDecoration ='none';
            lastNameField.style.outlineColor = 'green';
            lastNameField.style.border ='1px solid green';
        }

    }
})

mobileNumberField.addEventListener('input', function() {
    const loginRegExp = new RegExp(/^([0-9])+$/);


    if (!loginRegExp.test(mobileNumberField.value)) {
        let nodess = mobileNumberField.nextElementSibling;
        if (!(nodess.tagName == 'SPAN') || nodess.textContent == 'minLength:3') {

            let testNode = document.createElement('span');
            testNode.textContent = 'only numeric symbols';
            testNode.style.color = 'red';
            mobileNumberField.after(testNode);
            mobileNumberField.style.border ='1px solid red';
            mobileNumberField.style.outlineColor = 'red';
            signupButton.setAttribute('disabled', '');
            signupButton.style.textDecoration ='line-through';
        }
    }


    if (mobileNumberField.value.length < 11 && mobileNumberField.value.length > 0 && (loginRegExp.test(mobileNumberField.value))) {
        let nodess = mobileNumberField.nextElementSibling;
        if (!(nodess.tagName == 'SPAN')) {

            let testNode = document.createElement('span');
            testNode.textContent = 'minLength:11';
            testNode.style.color = 'red';
            mobileNumberField.after(testNode);
            mobileNumberField.style.border ='1px solid red';
            mobileNumberField.style.outlineColor = 'red';
            signupButton.setAttribute('disabled', '');
            signupButton.style.textDecoration ='line-through';
        }
    }
    else if(mobileNumberField.value.length == 0){
        mobileNumberField.style.border ='none';
        let node = mobileNumberField.nextElementSibling;
        let nextNode = node.nextElementSibling;
        if (node.tagName == 'SPAN') {
            node.remove();
            signupButton.removeAttribute('disabled');
            signupButton.style.textDecoration ='none';
            mobileNumberField.style.outlineColor = 'rgb(51, 122, 255)';
        }
        if (nextNode.tagName == 'SPAN') {
            nextNode.remove();
        }
    }
    else if(mobileNumberField.value.length > 12 && (loginRegExp.test(mobileNumberField.value))){
        let nodess = mobileNumberField.nextElementSibling;
        if (!(nodess.tagName == 'SPAN')) {

            let testNode = document.createElement('span');
            testNode.textContent = 'maxLength:12';
            testNode.style.color = 'red';
            mobileNumberField.after(testNode);
            mobileNumberField.style.border ='1px solid red';
            mobileNumberField.style.outlineColor = 'red';
            signupButton.setAttribute('disabled', '');
            signupButton.style.textDecoration = 'line-through';
        }

    }
     else {

        let node = mobileNumberField.nextElementSibling;
        if (node.tagName == 'SPAN' && (loginRegExp.test(mobileNumberField.value))) {
            node.remove();
            signupButton.removeAttribute('disabled');
            signupButton.style.textDecoration ='none';
            mobileNumberField.style.outlineColor = 'green';
            mobileNumberField.style.border ='1px solid green';
        }

    }
})

emailField.addEventListener('input', function() {

    const loginRegExp = new RegExp(/^\S+@\S+\.\S+$/);


    if (!loginRegExp.test(emailField.value)) {
        let nodess = emailField.nextElementSibling;
        if (!(nodess.tagName == 'SPAN') || nodess.textContent == 'minLength:3') {

            let testNode = document.createElement('span');
            testNode.textContent = 'invalid email';
            testNode.style.color = 'red';
            emailField.after(testNode);
            emailField.style.border ='1px solid red';
            emailField.style.outlineColor = 'red';
            signupButton.setAttribute('disabled', '');
            signupButton.style.textDecoration ='line-through';
        }
    }

    if(emailField.value.length == 0){
        emailField.style.border ='none';
        let node = emailField.nextElementSibling;
        let nextNode = node.nextElementSibling;
        if (node.tagName == 'SPAN') {
            node.remove();
            signupButton.removeAttribute('disabled');
            signupButton.style.textDecoration ='none';
            emailField.style.outlineColor = 'rgb(51, 122, 255)';
        }
        if (nextNode.tagName == 'SPAN') {
            nextNode.remove();
        }
    }
    else if(emailField.value.length > 50 && (loginRegExp.test(emailField.value))){
        let nodess = emailField.nextElementSibling;
        if (!(nodess.tagName == 'SPAN')) {

            let testNode = document.createElement('span');
            testNode.textContent = 'maxLength:50';
            testNode.style.color = 'red';
            emailField.after(testNode);
            emailField.style.border ='1px solid red';
            emailField.style.outlineColor = 'red';
            signupButton.setAttribute('disabled', '');
            signupButton.style.textDecoration = 'line-through';
        }

    }
     else {

        let node = emailField.nextElementSibling;
        if (node.tagName == 'SPAN' && (loginRegExp.test(emailField.value))) {
            node.remove();
            signupButton.removeAttribute('disabled');
            signupButton.style.textDecoration ='none';
            emailField.style.outlineColor = 'green';
            emailField.style.border ='1px solid green';
        }

    }
});

PasswordField.addEventListener('input', function() {
    const passwordRegExp = new RegExp(/^\w*$/);


    if (!passwordRegExp.test(PasswordField.value)) {
        let nodess = PasswordField.nextElementSibling;
        if (!(nodess.tagName == 'SPAN') || nodess.textContent == 'minLength:6') {

            let testNode = document.createElement('span');
            testNode.textContent = 'only alphabetical and numeric symbols';
            testNode.style.color = 'red';
            PasswordField.after(testNode);
            PasswordField.style.border ='1px solid red';
            PasswordField.style.outlineColor = 'red';
            signupButton.setAttribute('disabled', '');
            signupButton.style.textDecoration ='line-through';
        }
    }





    if (PasswordField.value.length < 6 && PasswordField.value.length > 0 && (passwordRegExp.test(PasswordField.value))) {
        let nodess = PasswordField.nextElementSibling;
        if (!(nodess.tagName == 'SPAN')) {

            let testNode = document.createElement('span');
            testNode.textContent = 'minLength:6';
            testNode.style.color = 'red';
            PasswordField.after(testNode);
            PasswordField.style.border ='1px solid red';
            PasswordField.style.outlineColor = 'red';
            signupButton.setAttribute('disabled', '');
            signupButton.style.textDecoration = 'line-through';
        }
    }
    else if(PasswordField.value.length == 0){
        PasswordField.style.border ='none';
        let node = PasswordField.nextElementSibling;
        let nextNode = node.nextElementSibling;
        if (node.tagName == 'SPAN') {
            node.remove();
            signupButton.removeAttribute('disabled');
            signupButton.style.textDecoration ='none';
            PasswordField.style.outlineColor = 'rgb(51, 122, 255)';
        }
        if (nextNode.tagName == 'SPAN') {
            nextNode.remove();
        }
    }
    else if(PasswordField.value.length > 15 && (passwordRegExp.test(PasswordField.value))){
        let nodess = PasswordField.nextElementSibling;
        if (!(nodess.tagName == 'SPAN')) {

            let testNode = document.createElement('span');
            testNode.textContent = 'maxLength:15';
            testNode.style.color = 'red';
            PasswordField.after(testNode);
            PasswordField.style.border ='1px solid red';
            PasswordField.style.outlineColor = 'red';
            signupButton.setAttribute('disabled', '');
            signupButton.style.textDecoration = 'line-through';


        }
    }
     else {
        let node = PasswordField.nextElementSibling;
        if (node.tagName == 'SPAN' && (passwordRegExp.test(PasswordField.value))) {
            node.remove();
            PasswordField.style.border ='1px solid green';
            PasswordField.style.outlineColor = 'green';
            signupButton.removeAttribute('disabled');
            signupButton.style.textDecoration ='none';
        }
    }
});
rePasswordField.addEventListener('input', function() {
    if(!(PasswordField.value == rePasswordField.value)){
        let nodess = rePasswordField.nextElementSibling;
        if (!(nodess.tagName == 'SPAN')) {

            let testNode = document.createElement('span');
            testNode.textContent = 'don\'t matched';
            testNode.style.color = 'red';
            rePasswordField.after(testNode);
            rePasswordField.style.border ='1px solid red';
            rePasswordField.style.outlineColor = 'red';
            signupButton.setAttribute('disabled', '');
            signupButton.style.textDecoration = 'line-through';


        }
    }
     else {
        let node = rePasswordField.nextElementSibling;
        if (node.tagName == 'SPAN' ) {
            node.remove();
            rePasswordField.style.border ='1px solid green';
            rePasswordField.style.outlineColor = 'green';
            signupButton.removeAttribute('disabled');
            signupButton.style.textDecoration ='none';
        }
    }
})