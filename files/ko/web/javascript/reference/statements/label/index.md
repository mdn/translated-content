---
title: label
slug: Web/JavaScript/Reference/Statements/label
---

{{jsSidebar("Statements")}}

**레이블 구문**은 {{jsxref("Statements/break", "break")}}나 {{jsxref("Statements/continue", "continue")}} 구문과 함께 사용할 수 있다. 원하는 식별자로 구문 앞에 레이블을 추가할 수 있다.

> **Note:** 레이블을 붙인 반복문이나 블록가 자주 사용되는 것은 아니다. 반복문으로 점프하는 대신에 함수를 호출할 수도 있다.

## 문법

```js-nolint
label:
  statement;
```

- `label`
  - : 자바스크립트에서 사용할 수 있는 식별자면 모두 가능하다.
- `statement`
  - : 구문. break는 모든 레이블 구문에서 사용될 수 있으며, continue는 반복 레이블 구문에서만 사용할 수 있다.

## 설명

반복문에 레이블을 붙이고, break나 continue 구문을 사용해 반복문의 어느 위치에서 작업을 멈추고 어느 위치에서 다시 수행할지를 알려줄 수 있다.

자바스크립트에는 goto 구문이 없다는 것에 주의. break나 continue에서만 레이블을 사용할 수 있다.

[strict mode](/ko/docs/Web/JavaScript/Reference/Strict_mode) 코드에서 "let"을 레이블 이름으로 사용할 수 없다. {{jsxref("SyntaxError")}}를 발생시킨다. (let은 허용되지 않는 식별자이다.)

## 예제

### for문에서 레이블 continue 사용하기

```js
var i, j;

loop1: for (i = 0; i < 3; i++) {
  //첫번째 for문은 "loop1" 레이블을 붙였다.
  loop2: for (j = 0; j < 3; j++) {
    //두번째 for문은 "loop2" 레이블을 붙였다.
    if (i === 1 && j === 1) {
      continue loop1;
    }
    console.log("i = " + i + ", j = " + j);
  }
}

// 출력 결과:
//   "i = 0, j = 0"
//   "i = 0, j = 1"
//   "i = 0, j = 2"
//   "i = 1, j = 0"
//   "i = 2, j = 0"
//   "i = 2, j = 1"
//   "i = 2, j = 2"
// 다음 두 경우를 어떻게 스킵하는지 주목 : "i = 1, j = 1", "i = 1, j = 2"
```

### 레이블 continue문 사용하기

items, tests 배열을 보면 이 예제는 tests를 통과하는 items의 수를 세고 있다.

```js
var itemsPassed = 0;
var i, j;

top: for (i = 0; i < items.length; i++) {
  for (j = 0; j < tests.length; j++) {
    if (!tests[j].pass(items[i])) {
      continue top;
    }
  }

  itemsPassed++;
}
```

### for문에 레이블 break문 사용하기

```js
var i, j;

loop1: for (i = 0; i < 3; i++) {
  //The first for statement is labeled "loop1"
  loop2: for (j = 0; j < 3; j++) {
    //The second for statement is labeled "loop2"
    if (i === 1 && j === 1) {
      break loop1;
    }
    console.log("i = " + i + ", j = " + j);
  }
}

// Output is:
//   "i = 0, j = 0"
//   "i = 0, j = 1"
//   "i = 0, j = 2"
//   "i = 1, j = 0"
// Notice the difference with the previous continue example
```

### 레이블 break문 사용하기

items, tests 배열을 보면, 다음 예제는 items가 tests를 모두 통과하는지 판단한다.

```js
var allPass = true;
var i, j;

top: for (i = 0; items.length; i++)
  for (j = 0; j < tests.length; i++)
    if (!tests[j].pass(items[i])) {
      allPass = false;
      break top;
    }
```

### 레이블 붙인 블록에 break 사용하기

간단한 블록에도 레이블을 사용할 수 있지만, 반복문 아닌 레이블에는 break문만 사용할 수 있다.

```js
foo: {
  console.log("face");
  break foo;
  console.log("this will not be executed");
}
console.log("swap");

// 로그는 이렇게 출력된다:

// "face"
// "swap
```

### 레이블 붙인 함수 선언문

ECMAScript 2015에서, 레이블 붙인 함수 선언문은 [web compatibility annex of the specification](http://www.ecma-international.org/ecma-262/6.0/#sec-labelled-function-declarations)의 non-strict 모드에서 표준화되어 있다.

```js
L: function F() {}
```

[strict mode](/ko/docs/Web/JavaScript/Reference/Strict_mode) 에서는 {{jsxref("SyntaxError")}}를 발생시킨다.

```js
"use strict";
L: function F() {}
// SyntaxError: functions cannot be labelled
```

[Generator functions](/ko/docs/Web/JavaScript/Reference/Statements/function*)는 strict code도 non-strict code에서도 레이블 붙일 수 없다.

```js
L: function* F() {}
// SyntaxError: generator functions cannot be labelled
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 더 알아보기

- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
