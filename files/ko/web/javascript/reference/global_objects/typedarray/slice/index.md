---
title: TypedArray.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/slice
---

{{JSRef}}

**`slice()`** 메서드는 형식화 배열의 일부를 얕게 복사(shallow copy)한 새로운 형식화 배열 객체를 반환합니다. 이 메서드는 {{jsxref("Array.prototype.slice()")}}와 같은 알고리즘입니다. *TypedArray*는 여기 [TypedArray 객체 유형](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_객체) 중 하나입니다.

## 구문

```js
typedarray.slice([begin[, end]])
```

## 매개변수

- `begin` {{optional_inline}}
  - 추출을 시작하는 인덱스(0부터 셈).
    음수 인덱스일 때, `begin`은 열 끝으로부터 오프셋을 나타냅니다. `slice(-2)`는 열에서 마지막 두 요소를 추출합니다.`begin`이 생략된 경우, `slice`는 인덱스 `0`에서 시작합니다.
- `end` {{optional_inline}}
  - 추출을 끝내는 인덱스(0부터 셈). `slice`는 `end`(를 포함하지 않음)까지만 추출합니다.
    `slice(1,4)`는 2번째부터 4번째 요소까지 추출합니다 (인덱스가 1, 2 및 3인 요소).
    음수 인덱스일 때, `end`는 열 끝으로부터 오프셋을 나타냅니다. `slice(2,-1)`은 열의 3번째부터 끝에서 2번째 요소까지 추출합니다.
    `end`가 생략된 경우, `slice`는 열의 끝까지 추출합니다 (`arr.length`).

## 설명

`slice` 메서드는 바꾸지 않습니다. 원래 형식화 배열에서 얕게 복사된 요소를 반환합니다.

새 요소가 어느 형식화 배열에든 추가된 경우, 다른 형식화 배열은 영향을 받지 않습니다.

## 예

### 기존 형식화 배열의 일부를 반환

```js
var uint8 = new Uint8Array([1, 2, 3]);
uint8.slice(1); // Uint8Array [ 2, 3 ]
uint8.slice(2); // Uint8Array [ 3 ]
uint8.slice(-2); // Uint8Array [ 2, 3 ]
uint8.slice(0, 1); // Uint8Array [ 1 ]
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참조

- {{jsxref("Array.prototype.slice()")}}
