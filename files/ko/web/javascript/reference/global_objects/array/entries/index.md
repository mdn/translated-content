---
title: Array.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/Array/entries
tags:
  - Array
  - ECMAScript 2015
  - Iterator
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Array/entries
---
{{JSRef}}

**`entries()`** 메서드는 배열의 각 인덱스에 대한 키/값 쌍을 가지는 새로운 **`Array Iterator`\*\*** \*\*객체를 반환합니다.

{{EmbedInteractiveExample("pages/js/array-entries.html")}}

## 구문

```js
    arr.entries()
```

### 반환 값

{{jsxref("Array")}} 반복자 인스턴스 객체.

## 예시

### 인덱스와 요소 이터레이팅

```js
    const a = ['a', 'b', 'c'];

    for (const [index, element] of a.entries())
      console.log(index, element);

    // 0 'a'
    // 1 'b'
    // 2 'c'
```

### [for…of](/ko/docs/Web/JavaScript/Reference/Statements/for...of) 루프 사용

```js
var a = ['a', 'b', 'c'];
var iterator = a.entries();

for (let e of iterator) {
  console.log(e);
}
// [0, 'a']
// [1, 'b']
// [2, 'c']
```

## Specifications

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Array.prototype.keys()")}}
- {{jsxref("Array.prototype.values()")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- [for...of](/ko/docs/Web/JavaScript/Reference/Statements/for...of)
- [Iteration protocols](/ko/docs/Web/JavaScript/Reference/Iteration_protocols)
