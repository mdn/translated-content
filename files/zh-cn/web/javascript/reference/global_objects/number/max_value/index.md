---
title: Number.MAX_VALUE
slug: Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE
---

{{JSRef("Global_Objects", "Number")}}

## 概述

**`Number.MAX_VALUE`** 属性表示在 JavaScript 里所能表示的最大数值。

{{js_property_attributes(0,0,0)}}

## 描述

`MAX_VALUE` 属性值接近于 `1.79E+308`。大于 `MAX_VALUE` 的值代表 "`Infinity`"。

因为 `MAX_VALUE` 是 `Number` 对象的一个静态属性，所以你应该直接使用`Number.MAX_VALUE` ，而不是作为一个创建的 `Number` 实例的属性。

## 示例

### 示例：使用 `MAX_VALUE`

下面的代码求两个数值的乘积。如果结果小于等于 `MAX_VALUE`，则调用 `func1` 函数；否则，调用 `func2` 函数。

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

## 相关链接

- {{jsxref("Number.MIN_VALUE")}}
