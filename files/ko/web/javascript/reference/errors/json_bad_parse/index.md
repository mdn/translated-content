---
title: "SyntaxError: JSON.parse: bad parsing"
slug: Web/JavaScript/Reference/Errors/JSON_bad_parse
l10n:
  sourceCommit: 6d606174faaedaa5dee7b7ebd87602cd51e5dd7e
---

{{jsSidebar("Errors")}}

{{jsxref("JSON.parse()")}}에서 문자열을 JSON 구문으로 파싱하지 못했을 때 JavaScript 예외가 발생합니다.

## 메시지

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

## 에러 타입

{{jsxref("SyntaxError")}}

## 무엇이 잘못되었을까?

{{jsxref("JSON.parse()")}}는 문자열을 JSON으로 파싱합니다. 이 문자열은 유효한 JSON 형태의 문자열이어야 하며, 유효하지 않을 경우 에러가 발생합니다.

## 예제

### `JSON.parse()`는 trailing comma를 허용하지 않습니다

다음 두 줄 모두 SyntaxError가 발생합니다.

```js example-bad
JSON.parse("[1, 2, 3, 4,]");
JSON.parse('{"foo": 1,}');
// SyntaxError JSON.parse: unexpected character
// at line 1 column 14 of the JSON data
```

JSON으로 정확하게 파싱하기 위해 trailing comma를 제거하세요.

```js example-good
JSON.parse("[1, 2, 3, 4]");
JSON.parse('{"foo": 1}');
```

### 속성 이름은 반드시 큰따옴표로 묶은 문자열이어야 합니다

'foo'처럼 속성을 작은따옴표로 감싸서는 안 됩니다.

```js example-bad
JSON.parse("{'foo': 1}");
// SyntaxError: JSON.parse: expected property name or '}'
// at line 1 column 2 of the JSON data
```

대신 "foo"처럼 작성해야 합니다.

```js example-good
JSON.parse('{"foo": 1}');
```

### 선행 0과 소수점

01처럼 선행 0은 사용할 수 없습니다. 소수점 뒤에는 최소한 한 자리 이상의 숫자가 필요합니다.

```js example-bad
JSON.parse('{"foo": 01}');
// SyntaxError: JSON.parse: expected ',' or '}' after property value
// in object at line 1 column 2 of the JSON data

JSON.parse('{"foo": 1.}');
// SyntaxError: JSON.parse: unterminated fractional number
// at line 1 column 2 of the JSON data
```

대신 0 없이 1만 작성하고 소수점 뒤에 한 자리 이상의 숫자를 작성합니다.

```js example-good
JSON.parse('{"foo": 1}');
JSON.parse('{"foo": 1.0}');
```

## 같이 보기

- {{jsxref("JSON")}}
- {{jsxref("JSON.parse()")}}
- {{jsxref("JSON.stringify()")}}
