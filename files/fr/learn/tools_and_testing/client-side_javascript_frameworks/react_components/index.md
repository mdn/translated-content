---
title: Organiser notre application React
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components
tags:
  - Beginner
  - Frameworks
  - JavaScript
  - Learn
  - React
  - client-side
  - events
  - interactivity
  - state
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Jusqu'à présent, notre application est monolith. Avant de pouvoir lui faire faire des choses, nous devons la décomposer en composants gérables et descriptifs. React n'a pas de règles strictes sur ce qui est et n'est pas un composant – c'est à vous de décider ! Dans cet article, nous allons vous montrer une façon judicieuse de décomposer notre application en composants.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis:</th>
      <td>
        <p>
          Être familier avec les languages <a href="/en-US/docs/Learn/HTML">HTML</a>,
          <a href="/en-US/docs/Learn/CSS">CSS</a>, , et
          <a href="/fr/docs/Learn/JavaScript">JavaScript</a>,
          connaitre le
          <a
            href="/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >terminal/command line</a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs:</th>
      <td>
        Montrer comment casser notre application monolith (todo list) en différents composants.
      </td>
    </tr>
  </tbody>
</table>

## Définir notre premier composant

Définir un composant peut sembler délicate jusqu'à ce que vous ayez un peu de pratique, mais l'essentiel est le suivant :

- S'il représente un "morceau" évident de votre application, il s'agit probablement d'un composant.
- S'il est souvent réutilisé, il s'agit probablement d'un composant.

Le deuxième point est particulièrement précieux : la création d'un composant à partir d'éléments communs de l'interface utilisateur vous permet de modifier votre code à un seul endroit et de voir ces modifications partout où ce composant est utilisé. Vous n'êtes pas non plus obligé de tout décomposer en composants tout de suite. Inspirons-nous du deuxième point et créons un composant à partir de l'élément le plus réutilisé et le plus important de l'interface utilisateur : un élément de liste de tâches.

## Faire un `<Todo />`

Avant de pouvoir créer un composant, nous devons créer un nouveau fichier pour celui-ci. En fait, nous devrions créer un répertoire juste pour nos composants. Les commandes suivantes créent un répertoire `components` et ensuite, à l'intérieur de celui-ci, un fichier appelé `Todo.js`. Assurez-vous d'être à la racine de votre application avant de les exécuter !

```bash
mkdir src/components
touch src/components/Todo.js
```

Notre nouveau fichier `Todo.js` est actuellement vide ! Ouvrez le et ajouter cette première ligne:

```jsx
import React from "react";
```

Puisque nous allons créer un composant appelé `Todo`, vous pouvez commencer à ajouter le code à `Todo.js` aussi, comme suit. Dans ce code, nous définissons la fonction et l'exportons sur la même ligne :

```jsx
export default function Todo() {
  return (
    // …
  );
}
```

C'est correct jusqu'à présent, mais notre composant doit retourner quelque chose ! Retournez à `src/App.js`, copier le premier [`<li>`](/en-US/docs/Web/HTML/Element/li) de la liste non ordonnée, et le coller dans `Todo.js` pour qu'il se lise comme ceci ::

```jsx
export default function Todo() {
  return (
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
  );
}
```

> **Remarque:** Les composants doivent toujours retourner quelque chose. Si, à un moment donné, vous essayez de rendre un composant qui ne renvoie rien, React affichera une erreur dans votre navigateur.

Notre composant `Todo` est terminé, du moins pour l'instant; maintenant nous pouvons l'utiliser. Dans `App.js`, ajoutez la ligne suivante en haut du fichier pour importer `Todo`:

```jsx
import Todo from "./components/Todo";
```

Avec ce composant importé, vous pouvez remplacer toutes les balises `<li>` dans `App.js` avec le composant importé `<Todo />`. Votre balise `<ul>` doit être comme ceci:

```jsx
<ul
  role="list"
  className="todo-list stack-large stack-exception"
  aria-labelledby="list-heading"
>
  <Todo />
  <Todo />
  <Todo />
</ul>
```

Lorsque vous retournez sur votre naviguateur, vous remarquerez quelque chose de fâcheux : votre liste répète maintenant la première tâche trois fois !

![Our todo list app, with todo components repeating because the label is hardcoded into the component](todo-list-repeating-todos.png)

