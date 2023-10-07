---
title: 右移赋值（>>=）
slug: Web/JavaScript/Reference/Operators/Right_shift_assignment
---

{{jsSidebar("Operators")}}

右移赋值运算符（`>>=`）将变量向右移动指定的位数，并将结果赋值给变量。

{{EmbedInteractiveExample("pages/js/expressions-right-shift-assignment.html")}}

## 语法

```js-nolint
x >>= y // x = x >> y
```

## 示例

### 使用右移赋值

```js
let a = 5; //   (00000000000000000000000000000101)
a >>= 2; // 1 (00000000000000000000000000000001)

let b = -5; //  (-00000000000000000000000000000101)
b >>= 2; // -2 (-00000000000000000000000000000010)
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- [JS 指南中的赋值运算符](/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#赋值运算符)
- [右移运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Right_shift)
