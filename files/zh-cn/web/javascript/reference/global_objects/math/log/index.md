---
title: Math.log()
slug: Web/JavaScript/Reference/Global_Objects/Math/log
---

{{JSRef("Global_Objects", "Math")}}

## 概述

**`Math.log()`** 函数返回一个数的自然对数，即：

<math><semantics><mrow><mo>∀</mo><mi>x</mi><mo>></mo><mn>0</mn><mo>,</mo><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.log</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>the unique</mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>such that</mtext><mspace width="thickmathspace"></mspace><msup><mi>e</mi><mi>y</mi></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x > 0, \mathtt{\operatorname{Math.log}(x)} = \ln(x) = \text{the unique} \; y \; \text{such that} \; e^y = x</annotation></semantics></math>

## 语法

```plain
Math.log(x)
```

### 参数

- `x`
  - : 一个数字。

## 描述

如果指定的 `number` 为负数，则返回值为 `NaN`。

由于 `log` 是 `Math` 的静态方法，所以应该像这样使用：`Math.log()`，而不是作为你创建的 `Math` 对象的方法。

## 示例

### 示例 1:使用`Math.log`

下面的函数返回指定变量的自然对数：

```js
Math.log(-1); // NaN, out of range
Math.log(0); // -Infinity
Math.log(1); // 0
Math.log(10); // 2.302585092994046
```

### 示例 2：使用 `Math.log` 时基于不同的底数

下面的函数返回以 `x` 为底 `y` 的对数（即 logx y）：

```js
function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}
```

如果你运行 `getBaseLog(10, 1000)`，则会返回 `2.9999999999999996`，非常接近实际答案：3，原因是浮点数精度问题。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- The {{jsxref("Global_Objects/Math", "Math")}} object it belongs to.
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.pow()")}}
