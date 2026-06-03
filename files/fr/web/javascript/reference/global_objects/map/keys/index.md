---
title: "Map : méthode keys()"
short-title: keys()
slug: Web/JavaScript/Reference/Global_Objects/Map/keys
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode **`keys()`** des instances de {{JSxRef("Map")}} retourne un nouvel objet _[itérateur de tableau associatif](/fr/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_ qui contient les clés de chaque élément de cette `Map` dans l'ordre d'insertion.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Map.prototype.keys()")}}

```js interactive-example
const map = new Map();

map.set("0", "toto");
map.set(1, "truc");

const iterator = map.keys();

console.log(iterator.next().value);
// Sortie attendue : "0"

console.log(iterator.next().value);
// Sortie attendue : 1
```

## Syntaxe

```js
maMap.keys();
```

### Paramètres

Aucun.

### Valeur de retour

Un nouvel [objet d'itérateur itérable](/fr/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Exemples

### Utiliser la méthode `keys()`

```js
const maMap = new Map();
maMap.set("0", "toto");
maMap.set(1, "truc");
maMap.set({}, "bidule");

const mapIter = maMap.keys();

console.log(mapIter.next().value); // "0"
console.log(mapIter.next().value); // 1
console.log(mapIter.next().value); // {}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("Map.prototype.entries()")}}
- La méthode {{JSxRef("Map.prototype.values()")}}
