import css from "../PokemonCards.module.css";

const Card = (props) => {
    return (
        <div onClick={props.urlCard} className={css.boxItem}><img src={props.src_img} alt="" className={css.boxItemImg}/>
            <h1 className={css.boxItemName}>{props.name}</h1>
            <p className={css.boxItemSubName}>{props.subname}</p>
        </div>
    );
}
export default Card;