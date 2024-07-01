---
title: Number.isSafeInteger()
slug: Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger
---

{{JSRef}}

La méthode **`Number.isSafeInteger()`** permet de déterminer si la valeur, passée en argument, est un entier représentable correctement en JavaScript (c'est-à-dire un nombre compris entre -(2^53-1) et 2^53-1).

{{EmbedInteractiveExample("pages/js/number-issafeinteger.html")}}

> **Note :** Pour représenter des entiers qui ne sont pas compris dans cet intervalle, on pourra utiliser le type {{jsxref("BigInt")}}.

## Syntaxe

```js
Number.isSafeInteger(valeurÀTester);
```

### Paramètres

- `valeurÀTester`
  - : La valeur dont on souhaite savoir si elle représente un entier représentable correctement en une valeur non signée sur 32 bits. (JavaScript utilise [les nombres au format de virgule flottante à double précision](https://en.wikipedia.org/wiki/Double_precision_floating-point_format) comme spécifié dans [IEEE 754](https://fr.wikipedia.org/wiki/IEEE_754) et ne peut représenter avec certitude un entier qu'entre `-(2^53-1)` et `2^53-1` (c'est-à-dire ± `9007199254740991`).

### Valeur de retour

Un booléen qui indique si la valeur fournie en argument est un entier représentable correctement en JavaScript.

## Description

Un entier correctement représentable en JavaScript :

- peut exactement être représenté avec un nombre à précision double selon IEEE-754
- la réprésentation IEEE-754 du nombre ne permet pas de l'arrondir à un autre entier pouvant être représenté avec le format décrit par IEEE-754.

Ainsi, par exemple, `2^53 - 1` peut être représenté correctement, aucun autre entier ne peut être arrondi en cette valeur selon IEEE-754. En revanche, `2^53` ne peut pas être représenté correctement car `2^53 + 1` sera arrondi en `2^53` selon les règles IEEE-754 (arrondi à l'entier le plus proche).

L'intervalle des entiers qui peuvent être correctement représentés est `[-(2^53 - 1),2^53 - 1` ].

## Exemples

```js
Number.isSafeInteger(3); // true
Number.isSafeInteger(Math.pow(2, 53)); // false
Number.isSafeInteger(Math.pow(2, 53) - 1); // true
Number.isSafeInteger(NaN); // false
Number.isSafeInteger(Infinity); // false
Number.isSafeInteger("3"); // false
Number.isSafeInteger(3.1); // false
Number.isSafeInteger(3.0); // true
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{jsxref("Number")}} auquel appartient cette méthode
- {{jsxref("Number.MIN_SAFE_INTEGER")}}
- {{jsxref("Number.MAX_SAFE_INTEGER")}}
- {{jsxref("BigInt")}}
