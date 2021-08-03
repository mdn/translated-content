---
title: Map.prototype.keys()
slug: Web/JavaScript/Reference/Global_Objects/Map/keys
tags:
  - ECMAScript 2015
  - Iterator
  - JavaScript
  - Map
  - Méthode
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Map/keys
original_slug: Web/JavaScript/Reference/Global_Objects/Map/keys
---
{{JSRef}}

La méthode **`keys()`** renvoie un objet [`Iterator`](/fr/docs/Web/JavaScript/Guide/iterateurs_et_generateurs) qui contient les clés de chaque élément de l'objet `Map`, dans leur ordre d'insertion.

{{EmbedInteractiveExample("pages/js/map-prototype-keys.html")}}

## Syntaxe

    maMap.keys()

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

| Spécification                                                                                    | État                         | Commentaires         |
| ------------------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-map.prototype.keys', 'Map.prototype.keys')}} | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-map.prototype.keys', 'Map.prototype.keys')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Map.keys")}}

## Voir aussi

- {{jsxref("Map.prototype.entries()")}}
- {{jsxref("Map.prototype.values()")}}
