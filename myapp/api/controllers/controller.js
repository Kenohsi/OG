const model = require("../models/model");


class ProductController {
    static MANDATORY = ["name", "image", "price"];

    getCategories(req, res) {
        res.send(model.getCategories());
    }
    getCategoryProducts(req, res) {
        res.send(model.getProducts(req.params.category));
    }
    getProduct(req, res) {
        const product = model.getProduct(req.params.id);
        if (product) {
            res.send(product);
        } else {
            res.status(404).send(`Product with id ${req.params.id} not found.`);
        }
    }
    checkProductProperties(res, product, id) {
        let result = true;
        const mandatoryNames = [...ProductController.MANDATORY];
        if (id) {
            mandatoryNames.push("id");
        }
        const containedNames = mandatoryNames.filter(c => c in product);
        if (containedNames.length < mandatoryNames.length) {
            const necessary = mandatoryNames.join(", ");
            const contained = containedNames.length === 0 ? "none of those" : "only " + containedNames.join(", ");
            res.status(400).send(`Product type must include ${necessary}, but ${contained} present.`);
            result = false;
        }
        if (id && result) {
            if (product.id !== id) {
                res.status(400).send(`Product data can only be updated if the id in the path (${id}) and the id in the body (${product.id}) match.`);
                result = false;
            }
        }
        return result;
    }
    createProduct = (req, res) => {
        const categoryAsString = req.params.category;
        const product = req.body;
        const category = model.resolveCategory(categoryAsString);
        if(this.checkProductProperties(res,product)) {
           return res.send(model.createProduct(category,product));
        }
}
    updateProduct = (req, res) => {
        const id = parseInt(req.params.id);
        if(!model.getProduct(id)){
            res.status(404).send(`Error 404`);
        }else{
         model.updateProduct(id);
         res.sendStatus(200);
        }
    }
    deleteProduct(req, res) {
      const id = parseInt(req.params.id);
       if(!model.getProduct(id)){
         res.status(404).send(`Error 404`);
}      else{
          model.deleteProduct(id);
           res.sendStatus(204);
}
    }
}module.exports = new ProductController();