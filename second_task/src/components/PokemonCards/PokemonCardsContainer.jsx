import React, {useState} from 'react';
import PokemonCards from "./PokemonCards";
import {connect} from "react-redux";
import {getPokemonCards, setCurrentPage} from "../../redux/pokemon-cards-reducer";

class PokemonCardsContainer extends React.Component {
    componentDidMount() {
        this.props.getPokemonCards(this.props.page, this.props.pageSize, {types: this.props.selectedType, subtypes: this.props.selectedSubtype});
    }

    getCardsByType = (value) => {
        this.props.getPokemonCards(this.props.page, this.props.pageSize, {types: value, subtypes: this.props.selectedSubtype});
    }
    getCardsBySubtype = (value) => {
        this.props.getPokemonCards(this.props.page, this.props.pageSize, {types: this.props.selectedType, subtypes: value});
    }

    changePage = (page) => {
        this.props.setCurrentPage(page);
        this.props.getPokemonCards(page, this.props.pageSize, {types: this.props.selectedType, subtypes: this.props.selectedSubtype});
    }

    render() {
        return <PokemonCards {...this.props} getCardsByType={this.getCardsByType} getCardsBySubtype={this.getCardsBySubtype} changePage={this.changePage} />
    }
}
let mapStateToProps = (state) => {
    return {
        page: state.pokemonCards.page,
        pageSize: state.pokemonCards.pageSize,
        totalCount: state.pokemonCards.totalCount,
        currentPage: state.pokemonCards.currentPage,
        cards: state.pokemonCards.cards,
        selectedType: state.pokemonCards.selectedType,
        selectedSubtype: state.pokemonCards.selectedSubtype,
        isLoading: state.pokemonCards.isLoading,
        types: state.initialData.pokemon_types,
        subtypes: state.initialData.subtypes_pokemon,
    };
}

export default connect(mapStateToProps, {getPokemonCards, setCurrentPage})(PokemonCardsContainer);