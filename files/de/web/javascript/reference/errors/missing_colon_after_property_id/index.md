---
title: 'SyntaxError: missing : after property id'
slug: Web/JavaScript/Reference/Errors/Missing_colon_after_property_id
tags:
  - Error
  - Errors
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Missing_colon_after_property_id
original_slug: Web/JavaScript/Reference/Fehler/Missing_colon_after_property_id
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    SyntaxError: missing : after property id

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist falsch gelaufen?

Wenn Objekte mit der [Objektinitialisierungs](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer)-Syntax erstellt werden, wird ein (`:`) eingesetzt, um bei Eiegenschaften Schlüssel und Werte zu trennen.

```js
var obj = { propertyKey: 'value' };
```

## Examples

### Doppelpunkt vs. Gleichzeichen

Der Code funktioniert nicht, weil das Gleichzeichen nicht in dieser Form in der Objektinitialisierungs-Syntax genutzt werden kann.

```js example-bad
var obj = { propertyKey = 'value' };
// SyntaxError: missing : after property id
```

Richtig währe der Einsatz eines Doppelpunktes oder der Einsatz von eckigen Klammern, um eine Eigenschaft nach dem erstellen des Objektes zuzuweisen.

```js example-good
var obj = { propertyKey: 'value' };

// or alternatively

var obj = { };
obj['propertyKey'] = 'value';
```

### Leere Eigenschaften

Man kann nicht wie im Beispiel leere Eigenschaften erzeugen:

```js example-bad
var obj = { propertyKey; };
// SyntaxError: missing : after property id
```

Wenn eine Eigenschaft ohne Wert definiert werden soll, muss {{jsxref("null")}} als Wert genutzt werden.

```js example-good
var obj = { propertyKey: null };
```

### Berechnete Eigenschaften

Wenn ein Eigenschaftsname aus einem Ausdruck berechnet wird, müssen eckige Klammern genutzt werden. Anderfalls kann der Eigenschaftname nicht errechnet werden:

```js example-bad
var obj = { 'b'+'ar': 'foo' };
// SyntaxError: missing : after property id
```

Man muss den Ausdruck in `[]` setzen:

```js example-good
var obj = { ['b'+'ar']: 'foo' };
```

## Siehe auch

- [Objektinitialisierung](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer)
