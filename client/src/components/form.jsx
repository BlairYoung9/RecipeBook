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
             .then(res => {
                console.log(res.data)
                console.log("success")
             })
             .catch(err => {
                console.log("error")
             })
    };

    const formMessage = () => {
        if( hasBeenSubmitted ) {
	    return "Thank you for submitting the form.";
	} else {
	    return "Welcome, please submit the form.";
	}
    };

    //Create Title
    const handleTitle= (e) => {
        setTitle(e.target.value);
        if(e.target.value.length < 1) {
            setTitleError("Title is required.");
        }else if(e.target.value.length < 2) {
            setTitleError("Title must be 2 characters or longer.");
        }else{
            setTitleError(""); 
        }
    }
    //Create Ingredients
    const handleIngredient= (e) => {
        setIngredient(e.target.value);
        if(e.target.value.length < 1) {
            setIngredientError("Ingredients is required.");
        } else if(e.target.value.length < 2) {
            setIngredientError("Ingredients must be 2 characters or longer.");
        }else{
            setIngredientError(""); 
        }
    }
    //Create Description
    const handleDescription= (e) => {
        setDescription(e.target.value);
        if(e.target.value.length < 1) {
            setDescriptionError("Description is required.");
        } else if(e.target.value.length < 5) {
            setDescriptionError("Description must be 5 characters or longer.");
        }else{
            setDescriptionError(""); 
        }
    }

    return (
        <div className="App">
            <p>Here are all the items you can buy!</p>
            <form onSubmit={createItem}>
                <h3>{formMessage()}</h3>
                <div>
                    <label>Title : </label>
                    <input type="text" onChange={handleTitle} value={title} />
                    <p>{titleError}</p>
                </div>                 
                <div>
                    <label>Ingredient : </label>
                    <input type="text" onChange={handleIngredient} value={ingredient} />
                    <p>{ingredientError}</p>
                </div>
                
                <div>
                    <label>Desc. : </label>
                    <input type="text" onChange={handleDescription} value={description} />
                    <p>{descriptionError}</p>
                </div>
                
                <input type="submit" value="Create Item" />
            </form>
        </div>
    );
};

export default ItemForm;