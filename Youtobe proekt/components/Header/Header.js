class Header {
    render() {
        const html = `
            <div class="header-container">
                <div class="header-logo">SHOP</div>

                <nav class="header-menu">
                    <div onclick="renderPage('home')" class="header-link">Главная</div>
                    <div onclick="renderPage('catalog')" class="header-link">Каталог</div>
                    <div onclick="renderPage('favorites')" class="header-link">★ Желания</div>
                    <div onclick="renderPage('profile')" class="header-link">Профиль</div>
                    <div onclick="renderPage('cart')" class="header-link header-cart-btn">
                    <div onclick="toggleTheme()" class="header-link">🌓 Тема</div>
                        🛒 <span id="cart-count">0</span>
                    </div>
                </nav>
            </div>
        `;

        ROOT_HEADER.innerHTML = html;
    }
}

const headerPage = new Header();
headerPage.render();
