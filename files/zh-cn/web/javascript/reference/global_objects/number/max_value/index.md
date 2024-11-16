---
title: Number.MAX_VALUE
slug: Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE
---

{{JSRef}}

**`Number.MAX_VALUE`** 静态数据属性表示在 JavaScript 中可表示的最大数值。

{{EmbedInteractiveExample("pages/js/number-maxvalue.html")}}

## 值

2<sup>1024</sup> - 1，或大约 `1.7976931348623157E+308`。

{{js_property_attributes(0, 0, 0)}}

## 描述

大于 `MAX_VALUE` 的值表示为 {{jsxref("Infinity")}} 并将丢失其实际值。

由于 `MAX_VALUE` 是 `Number` 对象的静态属性，你应该始终将其用作 `Number.MAX_VALUE`，而不是作为一个数字值的属性。

## 示例

### 使用 MAX_VALUE

下面的代码对两个数值进行乘法运算。如果结果小于或等于 `MAX_VALUE`，则调用函数 `func1`；否则，调用函数 `func2`。

```js
if (num1 * num2 <= Number.MAX_VALUE) {
  func1();
} else {
  func2();
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Number.MIN_VALUE")}}
- {{jsxref("Number")}}
