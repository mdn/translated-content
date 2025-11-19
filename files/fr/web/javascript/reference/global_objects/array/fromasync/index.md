---
title: "Array : méthode statique fromAsync()"
short-title: fromAsync()
slug: Web/JavaScript/Reference/Global_Objects/Array/fromAsync
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`Array.fromAsync()`** crée une nouvelle instance d'`Array` (copie superficielle) à partir d'un [objet itérable asynchrone](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#itérateur_asynchrone_et_les_protocoles_itérables_asynchrones), d'un [objet itérable](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#le_protocole_«_itérable_»), ou d'un [objet semblable à un tableau](/fr/docs/Web/JavaScript/Guide/Indexed_collections#manipuler_des_objets_semblables_à_des_tableaux).

## Syntaxe

```js-nolint
Array.fromAsync(items)
Array.fromAsync(items, mapFn)
Array.fromAsync(items, mapFn, thisArg)
```

### Paramètres

- `items`
  - : Un objet itérable asynchrone, itérable ou semblable à un tableau à convertir en tableau.
- `mapFn` {{Optional_Inline}}
  - : Une fonction appelée sur chaque élément du tableau. Si elle est fournie, chaque valeur à ajouter au tableau est d'abord transmise à cette fonction, et la valeur de retour de `mapFn` est ajoutée au tableau à la place (après avoir été [attendue](/fr/docs/Web/JavaScript/Reference/Operators/await)). La fonction est appelée avec les arguments suivants&nbsp;:
    - `element`
      - : L'élément en cours de traitement dans le tableau. Si `items` est un itérable synchrone ou un objet semblable à un tableau, tous les éléments sont d'abord [attendus](/fr/docs/Web/JavaScript/Reference/Operators/await), et `element` ne sera jamais un [thenable](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables). Si `items` est un itérable asynchrone, chaque valeur produite est transmise telle quelle.
    - `index`
      - : L'indice de l'élément en cours de traitement dans le tableau.
- `thisArg` {{Optional_Inline}}
  - : La valeur à utiliser comme `this` lors de l'exécution de la fonction `mapFn`.

### Valeur de retour

Une nouvelle promesse ({{JSxRef("Promise")}}) dont la valeur de retour est une nouvelle instance de {{JSxRef("Array")}}.

## Description

`Array.fromAsync()` permet de créer des tableaux à partir&nbsp;:

- [d'objets itérables asynchrones](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#itérateur_asynchrone_et_les_protocoles_itérables_asynchrones) (des objets comme {{DOMxRef("ReadableStream")}} et {{JSxRef("AsyncGenerator")}})&nbsp;; ou, si l'objet n'est pas un itérable asynchrone,
- [d'objets itérables](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#le_protocole_«_itérable_») (des objets comme {{JSxRef("Map")}} et {{JSxRef("Set")}})&nbsp;; ou, si l'objet n'est pas itérable,
- d'objets semblables à des tableaux (objets avec une propriété `length` et des éléments indexés).

`Array.fromAsync()` parcourt l'itérable asynchrone d'une manière très similaire à {{JSxRef("Statements/for-await...of", "for await...of")}}. `Array.fromAsync(items)` est généralement équivalent au code suivant, si `items` est un itérable asynchrone ou synchrone&nbsp;:

```js
const result = [];
for await (const element of items) {
  result.push(element);
}
```

`Array.fromAsync()` est presque équivalent à {{JSxRef("Array.from()")}} en termes de comportement, à l'exception des points suivants&nbsp;:

- `Array.fromAsync()` gère les objets itérables asynchrones.
- `Array.fromAsync()` retourne une promesse ({{JSxRef("Promise")}}) qui se résout en une instance de tableau.
- Si `Array.fromAsync()` est appelée avec un objet itérable non asynchrone, chaque élément ajouté au tableau est d'abord [attendu](/fr/docs/Web/JavaScript/Reference/Operators/await).
- Si un `mapFn` est fourni, sa sortie est également attendue en interne.

`Array.fromAsync()` et {{JSxRef("Promise.all()")}} peuvent toutes deux transformer un itérable de promesses dans une promesse d'un tableau. Cependant, il existe deux différences majeures&nbsp;:

- `Array.fromAsync()` attend chaque valeur produite par l'objet de façon séquentielle. `Promise.all()` attend toutes les valeurs en parallèle.
- `Array.fromAsync()` parcourt l'itérable de façon différée, et ne récupère la valeur suivante que lorsque la précédente est résolue. `Promise.all()` récupère toutes les valeurs à l'avance et les attend toutes.

## Exemples

### Tableau à partir d'un objet itérable asynchrone

```js
const asyncIterable = (async function* () {
  for (let i = 0; i < 5; i++) {
    await new Promise((resolve) => setTimeout(resolve, 10 * i));
    yield i;
  }
})();

Array.fromAsync(asyncIterable).then((array) => console.log(array));
// [0, 1, 2, 3, 4]
```

Lorsque `items` est un itérable asynchrone dont chaque résultat `value` est aussi une promesse, ces promesses sont ajoutées au tableau résultant sans être attendues. Cela correspond au comportement de `for await...of`.

```js
function createAsyncIter() {
  let i = 0;
  return {
    [Symbol.asyncIterator]() {
      return {
        async next() {
          if (i > 2) return { done: true };
          i++;
          return { value: Promise.resolve(i), done: false };
        },
      };
    },
  };
}

Array.fromAsync(createAsyncIter()).then((array) => console.log(array));
// (3) [Promise, Promise, Promise]
```

> [!NOTE]
> En pratique, il est rare de rencontrer un objet itérable asynchrone qui produit des promesses, car si vous l'implémentez avec une [fonction génératrice asynchrone](/fr/docs/Web/JavaScript/Reference/Statements/async_function*), l'expression [`yield`](/fr/docs/Web/JavaScript/Reference/Operators/yield) désempaquète automatiquement les promesses.

### Tableau à partir d'un objet itérable synchrone

```js
Array.fromAsync(
  new Map([
    [1, 2],
    [3, 4],
  ]),
).then((array) => console.log(array));
// [[1, 2], [3, 4]]
```

### Tableau à partir d'un objet itérable synchrone qui produit des promesses

```js
Array.fromAsync(
  new Set([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]),
).then((array) => console.log(array));
// [1, 2, 3]
```

### Tableau à partir d'un objet semblable à un tableau de promesses

```js
Array.fromAsync({
  length: 3,
  0: Promise.resolve(1),
  1: Promise.resolve(2),
  2: Promise.resolve(3),
}).then((array) => console.log(array));
// [1, 2, 3]
```

### Utiliser `mapFn` avec un objet itérable synchrone

Lorsque `items` est un itérable synchrone ou un objet semblable à un tableau, l'entrée et la sortie de `mapFn` sont attendues en interne par `Array.fromAsync()`.

```js
function delayedValue(v) {
  return new Promise((resolve) => setTimeout(() => resolve(v), 100));
}

Array.fromAsync(
  [delayedValue(1), delayedValue(2), delayedValue(3)],
  (element) => delayedValue(element * 2),
).then((array) => console.log(array));
// [2, 4, 6]
```

### Utiliser `mapFn` avec un objet itérable asynchrone

Lorsque `items` est un itérable asynchrone, l'entrée de `mapFn` n'est pas attendue, mais la sortie l'est. En utilisant la même fonction `createAsyncIter` que ci-dessus&nbsp;:

```js
Array.fromAsync(createAsyncIter(), async (element) => (await element) * 2).then(
  (array) => console.log(array),
);
// [2, 4, 6]
```

Curieusement, cela signifie que `Array.fromAsync(createAsyncIter())` n'est pas équivalent à `Array.fromAsync(createAsyncIter(), (element) => element)`, car la seconde attend chaque valeur produite, alors que la première ne le fait pas.

```js
Array.fromAsync(createAsyncIter(), (element) => element).then((array) =>
  console.log(array),
);
// [1, 2, 3]
```

### Comparaison avec `Promise.all()`

`Array.fromAsync()` attend chaque valeur produite par l'objet de façon séquentielle. `Promise.all()` attend toutes les valeurs en parallèle.

```js
function* makeIterableOfPromises() {
  for (let i = 0; i < 5; i++) {
    yield new Promise((resolve) => setTimeout(resolve, 100));
  }
}

(async () => {
  console.time("Array.fromAsync() time");
  await Array.fromAsync(makeIterableOfPromises());
  console.timeEnd("Array.fromAsync() time");
  // Array.fromAsync() time: 503.610ms

  console.time("Promise.all() time");
  await Promise.all(makeIterableOfPromises());
  console.timeEnd("Promise.all() time");
  // Promise.all() time: 101.728ms
})();
```

### Absence de gestion d'erreur pour les objets itérables synchrones

Comme pour [`for await...of`](/fr/docs/Web/JavaScript/Reference/Statements/for-await...of#itération_sur_les_itérables_et_générateurs_synchrones), si l'objet parcouru est un objet itérable synchrone et qu'une erreur est levée pendant l'itération, la méthode `return()` de l'itérateur sous-jacent ne sera pas appelée, donc l'itérateur ne sera pas fermé.

```js
function* generatorWithRejectedPromises() {
  try {
    yield 0;
    yield Promise.reject(new Error("error"));
  } finally {
    console.log("called finally");
  }
}

(async () => {
  try {
    await Array.fromAsync(generatorWithRejectedPromises());
  } catch (e) {
    console.log("caught", e);
  }
})();
// intercepté Error: error
// Aucun message "called finally"
```

Si vous devez fermer l'itérateur, vous devez utiliser une boucle {{JSxRef("Statements/for...of", "for...of")}} à la place, et attendre chaque valeur manuellement.

```js
(async () => {
  const arr = [];
  try {
    for (const val of generatorWithRejectedPromises()) {
      arr.push(await val);
    }
  } catch (e) {
    console.log("caught", e);
  }
})();
// appelé finally
// intercepté 3
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide des collections indexées](/fr/docs/Web/JavaScript/Guide/Indexed_collections)
- L'objet global {{JSxRef("Array")}}
- La méthode {{JSxRef("Array/Array", "Array()")}}
- La méthode {{JSxRef("Array.of()")}}
- La méthode {{JSxRef("Array.from()")}}
- L'instruction {{JSxRef("Statements/for-await...of", "for await...of")}}
- [Prothèse d'émulation de `Array.fromAsync` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#arrayfromasync)
