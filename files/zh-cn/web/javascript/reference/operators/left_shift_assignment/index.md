---
title: 左移赋值（<<=）
slug: Web/JavaScript/Reference/Operators/Left_shift_assignment
---

左移赋值运算符（`<<=`）将变量向左移动指定的位数，并将结果赋值给变量。

{{InteractiveExample("JavaScript Demo: Expressions - Left shift assignment operator", "shorter")}}

```js interactive-example
let a = 5; // 00000000000000000000000000000101

a <<= 2; // 00000000000000000000000000010100

console.log(a);
// Expected output: 20
```

## 语法

```js-nolint
x <<= y // x = x << y
```

## 示例

### 使用左移赋值

```js
let a = 5;
// 00000000000000000000000000000101

a <<= 2; // 20
// 00000000000000000000000000010100
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- [JS 指南中的赋值运算符](/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#赋值运算符)
- [左移运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Left_shift)
