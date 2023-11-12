---
title: "Interactivité avec React : évènements et état"
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state
l10n:
  sourceCommit: 5e207965797b3672d3c06b65298de551d1eac515
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Après avoir organisé nos composants, il est maintenant temps de faire évoluer l'interface utilisateur de notre application afin que celle-ci ne soit plus statique mais interactive et permette de modifier les choses. C'est ce que nous allons faire dans cet article, en nous penchant sur les évènements et l'état, pour aboutir à une application dans laquelle nous pouvons ajouter des tâches, les supprimer et les marquer comme terminées.

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
        Apprendre comment gérer les évènements et l'état en React, et les utiliser pour commencer à rendre notre application de liste de tâches interactive.
      </td>
    </tr>
  </tbody>
</table>

## Gestion des évènements

Si vous n'avez pas utilisé de <i lang="en">framework</i> JavaScript jusqu'à présent, vous avez peut-être l'habitude de disposer d'un fichier JavaScript distinct, dans lequel vous interrogez certains nœuds du DOM et leur attachez des gestionnaires d'évènements. Par exemple&nbsp;:

```jsx
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  alert("coucou !");
});
```

Avec React, nous écrivons des gestionnaires d'évènements directement sur les éléments de notre JSX, comme ceci&nbsp;:

```jsx
<button type="button" onClick={() => alert("coucou !")}>
  Dire coucou !
</button>
```

> **Note :** Cela peut sembler contre-intuitif au regard des bonnes pratiques qui déconseillent l'utilisation de gestionnaires d'évènements en ligne sur le HTML, mais n'oubliez pas que JSX fait partie du code JavaScript.

Dans l'exemple ci-dessus, nous ajoutons un attribut `onClick` à l'élément `<bouton>`. La valeur de cet attribut est une fonction qui déclenche une simple alerte.

L'attribut `onClick` a une signification particulière ici&nbsp;: il indique à React d'exécuter une fonction donnée lorsque la personne clique sur le bouton. Il y a quelques autres choses à noter&nbsp;:

- L'écriture de `onClick` en [<i lang="en">camel case</i>](https://fr.wikipedia.org/wiki/Camel_case) est importante&nbsp;: JSX ne reconnaîtra pas `onclick` (ce mot-clé est déjà utilisé en JavaScript pour représenter le gestionnaire d'évènement standard [`onclick`](/fr/docs/Web/API/Element/click_event)).
- En JSX, tous les gestionnaires d'évènements suivent ce format&nbsp;: `on`, suivi du nom de l'évènement.

Appliquons cela à notre application en commençant par le composant `Form.js`.

### Gérer la soumission du formulaire

Au début de la fonction du composant `Form()`, créez une fonction nommée `handleSubmit()`. Cette fonction doit [empêcher le comportement par défaut de l'évènement `submit`](/fr/docs/Learn/JavaScript/Building_blocks/Events#éviter_le_comportement_par_défaut) puis déclencher une alerte avec un message de votre choix. Vous devriez obtenir une fonction comme celle-ci&nbsp;:

```jsx
function handleSubmit(e) {
  e.preventDefault();
  alert("Coucou le monde !");
}
```

Pour que cette fonction soit utilisée, ajoutez un attribut `onSubmit` à l'élément [`<form>`](/fr/docs/Web/HTML/Element/Form) en utilisant `handleSubmit` comme valeur&nbsp;:

```jsx
<form onSubmit={handleSubmit}>
```

Maintenant, si vous revenez à votre navigateur et cliquez sur le bouton «&nbsp;Ajouter&nbsp;», votre navigateur vous montrera une boîte de dialogue d'alerte avec les mots «&nbsp;Coucou le monde&nbsp;» ou ce que vous avez choisi d'y écrire.

## Fonctions de rappel passées en <i lang="en">props</i>

Dans les applications React, l'interactivité est rarement confinée à un seul composant&nbsp;: les évènements qui se produisent dans un composant affecteront d'autres parties de l'application. Lorsque nous commençons à pouvoir créer de nouvelles tâches, ce qui se produit dans le composant `<Form />` aura un impact sur la liste rendue dans `<App />`.

Nous voulons que la fonction `handleSubmit()` serve à créer une nouvelle tâche, nous avons donc besoin d'un moyen de passer des informations de `<Form />` à `<App />`. Nous ne pouvons pas transmettre des données de l'enfant au parent de la même manière que nous transmettons des données du parent à l'enfant via les <i lang="en">props</i> standard. Au lieu de cela, nous pouvons écrire une fonction dans `<App />` qui attendra des données de notre formulaire comme entrée, puis passer cette fonction à `<Form />` comme une <i lang="en">prop</i>. Cette fonction passée en tant que <i lang="en">prop</i> est appelée <i lang="en">prop callback</i> (qu'on peut traduire comme «&nbsp;fonction de rappel passée en prop&nbsp;»). Une fois que nous avons notre <i lang="en">prop callback</i>, nous pouvons l'appeler dans `<Form />` pour envoyer les bonnes données à `<App />`.

