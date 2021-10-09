const express = require('express')
const app = express();
const mongoose = require('mongoose')

app.get('/',(req,res)=>res.send('No Time Travel is paradox free but magical wine is'));

const port = process.env.PORT || 5000;
app.listen(port,() => console.log(`Wine is created and served at ${port}`));