# REACT

## Installation de node et Node Package Manager

Télécharger la version LTS : https://nodejs.org/

Utiliser un package
Installation du package create react app

-g pour installer en global

```shell
npm install -g create-react-app
```

Pour connaitre la version de npm

```shell
npm -v
```

npm (node ​​package manager) est le gestionnaire de dépendances/packages que vous obtenez prêt à l'emploi lorsque vous installez Node.js. Il permet aux développeurs d'installer des packages à la fois globalement et localement.

Parfois, vous souhaiterez peut-être jeter un œil à un package spécifique et essayer certaines commandes. Mais vous ne pouvez pas le faire sans installer les dépendances dans votre node_modulesdossier local.

C'est là qu'intervient npx.

```shell
C:\wamp64\www\react>npm install -g create-react-app
npm WARN deprecated tar@2.2.2: This version of tar is no longer supported, and will not receive security updates. Please upgrade asap.

added 66 packages in 8s

4 packages are looking for funding
  run `npm fund` for details
```

## REACT

**Source :**

- https://fr.legacy.reactjs.org/

**Création d'une app react**

```shell
npx create-react-app intro-react

# ou si on a installé via npm
create-react-app intro-react
```

**package.json**
On trouve toutes les dépendances installés dans le projet.

`@testing` pour créer des tests unitaires

```json
{
  "name": "intro-react",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": ["react-app", "react-app/jest"]
  },
  "browserslist": {
    "production": [">0.2%", "not dead", "not op_mini all"],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

```shell
cd intro-react
npm start
```

**Résultat :**

```shell
Starting the development server...

One of your dependencies, babel-preset-react-app, is importing the
Compiled successfully!

You can now view intro-react in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.1.76:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully

```

Fichier ignoré lors du git push : **.gitignore**

```shell
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
```

Point d'entrée `intro-react\src\index.js`

```js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

On crée une constante root en utilisant la méthode `ReactDOM.createRoot()`. Cette méthode prend en argument un élément du DOM, ici `document.getElementById('root')`, qui correspond à une `div` dans le fichier `/public/index.html`. Cette `div` sert de point d'ancrage pour notre application React.

Ensuite, on appelle la méthode `render` sur `root`. Cette méthode est utilisée pour rendre (ou afficher) un élément React dans le DOM. Ici, l'élément React est `<App />`, qui est le composant principal de notre application. Ce composant est importé depuis le fichier `./App`.

```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

Dans le fichier `/public/index.html`, la `div` avec l'id `root` est le point d'ancrage de notre application React.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

### Extension VSCode :

Cette extension permet lorsqu'on enregistre le fichier de tout bien réindenter.

Name: ES7+ React/Redux/React-Native snippets
Id: dsznajder.es7-react-js-snippets
Description: Extensions for React, React-Native and Redux in JS/TS with ES7+ syntax. Customizable. Built-in integration with prettier.
Version: 4.4.3
Publisher: dsznajder
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets

Snippets :

- rfc : snippet pour un "React Function Component". Il génère un composant fonctionnel React.
- rcc : snippet pour un "React Class Component". Il génère un composant de classe React.
- rrc : snippet pour un "React Redux Component". Il génère un composant (étendu) de classe React connecté à Redux.
- rsc : snippet pour un "React Stateless Component". Il génère un composant fonctionnel React sans état (celui qu'on utilise).


Name: Reactjs code snippets
Id: xabikos.ReactSnippets
Description: Code snippets for Reactjs development in ES6 syntax
Version: 2.4.0
Publisher: charalampos karypidis
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=xabikos.ReactSnippets

## JSX

Dans le fichier `MonComponent.js`, je crée un composant fonctionnel React appelé `MonComponent` qui renvoie une `div` avec l'id `test`.

intro-react\src\MonComponent.js
```js
import React from "react";

const MonComponent = () => {
  return <div id="test"></div>;
};

export default MonComponent;

