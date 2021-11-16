import {Link, useHistory, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import Navbar from "../Navbar/Navbar";
import css from './ViewCard.module.css';
import React from "react";

const ViewCard = (props) => {
    const {id} = useParams();
    const card = useSelector((state) => state.pokemonCards.cards.filter(el => el.id === id))[0];
    let history = useHistory();
    return <>
        <Navbar>
            <Link to={'/cards'}><button>Back</button></Link>
        </Navbar>
        <div className={css.card}>
            <div className={css.cardBox}>
                <img src={card.images.large} alt="" className={css.cardBoxImg}/>
                <p className={css.cardBoxDesc}>{card.rules == undefined ? '' : card.rules[0]}</p>
            </div>
            <div className={css.cardBox}>
                <p className={css.cardBoxName}>{card.name}</p>
                <p className={css.cardBoxTypes}><span>type:</span>{card.types.map(el => el)}</p>
                <p className={css.cardBoxSubtypes}><span>subtype:</span>{card.subtypes.map(el => el)}</p>
                <hr/>
                <p><span>damage:</span>{card.attacks[0].damage}</p>
                <p><span>cost:</span>{card.attacks[0].convertedEnergyCost}</p>
                <p><span>hp:</span>{card.hp}</p>
            </div>
        </div>
    </>;
}

export default ViewCard;