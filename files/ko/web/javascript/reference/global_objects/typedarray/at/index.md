---
title: TypedArray.prototype.at()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/at
l10n:
  sourceCommit: a815a95e4ab4adf391d8a7bc66a3abbce1a686d8
---

{{JSRef}}

{{jsxref("TypedArray")}} 인스턴스의 **`at()`** 메서드는 정수 값을 받아 해당 인덱스에 있는 항목을 반환하며, 양의 정수와 음의 정수를 모두 허용합니다. 음의 정수는 배열의 마지막 항목에서부터 역순으로 셉니다. 이 메서드는 {{jsxref("Array.prototype.at()")}}와 동일한 알고리즘을 가집니다.

{{InteractiveExample("JavaScript Demo: TypedArray.at()")}}

```js interactive-example
const int8 = new Int8Array([0, 10, -10, 20, -30, 40, -50]);

let index = 1;

console.log(`An index of ${index} returns the item ${int8.at(index)}`);
// Expected output: "An index of 1 returns the item 10"

index = -2;

console.log(`An index of ${index} returns the item ${int8.at(index)}`);
// Expected output: "An index of -2 returns the item 40"
```

## 구문

```js-nolint
at(index)
```

### 매개변수

- `index`
  - : 반환할 배열 요소의 0부터 시작하는 인덱스로, [정수로 변환](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number#정수_변환)됩니다. 음수 인덱스는 형식화 배열 끝부터 역순으로 셉니다. `index < 0`인 경우, `index + array.length`로 접근합니다.

### 반환 값

주어진 인덱스와 일치하는 형식화 배열의 요소입니다. `index < -array.length` 또는 `index >= array.length`인 경우, 해당 속성에 접근하지 않고 항상 {{jsxref("undefined")}}를 반환합니다.

## 설명

보다 자세한 정보는 {{jsxref("Array.prototype.at()")}}를 참고하시기 바랍니다. 이 메서드는 범용적이지 않으며, 형식화 배열 인스턴스에서만 호출할 수 있습니다.

## 예제

### 배열의 끝 값 반환

아래 예제는 주어진 배열에서 맨 마지막에 위치한 값을 반환하는 함수입니다.

```js
const uint8 = new Uint8Array([1, 2, 4, 7, 11, 18]);

// 주어진 배열에서 마지막 요소를 반환하는 함수
function returnLast(arr) {
  return arr.at(-1);
}

const lastItem = returnLast(uint8);
console.log(lastItem); // 18
```

### 비교 메서드

아래 예제에서는 {{jsxref("TypedArray")}}의 뒤에서 두 번째 요소를 선택하는 다양한 방법을 비교합니다. 아래의 모든 방법이 유효하지만, `at()` 메서드의 간결성과 가독성을 강조합니다.

```js
// 몇 가지 값이 있는 형식화 배열
const uint8 = new Uint8Array([1, 2, 4, 7, 11, 18]);

// length 속성 사용하기
const lengthWay = uint8[uint8.length - 2];
console.log(lengthWay); // 11

// slice() 메서드 사용하기. 배열이 반환되는걸 명심하세요
const sliceWay = uint8.slice(-2, -1);
console.log(sliceWay[0]); // 11

// at() 메서드 사용하기
const atWay = uint8.at(-2);
console.log(atWay); // 11
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `TypedArray.prototype.at` in `core-js`](https://github.com/zloirock/core-js#relative-indexing-method)
- [JavaScript 형식화 배열](/ko/docs/Web/JavaScript/Guide/Typed_arrays) guide
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.findIndex()")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
- {{jsxref("TypedArray.prototype.with()")}}
- {{jsxref("Array.prototype.at()")}}
- {{jsxref("String.prototype.at()")}}
