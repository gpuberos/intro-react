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
On trouve toutes les dépences installés dans le projet.

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
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
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
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
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

Il créer une constante root qui créer un root qui va permettre de manipuler le DOM. Et cette constante on va lui appliquer la méthode render `root.render`. Elle va chercher le composant App `import App from './App';`
```js
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

La `div` vient du dossier `/public/index.html`
```html
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
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
- **rfc** : composant de type fonction, 
- **rcc** : composant de type class
- **rrc** : composant étendu
- **rsc** : composant React Stateless Component (celui qu'on utilise)

Name: Reactjs code snippets
Id: xabikos.ReactSnippets
Description: Code snippets for Reactjs development in ES6 syntax
Version: 2.4.0
Publisher: charalampos karypidis
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=xabikos.ReactSnippets


## JSX

intro-react\src\MonComponent.js
```js
import React from 'react';

const MonComponent = () => {
    return (
        <div id="test">
            
        </div>
    );
};

export default MonComponent;
```

Ajout de la route `MonComponent`
C:\Users\gpube\Desktop\workspace\intro-react\src\index.js
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MonComponent from './MonComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MonComponent></MonComponent>
);

reportWebVitals();
```

Pour utiliser une `class` on devra écrire `className`
Dès qu'on aura des mots composé dans la clé on devra utiliser le camelCase
Sauf pour les Area ou on utilisera des -

Application SPA : Single Page Application
Tous les composants seront rechargés automatiquement c'est l'état qui met à jour le composant.

Il vient hydrater (front DOM) les composants avec des états.

On utilise les composants de type fonction. (les composants de type class sont abandonnées).

Les éléments HTML sont stockées dans des constantes.

Dans un composant on ne peut avoir qu'un seul élément rendu.
`div id="test"` et tous ses enfants.

En utilisant un fragment on peut :
```js
<>
</>
```
On fera toujours comme ceci (bonne pratique)

```js
import React, { useState } from 'react';

const MonComponent = () => {
    // state => les états
    let value = useState(1);

    // fonctions et les constantes => logique
    const incrementer = () => {
        console.log(value + 1);
    }

    // le rendu côté front
    return (
        <>
            <h1 className="maclasstest">Test</h1>
            <p>{value}</p>
            <button onClick={() =>incrementer()}>+1</button >
        </>
    );
};

export default MonComponent;
```

```js
const MonComponent = () => {
    // state => les états
    let value = useState(1);

    // fonctions et les constantes => logique
    const incrementer = () => {
        console.log(value + 1);
    }

    // le rendu côté front
    return (
        <>
            <h1 className="maclasstest">Test</h1>
            <p>{value}</p>
            <button onClick={() => {
                return incrementer();
            }}>+1</button >
        </>
    );
};
```

return implicite 

```js
<button onClick={() =>incrementer()}>+1</button >
```

```js
const [value, setValue] = useState(13);
```
On met un tableau premiere valeur, deuxieme méthode setValue

React interprète un tableau avec getter setter.
```js
import React, { useState } from 'react';

const MonComponent = () => {
    // state => les états
    const [value, setValue] = useState(13);

    // fonctions et les constantes => logique
    const incrementer = () => {
        setValue(value + 1);
    }

    // le rendu côté front
    return (
        <>
            <h1 className="maclasstest">Test</h1>
            <p>{value}</p>
            <button onClick={() =>incrementer()}>+1</button >
        </>
    );
};

export default MonComponent;
```

Pour relancer le serveur :
Ctrl+C pour shutdown le serveur
npm start

```js
import React, { useState } from 'react';

const MonComponent = () => {
    // state => les états
    const [value, setValue] = useState(13);
    const [pokemons, setPokemon] = useState([
        { id: 1, nom: "Pikachu" },
        { id: 2, nom: "Bulbizzar" },
        { id: 3, nom: "Dracolosse" },
        { id: 4, nom: "Dracaufeu" },
    ])

    // fonctions et les constantes => logique
    const handleClick = (el) => {
        // console.log(el);
        const copie = [...pokemons, el]
        const newPokemon = setPokemon(copie)
        console.log(newPokemon);
    }
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
                {pokemons.map(el,index => <li key={index}>{el.nom} <button onClick={() => handleClick(el.id)}>-</button></li>)}                
            </ul>
            <button >-</button >
        </>
    );
};

export default MonComponent;
```

Index dans map
```js
import React, { useState } from 'react';

const MonComponent = () => {
    // state => les états
    const [value, setValue] = useState(13);
    const [pokemons, setPokemon] = useState([
        { id: 1, nom: "Pikachu" },
        { id: 2, nom: "Bulbizzar" },
        { id: 3, nom: "Dracolosse" },
        { id: 4, nom: "Dracaufeu" },
    ])

    // fonctions et les constantes => logique
    const handleClick = (el) => {
        // console.log(el);
        const copie = pokemons;
        const newPokemon = [el, ...copie]
        console.log(newPokemon);
    }
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
                {pokemons.map(
                    (el, index) => <li key={index}>{el.nom} id: {el.id} index: {index} <button onClick={() => handleClick(el)}>-</button></li>)}                
            </ul>
        </>
    );
};

export default MonComponent;
```

Avec filter
```js
import React, { useState } from 'react';

const MonComponent = () => {
    // state => les états
    const [value, setValue] = useState(13);
    const [pokemons, setPokemon] = useState([
        { id: 1, nom: "Pikachu" },
        { id: 2, nom: "Bulbizzar" },
        { id: 3, nom: "Dracolosse" },
        { id: 4, nom: "Dracaufeu" },
    ])

    // fonctions et les constantes => logique
    const handleClick = (id) => {
        // console.log(el);
        const copie = pokemons.filter(pokemon => pokemon.id !== id);
        setPokemon(copie);
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
```

