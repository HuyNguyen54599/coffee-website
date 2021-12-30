// seat slider
var slide_container = document.querySelector('.slide-list');
var prev_btn = document.querySelector('.booking-seat-slider .fa-arrow-left');
var next_btn = document.querySelector('.booking-seat-slider .fa-arrow-right');
var slide_item = document.querySelectorAll('.slide-item');


var currentSlide = 1;

next_btn.onclick = () => {
    var slideItemWidth = slide_item[0].offsetWidth;
    if (currentSlide === slide_item.length) {
        slide_container.style.transform = `translateX(0px)`;
        currentSlide = 1;
    } else {
        slide_container.style.transform = `translateX(-${slideItemWidth * currentSlide}px)`;
        currentSlide++;
    }
}

prev_btn.onclick = () => {
    var slideItemWidth = slide_item[0].offsetWidth;
    if (currentSlide === 1) {
        slide_container.style.transform = `translateX(-${slideItemWidth * (slide_item.length - 1)}px)`;
        currentSlide = slide_item.length;
    } else {
        slide_container.style.transform = `translateX(-${slideItemWidth * (currentSlide - 2)}px)`;
        currentSlide--;
    }
}
// end seat slider


// booking step
var stepLine = document.querySelector('.step-line');
var firstBooking = document.querySelector('.booking-seat');
var secondCheck = document.querySelector('.check-again');
var lastPayment = document.querySelector('.payment');
var allStep = document.querySelectorAll('.main-step');

currentStep = 1;

allStep.forEach(main => main.style.display = 'none');

findContainStep = (btn) => {
    var currentParent = btn;
    var listParent = [];
    while (currentParent.parentNode != null && currentParent.parentNode != document.documentElement) {
        listParent.push(currentParent);
        currentParent = currentParent.parentNode;
    }
    return listParent[listParent.length - 1];
}

findFormIn = (contain) => {
    return contain.querySelector('.main-form-step');
}

nextStepVisibility = (step, currentStep, line, number) => {
    step[currentStep - 1].style.display = 'none';
    step[currentStep].style.display = 'block';
    step[currentStep].scrollIntoView({ behavior: "smooth", block: "center" })

    line[currentStep - 1].classList.add('step-done');
    number[currentStep - 1].classList.add('cus-done');
    number[currentStep].classList.add('waiting');
}

prevStepVisibility = (step, currentStep, line, number) => {
    line[currentStep - 2].classList.remove('step-done');
    number[currentStep - 2].classList.remove('cus-done');
    number[currentStep - 2].classList.remove('waiting');

    step[currentStep - 2].style.display = 'block';
    step[currentStep - 2].scrollIntoView({ behavior: "smooth", block: "center" })
    step[currentStep - 1].style.display = 'none';

    number[currentStep - 1].classList.remove('waiting');
    number[currentStep - 2].classList.add('waiting');
}

getBookingData = () => {
    var selectSeat = document.querySelectorAll('.seat-pick.selected-seat');
    var seatList = []
    for (var i = 0; i < selectSeat.length; i++) {
        seatList = [...seatList, selectSeat[i].innerHTML];
    }
    return {
        seatIdD: seatList,
        seatElement: selectSeat,
        [document.querySelector('[name="seat-time"]').getAttribute('name')]: document.querySelector('[name="seat-time"]').value,
        [document.querySelector('[name="seat-date"]').getAttribute('name')]: document.querySelector('[name="seat-date"]').value,
        [document.querySelector('[name="seat-overnight"]').getAttribute('name')]: document.querySelector('[name="seat-overnight"]').value,
        [document.querySelector('[name="seat-adults"]').getAttribute('name')]: document.querySelector('[name="seat-adults"]').value,
        [document.querySelector('[name="seat-children"]').getAttribute('name')]: document.querySelector('[name="seat-children"]').value,
    }
}

getCheckingData = () => {
    return {
        [document.querySelector('[name="checkagain-time"]').getAttribute('name')]: document.querySelector('[name="checkagain-time"]').value,
        [document.querySelector('[name="checkagain-seat"]').getAttribute('name')]: document.querySelector('[name="checkagain-seat"]').value,
        [document.querySelector('[name="checkagain-date"]').getAttribute('name')]: document.querySelector('[name="checkagain-date"]').value,
        [document.querySelector('[name="checkagain-overnight"]').getAttribute('name')]: document.querySelector('[name="checkagain-overnight"]').value,
        [document.querySelector('[name="checkagain-children"]').getAttribute('name')]: document.querySelector('[name="checkagain-children"]').value,
        [document.querySelector('[name="checkagain-adults"]').getAttribute('name')]: document.querySelector('[name="seat-adults"]').value,
    }
}

