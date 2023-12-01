---
title: Math.floor()
slug: Web/JavaScript/Reference/Global_Objects/Math/floor
---

{{JSRef}}

**`Math.floor()`** 函数总是返回小于等于一个给定数字的最大整数。

{{EmbedInteractiveExample("pages/js/math-floor.html")}}

## 语法

```js-nolint
Math.floor(x)
```

### 参数

- `x`
  - : 一个数字。

### 返回值

小于等于 `x` 的最大整数。它的值与 [`-Math.ceil(-x)`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil) 相同。

## 描述

因为 `floor()` 是 `Math` 的静态方法，所以你应始终使用 `Math.floor()`，而不是作为你创建的 `Math` 对象的方法（`Math` 不是构造函数）。

## 示例

### 使用 Math.floor()

```js
Math.floor(-Infinity); // -Infinity
Math.floor(-45.95); // -46
Math.floor(-45.05); // -46
Math.floor(-0); // -0
Math.floor(0); // 0
Math.floor(4); //   4
Math.floor(45.05); //  45
Math.floor(45.95); //  45
Math.floor(Infinity); // Infinity
```

### 十进制调整

在本例中，我们实现了一个名为 `decimalAdjust()` 的方法，它是 `Math.floor()`、{{jsxref("Math.ceil()")}} 和 {{jsxref("Math.round()")}} 的增强方法。三个 `Math` 函数总是将输入调整为个位数，`decimalAdjust` 接受 `exp` 参数，该参数指定小数点左侧应该调整的位数。例如，`-1` 表示它将在小数点后留下一位数字（如 "× 10<sup>-1</sup>"）。此外，它还允许你通过 `type` 参数选择调整方式——`round`、`bottom` 或 `ceiling`。

它是这样做的：将数字乘以 10 的幂，然后四舍五入到最接近的整数，然后除以 10 的幂。为了更好地保持精度，它利用了数字的 [`toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) 方法，该方法使用科学记数法表示任意数字（如 `6.02e23`）。

```js
/**
 * Adjusts a number to the specified digit.
 *
 * @param {"round" | "floor" | "ceil"} type The type of adjustment.
 * @param {number} value The number.
 * @param {number} exp The exponent (the 10 logarithm of the adjustment base).
 * @returns {number} The adjusted value.
 */
function decimalAdjust(type, value, exp) {
  type = String(type);
  if (!["round", "floor", "ceil"].includes(type)) {
    throw new TypeError(
      "The type of decimal adjustment must be one of 'round', 'floor', or 'ceil'.",
    );
  }
  exp = Number(exp);
  value = Number(value);
  if (exp % 1 !== 0 || Number.isNaN(value)) {
    return NaN;
  } else if (exp === 0) {
    return Math[type](value);
  }
  const [magnitude, exponent = 0] = value.toString().split("e");
  const adjustedValue = Math[type](`${magnitude}e${exponent - exp}`);
  // Shift back
  const [newMagnitude, newExponent = 0] = adjustedValue.toString().split("e");
  return Number(`${newMagnitude}e${+newExponent + exp}`);
}

// Decimal round
const round10 = (value, exp) => decimalAdjust("round", value, exp);
// Decimal floor
const floor10 = (value, exp) => decimalAdjust("floor", value, exp);
// Decimal ceil
const ceil10 = (value, exp) => decimalAdjust("ceil", value, exp);

// Round
round10(55.55, -1); // 55.6
round10(55.549, -1); // 55.5
round10(55, 1); // 60
round10(54.9, 1); // 50
round10(-55.55, -1); // -55.5
round10(-55.551, -1); // -55.6
round10(-55, 1); // -50
round10(-55.1, 1); // -60
// Floor
floor10(55.59, -1); // 55.5
floor10(59, 1); // 50
floor10(-55.51, -1); // -55.6
floor10(-51, 1); // -60
// Ceil
ceil10(55.51, -1); // 55.6
ceil10(51, 1); // 60
ceil10(-55.59, -1); // -55.5
ceil10(-59, 1); // -50
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Math.abs()")}}
- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.sign()")}}
- {{jsxref("Math.trunc()")}}
