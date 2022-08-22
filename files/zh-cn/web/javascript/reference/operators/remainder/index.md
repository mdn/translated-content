---
title: 取余 (%)
slug: Web/JavaScript/Reference/Operators/Remainder
original_slug: Web/JavaScript/Reference/Operators/取余
---
{{jsSidebar("Operators")}}

当一个操作数除以第二个操作数时，取余运算符（％）返回剩余的余数。它与被除数的符号保持一致。

{{EmbedInteractiveExample("pages/js/expressions-remainder.html")}}

## 语法

```plain
Operator: var1 % var2
```

## 示例

### 被除数为正数

```js
 12 % 5  //  2
 1 % -2 //  1
 1 % 2  //  1
 2 % 3  //  2
5.5 % 2 // 1.5
```

### 被除数为负数

```js
-12 % 5 // -2
-1 % 2  // -1
-4 % 2  // -0
```

### 被除数为 NaN

```js
NaN % 2 // NaN
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [Addition operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition)
- [Subtraction operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [Division operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Division)
- [Multiplication operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [Exponentiation operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Increment operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment)
- [Decrement operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unary negation operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unary plus operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus)
