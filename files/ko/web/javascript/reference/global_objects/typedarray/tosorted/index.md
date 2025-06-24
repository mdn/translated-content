---
title: TypedArray.prototype.toSorted()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/toSorted
l10n:
  sourceCommit: e46c58e6ed948e8c35c206762eb14a2e68616ed1
---

{{JSRef}}

{{jsxref("TypedArray")}} 인스턴스의 **`toSorted()`** 메서드는 {{jsxref("TypedArray/sort", "sort()")}} 메서드의 [복사](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods)버전입니다. 이 메서드는 오름차순으로 정렬된 요소를 가지는 새로운 형식화 배열을 반환합니다. 기본적으로는 문자열 대신 값을 산술적으로 정렬한다는 점 외에는 이 메서드는 {{jsxref("Array.prototype.toSorted()")}}와 같은 알고리즘을 가지고 있습니다.

## 구문

```js-nolint
toSorted()
toSorted(compareFn)
```

### 매개변수

- `compareFn` {{optional_inline}}
  - : 요소 순서를 결정하는 함수입니다. 생략하면 배열 요소는 숫자 값에 따라 정렬됩니다. 자세한 정보는 {{jsxref("TypedArray/sort", "sort()")}}를 참고하시기 바랍니다.

### 반환 값

오름 차순으로 정렬된 요소가 있는 새로운 형식화 배열.

## 설명

자세한 정보는 {{jsxref("Array.prototype.toSorted()")}}을 참고하시기 바랍니다. 이 메서드는 범용 메서드가 아니며, 형식화 배열 인스턴스에서만 호출할 수 있습니다.

## 예제

### 배열 정렬하기

더 많은 예제는 {{jsxref("Array.prototype.sort()")}}를 참고하시기 바랍니다.

```js
const numbers = new Uint8Array([40, 1, 5, 200]);
const numberSorted = numbers.toSorted();
console.log(numberSorted); // Uint8Array [ 1, 5, 40, 200 ]
// 일반 배열과는 다르게, 숫자를 산술적으로 정렬하기 위해서
// 비교 함수가 필수는 아닙니다.
console.log(numbers); // Uint8Array [ 40, 1, 5, 200 ]
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서의 `TypedArray.prototype.toSorted` 폴리필](https://github.com/zloirock/core-js#change-array-by-copy)
- [JavaScript 형식화 배열](/ko/docs/Web/JavaScript/Guide/Typed_arrays) 가이드
- {{jsxref("TypedArray.prototype.sort()")}}
- {{jsxref("TypedArray.prototype.toReversed()")}}
- {{jsxref("TypedArray.prototype.with()")}}
- {{jsxref("Array.prototype.toSorted()")}}
