---
title: Number.NaN
slug: Web/JavaScript/Reference/Global_Objects/Number/NaN
---

{{JSRef}}

**`Number.NaN`** 静态数据属性表示非数字值，等同于 {{jsxref("NaN")}}。有关 `NaN` 的行为的更多信息，请参阅[全局属性的描述](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN)。

{{EmbedInteractiveExample("pages/js/number-nan.html", "taller")}}

## 值

{{jsxref("NaN")}} 的数字值。

{{js_property_attributes(0, 0, 0)}}

## 描述

因为 `NaN` 是一个静态属性，所以你应该使用用作 `Number.NaN`，而不是作为一个数字值的属性来使用。

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
