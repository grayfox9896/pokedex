import React from "react";
import { Link } from "react-router-dom";

const PokeListItemComponent=({pokemon})=>{
    
    return (

        <Link to={"/PokeDetail/" + pokemon.name}>
    <div className="itemlist">
<p>{pokemon.national_number}</p>
<img src={pokemon.sprites.animated} alt="ma"/>
<p>{pokemon.name}</p>
    </div></Link>);
    
}

export default PokeListItemComponent;