---
title: Number.POSITIVE_INFINITY
slug: Web/JavaScript/Reference/Global_Objects/Number/POSITIVE_INFINITY
---

**`Number.POSITIVE_INFINITY`** 静态数据属性表示正无穷大值。

{{InteractiveExample("JavaScript Demo: Number.POSITIVE_INFINITY")}}

```js interactive-example
function checkNumber(bigNumber) {
  if (bigNumber === Number.POSITIVE_INFINITY) {
    return "Process number as Infinity";
  }
  return bigNumber;
}

console.log(checkNumber(Number.MAX_VALUE));
// Expected output: 1.7976931348623157e+308

console.log(checkNumber(Number.MAX_VALUE * 2));
// Expected output: "Process number as Infinity"
```

## 值

与全局属性 {{jsxref("Infinity")}} 的值相同。

{{js_property_attributes(0, 0, 0)}}

## 描述

`Number.POSITIVE_INFINITY` 的表现同数学上的无穷大略有不同：

- 任何正值，包括 `POSITIVE_INFINITY`，乘以 `POSITIVE_INFINITY` 等于 `POSITIVE_INFINITY`。
- 任何负值，包括 {{jsxref("Number.NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}}，除以 `POSITIVE_INFINITY` 等于 {{jsxref("Number.NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}}。
- 任何正数除以 `POSITIVE_INFINITY` 都是[正零](https://zh.wikipedia.org/wiki/0)（正如 [IEEE 754](https://zh.wikipedia.org/wiki/IEEE_754) 中所定义的）。
- 任何负数除以 `POSITIVE_INFINITY` 都是[负零](https://zh.wikipedia.org/wiki/−0)（正如 [IEEE 754](https://zh.wikipedia.org/wiki/IEEE_754) 中所定义的）。
- 零乘以 `POSITIVE_INFINITY` 等于 {{jsxref("NaN")}}。
- {{jsxref("Global_Objects/NaN", "NaN")}} 乘以 `POSITIVE_INFINITY` 等于 {{jsxref("NaN")}}。
- `POSITIVE_INFINITY`，除以任何负值（除了 {{jsxref("Number.NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}}）都等于 {{jsxref("Number.NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}}。
- `POSITIVE_INFINITY`，除以任何正值（除了 `POSITIVE_INFINITY`）都等于 `POSITIVE_INFINITY`。
- `POSITIVE_INFINITY`，除以 {{jsxref("Number.NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}} 或 `POSITIVE_INFINITY`，都等于 {{jsxref("NaN")}}。
- `Number.POSITIVE_INFINITY > x` 对于任何不是 `POSITIVE_INFINITY` 的数字 _x_ 都为真。

你可以使用 `Number.POSITIVE_INFINITY` 属性来表示成功时返回有限数值的错误条件。不过，{{jsxref("NaN")}} 更适合于这种情况。

由于 `POSITIVE_INFINITY` 是 {{jsxref("Number")}} 的静态属性，你应该始终将其用作 `Number.POSITIVE_INFINITY`，而不是作为一个数字值的属性。

## 示例

### 使用 POSITIVE_INFINITY

在下面的例子中，变量 `bigNumber` 被赋值为比最大值更大的数值。当 {{jsxref("Statements/if...else", "if")}} 语句执行时，`bigNumber` 的值为 `Infinity`，所以在继续之前，`bigNumber` 被设置为一个更易于管理的值。

```js
let bigNumber = Number.MAX_VALUE * 2;

if (bigNumber === Number.POSITIVE_INFINITY) {
  bigNumber = returnFinite();
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Number.NEGATIVE_INFINITY")}}
- {{jsxref("Number.isFinite()")}}
- {{jsxref("Infinity")}}
- {{jsxref("isFinite", "isFinite()")}}
