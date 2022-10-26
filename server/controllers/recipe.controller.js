const Recipe = require("../models/recipe")

module.exports = {

    //READ ALL
    findAll: (req,res) => {
        Recipe.find()
            .then(allRecipes => res.json({recipes: allRecipes}))
            .catch(err => res.json({message: "error res", error : err}))
    },

    //CREATE
    create: (req,res) => {
        Recipe.create(req.body)
            .then(newRecipe => res.json(newRecipe))
            .catch(err => res.json({message: "error res", error : err}))
    },

    //READ ONE
    findOne: (req,res) => {
        Recipe.findById(req.params.id)
            .then(recipe => res.json(recipe))
            .catch(err => res.json({message: "error res", error : err}))
    },

    //UPDATE
    update: (req,res) => {
        Recipe.findByIdAndUpdate(req.params.id, req.body, { 
            new: true, runValidators: true
        })
            .then((updatedRecipe) => {
                res.json(updatedRecipe)
            })
            .catch(err => res.json({message: "error res", error : err}))
    },

    //DELETE
    delete: (req, res) => {
        Recipe.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.json({message: "error res", error : err}))
    }

}