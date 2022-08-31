---
title: Array.prototype.keys()
slug: Web/JavaScript/Reference/Global_Objects/Array/keys
tags:
  - Array
  - ECMAScript 2015
  - Iterator
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Array/keys
---
{{JSRef}}

**`keys()`** 메서드는 배열의 각 인덱스를 키 값으로 가지는 새로운 **`Array Iterator`** 객체를 반환합니다.

{{EmbedInteractiveExample("pages/js/array-keys.html")}}

## 구문

```js
    arr.keys()
```

### 반환 값

새로운 {{jsxref("Array")}} 반복기 객체.

## 예제

### 키 반복기는 빈 인덱스를 무시하지 않음

```js
var arr = ['a', , 'c'];
var sparseKeys = Object.keys(arr);
var denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys);  // [0, 1, 2]
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Array.prototype.values()")}}
- {{jsxref("Array.prototype.entries()")}}
