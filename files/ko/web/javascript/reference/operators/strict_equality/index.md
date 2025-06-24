---
title: 일치 연산자 (===)
slug: Web/JavaScript/Reference/Operators/Strict_equality
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Operators")}}

**일치 연산자 (`===`)** 는 두 피연산자가 동일한지 확인하며, 불리언 결과를 반환합니다. [동등 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Equality)와는 다르게,
일치 연산자는 두 피연산자의 타입이 다르면 동일하지 않다고 여깁니다.

{{InteractiveExample("JavaScript Demo: Strict equality (===) operator")}}

```js interactive-example
console.log(1 === 1);
// Expected output: true

console.log("hello" === "hello");
// Expected output: true

console.log("1" === 1);
// Expected output: false

console.log(0 === false);
// Expected output: false
```

## 문법

```js-nolint
x === y
```

## 설명

일치 연산자 (`===` 와 `!==`)는 두 피연산자를 비교하기 위해 [엄격한 같음](/ko/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#strict_equality_using)을 사용합니다.

- 두 피연산자의 타입이 다르면, `false`를 반환합니다.
- 두 피연산자가 모두 객체이면, 두 객체가 동일한 객체를 참조할 경우에만 `true`를 반환합니다.
- 두 피연산자가 모두 `null`이거나 `undefined`인 경우, `true`를 반환합니다.
- 피연산자 중 하나가 `NaN`라면, `false`를 반환합니다.
- 그렇지 않은 경우에는, 두 피연산자의 값을 비교합니다.
  - 숫자는 같은 숫자 값이어야 합니다. `+0` 과 `-0`은 동일한 값으로 여깁니다.
  - 문자열은 동일한 문자가 같은 순서로 구성되어 있어야 합니다.
  - 불리언은 둘 다 `true` 이거나 `false` 여야 합니다.

일치 연산자와 [동등 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Equality)
(`==`)의 가장 눈에 띄는 차이점은 피연산자들의 타입이 다를 경우,
`==` 연산자는 비교하기 전에 같은 타입으로 변환을 시도한다는 점입니다.

## 예제

### 같은 타입의 피연산자 비교

```js
"hello" === "hello"; // true
"hello" === "hola"; // false

3 === 3; // true
3 === 4; // false

true === true; // true
true === false; // false

null === null; // true
```

### 다른 타입의 피연산자 비교

```js
"3" === 3; // false
true === 1; // false
null === undefined; // false
3 === new Number(3); // false
```

### 객체 간의 비교

```js
const object1 = {
  key: "value",
};

const object2 = {
  key: "value",
};

console.log(object1 === object2); // false
console.log(object1 === object1); // true
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Equality (`==`)](/ko/docs/Web/JavaScript/Reference/Operators/Equality)
- [Inequality (`!=`)](/ko/docs/Web/JavaScript/Reference/Operators/Inequality)
- [Strict inequality (`!==`)](/ko/docs/Web/JavaScript/Reference/Operators/Strict_inequality)
