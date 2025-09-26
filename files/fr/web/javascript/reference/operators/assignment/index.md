---
title: Assignement (=)
slug: Web/JavaScript/Reference/Operators/Assignment
---

{{jsSidebar("Operators")}}

L'opérateur d'assignement simple (`=`) est utilisé pour définir la valeur d'une variable. Il est possible d'ajouter une valeur à plusieurs variables en chaînant les variables.

{{InteractiveExample("JavaScript Demo: Expressions - Assignment")}}

```js interactive-example
let x = 2;
const y = 3;

console.log(x);
// Expected output: 2

console.log((x = y + 1)); // 3 + 1
// Expected output: 4

console.log((x = x * y)); // 4 * 3
// Expected output: 12
```

## Syntaxe

```js
x = y;
```

## Exemples

### Assignement simple et variables en chaînes

```js
// On considère les variables suivantes :
var x = 5;
var y = 10;
var z = 25;

x = y;
// x est égale à 10

x = y = z;
// x, y et z sont égales à 25
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Assignment operators in the JS guide](/fr/docs/Web/JavaScript/Guide/Expressions_and_operators)
