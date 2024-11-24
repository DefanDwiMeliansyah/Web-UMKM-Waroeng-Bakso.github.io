// Fungsi untuk menyimpan data form ke localStorage dan navigasi ke halaman pembayaran
function submitOrder() {
    // Ambil nilai dari form
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const region = document.getElementById("region").value;
    const city = document.getElementById("city").value;
    const address = document.getElementById("address").value;

    
 
    // Simpan data ke localStorage 
    localStorage.setItem("name", name);
    localStorage.setItem("phone", phone);
    localStorage.setItem("region", region);
    localStorage.setItem("city", city);
    localStorage.setItem("address", address);

    // Pindah ke halaman pembayaran
    window.location.href = "pembayaran.html";

    
}