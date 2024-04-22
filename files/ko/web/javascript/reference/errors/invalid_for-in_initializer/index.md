---
title: "SyntaxError: for-in loop head declarations may not have initializers"
slug: Web/JavaScript/Reference/Errors/Invalid_for-in_initializer
---

{{jsSidebar("Errors")}}

## 메세지

```
    SyntaxError: for-in loop head declarations cannot have an initializer (Edge)
    SyntaxError: for-in loop head declarations may not have initializers (Firefox)
    SyntaxError: for-in loop variable declaration may not have an initializer. (Chrome)
```

## 에러 타입

엄격(Strict) 모드에서의 {{jsxref("SyntaxError")}}.

## 무엇이 잘못되었을까?

[for...in](/ko/docs/Web/JavaScript/Reference/Statements/for...in) 반복문의 선언부에 초기화 구문이 포함되어 있습니다. 즉, |`for (var i = 0 in obj)`| 구문을 통해 변수가 정의되고 값이 할당된 것을 말합니다. 비엄격 모드(non-strict) 모드에서는 이 초기화 구문이 무시되어 `|for (var i in obj)|` 처럼 동작합니다. 하지만 엄격 모드에서는 `SyntaxError` 가 발생합니다.

## 예제

이 예제는 `SyntaxError`를 발생시킵니다.

```js example-bad
"use strict";

var obj = {a: 1, b: 2, c: 3 };

for (var i = 0 in obj) {
  console.log(obj[i]);
}

// SyntaxError: for-in loop head declarations may not have initializers
```

### 올바른 for-in 반복문

for-in 반복문의 선언부에서 초기화 구문(`i = 0`)을 삭제합니다.

```js example-good
"use strict";

var obj = { a: 1, b: 2, c: 3 };

for (var i in obj) {
  console.log(obj[i]);
}
```

### 배열 반복

for...in 반복문은 [배열을 반복하는데에는 사용하지 않습니다](/ko/docs/Web/JavaScript/Reference/Statements/for...in#Array_iteration_and_for...in). 배열({{jsxref("Array")}})을 반복하기 위해 `for-in` 반복문 대신에 [`for`](/ko/docs/Web/JavaScript/Reference/Statements/for) 반복문을 사용하려고 한 적이 있습니까? `for` 반복문은 선언부에서 초기화도 할 수 있습니다:

```js example-good
var arr = ["a", "b", "c"];

for (var i = 2; i < arr.length; i++) {
  console.log(arr[i]);
}

// "c"
```

## 같이 보기

- [`for...in`](/ko/docs/Web/JavaScript/Reference/Statements/for...in)
- [`for...of`](/ko/docs/Web/JavaScript/Reference/Statements/for...of) – 엄격 모드와 비엄격 모드에서 모두 초기화를 허용하지 않습니다.
- [`for`](/ko/docs/Web/JavaScript/Reference/Statements/for) – 배열 반복에 적합하고 초기화도 가능합니다.
