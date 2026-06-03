---
title: "AsyncIterator : méthode [Symbol.asyncIterator]()"
short-title: "[Symbol.asyncIterator]()"
slug: Web/JavaScript/Reference/Global_Objects/AsyncIterator/Symbol.asyncIterator
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`[Symbol.asyncIterator]()`** des instances de {{JSxRef("AsyncIterator")}} implémente le [protocole d'itérable asynchrone](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#les_protocoles_ditérateur_asynchrone_et_ditérable_asynchrone) et permet aux itérateurs asynchrones natifs d'être consommés par la plupart des syntaxes qui attendent des itérables asynchrones, telles que les boucles {{JSxRef("Statements/for-await...of", "for await...of")}}. Elle retourne la valeur de {{JSxRef("Operators/this", "this")}}, c'est‑à‑dire l'objet itérateur asynchrone lui‑même.

## Syntaxe

```js-nolint
asyncIterator[Symbol.asyncIterator]()
```

### Paramètres

Aucun.

### Valeur de retour

La valeur de {{JSxRef("Operators/this", "this")}}, c'est‑à‑dire l'objet itérateur asynchrone lui‑même.

## Exemples

### Itération avec la boucle `for await...of`

Notez que vous avez rarement besoin d'appeler directement cette méthode. L'existence de la méthode `[Symbol.asyncIterator]()` rend tous les itérateurs asynchrones natifs [itérables asynchrones](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#les_protocoles_ditérateur_asynchrone_et_ditérable_asynchrone), et les syntaxes d'itération comme la boucle `for await...of` appellent automatiquement cette méthode pour obtenir l'itérateur asynchrone à parcourir.

```js
const asyncIterator = (async function* () {
  yield 1;
  yield 2;
  yield 3;
})();
(async () => {
  for await (const value of asyncIterator) {
    console.log(value);
  }
})();
// Affiche : 1, 2, 3
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La déclaration {{JSxRef("Statements/for-await...of", "for await...of")}}
