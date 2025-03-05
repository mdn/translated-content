---
title: TypedArray.prototype.toReversed()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/toReversed
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

{{jsxref("TypedArray")}} 인스턴스의 **`toReversed()`** 메서드는 {{jsxref("TypedArray/reverse", "reverse()")}} 메서드의 [복사](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods) 대응 메서드입니다. 이 메서드는 요소가 역순으로 배열된 새로운 형식화 배열을 반환합니다. 이 메서드는 {{jsxref("Array.prototype.toReversed()")}}와 같은 알고리즘을 가집니다.

## 구문

```js-nolint
toReversed()
```

### 매개변수

없음.

### 반환 값

역순으로 정렬된 요소가 포함된 새로운 형식화 배열.

## 설명

자세한 정보는 {{jsxref("Array.prototype.toReversed()")}}을 참고하시기 바랍니다. 이 메서드는 범용 메서드가 아니며, 형식화 배열 인스턴스에서만 호출할 수 있습니다.

## 예제

### toReversed() 사용하기

```js
const uint8 = new Uint8Array([1, 2, 3]);
const reversedUint8 = uint8.toReversed();
console.log(reversedUint8); // Uint8Array [3, 2, 1]
console.log(uint8); // Uint8Array [1, 2, 3]
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서 `TypedArray.prototype.toReversed`의 폴리필](https://github.com/zloirock/core-js#change-array-by-copy)
- [JavaScript 형식화 배열](/ko/docs/Web/JavaScript/Guide/Typed_arrays) 안내서
- {{jsxref("TypedArray.prototype.reverse()")}}
- {{jsxref("TypedArray.prototype.toSorted()")}}
- {{jsxref("TypedArray.prototype.with()")}}
- {{jsxref("Array.prototype.toReversed()")}}
