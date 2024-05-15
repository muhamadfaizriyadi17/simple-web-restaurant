const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

document.querySelectorAll('a[href^="#about"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        if (this.getAttribute('href') === '#about') {
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var skipLinks = document.querySelectorAll('.skip-link');
    
    skipLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Fetch data dari API restoran
    fetch('https://restaurant-api.dicoding.dev/list')
        .then(response => response.json())
        .then(data => {
            // Periksa apakah data yang diterima berisi array restoran
            if (data && data.restaurants && Array.isArray(data.restaurants)) {
                // Panggil fungsi untuk menampilkan daftar restoran
                displayRestaurants(data.restaurants);
            } else {
                console.error('Error fetching restaurant data: Invalid data format');
            }
        })
        .catch(error => {
            console.error('Error fetching restaurant data:', error);
        });
});

// Fungsi untuk memotong teks setelah sejumlah kata tertentu
function truncateText(text, maxWords) {
    const words = text.split(' ');
    if (words.length > maxWords) {
        return words.slice(0, maxWords).join(' ') + '...';
    }
    return text;
}

// Fungsi untuk menampilkan daftar restoran
function displayRestaurants(restaurants) {
    const restaurantList = document.querySelector('.restaurant-list');

    // Loop melalui setiap restoran dari data yang diterima dari API
    restaurants.forEach(restaurant => {
        // Buat elemen artikel untuk setiap restoran
        const article = document.createElement('article');
        article.classList.add('restaurant-item');

        // Buat elemen gambar untuk thumbnail restoran
        const img = document.createElement('img');
        img.classList.add('restaurant-item__thumbnail');
        img.src = `https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}`;
        img.alt = restaurant.name;

        // Buat elemen konten untuk deskripsi restoran
        const content = document.createElement('div');
        content.classList.add('restaurant-item__content');

        // Buat elemen judul untuk nama restoran
        const title = document.createElement('h1');
        title.classList.add('restaurant-item__title');
        title.textContent = restaurant.name;

        // Buat elemen deskripsi untuk deskripsi restoran
        const description = document.createElement('p');
        description.classList.add('restaurant-item__description');
        description.textContent = truncateText(restaurant.description, 20); // Batasi deskripsi hingga 20 kata

        // Buat elemen info untuk info tambahan restoran (lokasi dan rating)
        const info = document.createElement('div');
        info.classList.add('restaurant-item__info');

        // Buat elemen untuk lokasi restoran
        const location = document.createElement('p');
        location.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${restaurant.city}`;

        // Buat elemen untuk rating restoran
        const rating = document.createElement('p');
        rating.innerHTML = `<i class="fas fa-star"></i> ${restaurant.rating}`;

        // Tambahkan elemen-elemen ke dalam elemen konten
        content.appendChild(title);
        content.appendChild(description);

        // Tambahkan lokasi dan rating ke dalam elemen info
        info.appendChild(location);
        info.appendChild(rating);

        // Tambahkan thumbnail dan konten ke dalam artikel restoran
        article.appendChild(img);
        article.appendChild(content);
        article.appendChild(info);

        // Tambahkan artikel restoran ke dalam daftar restoran
        restaurantList.appendChild(article);
    });
}
