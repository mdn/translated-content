---
title: "Promise : méthode statique race()"
short-title: race()
slug: Web/JavaScript/Reference/Global_Objects/Promise/race
l10n:
  sourceCommit: cbf7f4b55e2c0bc0c096773435b159edcaa8c9e2
---

La méthode statique **`Promise.race()`** prend en entrée un itérable de promesses et retourne une seule {{JSxRef("Promise")}}. Cette promesse retournée se résout avec l'état final de la première promesse qui est acquittée (<i lang="en">settle</i> en anglais).

{{InteractiveExample("Démonstration JavaScript&nbsp;: Promise.race()", "taller")}}

```js interactive-example
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "un");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "deux");
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
  // Les deux sont résolues, mais promise2 est plus rapide
});
// Résultat attendu : "deux"
```

## Syntaxe

```js-nolint
Promise.race(iterable)
```

### Paramètres

- `itérable`
  - : Un [itérable](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#le_protocole_«_itérable_») (tel qu'un tableau ({{JSxRef("Array")}})) contenant des promesses. Ces valeurs sont [attendues](/fr/docs/Web/JavaScript/Reference/Operators/await), donc d'autres [semi-promesses](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise#semi-promesse) sont également résolues, tandis que les valeurs qui ne sont pas des semi-promesses sont retournées tels quels.

### Valeur de retour

Une promesse ({{JSxRef("Promise")}}) qui est **acquittée de manière asynchrone** avec l'état final de la première promesse de l'itérable à être acquittée. En d'autres termes, elle est complétée (<i lang="en">fulfilled</i> en anglais) si la première promesse à être acquittée est résolue, et rompue (<i lang="en">rejected</i> en anglais) si la première promesse à être acquittée est rompue. La promesse retournée reste en attente indéfiniment si l'itérable passé est vide. Si l'itérable passé n'est pas vide mais ne contient aucune promesse en attente, la promesse retournée est toujours acquittée de manière asynchrone (au lieu de synchrone).

## Description

La méthode `Promise.race()` est l'une des méthodes de [concurrence des promesses](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise#concurrence_des_promesses). Elle est utile lorsque vous souhaitez que la première tâche asynchrone se termine, mais que vous ne vous souciez pas de son état final (c'est-à-dire qu'elle peut réussir ou échouer).

Si l'itérable contient une ou plusieurs valeurs qui ne sont pas des promesses et/ou une promesse déjà acquittée, alors `Promise.race()` s'acquitte avec la première de ces valeurs trouvées dans l'itérable.

Comme pour les autres combinateurs de promesses, `Promise.race()` marque immédiatement toutes les promesses comme «&nbsp;gérées&nbsp;» lorsqu'elle est appelée (en appelant leurs méthodes `.then()`). Les rejets ultérieurs après le premier acquittement sont ignorés et ne déclenchent aucun évènement `unhandledrejection`.

## Exemples

### Utiliser `Promise.race()`

Cet exemple montre comment `Promise.race()` peut être utilisé pour concurrencer plusieurs minuteries implémentées à l'aide de {{DOMxRef("Window.setTimeout", "setTimeout()")}}. La minuterie dont le délai est le plus court remporte toujours la course et devient le résultat de la promesse.

```js
function enSommeil(temp, valeur, etat) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (etat === "fulfill") {
        resolve(valeur);
      } else {
        reject(new Error(valeur));
      }
    }, temp);
  });
}

const p1 = enSommeil(500, "un", "fulfill");
const p2 = enSommeil(100, "deux", "fulfill");

Promise.race([p1, p2]).then((valeur) => {
  console.log(valeur); // "deux"
  // Les deux sont acquittées, mais p2 est plus rapide
});

const p3 = enSommeil(100, "trois", "fulfill");
const p4 = enSommeil(500, "quatre", "reject");

Promise.race([p3, p4]).then(
  (valeur) => {
    console.log(valeur); // "trois"
    // p3 est plus rapide, donc elle est acquittée
  },
  (erreur) => {
    // N'est pas appelé
  },
);

const p5 = enSommeil(500, "cinq", "fulfill");
const p6 = enSommeil(100, "six", "reject");

Promise.race([p5, p6]).then(
  (valeur) => {
    // N'est pas appelé
  },
  (erreur) => {
    console.error(erreur.message); // "six"
    // p6 est plus rapide, donc elle est rompue
  },
);
```

### Caractère asynchrone de `Promise.race()`

L'exemple suivant illustre le caractère asynchrone de `Promise.race`. Contrairement aux autres méthodes de concurrence des promesses, `Promise.race` est toujours asynchrone&nbsp;: elle ne s'acquitte jamais de manière synchrone, même lorsqu'un `iterable` est vide.

```js
// Passe un tableau de promesses qui sont déjà résolues,
// pour déclencher Promise.race dès que possible
const tableauPromessesResolues = [Promise.resolve(33), Promise.resolve(44)];

const p = Promise.race(tableauPromessesResolues);
// Journalise immédiatement la valeur de p
console.log(p);

// En utilisant setTimeout, nous pouvons exécuter du code après que la pile soit vide
setTimeout(() => {
  console.log("la pile est maintenant vide");
  console.log(p);
});

// Journaux, dans l'ordre :
// Promise { <state>: "pending" }
// la pile est maintenant vide
// Promise { <state>: "fulfilled", <value>: 33 }
```

Un itérable vide fait que la promesse retournée reste indéfiniment en attente&nbsp;:

```js
const promessesIndefinimentEnAttente = Promise.race([]);
console.log(promessesIndefinimentEnAttente);
setTimeout(() => {
  console.log("la pire est maintenant vide");
  console.log(promessesIndefinimentEnAttente);
});

// Journaux, dans l'ordre :
// Promise { <state>: "pending" }
// la pire est maintenant vide
// Promise { <state>: "pending" }
```

Si l'itérable contient une ou plusieurs valeurs qui ne sont pas des promesses et/ou une promesse déjà acquittée, alors `Promise.race` s'acquitte de la première de ces valeurs trouvées dans le tableau&nbsp;:

```js
const promessesIndefinimentEnAttente = Promise.race([]);
const promessesDejaCompletees = Promise.resolve(100);

const arr = [
  promessesIndefinimentEnAttente,
  promessesDejaCompletees,
  "valeur qui n'est pas une promesse",
];
const arr2 = [
  promessesIndefinimentEnAttente,
  "valeur qui n'est pas une promesse",
  Promise.resolve(100),
];
const p = Promise.race(arr);
const p2 = Promise.race(arr2);

console.log(p);
console.log(p2);
setTimeout(() => {
  console.log("la pile est maintenant vide");
  console.log(p);
  console.log(p2);
});

// Journaux, dans l'ordre :
// Promise { <state>: "pending" }
// Promise { <state>: "pending" }
// la pile est maintenant vide
// Promise { <state>: "fulfilled", <value>: 100 }
// Promise { <state>: "fulfilled", <value>: "valeur qui n'est pas une promesse" }
```

### Utiliser `Promise.race()` pour la mise en place d'un délai d'expiration des requêtes

Vous pouvez gérer une requête susceptible de durer longtemps à l'aide d'un minuteur qui provoque un rejet, de sorte qu'une fois le délai écoulé, la promesse associée soit automatiquement rompue.

```js
const data = Promise.race([
  fetch("/api"),
  new Promise((resolve, reject) => {
    // Rompue après 5 secondes
    setTimeout(
      () => reject(new Error("Délai d'attente de la requête dépassé")),
      5000,
    );
  }),
])
  .then((res) => res.json())
  .catch((err) => displayError(err));
```

Si la promesse `data` est complétée, elle contient les données récupérées depuis `/api`&nbsp;; sinon, elle est rompue si `fetch` reste en attente pendant 5 secondes et perd la course face au minuteur `setTimeout`.

Notez qu'il n'est pas nécessaire de nettoyer explicitement le rejet du délai d'attente (par exemple en annulant le délai) lorsque la promesse `fetch` se termine en premier. `Promise.race` capture et ignore les résultats de l'acquittement des promesses perdantes, donc le rejet `"Délai d'attente de la requête dépassé"` ne se propage pas comme un rejet non géré.

### Détecter l'état d'une promesse avec `Promise.race()`

Comme `Promise.race()` se résout avec la première promesse de l'itérable qui n'est pas en attente, vous pouvez vérifier l'état d'une promesse, notamment si elle est en attente. Cet exemple est adapté de [`promise-status-async` <sup>(angl.)</sup>](https://github.com/kudla/promise-status-async/blob/master/lib/promiseState.js).

```js
function promiseState(promise) {
  const pendingState = { status: "pending" };

  return Promise.race([promise, pendingState]).then(
    (value) =>
      value === pendingState ? value : { status: "fulfilled", value },
    (reason) => ({ status: "rejected", reason }),
  );
}
```

Dans cette fonction, si `promise` est en attente, la deuxième valeur, `pendingState`, qui n'est pas une promesse, devient le résultat de la course&nbsp;; sinon, si `promise` est déjà acquittée, vous pouvez connaître son état grâce aux gestionnaires `onFulfilled` et `onRejected`. Par exemple&nbsp;:

```js
const p1 = new Promise((res) => setTimeout(() => res(100), 100));
const p2 = new Promise((res) => setTimeout(() => res(200), 200));
const p3 = new Promise((res, rej) =>
  setTimeout(() => rej(new Error("failed")), 100),
);

async function getStates() {
  console.log(await promiseState(p1));
  console.log(await promiseState(p2));
  console.log(await promiseState(p3));
}

console.log("Immédiatement après l'initialisation :");
getStates();
setTimeout(() => {
  console.log("Après une attente de 100ms :");
  getStates();
}, 100);

// Journaux :
// Immédiatement après l'initialisation :
// { status: 'pending' }
// { status: 'pending' }
// { status: 'pending' }
// Après une attente de 100ms :
// { status: 'fulfilled', value: 100 }
// { status: 'pending' }
// { status: 'rejected', reason: Error: failed }
```

> [!NOTE]
> La fonction `promiseState` s'exécute toujours de manière asynchrone, car il n'existe aucun moyen d'obtenir de manière synchrone la valeur d'une promesse (c'est-à-dire sans `then()` ni `await`), même lorsqu'elle est déjà acquittée. Toutefois, `promiseState()` est toujours complétée en un cycle et n'attend jamais réellement l'acquittement d'une promesse.

### Comparer avec `Promise.any()`

`Promise.race` prend la première promesse ({{JSxRef("Promise")}}) acquittée.

```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "un");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, "deux");
});

Promise.race([promise1, promise2])
  .then((value) => {
    console.log("réussite avec la valeur :", value);
  })
  .catch((reason) => {
    // Seule promise1 est complétée, mais promise2 est plus rapide
    console.error("échec avec la raison :", reason);
  });
// échec avec la raison : deux
```

{{JSxRef("Promise.any")}} prend la première {{JSxRef("Promise")}} complétée.

```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "un");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, "deux");
});

Promise.any([promise1, promise2])
  .then((value) => {
    // Seule promise1 est complétée, même si promise2 est acquittée plus tôt
    console.log("réussite avec la valeur :", value);
  })
  .catch((reason) => {
    console.error("échec avec la raison :", reason);
  });
// réussite avec la valeur : un
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet natif {{JSxRef("Promise")}}
- La méthode statique {{JSxRef("Promise.all()")}}
- La méthode statique {{JSxRef("Promise.allSettled()")}}
- La méthode statique {{JSxRef("Promise.any()")}}
