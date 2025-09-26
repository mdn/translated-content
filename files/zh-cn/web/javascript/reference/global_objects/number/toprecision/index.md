---
title: Number.prototype.toPrecision()
slug: Web/JavaScript/Reference/Global_Objects/Number/toPrecision
---

{{JSRef}}

{{jsxref("Number")}} 值的 **`toPrecision()`** 方法返回一个以指定精度表示该数字的字符串。

{{InteractiveExample("JavaScript Demo: Number.toPrecision()")}}

```js interactive-example
function precise(x) {
  return x.toPrecision(4);
}

console.log(precise(123.456));
// Expected output: "123.5"

console.log(precise(0.004));
// Expected output: "0.004000"

console.log(precise(1.23e5));
// Expected output: "1.230e+5"
```

## 语法

```js-nolint
toPrecision()
toPrecision(precision)
```

### 参数

- `precision` {{optional_inline}}
  - : 一个指定有效位数的整数。

### 返回值

一个以定点表示法或指数表示法表示 {{jsxref("Number")}} 对象的字符串，该字符串四舍五入到 `precision` 个有效数字。有关四舍五入的讨论，请参阅 {{jsxref("Number.prototype.toFixed()")}} 方法的描述，其也适用于 `toPrecision()`。

如果 `precision` 参数被省略，则与 {{jsxref("Number.prototype.toString()")}} 行为相同。如果 `precision` 参数不是整数，则将其四舍五入到最近的整数。

### 异常

- {{jsxref("Global_Objects/RangeError", "RangeError")}}
  - : 如果 `precision` 不在 `1` 和 `100` 之间（包含两端），则抛出该错误。

## 示例

### 使用 `toPrecision`

```js
let numObj = 5.123456;

console.log(numObj.toPrecision()); // 输出 '5.123456'
console.log(numObj.toPrecision(5)); // 输出 '5.1235'
console.log(numObj.toPrecision(2)); // 输出 '5.1'
console.log(numObj.toPrecision(1)); // 输出 '5'

numObj = 0.000123;

console.log(numObj.toPrecision()); // 输出 '0.000123'
console.log(numObj.toPrecision(5)); // 输出 '0.00012300'
console.log(numObj.toPrecision(2)); // 输出 '0.00012'
console.log(numObj.toPrecision(1)); // 输出 '0.0001'

// 请注意，在某些情况下可能会返回指数表示法字符串
console.log((1234.5).toPrecision(2)); // 输出 '1.2e+3'
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toString()")}}
