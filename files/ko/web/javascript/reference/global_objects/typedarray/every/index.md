---
title: TypedArray.prototype.every()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/every
l10n:
  sourceCommit: 2eb202adbe3d83292500ed46344d63fbbae410b5
---

{{JSRef}}

**`every()`** 메서드는 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트합니다.
이 메서드는 {{jsxref("Array.prototype.every()")}}와 같은 알고리즘을 가지고 있습니다.
TypedArray은 [형식화 배열 타입](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_객체) 중 하나입니다.

{{InteractiveExample("JavaScript Demo: TypedArray.every()")}}

```js interactive-example
function isNegative(element, index, array) {
  return element < 0;
}

const int8 = new Int8Array([-10, -20, -30, -40, -50]);

console.log(int8.every(isNegative));
// Expected output: true
```

## 구문

```js-nolint
// Arrow function
every((element) => { /* ... */ } )
every((element, index) => { /* ... */ } )
every((element, index, array) => { /* ... */ } )

// Callback function
every(callbackFn)
every(callbackFn, thisArg)

// Inline callback function
every(function(element) { /* ... */ })
every(function(element, index) { /* ... */ })
every(function(element, index, array){ /* ... */ })
every(function(element, index, array) { /* ... */ }, thisArg)
```

### 매개변수

- `callbackFn`

  - : 각 요소를 시험할 함수.

    다음 세 가지 인수를 받습니다.

    - `element`
      - : 배열에서 처리되는 현재 요소.
    - `index`
      - : 이 형식화 배열에서 처리할 현재 요소의 인덱스.
    - `array`
      - : `every`를 호출한 형식화 배열.

- `thisArg` {{Optional_inline}}
  - : `callbackFn`을 실행할 때 `this`로 사용하는 값.

### 반환 값

콜백 함수가 모든 배열 요소가 {{Glossary("truthy", "참 같은 값")}}을 반환하면 `true`를 반환하며,
그렇지 않으면 `false`를 반환합니다.

## 설명

`every`는 `callbackFn`이 {{Glossary("falsy")}}을 반환하는 요소를 찾을 때까지 형식화 배열에 있는
각 요소에 대해 한 번씩 `callbackFn` 함수를 실행합니다. 해당하는 요소를 발견한 경우 `every`는 즉시 `false`를
반환합니다. 그렇지 않으면, 즉 모든 값에서 {{Glossary("truthy")}}을 반환하면 `true`를 반환합니다.

`callbackFn`은 요소의 값, 해당 요소의 인덱스 및 순회하고 있는 형식화 배열 세 가지 인수와 함께 호출됩니다.

`thisArg` 매개변수를 `every`에 제공한 경우 `callbackFn`의 `this`로 사용됩니다.
그 외엔 `undefined`값을 사용합니다. 최종적으로 `callbackFn`이 볼 수 있는 `this`의 값은
[함수의 `this`를 결정하는 일반적인 규칙](/ko/docs/Web/JavaScript/Reference/Operators/this)을 따릅니다.

`every`는 호출한 배열을 변형하지 않습니다.

## 예제

### 형식화 배열의 모든 요소의 크기 테스트

다음 예는 형식화 배열의 모든 요소가 9보다 더 큰지 테스트합니다.

```js
function isBigEnough(element, index, array) {
  return element >= 10;
}
new Uint8Array([12, 5, 8, 130, 44]).every(isBigEnough); // false
new Uint8Array([12, 54, 18, 130, 44]).every(isBigEnough); // true
```

### 화살표 함수를 사용한 형식화 배열 테스트

[화살표 함수](/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions)는
테스트 함수를 위해 더 짧은 구문을 제공합니다.

```js
new Uint8Array([12, 5, 8, 130, 44]).every((elem) => elem >= 10); // false
new Uint8Array([12, 54, 18, 130, 44]).every((elem) => elem >= 10); // true
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `TypedArray.prototype.every` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- {{jsxref("TypedArray.prototype.some()")}}
- {{jsxref("Array.prototype.every()")}}
