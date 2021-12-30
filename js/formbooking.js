ValFormStep = (form) => {
    ValBookingEmail = (email) => {
        let re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return re.test(String(email).toLowerCase());
    }

    ValBookingInput = (input) => {
        var err_mess = form.querySelector(`span[err-data-for="${input.id}"]`);
        var val = input.value;
        form_group = err_mess.parentElement;

        switch (input.getAttribute('name')) {
            case 'seat-time':
            case 'seat-overnight':
            case 'checkagain-time':
            case 'checkagain-seat':
            case 'checkagain-overnight':
            case 'payment-field':
            case 'seat-date':
            case 'checkagain-date':
                if (!(val === "")) {
                    form_group.classList.remove('error');
                    form_group.classList.add('success');
                    err_mess.innerHTML = '';
                    break;
                }
                form_group.classList.add('error');
                form_group.classList.remove('success');
                err_mess.innerHTML = 'Check your data! Is empty?';
                break;

            default:
                break;
        }
    }

    passValidate = (form) => {
        return form.classList.contains('error') ? false : true;
    }

    checkFormAll = () => {
        console.log(form)
        var selects = form.querySelectorAll('.form-group select');
        var inputs = form.querySelectorAll('.form-group input');

        selects.forEach(select => ValBookingInput(select));
        inputs.forEach(input => ValBookingInput(input));

        for (var i = 0; i < selects.length; i++) {
            var err_mess = form.querySelector(`span[err-data-for="${selects[i].id}"]`);
            var form_group = err_mess.parentElement;
            if (!passValidate(form_group)) {
                return passValidate(form_group);
            }
        }

        for (var i = 0; i < inputs.length; i++) {
            var err_mess = form.querySelector(`span[err-data-for="${inputs[i].id}"]`);
            var form_group = err_mess.parentElement;
            if (!passValidate(form_group)) {
                return passValidate(form_group);
            }
        }

        return true;
    }

    var inputs = form.querySelectorAll('.form-group input');
    var selects = form.querySelectorAll('.form-group select')

    inputs.forEach(input => {
        input.addEventListener('input', () => {
            input.parentElement.classList.remove('error');
            input.parentElement.classList.remove('success');
        })
        input.addEventListener('focusout', () => {
            ValBookingInput(input);
        })
    })

    selects.forEach(select => {
        select.addEventListener('change', () => {
            ValBookingInput(select);
        })
    })

    return checkFormAll();
}