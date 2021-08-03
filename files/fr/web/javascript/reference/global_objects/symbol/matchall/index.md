---
title: Symbol.matchAll
slug: Web/JavaScript/Reference/Global_Objects/Symbol/matchAll
tags:
  - JavaScript
  - Propriété
  - Reference
  - Symbol
translation_of: Web/JavaScript/Reference/Global_Objects/Symbol/matchAll
original_slug: Web/JavaScript/Reference/Objets_globaux/Symbol/matchAll
---
{{JSRef}}

Le symbole connu **`Symbol.matchAll`** renvoie un itérateur qui fournit l'ensemble des correspondances entre une expression rationnelle et une chaîne de caractères. Cette fonction est implicitement appelée par la méthode {{jsxref("String.prototype.matchAll()")}}.

{{EmbedInteractiveExample("pages/js/symbol-matchall.html")}}

## Description

Ce symbole est utilisé par {{jsxref("String.prototype.matchAll()")}} et plus particulièrement par {{jsxref("RegExp.@@matchAll", "RegExp.prototype[@@matchAll]()")}}. Les deux lignes qui suivent renverront le même résultat :

```js
'abc'.matchAll(/a/);

/a/[Symbol.matchAll]('abc');
```

Cette méthode existe afin de personnaliser le comportement des correspondances pour les sous-classes de {{jsxref("RegExp")}}.

{{js_property_attributes(0,0,0)}}

## Exemples

Voir les pages {{jsxref("String.prototype.matchAll()")}} et {{jsxref("RegExp.@@matchAll", "RegExp.prototype[@@matchAll]()")}} pour plus d'exemples.

## Spécifications

| Spécification                                                                            | État                         | Commentaires |
| ---------------------------------------------------------------------------------------- | ---------------------------- | ------------ |
| {{SpecName('ESDraft', '#sec-symbol.matchall', 'Symbol.matchAll')}} | {{Spec2('ESDraft')}} |              |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Symbol.matchAll")}}

## Voir aussi

- {{jsxref("String.prototype.matchAll()")}}
- {{jsxref("RegExp.@@matchAll", "RegExp.prototype[@@matchAll]()")}}
