import React, { useEffect, useState } from 'react';
import recipedb from '../db/recipe.json'
import { useParams } from "react-router-dom";
import Footer from '../components/footer';

const RecipeView = () => {

    const { id } = useParams();
    const [getRecipDetail, setGetRecipDetail] = useState([])

    useEffect(() => {
        const recipename = recipedb.filter(function (hero) {
            return hero.id === id;
        });
        setGetRecipDetail(recipename)
        console.log(recipename, "fghjkjhgf");
    }, [id])

    return (
        <>
            <section>
                <>
                    <div>
                        {/* {getRecipDetail.recipeName} */}
                        {getRecipDetail.map((item, index) => {
                            return (
                                <>
                                    <section className="view-product container" key={index}>
                                        <div className="product-img">
                                            <img src={item.image} alt="" />
                                        </div>
                                        <div className="product-price">
                                            <h2>{item.recipeName}</h2>
                                        </div>
                                        <div className="product-dis">
                                            <h2>Ingredients</h2>
                                            <p>{item.ingredient.length > 0 ?
                                                item.ingredient.map((item, index) => (
                                                    <p key={index}>{item}</p>
                                                ))
                                                : null}</p>
                                            <h2>Dressings</h2>
                                            <p>{item.Dressing.length > 0 ?
                                                item.Dressing.map((item, index) => (
                                                    <p key={index}>{item}</p>
                                                ))
                                                : null}</p>
                                            <h2>Preparation</h2>
                                            <p>{item.Preparation.length > 0 ?
                                                item.Preparation.map((item, index) => (
                                                    <p key={index}>{item}</p>
                                                ))
                                                : null}</p>
                                        </div>
                                    </section>
                                    <Footer />
                                </>
                            )
                        })
                        }
                    </div>
                </>
            </section>
        </>
    )
}

export default RecipeView;