```

Dans le fichier `index.js`, j'importe `MonComponent` et je l'utilise dans la méthode `render` de `root`. Cela signifie que `MonComponent` sera le composant racine de mon application React.

intro-react\src\index.js
```js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import MonComponent from "./MonComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MonComponent></MonComponent>);

reportWebVitals();
```

Pour utiliser une classe CSS dans JSX, je dois utiliser `className` au lieu de `class` car `class` est un mot réservé en JavaScript.

Pour les attributs composés en JSX, je dois utiliser le camelCase. Par exemple, `tabindex` devient `tabIndex`. Cependant, pour les attributs `aria-*`, je dois utiliser des tirets, par exemple `aria-label`.

Une application SPA (Single Page Application) est une application web qui ne recharge pas la page lorsqu'elle change d'état. Au lieu de cela, elle met à jour le DOM (Document Object Model) en fonction de l'état de l'application. C'est ce que fait React.

Lorsque je parle d'"hydrater" les composants avec des états, je veux dire que React met à jour le DOM pour refléter les changements d'état des composants.

On préfère utiliser les composants de type fonction. Les composants de type classe ne sont pas abandonnés, mais ils sont moins utilisés car les Hooks de React permettent d'utiliser des fonctionnalités de l'état et du cycle de vie dans les composants fonctionnels.

Dans un composant React, je ne peux renvoyer qu'un seul élément parent. Si j'ai besoin de renvoyer plusieurs éléments, je peux les envelopper dans un élément parent, ou utiliser un fragment React (`<>...</>`), qui est un élément parent invisible.

Dans mon exemple de code, j'utilise `useState` pour créer un état `value`. Cependant, je dois utiliser la déstructuration pour obtenir à la fois la valeur de l'état et la fonction pour le mettre à jour : `let [value, setValue] = useState(1);`. Ensuite, dans ma fonction `incrementer`, je peux utiliser `setValue` pour mettre à jour l'état.

On fera toujours comme ceci (bonne pratique)

```js
import React, { useState } from "react";

const MonComponent = () => {
  // state => les états
  let value = useState(1);

  // fonctions et les constantes => logique
  const incrementer = () => {
    console.log(value + 1);
  };

  // le rendu côté front
  return (
    <>
      <h1 className="maclasstest">Test</h1>
      <p>{value}</p>
      <button onClick={() => incrementer()}>+1</button>
    </>
  );
};

export default MonComponent;
```

### 1er Exemple

Je crée un composant fonctionnel React appelé `MonComponent`. J'utilise le Hook `useState` pour créer un état `value` initialisé à 1. J'ai également une fonction `incrementer` qui, lorsqu'elle est appelée, affiche dans la console la valeur actuelle de `value` + 1. Dans le rendu de mon composant, j'affiche la valeur actuelle de `value` et j'ai un bouton qui, lorsqu'il est cliqué, appelle la fonction `incrementer`.

> [!NOTE]
> Hook est une fonction spéciale qui permet d'utiliser les fonctionnalités de React (comme les états et les effets de bord) à l'intérieur des composants fonctionnels. Avant l'introduction des Hooks, ces fonctionnalités n'étaient disponibles que dans les composants de classe. Les Hooks rendent le code plus lisible et facile à comprendre, et permettent de réutiliser l'état et la logique des composants de manière plus efficace.

```js
const MonComponent = () => {
  // state => les états
  let value = useState(1);

  // fonctions et les constantes => logique
  const incrementer = () => {
    console.log(value + 1);
  };

  // le rendu côté front
  return (
    <>
      <h1 className="maclasstest">Test</h1>
      <p>{value}</p>
      <button
        onClick={() => {
          return incrementer();
        }}
      >
        +1
      </button>
    </>
  );
};
```

J'utilise une syntaxe plus concise (return implicite) pour la fonction de rappel du clic sur le bouton. Au lieu d'utiliser une fonction qui retourne `incrementer()`, j'appelle directement `incrementer()`.

```js
<button onClick={() => incrementer()}>+1</button>
```

### 2eme exemple

J'utilise la déstructuration pour obtenir à la fois la valeur de l'état et la fonction pour le mettre à jour : `let [value, setValue] = useState(1);`. Ensuite, dans ma fonction `incrementer`, je peux utiliser `setValue` pour mettre à jour l'état.
```js
const [value, setValue] = useState(13);
```
`useState(13)` initialise l'état `value` à 13. `useState` retourne un tableau, et nous utilisons la déstructuration d'array pour assigner ses retours à `value` et `setValue`. `value` est la valeur actuelle de notre état, et `setValue` est une fonction que nous pouvons utiliser pour changer `value`.

React interprète ce tableau comme un **getter** et un **setter** pour l'état de votre composant. Le **getter** (`value` dans notre exemple) est utilisé pour accéder à la valeur actuelle de l'état, et le **setter** (`setValue` dans notre exemple) est utilisé pour mettre à jour l'état.

J'utilise `useState` pour créer un état `value` initialisé à 13. J'ai une fonction `incrementer` qui, lorsqu'elle est appelée, met à jour la valeur de `value` en ajoutant 1. Dans le rendu de mon composant, j'affiche la valeur actuelle de `value` et j'ai un bouton qui, lorsqu'il est cliqué, appelle la fonction `incrementer`.


```js
import React, { useState } from "react";

