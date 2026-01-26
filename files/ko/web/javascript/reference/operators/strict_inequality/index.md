---
title: 불일치 연산자 (!==)
slug: Web/JavaScript/Reference/Operators/Strict_inequality
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Operators")}}

**불일치 연산자 (`!==`)** 는 두 피연산자가 같지 않은지 확인하고, 불리언 결과를 반환합니다. [부등 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Inequality) 와 다르게, 불일치 연산자는 두 피연산자의 타입이 다르다면 항상 다른 것이라고 여깁니다.

{{InteractiveExample("JavaScript Demo: Strict inequality (!==) operator")}}

```js interactive-example
console.log(1 !== 1);
// Expected output: false

console.log("hello" !== "hello");
// Expected output: false

console.log("1" !== 1);
// Expected output: true

console.log(0 !== false);
// Expected output: true
```

## 문법

```js-nolint
x !== y
```

## 설명

불일치 연산자는 두 피연산자의 같지 않음을 확인합니다. 이것은 [일치 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Strict_equality) 의 반대 개념입니다. 따라서 다음 두 줄은 항상 같은 결과를 반환합니다.

```js
x !== y;

!(x === y);
```

비교 방식에 대한 자세한 정보는 [일치 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Strict_equality) 의 페이지에서 확인할 수 있습니다.

일치 연산자와 같이, 불일치 연산자는 두 피연산자의 타입이 다르면 항상 다른 것이라고 여깁니다.

```js
3 !== "3"; // true
```

## 예제

### 같은 타입의 피연산자 비교

```js
"hello" !== "hello"; // false
"hello" !== "hola"; // true

3 !== 3; // false
3 !== 4; // true

true !== true; // false
true !== false; // true

null !== null; // false
```

### 다른 타입의 피연산자 비교

```js
"3" !== 3; // true
true !== 1; // true
null !== undefined; // true
```

### 객체 간의 비교

```js
const object1 = {
  key: "value",
};

const object2 = {
  key: "value",
};

console.log(object1 !== object2); // true
console.log(object1 !== object1); // false
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Equality (`==`)](/ko/docs/Web/JavaScript/Reference/Operators/Equality)
- [Inequality (`!=`)](/ko/docs/Web/JavaScript/Reference/Operators/Inequality)
- [Strict equality (`===`)](/ko/docs/Web/JavaScript/Reference/Operators/Strict_equality)
