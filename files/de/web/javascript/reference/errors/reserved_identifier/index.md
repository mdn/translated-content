---
title: 'SyntaxError: "x" is a reserved identifier'
slug: Web/JavaScript/Reference/Errors/Reserved_identifier
tags:
  - Error
  - Errors
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Reserved_identifier
original_slug: Web/JavaScript/Reference/Fehler/Reserved_identifier
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    SyntaxError: "x" is a reserved identifier (Firefox)
    SyntaxError: Unexpected reserved word (Chrome)

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist falsch gelaufen?

[Reservierte Schlüsselwörter](/de/docs/Web/JavaScript/Reference/Lexical_grammar#Schlüsselwörter) führen zu einem Fehler, wenn sie als Bezeichner verwendet werden. Im Strict Mode und im Normalen Mode führen folgende Schlüsselwörter zu einem Fehler:

- `enum`

Die folgenden Schlüsselwörter führen nur im Strict Mode zu einem Fehler:

- `implements`
- `interface`
- {{jsxref("Statements/let", "let")}}
- `package`
- `private`
- `protected`
- `public`
- `static`

## Beispiele

### Reservierte Schlüsselwörter im Strict und Normalen Mode

Der`enum` Bezeichner ist generell reserviert.

```js example-bad
var enum = { RED: 0, GREEN: 1, BLUE: 2 };
// SyntaxError: enum is a reserved identifier
```

Im Strict Mode sind weitere Bezeichner reserviert.

```js example-bad
"use strict";
var package = ["potatoes", "rice", "fries"];
// SyntaxError: package is a reserved identifier
```

Man muss die Variablen umbenennen.

```js example-good
var colorEnum = { RED: 0, GREEN: 1, BLUE: 2 };
var list = ["potatoes", "rice", "fries"];
```

### Ältere Browser aktualisieren

Wenn ein alter Browser eingesetzt wird, der zum Beispiel noch nicht [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) oder [`class`](/de/docs/Web/JavaScript/Reference/Statements/class) implementiert, muss der Browser aktualisiert werden, so dass er diese neuen Sprachfunktionen unterstützt.

```js
"use strict";
class DocArchiver {}

// SyntaxError: class is a reserved identifier
// (throws in older browsers only, e.g. Firefox 44 and older)
```

## Siehe auch

- [Gute Variablennamen](http://wiki.c2.com/?GoodVariableNames)
