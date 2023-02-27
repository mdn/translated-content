---
title: 'Interactivité avec React : évènements et état'
slug: >-
  Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state
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

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Après avoir élaboré notre plan de composants, il est maintenant temps de commencer à faire évoluer notre application d'une interface utilisateur complètement statique vers une interface qui nous permet d'interagir et de modifier les choses. C'est ce que nous allons faire dans cet article, en nous penchant sur les événements et l'état, pour aboutir à une application dans laquelle nous pouvons ajouter et supprimer des tâches, et basculer les tâches terminées.

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
        Pour apprendre à gérer les événements et l'état dans React, et utiliser ces éléments pour
        pour commencer à rendre l'application de l'étude de cas interactive.
      </td>
    </tr>
  </tbody>
</table>

## Gestion des événements

Si vous n'avez écrit que du vanilla JavaScript jusqu'à présent, vous avez peut-être l'habitude de disposer d'un fichier JavaScript distinct, dans lequel vous interrogez certains nœuds du DOM et leur attachez des écouteurs. Par exemple:

```jsx
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  alert("hi!");
});
```

Dans React, nous écrivons des gestionnaires d'événements directement sur les éléments de notre JSX, comme ceci:

```jsx
<button
  type="button"
  onClick={() => alert("hi!")}
>
  Say hi!
</button>
```

> **Remarque:** Cela peut sembler contre-intuitif au regard des conseils de bonne pratique qui tendent à déconseiller l'utilisation de gestionnaires d'événements en ligne sur le HTML, mais n'oubliez pas que JSX fait en fait partie de votre JavaScript.

Dans l'exemple ci-dessus, nous ajoutons un attribut `onClick` à l'élément `<bouton>`. La valeur de cet attribut est une fonction qui déclenche une simple alerte.

L'attribut `onClick` a une signification particulière ici : il indique à React d'exécuter une fonction donnée lorsque l'utilisateur clique sur le bouton. Il y a quelques autres choses à noter:

- La nature camel-case de `onClick` est importante - JSX ne reconnaîtra pas `onclick` (encore une fois, il est déjà utilisé en JavaScript dans un but spécifique, qui est lié mais différent - propriétés du gestionnaire standard [`onclick`](/en-US/docs/Web/API/Element/click_event)).
- Tous les événements du navigateur suivent ce format en JSX - `on`, suivi du nom de l'événement.

Appliquons cela à notre application, en commençant par le composant `Form.js`.

### Gérer la soumission du formulaire