### Gestion de la soumission du formulaire via des fonctions de rappel

En haut de la fonction `App()` pour le composant éponyme, créez une fonction nommée `addTask()` prenant un seul paramètre `name`&nbsp;:

```jsx
function addTask(name) {
  alert(name);
}
```

Ensuite, nous allons passer `addTask()` dans `<Form />` comme une <i lang="en">prop</i>. La <i lang="en">prop</i> peut prendre le nom que vous voulez, toutefois, mieux vaut que celui-ci soit clair et compréhensible (cela pourra vous aider plus tard). Un nom `addTask` fait l'affaire, car il correspond au nom de la fonction et à son effet. Mettez alors à jour l'appel du composant `<Form />` comme suit&nbsp;:

```jsx
<Form addTask={addTask} />
```

Enfin, vous pouvez utiliser cette <i lang="en">prop</i> dans la fonction `handleSubmit()` de votre composant `<Form />`&nbsp;! Mettez-le à jour comme suit&nbsp;:

```jsx
function handleSubmit(e) {
  e.preventDefault();
  props.addTask("Dire bonjour !");
}
```

Cliquer sur le bouton «&nbsp;Ajouter&nbsp;» dans votre navigateur prouvera que la fonction de rappel `addTask()` fonctionne, mais ce serait bien si nous pouvions faire en sorte que l'alerte nous montre ce que nous tapons dans notre champ de saisie&nbsp;! C'est ce que nous allons faire maintenant.

> **Note :** Nous avons décidé d'utiliser `addTask` comme nom pour notre <i lang="en">prop callback</i> afin de comprendre son rôle rapidement. Une autre convention commune que vous pouvez rencontrer dans le code React consiste à préfixer les noms des <i lang="en">prop</i> qui sont des fonctions avec `on`, suivi du nom de l'évènement qui les déclenchera. Par exemple, nous aurions pu donner à notre formulaire une <i lang="en">prop</i> `onSubmit` avec la valeur de `addTask`.

## L'état et le <i lang="en">hook</i> `useState'

Jusqu'à présent, nous avons utilisé des <i lang="en">props</i> pour transmettre des données à travers nos composants et cela nous a été bien utile. Maintenant que nous devons gérer des saisies et des mises à jour de données, nous avons besoin de quelque chose en plus.

D'une part, les props proviennent du parent d'un composant. Notre `<Form />` n'héritera pas d'un nouveau nom pour notre tâche. Notre élément `<input />` vit directement à l'intérieur de `<Form />`, donc `<Form/>` sera directement responsable de la création de ce nouveau nom. Nous ne pouvons pas demander à `<Form />` de créer spontanément ses propres <i lang="en">props</i>, mais nous pouvons lui demander de suivre certaines de ses propres données pour nous. Les données de ce type, qu'un composant possède lui-même, forment son **état** (<i lang="en">state</i> en anglais). L'état est un autre outil puissant de React&nbsp;: les composants sont _propriétaires_ de leur état, mais peuvent aussi _mettre à jour_ celui-ci ultérieurement. Alors qu'il n'est pas possible de mettre à jour les <i lang="en">props</i> qu'un composant reçoit, mais seulement de les lire.

