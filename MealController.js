//https://developer.mozilla.org/ru/docs/Learn/Server-side/Express_Nodejs/routes
const MealModel = require("./MealModel") //соеденяем 2 документа, чтобы они общались

//соеденияем с POSTMAN
//тут прописываем действия, которые помогают нам добавлять блюда в наше меню
//Что хотим делать с меню?
//1 -- GET -- ПОЛУЧАТЬ
module.exports.getMeal = async (req,res) =>{
    const myMeal = await MealModel.find();
    res.send(myMeal)
} 

//2 -- POST -- СОХРАНЯЕМ наши блюда
module.exports.saveMeals = async (req,res) =>{
    const {title} = req.body;
    await MealModel.create({ title })
    .then((data) => {console.log("Meal added")
    res.send(data)   
}) 
}

// 3 - DELETE -- УДАЛЯЕМ НАШИ БЛЮДА
module.exports.deleteMeal = async (req,res) =>{
    const {_id} = req.body;
    MealModel.findByIdAndDelete(_id)
    .then(()=> res.send("Delete a meal!"))

}

// 4 -- EDIT MEAL -- РЕДАКТИРУЕМ ЧТО-ТО
module.exports.editMeal = async (req,res) =>{
    const { _id, title } =req.body;
    MealModel.findByIdAndUpdate(_id, {title})
    .then(()=> res.send("Edited a meal!!!!"))
}