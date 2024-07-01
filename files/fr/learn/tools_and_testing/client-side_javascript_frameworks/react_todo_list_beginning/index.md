---
title: Commencer notre liste de tâches en React
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning
l10n:
  sourceCommit: fc11c086fd41f090489fa35778998b606c257af2
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Disons que nous avons pour mission de créer une preuve de concept en React&nbsp;: une application qui permette d'ajouter, de modifier et de supprimer des tâches sur lesquelles on veut travailler, et de les marquer comme terminées sans les supprimer. Dans cet article, nous verrons comment mettre en place la structure de base et la mise en forme du composant `App` initial et qui servira de socle pour définir d'autres composants et implémenter l'interactivité par la suite.

> **Note :** Si vous avez besoin de vérifier votre code par rapport à notre version, vous pouvez trouver une version terminée du code de cette application React d'exemple dans notre dépôt [`todo-react`](https://github.com/mdn/todo-react). Pour voir l'application fonctionner en direct, consultez <https://mdn.github.io/todo-react-build/>.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        <p>
          Connaissances des fondamentaux en <a href="/fr/docs/Learn/HTML">HTML</a>, <a href="/fr/docs/Learn/CSS">CSS</a>, et <a href="/fr/docs/Learn/JavaScript">JavaScript</a>, connaissance <a href="/fr/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line">du terminal/de la ligne de commande</a>.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs&nbsp;:</th>
      <td>
        Présenter notre étude de cas avec une application de liste de tâches à faire (<i lang="en">todo list</i>) et mettre en place la structure et la mise en forme de base pour le composant général <code>App</code>.
      </td>
    </tr>
  </tbody>
</table>

## Les récits d'utilisation de notre application

Dans le développement logiciel, un récit utilisateur (ou <i lang="en">user story</i> en anglais) est un objectif réalisable du point de vue de la personne utilisant l'application. Définir ces scénarios avant de commencer notre travail nous aidera à orienter correctement notre travail. Notre application devrait ici respecter les spécifications suivantes&nbsp;:

En tant qu'utilisatrice ou utilisateur, je peux&nbsp;:

- Lire une liste de tâches.
- Ajouter une tâche en utilisant la souris ou le clavier.
- Marquer une tâche comme étant terminée, en utilisant la souris ou le clavier.
- Supprimer n'importe quelle tâche, en utilisant la souris ou le clavier.
- Modifier n'importe quelle tâche, en utilisant la souris ou le clavier.
- Afficher un sous-ensemble spécifique de tâches&nbsp;:
  - Toutes les tâches
  - Seulement la tâche active
  - Seulement les tâches terminées.

Nous aborderons ces spécifications une par une.

## Petit ménage avant de commencer

`create-react-app` a créé quelques fichiers que nous n'utiliserons pas du tout pour notre projet.

- Nous ne créerons pas de feuilles de style pour chaque composant, vous pouvez donc commencer par supprimer l'importation de `App.css` en haut de `App.js`.
- Nous n'utiliserons pas non plus le fichier `logo.svg`, vous pouvez également supprimer cette importation.

Ensuite, copiez et collez les commandes suivantes dans votre terminal pour supprimer certains fichiers inutiles. Assurez-vous de démarrer dans le répertoire racine de l'application&nbsp;!

```bash
# Déplacez-vous dans le répertoire src de votre projet
cd src
# Supprimez les fichiers suivants
rm -- App.test.js App.css logo.svg serviceWorker.js setupTests.js
# Revenez dans le répertoire racine de votre projet
cd ..
```

> **Note :** Deux des fichiers que nous avons supprimés sont destinés à tester l'application. Nous ne ferons pas de tests ici.

> **Note :** Si vous avez arrêté votre serveur d'application afin d'effectuer les actions précédentes dans votre terminal, vous devrez redémarrer le serveur en utilisant `npm start`.

## Code de démarrage pour notre projet

Pour démarrer ce projet, nous allons vous fournir deux choses&nbsp;:

- Une fonction `App()` pour remplacer celle que vous avez actuellement
- Un peu de CSS pour mettre en forme votre application.

### Le code JSX

Copiez le fragment de code suivant, puis collez-le dans `App.js` afin qu'il remplace la fonction `App()` existante&nbsp;:

