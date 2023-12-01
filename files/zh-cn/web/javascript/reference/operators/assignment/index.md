---
title: 赋值（=）
slug: Web/JavaScript/Reference/Operators/Assignment
---

{{jsSidebar("Operators")}}

简单赋值运算符（`=`）用于给变量赋值。赋值表达式本身的值为要赋值的值。为了将一个值赋给多个变量，可以链式使用赋值运算符。

{{EmbedInteractiveExample("pages/js/expressions-assignment.html")}}

## 语法

```js-nolint
x = y
```

## 示例

### 简单赋值和链式赋值

```js
// 假设已经存在以下变量
//  x = 5
//  y = 10
//  z = 25

x = y; // x 为 10
x = y = z; // x, y 都为 25
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [JS 指南中的赋值运算符](/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#赋值运算符)
