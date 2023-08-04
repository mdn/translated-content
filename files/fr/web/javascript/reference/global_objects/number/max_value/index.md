---
title: Number.MAX_VALUE
slug: Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE
---

{{JSRef}}

La propriété **`Number.MAX_VALUE`** représente la valeur maximale qui peut être représentée par un nombre en JavaScript.

{{EmbedInteractiveExample("pages/js/number-maxvalue.html")}}{{js_property_attributes(0,0,0)}}

## Description

La propriété statique `MAX_VALUE` vaut environ `1.79E+308` (soit 2^1024). Les valeurs supérieures à `MAX_VALUE` sont représentées par {{jsxref("Infinity")}} (pour l'infini).

`MAX_VALUE` est une propriété statique de {{jsxref("Number")}}, il faut donc l'utiliser avec `Number.MAX_VALUE`, plutôt qu'en faisant appel à la propriété d'un objet `Number` qui aurait été instancié (si on appelle cette propriété sur l'objet `Number` créé, on obtiendra {{jsxref("undefined")}}).

## Exemples

Le code suivant teste si le produit de deux nombres est inférieur ou égal à `MAX_VALUE`, selon le résultat de ce test, soit on utilisera `func1`, soit on utilisera `func2`.

```js
if (num1 * num2 <= Number.MAX_VALUE) {
  func1();
} else {
  func2();
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Number.MIN_VALUE")}}
- {{jsxref("Number")}}
