---
title: TypedArray.prototype.find()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/find
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

{{jsxref("Array")}} 인스턴스의 **`find()`** 메서드는 제공된 형식화 배열에서 제공된 테스트 함수를 만족하는 첫 번째 요소를 반환합니다. 테스트 함수를 만족하는 값이 없으면 {{jsxref("undefined")}}가 반환됩니다. 이 메서드는 {{jsxref("Array.prototype.find()")}}와 동일한 알고리즘을 가집니다.

{{InteractiveExample("JavaScript Demo: TypedArray.find()")}}

```js interactive-example
function isNegative(element, index, array) {
  return element < 0;
}

const int8 = new Int8Array([10, 0, -10, 20, -30, 40, -50]);

console.log(int8.find(isNegative));
// Expected output: -10
```

## 구문

```js-nolint
find(callbackFn)
find(callbackFn, thisArg)
```

### 매개변수

- `callback`
  - : 형식화 배열의 각 요소에 대해 실행할 함수입니다. 일치하는 요소를 찾았으면 [참 같은](/ko/docs/Glossary/Truthy) 값을 반환하고, 그렇지 않으면 [거짓 같은](/ko/docs/Glossary/Falsy) 값을 반환해야 합니다. 함수는 다음 인수를 사용하여 호출됩니다.
    - `element`
      - : 형식화 배열에서 현재 처리되고 있는 요소.
    - `index`
      - : 형식화 배열에서 현재 처리되고 있는 요소의 인덱스.
    - `array`
      - : `find()`가 호출된 형식화 배열.
- `thisArg` {{optional_inline}}
  - : `callbackFn`을 실행할 때 `this`로 사용할 값입니다. [순회 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#순회_메서드)를 참고하시기 바랍니다.

### 반환 값

제공된 테스트 함수를 만족하는 형식화 배열의 첫 번째 요소입니다.
테스트 함수를 만족하는 요소가 없으면, {{jsxref("undefined")}}가 반환됩니다.

## 설명

보다 자세한 정보는 {{jsxref("Array.prototype.find()")}}를 참고하시기 바랍니다. 이 메서드는 범용적이지 않으며 오직 형식화 배열 인스턴스에서만 호출할 수 있습니다.

## 예제

### 형식화 배열에서 소수 찾기

다음 예제는 형식화 배열의 요소 중 소수인 요소를 찾습니다(소수가 없는 경우에는 {{jsxref("undefined")}}를 반환합니다).

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

const uint8 = new Uint8Array([4, 5, 8, 12]);
console.log(uint8.find(isPrime)); // 5
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서 `TypedArray.prototype.find` 폴리필](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript 형식화 배열](/ko/docs/Web/JavaScript/Guide/Typed_arrays) 안내서
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.findIndex()")}}
- {{jsxref("TypedArray.prototype.findLast()")}}
- {{jsxref("TypedArray.prototype.findLastIndex()")}}
- {{jsxref("TypedArray.prototype.includes()")}}
- {{jsxref("TypedArray.prototype.filter()")}}
- {{jsxref("TypedArray.prototype.every()")}}
- {{jsxref("TypedArray.prototype.some()")}}
- {{jsxref("Array.prototype.find()")}}
