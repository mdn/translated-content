---
title: Débuter notre React todo list
slug: >-
  Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning
tags:
  - React
translation_of: >-
  Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Disons que nous avons pour mission de créer une preuve de concept en React - une application qui permet aux utilisateurs d'ajouter, de modifier et de supprimer des tâches sur lesquelles ils veulent travailler, ainsi que de marquer les tâches comme terminées sans les supprimer. Cet article vous guidera pour mettre en place la structure de base et la mise en forme du composant App, prêt pour la définition et l'interactivité des composants individuels, que nous ajouterons plus tard.

> **Remarque :** Si vous avez besoin de vérifier votre code par rapport à notre version, vous pouvez trouver une version terminée du code de l'application React échantillon dans notre dépôt [todo-react repository](https://github.com/mdn/todo-react). Pour une version en direct, consultez <https://mdn.github.io/todo-react-build/>.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis:</th>
      <td>
        <p>
          Être familier avec les languages <a href="/fr/docs/Learn/HTML">HTML</a>,
          <a href="/fr/docs/Learn/CSS">CSS</a>, et
          <a href="/fr/docs/Learn/JavaScript">JavaScript</a>,
          connaitre le
          <a
            href="/fr/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >terminal/command line</a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs:</th>
      <td>
        Pour présenter notre étude de cas de liste de tâches à faire (todo list) et mettre en place la structure de base et le style de l'<code>App</code>.
      </td>
    </tr>
  </tbody>
</table>

## Les user stories de notre appplication

Dans le développement de logiciels, une user story est un objectif réalisable du point de vue de l'utilisateur. Définir les user stories avant de commencer notre travail nous aidera à concentrer notre travail. Notre application doit répondre aux spécifications suivantes:

En tant qu'utilisateur, je peux

- lire une liste de tâches.
- ajouter une tâche en utilisant la souris ou le clavier.
- marquer une tâche comme completé, en utilisant la souris ou le clavier.
- supprimer n'importe quelle tâche, en utilisant la souris ou le clavier.
- modifier n'importe quelle tâche, en utilisant la souris ou le clavier.
- afficher un sous-ensemble spécifique de tâches : Toutes les tâches, seulement la tâche active ou seulement les tâches terminées.

Nous aborderons ces spécifications une par une.

## Pre-projet housekeeping

create-react-app a créé quelques fichiers que nous n'utiliserons pas du tout pour notre projet.

- Nous ne créerons pas de feuilles de style pour chaque composant, donc supprimez d'abord l'importation de `App.css` en haut de `App.js`.
- Nous n'utiliserons pas non plus le fichier `logo.svg`, donc supprimez également cette importation.

Ensuite, copiez et collez les commandes suivantes dans votre terminal pour supprimer certains fichiers inutiles. Assurez-vous de démarrer dans le répertoire racine de l'application!

```bash
# Déplacez-vous dans le repertoire src de votre projet
cd src
# Supprimez les fichiers suivants
rm -- App.test.js App.css logo.svg serviceWorker.js setupTests.js
# Revenir dans le repertoire racine de votre projet
cd ..
```

Notes:

- Deux des fichiers que nous avons supprimé sont destinés à tester l'application. Nous ne ferons pas de tests ici.
- Si vous avez arrêté votre serveur pour effectuer les tâches de terminal mentionnées ci-dessus, vous devrez le redémarrer en utilisant `npm start`.

## Démarrage du code de notre projet

Comme point de départ pour ce projet, nous allons fournir deux choses : une fonction `App()` pour remplacer celle que vous avez actuellement, et un peu de CSS pour styliser votre application.

### Le JSX

Copiez le fragment de code suivant, puis collez-le dans `App.js` afin qu'il remplace la fonction `App()` existante:

```js
function App(props) {
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
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
          Add
        </button>
      </form>
      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>all</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div>
      <h2 id="list-heading">
        3 tasks remaining
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-0" type="checkbox" defaultChecked={true} />
            <label className="todo-label" htmlFor="todo-0">
              Eat
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Eat</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Eat</span>
            </button>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-1" type="checkbox" />
            <label className="todo-label" htmlFor="todo-1">
              Sleep
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Sleep</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Sleep</span>
            </button>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-2" type="checkbox" />
            <label className="todo-label" htmlFor="todo-2">
              Repeat
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Repeat</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Repeat</span>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
```

