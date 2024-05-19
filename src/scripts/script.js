const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

const mobileMenu = () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
};

hamburger.addEventListener('click', mobileMenu);

const navLink = document.querySelectorAll('.nav-link');

const closeMenu = () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
};

navLink.forEach((n) => n.addEventListener('click', closeMenu));

document.querySelectorAll('a[href^="#about"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    if (anchor.getAttribute('href') === '#about') {
      document.querySelector(anchor.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const skipLinks = document.querySelectorAll('.skip-link');

  skipLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Fetch data dari API restoran
  fetch('https://restaurant-api.dicoding.dev/list')
    .then((response) => response.json())
    .then((data) => {
      // Periksa apakah data yang diterima berisi array restoran
      if (data && data.restaurants && Array.isArray(data.restaurants)) {
        // Panggil fungsi untuk menampilkan daftar restoran
        displayRestaurants(data.restaurants);
      } else {
        console.error('Error fetching restaurant data: Invalid data format');
      }
    })
    .catch((error) => {
      console.error('Error fetching restaurant data:', error);
    });
});

// Fungsi untuk memotong teks setelah sejumlah kata tertentu
const truncateText = (text, maxWords) => {
  const words = text.split(' ');
  if (words.length > maxWords) {
    return `${words.slice(0, maxWords).join(' ')}...`;
  }
  return text;
};

// Fungsi untuk menampilkan daftar restoran
const displayRestaurants = (restaurants) => {
  const restaurantList = document.querySelector('.restaurant-list');

  // Loop melalui setiap restoran dari data yang diterima dari API
  restaurants.forEach((restaurant) => {
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
};
