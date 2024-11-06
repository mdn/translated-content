---
title: Array.prototype.reverse()
slug: Web/JavaScript/Reference/Global_Objects/Array/reverse
---

{{JSRef}}

**`reverse()`** 메서드는 배열의 순서를 반전합니다. 첫 번째 요소는 마지막 요소가 되며 마지막 요소는 첫 번째 요소가 됩니다.

{{EmbedInteractiveExample("pages/js/array-reverse.html")}}

## 구문

```js
a.reverse();
```

### 반환 값

순서가 반전된 배열.

## 설명

`reverse` 메서드는 호출한 배열을 반전하고 원본 배열을 변형하며 그 참조를 반환합니다.

## 예시

### 배열의 요소를 반전하기

다음 예시는 3개의 요소가 든 myArray 배열을 만든 후, 반전시킵니다.

```js
const a = [1, 2, 3];
console.log(a); // [1, 2, 3]

a.reverse();
console.log(a); // [3, 2, 1]
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Array.prototype.join()")}}
- {{jsxref("Array.prototype.sort()")}}
- {{jsxref("TypedArray.prototype.reverse()")}}
