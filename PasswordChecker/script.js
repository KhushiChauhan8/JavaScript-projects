const inputfield = document.querySelector('#password');

const outputtfield = document.querySelector('#output');

inputfield.addEventListener('input', function() {
    console.log(inputfield.value);
    let password = inputfield.value;
    if(password.length < 8){
        outputtfield.innerText = 'pasword is to short';
        outputtfield.style.color = 'red';
    }
    else{
        // outputtfield.innerText = 'pasword is long enough';
        // outputtfield.style.color = 'green';
        //a-z
        //A-Z
        //0-9
        //special characters !@#$%^&*()_+{}:"<>?|\/;',.
        console.log("is lowercase", password.search(/[a-z]/));
        console.log("is uppercase", password.search(/[A-Z]]/));
        if(password.search(/[a-z]/) == -1){
            outputtfield.innerText = 'password is missing a lowercase letter';
            outputtfield.style.color = 'red';
        }
        else if (password.search(/[A-Z]/) == -1){
            outputtfield.innerText = 'password is missing a uppercase letter';
            outputtfield.style.color = 'red';
        }
        else if (password.search(/[0-9]/) == -1){
            outputtfield.innerText = 'password is missing a numeric letter';
            outputtfield.style.color = 'red';
        }
        else if (password.search(/[!@#$%^&*()_+{}:"<>?|/;',.]/) == -1){
            outputtfield.innerText = 'password is missing a special character';
            outputtfield.style.color = 'red';
        }
        else{
            outputtfield.innerText = 'password is strong';
            outputtfield.style.color = 'green';
        }

        
    }
})