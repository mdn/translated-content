---
title: 除法赋值（/=）
slug: Web/JavaScript/Reference/Operators/Division_assignment
---

{{jsSidebar("Operators")}}

除法赋值操作符（`/=`）将变量除以右操作数的值，并将结果赋值给该变量。

{{EmbedInteractiveExample("pages/js/expressions-division-assignment.html")}}

## 语法

```js-nolint
x /= y // x = x / y
```

## 示例

### 使用除法赋值

```js
// 假设以下变量，并且所有操作都按顺序运行
//  bar = 5

bar /= 2     // 2.5
bar /= 2     // 1.25
bar /= 0     // Infinity
bar /= 'foo' // NaN
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [JS 指南中的赋值运算符](/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators#赋值运算符)
- [除法运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Division)
