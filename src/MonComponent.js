import React, { useState } from 'react';

const MonComponent = () => {
    // state => les états
    const [pokemons, setPokemon] = useState([
        { id: 1, nom: "Pikachu" },
        { id: 2, nom: "Bulbizzar" },
        { id: 3, nom: "Dracolosse" },
        { id: 4, nom: "Dracaufeu" },
    ])

    // fonctions et les constantes => logique
    const handleRemove = (id) => {
        // console.log(el);
        // Méthode Filter
        // On utilise la méthode 'filter' pour créer un nouveau tableau qui contient tous les pokemons sauf 
        // celui dont l'id correspond à l'id passé en argument à la fonction 'handleClick'.
        // Puis on met à jour l'état 'pokemons' avec le nouveau tableau 'copie'.
        // const copie = pokemons.filter(pokemon => pokemon.id !== id);
        // setPokemon(copie);

        // Méthode Splice
        // Créer une copie du tableau 'pokemons' en utilisant l'opérateur de décomposition (spread operator)
        // On utilise la méthode 'findIndex' pour trouver l'index du pokemon dont l'id correspond à l'id passé en argument à la fonction 'handleClick'
        const copie = [...pokemons];
        const index = copie.findIndex(pokemon => pokemon.id === id);

        // Vérifie si l'élément a été trouvé. Si 'findIndex' renvoie -1, cela signifie que l'élément n'a pas été trouvé.
        if (index !== -1) {
            // Si l'élément a été trouvé, on utilise la méthode 'splice' pour supprimer l'élément à l'index trouvé du tableau copié
            // Puis on met à jour l'état 'pokemons' avec le nouveau tableau 'copie'
            copie.splice(index, 1);
            setPokemon(copie);
        }
    }

    const handleAdd = (nouveauPokemon) => {
        // Trouver le 'id' le plus élevé dans le tableau actuel de Pokémons
        const maxId = Math.max(...pokemons.map(pokemon => pokemon.id));
        // Créer une copie du tableau 'pokemons'
        const copie = [...pokemons];
        // Ajouter le nouveau pokemon à la copie avec un 'id' qui est maxId + 1
        copie.push({ id: maxId + 1, nom: nouveauPokemon.nom });
        // Mettre à jour l'état 'pokemons' avec le nouveau tableau 'copie'
        setPokemon(copie);
    }

    // Rendu du composant
    // On utilise la méthode 'map' pour itérer sur chaque élément du tableau 'pokemons'
    // Lorsqu'on clic sur '+', la fonction 'handleAdd' est appelée avec un nouvel objet Pokémons
    // Lorsqu'on clic sur  '-', la fonction 'handleRemove' est appelée avec l'id du Pokémon actuel
    // On met l'état (state) 'pokemons' à jour à chaque clic sur les boutons.
    return (
        <>
            <h1 className="maclasstest">Test</h1>
            <ul>
                {pokemons.map(
                    (el, index) =>
                        <li key={index}>
                            {el.nom} 
                            <button onClick={() => handleAdd({ nom: "Evoli" })}>+</button>
                            <button onClick={() => handleRemove(el.id)}>-</button>
                        </li>
                )}                
            </ul>
        </>
    );
};

export default MonComponent;