const MonComponent = () => {
  // state => les états
  const [value, setValue] = useState(13);

  // fonctions et les constantes => logique
  const incrementer = () => {
    setValue(value + 1);
  };

  // le rendu côté front
  return (
    <>
      <h1 className="maclasstest">Test</h1>
      <p>{value}</p>
      <button onClick={() => incrementer()}>+1</button>
    </>
  );
};

export default MonComponent;
```

### 3eme exemple

Je crée un composant fonctionnel React appelé `MonComponent`. J'utilise le Hook `useState` pour créer un état : `pokemons`, initialisé à un tableau de Pokémons. J'ai également une fonction `handleClick` qui, lorsqu'elle est appelée, ajoute un Pokémon à la liste de Pokémons.

```js
import React, { useState } from "react";

const MonComponent = () => {
  // state => les états
  const [value, setValue] = useState(13);
  const [pokemons, setPokemon] = useState([
    { id: 1, nom: "Pikachu" },
    { id: 2, nom: "Bulbizzar" },
    { id: 3, nom: "Dracolosse" },
    { id: 4, nom: "Dracaufeu" },
  ]);

  // fonctions et les constantes => logique
  const handleClick = (el) => {
    // console.log(el);
    const copie = [...pokemons, el];
    const newPokemon = setPokemon(copie);
    console.log(newPokemon);
  };
  // const deleteClick = (id) => {
  //     setPokemon(pokemons.filter(pokemon => pokemon.id));
  // }

  // le rendu côté front
  // Ces elements grâce à la méthode map et lorsqu'on clique sur -
  // on met le state à jour en enlevant le pokemon
  return (
    <>
      <h1 className="maclasstest">Test</h1>
      <ul>
        {pokemons.map(el, (index) => (
          <li key={index}>
            {el.nom} <button onClick={() => handleClick(el.id)}>-</button>
          </li>
        ))}
      </ul>
      <button>-</button>
    </>
  );
};

