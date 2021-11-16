import Navbar from "../Navbar/Navbar";
import css from './PokemonCards.module.css';
import Card from "./Card/Card";
import React, {useState} from 'react';
import Preloader from "../../common/Preloader/Preloader";
import Pagination from "../../common/Pagination/Pagination";
import { useHistory } from "react-router-dom";

const PokemonCards = React.memo(
    (props) => {
        let history = useHistory();
        const changeType = (e) => {
            props.getCardsByType(e.currentTarget.value);
        }
        const changeSubtype = (e) => {
            props.getCardsBySubtype(e.currentTarget.value);
        }

        if(localStorage.isLogin == 'false') history.push('/');

        return (
            <>
                {props.isLoading && <Preloader />}
                <Navbar />
                <div className={css.wrapper}>
                    <div className={css.sidebar}>
                        <div className={css.sidebarBx}>
                            <select onChange={changeType} name="" id="">
                                {props.types.map(type => <option value={type.toLowerCase()}>{type}</option>)}
                            </select>
                        </div>
                        <div className={css.sidebarBx}>
                            <select onChange={changeSubtype} name="" id="">
                                {props.subtypes.map(subtype => <option value={subtype.toLowerCase()}>{subtype}</option>)}
                            </select>
                        </div>
                        <Pagination totalCount={props.totalCount} pageSize={props.pageSize} changePage={props.changePage} currentPage={props.currentPage} />
                    </div>
                    <div>
                        <div className={css.boxCards}>
                            {props.cards.map(card => {
                                return <Card key={card.id}
                                             name={card.name}
                                             src_img={card.images.small}
                                             subname={card.artist}
                                             urlCard={() => history.push(`/card/${card.id}`)}
                                />;
                            })}
                        </div>
                    </div>
                </div>
            </>
        );
    }
);
export default PokemonCards;