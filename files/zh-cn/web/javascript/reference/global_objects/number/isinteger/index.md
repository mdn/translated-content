---
title: Number.isInteger()
slug: Web/JavaScript/Reference/Global_Objects/Number/isInteger
---

{{JSRef}}

**`Number.isInteger()`** 静态方法判断传入值是否为整数。

{{InteractiveExample("JavaScript Demo: Number.isInteger()")}}

```js interactive-example
function fits(x, y) {
  if (Number.isInteger(y / x)) {
    return "Fits!";
  }
  return "Does NOT fit!";
}

console.log(fits(5, 10));
// Expected output: "Fits!"

console.log(fits(5, 11));
// Expected output: "Does NOT fit!"
```

## 语法

```js-nolint
Number.isInteger(value)
```

### 参数

- `value`
  - : 要测试是否为整数的值。

### 返回值

如果给定值是整数，则返回布尔值 `true`。否则为 `false`。

## 描述

如果目标值是一个整数，返回 `true`，否则返回 `false`。如果该值是 {{jsxref("NaN")}} 或者 {{jsxref("Infinity")}}，返回 `false`。对于可以表示为整数的浮点数，该方法也将返回 `true`。如果该值不是一个数字，该方法将始终返回 `false`。

请注意，一些数字字面量看起来像是非整数，但实际上却表示整数。这是由于 ECMAScript 浮点数编码（IEEE-754）的精度限制。例如，`5.0000000000000001` 只与 `5` 相差 `1e-16`，这个差值太小了而无法表示。（作为参考，[`Number.EPSILON`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON) 存储 1 与大于 1 的下一个可表示的浮点数之间的距离，大约为 `2.22e-16`。）因此，`5.0000000000000001` 将使用与 `5` 相同的编码表示，从而使得 `Number.isInteger(5.0000000000000001)` 返回 `true`。

在类似的意义上，接近 [`Number.MAX_SAFE_INTEGER`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) 大小的数值会因精度损失而使得 `Number.isInteger` 在传入值实际上不是整数的情况下返回 `true`。（实际阈值根据需要表示小数所需的位数而变化——例如，`Number.isInteger(4500000000000000.1)` 为 `true`，但 `Number.isInteger(4500000000000000.5)` 为 `false`。）

## 示例

### 使用 isInteger

```js
Number.isInteger(0); // true
Number.isInteger(1); // true
Number.isInteger(-100000); // true
Number.isInteger(99999999999999999999999); // true

Number.isInteger(0.1); // false
Number.isInteger(Math.PI); // false

Number.isInteger(NaN); // false
Number.isInteger(Infinity); // false
Number.isInteger(-Infinity); // false
Number.isInteger("10"); // false
Number.isInteger(true); // false
Number.isInteger(false); // false
Number.isInteger([1]); // false

Number.isInteger(5.0); // true
Number.isInteger(5.000000000000001); // false
Number.isInteger(5.0000000000000001); // true，因为精度损失
Number.isInteger(4500000000000000.1); // true，因为精度损失
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Number.isInteger` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("Number")}}
