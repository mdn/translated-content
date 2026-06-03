---
title: "Map : méthode clear()"
short-title: clear()
slug: Web/JavaScript/Reference/Global_Objects/Map/clear
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode **`clear()`** des instances de {{JSxRef("Map")}} supprime tous les éléments de ce tableau associatif.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Map.prototype.clear()")}}

```js interactive-example
const map = new Map();

map.set("bar", "baz");
map.set(1, "foo");

console.log(map.size);
// Sortie attendue : 2

map.clear();

console.log(map.size);
// Sortie attendue : 0
```

## Syntaxe

```js-nolint
clear()
```

### Paramètres

Aucun.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemple

### Utiliser la méthode `clear()`

```js
const maMap = new Map();
maMap.set("truc", "bidule");
maMap.set(1, "toto");

console.log(maMap.size); // 2
console.log(maMap.has("truc")); // true

maMap.clear();

console.log(maMap.size); // 0
console.log(maMap.has("truc")); // false
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Map")}}
