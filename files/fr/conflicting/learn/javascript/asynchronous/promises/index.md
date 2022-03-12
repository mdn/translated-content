---
title: Faciliter la programmation asynchrone avec async et await
slug: conflicting/Learn/JavaScript/Asynchronous/Promises
tags:
  - Beginner
  - CodingScripting
  - Guide
  - JavaScript
  - Learn
  - Promises
  - async
  - asynchronous
  - await
translation_of: Learn/JavaScript/Asynchronous/Async_await
original_slug: Learn/JavaScript/Asynchronous/Async_await
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Promises", "Learn/JavaScript/Asynchronous/Choosing_the_right_approach", "Learn/JavaScript/Asynchronous")}}

Plus récemment, les [fonctions async](/fr/docs/Web/JavaScript/Reference/Statements/async_function) et le mot-clé [`await`](/fr/docs/Web/JavaScript/Reference/Operators/await) ont été ajoutés au langage JavaScript avec l'édition intitulée ECMAScript 2017. Ces fonctionnalités agissent essentiellement comme du sucre syntaxique sur les promesses, rendant le code asynchrone plus facile à écrire et à lire par la suite. Elles font en sorte que le code asynchrone ressemble davantage au code synchrone de la vieille école, et elles valent donc la peine d'être apprises. Cet article fournit les informations à connaître.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis :</th>
      <td>
        Connaissances informatiques de base, compréhension raisonnable des
        principes fondamentaux de JavaScript, compréhension du code asynchrone
        en général et des promesses.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif :</th>
      <td>Comprendre <code>async/await</code> et comment les utiliser.</td>
    </tr>
  </tbody>
</table>

## Les bases de async/await

L'utilisation `async/await` dans votre code comporte deux parties.

### Le mot-clé async

Tout d'abord, nous avons le mot-clé `async`, que vous mettez devant une déclaration de fonction pour la transformer en une [fonction asynchrone](/fr/docs/Web/JavaScript/Reference/Statements/async_function). Une fonction asynchrone est une fonction qui saura réagir à une éventuelle utilisation du mot-clé `await` pour invoquer du code asynchrone.

Essayez de taper les lignes suivantes dans la console JS de votre navigateur :

```js
function hello() { return "Bonjour" };
hello();
```

La fonction renvoie « Bonjour » — rien de spécial, n'est-ce pas ?

Mais que se passe-t-il si nous transformons cette fonction en une fonction asynchrone ? Essayez ce qui suit :

```js
async function hello() { return "Bonjour" };
hello();
```

Ah. L'invocation de la fonction renvoie maintenant une promesse. C'est l'une des caractéristiques des fonctions asynchrones - leurs valeurs de retour sont nécessairement converties en promesses.

Vous pouvez également créer une [expression de fonction asynchrone](/fr/docs/Web/JavaScript/Reference/Operators/async_function), comme suit :

```js
let hello = async function() { return "Bonjour" };
hello();
```

Et vous pouvez utiliser les fonctions fléchées :

```js
let hello = async () => { return "Bonjour" };
```

Elles font toutes à peu près la même chose.

Pour consommer réellement la valeur renvoyée lorsque la promesse se réalise, puisqu'elle renvoie une promesse, nous pourrions utiliser un bloc `.then()` :

```js
hello().then((value) => console.log(value));
```

ou même simplement un raccourci tel que

```js
hello().then(console.log);
```

Comme nous l'avons vu dans l'article précédent.

Ainsi, le mot-clé `async` est ajouté aux fonctions pour leur indiquer de retourner une promesse plutôt que de retourner directement la valeur.

### Le mot-clé await

L'avantage d'une fonction asynchrone ne devient apparent que lorsque vous la combinez avec le mot-clé `await`. `await` ne fonctionne qu'à l'intérieur de fonctions asynchrones dans du code JavaScript ordinaire, mais il peut être utilisé seul avec [des modules JavaScript](/fr/docs/Web/JavaScript/Guide/Modules).

`await` peut être placé devant toute fonction asynchrone basée sur une promesse pour mettre en pause votre code sur cette ligne jusqu'à ce que la promesse se réalise, puis retourner la valeur résultante.

Vous pouvez utiliser `await` lors de l'appel de toute fonction qui renvoie une promesse, y compris les fonctions de l'API web.

Voici un exemple trivial :

