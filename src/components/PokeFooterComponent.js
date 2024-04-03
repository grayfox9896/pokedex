import React from "react";
import {Link} from 'react-router-dom';


import pikachu from '../assets/pikachu.png'; 
import bola from '../assets/pokeball.png'; 



const PokeFooterComponent=()=>{
    return (<footer><ul>
        <li><Link to="/"><img src={pikachu} />Pokemons</Link></li>
        <li><Link to="/items"><img src={bola} />Items</Link></li>
    </ul>
    <span>Joel Mena Febrero {new Date().getFullYear()}</span>
    </footer>);
}

export default PokeFooterComponent;