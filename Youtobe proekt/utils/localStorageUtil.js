class LocalStorageUtil {
    constructor() {
        this.keyName = 'products';
    }

    getProducts() {
        const productsLocalStorage = localStorage.getItem(this.keyName);
        if (productsLocalStorage !== null) {
            return JSON.parse(productsLocalStorage);
        }
        return [];
    }

    putProducts(id) {
        let products = this.getProducts();
        let pushProduct = false;
        const index = products.indexOf(id);

        if (index === -1) {
            products.push(id);
            pushProduct = true;
        } else {
            products.splice(index, 1);
        }

        localStorage.setItem(this.keyName, JSON.stringify(products));
        
        return { pushProduct, products }
    }

    getProfile() {
    return JSON.parse(localStorage.getItem("profile")) || {
        name: "Гость",
        avatar: "img/avatar.png"
    };
}

saveProfile(data) {
    localStorage.setItem("profile", JSON.stringify(data));
}

getFavorites() {
    return JSON.parse(localStorage.getItem("favorites")) || [];
}

toggleFavorite(id) {
    let fav = this.getFavorites();
    const index = fav.indexOf(id);
    let added = false;

    if (index === -1) {
        fav.push(id);
        added = true;
    } else {
        fav.splice(index, 1);
    }
    localStorage.setItem("favorites", JSON.stringify(fav));
    return added;
}


}

const localStorageUtil = new LocalStorageUtil();

