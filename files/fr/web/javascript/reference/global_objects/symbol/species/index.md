---
title: Symbol.species
slug: Web/JavaScript/Reference/Global_Objects/Symbol/species
---

{{JSRef}}

Le symbole **`Symbol.species`** correspond à une fonction utilisée comme constructeur pour créer des objets dérivés.

{{EmbedInteractiveExample("pages/js/symbol-species.html")}}

## Description

L'accesseur `species` permettent aux classes filles de surcharger le constructeur par défaut des objets.

{{js_property_attributes(0,0,0)}}

## Exemples

Dans certains cas, vous pouvez avoir besoin de renvoyer {{jsxref("Array")}} pour les objets de votre classe dérivée `MonArray`. Cela permet par exemple d'utiliser le constructeur par défaut lors d'un appel à {{jsxref("Array.map", "map()")}}. De cette façon, ces méthodes renverront un objet `Array` plutôt qu'un objet `MonArray`. Grâce au symbole `species`, vous pouvez donc faire :

```js
class MonArray extends Array {
  // On surcharge species avec le constructeur parent Array
  static get [Symbol.species]() {
    return Array;
  }
}
var a = new MonArray(1, 2, 3);
var mapped = a.map((x) => x * x);

console.log(mapped instanceof MonArray); // false
console.log(mapped instanceof Array); // true
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Map.@@species", "Map[@@species]")}}
- {{jsxref("Set.@@species", "Set[@@species]")}}
