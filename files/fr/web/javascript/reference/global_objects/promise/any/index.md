---
title: "Promise : méthode statique any()"
short-title: any()
slug: Web/JavaScript/Reference/Global_Objects/Promise/any
l10n:
  sourceCommit: cbf7f4b55e2c0bc0c096773435b159edcaa8c9e2
---

La méthode statique **`Promise.any()`** prend comme argument un itérable contenant des promesses et retourne une unique promesse ({{JSxRef("Promise")}}). La promesse retournée est complétée (<i lang="en">fulfilled</i> en anglais) dès qu'une des promesses de l'itérable est complétée, avec la valeur de cette première promesse complétée. Elle est rompue (<i lang="en">rejected</i> en anglais) lorsque toutes les promesses de l'itérable sont rompues (y compris lorsque l'itérable est vide), avec un objet {{JSxRef("AggregateError")}} contenant un tableau des raisons de rejet.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Promise.any()")}}

```js interactive-example
const promise1 = Promise.reject(new Error("erreur"));
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, "rapide"));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, "lent"));

const promises = [promise1, promise2, promise3];

Promise.any(promises).then((value) => console.log(value));

// Résultat attendu : "rapide"
```

## Syntaxe

```js-nolint
Promise.any(iterable)
```

### Paramètres

- `iterable`
  - : Un [itérable](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#le_protocole_«_itérable_») (tel qu'un tableau ({{JSxRef("Array")}})) contenant des promesses. Ces valeurs sont [attendues](/fr/docs/Web/JavaScript/Reference/Operators/await), donc d'autres [semi-promesses](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise#semi-promesse) sont également résolues, tandis que les valeurs qui ne sont pas des semi-promesses sont retournées tels quels.

### Valeur de retour

Un objet {{JSxRef("Promise")}} qui est&nbsp;:

- **Déjà complétée**, si un `iterable` vide est passé en argument.
- **Complétée de façon asynchrone**, si toutes les promesses d'un `iterable` donné sont complétées. La valeur de complétion est un tableau des valeurs de complétion, dans l'ordre des promesses passées, indépendamment de l'ordre de complétion. Si un `iterable` passé n'est pas vide mais ne contient aucune promesse en attente, la promesse retournée est toujours complétée de façon asynchrone (au lieu de synchrone).
- **Rompue de façon asynchrone**, si l'une des promesses d'un `iterable` donné est rompue. La raison du rejet est la raison du rejet de la première promesse qui a été rompue.

## Description

La méthode `Promise.any()` est l'une des méthodes de [concurrence des promesses](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise#concurrence_des_promesses). Cette méthode est utile pour retourner la première promesse qui se complète. Elle se termine dès qu'une promesse se complète, et n'attend donc pas que les autres promesses se complètent une fois qu'elle en a trouvé une.

Contrairement à {{JSxRef("Promise.all()")}}, qui retourne un _tableau_ de valeurs de complétion, nous n'obtenons qu'une seule valeur de résolution (à condition qu'au moins une promesse soit complétée). Cela peut s'avérer utile si nous avons besoin qu'une seule promesse soit complétée, mais que nous ne nous soucions pas de savoir laquelle. Notez une autre différence&nbsp;: cette méthode rompt la promesse lorsqu'elle reçoit un _itérable vide_, car, en réalité, l'itérable ne contient aucun élément qui se complète. Vous pouvez comparer `Promise.any()` et `Promise.all()` à {{JSxRef("Array.prototype.some()")}} et {{JSxRef("Array.prototype.every()")}}.

De plus, contrairement à {{JSxRef("Promise.race()")}}, qui retourne la première valeur _complétée_ (qu'il s'agisse d'un accomplissement ou d'un rejet), cette méthode retourne la première valeur _accomplie_. Elle ignore toutes les promesses rompues jusqu'à la première promesse qui est complétée.

À l'instar d'autres combinateurs de promesses, `Promise.any()` marque immédiatement toutes les promesses comme «&nbsp;gérées&nbsp;» lorsqu'elle est appelée (en appelant leurs méthodes `.then()`). Les rejets survenant après la première exécution sont ignorés et ne déclenchent aucun évènement `unhandledrejection`.

## Exemples

### Utiliser `Promise.any()`

`Promise.any()` prend pour valeur de résolution celle de la première promesse résolue, et ce même si une des promesses de l'itérable a échoué avant. Ce comportement est différent de ce {{JSxRef("Promise.race()")}}, qui s'arrête à la première promesse qui se termine avec sa valeur de résolution ou d'échec.

```js
const pErr = new Promise((resolve, reject) => {
  reject(new Error("J'échoue toujours"));
});

const pLente = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "Éventuellement résolue");
});

const pRapide = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Rapidement résolue");
});

Promise.any([pErr, pLente, pRapide]).then((valeur) => {
  console.log(valeur);
  // pRapide s'est résolue en premier
});
// Journaux :
// "Rapidement résolue"
```

### Échec avec `AggregateError`

`Promise.any()` échoue avec un objet {{JSxRef("AggregateError")}} si aucune promesse n'est complétée.

```js
const echec = new Promise((resolve, reject) => {
  reject(new Error("J'échoue toujours"));
});

Promise.any([echec]).catch((err) => {
  console.log(err);
});
// AggregateError: Aucune promesse dans Promise.any n'est résolue
```

### Afficher la première image chargée

Dans cet exemple, nous avons une fonction qui récupère une image et retourne un blob. Nous utilisons `Promise.any()` pour récupérer plusieurs images et afficher la première disponible (c'est-à-dire celle dont la promesse est résolue).

```js
async function fetchAndDecode(url, description) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Erreur HTTP ! statut : ${res.status}`);
  }
  const data = await res.blob();
  return [data, description];
}

const cafe = fetchAndDecode("coffee.jpg", "Café");
const the = fetchAndDecode("tea.jpg", "Thé");

Promise.any([cafe, the])
  .then(([blob, description]) => {
    const objectURL = URL.createObjectURL(blob);
    const image = document.createElement("img");
    image.src = objectURL;
    image.alt = description;
    document.body.appendChild(image);
  })
  .catch((e) => {
    console.error(e);
  });
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `Promise.any` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-promise)
- [La prothèse d'émulation es-shims de `Promise.any` <sup>(angl.)</sup>](https://www.npmjs.com/package/promise.any)
- L'objet {{JSxRef("Promise")}}
- La méthode statique {{JSxRef("Promise.all()")}}
- La méthode statique {{JSxRef("Promise.allSettled()")}}
- La méthode statique {{JSxRef("Promise.race()")}}
