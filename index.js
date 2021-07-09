const express = require('express')
const PORT = process.env.PORT || 3000
const app = express()
const data = require('./nav.json')
const gallery = require('./gallery.json')

app.set('view engine', "ejs")

app.use(express.static('public'))


app.get('/', (req, res) => {
    res.render('index', { title: "Home", data: data })
})
app.get('/team', (req, res) => {
    res.render('team', { title: "Team", data: data })
})
app.get('/about', (req, res) => {
    res.render('about', { title: "About", data: data })
})
app.get('/contact', (req, res) => {
    res.render('contact', { title: "Contact", data: data })
})
app.get('/gallery', (req, res) => {
    res.render('gallery', { title: "Gallery", data: data, gallery: gallery })
})


app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
