---
title: "Map : propriété size"
short-title: size
slug: Web/JavaScript/Reference/Global_Objects/Map/size
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La propriété d'accesseur **`size`** des instances de {{JSxRef("Map")}} retourne le nombre d'éléments dans cette map.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Map.prototype.size")}}

```js interactive-example
const map = new Map();

map.set("a", "alpha");
map.set("b", "beta");
map.set("g", "gamma");

console.log(map.size);
// Sortie attendue : 3
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

- L'objet {{JSxRef("Map")}}
