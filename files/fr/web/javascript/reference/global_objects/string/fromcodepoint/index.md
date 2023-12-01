---
title: String.fromCodePoint()
slug: Web/JavaScript/Reference/Global_Objects/String/fromCodePoint
---

{{JSRef}}

La méthode statique **`String.fromCodePoint()`** renvoie une chaîne de caractères créée à partir d'un suite de codets.

{{EmbedInteractiveExample("pages/js/string-fromcodepoint.html")}}

## Syntaxe

```js
String.fromCodePoint(num1[, ...[, numN]])
```

### Paramètres

- `num1, ..., numN`
  - : Une séquence de codets (_code points_).

### Valeur de retour

Une chaîne de caractères créée à partir de la séquence de codets indiquée.

### Exceptions

- Une exception {{jsxref("Erreurs/Not_a_codepoint","RangeError")}} est renvoyée si un codet (Unicode) invalide est utilisé (par exemple, on pourra avoir "RangeError: NaN is not a valid code point").

## Description

`fromCodePoint()` étant une méthode statique de {{jsxref("String")}}, elle doit toujours être utilisée avec la syntaxe `String.fromCodePoint()`, plutôt qu'avec une méthode d'un objet {{jsxref("String")}} qui aurait été créé.

## Exemples

### Utiliser `fromCodePoint()`

```js
String.fromCodePoint(42); // "*"
String.fromCodePoint(65, 90); // "AZ"
String.fromCodePoint(0x404); // "\u0404"
String.fromCodePoint(0x2f804); // "\uD87E\uDC04"
String.fromCodePoint(194564); // "\uD87E\uDC04"
String.fromCodePoint(0x1d306, 0x61, 0x1d307); // "\uD834\uDF06a\uD834\uDF07"

String.fromCodePoint("_"); // RangeError
String.fromCodePoint(Infinity); // RangeError
String.fromCodePoint(-1); // RangeError
String.fromCodePoint(3.14); // RangeError
String.fromCodePoint(3e-2); // RangeError
String.fromCodePoint(NaN); // RangeError
```

### Comparaison avec `fromCharCode()`

La méthode {{jsxref("String.fromCharCode()")}} ne peut pas renvoyer les caractères de l'intervalle 0x010000 à 0X10FFFF avec un seul codet, il est nécessaire de lui fournir la paire décomposée (_surrogate pair_) pour obtenr un tel caractère :

```js
String.fromCharCode(0xd83c, 0xdf03); // émoji « nuit étoilée »
String.fromCharCode(55356, 57091); // équivalent en notation décimale
```

`String.fromCodePoint()`, en revanche, peut renvoyer les caractères qui s'expriment sur plus d'un codet de 16 bits grâce à leur codet « simple » :

```js
String.fromCodePoint(0x1f303); // ou 127747 en notation décimale
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("String.fromCharCode()")}}
- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.codePointAt()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
