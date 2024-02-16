const { Router } = require("express");
const { getMeal, saveMeals, deleteMeal, editMeal } = require("./MealController");

const router = Router();

router.get("/", getMeal);
router.post("/saveMeals", saveMeals );
//router.delete("/deleteMeal", deleteMeal); //часто мы используем post, чтобы что-то удалять
router.post("/deleteMeal", deleteMeal); //часто мы используем post, чтобы что-то удалять
router.post("/editMeal", editMeal) // тут тоже можно использовать post

module.exports = router;