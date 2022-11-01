const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;
const DB = "recipeBook_db"

//Middleware
app.use(cors(), express.json(), express.urlencoded({extended:true}));

//DB Connection
app.listen(PORT, () => {
    console.log(`SERVER IS UP ON: ${PORT}`)
})

//connect the routes
require("./routes/recipe.routes")(app);

app.listen(PORT, () => {
    console.log(`SERVER IS UP ON: ${PORT}`)
})