React fournit une variété de fonctions spéciales qui nous permettent de fournir de nouvelles capacités aux composants, comme cet état. Ces fonctions sont appelées **<i lang="en">hooks</i>**. Le <i lang="en">hook</i> `useState`, comme son nom l'indique, est précisément celui dont nous avons besoin pour donner un état à notre composant.

Pour utiliser un <i lang="en">hook</i> React, nous devons l'importer depuis le module React. Dans le fichier `Form.js`, changez la toute première ligne afin d'avoir ceci&nbsp;:

```jsx
import React, { useState } from "react";
```

Cela nous permet d'importer la fonction `useState()` afin de l'utiliser n'importe où dans ce fichier.

La fonction `useState()` crée un état pour un composant, et son seul paramètre détermine la _valeur initiale_ de cet état. Elle retourne deux choses&nbsp;: l'état, et une fonction qui peut être utilisée pour mettre à jour l'état plus tard.

Cela fait beaucoup de choses à assimiler d'un coup. Voyons ce que ça donne dans la pratique. Nous allons créer un état `name`, et une fonction pour mettre à jour cet état `name`.

Écrivez ce qui suit au-dessus de votre fonction `handleSubmit()`, dans `Form()`&nbsp;:

```jsx
const [name, setName] = useState("Utiliser les hooks !");
```

Que se passe-t-il dans cette ligne de code&nbsp;?

- Nous définissons la valeur initiale de `name` comme étant «&nbsp;Utiliser les hooks&nbsp;».
- Nous définissons une fonction `setName()` dont le rôle est de modifier `name`.
- `useState()` renvoie ces deux valeurs et nous utilisons [la décomposition de tableaux](/fr/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) pour les capturer dans des variables séparées.

### Lecture de l'état

Vous pouvez voir l'état `name` en action tout de suite. Ajoutez un attribut `value` dans le champ du formulaire, et utilisez `name` pour sa valeur. Votre navigateur affichera alors «&nbsp;Utiliser les hooks&nbsp;» à l'intérieur du champ.

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

Changez «&nbsp;Utiliser les hooks&nbsp;» en une chaîne vide une fois que vous avez terminé. C'est ce que nous voulons pour notre état initial.

```jsx
const [name, setName] = useState("");
```

### Lire ce qui a été saisi par la personne

Avant de pouvoir changer la valeur de `name`, nous devons capturer ce qui est saisi dans le formulaire. Pour cela, on utilise le gestionnaire d'évènement `onChange`. Écrivons une fonction `handleChange()`, et écoutons l'évènement sur l'élément `<input />`.

```jsx
// vers le haut du composant `Form`
function handleChange(e) {
  console.log("Saisie en cours !");
}

// Plus bas vers l'instruction return
<input
  type="text"
  id="new-todo-input"
  className="input input__lg"
  name="text"
  autoComplete="off"
  value={name}
  onChange={handleChange}
/>;
```

Actuellement, la valeur du champ ne changera pas lors de la saisie, mais votre navigateur affichera «&nbsp;Saisie en cours !&nbsp;» dans la console JavaScript. Cela nous permet de vérifier que notre gestionnaire d'évènements est bien attaché au champ. Afin de changer la valeur du champ, nous devons utiliser notre fonction `handleChange()` pour mettre à jour notre état `name`.

