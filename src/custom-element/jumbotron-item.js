class JumbotronItem extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <!-- Content for Jumbotron -->
        <section class="jumbotron">
            <div class="jumbotron" alt="Restaurant Hero Image">
            <div class="jumbotron__inner">
                <h1 class="jumbotron__title">Temukan Hidangan Lezat di Restoran Terbaik</h1>
                <p class="jumbotron__tagline">
                Jelajahi berbagai pilihan hidangan dari restoran terbaik di seluruh kota yang ada di Indonesia, nikmati rasa yang menggugah selera!
                </p>
            </div>
            </div>
        </section>
      `;
    }
  }

  customElements.define('jumbotron-item', JumbotronItem);