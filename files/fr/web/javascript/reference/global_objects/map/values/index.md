---
title: Map.prototype.values()
slug: Web/JavaScript/Reference/Global_Objects/Map/values
---

{{JSRef}}

La méthode **`values()`** renvoie un objet [`Iterator`](/fr/docs/Web/JavaScript/Guide/iterateurs_et_generateurs) qui contient les valeurs de chacun des éléments contenu dans l'objet `Map` donné, dans leur ordre d'insertion.

{{EmbedInteractiveExample("pages/js/map-prototype-values.html")}}

## Syntaxe

```js
maMap.values();
```

### Valeur de retour

Un nouvel objet `Iterator` {{jsxref("Map")}}.

## Exemple

### Utiliser `values()`

```js
var maMap = new Map();
maMap.set("0", "toto");
maMap.set(1, "truc");
maMap.set({}, "licorne");

var mapIter = maMap.values();

console.log(mapIter.next().value); // "toto"
console.log(mapIter.next().value); // "truc"
console.log(mapIter.next().value); // "licorne"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Map.prototype.entries()")}}
- {{jsxref("Map.prototype.keys()")}}
