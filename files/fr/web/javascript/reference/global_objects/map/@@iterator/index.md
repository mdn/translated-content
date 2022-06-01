---
title: Map.prototype[@@iterator]()
slug: Web/JavaScript/Reference/Global_Objects/Map/@@iterator
tags:
  - ECMAScript 2015
  - Iterator
  - JavaScript
  - Map
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Map/@@iterator
original_slug: Web/JavaScript/Reference/Global_Objects/Map/@@iterator
---
{{JSRef}}

La valeur initiale de la propriété **`@@iterator`** est la même fonction que la valeur initiale de la propriété {{jsxref("Map.prototype.entries()", "entries")}}.

{{EmbedInteractiveExample("pages/js/map-prototype-@@iterator.html")}}

## Syntaxe

```js
maMap[Symbol.iterator]
```

### Valeur de retour

La fonction d'itération (le symbole `@@iterator`) de l'objet, par défaut, c'est la fonction {{jsxref("Map.prototype.entries()","entries()")}}.

## Exemples

### Utiliser `[@@iterator]()`

```js
var maMap = new Map();
maMap.set("0", "toto");
maMap.set(1, "truc");
maMap.set({}, "bidule");

var mapIter = myMap[Symbol.iterator]();

console.log(mapIter.next().value); // ["0", "toto"]
console.log(mapIter.next().value); // [1, "truc"]
console.log(mapIter.next().value); // [Object, "bidule"]
```

### Utiliser `[@@iterator]()` avec `for..of`

```js
var maMap = new Map();
maMap.set("0", "toto");
maMap.set(1, "truc");
maMap.set({}, "bidule");

for (var v of maMap) {
  console.log(v);
}
```

## Spécifications

| Spécification                                                                                                        | État                         | Commentaires        |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------- |
| {{SpecName('ES2015', '#sec-map.prototype-@@iterator', 'Map.prototype[@@iterator]()')}} | {{Spec2('ES2015')}}     | Définition initiale |
| {{SpecName('ESDraft', '#sec-map.prototype-@@iterator', 'Map.prototype[@@iterator]()')}} | {{Spec2('ESDraft')}} |                     |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Map.@@iterator")}}

## Voir aussi

- {{jsxref("Map.prototype.entries()")}}
- {{jsxref("Map.prototype.keys()")}}
- {{jsxref("Map.prototype.values()")}}
