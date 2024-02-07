var btn = document.getElementById('whatsappButton');
btn.addEventListener('click', function() {
    // Define the phone number and message you want to send
    var phoneNumber = '+966597207446';  // Replace with the recipient's phone number
    var message = 'السلام عليكم ، متوفر اشتراك فالكون؟ ';

    // Encode the phone number and message for the URL
    var encodedPhoneNumber = encodeURIComponent(phoneNumber);
    var encodedMessage = encodeURIComponent(message);

    // Create the WhatsApp message URL
    var whatsappUrl = 'https://api.whatsapp.com/send?phone=' + encodedPhoneNumber + '&text=' + encodedMessage;

    // Open the WhatsApp URL in a new tab or window
    window.open(whatsappUrl, '_blank');
});
