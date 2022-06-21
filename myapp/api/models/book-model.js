//Done with Christina Ifrim, Kenan Husic, Muhammad Taha Imran, Adam Ibragimov!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/* A class representing a category of books. It holds all the books belonging to this category. */
class Category {
    constructor(title, name) {
        this.name = name;
        this.title = title;
    }
}

/* A class representing a book in one of the categories. It contains getters for the ids
 * that represent the book in the main content and in the shopping cart.
 */
class Product {
    constructor(name, image, price) {
        this.name = name;
        this.image = image;
        this.price = price;
       
    }
}

class Model {
    static CATEGORY_ID = 1;
    static PRODUCT_ID = 1;

    constructor() {
        this.products = new Map();
    }

     addCategory(category) {
        if (!this.products.get(category)) {
            category.id = Model.CATEGORY_ID++;
            this.products.set(category, new Map())
        }
    }

    getCategories() {
        return Array.from(this.products.keys());
    }

    addProduct(category, product) {
        if (!this.products.get(category)) {
            throw new Error(`Unknown book category ${category.name}`)
        }
        product.id = Model.PRODUCT_ID++;
        this.getProductsAsMap(category).set(product.id, product);
    }


    getProducts(category) {
        return Array.from(this.getProductsAsMap(category).values());
    }

    resolveCategory(category) {
        if (typeof category === "string") {
            for (const [_category, products] of this.products.entries()) {
                if (_category.name === category) {
                    return _category;
                }
            }
            throw new Error(`Unknown book category ${category}`)
        } 

        return category;
    }

    getProductsAsMap(category) {
        return this.products.get(this.resolveCategory(category));
    }

    getCategory(id) {
        for (const [ category, productsAsMap] of this.products.entries()) {
            const products = Array.from(productsAsMap.values());
            if (products.find(product => product.id === id)) {
                return category;
            }
        };

        return null;
    }

    getProduct(id) {
        if (typeof id !== "number") {
            throw new Error(`Given id must be an number, but is a ${typeof id}`);
        }

        let product = null;

        const category = this.getCategory(id);
        if (category) {
            product = this.products.get(category).get(id);
        }

        return product;
    }

    createProduct(category, product) {
        /* --- Task 2 ---
         * Add the received book to the given category in the model and return it. */
        this.addProduct(category,product)
       return product;
    }

    updateProduct(id, product) {
        /* --- Task 3 --- Update the book with the given id in the model */
        const target = this.getProduct(id);
        if(!target){
            throw new Error(`Product ${id} not found!`)
        }
        Object.assign(target,product);
        return target;
    }

    deleteProduct(id) {
        /* --- Task 4 --- Delete the book with the given id from the model */
        let deleteProduct = false;
        
        const category = this.getCategory(id);
        if(category){
            deleteProduct =this.products.get(category).delete(id);
        }
        return deleteProduct;
    }
}

const model = new Model();

const Fruits = new Category("Fruits", "fruits");
model.addCategory(Fruits);
model.addProduct(Fruits, new Product("Watermelon", "images/watermelon.jpg", 2));
model.addProduct(Fruits, new Product("Tomatoes", "images/Small_tomatoes.jpg", 2.5));
model.addProduct(Fruits, new Product("Apples", "images/apple.jpg", 2));
model.addProduct(Fruits, new Product("Oranges", "images/oranges.jpg", 2.5));
model.addProduct(Fruits, new Product("Bananas", "images/banana.jpg", 2.5));



const Veggie = new Category("Vegetables", "vegetables");
model.addCategory(Veggie);
model.addProduct(Veggie, new Product("Carrot", "images/Carrot.jpg", 3));
model.addProduct(Veggie, new Product("Potatoes", "images/potatoes.jpg", 3));
model.addProduct(Veggie, new Product("Cucumber", "images/Cucumber.jpg", 2.5));
model.addProduct(Veggie, new Product("Onion", "images/onion.jpg", 2));

module.exports = model;