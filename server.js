const express = require("express");
const app = express();
const routes = require("./MealRoutes")
const mongoose = require("mongoose");
const cors = require("cors");

//то, что требуется в настроках, чтобы соеденить документ с БД
require("dotenv").config();  
//это из документации
mongoose.set("strictQuery", false);

const PORT = 4000 || process.env.port;

app.use(express.json());
app.use(cors());

//соеденяемся с Mongo
//мы можем увидеть сообщение в терминале
mongoose
.connect(process.env.MONGODB_LINK)
.then(()=> console.log("We Were Connected to Mongo"))
.catch((err)=> console.log(err))

app.use(routes);

app.listen(PORT, ()=>{
    console.log(`I am your PORTIK ${PORT}`)
})

//eq07DFgRTBeCxrV1 volhacharnukha <-- это в файле .env