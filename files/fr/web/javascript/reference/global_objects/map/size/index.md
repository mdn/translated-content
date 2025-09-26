---
title: Map.prototype.size
slug: Web/JavaScript/Reference/Global_Objects/Map/size
---

{{JSRef}}

L'accesseur **`size`** est une propriété renvoyant le nombre d'éléments d'un objet {{jsxref("Map")}}.

{{InteractiveExample("JavaScript Demo: Map.prototype.size")}}

```js interactive-example
const map1 = new Map();

map1.set("a", "alpha");
map1.set("b", "beta");
map1.set("g", "gamma");

console.log(map1.size);
// Expected output: 3
```

## Description

La valeur de `size` est un entier représentant le nombre d'entrées d'un objet `Map`. Le mutateur correspond à cette propriété est {{jsxref("undefined")}}, on ne peut pas donc pas modifier cette propriété.

## Exemple

### Utiliser `size`

```js
var maMap = new Map();
maMap.set("a", "alpha");
maMap.set("b", "beta");
maMap.set("g", "gamma");

maMap.size; // 3
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Map")}}
