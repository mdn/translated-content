---
title: Math.max()
slug: Web/JavaScript/Reference/Global_Objects/Math/max
---
{{JSRef}}

**`Math.max()`** 函数返回一组数中的最大值。

{{EmbedInteractiveExample("pages/js/math-max.html")}}

## 语法

```plain
Math.max(value1[,value2, ...])
```

### 参数

- `value1, value2, ...`
  - : 一组数值

### 返回值

返回给定的一组数字中的最大值。如果给定的参数中至少有一个参数无法被转换成数字，则会返回 {{jsxref("NaN")}}。

## 描述

由于 `max` 是 `Math` 的静态方法，所以应该像这样使用：`Math.max()`，而不是创建的 `Math` 实例的方法（`Math` 不是构造函数）。

如果没有参数，则结果为 - {{jsxref("Infinity")}}。

如果有任一参数不能被转换为数值，则结果为 {{jsxref("NaN")}}。

## 示例

### 使用 `Math.max()`

```plain
Math.max(10, 20);   //  20
Math.max(-10, -20); // -10
Math.max(-10, 20);  //  20
```

下面的方法使用 {{jsxref("Global_Objects/Function/apply", "apply")}} 方法寻找一个数值数组中的最大元素。`getMaxOfArray([1,2,3])` 等价于 `Math.max(1, 2, 3)`，但是你可以使用 `getMaxOfArray()` 作用于任意长度的数组上。

```js
function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}
```

或者通过使用最新的扩展语句{{jsxref("Operators/Spread_operator", "spread operator")}}，获得数组中的最大值变得更容易。

```js
var arr = [1, 2, 3];
var max = Math.max(...arr);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Math.min()")}}
