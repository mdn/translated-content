---
title: 'SyntaxError: "x" is a reserved identifier'
slug: Web/JavaScript/Reference/Errors/Reserved_identifier
---

{{jsSidebar("Errors")}}

## 메세지

```
    SyntaxError: The use of a future reserved word for an identifier is invalid (Edge)
    SyntaxError: "x" is a reserved identifier (Firefox)
    SyntaxError: Unexpected reserved word (Chrome)
```

## 에러 타입

{{jsxref("SyntaxError")}}

## 무엇이 잘못되었을까?

[예약어](/ko/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords)가 식별자로 쓰인 경우 발생하는 에러입니다. 이 키워드는 엄격(Strict) 모드와 느슨한(Sloppy) 모드에서 모두 예약어로 취급됩니다.

- `enum`

다음은 엄격 모드의 코드에서만 예약어로 취급됩니다:

- `implements`
- `interface`
- {{jsxref("Statements/let", "let")}}
- `package`
- `private`
- `protected`
- `public`
- `static`

## 예제

### 엄격 모드와 엄격하지 않은 모드에서의 예약어

`enum` 식별자는 일반적으로 예약되어 있습니다.

```js example-bad
var enum = { RED: 0, GREEN: 1, BLUE: 2 };
// SyntaxError: enum is a reserved identifier
```

엄격 모드의 코드에선 더 많은 식별자들이 예약되어 있습니다.

```js example-bad
"use strict";
var package = ["potatoes", "rice", "fries"];
// SyntaxError: package is a reserved identifier
```

이 변수들의 이름을 변경해야 합니다.

```js example-good
var colorEnum = { RED: 0, GREEN: 1, BLUE: 2 };
var list = ["potatoes", "rice", "fries"];
```

### 오래된 브라우저의 업데이트

새로운 구문을 사용하기 위해서는 최근 버전의 브라우저로 업데이트 해야 합니다. 예를 들어, 오래된 브라우저를 사용하고 있다면 [`let`](/ko/docs/Web/JavaScript/Reference/Statements/let) 또는 [`class`](/ko/docs/Web/JavaScript/Reference/Statements/class) 구현할 수 없습니다.

```js
"use strict";
class DocArchiver {}

// SyntaxError: class is a reserved identifier
// (오래된 버전의 브라우저에서만 에러가 발생합니다. 예) Firefox 44 이하)
```

## 같이 보기

- [Good variable names](http://wiki.c2.com/?GoodVariableNames)
