var form_info = document.querySelector('#basic-form-info');
var clear_btn = document.querySelector('.clear-btn');
var step_btn = document.querySelector('.step-btn');

ValidateEmail = (email) => {
    let re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return re.test(String(email).toLowerCase());
}

checkInputField = (input) => {
    var err_mess = form_info.querySelector(`span[err-data-for="${input.id}"]`);
    var val = input.value;
    var form_group = err_mess.parentElement;

    switch (input.getAttribute('name')) {
        case 'use-infomation':
        case 'city':
        case 'district':
            if (val === "") {
                form_group.classList.add('error');
                form_group.classList.remove('success');
                err_mess.innerHTML = 'Check your options! Is empty?';
            } else {
                form_group.classList.remove('error');
                form_group.classList.add('success');
                err_mess.innerHTML = '';
            }
            break;
        case 'name':
            if (val.length <= 5) {
                form_group.classList.add('error');
                form_group.classList.remove('success');
                err_mess.innerHTML = 'Check your name! Is your real name?';
            } else {
                form_group.classList.remove('error');
                form_group.classList.add('success');
                err_mess.innerHTML = '';
            }
            break;
        case 'phone':
            if (val.length <= 8) {
                form_group.classList.add('error');
                form_group.classList.remove('success');
                err_mess.innerHTML = 'Check your phone! It not true?';
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
                err_mess.innerHTML = 'Check your email! That not email!';
            } else {
                form_group.classList.remove('error');
                form_group.classList.add('success');
                err_mess.innerHTML = '';
            }
            break;
        case 'date':
        case 'detail-email':
            if (val.length === 0) {
                form_group.classList.add('error');
                form_group.classList.remove('success');
                err_mess.innerHTML = 'Check your DoB! It empty!';
            } else {
                form_group.classList.remove('error');
                form_group.classList.add('success');
                err_mess.innerHTML = '';
            }
            break;
        default:
            break;
    }
}

successValidate = (form_group) => {
    return form_group.classList.contains('error') ? false : true;
}

checkFormAll = () => {

    var selects = form_info.querySelectorAll('.form-group select');
    var inputs = form_info.querySelectorAll('.form-group input');

    selects.forEach(select => checkInputField(select));
    inputs.forEach(input => checkInputField(input));

    for (var i = 0; i < selects.length; i++) {
        var err_mess = form_info.querySelector(`span[err-data-for="${selects[i].id}"]`);
        var form_group = err_mess.parentElement;
        if (!successValidate(form_group)) {
            return successValidate(form_group);
        }
    }

    for (var i = 0; i < inputs.length; i++) {
        var err_mess = form_info.querySelector(`span[err-data-for="${inputs[i].id}"]`);
        var form_group = err_mess.parentElement;
        if (!successValidate(form_group)) {
            return successValidate(form_group);
        }
    }

    return true;
}

step_btn.onclick = () => {
    var isVal = checkFormAll();
    if (isVal) {

        stepLine.style.display = 'block';
        firstBooking.style.display = 'block';
        firstBooking.scrollIntoView({ behavior: "smooth", block: "center" });

        dataBooking = { ...dataBooking, ...getInfoData() };
        console.log(dataBooking);
    } else {
        console.log('Error');
    }
}

var inputs = form_info.querySelectorAll('.form-group input');
var selects = form_info.querySelectorAll('.form-group select')

inputs.forEach(input => {
    input.addEventListener('input', () => {
        input.parentElement.classList.remove('error')
        input.parentElement.classList.remove('success')
    })
    input.addEventListener('focusout', () => {
        checkInputField(input);
    })
})

selects.forEach(select => {
    select.addEventListener('change', () => {
        checkInputField(select);
    })
})

clear_btn.onclick = () => {
    inputs.forEach(input => {
        input.value = '';
        input.parentElement.classList.add('success')
    })
    selects.forEach(select => {
        select.value = '';
        select.parentElement.parentElement.classList.add('success')
    })
}