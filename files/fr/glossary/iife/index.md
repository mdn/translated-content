---
title: IIFE
slug: Glossary/IIFE
l10n:
  sourceCommit: 99d723c4f77d7f537292a07dd7b5e5c13cb610da
---

Une **IIFE** (Immediately Invoked Function Expression, ou «&nbsp;expression de fonction immédiatement invoquée&nbsp;») est un idiome dans lequel une {{glossary("function", "fonction")}} {{glossary("JavaScript")}} s'exécute dès qu'elle est définie. On parle aussi de _fonction anonyme auto-exécutée_. Le nom IIFE a été popularisé par Ben Alman dans [son blog <sup>(angl.)</sup>](https://benalman.com/news/2010/11/immediately-invoked-function-expression/#iife).

```js
// IIFE classique
(function () {
  // instructions…
})();

// variante avec fonction fléchée
(() => {
  // instructions…
})();

// IIFE asynchrone
(async () => {
  // instructions…
})();
```

Elle comporte deux parties principales&nbsp;:

1. Une [expression de fonction](/fr/docs/Web/JavaScript/Reference/Operators/function). Celle-ci doit généralement être [entourée de parenthèses](/fr/docs/Web/JavaScript/Reference/Operators/Grouping) pour être analysée correctement.
2. L'appel immédiat de l'expression de fonction. Des arguments peuvent être fournis, mais les IIFE sans argument sont plus courantes.

Les IIFE sont un motif courant pour exécuter autant d'instructions que souhaité dans leur propre portée (et éventuellement retourner une valeur), à un endroit qui exige une seule expression. Elles sont similaires, mais bien plus puissantes que l'[opérateur virgule](/fr/docs/Web/JavaScript/Reference/Operators/Comma_operator), qui ne permet d'exécuter que plusieurs expressions et ne fournit donc aucun moyen d'utiliser des variables locales ou des instructions de contrôle de flux.

Les cas d'usage des IIFE incluent&nbsp;:

- Éviter de polluer l'espace de noms global en créant une nouvelle {{glossary("scope")}}.
- Créer un nouveau contexte asynchrone pour utiliser {{jsxref("Operators/await", "await")}} dans un contexte non asynchrone.
- Calculer des valeurs avec une logique complexe, par exemple en utilisant plusieurs instructions comme une seule expression.

Pour des exemples de code, voir les pages de référence sur l'[expression `function`](/fr/docs/Web/JavaScript/Reference/Operators/function) et l'[expression `async function`](/fr/docs/Web/JavaScript/Reference/Operators/async_function).

## Voir aussi

- [IIFE <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression) (Wikipédia)
- L'[Opérateur virgule](/fr/docs/Web/JavaScript/Reference/Operators/Comma_operator)
- Termes du glossaire associés&nbsp;:
  - {{Glossary("Function")}}
