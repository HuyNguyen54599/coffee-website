var paymentImageList = document.querySelectorAll('.payment-methods-item');
var paymentValue = document.querySelectorAll('#payment-field option:not(option:first-child)');
var paymentField = document.querySelector('#payment-field');

for (let i = 0; i < paymentImageList.length; i++) {
    paymentImageList[i].onclick = () => {
        paymentField.value = paymentValue[i].value;
    }
}