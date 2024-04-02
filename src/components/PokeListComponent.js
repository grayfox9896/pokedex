import React, { useEffect, useState } from "react";
import PokeListItemComponent from "./PokeListItemComponent";



const PokeListComponent = () => {

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        getAllpokemons();
    }, []);

    const getAllpokemons = async () => {
        try {
          //  const req = await fetch("http://appsgfx.com/pokemons.json",{mode:'no-cors'});
         const req = await fetch('http://appsgfx.com/pokedex/pokemons.json');
         const pokemonsData = await req.json();
        var pokemonsDataBasic=pokemonsData.results.filter((poke)=>{return poke.evolution===null});
        var pokemonsEvol=pokemonsData.results.filter((poke)=>{return poke.evolution!==null});
        pokemonsDataBasic.push.apply(pokemonsDataBasic, pokemonsEvol)
         setPokemons(pokemonsDataBasic);
        } catch (error) {
            console.log(error);
        }


    }

    return (<>
        {pokemons.length > 0 ? (
            <ul>
                {pokemons.map((pokemon,index)=>{
                    return <li key={index}><PokeListItemComponent pokemon={pokemon} /></li>
                })}
            </ul>
        ) : (<p>no hay pokemones</p>)}
    </>);
}
export default PokeListComponent;