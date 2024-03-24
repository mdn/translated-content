---
title: TypedArray.prototype.sort()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/sort
---

{{JSRef}}

**`sort()`** 메서드는 _적소에_ 형식화 배열의 요소를 정렬하여 그 형식화 배열을 반환합니다. 이 메서드는 {{jsxref("Array.prototype.sort()")}}_와 같은 알고리즘입니다._ *TypedArray*는 여기 [형식화 배열 유형](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects) 중 하나입니다.

## 구문

```js
typedarray.sort([compareFunction]);
```

### 매개변수

- `compareFunction` {{optional_inline}}
  - : 정렬 순서를 정의하는 함수를 지정합니다.

## 예

더 많은 예는, {{jsxref("Array.prototype.sort()")}} 메서드도 참조하세요.

```js
var number = new Uint8Array([40, 1, 5, 200]);

function compareNumbers(a, b) {
  return a - b;
}

numbers.sort(compareNumbers);
// Uint8Array [ 1, 5, 40, 200 ]
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참조

- {{jsxref("Array.prototype.sort()")}}
