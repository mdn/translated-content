---
title: "AsyncIterator : méthode [Symbol.asyncDispose]()"
short-title: "[Symbol.asyncDispose]()"
slug: Web/JavaScript/Reference/Global_Objects/AsyncIterator/Symbol.asyncDispose
l10n:
  sourceCommit: 99e4e41ce89ef69db3d08766296699f342c5a8ff
---

La méthode **`[Symbol.asyncDispose]()`** des instances de {{JSxRef("AsyncIterator")}} implémente le _protocole d'élimination asynchrone_ et permet de libérer la ressource lorsqu'elle est utilisée avec {{JSxRef("Statements/await_using", "await using")}}. Elle appelle et attend la méthode `return()` de `this`, si celle‑ci existe.

## Syntaxe

```js-nolint
asyncIterator[Symbol.asyncDispose]()
```

### Paramètres

Aucun.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemples

### Déclarer un itérateur asynchrone avec `await using`

La méthode `Symbol.asyncDispose` est destinée à être appelée automatiquement dans une déclaration `await using`. Ceci est utile si vous possédez un itérateur asynchrone que vous parcourez manuellement en appelant sa méthode `next()`&nbsp;; si vous l'itérez avec {{JSxRef("Statements/for-await...of", "for await...of")}} ou un mécanisme similaire, la gestion des erreurs et le nettoyage sont effectués automatiquement.

```js
async function* generateNumbers() {
  try {
    yield 1;
    yield 2;
    yield 3;
  } finally {
    console.log("Nettoyage");
  }
}

async function doSomething() {
  await using numbers = generateNumbers();
  const res1 = await numbers.next();
  // On n'itère pas le reste des valeurs
  // Avant la fin de la fonction, l'itérateur asynchrone est libéré
  // Affiche "Nettoyage"
}

doSomething();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Gestion des ressources JavaScript](/fr/docs/Web/JavaScript/Guide/Resource_management)
- La propriété statique {{JSxRef("Symbol.asyncDispose")}}
- La déclaration {{JSxRef("Statements/await_using", "await using")}}
- [Prothèse d'émulation de `AsyncIterator.prototype[Symbol.asyncDispose]` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#explicit-resource-management)
