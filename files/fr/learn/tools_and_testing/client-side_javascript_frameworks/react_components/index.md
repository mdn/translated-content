---
title: Organiser notre application React en composants
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components
l10n:
  sourceCommit: 06754bc607017d19a7f088df7d6b0b7b635cbe58
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Jusqu'à présent, notre application est monolithique. Avant de pouvoir en faire quelque chose, nous devons la scinder en composants gérables et descriptifs. React n'a pas de règles strictes sur ce qui est et n'est pas un composant&nbsp;: c'est à vous de décider&nbsp;! Dans cet article, nous allons vous montrer une façon judicieuse de diviser notre application en composants.

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
        Illustrer une méthode adaptée pour scinder notre application de liste de tâches en différents composants.
      </td>
    </tr>
  </tbody>
</table>

## Définir notre premier composant

Définir un composant peut sembler délicat avant d'avoir eu un peu de pratique, le principe de base peut se résumer ainsi&nbsp;:

- S'il représente un «&nbsp;morceau&nbsp;» évident de votre application, il s'agit probablement d'un composant.
- S'il est souvent réutilisé, il s'agit probablement d'un composant.

Le deuxième point est particulièrement précieux&nbsp;: la création d'un composant à partir d'éléments communs de l'interface utilisateur vous permet de modifier votre code à un seul endroit et de voir ces modifications propagées partout où ce composant est utilisé. Il n'y a pas d'obligation non plus à tout décomposer en composants tout de suite. Inspirons-nous du deuxième point et créons un composant à partir de l'élément le plus réutilisé et le plus important de l'interface utilisateur&nbsp;: un élément de la liste de tâches.

## Construire un composant `<Todo />`

Avant de pouvoir créer un composant, nous devons créer un nouveau fichier pour celui-ci. En fait, mieux vaut créer un répertoire dédié à nos composants. Les commandes suivantes créent un répertoire `components` puis un fichier appelé `Todo.js` dans ce nouveau répertoire. Assurez-vous d'être à la racine de votre application avant de les exécuter&nbsp;!

```bash
mkdir src/components
touch src/components/Todo.js
```

Notre nouveau fichier `Todo.js` est actuellement vide&nbsp;! Ouvrez-le et ajoutez cette première ligne&nbsp;:

```jsx
import React from "react";
```

Puisque nous allons créer un composant appelé `Todo`, nous pouvons commencer à ajouter le code de ce composant dans ce fichier comme suit. Dans ce code, nous définissons la fonction et l'exportons sur la même ligne&nbsp;:

```jsx
export default function Todo() {
  return (
    // …
  );
}
```

Jusque-là tout va bien, mais notre composant doit retourner quelque chose&nbsp;! Retournez au fichier `src/App.js`, copiez le premier [`<li>`](/fr/docs/Web/HTML/Element/li) de la liste non ordonnée, puis collez-le dans `Todo.js` afin que ce dernier contienne ceci&nbsp;:

```jsx
export default function Todo() {
  return (
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
  );
}
```

> **Note :** Les composants doivent toujours retourner quelque chose. Si, à un moment donné, vous essayez de rendre un composant qui ne renvoie rien, React affichera une erreur dans votre navigateur.

Notre composant `Todo` est terminé, du moins pour l'instant&nbsp;nous pouvons maintenant l'utiliser. Dans `App.js`, ajoutez la ligne suivante en haut du fichier pour importer `Todo`&nbsp;:

```jsx
import Todo from "./components/Todo";
```

Avec ce composant importé, vous pouvez remplacer toutes les balises `<li>` dans `App.js` avec le composant importé `<Todo />`. Votre balise `<ul>` devrait donc ressembler à ceci&nbsp;:

```jsx
<ul
  role="list"
  className="todo-list stack-large stack-exception"
  aria-labelledby="list-heading">
  <Todo />
  <Todo />
  <Todo />
</ul>
```

Lorsque vous retournez sur votre navigateur, vous remarquerez quelque chose de fâcheux&nbsp;: votre liste répète maintenant la première tâche trois fois&nbsp;!

![Notre application de liste de tâche avec les composants todo répétés, car le libellé est présent en dur dans le composant](todo-list-repeating-todos.png)

Nous ne voulons pas seulement manger, nous avons d'autres choses à faire. Nous allons donc voir comme faire en sorte que différents appels de composants rendent un contenu unique.

## Rendre `<Todo />` unique

