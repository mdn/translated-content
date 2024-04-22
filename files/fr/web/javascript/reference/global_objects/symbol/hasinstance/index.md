---
title: Symbol.hasInstance
slug: Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance
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

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Opérateurs/instanceof", "instanceof")}}
