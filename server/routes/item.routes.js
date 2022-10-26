const Recipe = require("../controllers/recipe.controller");

module.exports = (app) => {
    app.get("/api/recipes", Recipe.findAll)
    app.post("/api/recipes", Recipe.create)
    app.get("/api/recipes/:id", Recipe.findOne)
    app.put("/api/recipes/:id", Recipe.update)
    app.delete("/api/recipes/:id", Recipe.delete)
}
