---
title: Mémoïsation
slug: Glossary/Memoization
l10n:
  sourceCommit: 9f46f08d20b21498293cbf6b84f508103272ec6f
---

La **Mémoïsation** est une technique d'optimisation qui stocke le résultat d'un appel de {{Glossary("function", "fonction")}} et retourne le résultat stocké lorsque la fonction est appelée à nouveau avec les mêmes entrées. Cela évite de répéter le calcul.

Voici le schéma courant pour la mémoïsation&nbsp;:

```js
const argARetourner = new Map();

function memoizedFunction(arg) {
  if (argARetourner.has(arg)) {
    return argARetourner.get(arg);
  }
  const resultat = heavyComputation(arg);
  argARetourner.set(arg, resultat);
  return resultat;
}
```

La mémoïsation échange de la mémoire supplémentaire contre une exécution potentiellement plus rapide. Elle convient aux fonctions qui retournent le même résultat pour les mêmes entrées et qui n'ont pas d'effets secondaires, surtout si la fonction est censée être appelée de nombreuses fois avec la même entrée. Par exemple, elle est couramment utilisée dans la {{Glossary("recursion", "récursion")}}, car il peut y avoir de nombreux appels récursifs avec le même argument.

## Voir aussi

- [Mémoïsation <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Memoization) sur Wikipedia
- [Accesseurs intelligents / auto-remplaçants / à la volée](/fr/docs/Web/JavaScript/Reference/Functions/get#accesseurs_intelligents_auto-remplaçants_à_la_volée)
