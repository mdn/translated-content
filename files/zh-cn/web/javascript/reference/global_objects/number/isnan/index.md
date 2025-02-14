---
title: Number.isNaN()
slug: Web/JavaScript/Reference/Global_Objects/Number/isNaN
---

{{JSRef}}

**`Number.isNaN()`** 静态方法判断传入的值是否为 {{jsxref("NaN")}}，如果输入不是数字类型，则返回 `false`。它是全局 {{jsxref("isNaN()")}} 函数更健壮的版本。

{{InteractiveExample("JavaScript Demo: Number.isNaN()", "taller")}}

```js interactive-example
function typeOfNaN(x) {
  if (Number.isNaN(x)) {
    return "Number NaN";
  }
  if (isNaN(x)) {
    return "NaN";
  }
}

console.log(typeOfNaN("100F"));
// Expected output: "NaN"

console.log(typeOfNaN(NaN));
// Expected output: "Number NaN"
```

## 语法

```js-nolint
Number.isNaN(value)
```

### 参数

- `value`
  - : 要测试是否为 {{jsxref("NaN")}} 的值。

### 返回值

如果给定值是一个值为 {{jsxref("NaN")}} 的数字，则返回布尔值 `true`，否则返回 `false`。

## 描述

函数 `Number.isNaN()` 提供了一种方便的方法来检查值是否与 `NaN` 相等。请注意，你不能使用 [`==`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Equality) 或 [`===`](/zh-CN/docs/Web/JavaScript/Reference/Operators/Strict_equality) 运算符来测试值与 `NaN` 的相等性，因为与 JavaScript 中的其他值的比较不同，这些运算符在一个操作数为 {{jsxref("NaN")}} 时始终返回 `false`，即使另一个操作数也是 {{jsxref("NaN")}}。

由于在所有可能的 JavaScript 值中，`x !== x` 只有对于 `NaN` 才为真，因此 `Number.isNaN(x)` 也可以替换为 `x !== x`，尽管后者可读性较差。

与全局的 {{jsxref("isNaN", "isNaN()")}} 函数相反，`Number.isNaN()` 方法不会将参数强制转换为数字。这样可以安全地传入通常会转换为 {{jsxref("NaN")}} 但实际上与 {{jsxref("NaN")}} 不同的值。这也意味着只有等于 {{jsxref("NaN")}} 的 Number 类型的值才会返回 `true`。

## 示例

### 使用 isNaN()

```js
Number.isNaN(NaN); // true
Number.isNaN(Number.NaN); // true
Number.isNaN(0 / 0); // true
Number.isNaN(37); // false
```

### Number.isNaN() 和全局 isNaN() 之间的区别

`Number.isNaN()` 不会尝试将参数转换为数字，因此非数字总是返回 `false`。以下都返回 `false`：

```js
Number.isNaN("NaN");
Number.isNaN(undefined);
Number.isNaN({});
Number.isNaN("blabla");
Number.isNaN(true);
Number.isNaN(null);
Number.isNaN("37");
Number.isNaN("37.37");
Number.isNaN("");
Number.isNaN(" ");
```

全局 {{jsxref("isNaN", "isNaN()")}} 函数会将参数强制转换为数字：

```js
isNaN("NaN"); // true
isNaN(undefined); // true
isNaN({}); // true
isNaN("blabla"); // true
isNaN(true); // false，强制转换为 1
isNaN(null); // false，强制转换为 0
isNaN("37"); // false，强制转换为 37
isNaN("37.37"); // false，强制转换为 37.37
isNaN(""); // false，强制转换为 0
isNaN(" "); // false，强制转换为 0
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Number.isNaN` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("Number")}}
- {{jsxref("isNaN", "isNaN()")}}
