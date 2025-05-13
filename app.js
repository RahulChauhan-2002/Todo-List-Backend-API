const express = require('express');

const dbConnect = require('./config/dbConnect');
const TodoRoute=require("./routes/TodoRoute")

require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 4000;
dbConnect();

app.use(express.json());

app.use('/api/v1',TodoRoute);



app.listen(PORT,()=>{
    console.log(`Surver is running on port  ${PORT}`)
})






