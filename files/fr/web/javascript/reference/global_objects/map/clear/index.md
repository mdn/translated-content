---
title: Map.prototype.clear()
slug: Web/JavaScript/Reference/Global_Objects/Map/clear
---

{{JSRef}}

La méthode **`clear()`** supprime tous les éléments d'un objet `Map`.

{{InteractiveExample("JavaScript Demo: Map.prototype.clear()")}}

```js interactive-example
const map1 = new Map();

map1.set("bar", "baz");
map1.set(1, "foo");

console.log(map1.size);
// Expected output: 2

map1.clear();

console.log(map1.size);
// Expected output: 0
```

## Syntaxe

```js
maMap.clear();
```

### Valeur de retour

{{jsxref("undefined")}}.

## Exemple

### Utiliser la méthode `clear()`

```js
var maMap = new Map();
maMap.set("truc", "bidule");
maMap.set(1, "toto");

maMap.size; // 2
maMap.has("truc"); // true

maMap.clear();

maMap.size; // 0
maMap.has("truc"); // false
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Map")}}
