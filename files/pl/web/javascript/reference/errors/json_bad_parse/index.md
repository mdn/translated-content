---
title: 'SyntaxError: JSON.parse: bad parsing'
slug: Web/JavaScript/Reference/Errors/JSON_bad_parse
tags:
  - Błąd składniowy
  - Błędy
  - Errors
  - JSON
  - JavaScript
  - Metodă
  - SyntaxError
  - Własność
translation_of: Web/JavaScript/Reference/Errors/JSON_bad_parse
---
{{jsSidebar("Errors")}}

## Wiadomosć

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
    SyntaxError: JSON.parse Error: Invalid character at position {0} (Edge)

## Typ błędu

{{jsxref("SyntaxError")}}

## Co poszło nie tak?

{{jsxref("JSON.parse()")}} parsuje string jako JSON. Zadany string musi być poprawnym dokumentem JSON, więc błąd wystąpi wtedy, gdy zostanie napotkana niepoprawna składnia.

## Przykłady

### `JSON.parse()` nie pozwala na końcowe przecinki

Both lines will throw a SyntaxError:

```js example-bad
JSON.parse('[1, 2, 3, 4,]');
JSON.parse('{"foo": 1,}');
// SyntaxError JSON.parse: unexpected character
// at line 1 column 14 of the JSON data
```

Pomiń końcowe przecinki, aby sparsować dokument JSON w poprawny sposób:

```js example-good
JSON.parse('[1, 2, 3, 4]');
JSON.parse('{"foo": 1}');
```

### Nazwy własności muszą znajdować się w cudzysłowach

Nie możesz użyć apostrofów do określania nazw własności, jak np. 'foo'.

```js example-bad
JSON.parse("{'foo': 1}");
// SyntaxError: JSON.parse: expected property name or '}'
// at line 1 column 2 of the JSON data
```

Zamiast tego użyj "foo":

```js example-good
JSON.parse('{"foo": 1}');
```

### Zera wiodące i część niecałkowita liczby

Nie możesz użyć zer wiodących, jak na przykład `01`, ponadto część niecałkowita musi zawierać co najmniej jedną cyfrę, jeśli używany jest format dziesiętny.

```js example-bad
JSON.parse('{"foo": 01}');
// SyntaxError: JSON.parse: expected ',' or '}' after property value
// in object at line 1 column 2 of the JSON data

JSON.parse('{"foo": 1.}');
// SyntaxError: JSON.parse: unterminated fractional number
// at line 1 column 2 of the JSON data
```

Zamiast tego napisz po prostu `1` bez zera z przodu i użyj co najmniej jednej cyfry w częsci dziesiętnej:

```js example-good
JSON.parse('{"foo": 1}');
JSON.parse('{"foo": 1.0}');
```

## Zobacz też

- {{jsxref("JSON")}}
- {{jsxref("JSON.parse()")}}
- {{jsxref("JSON.stringify()")}}
