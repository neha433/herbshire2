import React from "react";
import { Switch, Route } from "react-router-dom";
// import Product1 from "../components/product1";
import Landing from "../pages/Landing";
import RecipeView from "../pages/recipeView";


const Routes = () => {

    return (
        <>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/recipeview/:id" component={RecipeView} />
            </Switch>
        </>
    );
};

export default Routes;