---
title: "SyntaxError: JSON.parse: bad parsing"
slug: Web/JavaScript/Reference/Errors/JSON_bad_parse
---

{{jsSidebar("Errors")}}

## Mensagem

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
```

## Tipo de erro

{{jsxref("SyntaxError")}}

## O que ocorreu de errado?

{{jsxref("JSON.parse()")}} converte uma string para JSON. A string precisa ser um JSON válido e retornará esse erro caso a sintaxe esteja errada.

## Exemplos

### `JSON.parse()` não permite vírgulas à direita

As duas linhas retornarão um SyntaxError:

```js example-bad
JSON.parse("[1, 2, 3, 4,]");
JSON.parse('{"foo": 1,}');
// SyntaxError JSON.parse: unexpected character
// at line 1 column 14 of the JSON data
```

Retire as virgulas sobrando para converter o JSON corretamente:

```js example-good
JSON.parse("[1, 2, 3, 4]");
JSON.parse('{"foo": 1}');
```

### Propriedades precisão ser escritas com aspas duplas

Você não pode usar aspas simples em propriedades, exemplo: 'foo'.

```js example-bad
JSON.parse("{'foo': 1}");
// SyntaxError: JSON.parse: expected property name or '}'
// at line 1 column 2 of the JSON data
```

Em vez disso use "foo":

```js example-good
JSON.parse('{"foo": 1}');
```

### Zeros à esquerda e pontos decimais

Você não pode usar zeros à esquerda, como 01, e pontos decimais precisam ser seguidos de pelo menos um digito.

```js example-bad
JSON.parse('{"foo": 01}');
// SyntaxError: JSON.parse: expected ',' or '}' after property value
// in object at line 1 column 2 of the JSON data

JSON.parse('{"foo": 1.}');
// SyntaxError: JSON.parse: unterminated fractional number
// at line 1 column 2 of the JSON data
```

Em vez disso, use o 1 sem o zero, e pelo menos um digito após um ponto decimal:

```js example-good
JSON.parse('{"foo": 1}');
JSON.parse('{"foo": 1.0}');
```

## Veja também

- {{jsxref("JSON")}}
- {{jsxref("JSON.parse()")}}
- {{jsxref("JSON.stringify()")}}
