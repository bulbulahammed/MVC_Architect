const express = require("express");
const app = express();
const PORT = 3000;
const userRouter = require("./route/user.route");

// Get data from body
app.use(express.urlencoded({extended:true}))

// Implement the userRouter
app.use(userRouter);

app.listen(PORT,(req,res)=>{
    console.log(`Listening at localhost: ${PORT}`);
})