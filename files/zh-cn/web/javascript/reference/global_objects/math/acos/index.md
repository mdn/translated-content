---
title: Math.acos()
slug: Web/JavaScript/Reference/Global_Objects/Math/acos
---

{{JSRef("Global_Objects", "Math")}}

## 概述

**`Math.acos()`** 返回一个数的反余弦值（单位为弧度），即：

<math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>∊</mo><mo stretchy="false">[</mo><mrow><mo>-</mo><mn>1</mn></mrow><mo>;</mo><mn>1</mn><mo stretchy="false">]</mo><mo>,</mo><mspace width="thickmathspace"></mspace><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.acos</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="0em">arccos</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext> the unique </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mo>∊</mo><mo stretchy="false">[</mo><mn>0</mn><mo>;</mo><mi>π</mi><mo stretchy="false">]</mo><mspace width="thinmathspace"></mspace><mtext>such that</mtext><mspace width="thickmathspace"></mspace><mo lspace="0em" rspace="0em">cos</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x \in [{-1};1],\;\mathtt{\operatorname{Math.acos}(x)} = \arccos(x) = \text{ the unique } \; y \in [0; \pi] \, \text{such that} \; \cos(y) = x</annotation></semantics></math>

## 语法

```plain
Math.acos(x)
```

## 参数

- `x`
  - : 一个数值

## 描述

`acos` 方法以 -1 到 1 的一个数为参数，返回一个 0 到 pi（弧度）的数值。如果传入的参数值超出了限定的范围，将返回 `NaN`。

由于 `acos` 是 `Math` 的静态方法，所以应该像这样使用：`Math.acos()`，而不是作为你创建的 `Math` 实例的属性（`Math` 不是一个构造函数）。

## 示例

### 示例：使用 `Math.acos`

```js
Math.acos(-2); // NaN
Math.acos(-1); // 3.141592653589793
Math.acos(0); // 1.5707963267948966
Math.acos(0.5); // 1.0471975511965979
Math.acos(1); // 0
Math.acos(2); // NaN
```

对于小于 -1 或大于 1 的值，`Math.acos` 返回 `NaN`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- The {{jsxref("Global_Objects/Math", "Math")}} object it belongs to.
- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.atan2()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.sin()")}}
- {{jsxref("Math.tan()")}}
