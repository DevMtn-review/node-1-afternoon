const products = require('../products.json');
const endpoints = {
    getProducts: () => ((req, res) => {
        if(req.query.price) {
            const priceFilter = products.filter(e => e.price >= +req.query.price);
            res.status(200).send(priceFilter);
        } else res.status(200).send(products);
    }),

    getOneProduct: () => ((req, res) => {
        const product = products.find(e => e.id === +req.params.id);
        if(!product) {
            return res.status(500).send('product not found');
        } else res.status(200).send(product);
    })
}

module.exports = endpoints;