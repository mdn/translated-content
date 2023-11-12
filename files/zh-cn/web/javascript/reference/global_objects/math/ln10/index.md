---
title: Math.LN10
slug: Web/JavaScript/Reference/Global_Objects/Math/LN10
---

{{JSRef("Global_Objects", "Math")}}

## 概述

**`Math.LN10`** 属性表示 10 的自然对数，约为 2.302：

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.LN10</mi></mstyle><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mo stretchy="false">(</mo><mn>10</mn><mo stretchy="false">)</mo><mo>≈</mo><mn>2.302</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.LN10}} = \ln(10) \approx 2.302</annotation></semantics></math>

{{js_property_attributes(0,0,0)}}

## 描述

由于 `LN10` 是 `Math` 的静态属性，所以应该像这样使用：`Math.LN10`，而不是作为你创建的 `Math` 实例的属性（`Math` 不是构造函数）。

## 示例

### 示例：使用 `Math.LN10`

下面的函数返回 10 的自然对数：

```js
function getNatLog10() {
  return Math.LN10;
}

getNatLog10(); // 2.302585092994046
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- The {{jsxref("Global_Objects/Math", "Math")}} object it belongs to.
