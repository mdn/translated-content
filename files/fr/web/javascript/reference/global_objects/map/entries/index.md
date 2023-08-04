---
title: Map.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/Map/entries
---

{{JSRef}}

La méthode **`entries()`** renvoie un objet [`Iterator`](/fr/docs/Web/JavaScript/Guide/iterateurs_et_generateurs#Itérateurs) qui contient les paires `[clé, valeur]` pour chaque élément de l'objet `Map`, dans leur ordre d'insertion.

{{EmbedInteractiveExample("pages/js/map-prototype-entries.html")}}

## Syntaxe

```js
maMap.entries();
```

### Valeur de retour

Un nouvel objet `Iterator` {{jsxref("Map")}}.

## Exemple

### Utiliser `entries()`

```js
var maMap = new Map();
maMap.set("0", "toto");
maMap.set(1, "truc");
maMap.set({}, "bidule");

var mapIter = maMap.entries();

console.log(mapIter.next().value); // ["0", "toto"]
console.log(mapIter.next().value); // [1, "truc"]
console.log(mapIter.next().value); // [Object, "bidule"]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Map.prototype.keys()")}}
- {{jsxref("Map.prototype.values()")}}