```jsx
function App(props) {
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            Qu'y a-t-il à faire&nbsp;?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Ajouter
        </button>
      </form>
      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Montrer </span>
          <span>Toutes</span>
          <span className="visually-hidden"> les tâches</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Montrer </span>
          <span className="visually-hidden">les tâches </span>
          <span>Actives</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Montrer </span>
          <span className="visually-hidden">les tâches </span>
          <span>Terminées</span>
        </button>
      </div>
      <h2 id="list-heading">3 tâches restantes</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-0" type="checkbox" defaultChecked={true} />
            <label className="todo-label" htmlFor="todo-0">
              Manger
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Éditer <span className="visually-hidden">Manger</span>
            </button>
            <button type="button" className="btn btn__danger">
              Supprimer <span className="visually-hidden">Manger</span>
            </button>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-1" type="checkbox" />
            <label className="todo-label" htmlFor="todo-1">
              Dormir
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Éditer <span className="visually-hidden">Dormir</span>
            </button>
            <button type="button" className="btn btn__danger">
              Supprimer <span className="visually-hidden">Dormir</span>
            </button>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-2" type="checkbox" />
            <label className="todo-label" htmlFor="todo-2">
              Recommencer
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Éditer <span className="visually-hidden">Recommencer</span>
            </button>
            <button type="button" className="btn btn__danger">
              Supprimer <span className="visually-hidden">Recommencer</span>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
```

Ouvrez maintenant `public/index.html` et changez l'élément [`<title>`](/fr/docs/Web/HTML/Element/title) pour y inscrire `TodoMatic`. De cette façon, cela correspondra à la balise [`<h1>`](/fr/docs/Web/HTML/Element/Heading_Elements) en haut de notre application.

```html
<title>TodoMatic</title>
```

Après avoir rafraîchi la page dans votre navigateur, vous pourrez voir quelque chose comme ceci&nbsp;:

![Une application de liste de tâches, sans mise en forme, affichant un bazar de libellés, un champ de saisie, des cases à cocher et des boutons](unstyled-app.png)

C'est plutôt laid et cela ne fonctionne pas encore, mais ce n'est pas grave&nbsp;: nous allons ajouter la mise en forme dans un instant. Tout d'abord, revoyons le JSX utilisé plus tôt et comment il correspond à nos scénarios d'utilisation&nbsp;:

- Nous avons un élément [`<form>`](/fr/docs/Web/HTML/Element/Form), avec un élément [`<input type="text">`](/fr/docs/Web/HTML/Element/input/text) qui permet d'écrire une nouvelle tâche, ainsi qu'un bouton pour soumettre le formulaire.
- Nous avons une série de boutons qui seront utilisés pour filtrer nos tâches.
- Nous avons également un titre qui nous indique le nombre de tâches restantes.
- Nos trois tâches sont présentées sous forme de liste non-ordonnée. Chaque tâche est un élément de liste ([`<li>`](/fr/docs/Web/HTML/Element/li)), et dispose de boutons pour la modifier et la supprimer, ainsi qu'une case à cocher pour la marquer comme terminée.

Le formulaire nous permettra de _créer_ des tâches&nbsp;; les boutons nous permettront de les _filtrer_&nbsp;; l'en-tête et la liste nous permettront de les _lire_. L'interface utilisateur pour l'_édition_ d'une tâche est manifestement absente pour le moment. Rien de trop grave, nous l'écrirons plus tard.

### Fonctionnalités pour l'accessibilité

Vous pourriez remarquer ici certains attributs inhabituels. Par exemple&nbsp;:

```html
<button type="button" className="btn toggle-btn" aria-pressed="true">
  <span className="visually-hidden">Montrer </span>
  <span>Toutes</span>
  <span className="visually-hidden"> les tâches</span>
</button>
```

Ici, `aria-pressed` indique aux outils d'assistance (comme les lecteurs d'écran) que le bouton peut prendre un de ces deux états&nbsp;: `pressed` ou `unpressed`. Vous pouvez voir ces états comme des analogues pour `on` et `off`. Le fait d'utiliser une valeur `true` pour l'attribut signifie que le bouton est pressé par défaut.

La classe `visually-hidden` n'a pas encore d'effet, car nous n'avons pas inclus de CSS. Une fois que nous aurons mis en place nos styles, tout élément avec cette classe ne sera plus visible à l'écran, mais toujours disponible pour les personnes navigant à l'aide de lecteurs d'écran. En effet, ces mots ne sont pas nécessaires pour les personnes voyantes&nbsp;; ils sont là pour fournir plus d'informations sur ce que fait le bouton pour les personnes utilisant des lecteurs d'écran qui n'ont pas le contexte visuel supplémentaire pour les aider.

