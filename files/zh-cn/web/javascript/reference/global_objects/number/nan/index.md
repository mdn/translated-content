---
title: Number.NaN
slug: Web/JavaScript/Reference/Global_Objects/Number/NaN
---

**`Number.NaN`** 静态数据属性表示非数字值，等同于 {{jsxref("NaN")}}。有关 `NaN` 的行为的更多信息，请参阅[全局属性的描述](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN)。

{{InteractiveExample("JavaScript Demo: Number.NaN", "taller")}}

```js interactive-example
function clean(x) {
  // eslint-disable-next-line use-isnan
  if (x === Number.NaN) {
    // Can never be true
    return null;
  }
  if (isNaN(x)) {
    return 0;
  }
}

console.log(clean(Number.NaN));
// Expected output: 0
```

## 值

数字值 {{jsxref("NaN")}}。

{{js_property_attributes(0, 0, 0)}}

## 描述

由于 `NaN` 是 {{jsxref("Number")}} 的静态属性，你应该始终将其用作 `Number.NaN`，而不是作为一个数字值的属性。

## 示例

### 检查值是否为数字

```js
function sanitize(x) {
  if (isNaN(x)) {
    return Number.NaN;
  }
  return x;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("NaN")}}
- {{jsxref("Number.isNaN()")}}
