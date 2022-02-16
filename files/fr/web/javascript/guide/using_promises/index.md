---
title: Utiliser les promesses
slug: Web/JavaScript/Guide/Using_promises
tags:
  - Guide
  - Intermédiaire
  - JavaScript
  - Promesses
  - Promise
translation_of: Web/JavaScript/Guide/Using_promises
original_slug: Web/JavaScript/Guide/Utiliser_les_promesses
---
{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Le_modèle_objet_JavaScript_en_détails", "Web/JavaScript/Guide/iterateurs_et_generateurs")}}

Une promesse est un objet ({{jsxref("Promise")}}) qui représente la complétion ou l'échec d'une opération asynchrone. La plupart du temps, on « consomme » des promesses et c'est donc ce que nous verrons dans la première partie de ce guide pour ensuite expliquer comment les créer.

En résumé, une promesse est un objet qui est renvoyé et auquel on attache des _callbacks_ plutôt que de passer des _callbacks_ à une fonction. Ainsi, au lieu d'avoir une fonction qui prend deux _callbacks_ en arguments :

```js
function faireQqcALAncienne(successCallback, failureCallback){
  console.log("C'est fait");
  // réussir une fois sur deux
  if (Math.random() > .5) {
    successCallback("Réussite");
  } else {
    failureCallback("Échec");
  }
}

function successCallback(résultat) {
  console.log("L'opération a réussi avec le message : " + résultat);
}


function failureCallback(erreur) {
  console.error("L'opération a échoué avec le message : " + erreur);
}

faireQqcALAncienne(successCallback, failureCallback);
```

On aura une fonction qui renvoie une promesse et on attachera les callbacks sur cette promesse :

```js
function faireQqc() {
  return new Promise((successCallback, failureCallback) => {
    console.log("C'est fait");
    // réussir une fois sur deux
    if (Math.random() > .5) {
      successCallback("Réussite");
    } else {
      failureCallback("Échec");
    }
  })
}

const promise = faireQqc();
promise.then(successCallback, failureCallback);
```

ou encore :

```js
faireQqc().then(successCallback, failureCallback);
```

Cette dernière forme est ce qu'on appelle _un appel de fonction asynchrone_. Cette convention possède différents avantages dont le premier est _le chaînage_.

## Garanties

À la différence des imbrications de _callbacks_, une promesse apporte certaines garanties :

- Les _callbacks_ ne seront jamais appelés avant la fin du parcours de la boucle d'évènements JavaScript courante
- Les _callbacks_ ajoutés grâce à `then` seront appelés, y compris après le succès ou l'échec de l'opération asynchrone
- Plusieurs _callbacks_ peuvent être ajoutés en appelant `then` plusieurs fois, ils seront alors exécutés l'un après l'autre selon l'ordre dans lequel ils ont été insérés.

## Chaînage des promesses

Un besoin fréquent est d'exécuter deux ou plus d'opérations asynchrones les unes à la suite des autres, avec chaque opération qui démarre lorsque la précédente a réussi et en utilisant le résultat de l'étape précédente. Ceci peut être réalisé en créant une chaîne de promesses.

La méthode `then()` renvoie une _nouvelle_ promesse, différente de la première :

```js
const promise = faireQqc();
const promise2 = promise.then(successCallback, failureCallback);
```

ou encore :

```js
const promise2 = faireQqc().then(successCallback, failureCallback);
```

La deuxième promesse (`promise2`) indique l'état de complétion, pas uniquement pour `faireQqc()` mais aussi pour le callback qui lui a été passé (`successCallback` ou `failureCallback`) qui peut aussi être une fonction asynchrone qui renvoie une promesse. Lorsque c'est le cas, tous les _callbacks_ ajoutés à `promise2` forment une file derrière la promesse renvoyée par `successCallback` ou `failureCallback`.

Autrement dit, chaque promesse représente l'état de complétion d'une étape asynchrone au sein de cette succession d'étapes.

Auparavant, l'enchaînement de plusieurs opérations asynchrones déclenchait une pyramide dantesque de _callbacks_ :

```js
faireQqc(function(result) {
  faireAutreChose(result, function(newResult) {
    faireUnTroisiemeTruc(newResult, function(finalResult) {
      console.log('Résultat final :' + finalResult);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);
```

Grâce à des fonctions plus modernes et aux promesses, on attache les _callbacks_ aux promesses qui sont renvoyées. On peut ainsi construire une _chaîne de promesses_ :

```js
faireQqc().then(function(result) {
  return faireAutreChose(result);
})
.then(function(newResult) {
  return faireUnTroisiemeTruc(newResult);
})
.then(function(finalResult) {
  console.log('Résultat final : ' + finalResult);
})
.catch(failureCallback);
```

Les arguments passés à `then` sont optionnels. La forme `catch(failureCallback)` est un alias plus court pour `then(null, failureCallback)`. Ces chaînes de promesses sont parfois construites avec [des fonctions fléchées](/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fléchées) :

```js
faireQqc()
.then(result => faireAutreChose(result))
.then(newResult => faireUnTroisiemeTruc(newResult))
.then(finalResult => {
  console.log('Résultat final : ' + finalResult);
})
.catch(failureCallback);
```

> **Attention :** cela implique que les fonctions asynchrones renvoient toutes des promesses, sinon les _callbacks_ ne pourront être chaînés et les erreurs ne seront pas interceptées (les fonctions fléchées ont une valeur de retour implicite si les accolades ne sont pas utilisées : `() => x` est synonyme de `() => { return x; }`).

### Chaînage après un catch

Il est possible de chaîner de nouvelles actions _après_ un rejet, c'est-à-dire un `catch`. C'est utile pour accomplir de nouvelles actions après qu'une action ait échoué dans la chaine. Par exemple :

```js
new Promise((resolve, reject) => {
    console.log('Initial');

    resolve();
})
.then(() => {
    throw new Error('Something failed');

    console.log('Do this');
})
.catch(() => {
    console.error('Do that');
})
.then(() => {
    console.log('Do this whatever happened before');
});
```

Cela va produire la sortie suivante :

    Initial
    Do that
    Do this whatever happened before

Notez que le texte "Do this" n'est pas affiché car l'erreur "Something failed" a produit un rejet.

## Propagation des erreurs

Dans les exemples précédents, `failureCallback` était présent trois fois dans la pyramide de _callbacks_ et une seule fois, à la fin, dans la chaîne des promesses :

```js
faireQqc()
.then(result => faireAutreChose(result))
.then(newResult => faireUnTroisiemeTruc(newResult))
.then(finalResult => console.log('Résultat final : ' + finalResult))
.catch(failureCallback);
```

En fait, dès qu'une exception est levée, la chaîne de promesses utilisera le premier `catch()` ou `onRejected` disponible. Ce fonctionnement est assez proche de ce qu'on peut trouver pour du code synchrone :

```js
try {
  const result = syncFaireQqc();
  const newResult = syncFaireQqcAutre(result);
  const finalResult = syncFaireUnTroisiemeTruc(newResult);
  console.log('Résultat final : ' + finalResult);
} catch(error) {
  failureCallback(error);
}
```

Cette symétrie entre le code asynchrone et le code synchrone atteint son paroxysme avec le couple d'opérateurs [`async`/`await`](/fr/docs/Web/JavaScript/Reference/Instructions/async_function) d'ECMAScript 2017:

```js
async function toto() {
  try {
    const result = await faireQqc();
    const newResult = await faireQqcAutre(result);
    const finalResult = await faireUnTroisiemeTruc(newResult);
    console.log('Résultat final : ' + finalResult);
  } catch(error) {
    failureCallback(error);
  }
}
```

Ce fonctionnement est construit sur les promesses et `faireQqc()` est la même fonction que celle utilisée dans les exemples précédents.

Les promesses permettent de résoudre les problèmes de cascades infernales de _callbacks_ notamment en interceptant les différentes erreurs (exceptions et erreurs de programmation). Ceci est essentiel pour obtenir une composition fonctionnelle des opérations asynchrones.

## Évènements liés à la rupture d'une promesse

Lorsqu'une promesse est rompue/rejetée, un des deux évènements suivants est envoyé au niveau de la portée globale ({{domxref("window")}} ou {{domxref("Worker")}} si le script est utilisé dans un _worker_) :

- {{domxref("Window.rejectionhandled_event","rejectionhandled")}}
  - : Cet évènement est envoyé lorsqu'une promesse est rompue et après que le rejet ai été traité par la fonction `reject` associée à la promesse.
- {{domxref("Window.unhandledrejection_event","unhandledrejection")}}
  - : Cet évènement est envoyé lorsque la promesse est rompue et qu'aucune fonction n'a été définie pour gérer le rejet de la promesse.

Dans les deux cas, l'évènement (dont le type est {{domxref("PromiseRejectionEvent")}}) aura deux propriétés :

- {{domxref("PromiseRejectionEvent.promise","promise")}}
  - : La promesse qui a été rompue.
- {{domxref("PromiseRejectionEvent.reason","reason")}}
  - : La raison pour laquelle la promesse a été rompue.

Gérer ces évènements permet d'avoir une ultime méthode pour gérer le rejet des promesses. Cela peut notamment s'avérer utile pour le débogage. Ces évènements sont déclenchés au niveau global et permettent ainsi d'intercepter les erreurs pour chaque contexte (fenêtre ou _worker_)

```js
window.addEventListener("unhandledrejection", event => {
  // Examiner la ou les promesse(s) qui posent problème en debug
  // Nettoyer ce qui doit l'être quand ça se produit en réel

}, false);
```

## Envelopper les _callbacks_ des API

Il est possible de créer un objet  {{jsxref("Promise")}} grâce à son constructeur. Et même si, idéalement, cela ne devrait pas être nécessaire, certaines API fonctionnent toujours avec des _callbacks_ passés en arguments. C'est notamment le cas de la méthode  {{domxref("WindowTimers.setTimeout", "setTimeout()")}} :

```js
setTimeout(() => saySomething("10 seconds passed"), 10 * 1000);
```

Si on mélange des _callbacks_ et des promesses, cela sera problématique. Si  `saySomething` échoue ou contient des erreurs, rien n'interceptera l'erreur.

Pour ces fonctions, la meilleure pratique consiste à les _envelopper_ dans des promesses au plus bas niveau possible et de ne plus les appeler directement :

```js
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

wait(10 * 1000).then(() => saySomething("10 seconds")).catch(failureCallback);
```

Le constructeur `Promise` prend en argument une fonction et nous permet de la convertir manuellement en une promesse. Ici, vu que `setTimeout` n'échoue pas vraiment, on laisse de côté la gestion de l'échec.

## Composition

{{jsxref("Promise.resolve()")}} et {{jsxref("Promise.reject()")}} sont des méthodes qui permettent de créer des promesses déjà tenues ou rompues.

{{jsxref("Promise.all()")}} et {{jsxref("Promise.race()")}} sont deux outils de composition qui permettent de mener des opérations asynchrones en parallèle.

On peut lancer des opérations en parallèles et attendre qu'elles soient toutes finies de cette façon :

```js
Promise.all([func1(), func2(), func3()])
.then(([resultat1, resultat2, resultat3]) => { /* où on utilise resultat1/2/3 */ });
```

Il est possible de construire une composition séquentielle de la façon suivante :

```js
[func1, func2].reduce((p, f) => p.then(f), Promise.resolve());
```

Dans ce fragment de code, on réduit un tableau de fonctions asynchrones en une chaîne de promesse équivalente à : `Promise.resolve().then(func1).then(func2);`

On peut également accomplir cela avec une fonction de composition réutilisable  :

```js
const applyAsync = (acc, val) => acc.then(val);
const composeAsync = (...funcs) => x => funcs.reduce(applyAsync, Promise.resolve(x));
```

La fonction `composeAsync` accepte autant de fonctions que nécessaire comme arguments et renvoie une nouvelle fonction qui prend une valeur initiale pour la passer à travers ces étapes de compositions. Cette façon de faire garantit que les fonctions, qu'elles soient synchrones ou asynchrones, sont exécutées dans le bon ordre :

```js
const transformData = composeAsync(func1, asyncFunc1, asyncFunc2, func2);
transformData(data);
```

Avec ECMAScript 2017, on peut obtenir une composition séquentielle plus simplement avec les opérateurs `await`/`async` :

```js
let result;
for(const f of [func1, func2, func3]) {
  result = await f(result);
} 
```

## Gestion du temps

Pour éviter de mauvaises surprises, les fonctions passées à `then()` ne seront jamais appelées de façon synchrone, y compris lorsqu'il s'agit d'une promesse déjà résolue :

```js
Promise.resolve().then(() => console.log(2));
console.log(1); // 1, 2
```

En fait, la fonction passée à ` then``() ` est placée dans une file de micro-tâches qui sont exécutées lorsque cette file est vidée à la fin de la boucle d'évènements JavaScript :

```js
var wait = ms => new Promise(resolve => setTimeout(resolve, ms));

wait().then(() => console.log(4));
Promise.resolve().then(() => console.log(2)).then(() => console.log(3));
console.log(1); // 1, 2, 3, 4
```

## Voir aussi

- {{jsxref("Promise.then()")}}
- [`async`/`await`](/fr/docs/Web/JavaScript/Reference/Instructions/async_function)
- [La spécification Promises/A+](http://promisesaplus.com/)
- [Nolan Lawson : We have a problem with promises — Common mistakes with promises (article en anglais)](http://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html)

{{PreviousNext("Web/JavaScript/Guide/Le_modèle_objet_JavaScript_en_détails", "Web/JavaScript/Guide/iterateurs_et_generateurs")}}
