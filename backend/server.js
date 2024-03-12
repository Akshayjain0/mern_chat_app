import express from 'express';
import dotenv from 'dotenv'
const app = express();
import chats from './data/data.js';
const PORT = process.env.PORT || 5000;
dotenv.config();

app.get('/api/chat', (req, res) => {
    res.send(chats)
})

app.get('/api/chat/:id', (req, res) => {
    const singleChat = chats.find((chat) => chat._id === req.params.id);
    res.send(singleChat)
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
