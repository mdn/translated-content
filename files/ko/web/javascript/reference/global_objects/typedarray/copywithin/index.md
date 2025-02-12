---
title: TypedArray.prototype.copyWithin()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/copyWithin
l10n:
  sourceCommit: d9e66eca59d82c65166c65e7946332650da8f48f
---

{{JSRef}}

{{jsxref("TypedArray")}} 인스턴스의 **`copyWithin()`** 메서드는 이 형식화 배열의 일부를 같은 형식화 배열의 다른 장소에 얕은 복사를 수행하며 배열의 길이를 수정하지 않고 해당 배열을 반환합니다. 이 메서드는 {{jsxref("Array.prototype.copyWithin()")}}와 같은 알고리즘을 가집니다.

{{InteractiveExample("JavaScript Demo: TypedArray.copyWithin()")}}

```js interactive-example
const uint8 = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8]);

// Insert position, start position, end position
uint8.copyWithin(3, 1, 3);

console.log(uint8);
// Expected output: Uint8Array [1, 2, 3, 2, 3, 6, 7, 8]
```

## 구문

```js-nolint
copyWithin(target, start)
copyWithin(target, start, end)
```

### 매개변수

- `target`
  - : 시퀀스를 복사할 0 기반 인덱스로, [정수로 변환](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number#정수_변환). 이는 `start`에 있는 요소가 복사될 위치에 해당하며, `start`과 `end` 사이의 모든 요소는 후속 인덱스에 복사됩니다.
- `start`
  - : 요소 복사를 시작할 0 기반 인덱스로, [정수로 변환](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number#정수_변환)됩니다.
- `end` {{optional_inline}}
  - : 요소 복사를 끝낼 0 기반 인덱스로, [정수로 변환](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number#정수_변환)됩니다. `copyWithin()`은 `end`를 포함하지 않고 `end`전 까지 복사합니다. `copyWithin()`는 여기까지 복사하지만 `end`를 포함하지는 않습니다.

### 반환 값

수정된 형식화 배열

## 설명

보다 자세한 설명은 {{jsxref("Array.prototype.copyWithin()")}}을 참고하시기 바랍니다. 이 메서드는 범용 메서드가 아니며 오직 형식화 배열 인스턴스에서만 호출할 수 있습니다.

## 예제

### copyWithin() 사용하기

```js
const buffer = new ArrayBuffer(8);
const uint8 = new Uint8Array(buffer);
uint8.set([1, 2, 3]);
console.log(uint8); // Uint8Array [ 1, 2, 3, 0, 0, 0, 0, 0 ]
uint8.copyWithin(3, 0, 3);
console.log(uint8); // Uint8Array [ 1, 2, 3, 1, 2, 3, 0, 0 ]
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서의 `TypedArray.prototype.copyWithin` 폴리필](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript 형식화 배열](/ko/docs/Web/JavaScript/Guide/Typed_arrays) 안내서
- {{jsxref("TypedArray")}}
- {{jsxref("Array.prototype.copyWithin()")}}
