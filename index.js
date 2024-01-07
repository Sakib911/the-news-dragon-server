const express = require('express');
const cors = require('cors');
const app = express();
port = process.env.PORT || 5000;

const categories = require('./data/categories.json');
const news = require('./data/news.json');
app.use(cors())
app.get('/', (req, res) =>
    res.send('Dragon Is Running')
);

app.get('/categories', (req, res) => {
    res.send(categories)
})
app.get('/news', (req, res) => {
    res.send(news)
})
app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find(newses => newses._id === id);
    res.send(selectedNews)
})

app.get('/categories/:id', (req, res) => {
    const id = req.params.id;
    if (id == 0) {
        res.send(news)
    } else {
        const selectedCategory = news.filter(categories => categories.category_id === id);
        res.send(selectedCategory);
    }

})

app.listen(port, () =>
    console.log(`Dragon API is running on port ${port}`)
);