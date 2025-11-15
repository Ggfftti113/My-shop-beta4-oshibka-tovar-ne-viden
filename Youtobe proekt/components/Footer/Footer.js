class Footer {
    render() {
        const html = `
            <div class="footer">
                <p>© 2025 MyShop — Все права защищены.</p>
                <div class="footer-links">
                    <a onclick="renderPage('home')">Главная</a>
                    <a onclick="renderPage('catalog')">Каталог</a>
                    <a onclick="renderPage('favorites')">Желания</a>
                    <a onclick="renderPage('profile')">Профиль</a>
                </div>
            </div>
        `;
        document.getElementById("footer").innerHTML = html;
    }
}
const footerPage = new Footer();
footerPage.render();
