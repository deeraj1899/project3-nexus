const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const routes=require("./controller/routes.js")
const app=express();
const ejs=require("ejs");




app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine','ejs');
app.use(cookieParser());

app.use(routes);



const mongo_URI="mongodb+srv://deerajakki09:deeraj999@backend.h9zmv7k.mongodb.net/intern?retryWrites=true&w=majority&appName=backend";
mongoose.connect(mongo_URI)
.then(()=>{
    console.log("connected to database")
    const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

})
.catch(()=>{
    console.log("connection failed")
});


