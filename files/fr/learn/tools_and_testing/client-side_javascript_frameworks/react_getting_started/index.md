---
title: Démarrer avec React
slug: >-
  Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started
translation_of: >-
  Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Dans cet article, nous aurons un premier contact avec React. Nous découvrirons quelques détails sur son contexte et ses cas d'utilisation, effectuerons une configuration basique des outils React sur notre ordinateur local, créerons une application pour démarrer simplement, apprenant au passage les bases du fonctionnement de React.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        <p>
          Familiarité avec les langages <a href="/fr/docs/Learn/HTML">HTML</a>,
          <a href="/fr/docs/Learn/CSS">CSS</a>, et
          <a href="/fr/docs/Learn/JavaScript">JavaScript</a>,
          connaissance de la
          <a
            href="/fr/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >ligne de commande/du terminal</a
          >.
        </p>
        <p>
          React utilise une syntaxe embarquant du HTML dans du JavaScript appelée JSX (JavaScript et XML).
          Une familiarité avec HTML et JavaScript vous aidera à apprendre JSX, et a mieux
          identifier si les bugs de votre application sont liés à JavaScript ou au domaine
          plus spécifique de React.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs&nbsp;:</th>
      <td>
        <p>
          Configurer un environnement de développement React local, créer une application de
          démarrage, et comprendre les bases de son fonctionnement.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Bonjour React

