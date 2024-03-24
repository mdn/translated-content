---
title: "SyntaxError: JSON.parse: bad parsing"
slug: Web/JavaScript/Reference/Errors/JSON_bad_parse
---

{{jsSidebar("Errors")}}

## Сообщение

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

## Тип ошибки

{{jsxref("SyntaxError")}}

## Что пошло не так?

{{jsxref("JSON.parse()")}} обрабатывает (парсит) строку в формате JSON. Это строка должна соответствовать формату, иначе будет выведена ошибка, что был нарушен синтаксис.

## Examples

### `JSON.parse()` не допускает запятые

Метод JSON.parse() не разрешает использование, так называемых, trailling запятых.

Обе строки выдадут ошибку типа SyntaxError:

```js example-bad
JSON.parse("[1, 2, 3, 4,]");
JSON.parse('{"foo": 1,}');
// SyntaxError JSON.parse: unexpected character
// at line 1 column 14 of the JSON data
```

Необходимо убрать последние запятые в строках и тогда ошибки не будет:

```js example-good
JSON.parse("[1, 2, 3, 4]");
JSON.parse('{"foo": 1}');
```

### Названия свойств должны быть в двойных кавычках

Вы не можете использовать одинарные кавычки в именах свойств. Например, 'foo'.

```js example-bad
JSON.parse("{'foo': 1}");
// SyntaxError: JSON.parse: expected property name or '}'
// at line 1 column 2 of the JSON data
```

Вместо этого необходимо написать "foo":

```js example-good
JSON.parse('{"foo": 1}');
```

### Незначащие нули или плавающая точка без последующей цифры

Вы не можете использовать незначащие нули, например, 01. Плавающая точка должна всегда сопровождаться хотя бы одной цифрой после неё.

```js example-bad
JSON.parse('{"foo": 01}');
// SyntaxError: JSON.parse: expected ',' or '}' after property value
// in object at line 1 column 2 of the JSON data

JSON.parse('{"foo": 1.}');
// SyntaxError: JSON.parse: unterminated fractional number
// at line 1 column 2 of the JSON data
```

Вместо этого напишите просто 1 без нуля и используйте хотя бы одну цифру после точки:

```js example-good
JSON.parse('{"foo": 1}');
JSON.parse('{"foo": 1.0}');
```

## Смотрите также

- {{jsxref("JSON")}}
- {{jsxref("JSON.parse()")}}
- {{jsxref("JSON.stringify()")}}
