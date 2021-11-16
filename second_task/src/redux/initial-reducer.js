import {pokemonApi} from "../api/api";

const SET_TYPES = 'SET_TYPES';
const SET_SUBTYPES = 'SET_SUBTYPES';


let init_state = {
    pokemon_types: [],
    subtypes_pokemon: [],
    login: 'kode@kode.ru',
    password: 'Enk0deng',
    userIsLogged: false,
};

export const initialReducer = (state = init_state, action) => {
    switch (action.type) {
        case SET_TYPES:
            console.log(action.pokemon_types);
            return {
                ...state, pokemon_types: [...action.pokemon_types]
            }
        case SET_SUBTYPES:
            return {
                ...state, subtypes_pokemon: [...action.subtypes_pokemon]
            }
        default:
            return state;
    }
}
export const setTypes = (pokemon_types) => {
    return {type: SET_TYPES, pokemon_types}
}
export const setSubtypes = (subtypes_pokemon) => {
    return {type: SET_SUBTYPES, subtypes_pokemon}
}

export const getTypesPokemon = () => {
    return async (dispatch) => {
        let response = await pokemonApi.getTypesPokemon();
        dispatch(setTypes(response.data));
    }
}
export const getSubtypesPokemon = () => {
    return async (dispatch) => {
        let response = await pokemonApi.getSubtypesPokemon();
        dispatch(setSubtypes(response.data));
    }
}
