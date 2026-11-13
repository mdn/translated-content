---
title: TypedArray.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/forEach
l10n:
  sourceCommit: 1c70095257ba7f6d1195d1d33340e234dfc80b3e
---

{{JSRef}}

**`forEach()`** 메서드는 주어진 함수을 형식화 배열에 있는 각 요소에 대해 한 번씩 실행합니다.
이 메서드는 {{jsxref("Array.prototype.forEach()")}}와 동일한 알고리즘으로 동작합니다.
형식화 배열은 [형식화 배열 타입](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects) 중 하나입니다.

{{InteractiveExample("JavaScript Demo: TypedArray.forEach()")}}

```js interactive-example
const uint8 = new Uint8Array([10, 20, 30]);

uint8.forEach((element) => console.log(element));

// Expected output: 10
// Expected output: 20
// Expected output: 30
```

## 구문

```js-nolint
// Arrow function
forEach((element) => { /* ... */ } )
forEach((element, index) => { /* ... */ } )
forEach((element, index, array) => { /* ... */ } )

// Callback function
forEach(callbackFn)
forEach(callbackFn, thisArg)

// Inline callback function
forEach(function(element) { /* ... */ })
forEach(function(element, index) { /* ... */ })
forEach(function(element, index, array){ /* ... */ })
forEach(function(element, index, array) { /* ... */ }, thisArg)
```

### 매개변수

- `callbackFn`
  - : 각 요소에 대해 실행할 함수.

    다음 세 가지 매개변수를 받습니다.
    - `element`
      - : 현재 처리할 현재 요소.
    - `index`
      - : 처리할 현재 요소의 인덱스.
    - `array`
      - : `forEach()` 를 호출한 배열.

- `thisArg` {{optional_inline}}
  - : `callbackFn`을 실행할 때 `this`로 사용할 값.

### 반환 값

{{jsxref("undefined")}}.

## 설명

`forEach()`는 주어진 `callbackFn`을 형식화 배열에 있는 각 요소에 대해 한 번씩 실행합니다.
삭제했거나 초기화하지 않은 인덱스에 대해서는 실행하지 않습니다. 그러나 {{jsxref("undefined")}}값을 가진, 존재하는
요소에 대해서는 실행합니다.

`callbackFn`은 다음 **세 인수**와 함께 호출됩니다.

- **요소 값**
- **요소 인덱스**
- **순회 중인 배열**

`thisArg` 매개변수를 `forEach()`에 제공한 경우 `callbackFn`을 호출할 때 전달해 `this`의 값으로 쓰입니다. 전달하지 않으면 {{jsxref("undefined")}}를 `this` 값으로 사용합니다. `callbackFn`이 최종적으로 관찰할 수 있는 `this` 값은 [함수의 `this`를 결정하는 일반적인 규칙](/ko/docs/Web/JavaScript/Reference/Operators/this)에 따라 결정됩니다.

`forEach()`로 처리할 요소의 범위는 최초 `callbackFn` 호출 전에 설정됩니다. `forEach()` 호출을 시작한 뒤
배열에 추가한 요소는 `callbackFn`이 방문하지 않습니다. 형식화 배열의 기존 요소값이 바뀐 경우,
`callbackFn`에 전달하는 값은 `forEach()`가 요소를 방문한 시점의 값을 사용합니다.
방문하기 전에 삭제한 요소는 방문하지 않습니다.

`forEach()`는 각 형식화 배열 요소에 대해 한 번씩 `callbackFn` 함수를 실행합니다.
{{jsxref("TypedArray.prototype.every()", "every()")}}과
{{jsxref("TypedArray.prototype.some()", "some()")}}와는
달리 {{jsxref("undefined")}}를 반환합니다.

## 예제

### 형식화 배열의 컨텐츠 기록하기

아래 코드는 형식화 배열의 각 요소당 한 줄의 로그를 남깁니다.

```js
function logArrayElements(element, index, array) {
  console.log(`a[${index}] = ${element}`);
}

new Uint8Array([0, 1, 2, 3]).forEach(logArrayElements);
// Logs:
// a[0] = 0
// a[1] = 1
// a[2] = 2
// a[3] = 3
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `TypedArray.prototype.forEach` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- {{jsxref("TypedArray.prototype.map()")}}
- {{jsxref("TypedArray.prototype.every()")}}
- {{jsxref("TypedArray.prototype.some()")}}
- {{jsxref("Array.prototype.forEach()")}}
