const express = require('express');

const app = express();

const port = 3000;

app.get("/", (req, res) => {
    res.send("Hola, mi server en express.")
})

app.get("/nueva-ruta", (req,res) => {
    res.json({
        name: "Sape",
        direccion: "Nueva ruta, sapooo"
    })
})

app.get('/products', (req, res) => {
    res.json([
        {
            name: 'Product 1',
            price: 1000
        },
        {
            name: 'Product 2',
            price: 2000
        }
    ])
})

app.get('/products/:id', (req, res) => {
    // Normal
    // const id = req.params.id;
    // Con deestructuración
    const { id } = req.params;
    res.json({
        id: id,
        name: 'Product 2',
        price: 2000
    })
})

app.get("/categories/:categoryId/products/:productId", (req,res) => {
    const {categoryId, productId } = req.params;
    res.json({
        pategoryId: categoryId,
        productId: productId,
        name: 'Action',
        product_uantity: 192
    })
})

app.listen(port, () => {
    console.log("Listening on port " + port)
})
