import './App.css';
import {Authorization, ConfirmPassword} from "./components/Authorization/Authorization";
import React from "react";
import {Route} from "react-router-dom";
import PokemonCardsContainer from "./components/PokemonCards/PokemonCardsContainer";
import ViewCard from "./components/ViewCard/ViewCard";

function App() {
  return (
    <div className="App">
        <Route exact={true} path={'/'} render={() => <Authorization />} />
        <Route exact={true} path={'/confirm'} render={() => <ConfirmPassword /> } />
        <Route exact={true} path={'/cards'} render={() => <PokemonCardsContainer /> } />
        <Route exact={true} path={'/card/:id'} render={() => <ViewCard /> } />
    </div>
  );
}

export default App;
