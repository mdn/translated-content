---
title: RegExp.input ($_)
slug: Web/JavaScript/Reference/Global_Objects/RegExp/input
tags:
  - JavaScript
  - Property
  - Reference
  - RegExp
  - Regular Expressions
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/input
---
{{JSRef}} {{non-standard_header}}

Die nicht-standarde input Propertie ist eine statische Propertie regularer Expressionen, welche die Zeichenkette, der eine reguläre Expression entgegengestellt wird, enthält. `RegExp.$_` ist ein Alias für diese Propertie.

## Syntaxis

    RegExp.input
    RegExp.$_

## Beschreibung

Die `input`-Propertie ist statisch, ist nicht eine Propertie eines einzigen Obiectes einer regulären Expression. Stattdessen nutzt man es immer als `RegExp.input` oder

Der Wert der `input`-Propertie wird verändert, wenn die gesuchte Zeichenkette in der regulären Expression verändert wird und diese Zeichenkette passt.

## `Beispiele`

### `Verwendung von input und $_`

```js
var re = /hi/g;
re.test("hi there!");
RegExp.input;         // "hi there!"
re.test("foo");       // neuer Test, unpassend
RegExp.$_;            // "hi there!"
re.test("hi world!"); // neuer Test, passend
RegExp.$_;            // "hi world!"
```

## `Specificationen`

`Non-standard. Nicht Teil von irgendeiner laufenden Specification.`

## `Browsercompatibilität`

{{Compat}}

## `Siehe auch`

- `{{non-standard_inline}} {{jsxref("RegExp.lastMatch", "RegExp.lastMatch ($&amp;)")}}`
- `{{non-standard_inline}} {{jsxref("RegExp.lastParen", "RegExp.lastParen ($+)")}}`
- `{{non-standard_inline}} {{jsxref("RegExp.leftContext", "RegExp.leftContext ($`)")}}`
- `{{non-standard_inline}} {{jsxref("RegExp.rightContext", "RegExp.rightContext ($')")}}`
- `{{non-standard_inline}} {{jsxref("RegExp.n", "RegExp.$1-$9")}}`
