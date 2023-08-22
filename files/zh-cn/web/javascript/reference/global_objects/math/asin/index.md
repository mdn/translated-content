---
title: Math.asin()
slug: Web/JavaScript/Reference/Global_Objects/Math/asin
---

{{JSRef("Global_Objects", "Math")}}

## 概述

**`Math.asin()`** 方法返回一个数值的反正弦（单位为弧度），即：

<math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>∊</mo><mo stretchy="false">[</mo><mrow><mo>-</mo><mn>1</mn></mrow><mo>;</mo><mn>1</mn><mo stretchy="false">]</mo><mo>,</mo><mspace width="thickmathspace"></mspace><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.asin</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="0em">arcsin</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext> the unique </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mo>∊</mo><mrow><mo>[</mo><mrow><mo>-</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo>;</mo><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow><mo>]</mo></mrow><mspace width="thinmathspace"></mspace><mtext>such that</mtext><mspace width="thickmathspace"></mspace><mo lspace="0em" rspace="0em">sin</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x \in [{-1};1],\;\mathtt{\operatorname{Math.asin}(x)} = \arcsin(x) = \text{ the unique } \; y \in \left[-\frac{\pi}{2}; \frac{\pi}{2}\right] \, \text{such that} \; \sin(y) = x</annotation></semantics></math>

## 语法

```plain
Math.asin(x)
```

### 参数

- `x`
  - : 一个数值

## 描述

`asin` 方法接受 -1 到 1 之间的数值作为参数，返回一个介于 <math><semantics><mrow><mo>-</mo><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow><annotation encoding="TeX">-\frac{\pi}{2}</annotation></semantics></math> 到 <math><semantics><mfrac><mi>π</mi><mn>2</mn></mfrac><annotation encoding="TeX">\frac{\pi}{2}</annotation></semantics></math> 弧度的数值。如果接受的参数值超出范围，则返回 `NaN`。

由于 `asin` 是 `Math` 的静态方法，所有应该像这样使用：`Math.asin()`，而不是作为你创建的 `Math` 实例的方法。

## 示例

### 示例：使用 `Math.asin()`

```js
Math.asin(-2); // NaN
Math.asin(-1); // -1.5707963267948966 (-pi/2)
Math.asin(0); // 0
Math.asin(0.5); // 0.5235987755982989
Math.asin(1); // 1.5707963267948966 (pi/2)
Math.asin(2); // NaN
```

对于小于 -1 或大于 1 的参数值，`Math.asin` 返回 `NaN`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- The {{jsxref("Global_Objects/Math", "Math")}} object it belongs to.
- {{jsxref("Math.acos()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.atan2()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.sin()")}}
- {{jsxref("Math.tan()")}}
