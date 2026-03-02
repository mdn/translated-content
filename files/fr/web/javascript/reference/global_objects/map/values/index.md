---
title: Map.prototype.values()
short-title: values()
slug: Web/JavaScript/Reference/Global_Objects/Map/values
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode **`values()`** des instances de {{JSxRef("Map")}} retourne un nouvel _[objet itérateur de map](/fr/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_ qui contient les valeurs de chaque élément de cette map dans l'ordre d'insertion.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Map.prototype.values()")}}

```js interactive-example
const map = new Map();

map.set("0", "toto");
map.set(1, "tata");

const iterator = map.values();

console.log(iterator.next().value);
// Sortie attendue : "toto"

console.log(iterator.next().value);
// Sortie attendue : "tata"
```

## Syntaxe

```js-nolint
values()
```

### Paramètres

Aucun.

### Valeur de retour

Un nouvel [objet d'itérateur itérable](/fr/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Exemple

### Utiliser la méthode `values()`

```js
const maMap = new Map();
maMap.set("0", "toto");
maMap.set(1, "truc");
maMap.set({}, "licorne");

const mapIter = maMap.values();

console.log(mapIter.next().value); // "toto"
console.log(mapIter.next().value); // "truc"
console.log(mapIter.next().value); // "licorne"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Map.prototype.entries()")}}
- L'objet {{JSxRef("Map.prototype.keys()")}}
