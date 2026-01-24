const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => 
    res.send('Welcome to User API!'))

app.post('/register', (req, res) => {
    const {name, email, age} = req.body;
    if (!name || !email || !age) 
        return res.status(400).json({error: 'All fields are required'});
    res.status(201).json({message: 'User registered successfully', user: {name, email, age}});
});

app.get('/users/:id', (req, res) => {
    res.json({id: req.params.id, name: 'Sample user'});
});

app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000/');
});