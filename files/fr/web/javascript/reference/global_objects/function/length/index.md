---
title: "Function : propriété length"
short-title: length
slug: Web/JavaScript/Reference/Global_Objects/Function/length
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La propriété de donnée **`length`** d'une instance de {{JSxRef("Function")}} indique le nombre de paramètres attendus par la fonction.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Function.length")}}

```js interactive-example
function func1() {}

function func2(a, b) {}

console.log(func1.length);
// Résultat attendu : 0

console.log(func2.length);
// Résultat attendu : 2
```

## Valeur

Un nombre.

{{js_property_attributes(0, 0, 1)}}

## Description

La propriété `length` d'un objet {{JSxRef("Function")}} indique combien d'arguments la fonction attend, c'est-à-dire le nombre de paramètres formels&nbsp;:

- Seuls les paramètres situés avant le premier ayant une [valeur par défaut](/fr/docs/Web/JavaScript/Reference/Functions/Default_parameters) sont comptés.
- Un [motif de décomposition](/fr/docs/Web/JavaScript/Reference/Operators/Destructuring) compte pour un seul paramètre.
- Le [paramètre du reste](/fr/docs/Web/JavaScript/Reference/Functions/rest_parameters) est exclu.

En revanche, {{JSxRef("Functions/arguments/length", "arguments.length")}} est local à une fonction et indique le nombre d'arguments réellement passés à la fonction.

Le constructeur {{JSxRef("Function")}} est lui-même un objet `Function`. Sa propriété de donnée `length` a pour valeur `1`.

Pour des raisons historiques, `Function.prototype` est lui-même appelable. La propriété `length` de `Function.prototype` a pour valeur `0`.

## Exemples

### Utilisation de la propriété `length` des fonctions

```js
console.log(Function.length); // 1

console.log((() => {}).length); // 0
console.log(((a) => {}).length); // 1
console.log(((a, b) => {}).length); // 2 etc.

console.log(((...args) => {}).length);
// 0, le paramètre du reste n'est pas compté

console.log(((a, b = 1, c) => {}).length);
// 1, seuls les paramètres avant le premier avec
// une valeur par défaut sont comptés

console.log((({ a, b }, [c, d]) => {}).length);
// 2, chaque motif de déstructuration compte pour
// un seul paramètre
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Function")}}
