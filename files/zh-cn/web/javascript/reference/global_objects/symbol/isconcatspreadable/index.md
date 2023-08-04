---
title: Symbol.isConcatSpreadable
slug: Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable
---

{{JSRef}}

内置的**`Symbol.isConcatSpreadable`**`符号用于配置某对象作为`{{jsxref("Array.prototype.concat()")}}方法的参数时是否展开其数组元素。

{{EmbedInteractiveExample("pages/js/symbol-isconcatspreadable.html")}}

## 描述

`@@isConcatSpreadable` 符号 (`Symbol.isConcatSpreadable`) 可以直接定义为对象属性或继承而来，它是布尔类型。它可以控制数组或类似数组（array-like）的对象的行为：

- 对于数组对象，默认情况下，用于 concat 时，会按数组元素展开然后进行连接（数组元素作为新数组的元素）。重置`Symbol.isConcatSpreadable`可以改变默认行为。
- 对于类似数组的对象，用于 concat 时，该对象整体作为新数组的元素，重置`Symbol.isConcatSpreadable`可改变默认行为。

{{js_property_attributes(0,0,0)}}

## 示例

### 数组

默认情况下，{{jsxref("Array.prototype.concat()")}} 展开其元素连接到结果中：

```js
var alpha = ["a", "b", "c"],
  numeric = [1, 2, 3];

var alphaNumeric = alpha.concat(numeric);

console.log(alphaNumeric); // 结果：['a', 'b', 'c', 1, 2, 3]
```

设置`Symbol.isConcatSpreadable`为`false`：

```js
var alpha = ["a", "b", "c"],
  numeric = [1, 2, 3];

numeric[Symbol.isConcatSpreadable] = false;
var alphaNumeric = alpha.concat(numeric);

console.log(alphaNumeric); // 结果：['a', 'b', 'c', [1, 2, 3] ]
```

### Array-like 对象

对于类数组 (array-like) 对象，默认不展开。期望展开其元素用于连接，需要设置 `Symbol.isConcatSpreadable` 为 true：

```js
var x = [1, 2, 3];

var fakeArray = {
  [Symbol.isConcatSpreadable]: true,
  length: 2,
  0: "hello",
  1: "world",
};

x.concat(fakeArray); // [1, 2, 3, "hello", "world"]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- {{jsxref("Array.prototype.concat()")}}
