---
title: "SyntaxError: JSON.parse: bad parsing"
slug: Web/JavaScript/Reference/Errors/JSON_bad_parse
---

{{jsSidebar("Errors")}}

## 信息

```plain
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

## 错误类型

{{jsxref("SyntaxError")}}

## 哪里出错了？

{{jsxref("JSON.parse()")}} 会把一个字符串解析成 JSON 对象。如果字符串书写正确，那么其将会被解析成一个有效的 JSON，但是这个字符串被检测出错误语法的时候将会抛出错误。

## 示例

### `JSON.parse()` 不允许在末尾添加多余的逗号

下面两行代码都会抛出错误：

```js example-bad
JSON.parse("[1, 2, 3, 4, ]");
JSON.parse('{"foo" : 1, }');
// SyntaxError JSON.parse: unexpected character
// at line 1 column 14 of the JSON data
```

省略末尾多余的逗号解析 JSON 就是正确：

```js example-good
JSON.parse("[1, 2, 3, 4 ]");
JSON.parse('{"foo" : 1 }');
```

### JSON 的属性名必须使用双引号

属性名上不能使用单引号，例如： 'foo'。

```js example-bad
JSON.parse("{'foo' : 1 }");
// SyntaxError: JSON.parse: expected property name or '}'
// at line 1 column 2 of the JSON data
```

取而代之，写成 "foo"：

```js example-good
JSON.parse('{"foo" : 1 }');
```

### 前导 0 和小数点

数字不能用 0 开头，比如 01，并且你的小数点后面必须跟着至少一个数字。

```js example-bad
JSON.parse('{"foo" : 01 }');
// SyntaxError: JSON.parse: expected ',' or '}' after property value
// in object at line 1 column 2 of the JSON data

JSON.parse('{"foo" : 1. }');
// SyntaxError: JSON.parse: unterminated fractional number
// at line 1 column 2 of the JSON data
```

正确的写法应该是只写一个 1，不书写前面的 0。在小数点的后面至少要跟上一个数字：

```js example-good
JSON.parse('{"foo" : 1 }');
JSON.parse('{"foo" : 1.0 }');
```

## 相关链接

- {{jsxref("JSON")}}
- {{jsxref("JSON.parse()")}}
- {{jsxref("JSON.stringify()")}}
