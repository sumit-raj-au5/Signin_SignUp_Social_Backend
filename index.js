const cookieSession = require('cookie-session');
const express = require('express');
const passport = require('passport');
const cors = require('cors');
const app=express();
const passportSetup = require('./passport');
const authRoute = require('./routes/auth.routes');
require('dotenv').config();

app.use(cookieSession(
    {name:"session",
keys:["auth"],
maxAge:24*60*60*100}
));

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
    origin:process.env.FRONTEND_URL,
    Access-Control-Allow-Origin: *,
    methods:"GET, POST, PUT, DELETE",
    credentials:true
}))

app.use("/auth", authRoute);

app.listen(process.env.PORT, ()=>
console.log(`server running on ${process.env.PORT}`));
