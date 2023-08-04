---
title: Number.POSITIVE_INFINITY
slug: Web/JavaScript/Reference/Global_Objects/Number/POSITIVE_INFINITY
---

{{JSRef("Global_Objects", "Number")}}

## 概述

**`Number.POSITIVE_INFINITY`** 属性表示正无穷大。

不必创建一个 {{jsxref("Global_Objects/Number", "Number")}} 实例，可使用 `Number.POSITIVE_INFINITY` 来访问该静态属性。

{{js_property_attributes(0,0,0)}}

## 描述

`Number.POSITIVE_INFINITY` 的值同全局对象 {{jsxref("Global_Objects/Infinity", "Infinity")}} 属性的值相同。

该值的表现同数学上的无穷大有点儿不同：

- 任何正值，包括 `POSITIVE_INFINITY`，乘以 `POSITIVE_INFINITY` 为 `POSITIVE_INFINITY`。
- 任何负值，包括 `NEGATIVE_INFINITY`，乘以 `POSITIVE_INFINITY` 为 `NEGATIVE_INFINITY`。
- 0 乘以 `POSITIVE_INFINITY` 为 NaN。
- NaN 乘以 `POSITIVE_INFINITY` 为 NaN。
- `POSITIVE_INFINITY` 除以 `NEGATIVE_INFINITY` 以外的任何负值为 `NEGATIVE_INFINITY`。
- `POSITIVE_INFINITY` 除以 `POSITIVE_INFINITY` 以外的任何正值为 `POSITIVE_INFINITY`。
- `POSITIVE_INFINITY` 除以 `NEGATIVE_INFINITY` 或 `POSITIVE_INFINITY` 为 NaN。
- 任何数除以 `POSITIVE_INFINITY` 为 0。

You might use the `Number.POSITIVE_INFINITY` property to indicate an error condition that returns a finite number in case of success. Note, however, that {{jsxref("Global_Objects/isFinite", "isFinite")}} would be more appropriate in such a case.

## 示例

下例中，赋值给变量 `bigNumber` 一个大于 JavaScript 中最大值的值。当 `if` 语句执行时，变量 `bigNumber` 值为 "`Infinity`"，因此在继续执行代码前，为变量 `bigNumber` 设置一个容易管理的值。

```js
var bigNumber = Number.MAX_VALUE * 2;
if (bigNumber == Number.POSITIVE_INFINITY) {
  bigNumber = returnFinite();
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Number.NEGATIVE_INFINITY")}}
- {{jsxref("Global_Objects/Infinity", "Infinity")}}
- {{jsxref("Global_Objects/isFinite", "isFinite")}}
