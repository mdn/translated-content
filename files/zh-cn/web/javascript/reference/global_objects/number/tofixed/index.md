---
title: Number.prototype.toFixed()
slug: Web/JavaScript/Reference/Global_Objects/Number/toFixed
---

{{jsxref("Number")}} 值的 **`toFixed()`** 方法使用定点表示法来格式化该数值。

{{InteractiveExample("JavaScript Demo: Number.toFixed()")}}

```js interactive-example
function financial(x) {
  return Number.parseFloat(x).toFixed(2);
}

console.log(financial(123.456));
// Expected output: "123.46"

console.log(financial(0.004));
// Expected output: "0.00"

console.log(financial("1.23e+5"));
// Expected output: "123000.00"
```

## 语法

```js-nolint
toFixed()
toFixed(digits)
```

### 参数

- `digits` {{optional_inline}}
  - : 小数点后的位数。应该是一个介于 `0` 和 `100` 之间的值，包括 `0` 和 `100`。如果这个参数被省略，则被视为 `0`。

### 返回值

使用定点表示法表示给定数字的字符串。

### 异常

- {{jsxref("RangeError")}}
  - : 如果 `digits` 不是介于 `0` 和 `100` 之间（含两端）的值，则抛出该异常。
- {{jsxref("TypeError")}}
  - : 如果不是在 {{jsxref("Number")}} 上调用该方法，则抛出该异常。

## 描述

`toFixed()` 方法返回一个表示 `numObj` 的字符串，但不使用指数计数法，并且小数点后有精确到 `digits` 位的数字。如果需要截断，则将数字四舍五入；如果小数位数不足，则小数部分用零填充，以使其具有指定长度。

如果 `numObj` 的绝对值大于或等于 10<sup>21</sup>，则该方法使用与 {{jsxref("Number.prototype.toString()")}} 相同的算法，并以指数计数法返回字符串。如果 `numObj` 的值不是有限的，则 `toFixed()` 会返回 `"Infinity"`、`"NaN"` 或 `"-Infinity"`。

`toFixed()` 对于某些值可能具有比 [`toString`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) 更加精确的输出，因为 `toString()` 只输出足够的有效数字来区分该数值与邻近的数值。例如：

```js
(1000000000000000128).toString(); // '1000000000000000100'
(1000000000000000128).toFixed(0); // '1000000000000000128'
```

然而，选择一个过高的 `digits` 精度会导致意外的结果，因为小数部分的数字不能精确地表示成浮点数。例如：

```js
(0.3).toFixed(50); // '0.29999999999999998889776975374843459576368331909180'
```

## 示例

### 使用 toFixed()

```js
const numObj = 12345.6789;

numObj.toFixed(); // '12346'；四舍五入，没有小数部分
numObj.toFixed(1); // '12345.7'；向上舍入
numObj.toFixed(6); // '12345.678900'；用零补足位数
(1.23e20).toFixed(2); // '123000000000000000000.00'
(1.23e-10).toFixed(2); // '0.00'
(2.34).toFixed(1); // '2.3'
(2.35).toFixed(1); // '2.4'；向上舍入
(2.55).toFixed(1); // '2.5'
// 它向下舍入，因为它无法用浮点数精确表示，并且最接近的可表示浮点数较小
(2.449999999999999999).toFixed(1); // '2.5'
// 向上舍入，因为它与 2.45 的差值小于 Number.EPSILON。
// 这个字面量实际上编码和 2.45 相同的数值

(6.02 * 10 ** 23).toFixed(50); // 6.019999999999999e+23；大数仍然使用指数表示法
```

### 对负数使用 toFixed()

由于成员访问的[优先级](/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_precedence)高于一元减号，你需要将负数表达式组合以获得一个字符串。

```js-nolint
-2.34.toFixed(1); // -2.3，数字
(-2.34).toFixed(1); // '-2.3'
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
- {{jsxref("Number.prototype.toString()")}}
- {{jsxref("Number.EPSILON")}}