Plus bas, vous pouvez trouver notre élément [`<ul>`](/fr/docs/Web/HTML/Element/ul)&nbsp;:

```html
<ul
  role="list"
  className="todo-list stack-large stack-exception"
  aria-labelledby="list-heading">
  …
</ul>
```

L'attribut `role` aide les technologies d'assistance à expliquer le type d'élément qu'une balise représente. Par défaut, une balise `<ul>` est traitée comme une liste, mais les styles que nous allons ajouter vont casser cette fonctionnalité. Ce rôle va restaurer la signification "liste" de la balise `<ul>`. Si vous voulez en savoir plus sur la raison pour laquelle cela est nécessaire, vous pouvez consulter l'article de [Scott O'Hara, <i lang="en">Fixing Lists</i> (en anglais)](https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html).

L'attribut `aria-labelledby` indique aux technologies d'assistance que nous traitons notre en-tête de liste comme une étiquette qui décrit l'objectif de la liste en dessous. Cette association donne à la liste un contexte plus informatif, qui peut aider les utilisatrices et utilisateurs de lecteurs d'écran à mieux comprendre l'objectif de celle-ci.

Enfin, les libellés et les champs de saisie dans nos éléments de liste sont dotés d'attributs propres à JSX&nbsp;:

```jsx
<input id="todo-0" type="checkbox" defaultChecked={true} />
<label className="todo-label" htmlFor="todo-0">
  Eat
</label>
```

L'attribut `defaultChecked` dans la balise `<input/ >` indique à React de cocher cette case initialement. Si nous utilisions `checked`, comme pour du HTML normal, React diffuserait des avertissements dans la console de notre navigateur concernant la gestion des évènements sur la case à cocher, ce que nous voulons éviter. Ne vous inquiétez pas trop de ça pour l'instant, nous en parlerons plus tard lorsque nous aborderons l'utilisation des évènements.

L'attribut `htmlFor` correspond à l'attribut `for` utilisé en HTML. Il n'est pas possible d'utiliser `for` comme attribut en JSX, car `for` est un mot réservé en JavaScript, React utilise donc `htmlFor` à la place.

> **Note :** Pour utiliser des valeurs booléennes (`true` and `false`) dans les attributs JSX, vous devez les mettre entre accolades. Si vous écrivez `defaultChecked="true"`, la valeur de `defaultChecked` sera `"true"`&nbsp;: une chaine de caractère. Souvenez-vous, ce qui est écrit en JSX est interprété comme du JavaScript, pas comme du HTML&nbsp;!

> **Note :** L'attribut `aria-pressed` utilisé dans notre exemple de code précédent vaut `"true"` parce que `aria-pressed` n'est pas un véritable attribut booléen comme `checked`.

### Implémenter la mise en forme

Collez le code CSS suivant dans `src/index.css` afin qu'il remplace ce qui y est actuellement&nbsp;:

```css
/* Réinitialisations */
*,
*::before,
*::after {
  box-sizing: border-box;
}
*:focus {
  outline: 3px dashed #228bec;
  outline-offset: 0;
}
html {
  font: 62.5% / 1.15 sans-serif;
}
h1,
h2 {
  margin-bottom: 0;
}
ul {
  list-style: none;
  padding: 0;
}
button {
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  appearance: none;
}
button::-moz-focus-inner {
  border: 0;
}
button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}
button,
input {
  overflow: visible;
}
input[type="text"] {
  border-radius: 0;
}
body {
  width: 100%;
  max-width: 68rem;
  margin: 0 auto;
  font:
    1.6rem/1.25 Arial,
    sans-serif;
  background-color: #f5f5f5;
  color: #4d4d4d;
}
@media screen and (min-width: 620px) {
  body {
    font-size: 1.9rem;
    line-height: 1.31579;
  }
}
/* Fin des réinitialisations */
/* Styles globaux */
.form-group > input[type="text"] {
  display: inline-block;
  margin-top: 0.4rem;
}
.btn {
  padding: 0.8rem 1rem 0.7rem;
  border: 0.2rem solid #4d4d4d;
  cursor: pointer;
  text-transform: capitalize;
}
.btn.toggle-btn {
  border-width: 1px;
  border-color: #d3d3d3;
}
.btn.toggle-btn[aria-pressed="true"] {
  text-decoration: underline;
  border-color: #4d4d4d;
}
.btn__danger {
  color: #fff;
  background-color: #ca3c3c;
  border-color: #bd2130;
}
.btn__filter {
  border-color: lightgrey;
}
.btn__primary {
  color: #fff;
  background-color: #000;
}
.btn-group {
  display: flex;
  justify-content: space-between;
}
.btn-group > * {
  flex: 1 1 49%;
}
.btn-group > * + * {
  margin-left: 0.8rem;
}
.label-wrapper {
  margin: 0;
  flex: 0 0 100%;
  text-align: center;
}
.visually-hidden {
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap;
}
[class*="stack"] > * {
  margin-top: 0;
  margin-bottom: 0;
}
.stack-small > * + * {
  margin-top: 1.25rem;
}
.stack-large > * + * {
  margin-top: 2.5rem;
}
@media screen and (min-width: 550px) {
  .stack-small > * + * {
    margin-top: 1.4rem;
  }
  .stack-large > * + * {
    margin-top: 2.8rem;
  }
}
.stack-exception {
  margin-top: 1.2rem;
}
/* Fin des styles globaux */
.todoapp {
  background: #fff;
  margin: 2rem 0 4rem 0;
  padding: 1rem;
  position: relative;
  box-shadow:
    0 2px 4px 0 rgba(0, 0, 0, 0.2),
    0 2.5rem 5rem 0 rgba(0, 0, 0, 0.1);
}
@media screen and (min-width: 550px) {
  .todoapp {
    padding: 4rem;
  }
}
.todoapp > * {
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;
}
.todoapp > form {
  max-width: 100%;
}
.todoapp > h1 {
  display: block;
  max-width: 100%;
  text-align: center;
  margin: 0;
  margin-bottom: 1rem;
}
.label__lg {
  line-height: 1.01567;
  font-weight: 300;
  padding: 0.8rem;
  margin-bottom: 1rem;
  text-align: center;
}
.input__lg {
  padding: 2rem;
  border: 2px solid #000;
}
.input__lg:focus {
  border-color: #4d4d4d;
  box-shadow: inset 0 0 0 2px;
}
[class*="__lg"] {
  display: inline-block;
  width: 100%;
  font-size: 1.9rem;
}
[class*="__lg"]:not(:last-child) {
  margin-bottom: 1rem;
}
@media screen and (min-width: 620px) {
  [class*="__lg"] {
    font-size: 2.4rem;
  }
}
/* Todo item styles */
.todo {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.todo > * {
  flex: 0 0 100%;
}
.todo-text {
  width: 100%;
  min-height: 4.4rem;
  padding: 0.4rem 0.8rem;
  border: 2px solid #565656;
}
.todo-text:focus {
  box-shadow: inset 0 0 0 2px;
}
/* Styles pour les cases à cocher */
.c-cb {
  box-sizing: border-box;
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.25;
  display: block;
  position: relative;
  min-height: 44px;
  padding-left: 40px;
  clear: left;
}
.c-cb > label::before,
.c-cb > input[type="checkbox"] {
  box-sizing: border-box;
  top: -2px;
  left: -2px;
  width: 44px;
  height: 44px;
}
.c-cb > input[type="checkbox"] {
  -webkit-font-smoothing: antialiased;
  cursor: pointer;
  position: absolute;
  z-index: 1;
  margin: 0;
  opacity: 0;
}
.c-cb > label {
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
  display: inline-block;
  margin-bottom: 0;
  padding: 8px 15px 5px;
  cursor: pointer;
  touch-action: manipulation;
}
.c-cb > label::before {
  content: "";
  position: absolute;
  border: 2px solid currentcolor;
  background: transparent;
}
.c-cb > input[type="checkbox"]:focus + label::before {
  border-width: 4px;
  outline: 3px dashed #228bec;
}
.c-cb > label::after {
  box-sizing: content-box;
  content: "";
  position: absolute;
  top: 11px;
  left: 9px;
  width: 18px;
  height: 7px;
  transform: rotate(-45deg);
  border: solid;
  border-width: 0 0 5px 5px;
  border-top-color: transparent;
  opacity: 0;
  background: transparent;
}
.c-cb > input[type="checkbox"]:checked + label::after {
  opacity: 1;
}
```

Sauvegardez puis rechargez la page dans votre navigateur, vous pourrez voir que l'application possède un style plus approprié.

## Résumé

Notre application de liste de tâches (<i lang="en">todo list</i>) ressemble un peu plus à une véritable application&nbsp;! Mais voilà le problème&nbsp;: concrètement, elle ne permet de rien faire. Nous commencerons à corriger ceci dans le prochain chapitre&nbsp;!

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
