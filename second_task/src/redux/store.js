import pokemonCardsReducer from "./pokemon-cards-reducer";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import middleThunk from 'redux-thunk';
import {initialReducer} from "./initial-reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let reducers = combineReducers({
    pokemonCards : pokemonCardsReducer,
    initialData: initialReducer,
});

export const store = createStore(reducers, composeEnhancers(applyMiddleware(middleThunk)));

window.store = store;