let menuDOM = document.createElement("div");
menuDOM.classList.add("menu-cards");

class MenuItem{
    constructor(image, name, price, detail){
        this.image = image;
        this.name = name;
        this.price = price;
        this.detail = detail;
    }

    createDomElement(){
        let menuCardDOM = document.createElement("div");
        menuCardDOM.classList.add("menu-card");

        let itemImageDOM = document.createElement("img");
        itemImageDOM.classList.add("item-image");
        itemImageDOM.src = this.image;
        itemImageDOM.alt = "image";


        let itemInfoDOM = document.createElement("div");
        itemInfoDOM.classList.add("item-info");

        let itemNameDOM = document.createElement("div");
        itemNameDOM.classList.add("item-name");
        itemNameDOM.textContent = this.name;

        let itemPriceDOM = document.createElement("div");
        itemPriceDOM.classList.add("item-price");
        itemPriceDOM.textContent = this.price;

        let itemDetailDOM = document.createElement("div");
        itemDetailDOM.classList.add("item-detail");
        itemDetailDOM.textContent = this.detail;

        itemInfoDOM.appendChild(itemNameDOM);
        itemInfoDOM.appendChild(itemPriceDOM);
        itemInfoDOM.appendChild(itemDetailDOM);

        menuCardDOM.appendChild(itemImageDOM);
        menuCardDOM.appendChild(itemInfoDOM);

        return menuCardDOM;

    }
}

let menuItemsArray = [
    new MenuItem("image-url1.jpg", "Pasta", "$10", "Delicious Italian pasta"),
    new MenuItem("image-url2.jpg", "Pizza", "$12", "Tasty Margherita pizza"),
    new MenuItem("image-url3.jpg", "Salad", "$8", "Fresh green salad")
];

menuItemsArray.forEach(menuItem => {
    let menuCard = menuItem.createDomElement();
    menuDOM.appendChild(menuCard);
});

export {menuDOM};
