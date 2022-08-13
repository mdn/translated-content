---
title: 'SyntaxError: JSON.parse: bad parsing'
slug: Web/JavaScript/Reference/Errors/JSON_bad_parse
tags:
  - Errors
  - JSON
  - JavaScript
  - Method
  - Property
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/JSON_bad_parse
original_slug: Web/JavaScript/Reference/Fehler/JSON_bad_parse
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    SyntaxError: JSON.parse: unterminated string literal
    SyntaxError: JSON.parse: bad control character in string literal
    SyntaxError: JSON.parse: bad character in string literal
    SyntaxError: JSON.parse: bad Unicode escape
    SyntaxError: JSON.parse: bad escape character
    SyntaxError: JSON.parse: unterminated string
    SyntaxError: JSON.parse: no number after minus sign
    SyntaxError: JSON.parse: unexpected non-digit
    SyntaxError: JSON.parse: missing digits after decimal point
    SyntaxError: JSON.parse: unterminated fractional number
    SyntaxError: JSON.parse: missing digits after exponent indicator
    SyntaxError: JSON.parse: missing digits after exponent sign
    SyntaxError: JSON.parse: exponent part is missing a number
    SyntaxError: JSON.parse: unexpected end of data
    SyntaxError: JSON.parse: unexpected keyword
    SyntaxError: JSON.parse: unexpected character
    SyntaxError: JSON.parse: end of data while reading object contents
    SyntaxError: JSON.parse: expected property name or '}'
    SyntaxError: JSON.parse: end of data when ',' or ']' was expected
    SyntaxError: JSON.parse: expected ',' or ']' after array element
    SyntaxError: JSON.parse: end of data when property name was expected
    SyntaxError: JSON.parse: expected double-quoted property name
    SyntaxError: JSON.parse: end of data after property name when ':' was expected
    SyntaxError: JSON.parse: expected ':' after property name in object
    SyntaxError: JSON.parse: end of data after property value in object
    SyntaxError: JSON.parse: expected ',' or '}' after property value in object
    SyntaxError: JSON.parse: expected ',' or '}' after property-value pair in object literal
    SyntaxError: JSON.parse: property names must be double-quoted strings
    SyntaxError: JSON.parse: expected property name or '}'
    SyntaxError: JSON.parse: unexpected character
    SyntaxError: JSON.parse: unexpected non-whitespace character after JSON data

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist falsch gelaufen?

{{jsxref("JSON.parse()")}} übersetzt einen String zu JSON. Dieser String muss eine gültiges JSON enthalten. Ist die Syntax fehlerhaft, wird dieser Error ausgegeben.

## Beispiele

### `JSON.parse()` erlaubt keine angehängten Kommata

Beide Zeilen werden einen SyntaxError erzeugen:

```js example-bad
JSON.parse('[1, 2, 3, 4,]');
JSON.parse('{"foo": 1,}');
// SyntaxError JSON.parse: unexpected character
// at line 1 column 14 of the JSON data
```

Das letzte trennende Komma muss in JSON vermieden werden:

```js example-good
JSON.parse('[1, 2, 3, 4]');
JSON.parse('{"foo": 1}');
```

### Eigenschaftsnamen müssen Strings mit doppelten Anführungszeichen sein

Man kann keine einfachen Anführungszeichen für Eigenschaften benutzen (wie 'foo').

```js example-bad
JSON.parse("{'foo': 1}");
// SyntaxError: JSON.parse: expected property name or '}'
// at line 1 column 2 of the JSON data
```

Stattdessen muss "foo" benutzt werden:

```js example-good
JSON.parse('{"foo": 1}');
```

### Führende Nullen und Dezimalpunkte

Man kann keine führenden Nullen (wie 01) benutzen. Nach Dezimalpunkten muss mindestens eine Stelle stehen.

```js example-bad
JSON.parse('{"foo": 01}');
// SyntaxError: JSON.parse: expected ',' or '}' after property value
// in object at line 1 column 2 of the JSON data

JSON.parse('{"foo": 1.}');
// SyntaxError: JSON.parse: unterminated fractional number
// at line 1 column 2 of the JSON data
```

Stattdessen schreibe man nur 1, ohne eine Null (also 1, statt 01) und nutze mindestens eine Ziffer nach dem Dezimalpunkt:

```js example-good
JSON.parse('{"foo": 1}');
JSON.parse('{"foo": 1.0}');
```

## Siehe auch

- {{jsxref("JSON")}}
- {{jsxref("JSON.parse()")}}
- {{jsxref("JSON.stringify()")}}
