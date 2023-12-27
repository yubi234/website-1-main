function verifyEmail() {
    var email = document.getElementById("email").value;
    var confirmEmail = document.getElementById("confirmEmail").value;

    if (email !== confirmEmail) {
        alert("Emails do not match, please verify entries.");
        event.preventDefault(); // Fix: Use event.preventDefault() instead of Event.preventDefault()
    }
}
