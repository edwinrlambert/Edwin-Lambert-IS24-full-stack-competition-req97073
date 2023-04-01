import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { render } from "react-dom";

// Import Components
import Home from "./Home"
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import DeleteProduct from "./DeleteProduct";

const App = () => {
    return (
        <>
            {/* <Router>
                <Link to="/">Home</Link>
                <Switch>
                    <Route exact path="/"><Home /></Route>
                    <Route path="/add-product"><AddProduct /></Route>
                    <Route path="/edit-product"><EditProduct /></Route>
                    <Route path="/delete-product"><DeleteProduct /></Route>
                    <Route path="*"><Home /></Route>
                </Switch>
            </Router> */}
            <Home />
        </>
    )
}

export default App;