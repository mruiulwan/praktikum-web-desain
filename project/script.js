document.getElementById("formAspirasi").addEventListener("submit", function(e) {
    e.preventDefault();

    const data = {
        nama: document.getElementById("nama").value,
        nim: document.getElementById("nim").value,
        kritik: document.getElementById("kritik").value,
        saran: document.getElementById("saran").value
    };

    console.log("Aspirasi Terkirim:", data);
    alert("Terima kasih! Aspirasi Anda telah dikirim.");

    this.reset();
});
