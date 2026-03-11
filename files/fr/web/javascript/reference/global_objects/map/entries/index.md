---
title: "Map : méthode entries()"
short-title: entries()
slug: Web/JavaScript/Reference/Global_Objects/Map/entries
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode **`entries()`** des instances de {{JSxRef("Map")}} retourne un nouvel objet _[d'itérateur de tableau associatif](/fr/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_ qui contient les paires `[key, value]` de chaque élément de cette `Map` dans l'ordre d'insertion.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Map.prototype.entries()")}}

```js interactive-example
const map = new Map();

map.set("0", "toto");
map.set(1, "truc");

const iterator = map.entries();

console.log(iterator.next().value);
// Sortie attendue : Array ["0", "toto"]

console.log(iterator.next().value);
// Sortie attendue : Array [1, "truc"]
```

## Syntaxe

```js-nolint
entries()
```

### Paramètres

Aucun.

### Valeur de retour

Un nouvel [objet d'itérateur itérable](/fr/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Exemple

### Utiliser la méthode `entries()`

```js
const maMap = new Map();
maMap.set("0", "toto");
maMap.set(1, "truc");
maMap.set({}, "bidule");

const mapIter = maMap.entries();

console.log(mapIter.next().value); // ["0", "toto"]
console.log(mapIter.next().value); // [1, "truc"]
console.log(mapIter.next().value); // [Object, "bidule"]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("Map.prototype.keys()")}}
- La méthode {{JSxRef("Map.prototype.values()")}}
