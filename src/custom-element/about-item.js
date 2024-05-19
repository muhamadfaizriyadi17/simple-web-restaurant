class AboutItem extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <section class="about-us" id="about">
            <h2>About Us</h2>
            <p>Selamat datang di Hunger Apps, destinasi utama Anda untuk menjelajahi beragam restoran! Baik Anda menginginkan hidangan lezat atau mencari tempat makan tersembunyi dalam dunia kuliner, kami siap membantu Anda. Platform kami menghadirkan berbagai pilihan tempat makan, memastikan Anda tidak kehabisan pilihan. Mulai dari kafe yang nyaman hingga restoran mewah, temukan tempat yang sempurna untuk memuaskan hasrat kuliner Anda dan menjalani petualangan kuliner yang tak terlupakan. Ayo bergabunglah bersama kami saatnya merayakan keberagaman cita rasa masakan lezat dan Bergizi!.</p>
            <ul class="social-icons">
                <li><a href="https://www.linkedin.com/in/muhamad-faiz-riyadi-9aa111225/" target="_blank"><i class="fab fa-linkedin"></i></a></li>
                <li><a href="https://www.instagram.com/muhammadfaizriyadi17/" target="_blank"><i class="fab fa-instagram"></i></a></li>
                <li><a href="https://github.com/muhamadfaizriyadi17" target="_blank"><i class="fab fa-github"></i></a></li>
                <li><a href="faizcode.my.id" target="_blank"><i class="fas fa-globe"></i></a></li>
            </ul>
        </section>
      `;
  }
}

customElements.define('about-item', AboutItem);
