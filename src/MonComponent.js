import React, { useRef, useState } from 'react';

// Destructuring
// const MonComponent = ({userName, metier}) => {

// Props
const MonComponent = (props) => {
    // state => les états

    const [black, setBlack] = useState(false);
    const [nbr, setNbr] = useState(0);
    const [color, setColor] = useState("");

    const [pokemons, setPokemon] = useState([
        { id: 1, nom: "Pikachu" },
        { id: 2, nom: "Bulbizzar" },
        { id: 3, nom: "Dracolosse" },
        { id: 4, nom: "Dracaufeu" },
    ]);

    const inputRef = useRef();
    const divRef = useRef();

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
        const newId = Math.max(...pokemons.map(pokemon => pokemon.id)) + 1;
        // Créer une copie du tableau 'pokemons'
        // Ajouter le nouveau pokemon à la copie avec un 'id' qui est newId + 1
        const pokeObject = [...pokemons, { id: newId, nom: newpokemon }];
        // Mettre à jour l'état 'pokemons' avec le nouveau tableau 'copie'
        setPokemon(pokeObject);
        // console.log(newpokemon);
    }

    // Avec Apply
    // const handleSubmit = e => {
    //     e.preventDefault();
    //     const newId = Math.max.apply(null, pokemons.map(pokemon => pokemon.id)) + 1;
    // }

    const changeColor = () => {
        setBlack(false);
        setNbr(nbr + 1);
        console.log(divRef);
        setColor(`rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)} )`);
        // divRef.current.style.background = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    }

    // if (black) {
    //     console.log('black');
    // }

    // black && console.log('black');

    // Rendu du composant
    return (
        <>
            {/* Destructuring */}
            {/* <h1 className="maclasstest">{userName}</h1>
            <h2>{metier}</h2> */}

            {/* Props */}
            <h1 className="maclasstest">{props.userName}</h1>
            <h2>{props.job}</h2>
            <ul>
                {pokemons.map(
                    (el, index) =>
                        <li key={index}>
                            {el.nom}
                            <button onClick={() => handleRemove(el.id)}>-</button>
                        </li>
                )}
            </ul>

            {/* <div ref={divRef} style={{ height: '90px', width: '90px', background: black && 'black' }}></div> */}
            <div style={{ height: '90px', width: '90px', background: black ? 'black' : color }}></div>

            <form onSubmit={handleSubmit}>
                <input ref={inputRef} type="text" />
                <button type="submit">+</button>
            </form>

            {/* <button onClick={changeColor}>{black ? 'orange' : 'black'}</button> */}
            <button onClick={() => setBlack(true)}>black</button>
            <button onClick={changeColor}>change color</button>
            <p>Nombre de fois ou on change la couleur : {nbr}</p>
        </>
    );
};

export default MonComponent;