---
title: Number.prototype.toFixed()
slug: Web/JavaScript/Reference/Global_Objects/Number/toFixed
---

{{JSRef}}

**`toFixed()`** 方法使用定点表示法来格式化一个数值。

{{EmbedInteractiveExample("pages/js/number-tofixed.html")}}

## 语法

```plain
numObj.toFixed(digits)
```

### 参数

- digits
  - : 小数点后数字的个数；介于 0 到 20（包括）之间，实现环境可能支持更大范围。如果忽略该参数，则默认为 0。

### 返回值

使用定点表示法表示给定数字的字符串。

### 抛出异常

- {{jsxref("RangeError")}}
  - : 如果 _digits_ 参数太小或太大。0 到 20（包括）之间的值不会引起 {{jsxref("RangeError")}}。实现环境（implementations）也可以支持更大或更小的值。
- {{jsxref("TypeError")}}
  - : 如果该方法在一个非{{jsxref( "Number")}}类型的对象上调用。

## 描述

一个数值的字符串表现形式，不使用指数记数法，而是在小数点后有 digits（注：digits 具体值取决于传入参数）位数字。该数值在必要时进行四舍五入，另外在必要时会用 0 来填充小数部分，以便小数部分有指定的位数。如果数值大于 1e+21，该方法会简单调用 {{jsxref("Number.prototype.toString()")}}并返回一个指数记数法格式的字符串。

> **警告：** 浮点数不能精确地用二进制表示所有小数。这可能会导致意外的结果，例如 `0.1 + 0.2 === 0.3` 返回 `false` .

## 示例

### 使用 `toFixed`

```js
var numObj = 12345.6789;

numObj.toFixed(); // 返回 "12346"：进行四舍六入五看情况，不包括小数部分
numObj.toFixed(1); // 返回 "12345.7"：进行四舍六入五看情况

numObj.toFixed(6); // 返回 "12345.678900"：用 0 填充

(1.23e20).toFixed(2); // 返回 "123000000000000000000.00"

(1.23e-10).toFixed(2); // 返回 "0.00"

(2.34).toFixed(1); // 返回 "2.3"

(2.35).toFixed(1); // 返回 '2.4'. Note it rounds up

(2.55).toFixed(1) - // 返回 '2.5'. Note it rounds down - see warning above
  (2.34).toFixed(1); // 返回 -2.3（由于操作符优先级，负数不会返回字符串）

(-2.34).toFixed(1); // 返回 "-2.3"（若用括号提高优先级，则返回字符串）
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
- {{jsxref("Number.prototype.toString()")}}