Ouvrir maintenant `public/index.html` et changez l'élément [`<title>`](/fr/docs/Web/HTML/Element/title) pour `TodoMatic`. De cette façon, cela correspondra à la balise [`<h1>`](/fr/docs/Web/HTML/Element/Heading_Elements) en haut de notre application.

```html
<title>TodoMatic</title>
```

Lorsque votre naviguateur rafraichit, vous pouvez voir quelque chose comme ceci:

![todo-matic app, unstyled, showing a jumbled mess of labels, inputs, and buttons](unstyled-app.png)

C'est laid et cela ne fonctionne pas encore, mais ce n'est pas grave - nous allons le styliser dans un instant. Tout d'abord, considérez le JSX que nous avons et comment il correspond à nos user stories:

- Nous avons une balise [`<form>`](/fr/docs/Web/HTML/Element/form), avec une balise [`<input type="text">`](/fr/docs/Web/HTML/Element/input/text) pour faire une nouvelle tâche, et un boutton pour soumettre le formulaire.
- Nous avons une série de boutons qui seront utilisés pour filtrer nos tâches.
- Nous avons également un en-tête qui nous indique combien de tâches restent à faire.
- Nos trois (3) tâches sont présentées sous forme de liste non-ordonnée. Chaque tâche est un élément de liste ([`<li>`](/fr/docs/Web/HTML/Element/li)), et dispose de boutons pour la modifier et la supprimer, ainsi qu'une case à cocher pour la marquer comme terminé.

Le formulaire nous permettra de _créer_ des tâches; les boutons nous permettront de les _filtrer_; l'en-tête et la liste seront notre moyen de les _lire_ them. L'interface utilisateur pour l'_édition_ d'une tâche est manifestement absente pour le moment. C'est bon - nous l'écrirons plus tard.

### Fonctionnalités d'accessibilité

Vous pourriez remarquer ici certaines attributs inhabituelles. Par exemple:

```html
<button type="button" className="btn toggle-btn" aria-pressed="true">
  <span className="visually-hidden">Show </span>
  <span>all</span>
  <span className="visually-hidden"> tasks</span>
</button>
```

Ici, `aria-pressed` indique à la technologie d'assistance (comme les lecteurs d'écran) que le bouton peut être dans l'un des deux états: `pressed` or `unpressed`. Pensez à ces états comme des analogues pour `on` et `off`. Le fait de définir une valeur `true` signifie que le bouton est pressé par défaut.

La classe `visually-hidden` n'a pas encore d'effet, car nous n'avons pas inclus de CSS. Une fois que nous aurons mis en place nos styles, tout élément avec cette classe sera caché aux utilisateurs voyants et toujours disponible pour les utilisateurs de lecteurs d'écran - cela est dû au fait que ces mots ne sont pas nécessaires pour les utilisateurs voyants ; ils sont là pour fournir plus d'informations sur ce que fait le bouton pour les utilisateurs de lecteurs d'écran qui n'ont pas le contexte visuel supplémentaire pour les aider.

Plus bas, vous pouvez trouver notre balise [`<ul>`](/fr/docs/Web/HTML/Element/ul):

```html
<ul
  role="list"
  className="todo-list stack-large stack-exception"
  aria-labelledby="list-heading"
>
```

L'attribut `role` aide les technologies d'assistance à expliquer le type d'élément qu'une balise représente. Par défaut, une balise `<ul>` est traitée comme une liste, mais les styles que nous allons ajouter vont rompre cette fonctionnalité. Ce rôle va restaurer la signification "liste" de la balise `<ul>`. Si vous voulez en savoir plus sur la raison pour laquelle cela est nécessaire, vous pouvez consulter l'article de [Scott O'Hara’s article, “Fixing Lists”](https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html).

L'attribut `aria-labelledby` indique aux technologies d'assistance que nous traitons notre en-tête de liste comme une étiquette qui décrit l'objectif de la liste en dessous. Cette association donne à la liste un contexte plus informatif, ce qui pourrait aider les utilisateurs de lecteurs d'écran à mieux comprendre l'objectif de celle-ci.

Enfin, les `label` et les `input` dans nos éléments de liste ont quelques attributs uniques à JSX:

```html
<input id="todo-0" type="checkbox" defaultChecked={true} />
<label className="todo-label" htmlFor="todo-0">
  Eat
</label>
```