Pour lire le contenu du champ, au fur et à mesure de la saisie, on peut utiliser la propriété `value` du champ. Nous pouvons le faire dans `handleChange()` en lisant `e.target.value`. `e.target` représente l'élément qui a déclenché l'évènement `change`, ce qui correspond ici à notre champ. `e.target.value` correspond donc au texte que le champ contient.

Vous pouvez afficher cette valeur dans la console du navigateur à l'aide de `console.log()`.

```jsx
function handleChange(e) {
  console.log(e.target.value);
}
```

### Mise à jour de l'état

La journalisation n'est pas suffisante, nous voulons réellement stocker l'état mis à jour du nom lorsque la valeur saisie change&nbsp;! Changez `console.log()` en `setName()`, comme indiqué ici&nbsp;:

```jsx
function handleChange(e) {
  setName(e.target.value);
}
```

Maintenant, nous devons modifier notre fonction `handleSubmit()` pour qu'elle appelle `props.addTask` en utilisant le nom comme argument. Vous rappelez vous de notre <i lang="en">prop callback</i> ? Il nous servira à renvoyer la tâche vers le composant `<App />`, afin que nous puissions l'ajouter à notre liste de tâches par la suite.

Une bonne pratique consiste à effacer l'entrée après que le formulaire a été envoyé. Nous appellerons donc `setName()` de nouveau avec une chaîne vide pour le faire&nbsp;:

```jsx
function handleSubmit(e) {
  e.preventDefault();
  props.addTask(name);
  setName("");
}
```

Enfin, vous pouvez taper quelque chose dans le champ de saisie de votre navigateur et cliquer sur «&nbsp;Ajouter&nbsp;». Ce que vous avez tapé apparaîtra dans une boîte de dialogue d'alerte.

À cet instant, votre fichier `Form.js` devrait ressembler à ceci&nbsp;:

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
          Qu'y a-t-il à faire&nbsp;?
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
        Ajouter
      </button>
    </form>
  );
}

