---
title: Number.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Number/toString
---

{{jsxref("Number")}} 值的 **`toString()`** 方法返回表示该数字值的字符串。

{{InteractiveExample("JavaScript Demo: Number.toString()")}}

```js interactive-example
function hexColour(c) {
  if (c < 256) {
    return Math.abs(c).toString(16);
  }
  return 0;
}

console.log(hexColour(233));
// Expected output: "e9"

console.log(hexColour("11"));
// Expected output: "b"
```

## 语法

```js-nolint
toString()
toString(radix)
```

### 参数

- `radix` {{optional_inline}}
  - : 一个整数，范围在 `2` 到 `36` 之间，用于指定表示数字值的基数。默认为 10。

### 返回值

一个表示指定数字值的字符串。

### 异常

- {{jsxref("RangeError")}}
  - : 如果 `radix` 小于 2 或大于 36，则抛出该异常。

## 描述

{{jsxref("Number")}} 对象的重写了 {{jsxref("Object")}} 的 `toString` 方法；它不会继承 {{jsxref("Object.prototype.toString()")}}。对于 `Number` 值，`toString` 方法返回数字值指定基数的字符串表示。

对于 10 以上的基数，字母表示大于 9 的数字。例如，对于十六进制数（基数为 16），`a` 到 `f` 用于表示大于 9 的数字。

如果指定的值为负数，则符号会被保留。即使基数为 2，也是如此；返回的字符串是带有 `-` 符号的正数二进制表示，而**不是**数字值的补码表示。

`0` 和 `-0` 都以 `"0"` 作为其字符串表示。{{jsxref("Infinity")}} 返回 `"Infinity"`，而 {{jsxref("NaN")}} 返回 `"NaN"`。

如果该数字不是一个整数，则使用小数点 `.` 来分隔小数部分。如果基数为 10，并且数字的大小（忽略符号）大于或等于 10<sup>21</sup> 或小于 10<sup>-6</sup>，则使用[科学计数法](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#指数)。在这种情况下，返回的字符串总是显式地指定了指数的符号。

```js
console.log((10 ** 21.5).toString()); // "3.1622776601683794e+21"
console.log((10 ** 21.5).toString(8)); // "526665530627250154000000"
```

`toString` 方法要求 `this` 值是 `Number` 原始值或包装对象。对于其他 `this` 值，不会尝试将它们转换为数字值，而是抛出 {{jsxref("TypeError")}}。

因为 `Number` 没有 [`[Symbol.toPrimitive]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) 方法，当一个 `Number` *对象*在一个期望字符串的上下文中使用时（比如在[模板字符串](/zh-CN/docs/Web/JavaScript/Reference/Template_literals)中），JavaScript 会自动调用 `toString()` 方法。然而，`Number` *原始值*不会使用 `toString()` 方法来进行[字符串强制转换](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#字符串强制转换)——相反，它们会直接使用与 `toString()` 初始实现的相同算法进行转换。

```js
Number.prototype.toString = () => "重写了";
console.log(`${1}`); // "1"
console.log(`${new Number(1)}`); // "重写了"
```

## 示例

### 使用 toString()

```js
const count = 10;
console.log(count.toString()); // "10"

console.log((17).toString()); // "17"
console.log((17.2).toString()); // "17.2"

const x = 6;
console.log(x.toString(2)); // "110"
console.log((254).toString(16)); // "fe"
console.log((-10).toString(2)); // "-1010"
console.log((-0xff).toString(2)); // "-11111111"
```

### 转换数字字符串的基数

如果你有一个非十进制的数字的字符串，可以使用 [`parseInt()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt) 和 `toString()` 将其转换为不同的基数。

```js
const hex = "CAFEBABE";
const bin = parseInt(hex, 16).toString(2); // "11001010111111101011101010111110"
```

注意精度损失：如果原始数字字符串太大（比如大于 [`Number.MAX_SAFE_INTEGER`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) ），则应使用 [`BigInt`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) 来替代。然而，`BigInt` 的构造函数仅支持表示数字字面量的字符串（即以 `0b`、`0o` 或 `0x` 开头的字符串）。如果原始基数不是二进制、八进制、十进制或十六进制，则可能需要手工编写基数转换器，或者使用库。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
