import {React,useRef} from "react";
import {useNavigate} from 'react-router-dom';


const PokeHeaderComponent=()=>{
    const searchPokemon=useRef();    
    const navegacion=useNavigate();

    

    const buscapokemon=(event)=>{
                if (event.key==="Enter"){
                    console.log(searchPokemon.current.value);
                    navegacion(`/PokeDetail/${searchPokemon.current.value}`);
                }
    }

return (<header>
    <input className="search" type="text" onKeyUp={buscapokemon}  placeholder="busca un pokemon" ref={searchPokemon}/>
</header>);
}

export default PokeHeaderComponent;