---
title: BigUint64Array() constructor
slug: Web/JavaScript/Reference/Global_Objects/BigUint64Array/BigUint64Array
l10n:
  sourceCommit: effd5de5e42bfe045c3bf44b2d7b14f4d6146785
---

{{JSRef}}

**`BigUint64Array()`** 생성자는 플랫폼의 바이트 순서를 따르는 64비트 부호 없는 정수의 형식화 배열(TypedArray)
{{jsxref("BigUint64Array")}}을 생성합니다. 배열의 내용은 `0n`으로 초기화됩니다. 배열이 생성되면 객체의 메서드를
사용하거나 표준 배열 인덱스 구문(즉, 대괄호 표기법 사용)을 사용하여 배열의 요소를 참조할 수 있습니다.

## 구문

```js-nolint
new BigUint64Array()
new BigUint64Array(length)
new BigUint64Array(typedArray)
new BigUint64Array(object)

new BigUint64Array(buffer)
new BigUint64Array(buffer, byteOffset)
new BigUint64Array(buffer, byteOffset, length)
```

> **참고:** `BigUint64Array()`는 오직
> [`new`](/ko/docs/Web/JavaScript/Reference/Operators/new)로만 생성할 수 있습니다.
> `new` 없이 호출하면 {{jsxref("TypeError")}} 예외가 발생합니다.

### 매개변수

[`TypedArray`](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#parameters)를 참조하세요.

### 예외

[`TypedArray`](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#exceptions)를 참조하세요.

## 예제

### `BigUint64Array`을 생성하기 위한 각기 다른 방법

```js
// 길이로부터
const biguint64 = new BigUint64Array(2);
biguint64[0] = 42n;
console.log(biguint64[0]); // 42n
console.log(biguint64.length); // 2
console.log(biguint64.BYTES_PER_ELEMENT); // 8

// 배열로부터
const x = new BigUint64Array([21n, 31n]);
console.log(x[1]); // 31n

// 다른 TypedArray로부터
const y = new BigUint64Array(x);
console.log(y[0]); // 21n

// ArrayBuffer로부터
const buffer = new ArrayBuffer(64);
const z = new BigUint64Array(buffer, 8, 4);
console.log(z.byteOffset); // 8

// 순회로부터
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
