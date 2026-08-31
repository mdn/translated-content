---
title: "Promise : méthode statique allSettled()"
short-title: allSettled()
slug: Web/JavaScript/Reference/Global_Objects/Promise/allSettled
l10n:
  sourceCommit: cbf7f4b55e2c0bc0c096773435b159edcaa8c9e2
---

La méthode statique **`Promise.allSettled()`** prend un itérable de promesses en entrée et retourne une seule promesse ({{JSxRef("Promise")}}). Cette promesse retournée est complétée (<i lang="en">fulfilled</i> en anglais) lorsque toutes les promesses de l'entrée sont acquittées (<i lang="en">settle</i> en anglais) (y compris lorsqu'un itérable vide est passé), avec un tableau d'objets qui décrivent le résultat de chaque promesse.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Promise.allSettled()", "taller")}}

```js interactive-example
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, "toto"),
);
const promises = [promise1, promise2];

Promise.allSettled(promises).then((results) =>
  results.forEach((result) => console.log(result.status)),
);

// Résultat attendu :
// "fulfilled"
// "rejected"
```

## Syntaxe

```js-nolint
Promise.allSettled(iterable)
```

### Paramètres

- `iterable`
  - : Un [itérable](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#le_protocole_«_itérable_») (tel qu'un tableau ({{JSxRef("Array")}})) contenant des promesses. Ces valeurs sont [attendues](/fr/docs/Web/JavaScript/Reference/Operators/await), donc d'autres [semi-promesses](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise#semi-promesse) sont également résolues, tandis que les valeurs qui ne sont pas des semi-promesses sont retournées tels quels.

### Valeur de retour

Une promesse ({{JSxRef("Promise")}}) qui est&nbsp;:

- **Déjà complétée**, si l'itérable passé est vide.
- **Complétée de façon asynchrone**, lorsque toutes les promesses de l'itérable donné sont acquittées (soit complétées, soit rompues). La valeur de complétion est un tableau d'objets, chacun décrivant le résultat d'une promesse de l'itérable, dans l'ordre des promesses passées, indépendamment de l'ordre de complétion. Chaque objet de résultat possède les propriétés suivantes&nbsp;:
  - `status`
    - : Une chaîne de caractères, soit `"fulfilled"`, soit `"rejected"`, indiquant l'état final de la promesse.
  - `value`
    - : Présente uniquement si `status` vaut `"fulfilled"`. La valeur avec laquelle la promesse a été complétée.
  - `reason`
    - : Présente uniquement si `status` vaut `"rejected"`. La raison pour laquelle la promesse a été rompue.

  Si un `iterable` passé n'est pas vide mais ne contient aucune promesse en attente, la promesse retournée est toujours complétée de façon asynchrone (au lieu de synchrone).

## Description

La méthode `Promise.allSettled()` est l'une des méthodes de [concurrence des promesses](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise#concurrence_des_promesses). `Promise.allSettled()` est généralement utilisée lorsque vous avez plusieurs tâches asynchrones qui ne dépendent pas les unes des autres pour s'exécuter correctement, ou si vous souhaitez toujours connaître le résultat de chaque promesse.

En comparaison, la promesse retournée par {{JSxRef("Promise.all()")}} peut être plus appropriée si les tâches dépendent les unes des autres, ou si vous souhaitez rompre immédiatement dès qu'une d'entre elles est rompue.

## Exemples

### Utiliser `Promise.allSettled()`

```js
Promise.allSettled([
  Promise.resolve(33),
  new Promise((resolve) => setTimeout(() => resolve(66), 0)),
  99,
  Promise.reject(new Error("une erreur")),
]).then((values) => console.log(values));

// [
//   { status: 'fulfilled', value: 33 },
//   { status: 'fulfilled', value: 66 },
//   { status: 'fulfilled', value: 99 },
//   { status: 'rejected', reason: Error: une erreur }
// ]
```

Vous pouvez également déstructurer les résultats pour avoir une variable par résultat de règlement.

```js
const [statut1, statut2] = Promise.allSettled([
  Promise.resolve(33),
  new Promise((resolve) => setTimeout(() => resolve(66), 0)),
]);

// statut1 = { status: 'fulfilled', value: 33 }
// statut2 = { status: 'fulfilled', value: 66 }
```

Si vous déstructurez le résultat, vous devez conserver les variables de résultat dans le même ordre que les promesses d'entrée&nbsp;; un décalage peut provoquer des bogues subtils. La méthode {{JSxRef("Promise.allSettledKeyed()")}} évite ce problème en associant chaque entrée et sortie à une clé.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `Promise.allSettled` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-promise)
- [La prothèse d'émulation es-shims de `Promise.allSettled` <sup>(angl.)</sup>](https://www.npmjs.com/package/promise.allsettled)
- Le guide [d'utilisation des promesses](/fr/docs/Web/JavaScript/Guide/Using_promises)
- [Programmation asynchrone à l'aide des promesses](/fr/docs/Learn_web_development/Extensions/Async_JS/Promises)
- L'objet {{JSxRef("Promise")}}
- La méthode statique {{JSxRef("Promise.all()")}}
- La méthode statique {{JSxRef("Promise.allSettledKeyed()")}}
- La méthode statique {{JSxRef("Promise.any()")}}
- La méthode statique {{JSxRef("Promise.race()")}}
