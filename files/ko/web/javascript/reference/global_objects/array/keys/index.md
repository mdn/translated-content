---
title: Array.prototype.keys()
slug: Web/JavaScript/Reference/Global_Objects/Array/keys
---

{{JSRef}}

**`keys()`** 메서드는 배열의 각 인덱스를 키 값으로 가지는 새로운 **`Array Iterator`** 객체를 반환합니다.

{{EmbedInteractiveExample("pages/js/array-keys.html")}}

## 구문

```js
arr.keys();
```

### 반환 값

새로운 {{jsxref("Array")}} 반복기 객체.

## 설명

[Sparse arrays](/ko/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) 에 사용하면, `keys()` 메서드는 `undefined` 값이 있는 것처럼 빈 슬롯을 순회합니다.

`keys()` 메서드는 [generic](https://en.wikipedia.org/wiki/Generic_programming)합니다. `this` 값에 정수를 가지는 `length` 속성만 있어야 합니다.

## 예제

### Sparse Arrays에 keys() 사용하기

배열에 실제로 존재하는 키 값만을 포함하는 {{jsxref("Object.keys()")}} 와 달리, `keys()` 반복기는 누락된 속성이 나타나는 빈 공간을 무시하지 않습니다.

```js
var arr = ["a", , "c"];
var sparseKeys = Object.keys(arr);
var denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys); // [0, 1, 2]
```

### Calling keys() on non-array objects

`keys()` 메서드는 `this` 값에서 `length` 속성을 읽고 0과 `length - 1` 사이에 있는 모든 정수 인덱스를 생성합니다. 이 인덱스는 실제로 생기지 않습니다.

```js
const arrayLike = {
  length: 3,
};
for (const entry of Array.prototype.keys.call(arrayLike)) {
  console.log(entry);
}
// 0
// 1
// 2
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `Array.prototype.keys` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.values()")}}
- {{jsxref("Array.prototype.entries()")}}
- [Iteration protocols](/ko/docs/Web/JavaScript/Reference/Iteration_protocols)
- [A polyfill](https://github.com/tc39/proposal-object-getownpropertydescriptors)
