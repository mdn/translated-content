---
title: 取余赋值（%=）
slug: Web/JavaScript/Reference/Operators/Remainder_assignment
---

{{jsSidebar("Operators")}}

**取余赋值**（**`%=`**）运算符将变量除以右操作数的值，并将余数赋值给该变量。

{{EmbedInteractiveExample("pages/js/expressions-remainder-assignment.html")}}

## 语法

```js-nolint
x %= y // x = x % y
```

## 示例

### 使用取余赋值

```js
let bar = 5;

bar %= 2; // 1
bar %= "foo"; // NaN
bar %= 0; // NaN
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [JS 指南中的赋值运算符](/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#赋值运算符)
- [取余运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Remainder)
