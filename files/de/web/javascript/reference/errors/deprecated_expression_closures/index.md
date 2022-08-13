---
title: 'Warning: expression closures are deprecated'
slug: Web/JavaScript/Reference/Errors/Deprecated_expression_closures
tags:
  - JavaScript
  - Warning
translation_of: Web/JavaScript/Reference/Errors/Deprecated_expression_closures
original_slug: Web/JavaScript/Reference/Fehler/Deprecated_expression_closures
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    Warning: expression closures are deprecated

## Fehlertyp

Warnung. Die Ausführung von JavaScript wird nicht angehalten.

## Was ist falsch gelaufen?

Die nicht standardisierte [Ausdrucks Closure](/de/docs/Web/JavaScript/Reference/Operators/Expression_closures) Syntax (Kurzform der Funktionssyntax) ist veraltetet und sollte nicht mehr verwendet werden. Diese Syntax wird komplett entfernt ({{bug(1083458)}}) und Skripte die diese Benutzen erzeugen dann einen {{jsxref("SyntaxError")}}.

## Beispiele

### Veraltete Syntax

Ausdrucks Closures vermeiden geschweifte Klammern oder return Anweisungen in Funktionsdeklarationen oder in Methodendefinitionen in Objekten.

```js example-bad
var x = function() 1;

var obj = {
  count: function() 1
};
```

### Standardsyntax

Um die nicht standardisierte Ausdrucks Closures Syntax zu Standard-ECMAScript Syntax zu konvertieren müssen geschweifte Klammern und ein return Statement hinzugefügt werden.

```js example-good
var x = function() { return 1; }

var obj = {
  count: function() { return 1; }
};
```

### Standardsyntax mit Arrowfunktionen

Alternativ können [Arrow-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) genutzt werden:

```js example-good
var x = () => 1;
```

### Standardsyntax mit Kurzformmethodensyntax

Anweisungs Closures können auch in Gettern und Settern gefunden werden:

```js example-bad
var obj = {
  get x() 1,
  set x(v) this.v = v
};
```

Mit ES2015 [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) können diese folgendermaßen konvertiert werden :

```js example-good
var obj = {
  get x() { return 1 },
  set x(v) { this.v = v }
};
```

## Siehe auch

- [Ausdrucks Closures](/de/docs/Web/JavaScript/Reference/Operators/Expression_closures)
- [Arrow Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions)
