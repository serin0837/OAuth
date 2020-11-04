const express = require("express")
const app = express()
const authRoutes = require("./routes/auth-router")
const passportSetup = require("./config/passport-setup")

//ser up view engine
app.set("view engine","ejs")

//set up routes(add /auth in front of authRoutes)
app.use("/auth",authRoutes)
//create home route
app.get("/",(req,res)=>{
    res.render("home")
})
app.listen(3000,()=>{
    console.log("app now listening for request on port 3000")
})

