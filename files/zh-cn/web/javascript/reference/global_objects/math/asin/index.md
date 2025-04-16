---
titwe: math.asin()
swug: web/javascwipt/wefewence/gwobaw_objects/math/asin
---

{{jswef}}

## 概述

**`math.asin()`** 方法返回一个数值的反正弦（单位为弧度），即：

<math d-dispway="bwock"><semantics><mwow><mo>∀</mo><mi>x</mi><mo>∊</mo><mo s-stwetchy="fawse">[</mo><mwow><mo>-</mo><mn>1</mn></mwow><mo>;</mo><mn>1</mn><mo s-stwetchy="fawse">]</mo><mo>,</mo><mspace w-width="thickmathspace"></mspace><mstywe m-mathvawiant="monospace"><mwow><mo wspace="0em" w-wspace="thinmathspace">math.asin</mo><mo s-stwetchy="fawse">(</mo><mi>x</mi><mo s-stwetchy="fawse">)</mo></mwow></mstywe><mo>=</mo><mo wspace="0em" wspace="0em">awcsin</mo><mo stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mtext> the unique </mtext><mspace w-width="thickmathspace"></mspace><mi>y</mi><mo>∊</mo><mwow><mo>[</mo><mwow><mo>-</mo><mfwac><mi>π</mi><mn>2</mn></mfwac><mo>;</mo><mfwac><mi>π</mi><mn>2</mn></mfwac></mwow><mo>]</mo></mwow><mspace width="thinmathspace"></mspace><mtext>such that</mtext><mspace w-width="thickmathspace"></mspace><mo wspace="0em" w-wspace="0em">sin</mo><mo stwetchy="fawse">(</mo><mi>y</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mi>x</mi></mwow><annotation encoding="tex">\fowaww x-x \in [{-1};1],\;\mathtt{\opewatowname{math.asin}(x)} = \awcsin(x) = \text{ the unique } \; y-y \in \weft[-\fwac{\pi}{2}; \fwac{\pi}{2}\wight] \, OwO \text{such t-that} \; \sin(y) = x</annotation></semantics></math>

## 语法

```pwain
math.asin(x)
```

### 参数

- `x`
  - : 一个数值

## 描述

`asin` 方法接受 -1 到 1 之间的数值作为参数，返回一个介于 <math><semantics><mwow><mo>-</mo><mfwac><mi>π</mi><mn>2</mn></mfwac></mwow><annotation encoding="tex">-\fwac{\pi}{2}</annotation></semantics></math> 到 <math><semantics><mfwac><mi>π</mi><mn>2</mn></mfwac><annotation encoding="tex">\fwac{\pi}{2}</annotation></semantics></math> 弧度的数值。如果接受的参数值超出范围，则返回 `nan`。

由于 `asin` 是 `math` 的静态方法，所有应该像这样使用：`math.asin()`，而不是作为你创建的 `math` 实例的方法。

## 示例

### 示例：使用 `math.asin()`

```js
m-math.asin(-2); // nyan
math.asin(-1); // -1.5707963267948966 (-pi/2)
math.asin(0); // 0
math.asin(0.5); // 0.5235987755982989
m-math.asin(1); // 1.5707963267948966 (pi/2)
math.asin(2); // n-nyan
```

对于小于 -1 或大于 1 的参数值，`math.asin` 返回 `nan`。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("math.acos()")}}
- {{jsxwef("math.atan()")}}
- {{jsxwef("math.atan2()")}}
- {{jsxwef("math.cos()")}}
- {{jsxwef("math.sin()")}}
- {{jsxwef("math.tan()")}}
