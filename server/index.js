const express = require('express')
const dotenv = require('dotenv')
const chats = require('./data/data')
const app = express()
dotenv.config()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/api/chat', (req, res) => {
  res.send(chats)
})

app.get('/api/chat/:id', (req, res) => {
  const { id } = req.params
  const chat = chats.find(c => c._id == id )
  res.send(chat)
})


app.listen(3000, () => {
    console.log('Server started on PORT 3000')
})