document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let address = document.getElementById('address').value;
    let email = document.getElementById('email').value;
    let whatsapp = document.getElementById('whatsapp').value;
    let service = document.getElementById('service').value;

    let message = `Nama: ${name}\nAlamat: ${address}\nEmail: ${email}\nNomor WhatsApp: ${whatsapp}\nJasa: ${service}`;

    let whatsappUrl = `https://wa.me/6285891596575?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
});
