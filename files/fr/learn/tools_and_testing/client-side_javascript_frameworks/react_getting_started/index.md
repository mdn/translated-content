---
title: Démarrer avec React
slug: >-
  Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started
tags:
  - Apprendre
  - Débutant
  - Frameworks
  - JavaScript
  - React
  - jsx
  - props
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
          connaissances des
          <a
            href="/fr/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >ligne de commande/terminal</a
          >.
        </p>
        <p>
          React utilise une syntaxe embarquant du HTML dans du JavaScript appelée JSX (JavaScript et XML).
          Une familiarité avec HTML et Javascript vous aidera à apprendre JSX, et a mieux
          identififier si les bugs de votre application sont liés à JavaScript ou au domaine
          plus spécifique de React.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs:</th>
      <td>
        Configurer un environnement de développement React local, créer une application de
        démarrage, et comprendre les bases de son fonctionnement.
      </td>
    </tr>
  </tbody>
</table>

## Hello React

Comme l'indique son slogan officiel, [React](https://reactjs.org/) est une bibliothèque de construction d'interfaces utilisateur. React n'est
pas un framework; il n'est même pas exclusif pour le web. Il peut être utilisé avec d'autres bibliothèques pour s'afficher dans différents
environnements. Par exemple, [React Native](https://reactnative.dev/) peut être utilisé pour construire des applications mobiles;
[React 360](https://facebook.github.io/react-360/) peut être utilisé pour construire des applications de réalité virtuelle, au delà d'autres possibilités existent.

Afin de créer pour le web, les développeurs utilisent React en tandem avec [ReactDOM](https://reactjs.org/docs/react-dom.html). React et ReactDOM
sont souvent appréhendés conjointement, et utilisés pour résoudre les même problèmes qu'avec d'autres frameworks de développement. De manière familière, nous allons nous référer à React en tant que "framework". 

L'objectif principal de React est de minimiser les bugs qui se produisent lorsque les développeurs créent des interfaces utilisateur. Pour ce faire, React utilise des composants - des morceaux de code autonomes qui décrivent une partie de l'interface utilisateur. Ces composants peuvent être assemblés pour créer une interface utilisateur complète et React prend en charge une grande partie du rendu, vous permettant de vous concentrer sur la conception de l'interface utilisateur.

## Cas d'utilisation

Contrairement aux autres frameworks abordés dans ce module, React n'applique pas de règles strictes de convention de code ou d'organisation des fichiers. Cela permet aux développeurs d'appliquer les conventions qui leur conviennent le mieux et d'adopter React comme elles le souhaitent. Avec React il est possible de créer seul bouton, quelques éléments d'une interface ou bien toute l'interface utilisateur d'une application.

Tandis que React _peut_ être utilisé pour des [petits éléments d'une interface](https://reactjs.org/docs/add-react-to-a-website.html), ce n'est
pas aussi facile d'intégrer ces éléments dans une application que d'intégrer une bibliothèque telle que jQuery, ou bien même un framework tel que Vue: il est plus simple de développer votre application entièrement avec React.

De plus, nombreux des avantages d'une application React en terme d'expérience de développement, telle que l'écriture d'interfaces avec JSX, nécessitent un processus de compilation. L'ajout d'un compilateur comme Babel à un site Web ralentit l'exécution du code, de sorte que les développeurs configurent souvent ces outils comme une étape de développement. Si React a une certaine lourdeur du fait de ces outils, leur utilisation reste abordable.

Cet article va se concentrer sur le cas d'utilisation où React affichera l'intégralité de l'interface utilisateur d'une application, en utilisant les propres outils de Facebook [create-react-app](https://create-react-app.dev/).

## Comment React utilise-t-il JavaScript?

React utilise bon nombre des fonctionnalités modernes de JavaScript. Sa plus grande différence par rapport à JavaScript vient de l'utilisation de la syntaxe [JSX](https://reactjs.org/docs/introducing-jsx.html). JSX étend la syntaxe de JavaScript afin que du code de type HTML puisse cohabiter. Par example:

```js
const heading = <h1>Mozilla Developer Network</h1>;
```

Cette constante d'en-tête est connue sous le nom d'**expression JSX**. React peut l'utiliser pour afficher la balise [`<h1>`](/fr/docs/Web/HTML/Element/Heading_Elements) dans notre application.

Supposons que nous souhaitions envelopper notre titre dans une balise [`<header>`](/fr/docs/Web/HTML/Element/header), pour des raisons sémantiques. L'approche JSX nous permet d'imbriquer nos éléments les uns dans les autres, tout comme nous le faisons avec HTML:

```js
const header = (
  <header>
    <h1>Mozilla Developer Network</h1>
  </header>
);
```

> **Remarque :** Les parenthèses dans l'extrait de code précédent ne sont pas propres à JSX et n'ont aucun effet sur votre application. Elles sont un signal pour vous (et votre ordinateur) que plusieurs lignes de code à l'intérieur font partie de la même expression. Vous pourriez tout aussi bien écrire l'expression d'en-tête comme ceci :
>
> ```js
> const header = <header>
>     <h1>Mozilla Developer Network</h1>
> </header>
> ```
>
> Cependant, cela semble un peu gênant, car la balise [`<header>`](/fr/docs/Web/HTML/Element/header) qui commence l'expression n'est pas indentée à la même position que sa balise de fermeture correspondante.

Bien sûr, votre navigateur ne peut pas lire JSX de manière native. Une fois compilé (à l'aide d'un outil comme [Babel](https://babeljs.io/) ou [Parcel](https://parceljs.org/)), notre expression d'en-tête ressemblerait à ceci :

```js
const header = React.createElement("header", null,
  React.createElement("h1", null, "Mozilla Developer Network")
);
```

Il est _possible_ d'ignorer l'étape de compilation et d'utiliser [`React.createElement()`](https://reactjs.org/docs/react-api.html#createelement) pour écrire vous-même votre interface utilisateur. En faisant cela, cependant, vous perdez l'avantage déclaratif de JSX et votre code devient plus difficile à lire. La compilation est une étape supplémentaire dans le processus de développement, mais de nombreux développeurs de la communauté React pensent que la lisibilité de JSX en vaut la peine. De plus, des outils populaires intègrent la compilation JSX vers JavaScript à son processus de configuration. Vous n'avez pas à configurer la compilation vous-même, sauf si vous le souhaitez.

Étant donné que JSX est un mélange de HTML et de JavaScript, certains développeurs le trouvent intuitif. D'autres disent que sa nature mixte le rend déroutant. Cependant, une fois que vous serez à l'aise avec cela, vous pourrez créer des interfaces utilisateur plus rapidement et de manière intuitive, permettant aux autres de mieux comprendre votre code d'un coup d'oeil.

Pour en savoir plus sur JSX, consultez l'article [JSX In Depth](https://reactjs.org/docs/jsx-in-depth.html) de l'équipe React.

## Configurez votre première application React

Il existe de nombreuses manières d'utiliser React, mais nous allons utiliser l'outil d'interface de ligne de commande (CLI) create-react-app, comme mentionné précédemment, qui accélère le processus de développement d'une application React en installant certains packages et en en créant les fichiers pour vous, grâce aux outils décrits ci-dessus.

Il est possible d'[ajouter React à un site Web sans create-react-app](https://reactjs.org/docs/add-react-to-a-website.html), en copiant certains [`<script>`]( /fr/docs/Web/HTML/Element/script) dans un fichier HTML, mais la CLI create-react-app est un point de départ commun pour les applications React. Son utilisation vous permettra de passer plus de temps à créer votre application et moins de temps à vous occuper de la configuration.

### Préparation

Afin d'utiliser create-react-app, vous devez avoir installé [Node.js](https://nodejs.org/en/). Il est recommandé d'utiliser la version support à long terme (LTS). Node inclut npm (le gestionnaire de packages de node) et npx (l'exécuteur de packages de node).

Vous pouvez également utiliser le gestionnaire de packages Yarn comme alternative, mais nous ferons l'hypothèse que vous utilisez npm dans cet ensemble de didacticiels. Voir [Bases de la gestion des packages](/fr/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management) pour plus d'informations sur npm et yarn.

Si vous utilisez Windows, vous devrez installer un logiciel terminal de type Unix/macOS afin d'utiliser les commandes mentionnées dans ce tutoriel. **Gitbash** (qui fait partie de [l'ensemble d'outils git pour Windows](https://gitforwindows.org/)) ou [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/about) (**WSL**) conviennent tous les deux. Voir [Cours express sur la ligne de commande](/fr/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line) pour plus d'information à ce sujet, et sur les commandes du terminal en général.

Gardez également à l'esprit que React et ReactDOM produisent des applications qui ne fonctionnent que sur un ensemble de navigateurs assez modernes - IE9+ à l'aide de certains polyfills. Il est recommandé d'utiliser un navigateur moderne comme Firefox, Safari ou Chrome pour suivre ces didacticiels.

Consultez également ces liens pour plus d'information:

- ["What is npm" on nodejs.org](https://nodejs.org/en/knowledge/getting-started/npm/what-is-npm/)
- ["Introducing npx" on the npm blog](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner)
- [The create-react-app documentation](https://create-react-app.dev/)

### Initialisation de de votre application

create-react-app demande un argument: le nom que vous souhaitez donner à votre application. create-react-app utilise ce nom pour créer un nouveau répertoire, puis y crée les fichiers nécessaires. Assurez-vous d'accéder à l'emplacement où vous souhaitez que votre application se trouve sur votre disque dur, puis exécutez la commande suivante dans votre terminal:

```bash
npx create-react-app moz-todo-react
```

Cela crée un répertoire `moz-todo-react`, et réalise plusieurs choses à l'intérieur:

- Installe certains packages npm nécessaires à la fonctionnalité de l'application.
- Écrit des scripts pour démarrer et servir l'application.
- Crée une structure de fichiers et de répertoires qui définissent l'architecture de base de l'application.
- Initialise le répertoire en tant que dépot git, au cas où vous avez installé git sur votre ordinateur.

> **Remarque :** si vous avez installé le gestionnaire de paquets yarn, create-react-app l'utilisera par défaut à la place de npm. Si vous avez installé les deux gestionnaires de packages et que vous souhaitez explicitement utiliser NPM, vous pouvez ajouter l'indicateur `--use-npm` lorsque vous exécutez create-react-app:
>
> ```bash
> npx create-react-app moz-todo-react --use-npm
> ```

create-react-app va afficher un certain nombre de messages dans votre terminal pendant son fonctionnement; c'est normal! Cela peut prendre quelques minutes, alors c'est peut-être le bon moment pour aller faire une tasse de thé.

Lorsque le processus est terminé, naviguez dans le répertoire `moz-todo-react` puis exécutez la commande `npm start`. Les scripts installés par create-react-app commenceront à être servis sur un serveur local à l'adresse *localhost:3000* et ouvriront l'application dans un nouvel onglet du navigateur. Celui-ci affichera quelque chose comme ceci:

![Capture d'écran de Firefox MacOS, ouvert à localhost: 3000, montrant l'application par défaut create-react-app](default-create-react-app.png)

### Structure de l'application

create-react-app prépare tout ce dont nous avons besoin pour développer une application React. Sa structure de fichier initiale ressemble à ceci:

    moz-todo-react
    ├── README.md
    ├── node_modules
    ├── package.json
    ├── package-lock.json
    ├── .gitignore
    ├── public
    │   ├── favicon.ico
    │   ├── index.html
    │   └── manifest.json
    └── src
        ├── App.css
        ├── App.js
        ├── App.test.js
        ├── index.css
        ├── index.js
        ├── logo.svg
        └── serviceWorker.js

Le répertoire **`src`** est l'endroit où nous passerons la plupart de notre temps, car c'est là que réside le code source de notre application.

Le répertoire **`public`** contient des fichiers qui seront lus par votre navigateur pendant que vous développez l'application; le plus important d'entre eux est `index.html`. React injecte votre code dans ce fichier afin que votre navigateur puisse l'exécuter. Il y a d'autre balises qui aident la fonction create-react-app, alors veillez à ne pas modifier ce fichier à moins que vous ne sachiez ce que vous faites. Par contre, vous devriez changer le texte à l'intérieur de l'élément [`<title>`](/fr/docs/Web/HTML/Element/title) pour refléter le titre de votre application. Des titres de pages précis améliorent l'accessibilité!

Le répertoire `public` sera également déployé lorsque vous créerez une version productive de votre application. Nous n'aborderons pas le déploiement dans ce tutoriel, mais vous devriez pouvoir utiliser une solution similaire à celle décrite dans notre tutoriel [Déployer notre application](/fr/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Deployment).

Le fichier `package.json` contient des informations sur notre projet que Node.js/npm utilise pour le garder organisé. Ce fichier n'est pas unique aux applications React; create-react-app s'en sert simplement. Vous n'avez pas du tout besoin de comprendre ce fichier pour terminer ce didacticiel, cependant, si vous souhaitez en savoir plus, vous pouvez lire [Qu'est-ce que le fichier \`package.json\` ? sur NodeJS.org](https://nodejs.org/en/knowledge/getting-started/npm/what-is-the-file-package-json/); on en parle aussi dans notre tutoriel [Les bases de la gestion des packages](/fr/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management).

## Explorer notre premier composant React — `<App/>`

Dans React, un **composant** est un module réutilisable qui affiche une partie de notre application. Ces composants peuvent être grands ou petits, mais ils sont généralement clairement définis et servent un but unique et évident.

Ouvrons `src/App.js`, puisque notre navigateur nous invite à le modifier. Ce fichier contient notre premier composant, "App", et quelques autres lignes de code :

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

Le fichier `App.js` se compose de trois parties: des instructions [`import`](/fr/docs/Web/JavaScript/Reference/Statements/import) en haut, le composant `App` au milieu et une instruction [`export`](/fr/docs/Web/JavaScript/Reference/Statements/export) en bas. La plupart des composants React suivent ce motif.

### Instructions d'import

Les instructions `import` en haut du fichier permettent à `App.js` d'utiliser du code qui a été défini ailleurs. Examinons ces déclarations de plus près.

```js
import React from 'react';
import logo from './logo.svg';
import './App.css';
```
La première instruction importe la bibliothèque React elle-même. Comme React transforme l'instruction JSX que nous écrivons en `React.createElement()`, tous les composants React doivent importer le module `React`. Si vous ignorez cette étape, votre application produira une erreur.

La deuxième instruction importe un logo depuis `'./logo.svg'`. Notez le `./` au début du chemin et l'extension `.svg` à la fin — ceux-ci nous indiquent que le fichier est local et qu'il ne s'agit pas d'un fichier JavaScript. En effet, le fichier `logo.svg` est contenu dans notre répertoire source.

Nous n'écrivons pas de chemin ou d'extension lors de l'importation du module `React` — ce n'est pas un fichier local; à la place, il est répertorié comme une dépendance dans notre fichier `package.json`. Faites attention à cette distinction pendant que vous travaillez dans cette leçon!

La troisième instruction importe le CSS lié à notre composant App. Notez qu'il n'y a pas de nom de variable ni de directive "from". Cette syntaxe d'importation particulière n'est pas native de la syntaxe du module JavaScript - elle provient de Webpack, l'outil que create-react-app utilise pour regrouper tous nos fichiers JavaScript et les servir au navigateur.

### Le composant `App`

Après les imports, nous avons une fonction nommée `App`. Alors que les membres de la communauté JavaScript préfèrent généralement les noms en camelCase comme `helloWorld`, les composants React utilisent des noms de variables en PascalCase, comme `HelloWorld`, pour indiquer clairement qu'un élément JSX donné est un composant React et non une balise HTML standard. Si vous deviez renommer la fonction `App` en `app`, votre navigateur vous afficherait une erreur.

Regardons App de plus près:

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

Certains éléments de l'expression ont des attributs, écrits sous forme HTML, d'après le modèle `attribute="value"`. A la ligne 3, la balise d'ouverture [`<div>`](/fr/docs/Web/HTML/Element/div) possède un attribut `className`. Il est similaire à l'attribut [`class`](/fr/docs/Web/HTML/Global_attributes/class) en HTML, mais comme JSX est un sous-ensemble de JavaScript, nous ne pouvons pas utiliser le mot réservé `class` -  JavaScript l'utilise déjà dans un but précis et cela causerait de la confusion ici dans notre code. D'autres attributs HTML n'utilisent pas la même syntaxe en JSX qu'ils n'utiliseraient en HTML pour le même type de raison. Nous en parlerons au fur et à mesure que nous les rencontrerons.

Prenez un moment pour modifier la balise [`<p>`](/fr/docs/Web/HTML/Element/p) à la ligne 6 afin qu'elle indique "Hello, world!", puis enregistrez votre fichier. Vous remarquerez que cette modification est immédiatement rendue par le serveur exécutant `http://localhost:3000` dans votre navigateur. Supprimez maintenant la balise [`<a>`](/fr/docs/Web/HTML/Element/a) et enregistrez; le lien "Learn React" disparaîtra.

Votre composant `App` devrait maintenant ressembler à cela:

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

Tout en bas du fichier `App.js`, la déclaration `export default App` rend notre composant `App` disponible pour les autres modules.

## Interroger l'index

Ouvrons `src/index.js`, car c'est ici que le composant `App` est utilisé. Ce fichier est le point d'entrée de notre application, et il ressemble initialement à ceci:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```

Comme dans `App.js`, le fichier commence par importer tous les modules JS et autres ressources nécessaires à l'exécution. `src/index.css` contient des styles globaux applicables à l'ensemble de notre application. Nous pouvons également voir notre composant "App" importé ici; il est rendu disponible pour l'importation grâce à la déclaration `export` en bas de `App.js`.

La ligne 7 exécute la fonction `ReactDOM.render()` de React avec deux arguments :

- Le composant que nous voulons afficher, `<App />` dans ce cas.
- L'élément DOM à l'intérieur duquel nous voulons que le composant soit affiché, il s'agit dans ce cas l'élément ayant pour ID `root`. Si vous regardez à l'intérieur de `public/index.html`, vous verrez qu'il s'agit d'un élément `<div>` juste à l'intérieur de `<body>`.

Tout cela indique à React que nous voulons afficher notre application React avec le composant `App` comme racine ou premier composant.

> **Note :** Dans JSX, les composants React et les éléments HTML doivent avoir des slashes fermants. Écrire uniquement `<App>` ou simplement `<img>` provoquera une erreur.

Les [Service workers](/fr/docs/Web/API/Service_Worker_API/Using_Service_Workers) sont des éléments de code intéressants qui améliorent les performances des applications et permettent aux fonctionnalités de vos applications Web de fonctionner hors ligne, mais ils ne sont pas abordés dans cet article. Vous pouvez supprimer la ligne 5, ainsi que les lignes 9 à 12.

Votre fichier `index.js` final devrait ressembler à ceci :

```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

## Variables et props

Ensuite, nous utiliserons nos compétences en JavaScript pour rendre les composants d'édition un peu plus confortables et travailler avec des données dans React. Nous parlerons de la façon dont les variables sont utilisées dans JSX et introduirons les *props* qui permettent de transmettre des données à un composant (accessibles ensuite à l'aide de variables).

### Les variables dans JSX

De retour dans `App.js`, concentrons-nous sur la ligne 9:

```js
<img src={logo} className="App-logo" alt="logo" />
```

Ici, la valeur de l'attribut `src` de la balise `<img />` est entre des accolades. C'est ainsi que JSX reconnaît les variables. React verra votre `{logo}` par rapport à l'importation de la ligne 2 de l'application, récupèrera le fichier du logo et l'affichera.

Essayons de créer notre propre variable. Ajoutez `const subject = 'React';` avant l'instruction `return` de `App`. Votre composant "App" devrait maintenant ressembler à ceci:

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

Modifiez la ligne 8 pour utiliser notre variable `subject` au lieu du mot "world", comme ceci:

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

Un **prop** est une donnée transmise à un composant React. Les props sont décrits dans  l'appel au composant et utilisent la même syntaxe que les attributs HTML — `prop="value"`. Ouvrons `index.js` et donnons à notre appel `<App/>` sa première prop.

Ajoutez un prop `subject` à l'appel du composant `<App/>`, avec une valeur de `Clarice`. Lorsque vous avez terminé, votre code devrait ressembler à ceci:

```js
ReactDOM.render(<App subject="Clarice" />, document.getElementById('root'));
```

De retour dans `App.js`, revoyons la fonction App elle-même, qui se lit comme ceci (l'instruction `return` est raccourcie pour plus de concision):

```js
function App() {
  const subject = "React";
  return (
    // return statement
  );
}
```

Modifiez la signature de la fonction `App` afin qu'elle accepte `props` comme paramètre et supprimez la constante `subject`. Comme tout autre paramètre de fonction, vous pouvez utiliser `console.log()` pour l'afficher sur la console de votre navigateur. Allez-y et faites-le avant l'instruction `return`, comme ceci:

```js
function App(props) {
  console.log(props);
  return (
    // return statement
  );
}
```

Enregistrez votre fichier et vérifiez la console JavaScript de votre navigateur. Vous devriez voir quelque chose comme ceci:

```js
Object { subject: "Clarice" }
```

La propriété d'objet `subject` correspond à la propriété `subject` que nous avons ajoutée à notre appel de composant `<App />`, et la chaîne de caractères `Clarice` correspond à sa valeur. Dans React, les props de composants sont toujours évalués.

Maintenant que `subject` est l'un de nos props, utilisons-le dans `App.js`. Modifiez la constante `subject` de sorte qu'au lieu de la définir comme la chaîne `React`, vous lisiez la valeur de `props.subject`. Vous pouvez également supprimer votre `console.log()` si vous le souhaitez.

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

Nous avons eu un premier un premier aperçu de React, ayant vu l'installation locale, la création d'une application de démarrage et les bases de fonctionnement. Dans le prochain article, nous commencerons à créer notre première vraie application - une liste de tâches. Avant de faire cela, cependant, récapitulons certaines des choses que nous avons apprises.

Dans React:

- Les composants peuvent importer les modules dont ils ont besoin, et doivent s'exporter eux-mêmes en bas de leur fichier.
- Les fonctions des composants sont nommées avec `PascalCase`.
- Vous pouvez lire les variables JSX en les mettant entre accolades, comme `{so}`.
- Certains attributs JSX sont différents des attributs HTML, de manière à ce qu'ils n'entrent pas en conflit avec les mots réservés JavaScript. Par exemple, `class` en HTML se traduit par `className` en JSX. Notez que les attributs sont en casse `camel`.
- Les props sont écrits comme des attributs à l'intérieur des appels aux composants et sont passés aux composants.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

## Dans ce module

- [Introduction aux frameworks côté client](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction)
- [Fonctionnalités principales des frameworks](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features)
- React

  - [Démarrer avec React](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)
  - [Débuter notre React todo list](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning)
  - [Mettre notre application React en composants](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components)
  - [Interaction React: Evénements et états](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state)
  - [Interaction React: Editer, filtrer, rendu conditionnel](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering)
  - [Accessibilité dans React](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility)
  - [Ressources React](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources)

- Ember

  - [Démarrer avec Ember](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started)
  - [La structure des applications Ember et des composants](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_structure_componentization)
  - [Interactivité Ember: Evénements, classes et états](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_interactivity_events_state)
  - [Interactivité Ember: Fonctionnalité footer, rendu conditionnel](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_conditional_footer)
  - [Routage avec Ember](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_routing)
  - [Ressources Ember et dépannage](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources)

- Vue

  - [Prise en main de Vue](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started)
  - [Créer votre premier composant Vue](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component)
  - [Afficher une liste de composants Vue](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists)
  - [Ajouter un formulaire de tâches: événements Vue, methodes, modèles](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_methods_events_models)
  - [Donner du style aux composants Vue avec CSS](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_styling)
  - [Utiliser les propriétés calculées de Vue](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties)
  - [Rendu conditionnel: éditer une liste de tâches existante](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering)
  - [Gestion de focus avec Vue refs](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_refs_focus_management)
  - [Ressources Vue](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources)
