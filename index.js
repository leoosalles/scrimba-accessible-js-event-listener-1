document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submitButton');
    const popoverMessage = document.getElementById('popoverMessage');

    submitButton.addEventListener('mouseover', function() {
        if (submitButton.disabled) {
            popoverMessage.style.display = 'block';
        }
    });

    submitButton.addEventListener('mouseout', function() {
        popoverMessage.style.display = 'none';
    });
});
    
function checkInputs() {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const postcode = document.getElementById('postcode').value;
    const email = document.getElementById('email').value;
    const yesRadio = document.getElementById('yes').checked;
    const noRadio = document.getElementById('no').checked;

    const allFilled = name && address && city && postcode && email && (yesRadio || noRadio);
    
    document.getElementById('submitButton').disabled = !allFilled;
    return allFilled
}

document.getElementById('name').addEventListener('input', checkInputs);
document.getElementById('address').addEventListener('input', checkInputs);
document.getElementById('city').addEventListener('change', checkInputs);
document.getElementById('postcode').addEventListener('input', checkInputs);
document.getElementById('email').addEventListener('input', checkInputs);
document.getElementById('yes').addEventListener('change', checkInputs);
document.getElementById('no').addEventListener('change', checkInputs);