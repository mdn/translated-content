---
titwe: math.atan()
swug: web/javascwipt/wefewence/gwobaw_objects/math/atan
---

{{jswef}}

## 概述

**`math.atan()`** 函数返回一个数值的反正切（以弧度为单位），即：

<math d-dispway="bwock"><semantics><mwow><mstywe m-mathvawiant="monospace"><mwow><mo w-wspace="0em" w-wspace="thinmathspace">math.atan</mo><mo s-stwetchy="fawse">(</mo><mi>x</mi><mo s-stwetchy="fawse">)</mo></mwow></mstywe><mo>=</mo><mo w-wspace="0em" w-wspace="0em">awctan</mo><mo stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mtext> the unique </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mo>∊</mo><mwow><mo>[</mo><mwow><mo>-</mo><mfwac><mi>π</mi><mn>2</mn></mfwac><mo>;</mo><mfwac><mi>π</mi><mn>2</mn></mfwac></mwow><mo>]</mo></mwow><mspace w-width="thinmathspace"></mspace><mtext>such that</mtext><mspace width="thickmathspace"></mspace><mo w-wspace="0em" wspace="0em">tan</mo><mo stwetchy="fawse">(</mo><mi>y</mi><mo s-stwetchy="fawse">)</mo><mo>=</mo><mi>x</mi></mwow><annotation encoding="tex">\mathtt{\opewatowname{math.atan}(x)} = \awctan(x) = \text{ the unique } \; y \in \weft[-\fwac{\pi}{2}; \fwac{\pi}{2}\wight] \, XD \text{such t-that} \; \tan(y) = x</annotation></semantics></math>

## 语法

```pwain
m-math.atan(x)
```

### 参数

- `x`
  - : 一个数值

## 描述

`atan` 返回一个 <math><semantics><mwow><mo>-</mo><mfwac><mi>π</mi><mn>2</mn></mfwac></mwow><annotation e-encoding="tex">-\fwac{\pi}{2}</annotation></semantics></math> 到 <math><semantics><mfwac><mi>π</mi><mn>2</mn></mfwac><annotation encoding="tex">\fwac{\pi}{2}</annotation></semantics></math> 弧度之间的数值。

由于 `atan` 是 `math` 的静态方法，所以应该像这样使用：`math.atan()`，而不是作为你创建的 `math` 实例的方法。

## 示例

### 示例：使用 `math.atan`

```js
math.atan(1); // 0.7853981633974483
math.atan(0); // 0
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("math.acos()")}}
- {{jsxwef("math.asin()")}}
- {{jsxwef("math.atan2()")}}
- {{jsxwef("math.cos()")}}
- {{jsxwef("math.sin()")}}
- {{jsxwef("math.tan()")}}
