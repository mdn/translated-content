---
title: Plus unaire (+)
slug: Web/JavaScript/Reference/Operators/Unary_plus
tags:
  - JavaScript
  - Language feature
  - Operator
  - Reference
translation_of: Web/JavaScript/Reference/Operators/Unary_plus
browser-compat: javascript.operators.unary_plus
---
{{jsSidebar("Operators")}}

L'opérateur de plus unaire (`+`) précède son opérande et évalue son opérande en essayant de le convertir en nombre si ce n'est pas déjà une valeur numérique.

{{EmbedInteractiveExample("pages/js/expressions-unary-plus.html", "taller")}}

## Syntaxe

```js
Opérateur : +x
```

## Description

Bien que la négation unaire (`-`) puisse également être utilisée pour convertir des valeurs non-numérique, le plus unaire est plus rapide et plus conventionnel, car il n'effectue pas d'autres opérations que la conversion. Il peut être utilisé pour convertir les représentations textuelles d'entiers ou de flottants ainsi que les valeurs `true`, `false`, et `null`. Les représentations entières au format décimal ou hexadécimal sont toutes les deux prises en charge. Les nombres négatifs sont pris en charge (hors représentation hexadécimale). L'utilisation de cet opérateur sur les valeurs de type `BigInt` déclenchera une exception [`TypeError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypeError). Si l'analyse de valeur ne permet pas de déduire une valeur numérique, le résultat sera [`NaN`](/fr/docs/Web/JavaScript/Reference/Global_Objects/NaN).

## Exemples

### Avec des nombres

```js
const x = 1;
const y = -1;

console.log(+x);
// 1
console.log(+y);
// -1
```

### Avec des valeurs non-numériques

```js
+true  // 1
+false // 0
+null  // 0
+function(val){ return val } // NaN
+1n    // throws TypeError: Cannot convert BigInt value to number
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Opérateur d'addition](/fr/docs/Web/JavaScript/Reference/Operators/Addition)
- [Opérateur de soustraction](/fr/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [Opérateur de division](/fr/docs/Web/JavaScript/Reference/Operators/Division)
- [Opérateur de multiplication](/fr/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [Opérateur de reste](/fr/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Opérateur d'exponentiation](/fr/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Opérateur d'incrémentation](/fr/docs/Web/JavaScript/Reference/Operators/Increment)
- [Opérateur de décrémentation](/fr/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Opérateur de négation unaire](/fr/docs/Web/JavaScript/Reference/Operators/Unary_negation)
