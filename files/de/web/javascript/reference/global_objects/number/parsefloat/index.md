---
title: Number.parseFloat()
slug: Web/JavaScript/Reference/Global_Objects/Number/parseFloat
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Number
translation_of: Web/JavaScript/Reference/Global_Objects/Number/parseFloat
---
{{JSRef}}

Die **`Number.parseFloat()`** Methode liest ein String-Argument ein und gibt eine Fließkommazahl zurück. Diese Methode verhält sich identisch zu der globalen Funktion {{jsxref("parseFloat", "parseFloat()")}} und ist Teil von ECMAScript 2015 (das Ziel ist die modularisierung von globalen Funktionen).

{{EmbedInteractiveExample("pages/js/number-parsefloat.html")}}

## Syntax

    Number.parseFloat(string)

### Parameter

{{page("de/docs/Web/JavaScript/Reference/Global_Objects/parseFloat", "Parameter")}}

### Rückgabewert

{{page("de/docs/Web/JavaScript/Reference/Global_Objects/parseFloat", "Rückgabewert")}}

## Beschreibung

Mehr Details und Beispiele sind im Artikel {{jsxref("parseFloat", "parseFloat()")}} nachzuschlagen.

## Polyfill

```js
Number.parseFloat = parseFloat;
```

## Spezifikationen

| Spezifikation                                                                                | Status                       | Kommentar            |
| -------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-number.parsefloat', 'Number.parseFloat')}} | {{Spec2('ES2015')}}     | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-number.parsefloat', 'Number.parseFloat')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Number.parseFloat")}}

## Siehe auch

- {{jsxref("Number")}}
- {{jsxref("parseFloat", "parseFloat()")}}