L'attribut `defaultChecked` dans la balise `<input/ >`  indique à React de cocher cette case à cocher initialement. Si nous utilisons `checked`, comme nous le ferons dans du HTML basique, React diffuserais des avertissements dans la console de notre navigateur concernant la gestion des événements sur le checkbox, ce que nous voulons éviter. Ne vous inquiétez pas trop poour l'instant — nous en parlerons olus tard lorsque nous arriverons à l'utilisation des événements.

L'attribut `htmlFor` correspond à l'attribut `for` utilisé en HTML. Il n'est pas possible d'utiliser le `for` comme attribut en JSX car le `for` est un mot réservé, alors React utilise `htmlFor` à la place.

Remarques:

- Pour utiliser des valeurs booléennes (`true` and `false`) dans les attributs JSX, vous devez les mettres entre accolades. Si vous écrivez `defaultChecked="true"`, la valeur de `defaultChecked` sera `"true"` — une chaine de caractère. Souvenez-vous — il s'agit actuellement de JavaScript, pas de HTML!
- L'attribut `aria-pressed` utilisé dans notre exemple de code précédent a une valeur `"true"` parce que `aria-pressed` n'est pas un véritable attribut booléen comme `checked`.

### Implémentation de nos styles

Collez le code CSS suivant dans`src/index.css` afin qu'il remplace ce qui est là actuellement:

```css
/* RESETS */
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
  -webkit-appearance: none;
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
  font: 1.6rem/1.25 Arial, sans-serif;
  background-color: #f5f5f5;
  color: #4d4d4d;
}
@media screen and (min-width: 620px) {
  body {
    font-size: 1.9rem;
    line-height: 1.31579;
  }
}
/*END RESETS*/
/* GLOBAL STYLES */
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
/* END GLOBAL STYLES */
.todoapp {
  background: #fff;
  margin: 2rem 0 4rem 0;
  padding: 1rem;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2.5rem 5rem 0 rgba(0, 0, 0, 0.1);
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
.filters {
  width: 100%;
  margin: unset auto;
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
/* CHECKBOX STYLES */
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
  border: 2px solid currentColor;
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

Sauvegarder et regarder votre naviguateur, et votre application aura un style plus raisonnable.

## Résumé

Notre application de tâche à faire (todo list) ressemble un peu plus à une véritable application ! Le problème est que: cela ne fait rien du tout en réalité. Nous commencerons à corriger cela dans le prochain chapitre.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

## Dans ce module

- [Introduction to client-side frameworks](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction)
- [Framework main features](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features)
- React

  - [Getting started with React](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)
  - [Beginning our React todo list](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning)
  - [Componentizing our React app](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components)
  - [React interactivity: Events and state](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state)
  - [React interactivity: Editing, filtering, conditional rendering](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering)
  - [Accessibility in React](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility)
  - [React resources](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources)

- Ember

  - [Getting started with Ember](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started)
  - [Ember app structure and componentization](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_structure_componentization)
  - [Ember interactivity: Events, classes and state](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_interactivity_events_state)
  - [Ember Interactivity: Footer functionality, conditional rendering](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_conditional_footer)
  - [Routing in Ember](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_routing)
  - [Ember resources and troubleshooting](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources)

- Vue

  - [Getting started with Vue](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started)
  - [Creating our first Vue component](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component)
  - [Rendering a list of Vue components](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists)
  - [Adding a new todo form: Vue events, methods, and models](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_methods_events_models)
  - [Styling Vue components with CSS](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_styling)
  - [Using Vue computed properties](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties)
  - [Vue conditional rendering: editing existing todos](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering)
  - [Focus management with Vue refs](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_refs_focus_management)
  - [Vue resources](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources)

- Svelte

  - [Getting started with Svelte](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started)
  - [Starting our Svelte Todo list app](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_Todo_list_beginning)
  - [Dynamic behavior in Svelte: working with variables and props](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_variables_props)
  - [Componentizing our Svelte app](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_components)
  - [Advanced Svelte: Reactivity, lifecycle, accessibility](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_reactivity_lifecycle_accessibility)
  - [Working with Svelte stores](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores)
  - [TypeScript support in Svelte](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript)
  - [Deployment and next steps](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next)
