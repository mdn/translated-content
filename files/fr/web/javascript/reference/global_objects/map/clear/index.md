---
title: Map.prototype.clear()
slug: Web/JavaScript/Reference/Global_Objects/Map/clear
tags:
  - ECMAScript 2015
  - JavaScript
  - Map
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Map/clear
original_slug: Web/JavaScript/Reference/Global_Objects/Map/clear
---
{{JSRef}}

La méthode **`clear()`** supprime tous les éléments d'un objet `Map`.

{{EmbedInteractiveExample("pages/js/map-prototype-clear.html")}}

## Syntaxe

```js
maMap.clear();
```

### Valeur de retour

{{jsxref("undefined")}}.

## Exemple

### Utiliser la méthode `clear()`

```js
var maMap = new Map();
maMap.set("truc", "bidule");
maMap.set(1, "toto");

maMap.size;        // 2
maMap.has("truc"); // true

maMap.clear();

maMap.size;        // 0
maMap.has("truc")  // false
```

## Spécifications

| Spécification                                                                                        | État                         | Commentaires         |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-map.prototype.clear', 'Map.prototype.clear')}}     | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-map.prototype.clear', 'Map.prototype.clear')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Map.clear")}}

## Voir aussi

- {{jsxref("Map")}}
