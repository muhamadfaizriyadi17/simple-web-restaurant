class RestaurantList extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <section class="article">
            <h2>Restaurant List</h2>
            <div class="restaurant-list"></div>
        </section>
      `;
    }
  }

  customElements.define('restaurant-list', RestaurantList);