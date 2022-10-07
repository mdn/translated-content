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

## 설명

[sparse arrays](/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) 처럼, `keys()` 메서드는 `undefined` 값이 있는 것처럼 빈 슬롯을 순회합니다.

## 예제

### 키 반복기는 빈 인덱스를 무시하지 않음

배열에 실제로 존재하는 키 값만을 포함하는 {{jsxref("Object.keys()")}} 와 달리, `keys()` 반복기는 누락된 속성이 나타나는 빈 공간을 무시하지 않습니다.

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
