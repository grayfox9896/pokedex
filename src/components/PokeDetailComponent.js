import { useState,useEffect } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import PokeFooterComponent from "./PokeFooterComponent";



const PokeDetailComponent=()=>{

    useEffect(()=>{
        getDetailPOkemon();
    },[]);

      const [pokemon,setPokemon]=useState({});
      const [cargando,setCargando]=useState(true);
    const params=useParams();


    const getDetailPOkemon=async()=>{
        try {
            //  const req = await fetch("http://appsgfx.com/pokemons.json",{mode:'no-cors'});
           const req = await fetch('http://appsgfx.com/pokemons.json');
           const pokemonsData = await req.json();
           if (pokemonsData.results.filter((elem)=>{return elem.name===params.name}).length===0){
            
            setPokemon({name:"No existe el pokemon " + params.name, sprites: {large:""}, hpp:"",attack:"",defense:"",sp_atk:"",sp_def:"",speed:""});
            setCargando(false);     
            return;
           }
           const pokemon=pokemonsData.results.filter((elem)=>{return elem.name===params.name})[0];           
           setPokemon(pokemon);
           setCargando(false);
          } catch (error) {
              console.log(error);
          }
    }
    if (cargando)
    {
        return (<div>Cargando...</div>)
    }
    else{        
        return (<div className="detail">
        <h2>{pokemon.name}</h2>
        <img src={pokemon.sprites.large} alt=""/>
        <div className="mainstat">
        <div className="stats">
            <h3>Estadisticas</h3>
            <p>Vida: {pokemon.hp}</p>
            <p>Ataque: {pokemon.attack}</p>
            <p>Defentsa: {pokemon.defense}</p>
        </div>
        <div className="stats">
            <h3>Especiales</h3>
            <p>Ataque Especial: {pokemon.sp_atk}</p>
            <p>Defensa Especial: {pokemon.sp_def}</p>
            <p>Velocidad: {pokemon.speed}</p>
        </div>
        </div>
        <PokeFooterComponent></PokeFooterComponent>
    </div>
    
    );
    }
    
}

export default PokeDetailComponent;