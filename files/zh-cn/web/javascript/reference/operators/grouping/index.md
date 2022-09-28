---
title: 圆括号运算符
slug: Web/JavaScript/Reference/Operators/Grouping
---

{{jsSidebar("Operators")}}

圆括号运算符 `( )` 用于控制表达式中的运算优先级。

{{EmbedInteractiveExample("pages/js/expressions-groupingoperator.html")}}

## 语法

译者：下列语法是 MDN 上已知的最简单的之一。

```plain
 ( )
```

## 说明

圆括号运算符由一对圆括号组成，包裹表达式和子表达式用来覆盖常规的[运算符优先级](/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)，达到低优先级的表达式比高优先级的表达式更早运算。

## 示例

下面的代码展示了加法运算先于乘法运算的情况。

```js
var a = 1;
var b = 2;
var c = 3;

// default precedence
a + b * c     // 7
// evaluated by default like this
a + (b * c)   // 7

// now overriding precedence
// addition before multiplication
(a + b) * c   // 9

// which is equivalent to
a * c + b * c // 9
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [运算符优先级](/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Operators/typeof", "typeof")}}
