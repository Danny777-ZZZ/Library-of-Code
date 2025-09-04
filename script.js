// Meminta input dari user
let totalBelanja = parseFloat(prompt("Masukkan total belanja (Rp): "));

// Validasi input
if (isNaN(totalBelanja) || totalBelanja < 0) {
    alert("Input tidak valid! Masukkan angka yang benar.");
} else {
    let persenDiskon = 0;
    let besarDiskon = 0;
    let hargaBayar = 0;
    
    // Menentukan persentase diskon
    if (totalBelanja > 500000) {
        persenDiskon = 20;
    } else if (totalBelanja >= 200000 && totalBelanja <= 500000) {
        persenDiskon = 10;
    } else {
        persenDiskon = 0;
    }
    
    // Menghitung diskon dan harga bayar
    besarDiskon = (persenDiskon / 100) * totalBelanja;
    hargaBayar = totalBelanja - besarDiskon;
    
    // Menampilkan hasil
    let hasil = `
    =====================================
    RINCIAN PEMBAYARAN
    =====================================
    Total Belanja     : Rp ${totalBelanja.toLocaleString('id-ID')}
    Persentase Diskon : ${persenDiskon}%
    Besar Diskon      : Rp ${besarDiskon.toLocaleString('id-ID')}
    Harga Bayar       : Rp ${hargaBayar.toLocaleString('id-ID')}
    =====================================
    `;
    
    alert(hasil);
    console.log(hasil);
}
