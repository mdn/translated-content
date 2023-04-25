---
title: Array.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Array/toString
---

{{JSRef}}

**`toString()`** 方法返回一个字符串，表示指定的数组及其元素。

{{EmbedInteractiveExample("pages/js/array-tostring.html","shorter")}}

## 语法

```js-nolint
toString()
```

### 返回值

一个表示数组元素的字符串。

## 描述

{{jsxref("Array")}} 对象会覆盖 {{jsxref("Object")}} 的 `toString` 方法。数组的 `toString` 方法在内部调用 [`join()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join)，它连接数组并返回一个字符串，其中包含以逗号分隔的每个数组元素。如果 `join` 方法不可用或者不是函数，将会使用 [`Object.prototype.toString`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) 来代替, 并返回 `[object Array]`。

```js
const arr = [];
arr.join = 1; // 用非函数重新分配 `join`。
console.log(arr.toString()); // [object Array]

console.log(Array.prototype.toString.call({ join: () => 1 })); // 1
```

当一个数组被表示为文本值或一个数组被引用为字符串连接时，JavaScript会自动调用 `toString` 方法。

## 示例

### 使用 toString()

```js
const array1 = [1, 2, "a", "1a"];

console.log(array1.toString()); // "1,2,a,1a"
```

### 在稀疏数组中使用 toString()

遵循 `join()` 的行为，`toString()` 将空槽视为 `undefined` 并生成额外的分隔符：

```js
console.log([1, , 3].toString()); // '1,,3'
```

### 在非数组对象中使用 toString()

`toString()` 是 [通用的](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#通用数组方法)。它期望 `this` 具有 `join()` 方法；否则，使用 `Object.prototype.toString()` 来代替。

```js
console.log(Array.prototype.toString.call({ join: () => 1 }));
// 1; a number
console.log(Array.prototype.toString.call({ join: () => undefined }));
// undefined
console.log(Array.prototype.toString.call({ join: "not function" }));
// "[object Object]"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另请参阅

- [索引集合类](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.join()")}}
- {{jsxref("Array.prototype.toLocaleString()")}}
- {{jsxref("TypedArray.prototype.toString()")}}
- {{jsxref("String.prototype.toString()")}}
