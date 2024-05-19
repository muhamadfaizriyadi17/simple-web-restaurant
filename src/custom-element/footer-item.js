class footerItem extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <footer class="footer">
            <p>&copy; 2024 Hunger Apps. All rights reserved Muhamad Faiz Riyadi.</p>
        </footer>
      `;
  }
}

customElements.define('footer-item', footerItem);
