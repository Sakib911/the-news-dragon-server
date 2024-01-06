const express = require('express');
const cors = require('cors');
const app = express();
port = process.env.PORT || 5000;

const categories = require('./data/categories.json');

app.use(cors())
app.get('/', (req, res) =>
    res.send('Dragon Is Running')
);

app.get('/categories', (req, res) => {
    res.send(categories)
})

app.listen(port, () =>
    console.log(`Dragon API is running on port ${port}`)
);