Comme l'indique son slogan officiel, [React](https://fr.reactjs.org/) est une bibliothèque de construction d'interfaces utilisateur. React n'est pas un <i lang="en">framework</i>&nbsp;; il n'est même pas exclusif pour le web. Il peut être utilisé avec d'autres bibliothèques pour s'afficher dans différents environnements. Par exemple, [React Native](https://reactnative.dev/) peut être utilisé pour construire des applications mobiles.

Afin de créer pour le Web, les développeuses et développeurs utilisent React en tandem avec [ReactDOM](https://fr.reactjs.org/docs/react-dom.html). React et ReactDOM sont souvent abordés conjointement, et utilisés pour résoudre les mêmes problèmes qu'avec d'autres <i lang="en">frameworks</i> de développement. Lorsque nous évoquerons React comme un«&nbsp;<i lang="en">framework</i>&nbsp;», nous parlerons, par abus de langage, de cette combinaison.

L'objectif principal de React est de minimiser les bugs qui se produisent lors du développement d'interfaces utilisateur. Pour ce faire, React utilise des composants&nbsp;; des morceaux de code autonomes qui décrivent une partie de l'interface utilisateur. Ces composants peuvent être assemblés pour créer une interface utilisateur complète et React prend en charge une grande partie du rendu, vous permettant de vous concentrer sur la conception de l'interface utilisateur.

## Cas d'utilisation

Contrairement aux autres <i lang="en">frameworks</i> abordés dans ce module, React n'applique pas de règles strictes de convention de code ou d'organisation des fichiers. Cela permet aux équipes de développement d'appliquer les conventions qui leur conviennent le mieux et d'adopter React comme elles le souhaitent. Avec React il est possible de créer un seul bouton, quelques éléments d'une interface ou bien toute l'interface utilisateur d'une application.

Tandis que React _peut_ être utilisé pour des [petits éléments d'une interface](https://fr.reactjs.org/docs/add-react-to-a-website.html), ce n'est pas aussi facile d'intégrer ces éléments dans une application que d'intégrer une bibliothèque telle que jQuery, ou bien même un <i lang="en">framework</i> tel que Vue&nbsp;: il est plus simple de développer votre application entièrement avec React.

De plus, les nombreux avantages de React en termes d'expérience de développement, tels que l'écriture d'interfaces avec JSX, nécessitent un processus de compilation. L'ajout d'un compilateur comme Babel à un site web ralentit l'exécution du code, de sorte que les développeuses et développeurs configurent souvent ces outils comme une étape de compilation. Si React a une certaine lourdeur du fait de ces outils, leur utilisation reste abordable.

Cet article va se concentrer sur le cas d'utilisation où React affichera l'intégralité de l'interface utilisateur d'une application, en utilisant les propres outils de Facebook [create-react-app](https://create-react-app.dev/).

## Comment React utilise-t-il JavaScript&nbsp;?

React utilise bon nombre des fonctionnalités modernes de JavaScript. Sa plus grande différence par rapport à JavaScript vient de l'utilisation de la syntaxe [JSX](https://fr.reactjs.org/docs/introducing-jsx.html). JSX étend la syntaxe de JavaScript afin que du code de type HTML puisse cohabiter. Par exemple&nbsp;:

```js
const heading = <h1>Mozilla Developer Network</h1>;
```

Cette constante d'en-tête est connue sous le nom d'**expression JSX**. React peut l'utiliser pour afficher la balise [`<h1>`](/fr/docs/Web/HTML/Element/Heading_Elements) dans notre application.

Supposons que nous souhaitions envelopper notre titre dans une balise [`<header>`](/fr/docs/Web/HTML/Element/header), pour des raisons sémantiques. L'approche JSX nous permet d'imbriquer nos éléments les uns dans les autres, tout comme nous le faisons avec HTML&nbsp;:

```js
const header = (
  <header>
    <h1>Mozilla Developer Network</h1>
  </header>
);
```

> **Note :** Les parenthèses dans l'extrait de code précédent ne sont pas propres à JSX et n'ont aucun effet sur votre application. Elles sont un signal pour vous (et votre ordinateur) que plusieurs lignes de code à l'intérieur font partie de la même expression. Vous pourriez tout aussi bien écrire l'expression d'en-tête comme ceci&nbsp;:
>
> ```js
> const header = <header>
>     <h1>Mozilla Developer Network</h1>
> </header>
> ```
>
> Cependant, cela semble un peu gênant, car la balise [`<header>`](/fr/docs/Web/HTML/Element/header) qui commence l'expression n'est pas indentée à la même position que sa balise de fermeture correspondante.

Bien sûr, votre navigateur ne peut pas lire JSX de manière native. Une fois compilée (à l'aide d'un outil comme [Babel](https://babeljs.io/) ou [Parcel](https://parceljs.org/)), notre expression d'en-tête ressemblerait à ceci&nbsp;:

```js
const header = React.createElement("header", null,
  React.createElement("h1", null, "Mozilla Developer Network")
);
```

Il est _possible_ d'ignorer l'étape de compilation et d'utiliser [`React.createElement()`](https://reactjs.org/docs/react-api.html#createelement) pour écrire vous-même votre interface utilisateur. En faisant cela, cependant, vous perdez l'avantage déclaratif de JSX et votre code devient moins lisible. La compilation est une étape supplémentaire dans le processus de développement, mais de nombreuses personnes de la communauté React pensent que la lisibilité de JSX en vaut la peine. De plus, des outils populaires intègrent la compilation JSX vers JavaScript à leur processus de configuration. Vous n'avez pas à configurer la compilation vous-même, sauf si vous le souhaitez.

Étant donné que JSX est un mélange de HTML et de JavaScript, certaines personnes le trouvent intuitif. D'autres disent que sa nature mixte le rend déroutant. Cependant, une fois que vous serez à l'aise avec cela, vous pourrez créer des interfaces utilisateur plus rapidement et de manière intuitive, permettant aux autres de mieux comprendre votre code d'un coup d'œil.

Pour en savoir plus sur JSX, consultez l'article [JSX dans le détail](https://fr.reactjs.org/docs/jsx-in-depth.html) de l'équipe React.

## Configurez votre première application React

Il existe de nombreuses manières d'utiliser React, mais nous allons ici utiliser l'outil en ligne de commande create-react-app, mentionné précédemment et qui accélère le processus de développement d'une application React en installant certains packages et en créant certains fichiers automatiquement (c'est l'outillage dont nous parlions avant).

Il est possible d'[ajouter React à un site Web sans create-react-app](https://fr.reactjs.org/docs/add-react-to-a-website.html), en copiant certains [`<script>`]( /fr/docs/Web/HTML/Element/script) dans un fichier HTML, mais l'outil create-react-app est généralement utilisé pour initialiser des applications React. Son utilisation vous permettra de passer plus de temps à créer votre application et moins de temps à vous occuper de la configuration.

### Préparation

Afin d'utiliser create-react-app, vous devez avoir installé [Node.js](https://nodejs.org/fr/). Il est recommandé d'utiliser la version support à long terme (LTS). Node.js inclut npm (le gestionnaire de paquets de Node.js) et npx (l'exécuteur de paquets).

Vous pouvez également utiliser le gestionnaire de paquets Yarn comme alternative, mais pour la suite de ces didacticiels, nous supposerons que c'est npm qui est utilisé. Voir [Bases de la gestion des paquets](/fr/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management) pour plus d'informations sur npm et Yarn.

Si vous utilisez Windows, vous devrez installer un logiciel terminal de type Unix/macOS afin d'utiliser les lignes de commande mentionnées dans ce tutoriel. **Git BASH** (qui fait partie de [l'ensemble d'outils Git pour Windows](https://gitforwindows.org/)) ou [<i lang="en">Windows Subsystem for Linux</i>](https://docs.microsoft.com/en-us/windows/wsl/about) (**WSL**) conviennent tous les deux. Voir [Cours express sur la ligne de commande](/fr/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line) pour plus d'information à ce sujet, et sur les commandes du terminal en général.

Gardez également à l'esprit que React et ReactDOM produisent des applications qui ne fonctionnent que sur un ensemble de navigateurs assez modernes (à partir de IE9+ grâce à l'aide de certains <i lang="en">polyfills</i>). Il est recommandé d'utiliser un navigateur moderne comme Firefox, Safari ou Chrome pour suivre ces didacticiels.

Consultez également ces liens pour plus d'informations&nbsp;:

- [Qu'est-ce que npm&nbsp;? (en anglais) sur nodejs.org](https://nodejs.org/en/knowledge/getting-started/npm/what-is-npm/)
- [Introduction à npx (en anglais) sur le blog npm](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner)
- [La documentation de l'outil create-react-app](https://create-react-app.dev/)

### Initialisation de votre application

create-react-app demande un argument&nbsp;: le nom que vous souhaitez donner à votre application. create-react-app utilise ce nom pour créer un nouveau répertoire, puis y crée les fichiers nécessaires. Assurez-vous que votre terminal soit ouvert à l'emplacement souhaité pour votre application sur votre disque dur, puis exécutez la commande suivante dans votre terminal&nbsp;:

```bash
npx create-react-app moz-todo-react
```

Cela crée un répertoire `moz-todo-react`, et réalise plusieurs choses à l'intérieur&nbsp;:

- Installe certains paquets npm nécessaires au fonctionnement de l'application.
- Écrit des scripts pour démarrer et servir l'application.
- Crée une structure de fichiers et de répertoires qui définissent l'architecture de base de l'application.
- Initialise le répertoire en tant que dépôt Git, au cas où Git est installé sur l'ordinateur.

> **Note :** si vous avez installé le gestionnaire de paquets Yarn, create-react-app l'utilisera par défaut à la place de npm. Si vous avez installé les deux gestionnaires de paquets et que vous souhaitez explicitement utiliser npm, vous pouvez ajouter l'indicateur `--use-npm` lorsque vous exécutez create-react-app&nbsp;:
>
> ```bash
> npx create-react-app moz-todo-react --use-npm
> ```

create-react-app va afficher un certain nombre de messages dans votre terminal pendant son fonctionnement&nbsp;; c'est normal&nbsp;! Cela peut prendre quelques minutes, alors c'est peut-être le bon moment pour aller préparer une tasse de thé.

Lorsque le processus est terminé, naviguez dans le répertoire `moz-todo-react` puis exécutez la commande `npm start`. Les scripts installés par create-react-app commenceront à être servis sur un serveur local à l'adresse *localhost:3000* et ouvriront l'application dans un nouvel onglet du navigateur. Celui-ci affichera quelque chose comme ceci&nbsp;:

![Capture d'écran de Firefox pour macOS, ouvert à l'adresse localhost:3000, montrant l'application par défaut créée avec create-react-app](default-create-react-app.png)

### Structure de l'application

create-react-app prépare tout ce dont nous avons besoin pour développer une application React. Sa structure de fichier initiale ressemble à ceci&nbsp;:

    moz-todo-react
    ├── README.md
    ├── node_modules
    ├── package.json
    ├── package-lock.json
    ├── .gitignore
    ├── public
    │   ├── favicon.ico
    │   ├── index.html
    │   ├── logo192.png
    │   ├── logo512.png
    │   ├── manifest.json
    │   └── robots.txt
    └── src
        ├── App.css
        ├── App.js
        ├── App.test.js
        ├── index.css
        ├── index.js
        ├── logo.svg
        ├── reportWebVitals.js
        └── setupTests.js

Le répertoire **`src`** est l'endroit où nous passerons la plupart de notre temps, car c'est là que réside le code source de notre application.

Le répertoire **`public`** contient des fichiers qui seront lus par votre navigateur pendant que vous développez l'application&nbsp;; le plus important d'entre eux est `index.html`. React injecte votre code dans ce fichier afin que votre navigateur puisse l'exécuter. Il y a d'autres balises qui aident la fonction create-react-app, alors veillez à ne pas modifier ce fichier à moins de savoir ce que vous faites. Par contre, vous devriez changer le texte à l'intérieur de l'élément [`<title>`](/fr/docs/Web/HTML/Element/title) pour refléter le titre de votre application. Des titres de pages précis participent à l'accessibilité&nbsp;!

Le répertoire `public` sera également déployé lorsque vous créerez une version de production pour votre application. Nous n'aborderons pas le déploiement dans ce tutoriel, mais vous devriez pouvoir utiliser une solution similaire à celle décrite dans notre tutoriel [Déployer notre application](/fr/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Deployment).

Le fichier `package.json` contient des informations sur notre projet que Node.js/npm utilise pour le garder organisé. Ce fichier n'est pas unique aux applications React&nbsp;; create-react-app ne fait qu'utiliser ce mécanisme. Vous n'avez pas du tout besoin de comprendre ce fichier pour terminer ce didacticiel. Cependant, si vous souhaitez en savoir plus, vous pouvez lire [Qu'est-ce que le fichier \`package.json\`&nbsp;? sur NodeJS.org](https://nodejs.org/en/knowledge/getting-started/npm/what-is-the-file-package-json/)&nbsp;; on en parle aussi dans notre tutoriel [Les bases de la gestion des paquets](/fr/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management).

## Explorer notre premier composant React — `<App/>`

Dans React, un **composant** est un module réutilisable qui affiche une partie de notre application. Ces composants peuvent être grands ou petits, mais ils sont généralement clairement définis et servent un but unique et évident.

Ouvrons `src/App.js`, puisque notre navigateur nous invite à le modifier. Ce fichier contient notre premier composant, `App`, et quelques autres lignes de code&nbsp;:

```js
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;
```

Le fichier `App.js` se compose de trois parties&nbsp;: des instructions [`import`](/fr/docs/Web/JavaScript/Reference/Statements/import) en haut, le composant `App` au milieu et une instruction [`export`](/fr/docs/Web/JavaScript/Reference/Statements/export) en bas. La plupart des composants React suivent ce motif.

### Instructions d'import

Les instructions `import` en haut du fichier permettent à `App.js` d'utiliser du code qui a été défini ailleurs. Examinons ces déclarations de plus près.

```js
import React from 'react';
import logo from './logo.svg';
import './App.css';
```
La première instruction importe la bibliothèque React elle-même. Comme React transforme l'instruction JSX que nous écrivons en `React.createElement()`, tous les composants React doivent importer le module `React`. Si vous ignorez cette étape, votre application produira une erreur.

La deuxième instruction importe un logo depuis `'./logo.svg'`. Notez le `./` au début du chemin et l'extension `.svg` à la fin — ceux-ci nous indiquent que le fichier est local et qu'il ne s'agit pas d'un fichier JavaScript. En effet, le fichier `logo.svg` est contenu dans notre répertoire source.

Nous n'écrivons pas de chemin ou d'extension lors de l'importation du module `React` — ce n'est pas un fichier local. Il s'agit plutôt d'une dépendance, répertoriée dans notre fichier `package.json`. Faites attention à cette distinction pendant que vous progressez dans ce cours&nbsp;!

La troisième instruction importe le CSS lié à notre composant `App`. Notez qu'il n'y a pas de nom de variable ni de directive `from`. Cette syntaxe d'importation particulière n'est pas native de la syntaxe de module JavaScript, elle provient de Webpack, l'outil que create-react-app utilise pour regrouper tous nos fichiers JavaScript et les servir au navigateur.

### Le composant `App`

Après les imports, nous avons une fonction nommée `App`. Alors que les membres de la communauté JavaScript préfèrent généralement les noms en camelCase comme `helloWorld`, les composants React utilisent des noms de variables en PascalCase, comme `HelloWorld`, pour indiquer clairement qu'un élément JSX donné est un composant React et non une balise HTML standard. Si vous deviez renommer la fonction `App` en `app`, votre navigateur afficherait une erreur.

Regardons `App` de plus près&nbsp;:

```js
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
```

La fonction `App` renvoie une expression JSX. Cette expression définit ce que votre navigateur restitue finalement au DOM.

Certains éléments de l'expression ont des attributs, écrits sous forme HTML, d'après le modèle `attribute="value"`. À la ligne 3, la balise d'ouverture [`<div>`](/fr/docs/Web/HTML/Element/div) possède un attribut `className`. Il est similaire à l'attribut [`class`](/fr/docs/Web/HTML/Global_attributes/class) en HTML, mais comme JSX est un sous-ensemble de JavaScript, nous ne pouvons pas utiliser le mot réservé `class`, car JavaScript l'utilise déjà dans un but précis et cela causerait des problèmes dans notre code. D'autres attributs HTML n'utilisent pas la même syntaxe en JSX qu'en HTML pour le même type de raison. Nous en parlerons au fur et à mesure que nous les rencontrerons.

Prenez un moment pour modifier la balise [`<p>`](/fr/docs/Web/HTML/Element/p) à la ligne 6 afin qu'elle indique "Hello, world!", puis enregistrez votre fichier. Vous remarquerez que cette modification est immédiatement rendue par le serveur exécutant `http://localhost:3000` dans votre navigateur. Supprimez maintenant la balise [`<a>`](/fr/docs/Web/HTML/Element/a) et enregistrez; le lien "Learn React" disparaîtra.

Votre composant `App` devrait maintenant ressembler à cela&nbsp;:

```js
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, World!
        </p>
      </header>
    </div>
  );
}
```

### Instructions d'export

Tout en bas du fichier `App.js`, l'instruction `export default App` rend notre composant `App` disponible pour les autres modules.

## Interroger l'index

Ouvrons `src/index.js`, car c'est ici que le composant `App` est utilisé. Ce fichier est le point d'entrée de notre application, et il ressemble initialement à ceci&nbsp;:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```

Comme dans `App.js`, le fichier commence par importer tous les modules JS et autres ressources nécessaires à l'exécution. `src/index.css` contient des styles globaux applicables à l'ensemble de notre application. Nous pouvons également voir notre composant `App` importé ici&nbsp;; il est rendu disponible à l'importation grâce à la déclaration `export` en bas de `App.js`.

La ligne 7 exécute la fonction `ReactDOM.render()` de React avec deux arguments&nbsp;:

- Le composant que nous voulons afficher, `<App />` dans ce cas.
- L'élément DOM à l'intérieur duquel nous voulons que le composant soit affiché, il s'agit dans ce cas l'élément ayant pour identifiant `root`. Si vous regardez à l'intérieur de `public/index.html`, vous verrez qu'il s'agit d'un élément `<div>` juste à l'intérieur de `<body>`.

Tout cela indique à React que nous voulons afficher notre application React avec le composant `App` comme racine ou premier composant.

> **Note :** En JSX, les composants React et les éléments HTML doivent avoir des barres obliques (<i lang="en">slash</i>) de fermeture. Écrire uniquement `<App>` ou simplement `<img>` provoquera une erreur.

Les [<i lang="en">service workers</i>](/fr/docs/Web/API/Service_Worker_API/Using_Service_Workers) sont des éléments de code intéressants qui améliorent les performances des applications et permettent aux fonctionnalités de vos applications web d'être disponibles hors ligne, mais ils ne sont pas abordés dans cet article. Vous pouvez supprimer la ligne 5, ainsi que les lignes 9 à 12.

Votre fichier `index.js` final devrait ressembler à ceci&nbsp;:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

## Variables et props

Ensuite, nous utiliserons nos compétences en JavaScript pour nous familiariser un peu plus avec l'édition de composants et la manipulation des données avec React. Nous parlerons de la façon dont les variables sont utilisées en JSX et introduirons les *props* qui permettent de transmettre des données à un composant (accessibles ensuite à l'aide de variables) (le terme *props* est fait partie du jargon React et vient de «&nbsp;propriétés&nbsp;»).

### Les variables en JSX

De retour dans `App.js`, concentrons-nous sur la ligne 9&nbsp;:

```js
<img src={logo} className="App-logo" alt="logo" />
```

Ici, la valeur de l'attribut `src` de la balise `<img />` est placée entre des accolades. C'est ainsi que JSX reconnaît les variables. React verra `{logo}` et fera le lien avec l'importation de la ligne 2 de l'application, puis récupèrera le fichier du logo et l'affichera.

Essayons de créer notre propre variable. Ajoutez `const subject = 'React';` avant l'instruction `return` de `App`. Votre composant `App` devrait maintenant ressembler à ceci&nbsp;:

```js
function App() {
  const subject = "React";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, World!
        </p>
      </header>
    </div>
  );
}
```

Modifiez la ligne 8 pour utiliser notre variable `subject` au lieu du mot "world", comme ceci&nbsp;:

```js
function App() {
  const subject = "React";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, {subject}!
        </p>
      </header>
    </div>
  );
}
```

Lorsque vous enregistrerez, votre navigateur devrait afficher "Hello, React!" au lieu de "Hello, world!".

Les variables sont pratiques, mais celle que nous venons de définir n'utilise pas vraiment les fonctionnalités de React. C'est là que les props entrent en jeu.

### Props de composants

Une **prop** est une donnée transmise à un composant React. Les props React sont comparables aux attributs HTML. Là où les éléments HTML ont des attributs, les composants React ont des props. Les props sont décrites dans l'appel au composant et utilisent la même syntaxe que les attributs HTML — `prop="value"`. Avec React, le flux des données est unidirectionnel&nbsp;: les props peuvent uniquement être passées des composants parents aux composants enfants et elles sont en lecture seule.

Ouvrons `index.js` et donnons à notre appel `<App/>` sa première prop.

Ajoutez une prop `subject` à l'appel du composant `<App/>`, avec une valeur de `Clarice`. Lorsque vous avez terminé, votre code devrait ressembler à ceci&nbsp;:

```js
ReactDOM.render(<App subject="Clarice" />, document.getElementById('root'));
```

De retour dans `App.js`, revoyons la fonction App elle-même, qui se lit comme ceci (l'instruction `return` est raccourcie ici pour plus de concision)&nbsp;:

```js
function App() {
  const subject = "React";
  return (
    // return statement
  );
}
```

Modifiez la signature de la fonction `App` afin qu'elle accepte `props` comme paramètre et supprimez la constante `subject`. Comme tout autre paramètre de fonction, vous pouvez utiliser `console.log()` pour l'afficher sur la console de votre navigateur. Allez-y et faites-le avant l'instruction `return`, comme ceci&nbsp;:

```js
function App(props) {
  console.log(props);
  return (
    // return statement
  );
}
```

Enregistrez votre fichier et vérifiez la console JavaScript de votre navigateur. Vous devriez voir quelque chose comme ceci&nbsp;:

```js
Object { subject: "Clarice" }
```

La propriété d'objet `subject` correspond à la propriété `subject` que nous avons ajoutée à notre appel de composant `<App />`, et la chaîne de caractères `Clarice` correspond à sa valeur. Dans React, les props de composants sont toujours organisées sous forme d'objets.

Maintenant que `subject` est l'une de nos props, utilisons-la dans `App.js`. Modifiez la constante `subject` de sorte qu'au lieu de la définir comme la chaîne `React`, vous lisiez la valeur de `props.subject`. Vous pouvez également supprimer votre `console.log()` si vous le souhaitez.

```js
function App(props) {
  const subject = props.subject;
  return (
    // return statement
  );
}
```

Lorsque vous enregistrez, l'application devrait maintenant vous accueillir avec "Hello, Clarice!". Si vous revenez à `index.js`, modifiez la valeur de `subject` et enregistrez, votre texte sera actualisé.

## Résumé

Nous voici arrivés à la fin de notre premier aperçu de React, où nous avons vu l'installation locale, la création d'une application de démarrage et les bases de son fonctionnement. Dans le prochain article, nous commencerons à créer notre première vraie application&nbsp;: une liste de tâches. Avant cela, récapitulons certaines des choses que nous avons apprises.

Dans React&nbsp;:

- Les composants peuvent importer les modules dont ils ont besoin, et doivent s'exporter eux-mêmes en bas de leur fichier.
- Les fonctions des composants sont nommées en `PascalCase`.
- Vous pouvez lire les variables JSX en les mettant entre accolades, comme `{ceci}`.
- Certains attributs JSX sont différents des attributs HTML, afin qu'ils n'entrent pas en conflit avec les mots-clés réservés en JavaScript. Par exemple, `class` en HTML se traduit par `className` en JSX. Notez que les attributs sont en <i lang="en">camel case</i>.
- Les props sont écrites comme des attributs à l'intérieur des appels aux composants et sont passées aux composants.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

## Dans ce module

- [Introduction aux <i lang="en">frameworks</i> côté client](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction)
- [Fonctionnalités principales des  <i lang="en">frameworks</i>](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features)
- React

  - [Démarrer avec React](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)
  - [Débuter notre application React de liste de tâches](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning)
  - [Mettre notre application React en composants](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components)
  - [Interactivité avec React&nbsp;: évènements et états](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state)
  - [Interactivité avec React&nbsp;: édition, filtrage, rendu conditionnel](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering)
  - [Accessibilité dans React](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility)
  - [Ressources React](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources)

- Ember

  - [Démarrer avec Ember](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started)
  - [La structure des applications Ember et des composants](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_structure_componentization)
  - [Interactivité avec Ember&nbsp;: évènements, classes et états](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_interactivity_events_state)
  - [Interactivité avec Ember&nbsp;: fonctionnalité de pied de page, rendu conditionnel](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_conditional_footer)
  - [Routage avec Ember](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_routing)
  - [Ressources Ember et dépannage](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources)

- Vue

  - [Démarrer avec Vue](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started)
  - [Créer votre premier composant Vue](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component)
  - [Afficher une liste de composants Vue](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists)
  - [Ajouter un formulaire de tâches&nbsp;: évènements Vue, méthodes, modèles](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_methods_events_models)
  - [Donner du style aux composants Vue avec CSS](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_styling)
  - [Utiliser les propriétés calculées de Vue](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties)
  - [Rendu conditionnel&nbsp;: éditer une liste de tâches existante](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering)
  - [Gestion du focus avec les références Vue](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_refs_focus_management)
  - [Ressources Vue](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources)

- Svelte

  - [Démarrer avec Svelte](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started)
  - [Débuter notre application Svelte de liste de tâches](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_Todo_list_beginning)
  - [Comportement dynamique de Svelte&nbsp;: manipuler les variables et les props](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_variables_props)
  - [Organiser notre application Svelte en composants](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_components)
  - [Utilisation avancée de Svelte&nbsp;: réactivité, cycle de vie, accessibilité](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_reactivity_lifecycle_accessibility)
  - [Utiliser les <i lang="en">stores</i> Svelte](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores)
  - [Prise en charge de TypeScript avec Svelte](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript)
  - [Déploiement et prochaines étapes](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next)
  
- Angular
  
  - [Démarrer avec Angular](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started)
  - [Débuter notre application Angular de liste de tâches](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_todo_list_beginning)
  - [Mettre en forme notre application Angular](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_styling)
  - [Créer un composant pour un élément](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_item_component)
  - [Filtrer les éléments de notre liste de tâches](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_filtering)
  - [Compiler des applications Angular et autres ressources](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_building)
