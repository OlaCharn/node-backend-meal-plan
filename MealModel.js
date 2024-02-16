const mongoose = require("mongoose");

//это схема, которую мы будем использовать
const mealSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true
    }

})

//это экспорт. Первый аргумент - название, второй - название схемы
//https://developer.mozilla.org/ru/docs/Learn/Server-side/Express_Nodejs/mongoose
module.exports = mongoose.model("Meal", mealSchema);