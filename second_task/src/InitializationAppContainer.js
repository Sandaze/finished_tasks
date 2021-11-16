import './App.css';
import React from "react";
import App from "./App";
import {connect} from "react-redux";
import {getSubtypesPokemon, getTypesPokemon} from "./redux/initial-reducer";

class InitializationAppContainer extends React.Component {
    componentDidMount() {
        this.props.getTypesPokemon();
        this.props.getSubtypesPokemon();
    }

    render() {
        return <App />
    }
}
export default connect(null, {getTypesPokemon, getSubtypesPokemon})(InitializationAppContainer);
