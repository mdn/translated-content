---
title: "Promise : méthode statique try()"
short-title: try()
slug: Web/JavaScript/Reference/Global_Objects/Promise/try
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

La méthode statique **`Promise.try()`** prend une fonction de rappel de n'importe quel type (qui retourne ou lève une erreur, de manière synchrone ou asynchrone) et [résout](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve) son résultat en une promesse ({{JSxRef("Promise")}}).

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
- Complétée ou rompue de manière asynchrone, si `func` retourne une promesse. La valeur retournée est [résolue](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve) en une promesse, ce qui signifie que les objets {{JSxRef("Promise")}} intégrés sont retournés tels quels.

## Description

Vous pouvez avoir une API qui prend une fonction de rappel. La fonction de rappel peut être synchrone ou asynchrone. Vous voulez tout gérer de manière uniforme en enveloppant le résultat dans une promesse. La manière la plus simple peut être {{JSxRef("Promise/resolve", "Promise.resolve(func())")}}. Le problème est que si `func()` lève une erreur de manière synchrone, cette erreur n'est pas capturée et transformée en promesse rompue.

Vous pouvez envelopper cette expression dans un bloc `try...catch`&nbsp;:

```js
let resultat;
try {
  resultat = Promise.resolve(func());
} catch (erreur) {
  resultat = Promise.reject(erreur);
}
```

Le problème est que `try...catch` n'est pas une expression, donc vous ne pouvez pas l'utiliser directement dans des positions d'expression comme le passage à d'autres fonctions.

Par conséquent, lorsqu'il s'agit d'élever le résultat d'un appel de fonction dans une promesse, qu'elle soit complétée ou rompue, on utilise plus couramment cette approche&nbsp;:

```js
new Promise((resolve) => resolve(func()));
```

Pour le constructeur `Promise()` natif, les erreurs levées par l'exécuteur sont automatiquement capturées et transformées en rejets, donc cela empêche également les erreurs synchrones. Le problème est qu'il crée inconditionnellement un nouvel objet `Promise`, ce qui est inutile si `func()` retourne déjà une promesse. `Promise.resolve()`, en revanche, est suffisamment intelligent pour éviter cet emballage supplémentaire de promesse.

`Promise.try()` est presque exactement équivalent à l'approche `try...catch`, sauf qu'il est plus court et peut être utilisé comme une expression&nbsp;:

```js
Promise.try(func);
```

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

`Promise.try()` est générique et prend en charge l'héritage, ce qui signifie qu'elle peut être appelée sur des sous-classes de `Promise`, et que le résultat contient une promesse du type de la sous-classe. Pour ce faire, le constructeur de la sous-classe doit implémenter la même signature que le constructeur [`Promise()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) — acceptant une seule fonction `executor` qui peut être appelée avec les rappels `resolve` et `reject` comme paramètres.

## Exemples

### Utiliser la méthode `Promise.try()`

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
Promise.try = function (func, ...args) {
  let resultat;
  try {
    resultat = func(...args);
  } catch (erreur) {
    return Promise.reject.call(this, erreur);
  }
  return Promise.resolve.call(this, resultat);
};
```

`Promise.try()` délègue à {{JSxRef("Promise.resolve()")}} et {{JSxRef("Promise.reject()")}} pour créer la valeur de retour, et ces deux fonctions sont génériques.

Par exemple, nous pouvons l'appeler sur un constructeur qui passe `console.log` comme fonctions `resolve` et `reject` à `executor`&nbsp;:

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

  static try = Promise.try;
}

const p = PasUnePromesse.try(() => "bonjour");
// Journaux : Résolue bonjour
// p est une instance de PasUnePromesse

const p2 = PasUnePromesse.try(() => {
  throw new Error("oups");
});
// Journaux : Rompue Error: oups
// p2 est une instance de PasUnePromesse
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) de `Promise.try` dans `core-js` <sup>(angl.)</sup>](https://core-js.io/docs/features/ecmascript/promise)
- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) es-shims de `Promise.try` <sup>(angl.)</sup>](https://www.npmjs.com/package/promise.try)
- Le guide [d'utilisation des promesses](/fr/docs/Web/JavaScript/Guide/Using_promises)
- L'objet natif {{JSxRef("Promise")}}
- Le constructeur {{JSxRef("Promise/Promise", "Promise()")}}
