---
title: 'ReferenceError: reference to undefined property "x"'
slug: Web/JavaScript/Reference/Errors/Undefined_prop
tags:
  - Errors
  - JavaScript
  - ReferenceError
  - Strict Mode
translation_of: Web/JavaScript/Reference/Errors/Undefined_prop
original_slug: Web/JavaScript/Reference/Fehler/Undefined_prop
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    ReferenceError: reference to undefined property "x" (Firefox)

## Fehlertyp

{{jsxref("ReferenceError")}} Fehlermeldung tritt nur im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) auf.

## Was ist falsch gelaufen?

Es wird versucht auf eine Eigenschaft zuzugreifen, die nicht existiert. Es gibt zwei Arten um auf Eigenschaften zuzugreifen, siehe [Eigenschaften Zugriffsfunktionen](/de/docs/Web/JavaScript/Reference/Operators/Property_Accessors) auf den Referenzseiten für weitere Details.

Fehler aufgrund von leeren Eigenschaftsreferenzen treten nur im Quellcode auf, der im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) geschrieben ist. Im Quellcode der nicht im strikten Modus geschrieben ist, wird der Fehler ohne Meldung ignoriert.

## Beispiele

### Ungültige Fälle

In diesem Fall ist die Eigenschaft "bar" undefiniert.

```js example-bad
"use strict";

var foo = {};
foo.bar; // ReferenceError: reference to undefined property "bar"
```

### Gültige Fälle

Um Fehler zu vermeiden muss man eine Eigenschaft "bar" definieren oder überprüfen, ob die Eigenschaft "bar" existiert, bevor man auf diese zugreift. (z.B.: mit Hilfe der Funktion {{jsxref("Object.prototype.hasOwnProperty()")}}).

```js example-good
"use strict";

var foo = {};

// Definiert die bar Eigenschaft

foo.bar = "Mond";
console.log(foo.bar); // "Mond"

// Testet vor dem Zugriff, ob bar existiert.

if (foo.hasOwnProperty("bar")) {
  console.log(foo.bar);
}
```

## Siehe auch

- [Strikter Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)
