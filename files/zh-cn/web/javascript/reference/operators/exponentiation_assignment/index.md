---
title: 幂赋值（**=）
slug: Web/JavaScript/Reference/Operators/Exponentiation_assignment
---

{{jsSidebar("Operators")}}

**幂赋值**（**`**=`**）运算符将左侧变量的值设置为右操作数的幂次方。

{{EmbedInteractiveExample("pages/js/expressions-exponentiation-assignment.html")}}

## 语法

```js-nolint
x **= y // x = x ** y
```

## 示例

### 使用幂赋值

```js
let bar = 5;

bar **= 2; // 25
bar **= "foo"; // NaN
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [JS 指南中的赋值运算符](/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#赋值运算符)
- [幂运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Exponentiation)
