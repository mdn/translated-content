---
title: "Promise : méthode statique try()"
short-title: try()
slug: Web/JavaScript/Reference/Global_Objects/Promise/try
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`Promise.try()`** prend une fonction de rappel de n'importe quel type (qui retourne ou lève une erreur, de manière synchrone ou asynchrone) et enveloppe son résultat dans une promesse ({{JSxRef("Promise")}}).

## Syntaxe

```js-nolint
Promise.try(func)
Promise.try(func, arg1)
Promise.try(func, arg1, arg2)
Promise.try(func, arg1, arg2, /* …, */ argN)
```

### Paramètres

- `func`
  - : Une fonction qui est appelée de manière synchrone avec les arguments fournis (`arg1`, `arg2`, …, `argN`). Elle peut faire n'importe quoi — soit retourner une valeur, lever une erreur, ou retourner une promesse.
- `arg1`, `arg2`, …, `argN`
  - : Les arguments à passer à `func`.

### Valeur de retour

Une promesse ({{JSxRef("Promise")}}) qui est&nbsp;:

- Déjà complétée, si `func` retourne une valeur de manière synchrone.
- Déjà rompue, si `func` lève une erreur de manière synchrone.
- Complétée ou rompue de manière asynchrone, si `func` retourne une promesse.

## Description

Vous pouvez avoir une API qui prend une fonction de rappel. La fonction de rappel peut être synchrone ou asynchrone. Vous voulez tout gérer de manière uniforme en enveloppant le résultat dans une promesse. La manière la plus simple peut être {{JSxRef("Promise/resolve", "Promise.resolve(func())")}}. Le problème est que si `func()` lève une erreur de manière synchrone, cette erreur n'est pas capturée et transformée en promesse rompue.

L'approche courante (élever le résultat d'un appel de fonction dans une promesse, complétée ou rompue) ressemble souvent à ceci&nbsp;:

```js
new Promise((resolve) => resolve(func()));
```

Mais `Promise.try()` est plus utile ici&nbsp;:

```js
Promise.try(func);
```

Pour le constructeur `Promise()` natif, les erreurs levées par l'exécuteur sont automatiquement capturées et transformées en rejets, donc ces deux approches sont essentiellement équivalentes, sauf que `Promise.try()` est plus concis et lisible.

Notez que `Promise.try()` n'est _pas_ équivalent à ceci, malgré la forte ressemblance&nbsp;:

```js
Promise.resolve().then(func);
```

La différence est que la fonction de rappel passée à {{JSxRef("Promise/then", "then()")}} est toujours appelée de manière asynchrone, tandis que l'exécuteur du constructeur `Promise()` est appelé de manière synchrone. `Promise.try` appelle également la fonction de manière synchrone et résout la promesse immédiatement si possible.

`Promise.try()`, associé à {{JSxRef("Promise/catch", "catch()")}} et {{JSxRef("Promise/finally", "finally()")}}, peut être utilisé pour gérer les erreurs synchrones et asynchrones dans une seule chaîne, et faire apparaître la gestion des erreurs des promesses presque comme la gestion des erreurs synchrones.

Comme {{DOMxRef("Window/setTimeout", "setTimeout()")}}, `Promise.try()` accepte des arguments supplémentaires qui sont passés à la fonction de rappel. Cela signifie qu'au lieu de faire ceci&nbsp;:

```js
Promise.try(() => func(arg1, arg2));
```

Vous pouvez faire ceci&nbsp;:

```js
Promise.try(func, arg1, arg2);
```

Ces deux formes sont équivalentes, mais la dernière évite de créer une fermeture supplémentaire et est plus efficace.

## Exemples

### Utiliser `Promise.try()`

L'exemple suivant prend une fonction de rappel, la «&nbsp;convertit&nbsp;» en promesse, gère le résultat et effectue une gestion des erreurs&nbsp;:

```js
function faireQuelqueChose(action) {
  return Promise.try(action)
    .then((resultat) => console.log(resultat))
    .catch((erreur) => console.error(erreur))
    .finally(() => console.log("Terminé"));
}

faireQuelqueChose(() => "Résultat synchrone");

faireQuelqueChose(() => {
  throw new Error("Erreur synchrone");
});

faireQuelqueChose(async () => "Résultat asynchrone");

faireQuelqueChose(async () => {
  throw new Error("Erreur asynchrone");
});
```

Avec `async`/`await`, le même code se présente ainsi&nbsp;:

```js
async function faireQuelqueChose(action) {
  try {
    const resultat = await action();
    console.log(resultat);
  } catch (erreur) {
    console.error(erreur);
  } finally {
    console.log("Terminé");
  }
}
```

### Appeler `try()` sur un constructeur qui n'est pas une promesse

`Promise.try()` est une méthode générique. Elle peut être appelée sur n'importe quel constructeur qui implémente la même signature que le constructeur `Promise()`.

Ce qui suit est une approximation légèrement plus fidèle de l'implémentation réelle de `Promise.try()` (même si elle ne doit toujours pas être utilisée comme prothèse d'émulation)&nbsp;:

```js
Promise.try = function (func) {
  return new this((resolve, reject) => {
    try {
      resolve(func());
    } catch (erreur) {
      reject(erreur);
    }
  });
};
```

En raison de la manière dont `Promise.try()` est implémentée (c'est-à-dire avec `try...catch`), vous pouvez appeler `Promise.try()` avec sa valeur `this` définie sur n'importe quel constructeur personnalisé, et elle ne lève jamais d'erreur de manière synchrone.

```js
class PasUnePromesse {
  constructor(executeur) {
    // Les fonctions « resolve » et « reject » ne se comportent pas du
    // tout comme celles d'une promesse native, mais Promise.try()
    // appelle seulement resolve
    executeur(
      (valeur) => console.log("Résolue", valeur),
      (raison) => console.log("Rompue", raison),
    );
  }
}

const p = Promise.try.call(PasUnePromesse, () => "bonjour");
// Journaux : Résolue bonjour

const p2 = Promise.try.call(PasUnePromesse, () => {
  throw new Error("oups");
});
// Journaux : Rompue Error: oups
```

Contrairement à `Promise()`, ce constructeur `PasUnePromesse()` _ne_ gère _pas_ correctement les exceptions lors de l'exécution de l'exécuteur. Malgré le `throw`, `Promise.try()` intercepte tout de même l'exception et la transmet à `reject()` pour la journaliser.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `Promise.try` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#promisetry)
- [La prothèse d'émulation es-shims de `Promise.try` <sup>(angl.)</sup>](https://www.npmjs.com/package/promise.try)
- Le guide [d'utilisation des promesses](/fr/docs/Web/JavaScript/Guide/Using_promises)
- L'objet natif {{JSxRef("Promise")}}
- Le constructeur {{JSxRef("Promise/Promise", "Promise()")}}
