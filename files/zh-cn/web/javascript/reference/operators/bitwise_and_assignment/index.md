---
title: 按位与赋值 (&=)
slug: Web/JavaScript/Reference/Operators/Bitwise_AND_assignment
---

{{jsSidebar("Operators")}}按位与赋值运算符（＆=）表示两个操作数的二进制，对它们进行按位 AND 运算并将结果分配给变量。{{EmbedInteractiveExample("pages/js/expressions-bitwise-and-assignment.html")}}

## 语法

```plain
Operator: x &= y
Meaning:  x  = x & y
```

## 例子

### 按位与赋值运算

```js
let a = 5;
// 5:     00000000000000000000000000000101
// 2:     00000000000000000000000000000010
a &= 2; // 0
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Assignment operators in the JS guide](/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators#Assignment)
- [Bitwise AND operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_AND)
