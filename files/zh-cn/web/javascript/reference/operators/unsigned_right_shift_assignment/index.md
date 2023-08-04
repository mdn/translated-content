---
title: 无符号右移赋值（>>>=）
slug: Web/JavaScript/Reference/Operators/Unsigned_right_shift_assignment
---

{{jsSidebar("Operators")}}

**无符号右移赋值**（**`>>>=`**）运算符向右移动移动指定（二进制）位数，并将结果赋值给变量。

{{EmbedInteractiveExample("pages/js/expressions-unsigned-right-shift-assignment.html")}}

## 语法

```js-nolint
x >>>= y // x = x >>> y
```

## 示例

### 使用无符号右移位赋值

```js
let a = 5; //   (00000000000000000000000000000101)
a >>>= 2; // 1 (00000000000000000000000000000001)

let b = -5; // (-00000000000000000000000000000101)
b >>>= 2; // 1073741822 (00111111111111111111111111111110)
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [JS 指南中的赋值运算符](/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#赋值运算符)
- [无符号右移位运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift)
