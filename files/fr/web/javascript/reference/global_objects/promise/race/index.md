---
title: Promise.race()
slug: Web/JavaScript/Reference/Global_Objects/Promise/race
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Promise
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Promise/race
original_slug: Web/JavaScript/Reference/Objets_globaux/Promise/race
---
{{JSRef}}

La méthode **`Promise.race()`** renvoie une promesse qui est résolue ou rejetée dès qu'une des promesses de l'itérable passé en argument est résolue ou rejetée. La valeur (dans le cas de la résolution) ou la raison (dans le cas d'un échec) utilisée est celle de la promesse de l'itérable qui est resolue/qui échoue.

{{EmbedInteractiveExample("pages/js/promise-race.html")}}

## Syntaxe

```js
Promise.race(itérable);
```

### Paramètres

- `itérable`
  - : Un objet itérable, par exemple un {{jsxref("Array")}}. Voir la page [itérable](/fr/docs/Web/JavaScript/Guide/iterable).

### Valeur de retour

Une promesse ({{jsxref("Promise")}}) à résoudre qui est résolue de façon asynchrone dès que l'une des promesses de l'itérable est tenue ou rompue.

## Description

La fonction `race` renvoie une `Promise` qui est résolue/rejetée de la même façon que la première promesse de l'itérable à être résolue/rejetée.

Si l'itérable passé en argument est vide, la promesse sera continuellement en attente.

Si l'itérable contient une ou plusieurs valeurs qui ne sont pas des promesses ou une promesse déjà résolue, `Promise.race` fournira une promesse résolue avec la première de ces valeurs trouvées dans l'itérable.

## Exemples

### Caractère asynchrone de `Promise.race()`

L'exemple qui suit illuste le caractère asynchrone de `Promise.race:`

```js
// On passe un tableau de promesses déjà résolues
// en argument afin de déclencher Promise.race
// dès que possible
var resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

var p = Promise.race(resolvedPromisesArray);
// On affiche immédiatement la valeur p dans la console
console.log(p);

// Avec setTimeout on peut exécuter du code
// une fois que la pile est vide
setTimeout(function(){
    console.log('La pile est désormais vide');
    console.log(p);
});

// affichera, dans cet ordre :
// Promise { <state>: "pending" }
// La pile est désormais vide
// Promise { <state>: "fulfilled", <value>: 33 }
```

Un itérable vide renverra une promesse qui restera en attente :

```js
var foreverPendingPromise = Promise.race([]);
console.log(foreverPendingPromise);
setTimeout(function(){
    console.log('La pile est désormais vide');
    console.log(foreverPendingPromise);
});

// affichera, dans cet ordre :
// Promise { <state>: "pending" }
// La pile est désormais vide
// Promise { <state>: "pending" }
```

Si l'itérable contient une ou plusieurs valeurs qui ne sont pas des promesses ou des promesses déjà résolues, `Promise.race` considèrera la première valeur ainsi trouvée dans l'itérable :

```js
var foreverPendingPromise = Promise.race([]);
var alreadyResolvedProm = Promise.resolve(666);

var arr = [foreverPendingPromise, alreadyResolvedProm, "non-Promise value"];
var arr2 = [foreverPendingPromise, "non-Promise value", Promise.resolve(666)];
var p = Promise.race(arr);
var p2 = Promise.race(arr2);

console.log(p);
console.log(p2);
setTimeout(function(){
    console.log('the stack is now empty');
    console.log(p);
    console.log(p2);
});

// affichera dans l'ordre :
// Promise { <state>: "pending" }
// Promise { <state>: "pending" }
// the stack is now empty
// Promise { <state>: "fulfilled", <value>: 666 }
// Promise { <state>: "fulfilled", <value>: "non-Promise value" }
```

### Utilisation de `Promise.race` – exemples avec `setTimeout`

```js
var p1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 500, "un");
});
var p2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, "deux");
});

Promise.race([p1, p2]).then(function(value) {
  console.log(value); // "deux"
  // Les deux promesses sont résolues mais p2 est plus rapide
});

var p3 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, "trois");
});
var p4 = new Promise(function(resolve, reject) {
    setTimeout(reject, 500, "quatre");
});

Promise.race([p3, p4]).then(function(value) {
  console.log(value); // "trois"
  // p3 est plus rapide et entraîne la résolution de la promesse de compétition
}, function(reason) {
  // N'est pas appelée
});

var p5 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 500, "cinq");
});
var p6 = new Promise(function(resolve, reject) {
    setTimeout(reject, 100, "six");
});

Promise.race([p5, p6]).then(function(value) {
  // N'est pas appelée
}, function(reason) {
  console.log(reason); // "six"
  // p6 est plus rapide et rejète la promesse de compétition
});
```

> **Note :** voir la documentation sur [`setTimeout`.](/fr/docs/Web/API/WindowTimers/setTimeout)

## Spécifications

| Spécification                                                                    | État                         | Commentaires                                    |
| -------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------- |
| {{SpecName('ES2015', '#sec-promise.race', 'Promise.race')}} | {{Spec2('ES2015')}}     | Définition initiale au sein d'un standard ECMA. |
| {{SpecName('ESDraft', '#sec-promise.race', 'Promise.race')}} | {{Spec2('ESDraft')}} |                                                 |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Promise.race")}}

## Voir aussi

- {{jsxref("Promise")}}
- {{jsxref("Promise.all()")}}
