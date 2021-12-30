var signin_form = document.querySelector('#signin-form');
var submit_btn = document.querySelector('.form-submit-signin');
var pass_field = signin_form.querySelector('input[name="password"]');
ValidateEmail = (email) => {
    re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return re.test(String(email).toLowerCase());
}

checkSigninInput = (input) => {
    var err_mess = signin_form.querySelector(`span[data-err-for='${input.id}']`);
    var val = input.value;
    var form_group = input.parentElement.parentElement;

    switch (input.getAttribute('name')) {
        case 'user-name':
            if (val.length <= 5) {
                form_group.classList.add('error');
                form_group.classList.remove('success');
                err_mess.innerHTML = 'Check your name! Is that your real name?';
            } else {
                form_group.classList.remove('error');
                form_group.classList.add('success');
                err_mess.innerHTML = '';
            }
            break;

        case 'password':
            if (val.length <= 8) {
                form_group.classList.add('error');
                form_group.classList.remove('success');
                err_mess.innerHTML = 'Check your password! Is not long enough';
            } else {
                form_group.classList.remove('error');
                form_group.classList.add('success');
                err_mess.innerHTML = '';
            }
            break;

        case 'pass-confirm':
            if (val.length <= 8 || !(val === pass_field.value)) {
                form_group.classList.add('error');
                form_group.classList.remove('success');
                err_mess.innerHTML = 'Check your confirm password! Is not match';
            } else {
                form_group.classList.remove('error');
                form_group.classList.add('success');
                err_mess.innerHTML = '';
            }
            break;

        case 'email':
            if (val.length === 0 || !ValidateEmail(val)) {
                form_group.classList.add('error');
                form_group.classList.remove('success');
                err_mess.innerHTML = 'Check your email! That not email';
            } else {
                form_group.classList.remove('error');
                form_group.classList.add('success');
                err_mess.innerHTML = '';
            }
            break;
    }
}

checkSigninForm = () => {
    var inputs = signin_form.querySelectorAll('.input-field input');
    inputs.forEach(input => checkSigninInput(input));
}

submit_btn.onclick = () => {
    checkSigninForm();
}

var inputs = signin_form.querySelectorAll('.input-field input');
inputs.forEach(input => {
    input.addEventListener('input', () => {
        input.parentElement.parentElement.classList.remove('error')
        input.parentElement.parentElement.classList.remove('success')
    })
    input.addEventListener('focusout', () => {
        checkSigninInput(input);
    })
})