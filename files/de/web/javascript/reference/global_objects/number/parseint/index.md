---
title: Number.parseInt()
slug: Web/JavaScript/Reference/Global_Objects/Number/parseInt
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Number
translation_of: Web/JavaScript/Reference/Global_Objects/Number/parseInt
---
{{JSRef}}

Die **`Number.parseInt()`** Methode liest ein String-Argument ein und gibt eine ganze Zahl im angegebenen Zahlensystem zurück.

{{EmbedInteractiveExample("pages/js/number-parseint.html")}}

## Syntax

    Number.parseInt(string[, radix])

### Parameter

{{page("de/docs/Web/JavaScript/Reference/Global_Objects/parseInt", "Parameter")}}

### Rückgabewert

{{page("de/docs/Web/JavaScript/Reference/Global_Objects/parseInt", "Rückgabewert")}}

## Beschreibung

Diese Methode hat den gleichen Funktionsumfang wie die globalen {{jsxref("parseInt", "parseInt()")}} Funktion:

```js
Number.parseInt === parseInt; // true
```

Sie ist Teil von ECMAScript 2015 und hat als Ziel die Modularisierung von globalen Funktionen. Mehr Details und Beispiele im Artikel {{jsxref("parseInt", "parseInt()")}}.

## Polyfill

```js
if (Number.parseInt === undefined)
    Number.parseInt = window.parseInt;
```

## Spezifikationen

| Spezifikation                                                                            | Status                       | Komment              |
| ---------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES6', '#sec-number.parseint', 'Number.parseInt')}}     | {{Spec2('ES6')}}         | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-number.parseint', 'Number.parseInt')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Number.parseInt")}}

## Siehe auch

- {{jsxref("Number")}}
- {{jsxref("parseInt", "parseInt()")}}
