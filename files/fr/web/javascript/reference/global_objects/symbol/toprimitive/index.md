---
title: Symbol.toPrimitive
slug: Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive
tags:
  - ECMAScript 2015
  - JavaScript
  - Propriété
  - Reference
  - Symbol
translation_of: Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive
original_slug: Web/JavaScript/Reference/Objets_globaux/Symbol/toPrimitive
---
{{JSRef}}

Le symbole « connu » **`Symbol.toPrimitive`** définit une fonction qui est appelée pour convertir un objet en une valeur primitive.

{{EmbedInteractiveExample("pages/js/symbol-toprimitive.html")}}

## Description

Lorsqu'on convertit un objet en une valeur primitive et que l'objet possède une propriété `Symbol.toPrimitive` dont la valeur est une fonction, la fonction est appelée avec une chaîne de caractère (`hint`) qui définit le type qu'on privilégie pour la valeur primitive. L'argument `hint` peut prendre l'une des valeurs suivantes : `"number"`, `"string"` ou `"default"`.

{{js_property_attributes(0,0,0)}}

## Exemples

Dans l'exemple qui suit, on voit comment la propriété `Symbol.toPrimitive` peut modifier la valeur primitive obtenue lors de la conversion d'un objet.

```js
// Premier cas avec un objet sans Symbol.toPrimitive.
let obj1 = {};
console.log(+obj1);     // NaN
console.log(`${obj1}`); // "[object Object]"
console.log(obj1 + ""); // "[object Object]"

// Second cas : l'objet a une propriété Symbol.toPrimitive
var obj2 = {
  [Symbol.toPrimitive](hint) {
    if (hint === "number") {
      return 10;
    }
    if (hint === "string") {
      return "coucou";
    }
    return true;
  }
};
console.log(+obj2);     // 10       -- hint vaut "number"
console.log(`${obj2}`); // "coucou" -- hint vaut "string"
console.log(obj2 + ""); // true     -- hint vaut "default"
```

## Spécifications

| Spécification                                                                                    | Etat                         | Commentaires         |
| ------------------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-symbol.toprimitive', 'Symbol.toPrimitive')}} | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-symbol.toprimitive', 'Symbol.toPrimitive')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Symbol.toPrimitive")}}

## Voir aussi

- {{jsxref("Date.@@toPrimitive", "Date.prototype[@@toPrimitive]")}}
- {{jsxref("Symbol.@@toPrimitive", "Symbol.prototype[@@toPrimitive]")}}
- {{jsxref("Object.prototype.toString()")}}
- {{jsxref("Object.prototype.valueOf()")}}
