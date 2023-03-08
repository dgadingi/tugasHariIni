// account management
const express = require('express');
const route = express.Router();


const user = [
    {
        id: 0,
        username: "Denus",
        password: "******",
        gender: "Male"
    },
    {
        id: 1,
        username: "Gading",
        password: "******",
        gender: "Male"
    },
    {
        id: 2,
        username: "Imanuel",
        password: "******",
        gender: "Male"
    }
];

route.get('/alluser', (req, res) => {
    res.json(user);
});

route.post('/adduser', (req, res) => {
    const add = {
        id: 3,
        username: "John Doe",
        password: "******",
        gender: "Male"
    };

    const cnct = user.push(add);
    res.json(user);
});

route.delete('/delete/:id', (req, res) => {
    user[req.params.id] = undefined;
    res.json(user);
});


module.exports = route;

// route.get('/', (req, res) => {
//     // query parameter
//     if (req.query.name) {
//         res.send(`ambil data user dengan nama ${req.query.name}`);
//         return;
//     } else {
//         res.send(`tambah data user`);
//     }
// });