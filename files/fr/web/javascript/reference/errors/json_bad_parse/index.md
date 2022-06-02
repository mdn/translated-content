---
title: 'SyntaxError: JSON.parse: bad parsing'
slug: Web/JavaScript/Reference/Errors/JSON_bad_parse
tags:
  - Erreurs
  - JSON
  - JavaScript
  - NeedsExample
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/JSON_bad_parse
original_slug: Web/JavaScript/Reference/Erreurs/JSON_bad_parse
---
{{jsSidebar("Errors")}}

## Message

```
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
```

## Type d'erreur

{{jsxref("SyntaxError")}}

## Quel est le problème ?

Lorsque la méthode {{jsxref("JSON.parse()")}} analyse (_parse_) une chaîne de caractères en JSON, cette chaîne doit être du JSON valide et une exception sera levée si la syntaxe est incorrecte.

## Exemples

### `JSON.parse()` n'accepte pas les virgules en fin de tableau

Les deux lignes qui suivent déclencheront une exception `SyntaxError` :

```js example-bad
JSON.parse('[1, 2, 3, 4, ]');
JSON.parse('{"foo" : 1, }');
// SyntaxError JSON.parse: unexpected character
// at line 1 column 14 of the JSON data
```

Pour que la méthode puisse analyser le JSON correctement, on évitera les virgules en fin de tableau :

```js example-good
JSON.parse('[1, 2, 3, 4 ]');
JSON.parse('{"foo" : 1 }');
```

### Les noms des propriétés doivent être entre double quotes

On ne peut pas utiliser de quotes simples pour indiquer le nom d'une propriété (ex. `'toto'`).

```js example-bad
JSON.parse("{'toto' : 1 }");
// SyntaxError: JSON.parse: expected property name or '}'
// at line 1 column 2 of the JSON data
```

À la place, on écrira `"toto"` :

```js example-good
JSON.parse('{"toto" : 1 }');
```

### Zéros en début de nombres et points décimaux

On ne peut pas utiliser de zéros en début de nombre (ex. 01). Par ailleurs, les nombres décimaux doivent avoir une partie décimale, on ne peut pas terminer un nombre par un point.

```js example-bad
JSON.parse('{"toto" : 01 }');
// SyntaxError: JSON.parse: expected ',' or '}' after property value
// in object at line 1 column 2 of the JSON data

JSON.parse('{"toto" : 1. }');
// SyntaxError: JSON.parse: unterminated fractional number
// at line 1 column 2 of the JSON data
```

Pour que cela fonctionne, on écrira simplement 1 sans 0 devant et au moins un chiffre après le séparateur décimal :

```js example-good
JSON.parse('{"toto" : 1 }');
JSON.parse('{"toto" : 1.0 }');
```

## Voir aussi

- {{jsxref("JSON")}}
- {{jsxref("JSON.parse()")}}
- {{jsxref("JSON.stringify()")}}
