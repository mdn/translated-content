---
title: Array.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Array/toString
---

{{JSRef}}

**`toString()`** 方法返回一个字符串，表示指定的数组及其元素。

{{EmbedInteractiveExample("pages/js/array-tostring.html","shorter")}}

## 语法

```js
toString()
```

### 返回值

一个表示数组所有元素的字符串。

## 描述

{{jsxref("Array")}} 对象覆盖了 {{jsxref("Object")}} 的 `toString` 方法。对于数组对象，`toString` 方法在内部调用 [`join()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join) 方法拼接数组中的元素并返回一个字符串，其中包含用逗号分隔的每个数组元素。如果 `join` 方法不可用，或者它不是一个函数，将使用 [`Object.prototype.toString`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) 代替，返回 `[object Array]`。

```js
const arr = [];
arr.join = 1; // re-assign `join` with a non-function
console.log(arr.toString()); // Logs [object Array]

console.log(Array.prototype.toString.call({ join: () => 1 }));  // Logs 1
```

当一个数组被作为文本值或者进行字符串拼接操作时，将会自动调用其 `toString` 方法。

## 示例

### 使用 toString

```js
const array1 = [1, 2, 'a', '1a'];

console.log(array1.toString());
// expected output: "1,2,a,1a"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Array.prototype.join()")}}
