---
title: TypedArray.prototype.reverse()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/reverse
---

{{JSRef}}

**`reverse()`** 메서드는 제자리에서 형식화 배열을 뒤집습니다. 형식화 배열 첫 요소는 마지막이 되고 마지막은 첫 요소가 됩니다. 이 메서드는 {{jsxref("Array.prototype.reverse()")}}와 같은 알고리즘입니다. *TypedArray*는 여기 [TypedArray 객체 유형](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects) 중 하나입니다.

{{EmbedInteractiveExample("pages/js/typedarray-reverse.html")}}

## 구문

```js
typedarray.reverse();
```

### 반환 값

뒤집힌 배열.

## 예제

```js
var uint8 = new Uint8Array([1, 2, 3]);
uint8.reverse();

console.log(uint8); // Uint8Array [3, 2, 1]
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Array.prototype.reverse()")}}
