---
title: Unsigned right shift assignment (>>>=)
slug: Web/JavaScript/Reference/Operators/Unsigned_right_shift_assignment
---

{{jsSidebar("Operators")}}

The unsigned right shift assignment operator (_`>>>=`_) moves the specified amount of bits to the right and assigns the result to the variable.

{{EmbedInteractiveExample("pages/js/expressions-unsigned-right-shift-assignment.html")}}

## 语法

```plain
Operator: x >>>= y
Meaning:  x    = x >>> y
```

## 例子

### Using unsigned right shift assignment

```js
let a = 5; //   (00000000000000000000000000000101)
a >>>= 2;  // 1 (00000000000000000000000000000001)

let b = -5; // (-00000000000000000000000000000101)
b >>>= 2;   // 1073741822 (00111111111111111111111111111110)
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Assignment operators in the JS guide](/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators#Assignment)
- [Unsigned right shift operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift)
