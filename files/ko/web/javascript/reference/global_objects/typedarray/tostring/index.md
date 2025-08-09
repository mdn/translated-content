---
title: TypedArray.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/toString
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{JSRef}}

{{jsxref("TypedArray")}} 인스턴스의 **`toString()`** 메서드는 명시된 형식화 배열과 배열의 요소를 표현하는 문자열을 반환합니다. 이 메서드는 {{jsxref("Array.prototype.toString()")}}과 같은 알고리즘을 가집니다.

{{InteractiveExample("JavaScript Demo: TypedArray.toString()", "shorter")}}

```js interactive-example
const uint8 = new Uint8Array([10, 20, 30, 40, 50]);

const uint8String = uint8.toString();

console.log(uint8String.startsWith("10"));
// Expected output: true
```

## 구문

```js-nolint
toString()
```

### 매개변수

없음.

### 반환 값

해당 형식화 배열을 표현하는 문자열.

## 설명

좀 더 많은 정보는 {{jsxref("Array.prototype.toString()")}}을 참고하시기 바랍니다. 이 메서드는 범용적이지 않으며, 형식화 배열 인스턴스에서만 호출됩니다.

## 예제

### 형식화 배열을 문자열로 변환하기

```js
const uint8 = new Uint8Array([1, 2, 3]);
// 명시적 변환
console.log(uint8.toString()); // 1,2,3
// 암시적 변환
console.log(`${uint8}`); // 1,2,3
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [JavaScript 형식화 배열](/ko/docs/Web/JavaScript/Guide/Typed_arrays) 가이드
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.join()")}}
- {{jsxref("TypedArray.prototype.toLocaleString()")}}
- {{jsxref("Array.prototype.toString()")}}
- {{jsxref("String.prototype.toString()")}}
