---
title: Number.MAX_VALUE
slug: Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE
tags:
  - JavaScript
  - Number
  - Propriété
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE
original_slug: Web/JavaScript/Reference/Objets_globaux/Number/MAX_VALUE
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

| Spécification                                                                                | État                         | Commentaires                                          |
| -------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                     | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.1. |
| {{SpecName('ES5.1', '#sec-15.7.3.2', 'Number.MAX_VALUE')}}                 | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-number.max_value', 'Number.MAX_VALUE')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-number.max_value', 'Number.MAX_VALUE')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Number.MAX_VALUE")}}

## Voir aussi

- {{jsxref("Number.MIN_VALUE")}}
- {{jsxref("Number")}}
