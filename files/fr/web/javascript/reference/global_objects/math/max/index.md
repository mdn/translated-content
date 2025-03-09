---
title: Math.max()
slug: Web/JavaScript/Reference/Global_Objects/Math/max
l10n:
  sourceCommit: f93bc37959478633805558b88f6b5e2cc04ec435
---

{{JSRef}}

La méthode statique **`Math.max()`** renvoie le plus grand nombre parmi ceux passés en paramètres, ou [`-Infinity`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Infinity) si aucun paramètre n'est fourni.

{{InteractiveExample("JavaScript Demo: Math.max()")}}

```js interactive-example
console.log(Math.max(1, 3, 2));
// Expected output: 3

console.log(Math.max(-1, -3, -2));
// Expected output: -1

const array1 = [1, 3, 2];

console.log(Math.max(...array1));
// Expected output: 3
```

## Syntaxe

```js-nolint
Math.max()
Math.max(valeur0)
Math.max(valeur0, valeur1)
Math.max(valeur0, valeur1, /* … ,*/ valeurN)
```

### Paramètres

- `valeur1`, `valeur2`, … , `valeurN`
  - : Zéro ou plusieurs nombres dont le plus grand sera renvoyé par la méthode.

### Valeur de retour

Le plus grand des nombres passés en arguments. S'il existe un des arguments qui ne peut pas être converti en nombre, c'est [`NaN`](/fr/docs/Web/JavaScript/Reference/Global_Objects/NaN) qui sera renvoyé. Si aucun paramètre n'est passé, c'est [`-Infinity`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Infinity) qui est renvoyé.

## Description

`max()` est une méthode statique de `Math` et doit toujours être utilisée avec la syntaxe `Math.max()`, elle ne doit pas être appelée comme la méthode d'un autre objet qui aurait été créé (`Math` n'est pas un constructeur).

[`Math.max.length`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/length) vaut 2, un signal faible indiquant qu'elle est conçue pour au moins deux paramètres.

## Exemples

### Utiliser `Math.max()`

```js
Math.max(10, 20); // 20
Math.max(-10, -20); // -10
Math.max(-10, 20); // 20
```

### Obtenir l'élément maximum d'un tableau

La méthode [`Array.prototype.reduce()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) peut être utilisée pour déterminer la valeur maximale d'un tableau de nombre en comparant les valeurs qui se suivent&nbsp;:

```js
const arr = [1, 2, 3];
const max = arr.reduce((a, b) => Math.max(a, b), -Infinity);
```

On peut également utiliser [`Function.prototype.apply()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) afin de trouver le maximum parmi un tableau de nombres. Avec la fonction suivante, `getMaxTableau([1,2,3])` sera équivalent à `Math.max(1, 2, 3)`, mais `getMaxTableau` pourra être utilisé sur des tableaux construits dans les scripts. Cet usage est à réserver aux tableaux qui ont relativement peu d'éléments (voir avertissement ci-après).

```js
function getMaxTableau(tableauNumérique) {
  return Math.max.apply(null, tableauNumérique);
}
```

Avec [la syntaxe de décomposition](/fr/docs/Web/JavaScript/Reference/Operators/Spread_syntax), on pourra également utiliser cette forme, plus concise&nbsp;:

```js
const arr = [1, 2, 3];
const max = Math.max(...arr);
```

> [!WARNING]
> Utiliser la décomposition ou `apply()` de cette façon pourra échouer s'il y a trop d'éléments dans le tableau (car ceux-ci seront passés en arguments). Pour plus d'informations, consulter [Utiliser `apply()` et les fonctions natives](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/apply#utiliser_apply_et_des_fonctions_natives). La méthode proposée avec `reduce()` n'a pas cette contrainte.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Math.min()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/min)