Au sommet de la fonction du composant `Form()`, créez une fonction nommée `handleSubmit()`. Cette fonction doit [empêcher le comportement par défaut de l'événement `submit`.](/en-US/docs/Learn/JavaScript/Building_blocks/Events#preventing_default_behavior). Après cela, il devrait déclencher un `alert()`, qui peut dire ce que vous voulez. Cela devrait ressembler à quelque chose comme ceci:

```jsx
function handleSubmit(e) {
  e.preventDefault();
  alert('Hello, world!');
}
```

To use this function, add an `onSubmit` attribute to the [`<form>`](/en-US/docs/Web/HTML/Element/form) element, and set its value to the `handleSubmit` function:

```jsx
<form onSubmit={handleSubmit}>
```

Maintenant, si vous retournez à votre navigateur et cliquez sur le bouton "Ajouter", votre navigateur vous montrera une boîte de dialogue d'alerte avec les mots "Hello, world !" - ou ce que vous avez choisi d'y écrire.

## Props Callback

Dans les applications React, l'interactivité est rarement confinée à un seul composant : les événements qui se produisent dans un composant affecteront d'autres parties de l'app. Lorsque nous commençons à nous donner le pouvoir de créer de nouvelles tâches, les choses qui se produisent dans le composant `<Form />` affecteront la liste rendue dans `<App />`.

Nous voulons que notre fonction `handleSubmit()` nous aide finalement à créer une nouvelle tâche, donc nous avons besoin d'un moyen de passer des informations de `<Form />` à `<App />`. Nous ne pouvons pas transmettre des données de l'enfant au parent de la même manière que nous transmettons des données du parent à l'enfant en utilisant les props standard. Au lieu de cela, nous pouvons écrire une fonction dans `<App />` qui attendra des données de notre formulaire comme entrée, puis passer cette fonction à `<Form />` comme un prop. Cette fonction en tant que prop est appelée prop callback. Une fois que nous avons notre prop callback, nous pouvons l'appeler dans `<Form />` pour envoyer les bonnes données à `<App />`.

### Gestion de la soumission du formulaire via des callbacks

En haut de la fonction de notre composant `App()`, créez une fonction nommée `addTask()` qui a un seul paramètre de `name` :

```jsx
function addTask(name) {
  alert(name);
}
```

Ensuite, nous allons passer `addTask()` dans `<Form />` comme une prop. Le prop peut avoir le nom que vous voulez, mais choisissez un nom que vous comprendrez plus tard. Quelque chose comme `addTask` fonctionne, car il correspond au nom de la fonction ainsi qu'à ce qu'elle va faire. Votre appel de composant `<Form />` devrait être mis à jour comme suit:

```jsx
<Form addTask={addTask} />
```

Enfin, vous pouvez utiliser ce prop dans la fonction `handleSubmit()` de votre composant `<Form />` ! Mettez-le à jour comme suit:

```jsx
function handleSubmit(e) {
  e.preventDefault();
  props.addTask("Say hello!");
}
```

Cliquer sur le bouton "Ajouter" dans votre navigateur prouvera que la fonction de rappel `addTask()` fonctionne, mais ce serait bien si nous pouvions faire en sorte que l'alerte nous montre ce que nous tapons dans notre champ de saisie ! C'est ce que nous allons faire maintenant.

> **Remarque:** Nous avons décidé de nommer notre prop callback `addTask` pour qu'il soit facile de comprendre ce qu'il va faire. Une autre convention commune que vous pouvez rencontrer dans le code React est de préfixer les noms des prop de callback avec le mot `on`, suivi du nom de l'événement qui les fera s'exécuter. Par exemple, nous aurions pu donner à notre formulaire une prop de `onSubmit` avec la valeur de `addTask`.

## L'état et le hook `useState'.

Jusqu'à présent, nous avons utilisé des props pour transmettre des données à travers nos composants et cela nous a bien servi. Mais maintenant que nous avons affaire à des entrées utilisateur et à des mises à jour de données, nous avons besoin de quelque chose de plus.

D'une part, les props proviennent du parent d'un composant. Notre `<Form />` n'héritera pas d'un nouveau nom pour notre tâche; notre élément `<input />` vit directement à l'intérieur de `<Form />`, donc `<Form/>` sera directement responsable de la création de ce nouveau nom. Nous ne pouvons pas demander à `<Form />` de créer spontanément ses propres accessoires, mais nous pouvons lui demander de suivre certaines de ses propres données pour nous. Les données de ce type, qu'un composant possède lui-même, sont appelées **state**. L'état est un autre outil puissant pour React car les composants non seulement _propriétaire_ de l'état, mais peuvent _mettre à jour_ celui-ci ultérieurement. Il n'est pas possible de mettre à jour les props qu'un composant reçoit, mais seulement de les lire.

React fournit une variété de fonctions spéciales qui nous permettent de fournir de nouvelles capacités aux composants, comme l'état. Ces fonctions sont appelées **hooks**, et le hook `useState`, comme son nom l'indique, est précisément celui dont nous avons besoin pour donner un état à notre composant.

Pour utiliser un hook React, nous devons l'importer du module React. Dans le fichier `Form.js`, changez la toute première ligne pour qu'elle se lise comme ceci:

```jsx
import React, { useState } from "react";
```

Cela nous permet d'importer la fonction `useState()` par elle-même, et de l'utiliser n'importe où dans ce fichier.

La fonction `useState()` crée un état pour un composant, et son seul paramètre détermine la _valeur initiale_ de cet état. Elle retourne deux choses : l'état, et une fonction qui peut être utilisée pour mettre à jour l'état plus tard.

C'est beaucoup de choses à assimiler d'un coup, alors essayons. Nous allons nous créer un état `name`, et une fonction pour mettre à jour l'état `name`.

Ecrivez ce qui suit au-dessus de votre fonction `handleSubmit()`, dans `Form()`:

```jsx
const [name, setName] = useState('Use hooks!');
```

Que se passe-t-il dans cette ligne de code ?

- Nous définissons la valeur initiale de `name` comme étant "Use hooks !".
- Nous définissons une fonction dont le travail est de modifier `name`, appelée `setName()`.
- `useState()` renvoie ces deux choses, donc nous utilisons [array destructuring](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) pour les capturer dans des variables séparées.

### Lecture de l'état

Vous pouvez voir l'état `name` en action tout de suite. Ajoutez un attribut `value` à l'entrée du formulaire, et mettez sa valeur à `name`. Votre navigateur affichera "Use hooks !" à l'intérieur de l'entrée.

```jsx
<input
  type="text"
  id="new-todo-input"
  className="input input__lg"
  name="text"
  autoComplete="off"
  value={name}
/>
```

Changez "Use hooks !" en une chaîne vide une fois que vous avez terminé ; c'est ce que nous voulons pour notre état initial.

```jsx
const [name, setName] = useState('');
```

### Lire l'entrée de l'utilisateur

Avant de pouvoir changer la valeur de `name`, nous devons capturer les entrées de l'utilisateur lorsqu'il tape. For this, we can listen to the `onChange` event. Écrivons une fonction `handleChange()`, et écoutons-la sur la balise `<input />`.

```jsx
// near the top of the `Form` component
function handleChange(e) {
  console.log("Typing!");
}

// Down in the return statement
<input
  type="text"
  id="new-todo-input"
  className="input input__lg"
  name="text"
  autoComplete="off"
  value={name}
  onChange={handleChange}
/>
```

Actuellement, la valeur de votre entrée ne changera pas lorsque vous tapez, mais votre navigateur enregistrera le mot "Typing !" dans la console JavaScript, donc nous savons que notre écouteur d'événements est attaché à l'entrée. Afin de changer la valeur de l'entrée, nous devons utiliser notre fonction `handleChange()` pour mettre à jour notre état `name`.

Pour lire le contenu du champ de saisie au fur et à mesure qu'il change, vous pouvez accéder à la propriété `value` de l'entrée. Nous pouvons le faire dans `handleChange()` en lisant `e.target.value`. `e.target` représente l'élément qui a déclenché l'événement `change` - c'est notre entrée. Donc, `value` est le texte qu'il contient.

Vous pouvez `console.log()` cette valeur pour la voir dans la console de votre navigateur.

```jsx
function handleChange(e) {
  console.log(e.target.value);
}
```

### Mise à jour de l'état

La journalisation n'est pas suffisante - nous voulons réellement stocker l'état mis à jour du nom lorsque la valeur d'entrée change ! Changez le `console.log()` en `setName()`, comme indiqué ci-dessous:

```jsx
function handleChange(e) {
  setName(e.target.value);
}
```

Maintenant, nous devons modifier notre fonction `handleSubmit()` pour qu'elle appelle `props.addTask` avec le nom comme argument - vous vous souvenez de notre prop callback ? Cela servira à renvoyer la tâche vers le composant `App`, afin que nous puissions l'ajouter à notre liste de tâches à une date ultérieure. Pour une question de bonne pratique, vous devriez effacer l'entrée après que votre formulaire soit soumis, donc nous appellerons `setName()` de nouveau avec une chaîne vide pour le faire:

```jsx
function handleSubmit(e) {
  e.preventDefault();
  props.addTask(name);
  setName("");
}
```

Enfin, vous pouvez taper quelque chose dans le champ de saisie de votre navigateur et cliquer sur _Add_ - ce que vous avez tapé apparaîtra dans une boîte de dialogue d'alerte.

Votre fichier `Form.js` devrait maintenant ressembler à ceci:

```jsx
import React, { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(name);
    setName("");
  }
  return (
    <form onSubmit={handleSubmit}>
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
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
```

> **Remarque:** Vous remarquerez que vous pouvez soumettre des tâches vides en appuyant simplement sur le bouton Ajouter sans saisir de nom de tâche. Pouvez-vous penser à un moyen d'empêcher l'ajout de tâches vides ? En guise d'indice, vous devez probablement ajouter une sorte de vérification dans la fonction `handleSubmit()`.

## Tout mettre en place : Ajout d'une tâche

Maintenant que nous nous sommes entraînés à utiliser des événements, des props de rappel et des crochets, nous sommes prêts à écrire une fonctionnalité qui permettra à un utilisateur d'ajouter une nouvelle tâche depuis son navigateur.

### Tâches comme état

Importez `useState` dans `App.js`, afin que nous puissions stocker nos tâches dans l'état - mettez à jour votre ligne d'importation `React` avec ce qui suit:

```jsx
import React, { useState } from "react";
```

Nous voulons passer `props.tasks` dans le hook `useState()` - cela préservera son état initial. Ajoutez ce qui suit en haut de la définition de votre fonction `App()`:

```jsx
const [tasks, setTasks] = useState(props.tasks);
```

Maintenant, nous pouvons modifier notre mappage `taskList` pour qu'il soit le résultat du mappage de `tasks`, au lieu de `props.tasks`. Votre déclaration de constante `taskList` devrait maintenant ressembler à ceci:

```jsx
const taskList = tasks.map((task) => (
  <Todo
    id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id}
  />
));
```

### Ajout d'une tâche

Nous avons maintenant un hook `setTasks` que nous pouvons utiliser dans notre fonction `addTask()` pour mettre à jour notre liste de tâches. Il y a cependant un problème : nous ne pouvons pas simplement passer l'argument `name` de `addTask()` dans `setTasks`, parce que `tasks` est un tableau d'objets et `name` est une chaîne de caractères. Si on essayait de faire ça, le tableau serait remplacé par la chaîne de caractères.

Tout d'abord, nous devons mettre `name` dans un objet qui a la même structure que nos tâches existantes. Dans la fonction `addTask()`, nous allons créer un objet `newTask` à ajouter au tableau.

Nous devons ensuite créer un nouveau tableau auquel nous ajoutons cette nouvelle tâche, puis mettre à jour l'état des données de la tâche en fonction de ce nouvel état. Pour ce faire, nous pouvons utiliser la syntaxe spread pour [copier le tableau existant](/en-US/docs/Web/JavaScript/Référence/Opérateurs/Spread_syntax#copy_an_array), et ajouter notre objet à la fin. Nous passons ensuite ce tableau dans `setTasks()` pour mettre à jour l'état.

En mettant tout cela ensemble, votre fonction `addTask()` devrait se lire comme suit:

```jsx
function addTask(name) {
  const newTask = { id: "id", name, completed: false };
  setTasks([...tasks, newTask]);
}
```

Vous pouvez maintenant utiliser le navigateur pour ajouter une tâche à nos données ! Tapez n'importe quoi dans le formulaire et cliquez sur "Ajouter" (ou appuyez sur la touche <kbd>Enter</kbd>) et vous verrez votre nouvel élément de todo apparaître dans l'interface utilisateur !

**Toutefois, nous avons un autre problème**: notre fonction `addTask()` donne à chaque tâche le même `id`. Ceci est mauvais pour l'accessibilité, et rend impossible pour React de distinguer les tâches futures avec la prop `key`. En fait, React vous donnera un avertissement dans votre console DevTools - "Warning : Encountered two children with the same key..."

Nous devons résoudre ce problème. La création d'identifiants uniques est un problème difficile, pour lequel la communauté JavaScript a écrit des bibliothèques utiles. Nous utiliserons [nanoid](https://github.com/ai/nanoid) parce qu'elle est minuscule et qu'elle fonctionne.

Assurez-vous que vous êtes dans le répertoire racine de votre application et exécutez la commande suivante dans le terminal:

```bash
npm install nanoid
```

> **Remarque:** Si vous utilisez yarn, vous aurez besoin de ce qui suit à la place : `yarn add nanoid`.

Maintenant, nous pouvons importer `nanoid` en haut de `App.js` afin de l'utiliser pour créer des identifiants uniques pour nos nouvelles tâches. Tout d'abord, incluez la ligne d'importation suivante au début du fichier `App.js`:

```jsx
import { nanoid } from "nanoid";
```

Maintenant, mettons à jour `addTask()` pour que chaque ID de tâche devienne un préfixe `todo-` plus une chaîne unique générée par nanoid. Mettez à jour votre déclaration de constante `newTask` comme ceci:

```jsx
const newTask = { id: `todo-${nanoid()}`, name, completed: false };
```

Sauvegardez tout, et réessayez votre application - maintenant vous pouvez ajouter des tâches sans avoir cet avertissement sur les ID en double.

## Détour : compter les tâches

Maintenant que nous pouvons ajouter de nouvelles tâches, vous pouvez remarquer un problème : notre titre indique 3 tâches restantes, peu importe le nombre de tâches que nous avons ! Nous pouvons résoudre ce problème en comptant la longueur de `taskList` et en changeant le texte de notre titre en conséquence.

Ajoutez ceci dans votre définition de `App()`, avant l'instruction de retour:

```jsx
const headingText = `${taskList.length} tasks remaining`;
```

C'est presque correct, sauf que si notre liste ne contient qu'une seule tâche, l'intitulé utilisera toujours le mot "tâches". Nous pouvons également en faire une variable. Mettez à jour le code que vous venez d'ajouter comme suit:

```jsx
const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
const headingText = `${taskList.length} ${tasksNoun} remaining`;
```

Vous pouvez maintenant remplacer le contenu du texte de l'en-tête de la liste par la variable `headingText`. Mettez à jour votre `<h2>` comme suit:

```jsx
<h2 id="list-heading">{headingText}</h2>
```

## Achèvement d'une tâche

Vous avez peut-être remarqué que, lorsque vous cliquez sur une case à cocher, celle-ci est cochée et décochée de manière appropriée. En tant que caractéristique du HTML, le navigateur sait comment se souvenir des cases à cocher qui sont cochées ou décochées sans notre aide. Cette caractéristique cache toutefois un problème : le fait de basculer une case à cocher ne change pas l'état de notre application React. Cela signifie que le navigateur et notre application sont maintenant désynchronisés. Nous devons écrire notre propre code pour remettre le navigateur en synchronisation avec notre application.

### Prouver le bug

Avant de corriger le problème, observons ce qui se passe.

Nous allons commencer par écrire une fonction `toggleTaskCompleted()` dans notre composant `App()`. Cette fonction aura un paramètre `id`, mais nous n'allons pas encore l'utiliser. Pour l'instant, nous allons enregistrer la première tâche du tableau dans la console - nous allons inspecter ce qui se passe lorsque nous la cochons ou la décochons dans notre navigateur :

Ajoutez ceci juste au-dessus de la déclaration de la constante `taskList`:

```jsx
function toggleTaskCompleted(id) {
  console.log(tasks[0])
}
```

Ensuite, nous allons ajouter `toggleTaskCompleted` aux props de chaque composant `<Todo />` rendu à l'intérieur de notre `taskList` ; mettez-le à jour comme ceci:

```jsx
const taskList = tasks.map((task) => (
  <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
  />
));
```

Ensuite, allez dans votre composant `Todo.js` et ajoutez un gestionnaire `onChange` à votre élément `<input />`, qui devrait utiliser une fonction anonyme pour appeler `props.toggleTaskCompleted()` avec un paramètre de `props.id`. The `<input />` should now look like this:

```jsx
<input
  id={props.id}
  type="checkbox"
  defaultChecked={props.completed}
  onChange={() => props.toggleTaskCompleted(props.id)}
/>
```

Enregistrez tout et revenez à votre navigateur. Remarquez que notre première tâche, Manger, est cochée. Ouvrez votre console JavaScript, puis cliquez sur la case à cocher à côté de Manger. La case est décochée, comme prévu. Votre console JavaScript, cependant, affichera quelque chose comme ceci:

```
Object { id: "task-0", name: "Eat", completed: true }
```

La case à cocher se décoche dans le navigateur, mais notre console nous indique que Eat est toujours terminé. Nous allons corriger cela ensuite !

### Synchronisation du navigateur avec nos données

Revoyons notre fonction `toggleTaskCompleted()` dans `App.js`. Nous voulons qu'elle change la propriété `completed` uniquement pour la tâche qui a été activée, et qu'elle laisse toutes les autres tranquilles. Pour ce faire, nous allons `map()` sur la liste des tâches et changer seulement celle qui a été complétée.

Mettez à jour votre fonction `toggleTaskCompleted()` comme suit:

```jsx
function toggleTaskCompleted(id) {
  const updatedTasks = tasks.map((task) => {
    // if this task has the same ID as the edited task
    if (id === task.id) {
      // use object spread to make a new object
      // whose `completed` prop has been inverted
      return {...task, completed: !task.completed}
    }
    return task;
  });
  setTasks(updatedTasks);
}
```

Ici, nous définissons une constante `updatedTasks` qui correspond au tableau `tasks` original. Si la propriété `id` de la tâche correspond à l'`id` fourni à la fonction, nous utilisons [object spread syntax](/fr-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) pour créer un nouvel objet, et basculer la propriété `completed` de cet objet avant de le retourner. Si elle ne correspond pas, nous retournons l'objet original.

Ensuite, nous appelons `setTasks()` avec ce nouveau tableau afin de mettre à jour notre état.

## Suppression d'une tâche

La suppression d'une tâche suivra un schéma similaire à celui du changement d'état : nous devons définir une fonction pour mettre à jour notre état, puis passer cette fonction dans `<Todo />` en tant que prop et l'appeler quand le bon événement se produit.

### La fonction de rappel `deleteTask`.

Ici, nous allons commencer par écrire une fonction `deleteTask()` dans votre composant `App`. Comme `toggleTaskCompleted()`, cette fonction prendra un paramètre `id`, et nous allons enregistrer cet `id` dans la console pour commencer. Ajoutez ce qui suit sous `toggleTaskCompleted()` :

```jsx
function deleteTask(id) {
  console.log(id)
}
```

Ensuite, ajoutez un autre prop de rappel à notre tableau de composants `<Todo />`:

```jsx
const taskList = tasks.map((task) => (
  <Todo
    id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id}
    toggleTaskCompleted={toggleTaskCompleted}
    deleteTask={deleteTask}
  />
));
```

Dans `Todo.js`, nous voulons appeler `props.deleteTask()` lorsque le bouton "Supprimer" est pressé. `deleteTask()` a besoin de connaître l'ID de la tâche qui l'a appelé, afin de pouvoir supprimer la bonne tâche de l'état.

Mettez à jour le bouton "Supprimer" dans `Todo.js`, comme ceci:

```jsx
<button
  type="button"
  className="btn btn__danger"
  onClick={() => props.deleteTask(props.id)}
>
  Delete <span className="visually-hidden">{props.name}</span>
</button>
```

Maintenant, lorsque vous cliquez sur l'un des boutons "Supprimer" de l'application, la console de votre navigateur devrait enregistrer l'ID de la tâche concernée.

## Suppression des tâches de l'état et de l'interface utilisateur

Maintenant que nous savons que `deleteTask()` est invoqué correctement, nous pouvons appeler notre hook `setTasks()` dans `deleteTask()` pour supprimer réellement cette tâche de l'état de l'application ainsi que visuellement dans l'interface utilisateur de l'application. Puisque `setTasks()` attend un tableau comme argument, nous devons lui fournir un nouveau tableau qui copie les tâches existantes, _excluant_ la tâche dont l'ID correspond à celui passé dans `deleteTask()`.

C'est l'occasion idéale d'utiliser [`Array.prototype.filter()`](/en-US/docs/Web/JavaScript/Référence/Global_Objects/Array/filter). Nous pouvons tester chaque tâche, et exclure une tâche du nouveau tableau si son prop `id` correspond à l'argument `id` passé dans `deleteTask()`.

Mettez à jour la fonction `deleteTask()` dans votre fichier `App.js` comme suit:

```jsx
function deleteTask(id) {
  const remainingTasks = tasks.filter((task) => id !== task.id);
  setTasks(remainingTasks);
}
```

Essayez à nouveau votre application. Vous devriez maintenant pouvoir supprimer une tâche de votre application !

## Résumé

C'est suffisant pour un article. Nous vous avons expliqué comment React traite les événements et gère l'état, et nous avons implémenté une fonctionnalité permettant d'ajouter et de supprimer des tâches, et de basculer les tâches comme étant terminées. Nous avons presque terminé. Dans le prochain article, nous implémenterons une fonctionnalité pour modifier les tâches existantes et filtrer la liste des tâches entre toutes les tâches, les tâches terminées et les tâches incomplètes. Nous examinerons le rendu conditionnel de l'interface utilisateur en cours de route.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
