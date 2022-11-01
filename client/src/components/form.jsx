import React, {useState} from 'react';
import axios from 'axios'

const RecipeForm = (props) => {
    const [title, setTitle] = useState("");
    const [titleError, setTitleError] = useState("");
    const [ingredient, setIngredient] = useState([]);
    const [ingredientError, setIngredientError] = useState("");
    const [description, setDescription] = useState("");
    const [descriptionError, setDescriptionError] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createRecipe = (e) => {
        e.preventDefault();
        const newRecipe = {title, ingredient, description};
        axios.post("http://localhost:8000/api/recipes", newRecipe)
    }