Les composants sont puissants, car ils nous permettent de réutiliser des éléments de notre interface utilisateur et de nous référer à un seul endroit pour la source de cette interface. Le problème est que nous ne voulons généralement pas réutiliser la totalité de chaque composant&nbsp;; nous voulons réutiliser la plupart des parties, et changer de petits morceaux. C'est là que les <i lang="en">props</i> interviennent.

### Quel est ton nom&nbsp;?

Afin de suivre les noms des tâches que nous voulons accomplir, nous devons nous assurer que chaque composant `<Todo />` affiche un nom unique.

Dans `App.js`, donnez une <i lang="en">prop</i> `name` à chaque `<Todo />`. Utilisez les noms des tâches que nous avions auparavant&nbsp;:

```jsx
<Todo name="Manger" />
<Todo name="Dormir" />
<Todo name="Recommencer" />
```

Lorsque votre navigateur se rafraîchira, vous verrez… exactement la même chose qu'avant. Nous avons donné des propriétés à notre `<Todo />`, mais nous ne les utilisons pas encore. Retournons dans `Todo.js` et remédions à cela.

Tout d'abord, modifiez la définition de votre fonction `Todo()` pour qu'elle prenne `props` en paramètre. Si vous souhaitez vérifier que la valeur `props` est correctement reçue par le composant, vous pouvez utiliser `console.log()` pour la tracer, comme nous l'avons fait précédemment.

Lorsque votre composant reçoit bien ses `props`, vous pouvez remplacer chaque occurrence de `Manger` par le nom que vous voulez dans la <i lang="en">prop</i> `name`. Rappelez-vous&nbsp;: lorsque vous êtes au milieu d'une expression JSX, il faut utiliser des accolades pour injecter la valeur d'une variable.

En assemblant tout ça, votre fonction `Todo()` devrait ressembler à ceci&nbsp;:

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
          Éditer <span className="visually-hidden">{props.name}</span>
        </button>
        <button type="button" className="btn btn__danger">
          Supprimer <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </li>
  );
}
```

_Maintenant_, votre navigateur devrait afficher trois tâches uniques. Un autre problème subsiste cependant&nbsp;: elles sont toujours cochées par défaut.

![Notre liste de tâches, avec des libellés différents maintenant qu'ils sont passés aux composants comme props](todo-list-unique-todos.png)

### Est-ce terminé&nbsp;?

Dans notre liste statique originale, seul `Manger` était coché. Là encore, nous voulons réutiliser _la plupart_ de l'interface utilisateur qui compose un composant `<Todo />`, mais changer une seconde chose. C'est un rôle idéal pour une autre <i lang="en">prop</i>&nbsp;! Ajoutez une nouvelle <i lang="en">prop</i> `completed` à chaque appel de `<Todo />` dans `App.js`. La première (`Manger`) devrait avoir la valeur `true`&nbsp;; les autres devraient être `false`&nbsp;:

```jsx
<Todo name="Manger" completed={true} />
<Todo name="Dormir" completed={false} />
<Todo name="Recommencer" completed={false} />
```

Comme précédemment, nous devons retourner dans `Todo.js` pour utiliser réellement ces <i lang="en">props</i>. Changez l'attribut `defaultChecked` sur l'élément `<input>` pour que sa valeur soit égale à la <i lang="en">prop</i> `completed`. Une fois terminé, l'élément `<input>` du composant Todo se présentera comme suit&nbsp;:

```jsx
<input id="todo-0" type="checkbox" defaultChecked={props.completed} />
```

Et votre navigateur se mettra à jour et affichera seulement `Manger` comme coché&nbsp;:

![Notre application de liste de tâches, avec différents états : certaines cases sont cochées et d'autres non](todo-list-differing-checked-states.png)

Si vous changez la <i lang="en">prop</i> `completed` de chaque composant `<Todo />`, votre navigateur cochera ou décochera la case correspondante en même temps.

### Identifiez-vous

À l'heure actuelle, notre composant `<Todo />` fournit le même attribut `id`, avec la valeur `todo-0`, pour chaque tâche. Cela ne respecte pas les règles HTML, car les [identifiants (`id`)](/fr/docs/Web/HTML/Global_attributes/id) doivent être uniques (ils sont utilisés comme identifiants uniques pour les fragments de document, CSS, JavaScript, etc.). Cela signifie que nous devons donner à notre composant une prop `id` qui prend une valeur unique pour chaque `Todo`.

Pour suivre le même schéma qu'au départ, donnons à chaque instance du composant `<Todo />` un identifiant au format `todo-i`, où `i` est incrémenté d'une unité à chaque fois&nbsp;:

```jsx
<Todo name="Manger" completed={true} id="todo-0" />
<Todo name="Dormir" completed={false} id="todo-1" />
<Todo name="Recommencer" completed={false} id="todo-2" />
```

Retournez maintenant dans `Todo.js` et utilisez la <i lang="en">prop</i> `id`. Elle doit remplacer la valeur de l'attribut `id` de l'élément `<input>`, ainsi que la valeur de l'attribut `htmlFor` du libellé associé&nbsp;:

```jsx
<div className="c-cb">
  <input id={props.id} type="checkbox" defaultChecked={props.completed} />
  <label className="todo-label" htmlFor={props.id}>
    {props.name}
  </label>