export default Form;
```

> **Note :** Vous remarquerez que vous pouvez soumettre des tâches vides en appuyant simplement sur le bouton Ajouter sans saisir de nom de tâche. Pouvez-vous penser à un moyen d'empêcher l'ajout de tâches vides&nbsp;? En guise d'indice, vous devez probablement ajouter une sorte de vérification dans la fonction `handleSubmit()`.

## Assembler le tout&nbsp;: ajouter une tâche

Maintenant que nous avons vu comment utiliser des évènements, des <i lang="en">callback props</i>, et des <i lang="en">hooks</i>, nous pouvons implémenter la fonctionnalité de notre application qui permettra d'ajouter une nouvelle tâche depuis le navigateur.

### Les tâches comme état

Importez `useState` dans `App.js`, pour pouvoir stocker nos tâches dans l'état. Pour cela, mettez à jour votre ligne d'importation `React` avec ce qui suit&nbsp;:

```jsx
import React, { useState } from "react";
```

Nous voulons passer `props.tasks` dans le <i lang="en">hook</i> `useState()`&nbsp;: cela préservera son état initial. Ajoutez ce qui suit en haut de la définition de votre fonction `App()`&nbsp;:

```jsx
const [tasks, setTasks] = useState(props.tasks);
```

Maintenant, nous pouvons modifier `taskList` pour qu'il utilise `tasks` et non `props.tasks`. La déclaration de constante pour `taskList` devrait maintenant ressembler à ceci&nbsp;:

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

Nous avons maintenant un <i lang="en">hook</i> `setTasks` que nous pouvons utiliser dans notre fonction `addTask()` pour mettre à jour notre liste de tâches. Il y a cependant un problème&nbsp;: nous ne pouvons pas simplement passer l'argument `name` de `addTask()` dans `setTasks`, parce que `tasks` est un tableau d'objets alors que `name` est une chaîne de caractères. Si on essayait de faire ça, le tableau serait remplacé par la chaîne de caractères.

Tout d'abord, nous devons mettre `name` dans un objet qui a la même structure que nos tâches existantes. Dans la fonction `addTask()`, nous allons créer un objet `newTask` à ajouter au tableau.

Nous devons ensuite créer un nouveau tableau auquel nous ajoutons cette nouvelle tâche, puis mettre à jour l'état des données de la tâche en fonction de ce nouvel état. Pour ce faire, nous pouvons utiliser la syntaxe de décomposition pour [copier le tableau existant](//fr/docs/Web/JavaScript/Reference/Operators/Spread_syntax#copier_un_tableau), et ajouter notre objet à la fin. Nous passons ensuite ce tableau dans `setTasks()` pour mettre à jour l'état.

En assemblant tout cela, votre fonction `addTask()` devrait ressembler à ceci&nbsp;:

```jsx
function addTask(name) {
  const newTask = { id: "id", name, completed: false };
  setTasks([...tasks, newTask]);
}
```

Vous pouvez maintenant utiliser le navigateur pour ajouter une tâche à nos données&nbsp;! Tapez n'importe quoi dans le formulaire et cliquez sur «&nbsp;Ajouter&nbsp;» (ou appuyez sur la touche <kbd>Enter</kbd>) et vous verrez votre nouvelle tâche apparaître à l'écran&nbsp;!

**Toutefois, nous avons un autre problème**. Notre fonction `addTask()` donne le même `id` à chaque tâche. Ceci dégrade l'accessibilité et empêche React de distinguer les tâches futures avec la <i lang="en">prop</i> `key`. En fait, React affichera un avertissement dans la console des outils de développement du navigateur&nbsp;: «&nbsp;Attention&nbsp;: il y a deux enfants qui ont la même clé&nbsp;» (<i lang="en">"Warning: Encountered two children with the same key…"</i>).

Nous devons résoudre ce problème. La création d'identifiants uniques est un problème difficile, pour lequel la communauté JavaScript a écrit des bibliothèques utiles. Nous utiliserons [nanoid](https://github.com/ai/nanoid) parce qu'elle est minuscule et qu'elle fonctionne.

Assurez-vous d'être dans le répertoire racine de votre application, puis exécutez la commande suivante dans le terminal&nbsp;:

- Si vous utilisez npm

  ```bash
  npm install nanoid
  ```

- Si vous utilisez yarn

  ```bash
  yarn add nanoid
  ```

Maintenant, nous pouvons importer `nanoid` en haut de `App.js` afin de l'utiliser pour créer des identifiants uniques pour nos nouvelles tâches. Tout d'abord, incluez la ligne d'importation suivante au début du fichier `App.js`:

```jsx
import { nanoid } from "nanoid";
```

Maintenant, mettons à jour `addTask()` pour que chaque identifiant de tâche ait un préfixe `todo-` puis une chaîne unique générée par nanoid. Mettez à jour votre déclaration de constante `newTask` comme ceci&nbsp;:

```jsx
const newTask = { id: `todo-${nanoid()}`, name, completed: false };
```

Sauvegardez les fichiers édités, et réessayez votre application. Vous pouvez désormais ajouter des tâches sans avoir cet avertissement sur les identifiants en double.

## Compter les tâches

Maintenant que nous pouvons ajouter de nouvelles tâches, vous pouvez remarquer un problème&nbsp;: notre titre indique 3 tâches restantes, peu importe le nombre de tâches que nous avons&nbsp;! Nous pouvons résoudre ce problème en mesurant la longueur de `taskList` et en changeant le texte de notre titre en conséquence.

Ajoutez ceci dans votre définition de `App()`, avant l'instruction `return`&nbsp;:

```jsx
const headingText = `${taskList.length} tâches restantes`;
```

C'est presque correct, mais si notre liste ne contient qu'une seule tâche, l'intitulé utilisera toujours le mot «&nbsp;tâches&nbsp;». Nous pouvons également en faire une variable. Mettez à jour le code que vous venez d'ajouter comme suit:

```jsx
const tasksWords =
  taskList.length !== 1 ? "tâches restantes" : "tâche restante";
