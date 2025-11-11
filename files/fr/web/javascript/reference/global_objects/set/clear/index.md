---
title: Set.prototype.clear()
slug: Web/JavaScript/Reference/Global_Objects/Set/clear
---

{{JSRef}}

La méthode **`clear()`** permet de retirer tous les éléments d'un ensemble `Set`.

{{InteractiveExample("JavaScript Demo: Set.prototype.clear()")}}

```js interactive-example
const set1 = new Set();
set1.add(1);
set1.add("foo");

console.log(set1.size);
// Expected output: 2

set1.clear();

console.log(set1.size);
// Expected output: 0
```

## Syntaxe

```js
monSet.clear();
```

### Valeur de retour

{{jsxref("undefined")}}.

## Exemples

```js
var monSet = new Set();
monSet.add(1);
monSet.add("toto");

monSet.size; // 2
monSet.has("toto"); // true

monSet.clear();

monSet.size; // 0
monSet.has("truc"); // false
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

### Voir aussi

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.delete()")}}
