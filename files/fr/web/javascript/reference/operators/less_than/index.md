---
title: Inférieur strict (<)
slug: Web/JavaScript/Reference/Operators/Less_than
tags:
  - JavaScript
  - Language feature
  - Operator
  - Reference
browser-compat: javascript.operators.less_than
---
{{jsSidebar("Operators")}}

L'opérateur inférieur strict (`<`) renvoie `true` si son opérande gauche est strictement inférieur à son opérande droit et `false` sinon.

{{EmbedInteractiveExample("pages/js/expressions-less-than.html")}}

## Syntaxe

```js
x < y
```

## Description

Les opérandes sont comparés avec l'algorithme de [comparaison abstraite relationnelle](https://tc39.es/ecma262/#sec-abstract-relational-comparison) résumé comme suit :

- Tout d'abord, les objets sont convertis en valeurs primitives avec [`Symbol.ToPrimitive`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) en utilisant le paramètre `hint` avec la valeur `'number'`.
- Si les deux valeurs sont des chaînes de caractères, elles sont comparées comme telles selon les valeurs des codes Unicode qu'elles contiennent.
- Sinon, le moteur JavaScript tente de convertir les valeurs primitives non-numériques en valeurs numériques :

  - Les valeurs booléennes `true` et `false` sont respectivement converties en 1 et 0.
  - `null` est converti en 0.
  - `undefined` est converti en `NaN`.
  - Les chaînes de caractères sont converties en fonction de la valeur qu'elles contiennent et, si elles ne contiennent pas de valeurs numériques, elles sont converties en `NaN`.

- Si l'une des valeurs vaut [`NaN`](/fr/docs/Web/JavaScript/Reference/Global_Objects/NaN), l'opérateur renverra `false`.
- Sinon, les valeurs sont comparées numériquement.

## Exemples

### Comparaison numérique

```js
console.log(5 < 3);            // false
console.log(3 < 3);            // false
console.log(3 < 5);            // true
```

### Comparaison entre un nombre et un BigInt

```js
console.log(5n < 3);           // false
console.log(3 < 5n);           // true
```

### Comparaison entre chaînes de caractères

```js
console.log("a" < "b");        // true
console.log("a" < "a");        // false
console.log("a" < "3");        // false
```

### Comparaison entre nombres et chaînes de caractères

```js
console.log("5" < 3);          // false
console.log("3" < 3);          // false
console.log("3" < 5);          // true

console.log("coucou" < 5);      // false
console.log(5 < "coucou");      // false

console.log("5" < 3n);         // false
console.log("3" < 5n);         // true
```

### Comparaison avec des booléens, null, undefined, NaN

```js
console.log(true < false);     // false
console.log(false < true);     // true

console.log(0 < true);         // true
console.log(true < 1);         // false

console.log(null < 0);         // false
console.log(null < 1);         // true

console.log(undefined < 3);    // false
console.log(3 < undefined);    // false

console.log(3 < NaN);          // false
console.log(NaN < 3);          // false
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'opérateur supérieur strict](/fr/docs/Web/JavaScript/Reference/Operators/Greater_than)
- [L'opérateur supérieur ou égal](/fr/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal)
- [L'opérateur inférieur ou égal](/fr/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal)
