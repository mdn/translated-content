---
title: 幂赋值（**=）
slug: Web/JavaScript/Reference/Operators/Exponentiation_assignment
l10n:
  sourceCommit: 145e8c316fcdd8f67f3595fc52b0bbfacf7b949d
---

{{jsSidebar("Operators")}}

**幂赋值**（**`**=`**）对两个操作数执行[幂运算](/zh-CN/docs/Web/JavaScript/Reference/Operators/Exponentiation)，并将结果赋给左操作数。

{{InteractiveExample("JavaScript Demo: Expressions - Exponentiation assignment operator")}}

```js interactive-example
let a = 3;

console.log((a **= 2));
// Expected output: 9

console.log((a **= 0));
// Expected output: 1

console.log((a **= 'hello'));
// Expected output: NaN
```

## 语法

```js-nolint
x **= y
```

## 描述

`x **= y` 和 `x = x ** y` 是等价的，不同之处在于前者的 `x` 只被计算一次。

## 示例

### 使用数字进行幂赋值

```js
let bar = 5;
bar **= 2; // 25
```

其他非 BigInt 值会被强制转换为数字：

```js
let baz = 5;
baz **= "foo"; // NaN
```

### 使用 BigInt 进行幂赋值

```js
let foo = 3n;
foo **= 2n; // 9n
foo **= 1; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [JS 指南中的赋值运算符](/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#赋值运算符)
- [幂运算符（`**`）](/zh-CN/docs/Web/JavaScript/Reference/Operators/Exponentiation)