sendBookingToCheck = () => {
    document.querySelector('[name="checkagain-time"]').value = document.querySelector('[name="seat-time"]').value;
    document.querySelector('[name="checkagain-seat"]').value = dataBooking.seatIdD.toString();
    document.querySelector('[name="checkagain-date"]').value = document.querySelector('[name="seat-date"]').value;
    document.querySelector('[name="checkagain-overnight"]').value = document.querySelector('[name="seat-overnight"]').value;
    document.querySelector('[name="checkagain-children"]').value = document.querySelector('[name="seat-children"]').value;
    document.querySelector('[name="checkagain-adults"]').value = document.querySelector('[name="seat-adults"]').value;
}

sendCheckToBooking = () => {
    document.querySelector('[name="seat-time"]').value = document.querySelector('[name="checkagain-time"]').value;
    document.querySelector('[name="seat-date"]').value = document.querySelector('[name="checkagain-date"]').value;
    document.querySelector('[name="seat-overnight"]').value = document.querySelector('[name="checkagain-overnight"]').value;
    document.querySelector('[name="seat-children"]').value = document.querySelector('[name="checkagain-children"]').value;
    document.querySelector('[name="seat-adults"]').value = document.querySelector('[name="checkagain-adults"]').value;
}

getPaymentData = () => {
    return {
        [document.querySelector('[name="payment-field"]').getAttribute('name')]: document.querySelector('[name="payment-field"]').value,
    }
}

getInfoData = () => {
    return {
        [document.querySelector('[name="use-infomation"]').getAttribute('name')]: document.querySelector('[name="use-infomation"]').value,
        [document.querySelector('[name="name"]').getAttribute('name')]: document.querySelector('[name="name"]').value,
        [document.querySelector('[name="email"]').getAttribute('name')]: document.querySelector('[name="email"]').value,
        [document.querySelector('[name="phone"]').getAttribute('name')]: document.querySelector('[name="phone"]').value,
        [document.querySelector('[name="date"]').getAttribute('name')]: document.querySelector('[name="date"]').value,
        [document.querySelector('[name="district"]').getAttribute('name')]: document.querySelector('[name="district"]').value,
        [document.querySelector('[name="city"]').getAttribute('name')]: document.querySelector('[name="city"]').value,
        [document.querySelector('[name="detail-address"]').getAttribute('name')]: document.querySelector('[name="detail-address"]').value,
    }
}

var nextStepBtn = document.querySelectorAll('.confirm-step-next');
var arrNextBtn = [...nextStepBtn];
var step_line = document.querySelectorAll('.line-bg-process');
var step_number = document.querySelectorAll('.number-bg-process');
var dataBooking = {};

arrNextBtn.forEach(nextBtn => {
    var everythingOk = true;
    var form = findFormIn(findContainStep(nextBtn));

    nextBtn.onclick = () => {
        switch (currentStep) {
            case 1:
                var formResult = ValFormStep(form);
                if (!(everythingOk = validateSeat() && formResult)) {
                    console.log('step Error');
                    break;
                }
                nextStepVisibility(allStep, currentStep, step_line, step_number)
                dataBooking = { ...dataBooking, ...getBookingData() };
                console.log(dataBooking);

                sendBookingToCheck();
                break;

            case 2:
                var formResult = ValFormStep(form);
                if (!(everythingOk = formResult)) {
                    console.log('step Error');
                    break;
                }
                nextStepVisibility(allStep, currentStep, step_line, step_number)
                dataBooking = { ...dataBooking, ...getCheckingData() };
                console.log(dataBooking);
                break;

            case 3:
                var formResult = ValFormStep(form);
                if (!(everythingOk = formResult)) {
                    console.log('step Error');
                    break;
                }
                nextStepVisibility(allStep, currentStep, step_line, step_number)
                dataBooking = { ...dataBooking, ...getPaymentData() };
                console.log(dataBooking);
                break;
                //log all data
                //send mail
                break;
            default:
                break;
        }

        if (everythingOk) {
            currentStep++;
        }
    }
})

var prevStepBtn = document.querySelectorAll('.confirm-step-prev');
var arrPrevBtn = [...prevStepBtn];

arrPrevBtn.forEach(prevBtn => {
    var form = findFormIn(findContainStep(prevBtn));

    prevBtn.onclick = () => {
        switch (currentStep) {
            case 2:
                prevStepVisibility(allStep, currentStep, step_line, step_number)
                sendCheckToBooking();
                currentStep--;
                break;
            case 3:
                prevStepVisibility(allStep, currentStep, step_line, step_number)
                currentStep--;
                break;
            default:
                break;
        }
    }
})
// end booking step