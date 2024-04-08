import React, { useState } from 'react';

const MonComponent = () => {
    // state => les états
    // const [value, setValue] = useState(13);
    const [pokemons, setPokemon] = useState([
        { id: 1, nom: "Pikachu" },
        { id: 2, nom: "Bulbizzar" },
        { id: 3, nom: "Dracolosse" },
        { id: 4, nom: "Dracaufeu" },
    ])

    // fonctions et les constantes => logique
    const handleClick = (id) => {
        // console.log(el);
        // Méthode Filter
        const copie = pokemons.filter(pokemon => pokemon.id !== id);
        setPokemon(copie);

        // Méthode Splice
        // const copie = pokemons.splice(id, 1);
        // setPokemon(copie);

    }

    // le rendu côté front
    // Ces elements grâce à la méthode map et lorsqu'on clique sur - 
    // on met le state à jour en enlevant le pokemon
    return (
        <>
            <h1 className="maclasstest">Test</h1>
            <ul>
                {pokemons.map(
                    (el, index) => <li key={index}>{el.nom} <button onClick={() => handleClick(el.id)}>-</button></li>)}                
            </ul>
        </>
    );
};

export default MonComponent;