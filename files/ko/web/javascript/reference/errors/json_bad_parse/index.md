---
title: "SyntaxError: JSON.parse: bad parsing"
slug: Web/JavaScript/Reference/Errors/JSON_bad_parse
---

{{jsSidebar("Errors")}}

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

## 뭐가 잘못됬나요?

{{jsxref("JSON.parse()")}} 는 문자열을 JSON으로 파싱한다. 이 문자열은 유효한 JSON 형태의 문자열이어야 하며, 유효하지 않을 경우 에러가 발생한다.

## 예제

### `JSON.parse()` 는 여분의 콤마를 허용하지 않는다

다음 두 줄은 SyntaxError를 발생시킨다:

```js example-bad
JSON.parse("[1, 2, 3, 4,]");
JSON.parse('{"foo": 1,}');
// SyntaxError JSON.parse: unexpected character
// at line 1 column 14 of the JSON data
```

끝에 오는 콤마를 제거하면 정확하게 JSON으로 파싱한다:

```js example-good
JSON.parse("[1, 2, 3, 4]");
JSON.parse('{"foo": 1}');
```

### 프로퍼티 이름은 반드시 쌍따옴표로 표현해야 한다

'foo'처럼 프로퍼티를 작은 따옴표로 감싸서는 안된다.

```js example-bad
JSON.parse("{'foo': 1}");
// SyntaxError: JSON.parse: expected property name or '}'
// at line 1 column 2 of the JSON data
```

대신에 "foo" 처럼 써야 한다:

```js example-good
JSON.parse('{"foo": 1}');
```

### 리딩 제로와 십진 소수점

01 처럼 리딩제로를 사용할 수 없고, 십진 소수점 뒤에는 최소한 하나의 숫자는 등장해야 한다.

```js example-bad
JSON.parse('{"foo": 01}');
// SyntaxError: JSON.parse: expected ',' or '}' after property value
// in object at line 1 column 2 of the JSON data

JSON.parse('{"foo": 1.}');
// SyntaxError: JSON.parse: unterminated fractional number
// at line 1 column 2 of the JSON data
```

대신에 리딩제로를 없애고 1 이라고 쓰고, 십진 소수점 뒤에는 반드시 하나 이상의 숫자를 적도록 한다:

```js example-good
JSON.parse('{"foo": 1}');
JSON.parse('{"foo": 1.0}');
```

## 또다른 내용

- {{jsxref("JSON")}}
- {{jsxref("JSON.parse()")}}
- {{jsxref("JSON.stringify()")}}
