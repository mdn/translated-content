---
title: TypedArray.prototype.findLastIndex()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/findLastIndex
l10n:
  sourceCommit: d9e66eca59d82c65166c65e7946332650da8f48f
---

{{JSRef}}

{{jsxref("TypedArray")}} 인스턴스의 **`findLastIndex()`** 메서드는 배열을 역순으로 순회하며 주어진 판별 함수를 만족하는 배열의 첫번째 요소의 인덱스를 반환합니다. 만족하는 요소가 없으면 -1을 반환합니다. 이 메서드는 {{jsxref("Array.prototype.findLastIndex()")}}와 알고리즘이 같습니다.

{{InteractiveExample("JavaScript Demo: TypedArray.findLastIndex()")}}

```js interactive-example
function isNegative(element /*, index, array */) {
  return element < 0;
}

const int8 = new Int8Array([10, -20, 30, -40, 50]);

console.log(int8.findLastIndex(isNegative));
// Expected output: 3
```

## 구문

```js-nolint
findLastIndex(callbackFn)
findLastIndex(callbackFn, thisArg)
```

### 매개변수

- `callbackFn`
  - : 형식화 배열의 각 요소에 대해 실행할 함수입니다. 일치하는 요소를 찾았으면 [참 같은](/ko/docs/Glossary/Truthy) 값을 반환하고, 그렇지 않으면 [거짓 같은](/ko/docs/Glossary/Falsy) 값을 반환해야 합니다. 함수는 다음 인수를 사용하여 호출됩니다.
    - `element`
      - : 형식화 배열에서 현재 처리되고 있는 요소.
    - `index`
      - : 형식화 배열에서 현재 처리되고 있는 요소의 인덱스.
    - `array`
      - : `findLastIndex()`가 호출된 형식화 배열.
- `thisArg` {{optional_inline}}
  - : `callbackFn`을 실행할 때 `this`로 사용할 값입니다. [순회 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#순회_메서드)를 참고하세요.

### 반환 값

제공된 테스트 함수를 만족하는 형식화 배열의 마지막(가장 높은 인덱스) 요소의 인덱스. 일치하는 요소를 찾을 수 없으면 `-1`을 반환합니다.

## 설명

보다 자세한 설명은 {{jsxref("Array.prototype.findLastIndex()")}}을 참고하시기 바랍니다. 이 메서드는 범용 메서드가 아니며 오직 형식화 배열 인스턴스에서만 호출할 수 있습니다.

## 예제

### 형식화 배열에서 마지막 소수 찾기

다음 예제는 형식화 배열의 마지막 요소 중 소수인 요소를 반환하거나, 소수가 없는 경우 `-1`을 반환합니다.

```js
function isPrime(element) {
  if (element % 2 === 0 || element < 2) {
    return false;
  }
  for (let factor = 3; factor <= Math.sqrt(element); factor += 2) {
    if (element % factor === 0) {
      return false;
    }
  }
  return true;
}

let uint8 = new Uint8Array([4, 6, 8, 12]);
console.log(uint8.findLastIndex(isPrime));
// -1 (배열에 소수 없음)
uint8 = new Uint8Array([4, 5, 7, 8, 9, 11, 12]);
console.log(uint8.findLastIndex(isPrime));
// 5
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서의 `TypedArray.prototype.findLastIndex` 폴리필](https://github.com/zloirock/core-js#array-find-from-last)
- [JavaScript 형식화 배열](/ko/docs/Web/JavaScript/Guide/Typed_arrays) 안내서
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.find()")}}
- {{jsxref("TypedArray.prototype.findIndex()")}}
- {{jsxref("TypedArray.prototype.findLast()")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
- {{jsxref("TypedArray.prototype.lastIndexOf()")}}
- {{jsxref("Array.prototype.findLastIndex()")}}
