---
title: "Math : méthode statique max()"
short-title: max()
slug: Web/JavaScript/Reference/Global_Objects/Math/max
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode statique **`Math.max()`** retourne le plus grand des nombres passés en paramètres, ou -{{JSxRef("Infinity")}} s'il n'y a pas de paramètres.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Math.max()")}}

```js interactive-example
console.log(Math.max(1, 3, 2));
// Sortie attendue : 3

console.log(Math.max(-1, -3, -2));
// Sortie attendue : -1

const array = [1, 3, 2];

console.log(Math.max(...array));
// Sortie attendue : 3
```

## Syntaxe

```js-nolint
Math.max()
Math.max(value1)
Math.max(value1, value2)
Math.max(value1, value2, /* …, */ valueN)
```

### Paramètres

- `value1`, …, `valueN`
  - : Zéro ou plusieurs nombres parmi lesquels la plus grande valeur est sélectionnée et retournée.

### Valeur de retour

Le plus grand des nombres passés en arguments. Retourne {{JSxRef("NaN")}} si l'un des paramètres est ou est converti en `NaN`. Retourne -{{JSxRef("Infinity")}} si aucun paramètre n'est fourni.

## Description

Puisque `max()` est une méthode statique de `Math`, elle doit toujours être utilisée avec la syntaxe `Math.max()`, elle ne doit pas être appelée comme la méthode d'un autre objet qui a été créé (`Math` n'est pas un constructeur).

[`Math.max.length`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/length) vaut 2, un signal faible indiquant qu'elle est conçue pour au moins deux paramètres.

## Exemples

### Utiliser `Math.max()`

```js
Math.max(10, 20); // 20
Math.max(-10, -20); // -10
Math.max(-10, 20); // 20
```

### Obtenir l'élément maximum d'un tableau

La méthode {{JSxRef("Array.prototype.reduce()")}} peut être utilisée pour déterminer la valeur maximale d'un tableau de nombre en comparant les valeurs qui se suivent&nbsp;:

```js
const arr = [1, 2, 3];
const max = arr.reduce((a, b) => Math.max(a, b), -Infinity);
```

On peut également utiliser {{JSxRef("Function.prototype.apply()")}} afin de trouver le maximum parmi un tableau de nombres. Avec la fonction suivante, `getMaxTableau([1,2,3])` est équivalent à `Math.max(1, 2, 3)`, mais `getMaxTableau` peut être utilisé sur des tableaux construits dans les scripts. Cet usage est à réserver aux tableaux qui ont relativement peu d'éléments (voir avertissement ci-après).

```js
function getMaxTableau(tableauNumerique) {
  return Math.max.apply(null, tableauNumerique);
}
```

Avec [la syntaxe de décomposition](/fr/docs/Web/JavaScript/Reference/Operators/Spread_syntax), on peut également utiliser cette forme, plus concise&nbsp;:

```js
const arr = [1, 2, 3];
const max = Math.max(...arr);
```

Cependant, la décomposition (`...`) et `apply` échouent ou retournent un résultat incorrect si le tableau contient trop d'éléments, car ils essaient de passer les éléments du tableau en tant que paramètres de fonction. Voir [Utiliser `apply()` et les fonctions natives](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/apply#utiliser_apply_et_des_fonctions_natives) pour plus de détails. La solution avec `reduce` n'a pas ce problème.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode statique {{JSxRef("Math.min()")}}
