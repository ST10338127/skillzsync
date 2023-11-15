document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const fullNameField = document.getElementById('fullName');
    const emailField = document.getElementById('email');
    const messageField = document.getElementById('message');

    fullNameField.addEventListener('focus', clearInitialValue);
    emailField.addEventListener('focus', clearInitialValue);
    messageField.addEventListener('focus', clearInitialValue);

    form.addEventListener('submit', function(event) {
        if (fullNameField.value === 'Full Name' || emailField.value === 'Email' || messageField.value === 'Message') {
            event.preventDefault();
            alert('Please fill in all required fields.');
        }
    });

    function clearInitialValue(event) {
        const field = event.target;
        if (field.value === field.defaultValue) {
            field.value = '';
        }
    }
});
