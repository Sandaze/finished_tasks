import {pokemonApi} from "../api/api";

const SET_CARDS = 'SET_CARDS';
const SET_SELECTED_TYPE = 'SET_SELECTED_TYPE';
const SET_SELECTED_SUBTYPE = 'SET_SELECTED_SUBTYPE';
const TOGGLE_LOADING = 'TOGGLE_LOADING';
const SET_TOTAL_CARDS_COUNT = 'SET_TOTAL_CARDS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';


let init_state = {
    selectedType: 'colorless',
    selectedSubtype: 'break',
    page: 1,
    pageSize: 6,
    isLoading: false,
    totalCount: null,
    currentPage: 1,
    cards: [],
};
const pokemonCardsReducer = (state = init_state, action) => {
    switch (action.type) {
        case SET_CARDS:
            return {
                ...state, cards: [...action.cards],
            };
        case SET_SELECTED_TYPE:
            return {
                ...state, selectedType: action.selectedType,
            };
        case SET_SELECTED_SUBTYPE:
            return {
                ...state, selectedSubtype: action.selectedSubtype,
            };
        case TOGGLE_LOADING:
            return {
                ...state, isLoading: !state.isLoading,
            };
        case SET_TOTAL_CARDS_COUNT:
            return {
                ...state, totalCount: action.totalCount,
            };
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage,
            };
        default:
            return state;
    }
}

export const setCards = (cards) => {
    return {type: SET_CARDS, cards}
}
export const setSelectedType = (selectedType) => {
    return {type: SET_SELECTED_TYPE, selectedType}
}
export const setSelectedSubtype = (selectedSubtype) => {
    return {type: SET_SELECTED_SUBTYPE, selectedSubtype}
}
export const setToggleLoading = () => {
    return {type: TOGGLE_LOADING}
}
export const setTotalCardsCount = (totalCount) => {
    return {type: SET_TOTAL_CARDS_COUNT, totalCount}
}
export const setCurrentPage = (currentPage) => {
    return {type: SET_CURRENT_PAGE, currentPage}
}


export const getPokemonCards = (page, pageSize, query) => {
    return async (dispatch) => {
        dispatch(setToggleLoading());
        let response = await pokemonApi.getPortionCards(page, pageSize, query);
        dispatch(setCards(response.data));
        dispatch(setSelectedType(query.types));
        dispatch(setSelectedSubtype(query.subtypes));
        dispatch(setTotalCardsCount(response.totalCount));
        dispatch(setToggleLoading());
    }
}

export default pokemonCardsReducer;