Nous ne voulons pas seulement manger (`Eat`); nous avons d'autres choses à faire. Ensuite, nous verrons comment faire en sorte que différents appels de composants rendent un contenu unique.

## Faire un unique `<Todo />`

Les composants sont puissants car ils nous permettent de réutiliser des éléments de notre interface utilisateur et de nous référer à un seul endroit pour la source de cette interface. Le problème est que nous ne voulons généralement pas réutiliser la totalité de chaque composant; nous voulons réutiliser la plupart des parties, et changer de petits morceaux. C'est là que les props interviennent.

### Qu'est-ce qu'un `name`?

Afin de suivre les noms des tâches que nous voulons accomplir, nous devons nous assurer que chaque composant `<Todo />` rend un nom unique.

Dans `App.js`, donner à chaque `<Todo />` une prop `name`. Utilisons les noms de nos tâches que nous avions auparavant:

```jsx
<Todo name="Eat" />
<Todo name="Sleep" />
<Todo name="Repeat" />
```

Lorsque votre navigateur se rafraîchira, vous verrez... exactement la même chose que précédemment. Nous avons donné à notre `<Todo />` quelques accessoires, mais nous ne les utilisons pas encore. Retournons dans `Todo.js` et remédions à cela.

Tout d'abord, modifiez la définition de votre fonction `Todo()` pour qu'elle prenne `props` en paramètre. Vous pouvez utiliser `console.log()` vos `props` comme nous l'avons fait précédemment, si vous souhaitez vérifier qu'ils sont correctement reçus par le composant.

Une fois que vous êtes sûr que votre composant reçoit bien ses `props`, vous pouvez remplacer chaque occurrence de `Eat` par votre `name` prop. Rappelez-vous : lorsque vous êtes au milieu d'une expression JSX, vous utilisez des accolades pour injecter la valeur d'une variable.

En mettant tout cela ensemble, votre fonction `Todo()` devrait se lire comme ceci :

```jsx
export default function Todo(props) {
  return (
    <li className="todo stack-small">
      <div className="c-cb">
        <input id="todo-0" type="checkbox" defaultChecked={true} />
        <label className="todo-label" htmlFor="todo-0">
          {props.name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn">
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button type="button" className="btn btn__danger">
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </li>
  );
}
```

_Maintenant_, votre navigateur devrait afficher trois tâches uniques. Un autre problème subsiste cependant: elles sont toujours cochées par défaut.

![Our todo list, with different todo labels now they are passed into the components as props](todo-list-unique-todos.png)

### Est-ce terminé (`completed`)?

Dans notre liste statique originale, seul `Eat` était coché. Encore une fois, nous voulons réutiliser _la plupart_ de l'interface utilisateur qui compose un composant `<Todo />`, mais changer une chose. C'est un bon travail pour un autre prop ! Donnez à chaque appel `<Todo />` dans `App.js` une nouvelle prop de `completed`. La première (`Eat`) devrait avoir la valeur `true`; les autres devraient être `false` :

```jsx
<Todo name="Eat" completed={true} />
<Todo name="Sleep" completed={false} />
<Todo name="Repeat" completed={false} />
```

Comme précédemment, nous devons retourner dans `Todo.js` pour utiliser réellement ces props. Changez l'attribut `defaultChecked` sur le `<input />` pour que sa valeur soit égale à la prop `completed`. Une fois que vous avez terminé, l'élément `<input />` du composant Todo se présentera comme suit :

```jsx
<input id="todo-0" type="checkbox" defaultChecked={props.completed} />
```

Et votre naviguateur mettra à jour et montra seulement `Eat` comme coché:

![Our todo list app, now with differing checked states - some checkboxes are checked, others not](todo-list-differing-checked-states.png)

Si vous changez chaque composant `<Todo />` avec la prop `completed`, votre naviguateur cochera ou decochera chaque checkboxes en même temps.

### Donnez un `id`, svp

Mantenant que, notre composant `<Todo />` donne à toutes les tâches un attribut `id` avec la valeur `todo-0`. C'est un mauvais HTML car les attributs [`id`](/en-US/docs/Web/HTML/Global_attributes/id) doivent être uniques (ils sont utilisés comme identifiants uniques pour les fragments de document, par CSS, JavaScript, etc.) Cela signifie que nous devons donner à notre composant une prop `id` qui prend une valeur unique pour chaque `Todo`.

