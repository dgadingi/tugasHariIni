const express = require('express');
const route = express.Router();

// body
route.get('/:id/other/:name/:amount', (req, res) => {
    const { id, name, amount } = req.body;
    res.send(`ambil data produk dengan id: ${id}, name ${name} dan jumlah ${amount} `);
});

// Querry
// testing = localhost:3000/cart?name=abcd&id=2
route.get('/', (req, res) => {
    res.send(`ambil data produk dengan id: ${req.query.id}, name ${req.query.name} dan jumlah ${req.query.amount} `);
});

// Segment Parameter
// testing = localhost:3000/cart/2/take/nike/10
route.get('/:id/take/:name/:amount', (req, res) => {
    res.send(`ambil data produk dengan id: ${req.params.id}, name ${req.params.name} dan jumlah ${req.params.amount} `);
});








// route.post('/:id/add/:name', (req, res) => {
//     const { name_item } = req.body;
//     res.send(`tambah data produk dengan name ${name_item}`);
// });

// route.put('/:id/change/:name', (req, res) => {
//     const { name_item } = req.body;
//     res.send(`ubah data produk dengan name ${name_item}`);
// });

// route.delete('/:id/delete/:name', (req, res) => {
//     const { name_item } = req.body;
//     res.send(`hapus data produk dengan name ${name_item}`);
// });



module.exports = route;