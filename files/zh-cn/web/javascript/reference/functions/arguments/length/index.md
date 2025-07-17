---
title: arguments.length
slug: Web/JavaScript/Reference/Functions/arguments/length
l10n:
  sourceCommit: c6f0f106b9083984dbf597678def6561729bb459
---

**`arguments.length`** 数据属性包含传递给函数的参数数量。

## 值

一个非负整数。

{{js_property_attributes(1, 0, 1)}}

## 描述

`arguments.length` 属性提供了实际传递给函数的参数数量。传递的参数数量可能多于或少于定义的参数数量（参见 {{jsxref("Function.prototype.length")}}）。例如下面的函数：

```js
function func1(a, b, c) {
  console.log(arguments.length);
}
```

`func1.length` 返回 `3`，因为 `func1` 声明了三个形式参数。然而，`func1(1, 2, 3, 4, 5)` 会记录 `5`，因为 `func1` 被调用时传递了五个参数。同样地，`func1(1)` 会记录 `1`，因为 `func1` 被调用时传递了一个参数。

## 示例

### 使用 arguments.length

在此示例中，我们定义了一个可以将两个或多个数字相加的函数。

```js
function adder(base /*, num1, …, numN */) {
  base = Number(base);
  for (let i = 1; i < arguments.length; i++) {
    base += Number(arguments[i]);
  }
  return base;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [函数](/zh-CN/docs/Web/JavaScript/Guide/Functions)指南
- [函数](/zh-CN/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("Functions/arguments", "arguments")}}
- [`Function`：`length`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/length)