```js
async function hello() {
  return salutation = await Promise.resolve("Bonjour");
};

hello().then(console.log);
```

Bien sûr, l'exemple ci-dessus n'est pas très utile, même s'il sert à illustrer la syntaxe. Passons maintenant à un exemple réel.

## Réécriture du code des promesses avec async/await

Reprenons un exemple simple de récupération que nous avons vu dans l'article précédent :

```js
fetch('coffee.jpg')
.then(response => {
  if (!response.ok) {
    throw new Error(`Erreur HTTP ! statut : ${response.status}`);
  }
  return response.blob();
})
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

À ce stade, vous devriez avoir une compréhension raisonnable des promesses et de leur fonctionnement, mais convertissons le tout en utilisant async/await pour voir à quel point cela simplifie les choses :

```js
async function myFetch() {
  let response = await fetch('coffee.jpg');

  if (!response.ok) {
    throw new Error(`Erreur HTTP ! statut : ${response.status}`);
  }

  let myBlob = await response.blob();

  let objectURL = URL.createObjectURL(myBlob);
  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
}

myFetch()
.catch(e => {
  console.log('Il y a eu un problème avec votre opération de récupération : ' + e.message);
});
```

Cela rend le code beaucoup plus simple et plus facile à comprendre — plus de blocs `.then()` partout !

Étant donné qu'un mot-clé `async` transforme une fonction en promesse, vous pourriez remanier votre code pour utiliser une approche hybride de promesses et de `await`, en faisant sortir la seconde moitié de la fonction dans un nouveau bloc pour la rendre plus flexible :

```js
async function myFetch() {
  let response = await fetch('coffee.jpg');
  if (!response.ok) {
    throw new Error(`Erreur HTTP ! statut : ${response.status}`);
  }
  return await response.blob();

}

myFetch().then((blob) => {
  let objectURL = URL.createObjectURL(blob);
  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
}).catch(e => console.log(e));
```

Vous pouvez essayer de taper vous-même l'exemple, ou d'exécuter notre [exemple en direct](https://mdn.github.io/learning-area/javascript/asynchronous/async-await/simple-fetch-async-await.html) (voir aussi le [code source](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/async-await/simple-fetch-async-await.html)).

### Mais comment est-ce que cela fonctionne ?

Vous remarquerez que nous avons enveloppé le code à l'intérieur d'une fonction, et que nous avons inclus le mot-clé `async` avant le mot-clé `function`. C'est nécessaire - vous devez créer une fonction async pour définir un bloc de code dans lequel vous exécuterez votre code async ; comme nous l'avons dit précédemment, `await` ne fonctionne qu'à l'intérieur de fonctions async.

À l'intérieur de la définition de la fonction `myFetch()`, vous pouvez voir que le code ressemble beaucoup à la version précédente de la promesse, mais il y a quelques différences. Au lieu de devoir enchaîner un bloc `.then()` à la fin de chaque méthode basée sur une promesse, il suffit d'ajouter un mot-clé `await` avant l'appel de la méthode, puis d'affecter le résultat à une variable. Le mot-clé `await` fait en sorte que le moteur d'exécution JavaScript mette votre code en pause sur cette ligne, ne permettant pas à d'autres codes de s'exécuter entre-temps jusqu'à ce que l'appel de fonction asynchrone ait retourné son résultat - très utile si le code suivant dépend de ce résultat !

Une fois que c'est terminé, votre code continue à s'exécuter à partir de la ligne suivante. Par exemple :

```js
let response = await fetch('coffee.jpg');
```

La réponse retournée par la promesse `fetch()` remplie est affectée à la variable `response` lorsque cette réponse devient disponible, et le parseur fait une pause sur cette ligne jusqu'à ce que cela se produise. Une fois que la réponse est disponible, le parseur passe à la ligne suivante, qui crée un [`Blob`](/fr/docs/Web/API/Blob) à partir de celle-ci. Cette ligne invoque également une méthode async basée sur les promesses, nous utilisons donc `await` ici aussi. Lorsque le résultat de l'opération revient, nous le retournons hors de la fonction `myFetch()`.

Cela signifie que lorsque nous appelons la fonction `myFetch()`, elle retourne une promesse, de sorte que nous pouvons enchaîner un `.then()` à la fin de celle-ci à l'intérieur duquel nous gérons l'affichage du blob à l'écran.

Vous vous dites probablement déjà « c'est vraiment cool ! », et vous avez raison — moins de blocs `.then()` pour envelopper le code, et cela ressemble surtout à du code synchrone, donc c'est vraiment intuitif.

### Ajout de la gestion des erreurs

Si vous voulez ajouter la gestion des erreurs, vous avez plusieurs options.

Vous pouvez utiliser une structure synchrone [`try...catch`](/fr/docs/Web/JavaScript/Reference/Statements/try...catch) avec `async`/`await`. Cet exemple développe la première version du code que nous avons montré ci-dessus :

```js
async function myFetch() {
  try {
    let response = await fetch('coffee.jpg');

    if (!response.ok) {
      throw new Error(`Erreur HTTP ! statut : ${response.status}`);
    }
    let myBlob = await response.blob();
    let objectURL = URL.createObjectURL(myBlob);
    let image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);

  } catch(e) {
    console.log(e);
  }
}