const headingText = `${taskList.length} ${tasksWords}`;
```

Vous pouvez maintenant remplacer le contenu du texte de l'en-tête de la liste par la variable `headingText`. Mettez à jour votre élément `<h2>` comme suit&nbsp;:

```jsx
<h2 id="list-heading">{headingText}</h2>
```

## Achèvement d'une tâche

Vous avez peut-être remarqué que, lorsque vous cliquez sur une case à cocher, celle-ci est cochée et décochée de manière appropriée. C'est une fonctionnalité de HTML&nbsp;: le navigateur gère la mémoire des cases qui sont cochées ou décochées sans avoir besoin de notre aide. Toutefois, cela nous gène ici, car le fait de basculer une case à cocher ne change pas l'état de notre application React. Cela signifie que le navigateur et notre application sont désynchronisés. Nous devons écrire notre propre code pour synchroniser l'état du navigateur avec notre application.

### Constater le problème

Avant de corriger le problème, observons ce qui se passe.

Commençons par écrire une fonction `toggleTaskCompleted()` dans notre composant `App()`. Cette fonction aura un paramètre `id`, mais nous n'allons pas l'utiliser immédiatement. Pour l'instant, nous allons enregistrer la première tâche du tableau dans la console et nous allons inspecter ce qui se passe lorsque nous la cochons ou la décochons dans notre navigateur&nbsp;:

Ajoutez ceci juste au-dessus de la déclaration de la constante `taskList`&nbsp;:

```jsx
function toggleTaskCompleted(id) {
  console.log(tasks[0]);
}
```

Ensuite, nous allons ajouter `toggleTaskCompleted` aux <i lang="en">props</i> de chaque composant `<Todo />` rendu à l'intérieur de notre `taskList`. Mettez-le à jour comme ceci&nbsp;:

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

Ensuite, allez dans votre composant `Todo.js` et ajoutez un gestionnaire `onChange` à votre élément `<input />` qui utilise une fonction anonyme pour appeler `props.toggleTaskCompleted()` avec un paramètre de `props.id`. L'élément `<input />` devrait désormais ressembler à&nbsp;:

```jsx
<input
  id={props.id}
  type="checkbox"
  defaultChecked={props.completed}
  onChange={() => props.toggleTaskCompleted(props.id)}
