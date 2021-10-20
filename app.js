const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, './public')))
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/home.html'))
})
app.get('/register.html', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/register.html'))
})
app.get('/login.html', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/login.html'))
})

app.listen(port, () => console.log(`Server in port ${port}`))