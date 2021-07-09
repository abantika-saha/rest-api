require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const app=express();

const dbURI = (process.env.DATABASE_URL);
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
const db=mongoose.connection;
db.on('error',(error) => console.error(error))
db.once('open',() => console.log('Connected to Database'))

app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)


app.listen(3000, ()=>console.log('Server Started'))