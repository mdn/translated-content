---
title: 左移赋值（<<=）
slug: Web/JavaScript/Reference/Operators/Left_shift_assignment
---

{{jsSidebar("Operators")}}

左移赋值运算符（`<<=`）将变量向左移动指定的位数，并将结果赋值给变量。

{{EmbedInteractiveExample("pages/js/expressions-left-shift-assignment.html", "shorter")}}

## 语法

```js-nolint
x <<= y // x = x << y
```

## 示例

### 使用左移赋值

```js
let a = 5;
// 00000000000000000000000000000101

a <<= 2; // 20
// 00000000000000000000000000010100
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- [JS 指南中的赋值运算符](/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators#赋值运算符)
- [左移运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Left_shift)