</div>
```

## Jusqu'ici, tout va bien&nbsp;?

Nous utilisons React correctement, mais pourrions faire encore mieux&nbsp;! Notre code est répétitif. Les trois lignes qui rendent notre composant `<Todo />` sont presque identiques, avec une seule différence&nbsp;: la valeur de chaque <i lang="en">prop</i>.

Nous pouvons nettoyer notre code grâce à l'une des notions principales de JavaScript&nbsp;: l'itération. Pour utiliser l'itération, nous devons d'abord repenser nos tâches.

## Gérer les tâches comme des données

Chacune de nos tâches contient actuellement trois informations&nbsp;:

- Son nom
- Son état (réalisée ou non)
- Son identifiant

On peut donc aisément les représenter comme des objets. Puisque nous avons plus d'une tâche, autant utiliser un tableau d'objets pour représenter correctement ces données.

Dans le fichier `src/index.js`, ajoutez une nouvelle déclaration `const` sous l'import final et au-dessus de `ReactDOM.render()`&nbsp;:

```jsx
const DATA = [
  { id: "todo-0", name: "Manger", completed: true },
  { id: "todo-1", name: "Dormir", completed: false },
  { id: "todo-2", name: "Recommencer", completed: false },
];
```

Ensuite, nous allons passer `DATA` à `<App />` en tant que <i lang="en">prop</i> appelée `tasks`. La dernière ligne de `src/index.js` devrait ressembler à ceci&nbsp;:

```jsx
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>,
);
```

Ce tableau est maintenant disponible pour le composant App en tant que `props.tasks`. Vous pouvez utiliser `console.table()` pour en inspecter le contenu.

> **Note :** Les noms de constantes `TOUT_EN_MAJUSCULES` n'ont pas de signification particulière en JavaScript. Il s'agit d'une convention qui indique que «&nbsp;cette donnée ne changera jamais après avoir été définie ici&nbsp;».

## Effectuer le rendu en itérant

Pour rendre notre tableau d'objets à l'écran, nous devons transformer chacun d'eux en un composant `<Todo />`. JavaScript nous offre une méthode pour transformer les données d'un tableau&nbsp;: [`Array.prototype.map()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

Avant l'instruction `return` de `App()`, rajoutez une nouvelle déclaration `const` intitulée `taskList`, puis utilisez `map()` afin de transformer le tableau. Commençons par changer notre tableau de `tasks` en un tableau plus simple qui contient les noms de chaque tâche (avec la propriété `name`)&nbsp;:

```jsx
const taskList = props.tasks?.map((task) => task.name);
```

Essayons de remplacer tous les enfants de `<ul>` par `taskList`&nbsp;:

```jsx
<ul
  role="list"
  className="todo-list stack-large stack-exception"
  aria-labelledby="list-heading">
  {taskList}
</ul>
```

Cela nous permet d'afficher à nouveau tous les composants, mais nous avons encore du travail à faire&nbsp;: le navigateur rend actuellement le nom de chaque tâche sous forme de texte non structuré. Il nous manque notre structure HTML&nbsp;: les éléments `<li>`, les cases à cocher et leur bouton&nbsp;!

![Notre application de liste de tâches où les libellés des tâches sont simplement affichés sur une ligne](todo-list-unstructured-names.png)

Pour résoudre ce problème, nous devons retourner un composant `<Todo />` depuis notre fonction `map()`. Rappelez-vous que JSX nous permet de mélanger les structures JavaScript et de balisage&nbsp;! Essayons ce qui suit au lieu de ce que nous avons déjà&nbsp;:

```jsx
const taskList = props.tasks.map((task) => <Todo />);
```

Regardez à nouveau votre application&nbsp;: maintenant nos tâches ressemblent plus à ce qu'elles étaient, mais il manque les noms des tâches elles-mêmes. Rappelez-vous que chaque tâche que nous ajoutons possède les propriétés `id`, `name`, et `completed` que nous voulons passer dans notre composant `<Todo />`. Si nous rassemblons toutes ces connaissances, nous obtenons un code comme celui-ci&nbsp;:

