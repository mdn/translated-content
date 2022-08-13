---
title: 'TypeError: More arguments needed'
slug: Web/JavaScript/Reference/Errors/More_arguments_needed
tags:
  - Errors
  - JavaScript
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/More_arguments_needed
original_slug: Web/JavaScript/Reference/Fehler/More_arguments_needed
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    TypeError: Object.create requires more than 0 arguments
    TypeError: Object.setPrototypeOf requires more than 1 argument
    TypeError: Object.defineProperties requires more than 0 arguments

## Fehlertyp

{{jsxref("TypeError")}}.

## Was ist falsch gelaufen?

Es ist ein Fehler beim Aufrufen einer Funktion aufgetaucht. Es müssen mehr Argumente übergeben werden.

## Beispiele

Die {{jsxref("Object.create()")}} Methode benötigt mindestens ein Argument und die {{jsxref("Object.setPrototypeOf()")}} Methode benötigt mindestens zwei Argumente:

```js example-bad
var obj = Object.create();
// TypeError: Object.create requires more than 0 arguments

var obj = Object.setPrototypeOf({});
// TypeError: Object.setPrototypeOf requires more than 1 argument
```

Dieser Fehler kann behoben werden, indem {{jsxref("null")}} als Eigenschaft gesetzt wird:

```js example-good
var obj = Object.create(null);

var obj = Object.setPrototypeOf({}, null);
```

## Siehe auch

- [Functions](/de/docs/Web/JavaScript/Guide/Functions)
