import React from 'react';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import PokeHeaderComponent from './PokeHeaderComponent';
import PokeFooterComponent from './PokeFooterComponent';
import PokeListComponent from './PokeListComponent';


const PokedexComponent=()=>{
return (
    <div className='maindiv'>
    <PokeHeaderComponent/>
    <PokeListComponent/>
    <PokeFooterComponent/>
    </div>
);


}
export default PokedexComponent;
