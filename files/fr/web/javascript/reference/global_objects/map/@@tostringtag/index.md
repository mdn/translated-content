---
title: Map.prototype[@@toStringTag]()
slug: Web/JavaScript/Reference/Global_Objects/Map/@@toStringTag
tags:
  - ECMAScript 2015
  - JavaScript
  - Map
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Map/@@toStringTag
original_slug: Web/JavaScript/Reference/Global_Objects/Map/@@toStringTag
---
{{JSRef}}

La propriété **`Map[@@toStringTag]`** vaut "Map" initialement.

{{EmbedInteractiveExample("pages/js/map-prototype-@@tostringtag.html")}}{{js_property_attributes(0,0,1)}}

## Syntaxe

```js
Map[Symbol.toStringTag]
```

## Exemple

```js
Object.prototype.toString.call(new Map()) // "[object Map]"
```

## Spécifications

| Spécification                                                                                                            | État                         | Commentaires         |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-map.prototype-@@tostringtag', 'Map.prototype[@@toStringTag]')}} | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-map.prototype-@@tostringtag', 'Map.prototype[@@toStringTag]')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Map.@@toStringTag")}}
