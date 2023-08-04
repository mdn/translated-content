---
title: Number.MIN_SAFE_INTEGER
slug: Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER
---

{{JSRef}}

La constante **`Number.MIN_SAFE_INTEGER`** représente le plus petit entier représentable correctement en JavaScript (-(2^53 -1)).

> **Note :** Pour représenter des entiers inférieurs à cette valeur, on pourra utiliser le type {{jsxref("BigInt")}}.

{{EmbedInteractiveExample("pages/js/number-min-safe-integer.html")}}{{js_property_attributes(0,0,0)}}

## Description

La constante `MIN_SAFE_INTEGER` vaut `-9007199254740991`. Cette valeur provient du fait qu'en JavaScript, les nombres sont représentés [en format à double précision](https://en.wikipedia.org/wiki/Double_precision_floating-point_format) selon la norme [IEEE 754](http://fr.wikipedia.org/wiki/IEEE_754) et on ne peut représenter correctement que les nombres compris entre `-(2^53-1)` et `2^53 -1`. Voir {{jsxref("Number.isSafeInteger()")}} pour plus d'informations.

`MIN_SAFE_INTEGER` étant une méthode statique de {{jsxref("Number")}}, il faut utiliser `Number.MIN_SAFE_INTEGER()` et non pas la méthode d'un objet `Number` qui aurait été instancié.

## Exemples

```js
Number.MIN_SAFE_INTEGER - // -9007199254740991
  Math.pow(2, 53) -
  1; // -9007199254740991
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Number.MAX_SAFE_INTEGER")}}
- {{jsxref("Number.isSafeInteger()")}}
- {{jsxref("BigInt")}}
