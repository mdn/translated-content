---
title: 圆括号运算符
slug: Web/JavaScript/Reference/Operators/Grouping
---

{{jsSidebar("Operators")}}

圆括号运算符 `( )` 用于控制表达式中的运算优先级。

{{EmbedInteractiveExample("pages/js/expressions-groupingoperator.html")}}

## 语法

```js-nolint
(expression)
```

## 说明

圆括号运算符由一对圆括号组成，包裹表达式和子表达式用来覆盖常规的[运算符优先级](/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_precedence)，达到低优先级的表达式比高优先级的表达式更早运算。

## 示例

下面的代码展示了加法运算先于乘法运算的情况。

```js-nolint
const a = 1;
const b = 2;
const c = 3;

// 默认优先级
a + b * c; // 7
// 默认运算顺序同下
a + (b * c); // 7

// 现在优先考虑乘法之前的加法
(a + b) * c; // 9

// 这相当于
a * c + b * c; // 9
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [运算符优先级](/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Operators/typeof", "typeof")}}
