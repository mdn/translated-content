---
title: Inégalité stricte (!==)
slug: Web/JavaScript/Reference/Operators/Strict_inequality
tags:
  - JavaScript
  - Language feature
  - Operator
  - Reference
browser-compat: javascript.operators.strict_inequality
---
{{jsSidebar("Operators")}}

L'opérateur d'inégalité stricte (`!==`) vérifie si ses deux opérandes ne sont pas égaux et renvoie un booléen correspondant au résultat. À la différence de [l'opérateur d'inégalité](/fr/docs/Web/JavaScript/Reference/Operators/Inequality), l'opérateur d'inégalité stricte considère toujours des opérandes de types différents comme étant différents.

{{EmbedInteractiveExample("pages/js/expressions-strict-inequality.html")}}

## Syntaxe

```js
x !== y
```

## Description

L'opérateur d'inégalité stricte vérifie que ses deux opérandes ne sont pas égaux. Il s'agit de la négation de [l'opérateur d'égalité stricte](/fr/docs/Web/JavaScript/Reference/Operators/Strict_equality). Les deux expressions suivantes fourniront toujours le même résultat :

```js
x !== y
!(x === y)
```

Pour plus de détails sur l'algorithme de comparaison utilisé, voir [la page sur l'opérateur d'égalité stricte](/fr/docs/Web/JavaScript/Reference/Operators/Strict_equality).

À l'instar de l'opérateur d'égalité stricte, l'opérateur d'inégalité stricte considèrera toujours des opérandes de types différents comme étant différents :

```js
3 !== "3"; // true
```

## Exemples

### Comparaison d'opérandes de même type

```js
console.log("hello" !== "hello");   // false
console.log("hello" !== "hola");    // true

console.log(3 !== 3);               // false
console.log(3 !== 4);               // true

console.log(true !== true);         // false
console.log(true !== false);        // true

console.log(null !== null);         // false
```

### Comparaison d'opérandes de types différents

```js
console.log("3" !== 3);           // true

console.log(true !== 1);          // true

console.log(null !== undefined);  // true
```

### Comparaison d'objets

```js
const objet1 = {
  name: "coucou"
}

const objet2 = {
  name: "coucou"
}

console.log(objet1 !== objet2);  // true
console.log(objet1 !== objet1);  // false
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'opérateur d'inégalité](/fr/docs/Web/JavaScript/Reference/Operators/Inequality)
- [L'opérateur d'égalité](/fr/docs/Web/JavaScript/Reference/Operators/Equality)
- [L'opérateur d'égalité stricte](/fr/docs/Web/JavaScript/Reference/Operators/Strict_equality)
