---
title: "Map : propriété size"
short-title: size
slug: Web/JavaScript/Reference/Global_Objects/Map/size
l10n:
  sourceCommit: c9f3d85f24d7839c9fe36a68d8042d088d906147
---

La propriété d'accesseur **`size`** des instances de {{JSxRef("Map")}} retourne le nombre d'éléments dans ce tableau associatif.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Map.prototype.size")}}

```js interactive-example
const map = new Map();

map.set("a", "alpha");
map.set("b", "beta");
map.set("g", "gamma");

console.log(map.size);
// Résultat attendu : 3
```

## Description

La valeur de `size` est un entier représentant le nombre d'entrées de l'objet `Map`. La fonction d'accesseur pour définir `size` est `undefined`&nbsp;; vous ne pouvez donc pas modifier cette propriété.

## Exemples

### Utiliser la propriété `size`

```js
const maMap = new Map();
maMap.set("a", "alpha");
maMap.set("b", "beta");
maMap.set("g", "gamma");

console.log(maMap.size); // 3
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet natif {{JSxRef("Map")}}