export default MonComponent;
```

j'utilise l'index comme deuxième argument de la fonction de rappel dans la méthode `map`. Cela me permet d'accéder à l'index actuel de l'élément dans le tableau.

**Listes et clés :**
- https://fr.legacy.reactjs.org/docs/lists-and-keys.html

> [!NOTE]
> En JavaScript, l'opérateur de décomposition (`...`), aussi appelé **spread operator**, permet de prendre les éléments d'un tableau ou les propriétés d'un objet et de les utiliser individuellement. Par exemple, si vous avez un tableau `[1, 2, 3]` et que vous voulez créer un nouveau tableau qui contient tous ces éléments plus un nouvel élément, vous pouvez utiliser ... comme ceci : `[...[1, 2, 3], 4]`. Cela donne `[1, 2, 3, 4]`, où chaque élément du tableau original est utilisé individuellement pour créer le nouveau tableau.
> https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Spread_syntax

- `index` est utilisé comme clé (`key`) pour chaque élément de la liste. **En React, chaque élément d'une liste doit avoir une clé unique pour aider React à identifier quels éléments ont changé, sont ajoutés, ou sont supprimés**. Dans ce cas, l'`index` (qui est l'index de l'élément dans le tableau `pokemons`) est utilisé comme clé. Cependant, il est généralement recommandé d'utiliser un identifiant stable comme clé si possible, plutôt que l'index, car l'utilisation de l'index peut causer des problèmes si l'ordre des éléments change.
- `id` est utilisé pour identifier le Pokémon spécifique sur lequel l'utilisateur a cliqué. Lorsque l'utilisateur clique sur le bouton "-", la fonction `handleClick` est appelée avec l'`id` du Pokémon comme argument. Cette `id` est ensuite utilisée pour déterminer quel Pokémon supprimer de la liste.

```js
import React, { useState } from "react";

