---
title: Map.prototype.keys()
slug: Web/JavaScript/Reference/Global_Objects/Map/keys
---

{{JSRef}}

La méthode **`keys()`** renvoie un objet [`Iterator`](/fr/docs/Web/JavaScript/Guide/iterateurs_et_generateurs) qui contient les clés de chaque élément de l'objet `Map`, dans leur ordre d'insertion.

{{EmbedInteractiveExample("pages/js/map-prototype-keys.html")}}

## Syntaxe

```js
maMap.keys();
```

### Valeur de retour

Un nouvel objet `Iterator` {{jsxref("Map")}}.

## Exemples

### Utiliser `keys()`

```js
var maMap = new Map();
maMap.set("0", "toto");
maMap.set(1, "truc");
maMap.set({}, "bidule");

var mapIter = maMap.keys();

console.log(mapIter.next().value); // "0"
console.log(mapIter.next().value); // 1
console.log(mapIter.next().value); // Object
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Map.prototype.entries()")}}
- {{jsxref("Map.prototype.values()")}}
