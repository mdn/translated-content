---
title: BigInt64Array
slug: Web/JavaScript/Reference/Global_Objects/BigInt64Array
l10n:
  sourceCommit: effd5de5e42bfe045c3bf44b2d7b14f4d6146785
---

{{JSRef}}

**`BigInt64Array`** 형식화 배열(TypedArray)은 플랫폼의 바이트 순서를 따르는 2의 보수 64비트의
부호있는 정수 배열입니다. 바이트 순서를 제어해야 하는 경우 대신 {{jsxref("DataView")}}를 사용합니다.
배열의 내용은 `0n`으로 초기화됩니다. 배열이 생성되면 객체의 메서드를 사용하거나 표준 배열 인덱스 구문(즉, 대괄호 표기법 사용)을
사용하여 배열의 요소를 참조할 수 있습니다.

## 생성자

- [`BigInt64Array()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/BigInt64Array/BigInt64Array)
  - : 새로운 `BigInt64Array` 객체를 생성합니다.

## 정적 속성

부모 {{jsxref("TypedArray")}}에서 정적 속성을 상속합니다.

- {{jsxref("TypedArray.BYTES_PER_ELEMENT", "BigInt64Array.BYTES_PER_ELEMENT")}}
  - : 요소 크기를 숫자로 반환합니다. `BigInt64Array`의 경우 `8` 입니다.
- {{jsxref("TypedArray.name", "BigInt64Array.name")}}
  - : `BigInt64Array` 타입의 경우 `"BigInt64Array"`입니다.

## 정적 메서드

부모 {{jsxref("TypedArray")}}에서 정적 메서드를 상속합니다.

## 인스턴스 속성

부모 {{jsxref("TypedArray")}}에서 인스턴스 속성을 상속합니다.

- {{jsxref("TypedArray.BYTES_PER_ELEMENT", "BigInt64Array.prototype.BYTES_PER_ELEMENT")}}
  - : 요소 크기를 숫자로 반환합니다. `BigInt64Array`의 경우 `8` 입니다.

## 인스턴스 메서드

부모 {{jsxref("TypedArray")}}에서 인스턴스 메서드를 상속합니다.

## 예제

### `BigInt64Array`을 생성하기 위한 각기 다른 방법

```js
// 길이로부터
const bigint64 = new BigInt64Array(2);
bigint64[0] = 42n;
console.log(bigint64[0]); // 42n
console.log(bigint64.length); // 2
console.log(bigint64.BYTES_PER_ELEMENT); // 8

// 배열로부터
const x = new BigInt64Array([21n, 31n]);
console.log(x[1]); // 31n

// 다른 TypedArray로부터
const y = new BigInt64Array(x);
console.log(y[0]); // 21n

// ArrayBuffer로부터
const buffer = new ArrayBuffer(64);
const z = new BigInt64Array(buffer, 8, 4);
console.log(z.byteOffset); // 8

// 순회로부터
const iterable = (function* () {
  yield* [1n, 2n, 3n];
})();
const bigint64FromIterable = new BigInt64Array(iterable);
console.log(bigint64FromIterable);
// BigInt64Array [1n, 2n, 3n]
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [JavaScript 형식화 배열](/ko/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("BigUint64Array")}}
- {{jsxref("DataView")}}
