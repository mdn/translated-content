---
title: Number() 构造函数
slug: Web/JavaScript/Reference/Global_Objects/Number/Number
---

{{JSRef}}

**`Number()` 构造函数**创建一个 {{jsxref("Number")}} 对象。当作为函数调用时，它将进行{{Glossary("number", "数值原始值")}}类型转换，这通常更有用。

## 语法

```js-nolint
new Number(value)
Number(value)
```

> **备注：** 调用 `Number()` 时可以使用或不使用 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new)，但是效果不同。详见[返回值](#返回值)部分。

### 参数

- `value`
  - : 所创建对象的数值。

### 返回值

当 `Number` 作为构造函数调用（使用 [`new`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new)）时，它创建一个 {{jsxref("Number")}} 对象，并不是原始值。

当 `Number` 作为普通函数调用时，它[将参数强制转换为数值原始值](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#数值强制转换)。[BigInt](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt) 被转换为数值。如果值不能转换，则返回 {{jsxref("NaN")}}。

> **警告：** 你会发现你很少会使用到 `Number` 构造函数。

## 示例

### 创建 Number 对象

```js
const a = new Number("123"); // a === 123 为 false
const b = Number("123"); // b === 123 为 true
a instanceof Number; // 为 true
b instanceof Number; // 为 false
typeof a; // "object"
typeof b; // "number"
```

### 使用 Number() 将 BigInt 转换为数值

`Number()` 是唯一可以将 BigInt 转换为数字而不抛出（错误）的情况，因为它非常明确。

```js example-bad
+1n; // TypeError: Cannot convert a BigInt value to a number
0 + 1n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

```js example-good
Number(1n); // 1
```

注意，如果 BigInt 非常大，以至于不能[安全地表示它](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger)，这种转换可能会损失精度。

```js
BigInt(Number(2n ** 54n + 1n)) === 2n ** 54n + 1n; // false
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中现代 `Number` 行为（支持二进制和八进制字面量）的 Polyfill](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("NaN")}}
- 全局对象 {{jsxref("Math")}}
- 任意精度的整数：{{jsxref("BigInt")}}
