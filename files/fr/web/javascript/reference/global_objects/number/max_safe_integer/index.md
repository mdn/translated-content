---
title: Number.MAX_SAFE_INTEGER
slug: Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
tags:
  - ECMAScript 2015
  - JavaScript
  - Number
  - Propriété
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
original_slug: Web/JavaScript/Reference/Objets_globaux/Number/MAX_SAFE_INTEGER
---
{{JSRef}}

La constante **`Number.MAX_SAFE_INTEGER`** représente la valeur (sûre) maximale d’un nombre entier en JavaScript (2^53 -1).

> **Note :** Pour représenter des entiers supérieurs à cette valeur, on pourra utiliser le type {{jsxref("BigInt")}}.

{{EmbedInteractiveExample("pages/js/number-maxsafeinteger.html")}}

{{js_property_attributes(0,0,0)}}

## Description

La constante `MAX_SAFE_INTEGER` a une valeur de `9007199254740991`. Cette valeur s'explique par le fait que JavaScript utilise [les nombres au format de virgule flottante à double précision](http://en.wikipedia.org/wiki/Double_precision_floating-point_format) comme spécifié dans [IEEE 754](http://fr.wikipedia.org/wiki/IEEE_754) et ne peut représenter avec certitude qu’un nombre entre `-(2^53-1)` et `2^53 -1`.

Dans ce contexte, « sûr » fait référence à la capacité à représenter exactement les entiers et à les comparer entre eux. Par exemple, `Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2` vaudra `true` ce qui est mathématiquement incorrect. Pour plus d'informations, voir également {{jsxref("Number.isSafeInteger()")}}.

`MAX_SAFE_INTEGER` est une propriété statique de {{jsxref("Number")}}, elle doit toujours être utilisée comme `Number.MAX_SAFE_INTEGER` et non pas comme la propriété d'un objet `Number` qui aurait été instancié.

## Exemples

```js
Number.MAX_SAFE_INTEGER // 9007199254740991
Math.pow(2, 53) -1      // 9007199254740991
```

## Spécifications

| Spécification                                                                                                | État                         | Commentaires        |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ------------------- |
| {{SpecName('ES2015', '#sec-number.max_safe_integer', 'Number.MAX_SAFE_INTEGER')}} | {{Spec2('ES2015')}}     | Définition initiale |
| {{SpecName('ESDraft', '#sec-number.max_safe_integer', 'Number.MAX_SAFE_INTEGER')}} | {{Spec2('ESDraft')}} |                     |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Number.MAX_SAFE_INTEGER")}}

## Voir aussi

- {{jsxref("Number.MIN_SAFE_INTEGER")}}
- {{jsxref("Number.isSafeInteger()")}}
- {{jsxref("BigInt")}}
