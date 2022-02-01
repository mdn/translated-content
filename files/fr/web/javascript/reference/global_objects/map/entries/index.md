---
title: Map.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/Map/entries
tags:
  - ECMAScript 2015
  - Iterator
  - JavaScript
  - Map
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Map/entries
original_slug: Web/JavaScript/Reference/Global_Objects/Map/entries
---
{{JSRef}}

La méthode **`entries()`** renvoie un objet [`Iterator`](/fr/docs/Web/JavaScript/Guide/iterateurs_et_generateurs#Itérateurs) qui contient les paires `[clé, valeur]` pour chaque élément de l'objet `Map`, dans leur ordre d'insertion.

{{EmbedInteractiveExample("pages/js/map-prototype-entries.html")}}

## Syntaxe

    maMap.entries()

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

| Spécification                                                                                            | État                         | Commentaires        |
| -------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------- |
| {{SpecName('ES2015', '#sec-map.prototype.entries', 'Map.prototype.entries')}} | {{Spec2('ES2015')}}     | Défintion initiale. |
| {{SpecName('ESDraft', '#sec-map.prototype.entries', 'Map.prototype.entries')}} | {{Spec2('ESDraft')}} |                     |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Map.entries")}}

## Voir aussi

- {{jsxref("Map.prototype.keys()")}}
- {{jsxref("Map.prototype.values()")}}