myFetch();
```

Le bloc `catch() {}` reçoit un objet d'erreur, que nous avons appelé `e` ; nous pouvons maintenant l'enregistrer dans la console, et il nous donnera un message d'erreur détaillé montrant où dans le code l'erreur a été lancée.

Si vous vouliez utiliser la deuxième version (remaniée) du code que nous avons montré ci-dessus, il serait préférable de continuer l'approche hybride et d'enchaîner un bloc `.catch()` à la fin de l'appel `.then()`, comme ceci :

```js
async function myFetch() {
  let response = await fetch('coffee.jpg');
  if (!response.ok) {
    throw new Error(`Erreur HTTP ! statut : ${response.status}`);
  }
  return await response.blob();

}

myFetch().then((blob) => {
  let objectURL = URL.createObjectURL(blob);
  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
})
.catch((e) =>
  console.log(e)
);
```

En effet, le bloc `.catch()` attrapera les erreurs survenant à la fois dans l'appel de fonction asynchrone et dans la chaîne de promesses. Si vous utilisiez le bloc `try`/`catch` ici, vous pourriez toujours obtenir des erreurs non gérées dans la fonction `myFetch()` lorsqu'elle est appelée.

Vous pouvez trouver ces deux exemples sur GitHub :

- [simple-fetch-async-await-try-catch.html](https://mdn.github.io/learning-area/javascript/asynchronous/async-await/simple-fetch-async-await-try-catch.html) (voir le [code source](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/async-await/simple-fetch-async-await-try-catch.html))
- [simple-fetch-async-await-promise-catch.html](https://mdn.github.io/learning-area/javascript/asynchronous/async-await/simple-fetch-async-await-promise-catch.html) (voir le [code source](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/async-await/simple-fetch-async-await-promise-catch.html))

## En attente d'un Promise.all()

`async`/`await` est construit au-dessus de [Promises](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise), il est donc compatible avec toutes les fonctionnalités offertes par les promesses. Cela inclut [`Promise.all()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) — vous pouvez tout à fait attendre un appel `Promise.all()` pour obtenir tous les résultats retournés dans une variable d'une manière qui ressemble à du simple code synchrone. Encore une fois, revenons à [un exemple que nous avons vu dans notre article précédent](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/promises/promise-all.html). Gardez-le ouvert dans un onglet séparé afin de pouvoir le comparer avec la nouvelle version présentée ci-dessous.

