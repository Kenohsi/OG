class ElementCreator {
    constructor(tag) {
        this.element = document.createElement(tag);
    }
    id(id) {
        this.element.id = id;
        return this;
    }
    class(clazz) {
        this.element.class = clazz;
        return this;
    }
    text(content) {
        this.element.innerHTML = content;
        return this;
    }
    with(name, value) {
        this.element.setAttribute(name, value)
        return this;
    }
    listener(name, listener) {
        this.element.addEventListener(name, listener)
        return this;
    }
    append(child) {
        child.appendTo(this.element);
        return this;
    }
    prependTo(parent) {
        parent.prepend(this.element);
        return this.element;
    }
    appendTo(parent) {
        parent.append(this.element);
        return this.element;
    }
    insertBefore(parent, sibling) {
        parent.insertBefore(this.element, sibling);
        return this.element;
    }
}


class Category {
    constructor(title, id, ...products) {
        this.title = title;
        this.id = id;
        this.products = products;
    }
}
class Product {

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = "id" + id;
    }

    get cartId() {
        return `cart-${this._id}`;        
    }

    addTo(cart) {
        const quantitySelect = document.querySelector(`#${this.id} select`);
        this.quantity = parseInt(quantitySelect.value);
        cart.update(this);
    }
}

class ShoppingCart {
    constructor() {
        this.products = [];
    }

    update(product) {
        if (this.products.find(element => element === product)) {
            this.delete(product);
        }
        this.add(Product);
        this.showSum();
    }

    delete(product) {
        const index = this.products.indexOf(product);
        if (index > -1) {
            this.product.splice(index, 1);
            document.getElementById(product.cartId).remove();
        }
    }

    add(product) {
        this.products.push(product);

        new ElementCreator("li").id(product.cartId)
            .append(new ElementCreator("span").text(product.name))
            .append(new ElementCreator("span").text(`${product.quantity} Pcs. \u2014 ${this.round(product.quantity * product.price)}\u20AC`))
            .appendTo(document.querySelector("aside ul"))
    }

    calculateSum() {
        let sum = 0;
        for (let product of this.products) {
            sum += product.quantity * product.price;
        }
        return this.round(sum);
    }

    round(amount) {
        return Math.round((amount + Number.EPSILON) * 100) / 100;
    }

    showSum() {
        document.querySelector("#sum").innerHTML = this.calculateSum();
    }
}
class Shop {
   
    static MAX_QUANTITY = 5;

    constructor() {
        this.cart = new ShoppingCart();
    }
    add(categories) {
        for (const category of categories) {
            this.addCategoryToDOM(category);
            for (const product of category.products) {
                this.addProductToDOM(category, product);
            }
        }
    }
    addToDOM(category, products) {
        for (const section of document.querySelectorAll("section")) {
            section.remove();
        }
        this.addCategoryToDOM(category);                      
        for (const product of products) {
            this.addProductToDOM(category, Object.assign(new Product(), product));
        }        
    }
    addCategoryToDOM(category) {
        new ElementCreator("section")
            .id(category.name)
            .append(new ElementCreator("h1").text(category.title))
            .insertBefore(document.querySelector("main"), document.querySelector("main > a[href]"))
    }
    addProductToDOM(category, product) {
        let selectCreator = new ElementCreator("select");
        for (let i = 1; i <= Shop.MAX_QUANTITY; i++) {
            selectCreator.append(new ElementCreator("option").with("value", i).text(i))
        }
        new ElementCreator("article")
            .id(product.id)
            .append(new ElementCreator("h3").text(product.name))
            .append(new ElementCreator("img").with("src", product.image).with("alt", "Image of '" + product.title + "'"))
            .append(new ElementCreator("p")
                .append(new ElementCreator("label").text("Quantity:")
                    .append(selectCreator))
                .append(new ElementCreator("input").with("type", "button").with("value", "Add to cart")
                    .listener("click", () => product.addTo(this.cart))))
            .append(new ElementCreator("p").text("Price: " + product.price + "\u20AC"))
            .appendTo(document.querySelector(`section#${category.name}`));
    }
}

document.addEventListener("DOMContentLoaded", function (event) {

    const shop = new Shop();
         fetch("/api/categories")
          .then(response => response.json())
          .then(categories => {
              for (const category of Array.from(categories).reverse()){
                  const list = document.querySelector("nav>ul");
                  new ElementCreator("li")
                   .append(new ElementCreator("a")
                   .with("href", `#${category.name}`)
                   .text(category.title)
                   .listener("click", () =>  {
                       fetch(`/api/categories/${category.name}/products`)
                       .then(response => response.json())
                       .then(products => {
                           shop.addToDOM(category, products);
                       });
         }))
                       .prependTo(list);
        }
        document.querySelector("nav li a").click();
   
          });
 });