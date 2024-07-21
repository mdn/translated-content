---
title: TypedArray.prototype.with()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/with
l10n:
  sourceCommit: a815a95e4ab4adf391d8a7bc66a3abbce1a686d8
---

{{JSRef}}

{{jsxref("TypedArray")}} 인스턴스의 **`with()`** 메서드는 [대괄호 표기법](/ko/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation)을 사용하여 주어진 인덱스의 값을 변경하는 [복사](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#복사_메서드와_변경_메서드mutating_method) 버전입니다. 이 메서드는 주어진 인덱스의 요소가 주어진 값으로 대체된 새로운 형식화 배열을 반환합니다. 이 메서드는 {{jsxref("Array.prototype.with()")}} 메서드와 같은 알고리즘을 가지고 있습니다.

## 구문

```js-nolint
arrayInstance.with(index, value)
```

### 매개변수

- `index`
  - : 형식화 배열을 변경할 0 기반 인덱스이며 [정수로 변환](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion)되는 값입니다.
- `value`
  - : 주어진 인덱스에 할당할 모든 값.

### 반환 값

`index`의 요소 값이 `value`로 대체된 새로운 형식화 배열.

### 예외

- {{jsxref("RangeError")}}
  - : `index >= array.length` 혹은 `index < -array.length`일때 발생합니다.

## 설명

보다 상세한 설명은 {{jsxref("Array.prototype.with()")}}를 참고하시기 바랍니다. 이 메서드는 제네릭이 아니며 형식화 배열 인스턴스에서만 호출할 수 있습니다.

## 예제

### with() 사용하기

```js
const arr = new Uint8Array([1, 2, 3, 4, 5]);
console.log(arr.with(2, 6)); // Uint8Array [1, 2, 6, 4, 5]
console.log(arr); // Uint8Array [1, 2, 3, 4, 5]
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `TypedArray.prototype.with` in `core-js`](https://github.com/zloirock/core-js#change-array-by-copy)
- [JavaScript 형식화 배열](/ko/docs/Web/JavaScript/Guide/Typed_arrays) guide
- {{jsxref("TypedArray.prototype.toReversed()")}}
- {{jsxref("TypedArray.prototype.toSorted()")}}
- {{jsxref("TypedArray.prototype.at()")}}
- {{jsxref("Array.prototype.with()")}}
