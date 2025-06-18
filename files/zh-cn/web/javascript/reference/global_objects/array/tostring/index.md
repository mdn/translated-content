---
title: Array.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Array/toString
---

{{JSRef}}

**`toString()`** 方法返回一个字符串，表示指定的数组及其元素。

{{InteractiveExample("JavaScript Demo: Array.toString()", "shorter")}}

```js interactive-example
const array1 = [1, 2, "a", "1a"];

console.log(array1.toString());
// Expected output: "1,2,a,1a"
```

## 语法

```js-nolint
toString()
```

### 返回值

一个表示数组元素的字符串。

## 描述

{{jsxref("Array")}} 对象覆盖了 {{jsxref("Object")}} 的 `toString` 方法。数组的 `toString` 方法实际上在内部调用了 [`join()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join) 方法来拼接数组并返回一个包含所有数组元素的字符串，元素之间用逗号分隔。如果 `join` 方法不可用或者不是函数，则会使用 [`Object.prototype.toString`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) 来代替，并返回 `[object Array]`。

```js
const arr = [];
arr.join = 1; // 将 `join` 重新赋值为非函数的值
console.log(arr.toString()); // [object Array]

console.log(Array.prototype.toString.call({ join: () => 1 })); // 1
```

当数组需要被表示为文本值，或者当数组在字符串拼接中被引用时，JavaScript 会自动调用 `toString()` 方法。

## 示例

### 使用 toString()

```js
const array1 = [1, 2, "a", "1a"];

console.log(array1.toString()); // "1,2,a,1a"
```

### 在稀疏数组中使用 toString()

与 `join()` 的行为一致，`toString()` 将空槽视为 `undefined` 并生成一个额外的分隔符：

```js
console.log([1, , 3].toString()); // '1,,3'
```

### 在非数组对象中使用 toString()

`toString()` 是[通用的](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#通用数组方法)。它期望 `this` 具有 `join()` 方法；如果不存在，则使用 `Object.prototype.toString()`。

```js
console.log(Array.prototype.toString.call({ join: () => 1 }));
// 1; 一个数字
console.log(Array.prototype.toString.call({ join: () => undefined }));
// undefined
console.log(Array.prototype.toString.call({ join: "not function" }));
// "[object Object]"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [索引集合](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.join()")}}
- {{jsxref("Array.prototype.toLocaleString()")}}
- {{jsxref("TypedArray.prototype.toString()")}}
- {{jsxref("String.prototype.toString()")}}
