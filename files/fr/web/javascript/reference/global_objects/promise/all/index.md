---
title: Promise.all()
slug: Web/JavaScript/Reference/Global_Objects/Promise/all
---

{{JSRef}}

La méthode **`Promise.all()`** renvoie une promesse ({{jsxref("Promise")}}) qui est résolue lorsque l'ensemble des promesses contenues dans l'itérable passé en argument ont été résolues ou qui échoue avec la raison de la première promesse qui échoue au sein de l'itérable.

{{EmbedInteractiveExample("pages/js/promise-all.html")}}

## Syntaxe

```js
Promise.all(iterable);
```

### Paramètres

- `iterable`
  - : Un objet [itérable](/fr/docs/Web/JavaScript/Reference/Les_protocoles_iteration#Le_protocole_«_itérable_») (tel qu'un tableau ({{jsxref("Array")}})) contenant des promesses.

### Valeur de retour

Un objet {{jsxref("Promise")}} qui est

- résolue immédiatement si l'itérable passé en argument est vide
- résolue de façon asynchrone si l'itérable passé en argument ne contient aucune promesse (Chrome 58 renvoie immédiatement une promesse résolue dans ce cas)
- en attente de résolution asynchrone dans les autres cas.

## Description

Cette méthode peut être utile lorsqu'on souhaite agréger le résultat de plusieurs promesses.

- Valeur de résolution
  - : Si toutes les promesses de l'itérable sont tenues, `Promise.all` est tenue et la valeur de résolution est un tableau qui contient les valeurs de résolution respectives des promesses de l'itérable (dans le même ordre). Si l'argument utilisé est un tableau vide, la méthode résoud la promesse immédiatement et de façon synchrone.
- Valeur d'échec
  - : Si l'une des promesses de l'itérable échoue, `Promise.all` échoue immédiatement et utilise la raison de l'échec (que les autres promesses aient été résolues ou non).

## Exemples

### Utiliser `Promise.all()`

`Promise.all()` attend que l'ensemble des promesses soient tenues ou qu'une promesse soit rompue :

```js
var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([p1, p2, p3]).then((values) => {
  console.log(values); // [3, 1337, "foo"]
});
```

### `Promise.all()`, un échec rapide

La promesse créée par `Promise.all()` échoue immédiatement si l'une des promesses échoue. Dans l'exemple suivant, on fournit quatre promesses qui sont résolues après une certaine durée et une autre promesse qui est rompue immédiatement : on peut alors voir que la promesse créée par `Promise.all()` est rompue immédiatement.

```js
var p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "un");
});
var p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "deux");
});
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "trois");
});
var p4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, "quatre");
});
var p5 = new Promise((resolve, reject) => {
  reject("rejet");
});

Promise.all([p1, p2, p3, p4, p5]).then(
  (values) => {
    console.log(values);
  },
  (reason) => {
    console.log(reason);
  },
);

// Dans la console :
// "rejet"

//On peut aussi employer .catch
Promise.all([p1, p2, p3, p4, p5])
  .then((values) => {
    console.log(values);
  })
  .catch((reason) => {
    console.log(reason);
  });

// Dans la console :
// "rejet"
```

Il est possible de modifier ce comportement en gérant les éventuels échecs :

```js
var p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "p1_resolution_retardee");
});

var p2 = new Promise((resolve, reject) => {
  reject(new Error("p2_rejet_immediat"));
});

Promise.all([
  p1.catch((error) => {
    return error;
  }),
  p2.catch((error) => {
    return error;
  }),
]).then((values) => {
  console.log(values[0]); // "p1_resolution_retardee"
  console.log(values[1]); // "Error: p2_rejet_immediat"
});
```

### Caractère asynchrone de `Promise.all()`

Dans l'exemple qui suit, on illustre le caractère asynchrone de `Promise.all()` (et son caractère synchrone quand l'itérable passé en argument est vide) :

```js
// On passe un tableau de promesses déjà résolues
// afin de déclencher Promise.all dès que possible
var resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

var p = Promise.all(resolvedPromisesArray);
// on affiche la valeur de p dans la console
console.log(p);

// on utilise la méthode setTimeout pour exécuter
// du code dès que la pile est vide
setTimeout(function () {
  console.log("La pile est vide");
  console.log(p);
});

// Cela affichera dans la console (et dans cet ordre) :
// Promise { <state>: "pending" }
// La pile est vide
// Promise { <state>: "fulfilled", <value>: Array[2] }
```

On aura le même comportement si `Promise.all` produit une promesse rompue :

```js
var mixedPromisesArray = [Promise.resolve(33), Promise.reject(44)];
var p = Promise.all(mixedPromisesArray);
console.log(p);
setTimeout(function () {
  console.log("La pile est vide");
  console.log(p);
});

// Affichera :
// Promise { <state>: "pending" }
// La pile est vide
// Promise { <state>: "rejected", <reason>: 44 }
```

En revanche, `Promise.all` produit une promesse résolue de façon synchrone si et seulement si l'itérable est vide :

```js
var p = Promise.all([]); // immédiatement résolue

// les valeurs qui ne sont pas des promesses
// seront ignorées mais l'évaluation sera effectuée
// de façon asynchrone
var p2 = Promise.all([1337, "hi"]);
console.log(p);
console.log(p2);
setTimeout(function () {
  console.log("La pile est vide");
  console.log(p2);
});

// Affichera :
// Promise { <state>: "fulfilled", <value>: Array[0] }
// Promise { <state>: "pending" }
// La pile est vide
// Promise { <state>: "fulfilled", <value>: Array[2] }
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Promise")}}
- {{jsxref("Promise.race()")}}
