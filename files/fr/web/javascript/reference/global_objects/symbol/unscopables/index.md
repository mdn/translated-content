---
title: Symbol.unscopables
slug: Web/JavaScript/Reference/Global_Objects/Symbol/unscopables
tags:
  - ECMAScript 2015
  - JavaScript
  - Propriété
  - Reference
  - Symbol
translation_of: Web/JavaScript/Reference/Global_Objects/Symbol/unscopables
original_slug: Web/JavaScript/Reference/Objets_globaux/Symbol/unscopables
---
{{JSRef}}

Le symbole connu **`Symbol.unscopables`** est utilisé afin de définir les noms des propriétés propres et héritées qui sont exclues de l'objet lors de l'utilisation de [`with`](/fr/docs/Web/JavaScript/Reference/Instructions/with) sur l'objet en question.

{{EmbedInteractiveExample("pages/js/symbol-unscopables.html")}}

## Description

Le symbole `@@unscopables` (`Symbol.unscopables`) peut être défini sur n'importe quel objet afin de ne pas exposer certaines propriétés lors des liaisons lexicales avec [`with`](/fr/docs/Web/JavaScript/Reference/Instructions/with). Note : en mode strict, l'instruction `with` n'est pas disponible et ce symbole est donc probablement moins nécessaire.

En définissant une propriété comme `true` dans un objet `unscopables`, cela exclura la propriété de la portée lexicale. En définissant une propriété comme `false`, celle-ci pourra faire partie de la portée lexicale et être manipulée dans un bloc `with`.

{{js_property_attributes(0,0,0)}}

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

On peut également manipuler `unscopables` sur ses propres objets :

```js
var obj = {
  toto: 1,
  truc: 2
};

obj[Symbol.unscopables] = {
  toto: false,
  truc: true
};

with(obj) {
  console.log(toto); // 1
  console.log(truc); // ReferenceError: truc is not defined
}
```

## Spécifications

| Spécification                                                                                    | État                         | Commentaires         |
| ------------------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-symbol.unscopables', 'Symbol.unscopables')}} | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-symbol.unscopables', 'Symbol.unscopables')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Symbol.unscopables")}}

## Voir aussi

- {{jsxref("Array.@@unscopables", "Array.prototype[@@unscopables]")}}
- [L'instruction `with`](/fr/docs/Web/JavaScript/Reference/Instructions/with) (qui n'est pas disponible [en mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode))
