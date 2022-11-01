const mongoose = require("mongoose");


//Schema with recipe title, ingredients, and description
const RecipeSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [2, "{PATH} must be 2 chars long"]
    },
    ingredient:{
        type: [String]
    },
    description:{
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [2, "{PATH} must be 2 chars long"]
    }
}, {timestamps: true})

const Recipe = mongoose.model("Recipe", RecipeSchema)
module.exports = Recipe;