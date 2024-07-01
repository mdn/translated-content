---
title: TypedArray.prototype.set()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/set
---

{{JSRef}}

**`set()`** 메서드는 지정된 배열로부터 입력 값을 읽어 형식화 배열 내에 여러 값을 저장합니다.

{{EmbedInteractiveExample("pages/js/typedarray-set.html")}}

## 구문

```js
typedarr.set(array[, offset])
typedarr.set(typedarray[, offset])
```

### 매개변수

- `array`
  - : 값을 복사할 배열. 소스 배열로부터 모든 값이 대상 배열로 복사됩니다, 소스 배열의 길이 + 오프셋이 대상 배열의 길이를 초과하지 않는 한, 그 경우에는 예외가 발생됩니다.
- `typedarray`
  - : 소스 배열이 형식화 배열인 경우, 두 배열은 기본 {{jsxref("ArrayBuffer")}}를 같이 공유할 수 있습니다; 브라우저는 버퍼의 소스 범위를 대상(destination) 범위로 똑똑하게 **복사**합니다.
- `offset` {{optional_inline}}
  - : 소스 `array`에서 값을 쓰기 시작하는 대상 배열의 오프셋. 이 값이 생략된 경우, 0으로 간주됩니다 (즉, 소스 `array`는 인덱스 0에서 시작하는 대상 배열 내 값을 덮어씁니다).

### 예외

- {{jsxref("RangeError")}}
  - : `offset`이 가령 형식화 배열의 끝을 넘어서 저장하려고 설정된 경우 발생.

## 예제

### `set()` 사용하기

```js
var buffer = new ArrayBuffer(8);
var uint8 = new Uint8Array(buffer);

uint8.set([1, 2, 3], 3);

console.log(uint8); // Uint8Array [ 0, 0, 0, 1, 2, 3, 0, 0 ]
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [JavaScript 형식화 배열](/ko/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
