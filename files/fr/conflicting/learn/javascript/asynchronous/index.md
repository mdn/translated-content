---
title: Choisir la bonne approche
slug: conflicting/Learn/JavaScript/Asynchronous
tags:
  - Beginner
  - Intervals
  - JavaScript
  - Learn
  - Optimize
  - Promises
  - async
  - asynchronous
  - await
  - requestAnimationFrame
  - setInterval
  - setTimeout
  - timeouts
translation_of: Learn/JavaScript/Asynchronous/Choosing_the_right_approach
original_slug: Learn/JavaScript/Asynchronous/Choosing_the_right_approach
---
{{LearnSidebar}}{{PreviousMenu("Learn/JavaScript/Asynchronous/Async_await", "Learn/JavaScript/Asynchronous")}}

Pour terminer ce module, nous vous proposons une brève discussion sur les différentes techniques et fonctionnalités asynchrones abordées tout au long de ce module, en examinant laquelle de ces techniques est la plus pertinente en fonction de la situation ainsi que des recommandations et des rappels des pièges courants le cas échéant.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis :</th>
      <td>
        Connaissances informatiques de base, une compréhension raisonnable des
        principes fondamentaux de JavaScript.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif :</th>
      <td>
        Être capable de faire un choix judicieux quant à l'utilisation de
        différentes techniques de programmation asynchrone.
      </td>
    </tr>
  </tbody>
</table>

## Fonctions de rappels (callbacks) asynchrones

Généralement trouvé dans les API à l'ancienne, une fonction de rappel (ou _callback_ en anglais) implique qu'une fonction soit passée en paramètre à une autre fonction, qui est ensuite invoquée lorsqu'une opération asynchrone est terminée afin réaliser une opération avec le résultat. C'est la méthode qui précédait l'arrivée des promesses : elle n'est pas aussi efficace ou flexible. Ne l'utilisez que si nécessaire.

| Opération unique retardée | Opération répétée       | Opérations séquentielles multiples | Opérations simultanées multiples |
| ------------------------- | ----------------------- | ---------------------------------- | -------------------------------- |
| Non                       | Oui (rappels récursifs) | Oui (rappels imbriqués)            | Non                              |

### Exemple de code

