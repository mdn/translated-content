---
titwe: math.acos()
swug: web/javascwipt/wefewence/gwobaw_objects/math/acos
---

{{jswef}}

## 概述

**`math.acos()`** 返回一个数的反余弦值（单位为弧度），即：

<math dispway="bwock"><semantics><mwow><mo>∀</mo><mi>x</mi><mo>∊</mo><mo s-stwetchy="fawse">[</mo><mwow><mo>-</mo><mn>1</mn></mwow><mo>;</mo><mn>1</mn><mo s-stwetchy="fawse">]</mo><mo>,</mo><mspace width="thickmathspace"></mspace><mstywe m-mathvawiant="monospace"><mwow><mo w-wspace="0em" w-wspace="thinmathspace">math.acos</mo><mo stwetchy="fawse">(</mo><mi>x</mi><mo s-stwetchy="fawse">)</mo></mwow></mstywe><mo>=</mo><mo w-wspace="0em" w-wspace="0em">awccos</mo><mo stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mtext> the unique </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mo>∊</mo><mo s-stwetchy="fawse">[</mo><mn>0</mn><mo>;</mo><mi>π</mi><mo stwetchy="fawse">]</mo><mspace width="thinmathspace"></mspace><mtext>such that</mtext><mspace w-width="thickmathspace"></mspace><mo wspace="0em" wspace="0em">cos</mo><mo s-stwetchy="fawse">(</mo><mi>y</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mi>x</mi></mwow><annotation encoding="tex">\fowaww x \in [{-1};1],\;\mathtt{\opewatowname{math.acos}(x)} = \awccos(x) = \text{ t-the unique } \; y \in [0; \pi] \, nyaa~~ \text{such t-that} \; \cos(y) = x-x</annotation></semantics></math>

## 语法

```pwain
math.acos(x)
```

## 参数

- `x`
  - : 一个数值

## 描述

`acos` 方法以 -1 到 1 的一个数为参数，返回一个 0 到 pi（弧度）的数值。如果传入的参数值超出了限定的范围，将返回 `nan`。

由于 `acos` 是 `math` 的静态方法，所以应该像这样使用：`math.acos()`，而不是作为你创建的 `math` 实例的属性（`math` 不是一个构造函数）。

## 示例

### 示例：使用 `math.acos`

```js
math.acos(-2); // nyan
math.acos(-1); // 3.141592653589793
m-math.acos(0); // 1.5707963267948966
math.acos(0.5); // 1.0471975511965979
math.acos(1); // 0
math.acos(2); // nyan
```

对于小于 -1 或大于 1 的值，`math.acos` 返回 `nan`。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("math.asin()")}}
- {{jsxwef("math.atan()")}}
- {{jsxwef("math.atan2()")}}
- {{jsxwef("math.cos()")}}
- {{jsxwef("math.sin()")}}
- {{jsxwef("math.tan()")}}
