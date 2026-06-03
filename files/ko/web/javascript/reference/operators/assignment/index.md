---
title: 할당 연산자 (=)
slug: Web/JavaScript/Reference/Operators/Assignment
---

{{jsSidebar("Operators")}}

**할당(`=`)** 연산자는 변수에 값을 대입하는 데 사용됩니다. 할당 연산은 할당된 값으로 평가됩니다. 할당 연산자를
연결하여 사용하면 단일 값을 여러 변수에 할당할 수 있습니다.

{{InteractiveExample("JavaScript Demo: Expressions - Assignment")}}

```js interactive-example
let x = 2;
const y = 3;

console.log(x);
// Expected output: 2

console.log((x = y + 1)); // 3 + 1
// Expected output: 4

console.log((x = x * y)); // 4 * 3
// Expected output: 12
```

## 구문

```js-nolint
x = y
```

## 예제

### 간단한 대입과 연결하여 사용

```js
let x = 5;
let y = 10;
let z = 25;

x = y; // x 는 10입니다.
x = y = z; // x, y, z 는 모두 25입니다.
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [JavaScript 가이드에서 할당 연산자](/ko/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [구조 분해 할당](/ko/docs/Web/JavaScript/Reference/Operators/Destructuring)
