---
title: arguments.length
slug: Web/JavaScript/Reference/Functions/arguments/length
---

{{jsSidebar("Functions")}}

本次函数调用时传入函数的实参数量。

## Syntax

```plain
arguments.length
```

## 描述

arguments.length 表示的是实际上向函数传入了多少个参数，这个数字可以比形参数量大，也可以比形参数量小 (形参数量的值可以通过[Function.length](/zh-CN/docs/JavaScript/Reference/Global_Objects/Function/length)获取到).

## 示例

### 示例：使用`arguments.length`

这个例中，我们定义了一个可以相加任意个数字的函数。

```js
function adder(base /*, n2, ... */) {
  base = Number(base);
  for (var i = 0; i < arguments.length; i++) {
    base += Number(arguments[i]);
  }
  return base;
}
```

## Specifications

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [Function.length](/zh-CN/docs/JavaScript/Reference/Global_Objects/Function/length)
