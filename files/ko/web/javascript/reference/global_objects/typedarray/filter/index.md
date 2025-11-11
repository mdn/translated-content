---
title: TypedArray.prototype.filter()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/filter
l10n:
  sourceCommit: d9e66eca59d82c65166c65e7946332650da8f48f
---

{{JSRef}}

{{jsxref("TypedArray")}} 인스턴스의 **`filter()`** 메서드는 지정된 형식화 배열의 일부 복사본을 생성하며, 지정된 형식화 배열에서 제공된 함수에 의해 구현된 테스트를 통과한 요소로만 필터링됩니다. 이 메서드는 {{jsxref("Array.prototype.filter()")}}와 동일한 알고리즘을 사용합니다.

{{InteractiveExample("JavaScript Demo: TypedArray.filter()")}}

```js interactive-example
function isNegative(element, index, array) {
  return element < 0;
}

const int8 = new Int8Array([-10, 20, -30, 40, -50]);
const negInt8 = int8.filter(isNegative);

console.log(negInt8);
// Expected output: Int8Array [-10, -30, -50]
```

## 구문

```js-nolint
filter(callbackFn)
filter(callbackFn, thisArg)
```

### 매개변수

- `callbackFn`
  - : 형식화 배열의 각 요소에 대해 실행할 함수입니다. 결과로 나올 형식화 배열에 요소를 유지하려면 [참 같은](/ko/docs/Glossary/Truthy) 값을 반환하고 그렇지 않으면 [거짓 같은](/ko/docs/Glossary/Falsy) 값을 반환해야 합니다. 이 함수는 다음 인수를 사용하여 호출됩니다.
    - `element`
      - : 형식화 배열에서 처리 중인 현재 요소.
    - `index`
      - : 형식화 배열에서 처리 중인 현재 요소의 인덱스.
    - `array`
      - : `filter()`가 호출된 형식화 배열.
- `thisArg` {{optional_inline}}
  - : `callbackFn`을 실행할 때 `this` 값으로 사용할 값입니다. [순회 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#순회_메서드)를 참조하세요.

### 반환 값

주어진 형식화 배열에서 테스트를 통과한 요소만 포함하는 해당 배열의 배열의 복사본입니다. 테스트를 통과한 요소가 없으면 빈 배열이 반환됩니다.

## 설명

자세한 설명은 {{jsxref("Array.prototype.filter()")}}을 참고하시기 바랍니다. 이 메서드는 범용적이지 않으며 형식화 배열 인스턴스에서만 호출됩니다.

## 예제

### 모든 작은 값을 필터링

다음 예제는 `filter()`를 사용하여 주어진 요소의 값이 10보다 작은 값이 제거된 필터링된 형식화 배열을 만듭니다.

```js
function isBigEnough(element, index, array) {
  return element >= 10;
}
new Uint8Array([12, 5, 8, 130, 44]).filter(isBigEnough);
// Uint8Array [ 12, 130, 44 ]
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서 `TypedArray.prototype.filter`의 폴리필](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript 유형화 배열](/ko/docs/Web/JavaScript/Guide/Typed_arrays) 가이드
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.forEach()")}}
- {{jsxref("TypedArray.prototype.every()")}}
- {{jsxref("TypedArray.prototype.map()")}}
- {{jsxref("TypedArray.prototype.some()")}}
- {{jsxref("TypedArray.prototype.reduce()")}}
- {{jsxref("Array.prototype.filter()")}}