Pour suivre le même schéma qu'au départ, donnons à chaque instance du composant `<Todo />` un ID au format `todo-i`, où `i` est incrementé d'une unité à chaque fois:

```jsx
<Todo name="Eat" completed={true} id="todo-0" />
<Todo name="Sleep" completed={false} id="todo-1" />
<Todo name="Repeat" completed={false} id="todo-2" />
```

Retournez maintenant dans `Todo.js` et utilisez la prop `id`. Il doit remplacer la valeur de l'attribut `id` de l'élément `<input />`, ainsi que la valeur de l'attribut `htmlFor` de son label:

```jsx
<div className="c-cb">
  <input id={props.id} type="checkbox" defaultChecked={props.completed} />
  <label className="todo-label" htmlFor={props.id}>
    {props.name}
  </label>
</div>
```

## Jusqu'ici, tout va bien ?

Nous faisons un bon usage de React jusqu'à présent, mais nous pouvons faire mieux ! Notre code est répétitif. Les trois lignes qui rendent notre composant `<Todo />` sont presque identiques, avec une seule différence : la valeur de chaque prop.

Nous pouvons nettoyer notre code grâce à l'une des capacités principales de JavaScript : l'itération. Pour utiliser l'itération, nous devons d'abord repenser nos tâches.

## Tâches comme données

Chacune de nos tâches contient actuellement trois informations : son nom, si elle a été vérifiée, et son ID unique. Ces données se traduisent bien par un objet. Puisque nous avons plus d'une tâche, un tableau d'objets fonctionnerait bien pour représenter ces données.

Dans `src/index.js`, créez un nouveau `const` sous l'import final, mais au-dessus de `ReactDOM.render()`:

```jsx
const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false }
];
```

Ensuite, nous allons passer `DATA` à `<App />` en tant que prop, appelé `tasks`. La dernière ligne de `src/index.js` devrait ressembler à ceci :

```jsx
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>
);
```

Ce tableau est maintenant disponible pour le composant App en tant que `props.tasks`. Vous pouvez `console.log()` le vérifier, si vous le souhaitez.

> **Remarque:** Les noms de constantes `ALL_CAPS` n'ont pas de signification particulière en JavaScript; il s'agit d'une convention qui indique aux autres développeurs que "cette donnée ne changera jamais après avoir été définie ici".

## Rendu avec itération

Pour rendre notre tableau d'objets, nous devons transformer chacun d'eux en un composant `<Todo />`. JavaScript nous offre une méthode de transformation des données en quelque chose d'autre: [`Array.prototype.map()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

Pour rendre notre tableau d'objets, nous devons transformer chacun d'eux en un composant `<Todo />`. JavaScript nous offre une méthode de transformation des données en quelque chose d'autre:

```jsx
const taskList = props.tasks?.map((task) => task.name);
```

Essayons de remplacer tous les enfants de `<ul>` par `taskList`:

```jsx
<ul
  role="list"
  className="todo-list stack-large stack-exception"
  aria-labelledby="list-heading"
>
  {taskList}
</ul>
```

Cela nous permet d'afficher à nouveau tous les composants, mais nous avons encore du travail à faire : le navigateur rend actuellement le nom de chaque tâche sous forme de texte non structuré. Il nous manque notre structure HTML - le `<li>` et ses cases à cocher et boutons !

![Our todo list app with the todo item labels just shown bunched up on one line](todo-list-unstructured-names.png)

Pour résoudre ce problème, nous devons retourner un composant `<Todo />` depuis notre fonction `map()` - rappelez-vous que JSX nous permet de mélanger les structures JavaScript et de balisage ! Essayons ce qui suit au lieu de ce que nous avons déjà :

```jsx
  const taskList = props.tasks.map((task) => <Todo />);
```

Regardez à nouveau votre application ; maintenant nos tâches ressemblent plus à ce qu'elles étaient, mais il manque les noms des tâches elles-mêmes. Rappelez-vous que chaque tâche que nous mappons possède les propriétés `id`, `name`, et `completed` que nous voulons passer dans notre composant `<Todo />`. Si nous rassemblons toutes ces connaissances, nous obtenons un code comme celui-ci :

