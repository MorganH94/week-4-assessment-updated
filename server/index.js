const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, addFortune, deleteFortune, updateFortune } = require('./controller')

app.get("/api/compliment", getCompliment)
app.get('/fortunes', getFortune)
app.post('/fortunes', addFortune)
app.delete('/fortunes/:id', deleteFortune)
// app.put('/api/fortunes/:id', updateFortune)

app.listen(4000, () => console.log("Server running on 4000"));