```jsx
const taskList = props.tasks.map((task) => (
  <Todo id={task.id} name={task.name} completed={task.completed} />
));
```

Maintenant l'application ressemble à ce qu'elle était avant, et notre code est moins répétitif.

## Clés uniques

Maintenant que React affiche nos tâches dans un tableau, il doit garder la trace de chacune d'entre elles afin d'en faire un rendu correct. React essaie de deviner comment suivre les différents éléments, mais nous pouvons l'aider en passant une <i lang="en">prop</i> `key` à nos composants `<Todo />`. `key` est une propriété spéciale qui est gérée par React et ce mot-clé `key` ne peut pas être utilisé dans un autre but.

Les clés devant être uniques, nous allons réutiliser l'identifiant (`id`) de chaque objet de tâche comme clé (`key`). Mettez à jour votre constante `taskList` comme ceci&nbsp;:

```jsx
const taskList = props.tasks.map((task) => (
  <Todo
    id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id}
  />
));
```

**Vous devez toujours passer une clé unique pour tout composant rendu de façon itérative.** Cela ne changera rien de flagrant dans le comportement du navigateur, mais si vous n'utilisez pas de clés uniques, React enregistrera des avertissements dans votre console et votre application pourra se comporter de manière étrange&nbsp;!

## Structurer le reste de l'application en composants

Maintenant que nous avons mis au point notre composant le plus important, nous pouvons transformer le reste de notre application en composants. En nous rappelant que les composants sont soit des éléments d'interface utilisateur évidents, soit des éléments d'interface utilisateur réutilisés, soit les deux, nous pouvons créer deux autres composants&nbsp;:

- `<Form/>`
- `<FilterButton/>`

Puisque nous savons que nous avons besoin des deux, nous pouvons regrouper une partie du travail de création de fichiers avec une seule commande de terminal. Exécutez cette commande dans votre terminal, en prenant soin de vous placer dans le répertoire racine de votre application&nbsp;:

```bash
touch src/components/Form.js src/components/FilterButton.js
```

### Le composant `<Form />`

Ouvrez le fichier `components/Form.js` et procédez ainsi&nbsp;:

- Importez `React` en haut du fichier, comme nous l'avons fait dans `Todo.js`.
- Créez un nouveau composant `Form()` avec la même structure de base que `Todo()`, et exportez ce composant.
- Copiez les balises `<form>` et tout ce qui se trouve entre elles depuis `App.js`, et collez-les dans l'instruction `return` de `Form()`.
- Exportez `Form` à la fin du fichier.

Votre fichier `Form.js` devrait ressembler à ceci&nbsp;:

```jsx
import React from "react";

function Form(props) {
  return (
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
  );
}

export default Form;
```

### Le composant `<FilterButton />`

Pour la création, procédez comme `Form.js`. À l'intérieur de `FilterButton.js`, appelez le composant `FilterButton()` et copiez le HTML du premier bouton à l'intérieur de l'élément `<div>` avec la `class` de `filters` de `App.js` dans l'instruction `return`.

Le fichier devrait ressembler à ce qui suit&nbsp;:

```jsx
import React from "react";

function FilterButton(props) {
  return (
    <button type="button" className="btn toggle-btn" aria-pressed="true">
      <span className="visually-hidden">Afficher </span>
      <span>Toutes</span>
      <span className="visually-hidden"> les tâches</span>
    </button>
  );
}

export default FilterButton;
```

> **Note :** Vous remarquerez peut-être que nous faisons ici la même erreur que pour le composant `<Todo />`, en ce sens que chaque bouton sera le même. Ce n'est pas grave&nbsp;! Nous allons corriger ce composant plus tard, dans la section [Revenons aux boutons de filtrage](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering#back_to_the_filter_buttons).

## Importation de tous nos composants

Utilisons nos nouveaux composants.

Ajoutez quelques instructions `import` au début de `App.js`, pour les importer.

Ensuite, mettez à jour l'instruction `return` de `App()` afin de déclencher le rendu de nos composants. Lorsque vous aurez terminé, le fichier `App.js` ressemblera à ceci&nbsp;:

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
  ));
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">3 tâches restantes</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}

export default App;
```

Avec cela, nous sommes _presque_ prêts à aborder l'interactivité dans notre application React&nbsp;!

## Résumé

Nous voilà à la fin de cet article où nous avons approfondi la façon de décomposer notre application en composants et de traiter leur rendu efficacement. Nous allons maintenant examiner comment gérer les évènements dans React et commencer à ajouter de l'interactivité.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
