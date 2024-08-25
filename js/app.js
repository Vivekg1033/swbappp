document.addEventListener("DOMContentLoaded", function () {
    // Tab Navigation
    const tabs = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            // Remove active class from all tabs and contents
            tabs.forEach(item => item.classList.remove('active'));
            contents.forEach(content => content.classList.remove('active'));

            // Add active class to the clicked tab and the corresponding content
            tab.classList.add('active');
            document.getElementById(tab.dataset.tab).classList.add('active');
        });
    });

    // Emergency-Dial 100
    document.getElementById("dial-100").addEventListener("click", function () {
        window.location.href = "tel:100";
    });

    // Child Helpline 1098
    document.getElementById("child-helpline").addEventListener("click", function () {
        window.location.href = "tel:1098";
    });

    // Panic Button - Make an emergency call
    document.getElementById("panic-button").addEventListener("click", function () {
        window.location.href = "tel:100"; // Replace 100 with the actual emergency number if different
    });

    // Share Location
    document.getElementById("share-location").addEventListener("click", function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                const message = `I'm at https://maps.google.com/?q=${latitude},${longitude}`;

                const phoneNumber = "1234567890"; // Replace with the recipient's phone number
                window.location.href = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
            }, function (error) {
                alert("Unable to retrieve your location. Please try again.");
            });
        } else {
            alert("Geolocation is not supported by your browser.");
        }
    });

    // Send Emergency Message
    document.getElementById("send-message").addEventListener("click", function () {
        const phoneNumber = "1234567890"; // Replace with the recipient's phone number
        const message = "This is an emergency message!";
        window.location.href = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
    });

    // Emergency Contacts - Open contacts (example placeholder, replace with actual implementation)
    document.getElementById("emergency-contacts").addEventListener("click", function () {
        alert("Emergency contacts feature coming soon!");
    });
});
