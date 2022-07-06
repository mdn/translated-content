---
title: Symbol.hasInstance
slug: Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance
tags:
  - ECMAScript 2015
  - JavaScript
  - Propriété
  - Reference
  - Symbol
translation_of: Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance
original_slug: Web/JavaScript/Reference/Objets_globaux/Symbol/hasInstance
---
{{JSRef}}

Le symbole « connu » **`Symbol.hasInstance`** est utilisé afin de déterminer si un objet constructeur reconnaît un objet comme une de ses instances. On peut donc adapter/personnaliser le comportement de l'opérateur {{jsxref("Opérateurs/instanceof", "instanceof")}} grâce à ce symbole.

{{EmbedInteractiveExample("pages/js/symbol-hasinstance.html")}}{{js_property_attributes(0,0,0)}}

## Exemples

On peut implémenter un comportement différent pour `instanceof` de cette façon :

```js
class MonArray {
  static [Symbol.hasInstance](instance) {
    return Array.isArray(instance);
  }
}
console.log([] instanceof MonArray); // true
```

## Spécifications

| Spécification                                                                                    | État                         | Commentaires         |
| ------------------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-symbol.hasinstance', 'Symbol.hasInstance')}} | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-symbol.hasinstance', 'Symbol.hasInstance')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Symbol.hasInstance")}}

## Voir aussi

- {{jsxref("Opérateurs/instanceof", "instanceof")}}
