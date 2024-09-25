(function () {
    //Public key
    emailjs.init("OVb7N-XSAjgadhv8x");
})();

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var templateParams = {
        from_name: name,
        from_email: email,
        message: message,
        to_name: " Email Js demo"
    };
    console.log(templateParams)

    //service key, template id
    emailjs.send("service_tpe695j", "template_sz4ls1z", templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
        }, function (error) {
            console.log('FAILED...', error);
            alert('Message failed to send.');
        });

});