Un exemple qui charge une ressource via l'API [`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest) ([l'exécuter en direct](https://mdn.github.io/learning-area/javascript/asynchronous/introducing/xhr-async-callback.html), et [voir la source](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/introducing/xhr-async-callback.html)) :

```js
function loadAsset(url, type, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.responseType = type;

  xhr.onload = function() {
    callback(xhr.response);
  };

  xhr.send();
}

function displayImage(blob) {
  let objectURL = URL.createObjectURL(blob);

  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
}

loadAsset('coffee.jpg', 'blob', displayImage);
```

### Pièges

- Les fonctions de rappels imbriquées peuvent être encombrantes et difficiles à lire (ce qu'on appelle parfois « _callback hell_ » en anglais).
- Les fonctions de rappel pour les cas d'erreur doivent être appelés une fois pour chaque niveau d'imbrication, alors qu'avec les promesses, vous pouvez simplement utiliser un seul bloc `.catch()` pour gérer les erreurs de toute la chaîne.
- Les fonctions de rappel asynchrones ne sont pas très élégantes.
- Les fonctions de rappel passées en argument de promesses sont toujours appelés dans l'ordre strict où ils sont placés dans la file d'attente des événements ; les fonctions de rappel asynchrones ne le sont pas.
- Les fonctions de rappel asynchrones perdent le contrôle total de la façon dont la fonction sera exécutée lorsqu'elle est transmise à une bibliothèque tierce.

### Compatibilité des navigateurs

Très bonne prise en charge générale, bien que la prise en charge exacte dans les différentes API dépende de l'API en question. Reportez-vous à la documentation de référence de l'API que vous utilisez pour obtenir des informations plus spécifiques.

### Plus d'informations

- [Introduction au JavaScript asynchrone](/fr/docs/Learn/JavaScript/Asynchronous/Introducing), en particulier les [Fonctions de rappels asynchrones](/fr/docs/Learn/JavaScript/Asynchronous/Introducing#async_callbacks)

## setTimeout()

[`setTimeout()`](/fr/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) est une méthode qui permet d'exécuter une fonction après l'écoulement d'un délai arbitraire.

| Opération unique retardée | Opération répétée      | Opérations séquentielles multiples | Opérations simultanées multiples |
| ------------------------- | ---------------------- | ---------------------------------- | -------------------------------- |
| Oui                       | Oui (délais récursifs) | Oui (délais d'attente imbriqués)   | Non                              |

### Exemple de code

Ici, le navigateur attendra deux secondes avant d'exécuter la fonction anonyme, puis affichera le message dans la console ([voir son exécution en direct](https://mdn.github.io/learning-area/javascript/asynchronous/loops-and-intervals/simple-settimeout.html), et [voir le code source](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/loops-and-intervals/simple-settimeout.html)) :

```js
let myGreeting = setTimeout(function() {
  console.log('Bonjour, M. Univers !');
}, 2000)
```

### Pièges

Vous pouvez utiliser des appels récursifs à `setTimeout()` pour exécuter une fonction de manière répétée de façon similaire à `setInterval()`, en utilisant un code comme celui-ci :

```js
let i = 1;
setTimeout(function run() {
  console.log(i);
  i++;

  setTimeout(run, 100);
}, 100);
```

Il existe une différence entre `setTimeout()` appelé récursivement et `setInterval()` :

- Les récursions avec `setTimeout()` garantissent qu'au moins le temps spécifié (100ms dans cet exemple) s'écoulera entre les exécutions ; le code s'exécutera puis attendra 100 millisecondes avant de s'exécuter à nouveau. L'intervalle sera le même quelle que soit la durée d'exécution du code.
- Avec `setInterval()`, l'intervalle que nous choisissons _inclut_ le temps d'exécution du code que nous voulons exécuter. Disons que le code prend 40 millisecondes pour s'exécuter — l'intervalle finit alors par n'être que de 60 millisecondes.

Lorsque votre code a le potentiel de prendre plus de temps à s'exécuter que l'intervalle de temps que vous avez assigné, il est préférable d'utiliser `setTimeout()` récursivement - cela maintiendra l'intervalle de temps constant entre les exécutions, quelle que soit la durée d'exécution du code, et vous n'obtiendrez pas d'erreurs.

### Compatibilité des navigateurs

{{Compat("api.WindowOrWorkerGlobalScope.setTimeout")}}

### Plus d'informations

- [JavaScript asynchrone coopératif : Délais et intervalles](/fr/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals), en particulier [`setTimeout()`](</fr/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals#settimeout()>)
- Page de référence pour [`setTimeout()`](/fr/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)

## setInterval()

[`setInterval()`](/fr/docs/Web/API/WindowOrWorkerGlobalScope/setInterval) est une méthode qui permet d'exécuter une fonction de façon répétée avec des intervalles de temps donnés entre chaque exécution. Cette méthode n'est pas aussi efficace que [`requestAnimationFrame()`](/fr/docs/Web/API/Window/requestAnimationFrame), mais elle permet de choisir le rythme d'exécution.

| Opération unique retardée | Opération répétée | Opérations séquentielles multiples         | Opérations simultanées multiples |
| ------------------------- | ----------------- | ------------------------------------------ | -------------------------------- |
| Non                       | Oui               | Non (à moins qu'elles ne soient les mêmes) | Non                              |

### Exemple de code

La fonction suivante crée un nouvel objet [`Date()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date), en extrait une chaîne de temps à l'aide de [`toLocaleTimeString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString), puis l'affiche dans l'interface utilisateur. Nous l'exécutons ensuite une fois par seconde à l'aide de `setInterval()`, créant l'effet d'une horloge numérique qui se met à jour une fois par seconde ([voir cela en direct](https://mdn.github.io/learning-area/javascript/asynchronous/loops-and-intervals/setinterval-clock.html), et aussi [voir la source](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/loops-and-intervals/setinterval-clock.html)) :

```js
function displayTime() {
  let date = new Date();
  let time = date.toLocaleTimeString();
  document.getElementById('demo').textContent = time;
}

const createClock = setInterval(displayTime, 1000);
```

### Pièges

- La fréquence d'exécution et d'affichage n'est pas optimisée pour le système sur lequel l'animation est exécutée, et peut être quelque peu inefficace. À moins que vous n'ayez besoin de choisir un framerate spécifique (plus lent), il est généralement préférable d'utiliser `requestAnimationFrame()`.

### Compatibilité des navigateurs

{{Compat("api.WindowOrWorkerGlobalScope.setInterval")}}

### Plus d'informations

- [JavaScript asynchrone coopératif : Délais et intervalles](/fr/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals), en particulier [setInterval()](/fr/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)
- Page de référence pour [setInterval()](/fr/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)

## requestAnimationFrame()

[`requestAnimationFrame()`](/fr/docs/Web/API/Window/requestAnimationFrame) est une méthode qui vous permet d'exécuter une fonction de manière répétée, et efficace, à la meilleure fréquence de rafraîchissement disponible compte tenu du navigateur/système actuel. Vous devriez, dans la mesure du possible, utiliser cette méthode au lieu de `setInterval()`/`setTimeout()` récursif, sauf si vous avez besoin d'une fréquence de rafraîchissement spécifique.

| Opération unique retardée | Opération répétée | Opérations séquentielles multiples  | Opérations simultanées multiples |
| ------------------------- | ----------------- | ----------------------------------- | -------------------------------- |
| Non                       | Oui               | Non (à moins que ce soit les mêmes) | Non                              |

### Exemple de code

Une toupie animée simple ; vous pouvez trouver cet [exemple en direct sur GitHub](https://mdn.github.io/learning-area/javascript/asynchronous/loops-and-intervals/simple-raf-spinner.html) (voir le [code source](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/loops-and-intervals/simple-raf-spinner.html)) :

```js
const spinner = document.querySelector('div');
let rotateCount = 0;
let startTime = null;
let rAF;

function draw(timestamp) {
  if(!startTime) {
    startTime = timestamp;
  }

  rotateCount = (timestamp - startTime) / 3;

  if(rotateCount > 359) {
    rotateCount %= 360;
  }

  spinner.style.transform = 'rotate(' + rotateCount + 'deg)';

  rAF = requestAnimationFrame(draw);
}

draw();
```

### Pièges

- Vous ne pouvez pas choisir une fréquence d'images spécifique avec `requestAnimationFrame()`. Si vous devez exécuter votre animation à un _framerate_ plus lent, vous devrez utiliser `setInterval()` ou `setTimeout()` récursif.

### Compatibilité des navigateurs

{{Compat("api.Window.requestAnimationFrame")}}

### Plus d'informations

- [JavaScript asynchrone coopératif : Délais et intervalles](/fr/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals), en particulier [`requestAnimationFrame()`](</fr/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals#requestanimationframe()>)
- Page de référence pour [`requestAnimationFrame()`](/fr/docs/Web/API/Window/requestAnimationFrame)

## Promises (Promesses)

[Les promesses](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) sont une fonctionnalité JavaScript qui permet d'exécuter des opérations asynchrones et d'attendre qu'elles soient définitivement terminées avant d'exécuter une autre opération en fonction de son résultat. Les promesses sont la colonne vertébrale du JavaScript asynchrone moderne.

| Opération unique retardée | Opération répétée | Opérations séquentielles multiples | Opérations simultanées multiples |
| ------------------------- | ----------------- | ---------------------------------- | -------------------------------- |
| Non                       | Non               | Oui                                | Voir `Promise.all()`, en dessous |

### Exemple de code

Le code suivant va chercher une image sur le serveur et l'affiche à l'intérieur d'un élément [`<img>`](/fr/docs/Web/HTML/Element/Img) ; [voyez-le aussi en direct](https://mdn.github.io/learning-area/javascript/asynchronous/promises/simple-fetch-chained.html), et voyez aussi [le code source](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/promises/simple-fetch-chained.html) :

```js
fetch('coffee.jpg')
.then(response => response.blob())
.then(myBlob => {
  let objectURL = URL.createObjectURL(myBlob);
  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
})
.catch(e => {
  console.log('Il y a eu un problème avec votre opération de récupération : ' + e.message);
});
```

### Pièges

Les chaînes de promesses peuvent être complexes et difficiles à analyser. Si vous imbriquez un certain nombre de promesses, vous pouvez vous retrouver avec des problèmes similaires à l'enfer des rappels. Par exemple :

```js
remotedb.allDocs({
  include_docs: true,
  attachments: true
}).then(function (result) {
  let docs = result.rows;
  docs.forEach(function(element) {
    localdb.put(element.doc).then(function(response) {
      alert("Un document extrait avec un id " + element.doc._id + " et ajouté à la base de données locale.");
    }).catch(function (err) {
      if (err.name == 'conflict') {
        localdb.get(element.doc._id).then(function (resp) {
          localdb.remove(resp._id, resp._rev).then(function (resp) {
// et cetera...
```

Il est préférable d'utiliser la puissance de chaînage des promesses pour aller avec une structure plus plate et plus facile à analyser :

```js
remotedb.allDocs(...).then(function (resultOfAllDocs) {
  return localdb.put(...);
}).then(function (resultOfPut) {
  return localdb.get(...);
}).then(function (resultOfGet) {
  return localdb.put(...);
}).catch(function (err) {
  console.log(err);
});
```

ou encore :

```js
remotedb.allDocs(...)
.then(resultOfAllDocs => {
  return localdb.put(...);
})
.then(resultOfPut => {
  return localdb.get(...);
})
.then(resultOfGet => {
  return localdb.put(...);
})
.catch(err => console.log(err));
```

Cela couvre une grande partie des éléments de base. Pour un traitement beaucoup plus complet, voir l'excellent article [Nous avons un problème avec les promesses](https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html) (en), par Nolan Lawson.

### Compatibilité des navigateurs

{{Compat("javascript.builtins.Promise")}}

### Plus d'informations

- [Gérer les opérations asynchrones avec élégance grâce aux Promesses](/fr/docs/Learn/JavaScript/Asynchronous/Promises)
- [Utiliser les promesses](/fr/docs/Web/JavaScript/Guide/Using_promises)
- Page de référence pour [`Promise`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## Promise.all()

Une fonction JavaScript qui vous permet d'attendre que plusieurs promesses se terminent avant d'exécuter une autre opération basée sur les résultats de toutes les autres promesses.

| Opération unique retardée | Opération répétée | Opérations séquentielles multiples | Opérations simultanées multiples |
| ------------------------- | ----------------- | ---------------------------------- | -------------------------------- |
| Non                       | Non               | Non                                | Oui                              |

### Exemple de code

L'exemple suivant va chercher plusieurs ressources sur le serveur, et utilise `Promise.all()` pour attendre qu'elles soient toutes disponibles avant de les afficher toutes — [le voir fonctionner](https://mdn.github.io/learning-area/javascript/asynchronous/promises/promise-all.html), et voir son [code source](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/promises/promise-all.html) :

```js
function fetchAndDecode(url, type) {
  // Retourner la promesse de niveau supérieur, de sorte que le résultat
  // de l'ensemble de la chaîne est retourné hors de la fonction
  return fetch(url).then(response => {
    // Selon le type de fichier recherché, utilisez la fonction appropriée pour décoder son contenu
    if(type === 'blob') {
      return response.blob();
    } else if(type === 'text') {
      return response.text();
    }
  })
  .catch(e => {
    console.log(`Il y a eu un problème avec votre opération de récupération de la ressource "${url}" : ` + e.message);
  });
}

// Appeler la méthode fetchAndDecode() pour récupérer les images et le texte
// et stocker leurs promesses dans des variables
let coffee = fetchAndDecode('coffee.jpg', 'blob');
let tea = fetchAndDecode('tea.jpg', 'blob');
let description = fetchAndDecode('description.txt', 'text');

// Utiliser Promise.all() pour exécuter le code uniquement lorsque
// les trois appels de fonction ont été résolus
Promise.all([coffee, tea, description]).then(values => {
  console.log(values);
  // Stocker chaque valeur retournée par les promesses dans des variables séparées ;
  // créer des URL d'objets à partir des blobs.
  let objectURL1 = URL.createObjectURL(values[0]);
  let objectURL2 = URL.createObjectURL(values[1]);
  let descText = values[2];

  // Afficher les images dans les éléments <img>
  let image1 = document.createElement('img');
  let image2 = document.createElement('img');
  image1.src = objectURL1;
  image2.src = objectURL2;
  document.body.appendChild(image1);
  document.body.appendChild(image2);

  // Afficher le texte d'un paragraphe
  let para = document.createElement('p');
  para.textContent = descText;
  document.body.appendChild(para);
});
```

### Pièges

- Si `Promesse.all()` est rejeté, alors une ou plusieurs des promesses que vous lui fournissez dans son paramètre de tableau doivent être rejetées, ou pourraient ne pas retourner de promesses du tout. Vous devez vérifier chacune d'entre elles pour voir ce qu'elles ont retourné.

### Compatibilité des navigateurs

{{Compat("javascript.builtins.Promise.all")}}

### Plus d'informations

- [Gérer les opérations asynchrones avec élégance grâce aux Promesses](/fr/docs/Learn/JavaScript/Asynchronous/Promises#running_code_in_response_to_multiple_promises_fulfilling)
- Page de référence pour [`Promise.all()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)

## async/await

Un outil syntaxique construit sur les promesses qui vous permet d'exécuter des opérations asynchrones en utilisant une syntaxe qui ressemble plus à l'écriture de code de rappel synchrone.

| Opération unique retardée | Opération répétée | Opérations séquentielles multiples | Opérations simultanées multiples          |
| ------------------------- | ----------------- | ---------------------------------- | ----------------------------------------- |
| Non                       | Non               | Oui                                | Oui (en combinaison avec `Promise.all()`) |

### Exemple de code

L'exemple suivant est un remaniement de l'exemple simple de promesse que nous avons vu précédemment, qui récupère et affiche une image, écrit à l'aide d'async/await ([voir en direct](https://mdn.github.io/learning-area/javascript/asynchronous/async-await/simple-refactored-fetch.html), et voir le [code source](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/async-await/simple-refactored-fetch.html)) :

```js
async function myFetch() {
  let response = await fetch('coffee.jpg');
  let myBlob = await response.blob();

  let objectURL = URL.createObjectURL(myBlob);
  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
}

myFetch();
```

### Pièges

- Vous ne pouvez pas utiliser l'opérateur `await` à l'intérieur d'une fonction non-`async`, ou dans le contexte de haut niveau de votre code. Cela peut parfois entraîner la création d'une fonction encapsulante supplémentaire, ce qui peut être légèrement frustrant dans certaines circonstances. Mais cela en vaut la peine la plupart du temps.
- Le support des navigateurs pour `async`/`await` n'est pas aussi bon que celui des promesses. Si vous souhaitez utiliser `async`/`await` mais que vous êtes préoccupé par la prise en charge de navigateurs plus anciens, vous pouvez envisager d'utiliser la bibliothèque [BabelJS](https://babeljs.io/) — cela vous permet d'écrire vos applications en utilisant le JavaScript le plus récent et de laisser Babel déterminer les modifications éventuellement nécessaires pour les navigateurs de vos utilisateurs.

### Compatibilité des navigateurs

{{Compat("javascript.statements.async_function")}}

### Plus d'informations

- [Faciliter la programmation asynchrone avec `async` et `await`](/fr/docs/Learn/JavaScript/Asynchronous/Async_await)
- Page de référence pour [les fonctions asynchrones](/fr/docs/Web/JavaScript/Reference/Statements/async_function)
- Page de référence pour l'opérateur [await](/fr/docs/Web/JavaScript/Reference/Operators/await)

{{PreviousMenu("Learn/JavaScript/Asynchronous/Async_await", "Learn/JavaScript/Asynchronous")}}

## Dans ce module

- [Concepts généraux de programmation asynchrone](/fr/docs/Learn/JavaScript/Asynchronous/Concepts)
- [Introduction au JavaScript asynchrone](/fr/docs/Learn/JavaScript/Asynchronous/Introducing)
- [JavaScript asynchrone coopératif : Délais et intervalles](/fr/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals)
- [Gérer les opérations asynchrones avec élégance grâce aux Promesses](/fr/docs/Learn/JavaScript/Asynchronous/Promises)
- [Faciliter la programmation asynchrone avec `async` et `await`](/fr/docs/Learn/JavaScript/Asynchronous/Async_await)
- [Choisir la bonne approche](/fr/docs/Learn/JavaScript/Asynchronous/Choosing_the_right_approach)
