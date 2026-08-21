---
title: "Math : méthode statique min()"
short-title: min()
slug: Web/JavaScript/Reference/Global_Objects/Math/min
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode statique **`Math.min()`** retourne le plus petit des nombres passés en paramètres, ou {{JSxRef("Infinity")}} s'il n'y a pas de paramètres.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Math.min()")}}

```js interactive-example
console.log(Math.min(2, 3, 1));
// Sortie attendue : 1

console.log(Math.min(-2, -3, -1));
// Sortie attendue : -3

const array = [2, 3, 1];

console.log(Math.min(...array));
// Sortie attendue : 1
```

## Syntaxe

```js-nolint
Math.min()
Math.min(value1)
Math.min(value1, value2)
Math.min(value1, value2, /* …, */ valueN)
```

### Paramètres

- `value1`, …, `valueN`
  - : Zéro ou plusieurs nombres parmi lesquels la plus petite valeur est sélectionnée et retournée.

### Valeur de retour

Le plus petit des nombres passés en arguments. Retourne {{JSxRef("NaN")}} si l'un des paramètres est ou est converti en `NaN`. Retourne {{JSxRef("Infinity")}} si aucun paramètre n'est fourni.

## Description

Puisque `min()` est une méthode statique de `Math`, elle doit toujours être utilisée avec la syntaxe `Math.min()`, elle ne doit pas être appelée comme la méthode d'un autre objet qui a été créé (`Math` n'est pas un constructeur).

[`Math.min.length`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/length) vaut 2, un signal faible indiquant qu'elle est conçue pour au moins deux paramètres.

## Exemples

### Utiliser `Math.min()`

Dans cet exemple, on trouve le minimum de `x` et `y` et on affecte cette valeur à `z`&nbsp;:

```js
const x = 10;
const y = -20;
const z = Math.min(x, y); // -20
```

### Ramener une valeur dans un intervalle avec `Math.min()`

`Math.min()` est souvent utilisée afin de ramener une certaine valeur dans un intervalle donné (<i lang="en">clipping</i> en anglais). Par exemple&nbsp;:

```js
let x = f(toto);

if (x > limite) {
  x = limite;
}
```

peut s'écrire comme ceci

```js
const x = Math.min(f(toto), limite);
```

{{JSxRef("Math.max()")}} peut être utilisée de façon semblable pour ramener une valeur vers un minimum d'un intervalle donné.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode statique {{JSxRef("Math.max()")}}
