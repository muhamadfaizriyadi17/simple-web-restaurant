class NavbarItem extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <nav class="navbar">
            <a href="/" class="nav-logo">Hunger Apps.</a>
            <button class="hamburger" tabindex="0">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
            </button> 
            <ul class="nav-menu">
            <li class="nav-item">
                <a href="/" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Favorite</a>
            </li>
            <li class="nav-item">
                <a href="#about" class="nav-link">About Us</a>
            </li>
            <li class="nav-item">
                <form action="#" class="search-form">
                <input type="text" class="search-bar" placeholder="Search...">
                <button type="submit" class="search-btn"><i class="fas fa-search search-icon"></i></button>
                </form>
            </li>
            </ul>     
        </nav>
      `;
    }
  }

  customElements.define('navbar-item', NavbarItem);