const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // body parser
// app.use('/', (req, res) => res.send('selamat datang di e-commerce api')); // middle ware
// app.use('/product', (req, res) => {
//     res.send('selamat datang di e-commerce api');
// }); // middle ware


app.use('/user', require('./route/user'));
app.use('/cart', require('./route/cart'));


app.use('/user', (req, res) => {
    res.send('ini adalah router user')
});
app.use('/cart', (req, res) => {
    res.send('ini adalah router cart')
});



app.listen(PORT, () => console.log(`server berjalan di port ${PORT}`));