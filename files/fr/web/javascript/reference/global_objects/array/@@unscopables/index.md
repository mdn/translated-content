---
title: Array.prototype[@@unscopables]
slug: Web/JavaScript/Reference/Global_Objects/Array/@@unscopables
tags:
  - Array
  - ECMAScript 2015
  - JavaScript
  - Propriété
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Array/@@unscopables
original_slug: Web/JavaScript/Reference/Objets_globaux/Array/@@unscopables
---
{{JSRef}}

La propriété symbol **`@@unscopable`** contient les noms des propriétés qui ne faisait pas partie du standard ECMAScript avant ES2015 (ES6). Ces propriétés sont exclues lors de liaisons effectuée via l'instruction [`with`](/fr/docs/Web/JavaScript/Reference/Instructions/with).

## Syntaxe

```js
arr[Symbol.unscopables]
```

## Description

Les propriétés natives d'un objet `Array` qui sont exclues lorsqu'on utilise `with` sont `copyWithin`, `entries`, `fill`, `find`, `findIndex`, `includes`, `keys` et `values`.

Voir la page sur le symbole {{jsxref("Symbol.unscopables")}} pour manipuler `unscopables` sur des objets personnalisés.

{{js_property_attributes(0,0,1)}}

## Exemples

Le code qui suit fonctionne bien pour ES5 et les versions antérieures. En revanche, pour ECMAScript 2015 (ES6) et les versions ultérieures où la méthode  {{jsxref("Array.prototype.keys()")}} existe, lorsqu'on utilise un environnement créé avec `with`, `"keys"` serait désormais la méthode et non la variable. C'est là que le symbole natif `@@unscopables` `Array.prototype[@@unscopables]` intervient et empêche d'explorer ces méthodes avec `with`.

```js
var keys = [];

with(Array.prototype) {
  keys.push("something");
}

Object.keys(Array.prototype[Symbol.unscopables]);
// ["copyWithin", "entries", "fill", "find", "findIndex",
//  "includes", "keys", "values"]
```

## Spécifications

| Spécification                                                                                                                    | État                         | Commentaires         |
| -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-array.prototype-@@unscopables', 'Array.prototype[@@unscopables]')}}     | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-array.prototype-@@unscopables', 'Array.prototype[@@unscopables]')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Array.@@unscopables")}}

## Voir aussi

- {{jsxref("Symbol.unscopables")}}
