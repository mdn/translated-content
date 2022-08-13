---
title: 'TypeError: "x" has no properties'
slug: Web/JavaScript/Reference/Errors/No_properties
tags:
  - Errors
  - JavaScript
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/No_properties
original_slug: Web/JavaScript/Reference/Fehler/No_properties
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    TypeError: null has no properties
    TypeError: undefined has no properties

## Fehlertyp

{{jsxref("TypeError")}}.

## Was ist falsch gelaufen?

Weder {{jsxref("null")}} noch {{jsxref("undefined")}} besitzen Eigenschaften auf die man zugreifen könnte.

## Beispiele

```js example-bad
null.foo;
// TypeError: null has no properties

undefined.bar;
// TypeError: undefined has no properties
```

## Siehe auch

- {{jsxref("null")}}
- {{jsxref("undefined")}}
