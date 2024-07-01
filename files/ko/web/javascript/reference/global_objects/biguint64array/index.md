---
title: BigUint64Array
slug: Web/JavaScript/Reference/Global_Objects/BigUint64Array
l10n:
  sourceCommit: effd5de5e42bfe045c3bf44b2d7b14f4d6146785
---

{{JSRef}}

**`Uint16Array`** 형식화 배열(TypedArray)은 플랫폼의 바이트 순서를 따르는 64비트 부호 없는 정수의 배열입니다.
바이트 순서를 제어해야 하는 경우 {{jsxref("DataView")}}를 대신 사용합니다. 배열의 내용은 `0n`으로 초기화됩니다.
배열이 생성되면 객체의 메서드를 사용하거나 표준 배열 인덱스 구문(즉, 대괄호 표기법 사용)을 사용하여 배열의 요소를 참조할 수 있습니다.

## 생성자

- [`BigUint64Array()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/BigUint64Array/BigUint64Array)
  - : 새로운 `BigUint64Array` 객체를 생성합니다.

## 정적 속성

부모 {{jsxref("TypedArray")}}에서 정적 속성을 상속합니다.

- {{jsxref("TypedArray.BYTES_PER_ELEMENT", "BigUint64Array.BYTES_PER_ELEMENT")}}
  - : 요소 크기를 숫자 값으로 반환합니다. `BigUint64Array`의 경우 `8` 입니다.
- {{jsxref("TypedArray.name", "BigUint64Array.name")}}
  - : 생성자 이름을 문자열로 반환합니다. `BigUint64Array` 타입의 경우 `"BigUint64Array"`입니다.

## 정적 메서드

부모 {{jsxref("TypedArray")}}에서 정적 메서드를 상속합니다.

## 인스턴스 속성

부모 {{jsxref("TypedArray")}}에서 인스턴스 속성을 상속합니다.

- {{jsxref("TypedArray.BYTES_PER_ELEMENT", "BigUint64Array.prototype.BYTES_PER_ELEMENT")}}
  - : 요소 크기를 숫자 값으로 반환합니다. `BigUint64Array`의 경우 `8` 입니다.

## 인스턴스 메서드

부모 {{jsxref("TypedArray")}}에서 인스턴스 메서드를 상속합니다.

## 예제

### `BigUint64Array`를 생성하기 위한 각기 다른 여러 방법

```js
// 길이로부터 생성
const biguint64 = new BigUint64Array(2);
biguint64[0] = 42n;
console.log(biguint64[0]); // 42n
console.log(biguint64.length); // 2
console.log(biguint64.BYTES_PER_ELEMENT); // 8

// 배열로부터 생성
const x = new BigUint64Array([21n, 31n]);
console.log(x[1]); // 31n

// 다른 TypedArray로부터 생성
const y = new BigUint64Array(x);
console.log(y[0]); // 21n

// ArrayBuffer로부터 생성
const buffer = new ArrayBuffer(64);
const z = new BigUint64Array(buffer, 8, 4);
console.log(z.byteOffset); // 8

// 순회로부터 생성
const iterable = (function* () {
  yield* [1n, 2n, 3n];
})();
const biguint64FromIterable = new BigUint64Array(iterable);
console.log(biguint64FromIterable);
// BigUint64Array [1n, 2n, 3n]
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [JavaScript 형식화 배열](/ko/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("BigInt64Array")}}
- {{jsxref("DataView")}}
