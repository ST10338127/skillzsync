$(document).ready(function() {
    // Smooth scrolling navigation menu
    $('nav ul li a').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
    });

    // Hamburger menu functionality for smaller screens
    $('.hamburger').on('click', function() {
        $('nav ul').toggleClass('show');
    });

    // Form validation for the newsletter subscription
    $('#newsletterForm').on('submit', function(event) {
        const email = $('#newsletterEmail').val();
        if (!validateEmail(email)) {
            event.preventDefault();
            alert('Please enter a valid email address.');
        }
    });

    // Function to validate email address
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    $('#newsletterForm').on('submit', function() {
        alert('Thank you for subscribing!');
        });
});
