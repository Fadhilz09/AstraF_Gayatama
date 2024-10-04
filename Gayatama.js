document.addEventListener('DOMContentLoaded', function() {
    // Menampilkan pesan di konsol saat halaman dimuat
    console.log("Website loaded successfully!");

    // Menambahkan animasi pada produk setelah halaman dimuat
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('visible'); // Menambahkan kelas visible untuk memulai animasi
        }, index * 200); // Delay bertahap untuk setiap produk
    });
});
document.addEventListener('DOMContentLoaded', function() {
    console.log("Website loaded successfully!");

    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach((card, index) => {
        // Tambahkan animasi saat produk dimuat
        setTimeout(() => {
            card.classList.add('visible');
        }, index * 200);

        // Tambahkan event listener untuk klik
        card.addEventListener('click', () => {
            card.classList.toggle('clicked'); // Menambahkan atau menghapus kelas 'clicked'
        });
    });
});

