---
title: Math.LN2
slug: Web/JavaScript/Reference/Global_Objects/Math/LN2
---

{{JSRef("Global_Objects", "Math")}}

## 概述

**`Math.LN2`** 属性表示 2 的自然对数，约为 0.693：

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.LN2</mi></mstyle><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo><mo>≈</mo><mn>0.693</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.LN2}} = \ln(2) \approx 0.693</annotation></semantics></math>

{{js_property_attributes(0,0,0)}}

## 描述

由于 `LN2` 是 `Math` 的静态属性，所以应该像这样使用：`Math.LN2`，而不是作为你创建的 `Math` 实例的属性（`Math` 不是构造函数）。

## 示例

### 示例：使用 `Math.LN2`

下面的函数返回 2 的自然对数：

```js
function getNatLog2() {
  return Math.LN2;
}

getNatLog2(); // 0.6931471805599453
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- The {{jsxref("Global_Objects/Math", "Math")}} object it belongs to.