/>
```

Enregistrez tout, puis revenez à votre navigateur. Remarquez que notre première tâche (Manger) est cochée. Ouvrez votre console JavaScript, puis cliquez sur la case à cocher à côté de Manger. La case est décochée, comme prévu. Votre console JavaScript affichera alors quelque chose comme ceci&nbsp;:

```text
Object { id: "task-0", name: "Eat", completed: true }
```

La case est décochée dans le navigateur, mais notre console nous indique que la tâche est toujours terminée. Nous allons corriger cela&nbsp;!

### Synchronisation du navigateur avec nos données

Revoyons notre fonction `toggleTaskCompleted()` dans `App.js`. Nous voulons qu'elle change la propriété `completed` uniquement pour la tâche qui a été activée, et qu'elle laisse toutes les autres inchangées. Pour ce faire, nous allons utiliser `map()` sur la liste des tâches et changer seulement celle qui a été complétée.

Mettez à jour votre fonction `toggleTaskCompleted()` comme suit&,ns^::

```jsx
function toggleTaskCompleted(id) {
  const updatedTasks = tasks.map((task) => {
    // si cette tâche possède le même identifiant que la tâche éditée
    if (id === task.id) {
      // on utilise la décomposition objet afin
      // de construire un nouvel objet dont la
      // propriété `completed` est l'inverse
      return { ...task, completed: !task.completed };
    }
    return task;
  });
  setTasks(updatedTasks);
}
```

Ici, nous définissons une constante `updatedTasks` qui correspond au tableau `tasks` original. Si la propriété `id` de la tâche correspond à l'identifiant fourni à la fonction via le paramètre `id`, nous utilisons [la syntaxe de décomposition](/fr/docs/Web/JavaScript/Reference/Operators/Spread_syntax) pour créer un nouvel objet, et basculer la propriété `completed` de cet objet avant de le retourner. Si elle ne correspond pas, nous retournons l'objet original.

Ensuite, nous appelons `setTasks()` avec ce nouveau tableau afin de mettre à jour notre état.

## Suppression d'une tâche

La suppression d'une tâche suivra un schéma similaire à celui du changement d'état&nbsp;: nous devons définir une fonction pour mettre à jour notre état, puis passer cette fonction dans `<Todo />` en tant que prop et l'appeler quand le bon évènement se produit.

### La fonction de rappel `deleteTask()`

Ici, nous allons commencer par écrire une fonction `deleteTask()` dans votre composant `App`. Comme `toggleTaskCompleted()`, cette fonction prendra un paramètre `id`. Pour commencer, nous allons uniquement afficher cet identifiant dans la console. Ajoutez ce qui suit sous `toggleTaskCompleted()`&nbsp;:

```jsx
function deleteTask(id) {
  console.log(id);
}
```

Ensuite, ajoutez une autre <i lang="en">prop callback</i> à notre tableau de composants `<Todo />`&nbsp;:

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

Dans `Todo.js`, nous voulons appeler `props.deleteTask()` lorsque nous appuyons sur le bouton «&nbsp;Supprimer&nbsp;». `deleteTask()` a besoin de connaître l'identifiant de la tâche qui l'a appelé, afin de pouvoir supprimer la bonne tâche de l'état.

Mettez à jour le bouton "Supprimer" dans `Todo.js`, comme ceci&nbsp;:

```jsx
<button
  type="button"
  className="btn btn__danger"
  onClick={() => props.deleteTask(props.id)}>
  Supprimer <span className="visually-hidden">{props.name}</span>
</button>
```

Maintenant, lorsque vous cliquez sur l'un des boutons «&nbsp;Supprimer&nbsp;» de l'application, la console de votre navigateur devrait enregistrer l'identifiant de la tâche concernée.

## Suppression des tâches de l'état et de l'interface utilisateur

Maintenant que nous savons que `deleteTask()` est invoquée correctement, nous pouvons appeler notre <i lang="en">hook</i> `setTasks()` dans `deleteTask()` pour supprimer réellement cette tâche de l'état de l'application afin que celui-ci corresponde à ce qui est présenté visuellement. Puisque `setTasks()` attend un tableau comme argument, nous devons lui fournir un nouveau tableau qui copie les tâches existantes et _exclut_ la tâche dont l'identifiant correspond à celui passé à `deleteTask()`.

C'est l'occasion idéale d'utiliser [`filter()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter). Nous pouvons tester chaque tâche, et exclure une tâche du nouveau tableau si sa propriété `id` correspond à l'argument `id` passé à `deleteTask()`.

Mettez à jour la fonction `deleteTask()` dans votre fichier `App.js` comme suit&nbsp;:

```jsx
function deleteTask(id) {
  const remainingTasks = tasks.filter((task) => id !== task.id);
  setTasks(remainingTasks);
}
```

Essayez à nouveau votre application. Vous devriez maintenant pouvoir supprimer une tâche de votre application&nbsp;!

## Résumé

Cet article était dense. Nous avons vu comment React gère les évènements et les états. Nous avons implémenté une fonctionnalité permettant d'ajouter et de supprimer des tâches, et de marquer des tâches comme étant terminées. Nous en avons presque terminé. Dans le prochain article, nous implémenterons une fonctionnalité pour modifier les tâches existantes, filtrer la liste des tâches entre toutes les tâches, les tâches terminées et les tâches incomplètes. Nous en profiterons pour aborder le rendu conditionnel de l'interface utilisateur.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
