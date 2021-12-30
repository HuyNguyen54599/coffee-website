var allSeat = document.querySelectorAll('.seat-pick');
var allSeatArr = [...allSeat];
allSeatArr.forEach(seat => {
    seat.onclick = () => {
        if (seat.classList.contains('empty-seat')) {
            seat.classList.remove('empty-seat');
            seat.classList.add('selected-seat');
        } else {
            seat.classList.add('empty-seat');
            seat.classList.remove('selected-seat');
        }
    }
});

validateSeat = () => {
    flagCheck = false;
    for (var i = 0; i < allSeatArr.length; i++) {
        if (allSeatArr[i].classList.contains('selected-seat')) {
            flagCheck = true;
        }
    }
    console.log(flagCheck);
    return flagCheck;
}