---
title: "String : méthode statique fromCodePoint()"
short-title: fromCodePoint()
slug: Web/JavaScript/Reference/Global_Objects/String/fromCodePoint
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

La méthode statique **`String.fromCodePoint()`** retourne une chaîne de caractères créée à partir de la séquence définie de points de code.

{{InteractiveExample("Démonstration JavaScript&nbsp;: String.fromCodePoint()", "shorter")}}

```js interactive-example
console.log(String.fromCodePoint(9731, 9733, 9842, 0x2f804));
// Résultat attendu : "☃★♲你"
```

## Syntaxe

```js-nolint
String.fromCodePoint()
String.fromCodePoint(num1)
String.fromCodePoint(num1, num2)
String.fromCodePoint(num1, num2, /* …, */ numN)
```

### Paramètres

- `num1`, …, `numN`
  - : Un entier compris entre `0` et `0x10FFFF` (inclus) représentant un point de code Unicode.

### Valeur de retour

Une chaîne de caractères créée à partir de la séquence de points de code définie.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si `numN` n'est pas un entier, est inférieur à `0` ou est supérieur à `0x10FFFF` après conversion en nombre.

## Description

Étant donné que `fromCodePoint()` est une méthode statique de `String`, vous l'utilisez toujours sous la forme `String.fromCodePoint()`, plutôt qu'en tant que méthode d'une valeur `String` que vous avez créée.

Les points de code Unicode vont de `0` à `1114111` (`0x10FFFF`). En UTF-16, chaque indice de chaîne de caractères est une unité de code dont la valeur est comprise entre `0` et `65535`. Les points de code supérieurs sont représentés par _une paire_ de pseudo-caractères substituts de 16 bits. Par conséquent, `fromCodePoint()` peut retourner une chaîne de caractères dont la [`length`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/length) (en unités de code UTF-16) est supérieure au nombre d'arguments passés. Pour plus d'informations sur Unicode, voir [Caractères UTF-16, points de code Unicode et groupes de graphèmes](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#caractères_utf-16_points_de_code_unicode_et_groupes_de_graphèmes).

## Exemples

### Utiliser la méthode `fromCodePoint()`

Entrées valides&nbsp;:

```js
String.fromCodePoint(42); // "*"
String.fromCodePoint(65, 90); // "AZ"
String.fromCodePoint(0x404); // "\u0404" === "Є"
String.fromCodePoint(0x2f804); // "\uD87E\uDC04"
String.fromCodePoint(194564); // "\uD87E\uDC04"
String.fromCodePoint(0x1d306, 0x61, 0x1d307); // "\uD834\uDF06a\uD834\uDF07"
```

Entrée invalide&nbsp;:

```js
String.fromCodePoint("_"); // RangeError
String.fromCodePoint(Infinity); // RangeError
String.fromCodePoint(-1); // RangeError
String.fromCodePoint(3.14); // RangeError
String.fromCodePoint(3e-2); // RangeError
String.fromCodePoint(NaN); // RangeError
```

### Comparer avec `fromCharCode()`

{{JSxRef("String.fromCharCode()")}} ne peut pas retourner les caractères supplémentaires (c'est-à-dire les points de code `0x010000` à `0x10FFFF`) en définissant leur point de code. Il nécessite plutôt la paire de substituts UTF-16 afin de retourner un caractère supplémentaire&nbsp;:

```js
String.fromCharCode(0xd83c, 0xdf03); // Code Point U+1F303 "Nuit avec
String.fromCharCode(55356, 57091); // étoiles" === "\uD83C\uDF03"
```

`String.fromCodePoint()`, en revanche, peut retourner les caractères supplémentaires sur 4 octets, ainsi que les caractères BMP plus courants sur 2 octets, en définissant leur point de code (ce qui équivaut à l'unité de code UTF-32)&nbsp;:

```js
String.fromCodePoint(0x1f303); // ou 127747 en décimal
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) de `String.fromCodePoint` dans `core-js` <sup>(angl.)</sup>](https://core-js.io/docs/features/ecmascript/string-regexp)
- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) es-shims de `String.fromCodePoint` <sup>(angl.)</sup>](https://www.npmjs.com/package/string.fromcodepoint)
- La méthode statique {{JSxRef("String.fromCharCode()")}}
- La méthode {{JSxRef("String.prototype.charAt()")}}
- La méthode {{JSxRef("String.prototype.codePointAt()")}}
- La méthode {{JSxRef("String.prototype.charCodeAt()")}}
