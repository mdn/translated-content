---
title: Symbol.match
slug: Web/JavaScript/Reference/Global_Objects/Symbol/match
tags:
  - ECMAScript 2015
  - JavaScript
  - Propriété
  - Reference
  - Symbol
translation_of: Web/JavaScript/Reference/Global_Objects/Symbol/match
original_slug: Web/JavaScript/Reference/Objets_globaux/Symbol/match
---
{{JSRef}}

Le symbole **`Symbol.match`** définit la correspondance d'une expression rationnelle par rapport à une chaîne de caractères. Cette fonction est appelée par la méthode {{jsxref("String.prototype.match()")}}.

{{EmbedInteractiveExample("pages/js/symbol-match.html")}}

## Description

Cette fonction est également utilisée pour identifier les objets qui jouent un rôle avec les expressions rationnelles. Ainsi, les méthodes {{jsxref("String.prototype.startsWith()")}}, {{jsxref("String.prototype.endsWith()")}} et {{jsxref("String.prototype.includes()")}} vérifient si leur premier argument est une expression rationnelle et lèvent une exception {{jsxref("TypeError")}} si c'est le cas. Si le symbole `match` est modifié et vaut une valeur `false` (ou équivalente), cela indique que l'objet ne doit pas être utilisé comme une expression rationnelle.

{{js_property_attributes(0,0,0)}}

## Exemples

Le code suivant renverra une exception {{jsxref("TypeError")}} :

```js
"/truc/".startsWith(/truc/);

// lève une TypeError car /truc/
// est une expression rationnelle
// et que Symbol.match n'a pas été modifié.
```

Cependant, si `Symbol.match` vaut `false`, cette vérification `isRegExp` indiquera que l'objet à prendre en compte n'est pas une expression rationnelle. Les méthodes `startsWith` et `endsWith` ne déclencheront donc pas d'exception `TypeError`.

```js
var re = /toto/;
re[Symbol.match] = false;
"/toto/".startsWith(re); // true
"/truc/".endsWith(re);   // false
```

## Spécifications

| Spécification                                                                    | État                         | Commentaires         |
| -------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-symbol.match', 'Symbol.match')}} | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-symbol.match', 'Symbol.match')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Symbol.match")}}

## Voir aussi

- {{jsxref("Symbol.replace")}}
- {{jsxref("Symbol.search")}}
- {{jsxref("Symbol.split")}}
- {{jsxref("RegExp.@@match", "RegExp.prototype[@@match]()")}}