En convertissant cela en `async`/`await` (voir la [démo live](https://mdn.github.io/learning-area/javascript/asynchronous/async-await/promise-all-async-await.html) et le [code source](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/async-await/promise-all-async-await.html)), cela ressemble maintenant à ceci :

```js
async function fetchAndDecode(url, type) {
  let response = await fetch(url);

  let content;

  if (!response.ok) {
    throw new Error(`Erreur HTTP ! statut : ${response.status}`);
  } else {
    if(type === 'blob') {
      content = await response.blob();
    } else if(type === 'text') {
      content = await response.text();
    }
  }

  return content;
}

async function displayContent() {
  let coffee = fetchAndDecode('coffee.jpg', 'blob');
  let tea = fetchAndDecode('tea.jpg', 'blob');
  let description = fetchAndDecode('description.txt', 'text');

  let values = await Promise.all([coffee, tea, description]);

  let objectURL1 = URL.createObjectURL(values[0]);
  let objectURL2 = URL.createObjectURL(values[1]);
  let descText = values[2];

  let image1 = document.createElement('img');
  let image2 = document.createElement('img');
  image1.src = objectURL1;
  image2.src = objectURL2;
  document.body.appendChild(image1);
  document.body.appendChild(image2);

  let para = document.createElement('p');
  para.textContent = descText;
  document.body.appendChild(para);
}

displayContent()
.catch((e) =>
  console.log(e)
);
```

Vous verrez que la fonction `fetchAndDecode()` a été convertie facilement en fonction asynchrone avec seulement quelques modifications. Voir la ligne `Promise.all()` :

```js
let values = await Promise.all([coffee, tea, description]);
```

En utilisant `await` ici, nous sommes en mesure d'obtenir tous les résultats des trois promesses retournées dans le tableau `values`, quand ils sont tous disponibles, d'une manière qui ressemble beaucoup à du code synchrone. Nous avons dû envelopper tout le code dans une nouvelle fonction asynchrone, `displayContent()`, et nous n'avons pas réduit le code de beaucoup de lignes, mais être capable de déplacer la majeure partie du code hors du bloc `.then()` fournit une simplification agréable et utile, nous laissant avec un programme beaucoup plus lisible.

Pour la gestion des erreurs, nous avons inclus un bloc `.catch()` sur notre appel `displayContent()` ; cela permettra de gérer les erreurs survenant dans les deux fonctions.

> **Note :** Il est également possible d'utiliser un bloc [`finally`](/fr/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally_clause) au sein d'une fonction asynchrone, à la place d'un bloc asynchrone [`.finally()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally), pour montrer un état final sur le déroulement de l'opération — vous pouvez voir cela en action dans notre [exemple en direct](https://mdn.github.io/learning-area/javascript/asynchronous/async-await/promise-finally-async-await.html) (voir aussi le [code source](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/async-await/promise-finally-async-await.html)).

## Gérer les ralentissements potentiellement causés par async/await

Il est vraiment utile de connaître `async`/`await`, mais il y a quelques inconvénients à prendre en compte.

`async`/`await` donne à votre code une apparence synchrone, et d'une certaine manière, il le fait se comporter de manière plus synchrone. Le mot-clé `await` bloque l'exécution de tout le code qui le suit jusqu'à ce que la promesse se réalise, exactement comme dans le cas d'une opération synchrone. Il permet certes aux autres tâches de continuer à s'exécuter entre-temps, mais le code attendu est bloqué.

```js
async function makeResult(items) {
  let newArr = [];
  for(let i=0; i < items.length; i++) {
    newArr.push('word_'+i);
  }
  return newArr;
}

async function getResult() {
  let result = await makeResult(items); // Bloqué sur cette ligne
  useThatResult(result); // Pas exécuté tant que makeResult() n'a pas fini
}
```

Cela signifie que votre code pourrait être ralenti par un nombre important de promesses attendues se produisant directement les unes après les autres. Chaque `await` attendra que la précédente se termine, alors qu'en réalité ce que vous voulez, c'est que les promesses commencent à être traitées simultanément, comme elles le feraient si nous n'utilisions pas `async`/`await`.

Il existe un modèle qui peut atténuer ce problème - déclencher tous les processus de promesse en stockant les objets `Promise` dans des variables, et en les attendant tous ensuite. Jetons un coup d'œil à quelques exemples qui prouvent le concept.

Nous disposons de deux exemples - [slow-async-await.html](https://mdn.github.io/learning-area/javascript/asynchronous/async-await/slow-async-await.html) (voir le [code source](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/async-await/slow-async-await.html)) et [fast-async-await.html](https://mdn.github.io/learning-area/javascript/asynchronous/async-await/fast-async-await.html) (voir le [code source](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/async-await/fast-async-await.html)). Les deux commencent par une fonction promise personnalisée qui simule un processus asynchrone avec un appel [`setTimeout()`](/fr/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) :

```js
function timeoutPromise(interval) {
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      resolve("fait");
    }, interval);
  });
};
```

Ensuite, chacun comprend une fonction asynchrone `timeTest()` qui attend trois appels `timeoutPromise()` :

```js
async function timeTest() {
  ...
}
```

Chacune d'entre elles se termine en enregistrant une heure de début, en voyant combien de temps la promesse `timeTest()` met à se réaliser, puis en enregistrant une heure de fin et en indiquant combien de temps l'opération a pris au total :

```js
let startTime = Date.now();
timeTest().then(() => {
  let finishTime = Date.now();
  let timeTaken = finishTime - startTime;
  console.log("Temps pris en millisecondes : " + timeTaken);
})
```

C'est la fonction `timeTest()` qui diffère dans chaque cas.

Dans l'exemple `slow-async-await.html`, `timeTest()` ressemble à ceci :

```js
async function timeTest() {
  await timeoutPromise(3000);
  await timeoutPromise(3000);
  await timeoutPromise(3000);
}
```

Ici, nous attendons les trois appels `timeoutPromise()` directement, en faisant en sorte que chacun d'eux alerte pendant 3 secondes. Chaque appel suivant est forcé d'attendre jusqu'à ce que le dernier soit terminé - si vous exécutez le premier exemple, vous verrez la boîte d'alerte signaler une durée d'exécution totale d'environ 9 secondes.

Dans l'exemple `fast-async-await.html`, `timeTest()` ressemble à ceci :

```js
async function timeTest() {
  const timeoutPromise1 = timeoutPromise(3000);
  const timeoutPromise2 = timeoutPromise(3000);
  const timeoutPromise3 = timeoutPromise(3000);

  await timeoutPromise1;
  await timeoutPromise2;
  await timeoutPromise3;
}
```

Ici, nous stockons les trois objets `Promise` dans des variables, ce qui a pour effet de déclencher leurs processus associés, tous exécutés simultanément.

Ensuite, nous attendons leurs résultats - parce que les promesses ont toutes commencé à être traitées essentiellement au même moment, les promesses se réaliseront toutes en même temps ; lorsque vous exécuterez le deuxième exemple, vous verrez la boîte d'alerte indiquant un temps d'exécution total d'un peu plus de 3 secondes !

### Gestion des erreurs

La stratégie précédente a un défaut : on pourrait avoir des erreurs qui ne seraient pas gérées.

Mettons à jour les exemples précédents en ajoutant une promesse rejetée et une instruction `catch` à la fin :

```js
function timeoutPromiseResolve(interval) {
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      resolve("Succès");
    }, interval);
  });
};

function timeoutPromiseReject(interval) {
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      reject("Erreur");
    }, interval);
  });
};

async function timeTest() {
  await timeoutPromiseResolve(5000);
  await timeoutPromiseReject(2000);
  await timeoutPromiseResolve(3000);
}

let startTime = Date.now();
timeTest().then(() => {})
.catch(e => {
  console.log(e);
  let finishTime = Date.now();
  let timeTaken = finishTime - startTime;
  console.log("Temps écoulé en millisecondes : " + timeTaken);
})
```

Dans l'exemple qui précède, l'erreur est gérée correctement et le message dans la console apparaît après environ 7 secondes.

Voyons maintenant la deuxième approche :

```js
function timeoutPromiseResolve(interval) {
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      resolve("Succès");
    }, interval);
  });
};

function timeoutPromiseReject(interval) {
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      reject("Erreur");
    }, interval);
  });
};

async function timeTest() {
  const timeoutPromiseResolve1 = timeoutPromiseResolve(5000);
  const timeoutPromiseReject2 = timeoutPromiseReject(2000);
  const timeoutPromiseResolve3 = timeoutPromiseResolve(3000);

  await timeoutPromiseResolve1;
  await timeoutPromiseReject2;
  await timeoutPromiseResolve3;
}

let startTime = Date.now();
timeTest().then(() => {
}).catch(e => {
  console.log(e);
  let finishTime = Date.now();
  let timeTaken = finishTime - startTime;
  console.log("Temps écoulé en millisecondes : " + timeTaken);
})
```

Dans cet exemple, on a une erreur qui n'est pas gérée dans la console (après 2 secondes) et le message apparaît après environ 5 secondes.

Pour démarrer les promesses en parallèles et intercepter les erreurs correctement, on pourrait utiliser `Promise.all()` comme vu auparavant :

```js
function timeoutPromiseResolve(interval) {
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      resolve("Succès");
    }, interval);
  });
};

function timeoutPromiseReject(interval) {
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      reject("Erreur");
    }, interval);
  });
};

async function timeTest() {
  const timeoutPromiseResolve1 = timeoutPromiseResolve(5000);
  const timeoutPromiseReject2 = timeoutPromiseReject(2000);
  const timeoutPromiseResolve3 = timeoutPromiseResolve(3000);

  const results = await Promise.all([timeoutPromiseResolve1, timeoutPromiseReject2, timeoutPromiseResolve3]);
  return results;
}

let startTime = Date.now();
timeTest().then(() => {
}).catch(e => {
  console.log(e);
  let finishTime = Date.now();
  let timeTaken = finishTime - startTime;
  console.log("Temps écoulé en millisecondes : " + timeTaken);
})
```

Dans cet exemple, l'erreur est gérée correctement après 2 secondes et on a le message dans la console après environ 2 secondes.

La méthode `Promise.all()` rejète lorsqu'au moins un de ses promesses d'entrée rejète. Si on veut que toutes les promesses soient résolues (correctement ou avec un rejet), on pourra utiliser la méthode [`Promise.allSettled()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled) à la place.

## Méthodes de classe async/await

Une dernière remarque avant de poursuivre, vous pouvez même ajouter `async` devant les méthodes de classe/objet pour qu'elles renvoient des promesses, et `await` des promesses à l'intérieur de celles-ci. Jetez un œil au [code de la classe ES que nous avons vu dans notre article sur le JavaScript orienté objet](/fr/docs/Learn/JavaScript/Objects/Inheritance#ecmascript_2015_classes), puis regardez notre version modifiée avec une méthode `async` :

```js
class Personne {
  constructor(prenom, nomFamille, age, genre, interets) {
    this.nom = {
      prenom,
      nomFamille
    };
    this.age = age;
    this.genre = genre;
    this.interets = interets;
  }

  async salutation() {
    return await Promise.resolve(`Bonjour ! Je suis ${this.nom.prenom}`);
  };

  aurevoir() {
    console.log(`${this.nom.prenom} a quitté le bâtiment. À une prochaine fois !`);
  };
}

let han = new Personne('Han', 'Solo', 25, 'homme', ['Contrebande']);
```

La méthode de la première classe peut maintenant être utilisée de la manière suivante :

```js
han.salutation().then(console.log);
```

## Prise en charge des navigateurs

L'une des considérations à prendre en compte pour décider d'utiliser `async`/`await`est la prise en charge des anciens navigateurs. Ces fonctionnalités sont disponibles dans les versions modernes de la plupart des navigateurs, tout comme les promesses ; les principaux problèmes de prise en charge concernent Internet Explorer et Opera Mini.

Si vous souhaitez utiliser `async`/`await` mais que vous êtes préoccupé par la prise en charge de navigateurs plus anciens, vous pouvez envisager d'utiliser la bibliothèque [BabelJS](https://babeljs.io/). Cela vous permet d'écrire vos applications en utilisant les dernières versions de JavaScript et de laisser Babel déterminer les modifications éventuellement nécessaires pour les navigateurs de vos utilisateurs. Lorsque vous rencontrez un navigateur qui ne supporte pas async/await, le _polyfill_ « prothèse d'émulation » de Babel peut automatiquement fournir des _fallbacks_ « solutions de secours » qui fonctionnent dans les anciens navigateurs.

## Conclusion

Et voilà, `async`/`await` offre un moyen agréable et simplifié d'écrire du code asynchrone, plus facile à lire et à maintenir. Même si la prise en charge par les navigateurs est plus limitée que d'autres mécanismes de code asynchrone à l'heure où nous écrivons ces lignes, cela vaut la peine de l'apprendre et d'envisager de l'utiliser, maintenant et à l'avenir.

{{PreviousMenuNext("Learn/JavaScript/Asynchronous/Promises", "Learn/JavaScript/Asynchronous/Choosing_the_right_approach", "Learn/JavaScript/Asynchronous")}}

## Dans ce module

- [Concepts généraux de programmation asynchrone](/fr/docs/Learn/JavaScript/Asynchronous/Concepts)
- [Introduction au JavaScript asynchrone](/fr/docs/Learn/JavaScript/Asynchronous/Introducing)
- [JavaScript asynchrone coopératif : Délais et intervalles](/fr/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals)
- [Gérer les opérations asynchrones avec élégance grâce aux Promesses](/fr/docs/Learn/JavaScript/Asynchronous/Promises)
- [Faciliter la programmation asynchrone avec async et await](/fr/docs/Learn/JavaScript/Asynchronous/Async_await)
- [Choisir la bonne approche](/fr/docs/Learn/JavaScript/Asynchronous/Choosing_the_right_approach)
