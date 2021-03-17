import React from 'react';
import recipedb from '../db/recipe.json'

const Recipe = () => {
    const ViewRecipe = (id) => {
        window.location = '/recipeview/' + id
        console.log(id,"kjhgfdxcvbj");
    }
    return (
        <>
            <section className="recipe">
                {recipedb.map((item, index) => {
                    return (
                        <div className="recipe-box" key={index}>
                            <div className="recipe-img">
                                <img src={item.image} alt="" />
                            </div>
                            <div className="recipe-name">
                                <h2>{item.recipeName}</h2>
                                <div className="view">
                                    <h3>20 min</h3>
                                    <button
                                        onClick={(id) => ViewRecipe(item.id)}
                                    >View Recipe</button>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </section>
        </>
    )

}

export default Recipe;