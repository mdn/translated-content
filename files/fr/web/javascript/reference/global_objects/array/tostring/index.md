---
title: Array.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Array/toString
---

{{JSRef}}

La méthode **`toString()`** renvoie une chaine de caractères représentant le tableau spécifié et ses éléments.

{{EmbedInteractiveExample("pages/js/array-tostring.html")}}

## Syntaxe

```js
arr.toString();
```

### Valeur de retour

Une chaîne de caractères qui représente les éléments du tableau.

## Description

L'objet {{jsxref("Array")}} redéfinit la méthode `toString` d'{{jsxref("Object")}}. Pour les objets `Array`, la méthode `toString()` concatène les éléments du tableau et renvoie une chaîne contenant chacun des éléments, séparés par des virgules.

JavaScript appelle la méthode `toString()` automatiquement lorsqu'un tableau doit être représenté par une valeur texte ou lorsqu'on fait référence à un tableau dans une concaténation de chaines de caractères.

### Sémantique d'ECMAScript 5

À partir de JavaScript 1.8.5 (Firefox 4), et en cohérence avec la 5e édition d'ECMAScript, la méthode `toString()` est générique et peut être utilisé avec n'importe quel objet. {{jsxref("Object.prototype.toString()")}} sera appelée, et la valeur résultante sera renvoyée.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Object.prototype.toSource()")}}
- {{jsxref("Array.prototype.join()")}}
