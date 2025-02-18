---
title: TypedArray.prototype.subarray()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/subarray
l10n:
  sourceCommit: 7b35a48ac0a10b67f9bd5270b082d40deff9c953
---

{{JSRef}}

**`subarray()`** 메서드는 이 TypedArray 객체와 동일한 {{jsxref("ArrayBuffer")}} 저장소에 동일한 요소의 타입을 가진 새로운 TypedArray를 반환합니다. 시작 오프셋은 **포함**하고 마지막 오프셋은 **제외**합니다. TypedArray는 [타입이 지정된 배열 유형](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects) 중 하나입니다.

{{InteractiveExample("JavaScript Demo: TypedArray.subarray()")}}

```js interactive-example
const uint8 = new Uint8Array([10, 20, 30, 40, 50]);

console.log(uint8.subarray(1, 3));
// Expected output: Uint8Array [20, 30]

console.log(uint8.subarray(1));
// Expected output: Uint8Array [20, 30, 40, 50]
```

## 구문

```js-nolint
subarray()
subarray(begin)
subarray(begin, end)
```

### 매개변수

- `begin` {{optional_inline}}
  - : 시작할 요소입니다. 오프셋 값은 포함되어 있습니다. 이 값을 명시하지 않으면 배열 전체가 새로운 뷰에 포함됩니다.
- `end` {{optional_inline}}
  - : 마지막 요소입니다. 오프셋 값은 제외합니다. 이 값을 명시하지 않으면 `begin`에 지정된 요소부터 배열 끝까지
    모든 요소가 새로운 뷰에 포함됩니다.

### 반환 값

새로운 {{jsxref("TypedArray")}} 객체.

## 설명

`begin`과 `end`으로 명시된 범위는 현재 배열의 유효한 인덱스 범위로 고정됩니다. 새 배열의 계산된 길이가 음수인 경우
0으로 고정됩니다. `begin` 또는 `end`가 음수인 경우 배열의 시작이 아닌 끝의 인덱스를 참조합니다.

또한 명심하셔야 할 점은 기존 버퍼에 새로운 뷰(view)를 생성하는 것뿐입니다.
새 객체의 내용을 변경하면 원래 객체에 영향을 미치며 그 반대의 경우도 마찬가지입니다.

## 예제

### subarray() 메서드 사용하기

```js
const buffer = new ArrayBuffer(8);
const uint8 = new Uint8Array(buffer);
uint8.set([1, 2, 3]);

console.log(uint8); // Uint8Array [ 1, 2, 3, 0, 0, 0, 0, 0 ]

const sub = uint8.subarray(0, 4);

console.log(sub); // Uint8Array [ 1, 2, 3, 0 ]
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `TypedArray.prototype.subarray` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript 형식화 배열](/ko/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
