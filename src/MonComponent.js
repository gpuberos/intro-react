import React, { useRef, useState } from 'react';

const MonComponent = () => {
    // state => les états
    const [pokemons, setPokemon] = useState([
        { id: 1, nom: "Pikachu" },
        { id: 2, nom: "Bulbizzar" },
        { id: 3, nom: "Dracolosse" },
        { id: 4, nom: "Dracaufeu" },
    ])

    const inputRef = useRef();

    const handleRemove = (id) => {
        // Méthode Splice
        // Créer une copie du tableau 'pokemons' en utilisant l'opérateur de décomposition (spread operator)
        // On utilise la méthode 'findIndex' pour trouver l'index du pokemon dont l'id correspond à l'id passé en argument à la fonction 'handleClick'
        const index = pokemons.findIndex(pokemon => pokemon.id === id);
        const copie = [...pokemons];
        copie.splice(index, 1);
        setPokemon(copie);
    }

    const handleSubmit = e => {
        e.preventDefault();
        const newpokemon = inputRef.current.value;
        // Trouver l'id le plus élevé dans le tableau actuel de Pokémons
        const maxId = Math.max(...pokemons.map(pokemon => pokemon.id));
        // Créer une copie du tableau 'pokemons'
        const copie = [...pokemons];
        // Ajouter le nouveau pokemon à la copie avec un 'id' qui est maxId + 1
        copie.push({ id: maxId + 1, nom: newpokemon });
        // Mettre à jour l'état 'pokemons' avec le nouveau tableau 'copie'
        setPokemon(copie);
        // console.log(newpokemon);
    }

    // Rendu du composant
    return (
        <>
            <h1 className="maclasstest">Test</h1>
            <ul>
                {pokemons.map(
                    (el, index) =>
                        <li key={index}>
                            {el.nom}
                            <button onClick={() => handleRemove(el.id)}>-</button>
                        </li>
                )}
            </ul>
            <form onSubmit={handleSubmit}>
                <input ref={inputRef} type="text"/>
                <button type="submit">+</button>
            </form>
        </>
    );
};

export default MonComponent;