```jsx
const taskList = props.tasks.map((task) => (
  <Todo id={task.id} name={task.name} completed={task.completed} />
));
```

Maintenant l'application ressemble à ce qu'elle était avant, et notre code est moins répétitif.

## Clés uniques

Maintenant que React rend nos tâches dans un tableau, il doit garder la trace de chacune d'entre elles afin de les rendre correctement. React essaie de faire ses propres suppositions pour garder la trace des choses, mais nous pouvons l'aider en passant une prop `key` à nos composants `<Todo />`. `key` est une propriété spéciale qui est gérée par React - vous ne pouvez pas utiliser le mot `key` dans un autre but.

Parce que les clés doivent être uniques, nous allons réutiliser le `id` de chaque objet de tâche comme clé. Mettez à jour votre constante `taskList` comme ceci:

```jsx
const taskList = props.tasks.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
    />
  )
);
```

**Vous devez toujours passer une clé unique à tout ce que vous rendez avec l'itération.** Rien d'évident ne changera dans votre navigateur, mais si vous n'utilisez pas de clés uniques, React enregistrera des avertissements dans votre console et votre application pourra se comporter de manière étrange !

## Composer le reste de l'application

Maintenant que nous avons mis au point notre composant le plus important, nous pouvons transformer le reste de notre application en composants. En nous rappelant que les composants sont soit des éléments d'interface utilisateur évidents, soit des éléments d'interface utilisateur réutilisés, soit les deux, nous pouvons créer deux autres composants :

- `<Form/>`
- `<FilterButton/>`

Puisque nous savons que nous avons besoin des deux, nous pouvons regrouper une partie du travail de création de fichiers avec une commande de terminal. Exécutez cette commande dans votre terminal, en prenant soin de vous placer dans le répertoire racine de votre application:

```bash
touch src/components/Form.js src/components/FilterButton.js
```

### Le composant `<Form />`

Ouvrir `components/Form.js` et faire ce qui suit:

- Importez `React` en haut du fichier, comme nous l'avons fait dans `Todo.js`.
- Créez un nouveau composant `Form()` avec la même structure de base que `Todo()`, et exportez ce composant.
- Copiez les balises `<form>` et tout ce qui se trouve entre elles depuis `App.js`, et collez-les dans l'instruction `return` de `Form()`.
- Exportez `Form` à la fin du fichier.

Votre fichier `Form.js` devrait se lire comme ceci :

```jsx
import React from "react";

function Form(props) {
  return (
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
  );
}

export default Form;
```

### Le composant \<FilterButton />

Faites la même chose que pour créer `Form.js` à l'intérieur de `FilterButton.js`, mais appelez le composant `FilterButton()` et copiez le HTML du premier bouton à l'intérieur de l'élément `<div>` avec la `class` de `filters` de `App.js` dans l'instruction `return`.

Le fichier devrait se lire comme ceci :

```jsx
import React from "react";

function FilterButton(props) {
  return (
    <button type="button" className="btn toggle-btn" aria-pressed="true">
      <span className="visually-hidden">Show </span>
      <span>all </span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}

export default FilterButton;
```

> **Remarque:** Vous remarquerez peut-être que nous faisons ici la même erreur que pour le composant `<Todo />`, en ce sens que chaque bouton sera le même. Ce n'est pas grave ! Nous allons corriger ce composant plus tard, dans la section [Back to the filter buttons](/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering#back_to_the_filter_buttons).

## Importation de tous nos composants

Utilisons nos nouveaux composants.

Ajoutez quelques instructions `import` au début de `App.js`, pour les importer.

Ensuite, mettez à jour l'instruction `return` de `App()` pour qu'elle rende nos composants. Lorsque vous aurez terminé, le fichier `App.js` ressemblera à ceci :

```jsx
import React from "react";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";

function App(props) {
  const taskList = props.tasks.map((task) => (
    <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
      />
    )
  );
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;
```

Avec cela en place, nous sommes _presque_ prêts à aborder l'interactivité dans notre application React !

## Résumé

Et c'est tout pour cet article - nous avons approfondi la façon de décomposer votre application en composants et de les rendre efficacement. Nous allons maintenant examiner comment gérer les événements dans React et commencer à ajouter de l'interactivité.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
