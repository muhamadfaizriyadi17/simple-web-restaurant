class HeadlineItem extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <section class="headline">
            <article>
                <h2>Hunger Apps</h2>
                <p>Selamat datang di Hunger Apps, aplikasi yang mengantarkan Anda pada petualangan kuliner tak terlupakan. Kami bangga menjadi pendamping setia Anda dalam menjelajahi dunia kuliner yang penuh warna dan cita rasa dari berbagai macam restoran yang tersebar di seluruh penjuru kota di Indonesia. Dengan Hunger Apps, Anda memiliki akses ke ribuan pilihan restoran yang menawarkan hidangan dari berbagai tradisi kuliner, mulai dari masakan Nusantara yang autentik hingga hidangan internasional yang menggugah selera. Ayo mulai petualangan kuliner Anda sekarang dengan Hunger Apps!.</p>
                <button class="read-more">Read More</button>
            </article>
            
            <aside>
                <figure>
                <img src="images/heros/hero-image_1.jpg" alt="Gambar Koki Restaurant">
                <figcaption>Hunger Apps April 2024 Information, lebih dari 100k orang telah menggunakan Hunger Apps</figcaption>
                </figure>
            </aside>
        </section> 
      `;
    }
  }

  customElements.define('headline-item', HeadlineItem);