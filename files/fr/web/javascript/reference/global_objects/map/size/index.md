---
title: Map.prototype.size
slug: Web/JavaScript/Reference/Global_Objects/Map/size
tags:
  - ECMAScript 2015
  - JavaScript
  - Map
  - Propriété
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Map/size
original_slug: Web/JavaScript/Reference/Global_Objects/Map/size
---
{{JSRef}}

L'accesseur **`size`** est une propriété renvoyant le nombre d'éléments d'un objet {{jsxref("Map")}}.

{{EmbedInteractiveExample("pages/js/map-prototype-size.html")}}

## Description

La valeur de `size` est un entier représentant le nombre d'entrées d'un objet `Map`. Le mutateur correspond à cette propriété est {{jsxref("undefined")}}, on ne peut pas donc pas modifier cette propriété.

## Exemple

### Utiliser `size`

```js
var maMap = new Map();
maMap.set("a", "alpha");
maMap.set("b", "beta");
maMap.set("g", "gamma");

maMap.size // 3
```

## Spécifications

| Spécification                                                                                        | État                         | Commentaires         |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-get-map.prototype.size', 'Map.prototype.size')}} | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-get-map.prototype.size', 'Map.prototype.size')}} | {{Spec2('ESDraft')}} |                      |

## Compatibliité des navigateurs

{{Compat("javascript.builtins.Map.size")}}

## Voir aussi

- {{jsxref("Map")}}
