---
title: TypedArray.prototype.findIndex()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/findIndex
l10n:
  sourceCommit: d9e66eca59d82c65166c65e7946332650da8f48f
---

{{JSRef}}

{{jsxref("TypedArray")}} 인스턴스의 **`findIndex()`** 메서드는 주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환합니다. 만족하는 요소가 없으면 -1을 반환합니다. 이 메서드는 {{jsxref("Array.prototype.findIndex()")}}와 같은 알고리즘을 가집니다.

{{InteractiveExample("JavaScript Demo: TypedArray.findIndex()")}}

```js interactive-example
function isNegative(element, index, array) {
  return element < 0;
}

const int8 = new Int8Array([10, -20, 30, -40, 50]);

console.log(int8.findIndex(isNegative));
// Expected output: 1
```

## 구문

```js-nolint
findIndex(callbackFn)
findIndex(callbackFn, thisArg)
```

### 매개변수

- `callbackFn`
  - : 형식화 배열의 각 요소마다 실행할 함수입니다. 일치하는 요소가 발견되었음을 나타내는 [참 같은 값](/ko/docs/Glossary/Truthy)을 반환하고 그렇지 않으면 [거짓같은 값](/ko/docs/Glossary/Falsy)을 반환해야합니다. 함수는 다음과 같은 인수와 함께 호출됩니다.
    - `element`
      - : 형식화 배열에서 처리 중인 현재 요소입니다.
    - `index`
      - : 형식화 배열에서 처리 중인 현재 요소의 인덱스입니다.
    - `array`
      - : `findIndex()` 함수가 호출된 형식화 배열입니다.
- `thisArg` {{optional_inline}}
  - : `callbackFn`을 실행할 때 `this`로 사용할 값입니다. [순회 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods)를 참고하세요.

### 반환 값

테스트를 통과하는 첫 번째 요소의 인덱스입니다. 일치하는 요소가 없으면 `-1`을 반환합니다.

## 설명

보다 자세한 설명은 {{jsxref("Array.prototype.findIndex()")}}을 참고하시기 바랍니다. 이 메서드는 범용 메서드가 아니며 오직 형식화 배열 인스턴스에서만 호출할 수 있습니다.

## 예제

### 형식화 배열에서 소수의 색인 찾기

다음 예제에서는 배열에서 소수인 첫번째 요소의 인덱스를 찾습니다. 소수가 없으면 -1을 반환합니다.

```js
function isPrime(element, index, array) {
  let start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

const uint8 = new Uint8Array([4, 6, 8, 12]);
const uint16 = new Uint16Array([4, 6, 7, 12]);

console.log(uint8.findIndex(isPrime)); // -1, 찾을 수 없음
console.log(uint16.findIndex(isPrime)); // 2
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서의 `TypedArray.prototype.findIndex` 폴리필](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript 형식화 배열](/ko/docs/Web/JavaScript/Guide/Typed_arrays) 안내서
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.find()")}}
- {{jsxref("TypedArray.prototype.findLast()")}}
- {{jsxref("TypedArray.prototype.findLastIndex()")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
- {{jsxref("TypedArray.prototype.lastIndexOf()")}}
- {{jsxref("Array.prototype.findIndex()")}}