const MonComponent = () => {
  // state => les états
  const [pokemons, setPokemon] = useState([
    { id: 1, nom: "Pikachu" },
    { id: 2, nom: "Bulbizzar" },
    { id: 3, nom: "Dracolosse" },
    { id: 4, nom: "Dracaufeu" },
  ]);

  // fonctions et les constantes => logique
  const handleClick = (el) => {
    // console.log(el);
    const copie = pokemons;
    const newPokemon = [el, ...copie];
    console.log(newPokemon);
  };
  // const deleteClick = (id) => {
  //     setPokemon(pokemons.filter(pokemon => pokemon.id));
  // }

  // le rendu côté front
  // Ces elements grâce à la méthode map et lorsqu'on clique sur -
  // on met le state à jour en enlevant le pokemon
  return (
    <>
      <h1 className="maclasstest">Test</h1>
      <ul>
        {pokemons.map((el, index) => (
          <li key={index}>
            {el.nom} id: {el.id} index: {index}{" "}
            <button onClick={() => handleClick(el)}>-</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MonComponent;
```

J'utilise la méthode `filter` pour créer un nouveau tableau qui contient tous les Pokémons sauf celui dont l'id correspond à l'id passé en argument à la fonction `handleClick`. Puis je mets à jour l'état pokemons avec le nouveau tableau.

```js
import React, { useState } from "react";

const MonComponent = () => {
  // state => les états
  const [pokemons, setPokemon] = useState([
    { id: 1, nom: "Pikachu" },
    { id: 2, nom: "Bulbizzar" },
    { id: 3, nom: "Dracolosse" },
    { id: 4, nom: "Dracaufeu" },
  ]);

  // fonctions et les constantes => logique
  const handleClick = (id) => {
    // console.log(el);
    const copie = pokemons.filter((pokemon) => pokemon.id !== id);
    setPokemon(copie);
  };

  // le rendu côté front
  // Ces elements grâce à la méthode map et lorsqu'on clique sur -
  // on met le state à jour en enlevant le pokemon
  return (
    <>
      <h1 className="maclasstest">Test</h1>
      <ul>
        {pokemons.map((el, index) => (
          <li key={index}>
            {el.nom} <button onClick={() => handleClick(el.id)}>-</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MonComponent;
```

**Alternative toSpliced :**
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced
```js
import { useState } from "react";

const MonComponent = () => {
    // state => les etats :
    const [pokemons, setPokemon] = useState([
        {id: 1, nom: "Pikachu"},
        {id: 2, nom: "Bulbizare"},
        {id: 3, nom: "Rattatak"},
        {id: 4, nom: "Tortank"},
        {id: 5, nom: "Dracaufeu"}
    ]);
    // fonctions et les constantes => logique :
    const handleClick = (index) => {
        const copie = pokemons.toSpliced(index, 1);
        setPokemon(copie);

    }
    // le rendu côté front :
    return (
        <>
            <h1 className="maclassTest">test</h1>
            <ul>
                {
                pokemons.map(
                    (el, index) => <li key={el.id}>{el.nom} <button onClick = { () => handleClick(index)}>-</button></li>
                )}
            </ul>
        </>
    );
};

export default MonComponent;
```

Je crée un composant fonctionnel React appelé `MonComponent`. J'utilise le Hook `useState` pour créer un état : `pokemons`, qui est initialisé à un tableau de Pokémons.

J'ai également deux fonctions, `handleRemove` et `handleAdd`. `handleRemove` prend un `id` en argument et supprime le Pokémon correspondant de la liste. Pour ce faire, elle crée une copie du tableau `pokemons`, trouve l'index du Pokémon à supprimer, et utilise la méthode `splice` pour le supprimer de la copie. Ensuite, elle met à jour l'état `pokemons` avec le nouveau tableau.

`handleAdd`, prend un objet `nouveauPokemon` en argument et ajoute ce Pokémon à la liste. Elle trouve d'abord l'`id` le plus élevé dans le tableau actuel de Pokémons, crée une copie du tableau `pokemons`, et ajoute le nouveau Pokémon à la copie avec un `id` qui est `maxId + 1`. Ensuite, elle met à jour l'état `pokemons` avec le nouveau tableau.

Dans le rendu de mon composant, j'utilise la méthode `map` pour itérer sur chaque élément du tableau `pokemons`. Pour chaque Pokémon, je crée un élément de liste qui affiche le nom du Pokémon et deux boutons. Lorsque l'utilisateur clique sur le bouton "+", la fonction `handleAdd` est appelée avec un nouvel objet Pokémon. Lorsque l'utilisateur clique sur le bouton "-", la fonction `handleRemove` est appelée avec l'id du Pokémon actuel. Ainsi, l'état `pokemons` est mis à jour en conséquence à chaque clic de bouton.

```js
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
    // const handleRemove = (id) => {
    //     // Méthode Filter
    //     // On utilise la méthode 'filter' pour créer un nouveau tableau qui contient tous les pokemons sauf 
    //     // celui dont l'id correspond à l'id passé en argument à la fonction 'handleClick'.
    //     // Puis on met à jour l'état 'pokemons' avec le nouveau tableau 'copie'.
    //     const copie = pokemons.filter(pokemon => pokemon.id !== id);
    //     setPokemon(copie);
    // }

    const handleRemove = (id) => {
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

    // const handleRemove = (index) => {
    //     // Méthode toSpliced
    //     const copie = pokemons.toSpliced(index, 1);
    //     setPokemon(copie);
    // }

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
                            {/* toSpliced */}
                            {/* <button onClick={() => handleRemove(index)}>-</button></li> */}
                        </li>
                )}
            </ul>
        </>
    );
};

export default MonComponent;
```

```js
import React, { useState } from 'react';

const MonComponent = () => {
    // state => les états
    const [pokemons, setPokemon] = useState([
        { id: 1, nom: "Pikachu" },
        { id: 2, nom: "Bulbizzar" },
        { id: 3, nom: "Dracolosse" },
        { id: 4, nom: "Dracaufeu" },
    ])

    const [nouveauNom, setNouveauNom] = useState("")

    // fonctions et les constantes => logique
    // const handleRemove = (id) => {
    //     // Méthode Filter
    //     // On utilise la méthode 'filter' pour créer un nouveau tableau qui contient tous les pokemons sauf 
    //     // celui dont l'id correspond à l'id passé en argument à la fonction 'handleClick'.
    //     // Puis on met à jour l'état 'pokemons' avec le nouveau tableau 'copie'.
    //     const copie = pokemons.filter(pokemon => pokemon.id !== id);
    //     setPokemon(copie);
    // }

    // const handleRemove = (id) => {
    //     // Méthode Splice
    //     // Créer une copie du tableau 'pokemons' en utilisant l'opérateur de décomposition (spread operator)
    //     // On utilise la méthode 'findIndex' pour trouver l'index du pokemon dont l'id correspond à l'id passé en argument à la fonction 'handleClick'
    //     const copie = [...pokemons];
    //     const index = copie.findIndex(pokemon => pokemon.id === id);

    //     // Vérifie si l'élément a été trouvé. Si 'findIndex' renvoie -1, cela signifie que l'élément n'a pas été trouvé.
    //     if (index !== -1) {
    //         // Si l'élément a été trouvé, on utilise la méthode 'splice' pour supprimer l'élément à l'index trouvé du tableau copié
    //         // Puis on met à jour l'état 'pokemons' avec le nouveau tableau 'copie'
    //         copie.splice(index, 1);
    //         setPokemon(copie);
    //     }
    // }

    const handleRemove = (id) => {
        // Méthode Splice
        // Créer une copie du tableau 'pokemons' en utilisant l'opérateur de décomposition (spread operator)
        // On utilise la méthode 'findIndex' pour trouver l'index du pokemon dont l'id correspond à l'id passé en argument à la fonction 'handleClick'
        const index = pokemons.findIndex(pokemon => pokemon.id === id);
        const copie = [...pokemons];
        copie.splice(index, 1);
        setPokemon(copie);
    }

    // const handleRemove = (index) => {
    //     const copie = [...pokemons];
    //     copie.splice(index, 1);
    //     setPokemon(copie);
    // }

    // const handleRemove = (index) => {
    //     // Méthode toSpliced
    //     const copie = pokemons.toSpliced(index, 1);
    //     setPokemon(copie);
    // }

    const handleAdd = (nouveauPokemon) => {
        // Trouver l'id le plus élevé dans le tableau actuel de Pokémons
        const maxId = Math.max(...pokemons.map(pokemon => pokemon.id));
        // Créer une copie du tableau 'pokemons'
        const copie = [...pokemons];
        // Ajouter le nouveau pokemon à la copie avec un 'id' qui est maxId + 1
        copie.push({ id: maxId + 1, nom: nouveauPokemon.nom });
        // Mettre à jour l'état 'pokemons' avec le nouveau tableau 'copie'
        setPokemon(copie);
        // Mettre à jour l'état
        setNouveauNom();
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
                            {/* <button onClick={() => handleAdd({ nom: "Evoli" })}>+</button> */}
                            <button onClick={() => handleRemove(el.id)}>-</button>
                            {/* toSpliced */}
                            {/* <button onClick={() => handleRemove(index)}>-</button></li> */}
                        </li>
                )}
            </ul>
            <p>
                <input type="text" value={nouveauNom} onChange={(e) => setNouveauNom(e.target.value)} />
                <button onClick={handleAdd}>+</button>
            </p>
        </>
    );
};

export default MonComponent;
```

```js
import React, { useState } from 'react';

const MonComponent = () => {
    // state => les états
    const [pokemons, setPokemon] = useState([
        { id: 1, nom: "Pikachu" },
        { id: 2, nom: "Bulbizzar" },
        { id: 3, nom: "Dracolosse" },
        { id: 4, nom: "Dracaufeu" },
    ])

    const [nouveauNom, setNouveauNom] = useState("")

    // fonctions et les constantes => logique
    // const handleRemove = (id) => {
    //     // Méthode Filter
    //     // On utilise la méthode 'filter' pour créer un nouveau tableau qui contient tous les pokemons sauf 
    //     // celui dont l'id correspond à l'id passé en argument à la fonction 'handleClick'.
    //     // Puis on met à jour l'état 'pokemons' avec le nouveau tableau 'copie'.
    //     const copie = pokemons.filter(pokemon => pokemon.id !== id);
    //     setPokemon(copie);
    // }

    // const handleRemove = (id) => {
    //     // Méthode Splice
    //     // Créer une copie du tableau 'pokemons' en utilisant l'opérateur de décomposition (spread operator)
    //     // On utilise la méthode 'findIndex' pour trouver l'index du pokemon dont l'id correspond à l'id passé en argument à la fonction 'handleClick'
    //     const copie = [...pokemons];
    //     const index = copie.findIndex(pokemon => pokemon.id === id);

    //     // Vérifie si l'élément a été trouvé. Si 'findIndex' renvoie -1, cela signifie que l'élément n'a pas été trouvé.
    //     if (index !== -1) {
    //         // Si l'élément a été trouvé, on utilise la méthode 'splice' pour supprimer l'élément à l'index trouvé du tableau copié
    //         // Puis on met à jour l'état 'pokemons' avec le nouveau tableau 'copie'
    //         copie.splice(index, 1);
    //         setPokemon(copie);
    //     }
    // }

    const handleRemove = (id) => {
        // Méthode Splice
        // Créer une copie du tableau 'pokemons' en utilisant l'opérateur de décomposition (spread operator)
        // On utilise la méthode 'findIndex' pour trouver l'index du pokemon dont l'id correspond à l'id passé en argument à la fonction 'handleClick'
        const index = pokemons.findIndex(pokemon => pokemon.id === id);
        const copie = [...pokemons];
        copie.splice(index, 1);
        setPokemon(copie);
    }

    // const handleRemove = (index) => {
    //     const copie = [...pokemons];
    //     copie.splice(index, 1);
    //     setPokemon(copie);
    // }

    // const handleRemove = (index) => {
    //     // Méthode toSpliced
    //     const copie = pokemons.toSpliced(index, 1);
    //     setPokemon(copie);
    // }

    // const handleAdd = (nouveauPokemon) => {
    //     // Trouver l'id le plus élevé dans le tableau actuel de Pokémons
    //     const maxId = Math.max(...pokemons.map(pokemon => pokemon.id));
    //     // Créer une copie du tableau 'pokemons'
    //     const copie = [...pokemons];
    //     // Ajouter le nouveau pokemon à la copie avec un 'id' qui est maxId + 1
    //     copie.push({ id: maxId + 1, nom: nouveauPokemon.nom });
    //     // Mettre à jour l'état 'pokemons' avec le nouveau tableau 'copie'
    //     setPokemon(copie);
    //     // Mettre à jour l'état
    //     setNouveauNom();
    // }

    const dontSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    }

    // const addPokemon = (e) => {
    //     // console.log(e.target.value);

    //     const copie = [...pokemons];
    //     const maxId = Math.max(...pokemons.map(pokemon => pokemon.id));
    //     copie.push({id: maxId +1, nom: e.target.value})
    // }

    const handleSubmit = e => {
        e.preventDefault();
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
                            {/* <button onClick={() => handleAdd({ nom: "Evoli" })}>+</button> */}
                            <button onClick={() => handleRemove(el.id)}>-</button>
                            {/* toSpliced */}
                            {/* <button onClick={() => handleRemove(index)}>-</button></li> */}
                        </li>
                )}
            </ul>
            {/*  <form onSubmit={e => e.preventDefault()}> */}
            <form onSubmit={dontSubmit}>
                <input type="text" onChange={addPokemon}/>
                <button type="submit">+</button>
            </form>
        </>
    );
};

export default MonComponent;
```

```js
import React, { useState } from 'react';

const MonComponent = () => {
    // state => les états
    const [pokemons, setPokemon] = useState([
        { id: 1, nom: "Pikachu" },
        { id: 2, nom: "Bulbizzar" },
        { id: 3, nom: "Dracolosse" },
        { id: 4, nom: "Dracaufeu" },
    ])

    const [nouveauNom, setNouveauNom] = useState("")

    // fonctions et les constantes => logique
    // const handleRemove = (id) => {
    //     // Méthode Filter
    //     // On utilise la méthode 'filter' pour créer un nouveau tableau qui contient tous les pokemons sauf 
    //     // celui dont l'id correspond à l'id passé en argument à la fonction 'handleClick'.
    //     // Puis on met à jour l'état 'pokemons' avec le nouveau tableau 'copie'.
    //     const copie = pokemons.filter(pokemon => pokemon.id !== id);
    //     setPokemon(copie);
    // }

    // const handleRemove = (id) => {
    //     // Méthode Splice
    //     // Créer une copie du tableau 'pokemons' en utilisant l'opérateur de décomposition (spread operator)
    //     // On utilise la méthode 'findIndex' pour trouver l'index du pokemon dont l'id correspond à l'id passé en argument à la fonction 'handleClick'
    //     const copie = [...pokemons];
    //     const index = copie.findIndex(pokemon => pokemon.id === id);

    //     // Vérifie si l'élément a été trouvé. Si 'findIndex' renvoie -1, cela signifie que l'élément n'a pas été trouvé.
    //     if (index !== -1) {
    //         // Si l'élément a été trouvé, on utilise la méthode 'splice' pour supprimer l'élément à l'index trouvé du tableau copié
    //         // Puis on met à jour l'état 'pokemons' avec le nouveau tableau 'copie'
    //         copie.splice(index, 1);
    //         setPokemon(copie);
    //     }
    // }

    const handleRemove = (id) => {
        // Méthode Splice
        // Créer une copie du tableau 'pokemons' en utilisant l'opérateur de décomposition (spread operator)
        // On utilise la méthode 'findIndex' pour trouver l'index du pokemon dont l'id correspond à l'id passé en argument à la fonction 'handleClick'
        const index = pokemons.findIndex(pokemon => pokemon.id === id);
        const copie = [...pokemons];
        copie.splice(index, 1);
        setPokemon(copie);
    }

    // const handleRemove = (index) => {
    //     const copie = [...pokemons];
    //     copie.splice(index, 1);
    //     setPokemon(copie);
    // }

    // const handleRemove = (index) => {
    //     // Méthode toSpliced
    //     const copie = pokemons.toSpliced(index, 1);
    //     setPokemon(copie);
    // }

    // const handleAdd = (nouveauPokemon) => {
    //     // Trouver l'id le plus élevé dans le tableau actuel de Pokémons
    //     const maxId = Math.max(...pokemons.map(pokemon => pokemon.id));
    //     // Créer une copie du tableau 'pokemons'
    //     const copie = [...pokemons];
    //     // Ajouter le nouveau pokemon à la copie avec un 'id' qui est maxId + 1
    //     copie.push({ id: maxId + 1, nom: nouveauPokemon.nom });
    //     // Mettre à jour l'état 'pokemons' avec le nouveau tableau 'copie'
    //     setPokemon(copie);
    //     // Mettre à jour l'état
    //     setNouveauNom();
    // }

    const dontSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    }

    const addPokemon = (e) => {
        console.log(e.target.value);
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
                            {/* <button onClick={() => handleAdd({ nom: "Evoli" })}>+</button> */}
                            <button onClick={() => handleRemove(el.id)}>-</button>
                            {/* toSpliced */}
                            {/* <button onClick={() => handleRemove(index)}>-</button></li> */}
                        </li>
                )}
            </ul>
            <form onSubmit={dontSubmit}>
                <input type="text" onChange={addPokemon}/>
                <button type="submit">+</button>
            </form>
        </>
    );
};

export default MonComponent;
```


https://fr.legacy.reactjs.org/docs/hooks-reference.html#useref
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/max

Le useRef n'est accessible qu'à l'intérieur d'un composant.

```js
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
```

https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
https://www.geeksforgeeks.org/how-to-search-the-max-value-of-an-attribute-in-an-array-object/


```js
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
        const newId = Math.max(...pokemons.map(pokemon => pokemon.id)) + 1;
        // Créer une copie du tableau 'pokemons'
        // const copie = [...pokemons];
        // Ajouter le nouveau pokemon à la copie avec un 'id' qui est newId + 1
        // copie.push({ id: newId, nom: newpokemon });
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
```