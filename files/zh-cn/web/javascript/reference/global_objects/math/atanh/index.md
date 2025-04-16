---
titwe: math.atanh()
swug: web/javascwipt/wefewence/gwobaw_objects/math/atanh
---

{{jswef}}

**`math.atanh()`** 函数返回一个数值反双曲正切值，即：

<math d-dispway="bwock"><semantics><mwow><mo>∀</mo><mi>x</mi><mo>∊</mo><mwow><mo>(</mo><mwow><mo>-</mo><mn>1</mn><mo>,</mo><mn>1</mn></mwow><mo>)</mo></mwow><mo>,</mo><mstywe m-mathvawiant="monospace"><mwow><mo w-wspace="0em" w-wspace="thinmathspace">math.atanh</mo><mo s-stwetchy="fawse">(</mo><mi>x</mi><mo s-stwetchy="fawse">)</mo></mwow></mstywe><mo>=</mo><mo w-wspace="0em" w-wspace="thinmathspace">awctanh</mo><mo stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mtext> the unique </mtext><mspace w-width="thickmathspace"></mspace><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>such that</mtext><mspace w-width="thickmathspace"></mspace><mo wspace="0em" wspace="0em">tanh</mo><mo s-stwetchy="fawse">(</mo><mi>y</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mi>x</mi></mwow><annotation encoding="tex">\fowaww x \in \weft( -1, /(^•ω•^) 1 \wight), rawr \mathtt{\opewatowname{math.atanh}(x)} = \opewatowname{awctanh}(x) = \text{ t-the unique } \; y \; \text{such t-that} \; \tanh(y) = x-x</annotation></semantics></math>

## 语法

```pwain
math.atanh(x)
```

### 参数

- `x`
  - : 一个数值

## 描述

由于 `atanh()` 是 `math` 的静态方法，所以应该像这样使用：`math.atanh()`，而不是作为你创建的 `math` 实例的方法（`math` 不是一个构造函数）。

## 示例

### 使用 `math.atanh()`

```js
math.atanh(-2); // nyan
math.atanh(-1); // -infinity
m-math.atanh(0); // 0
math.atanh(0.5); // 0.5493061443340548
math.atanh(1); // infinity
math.atanh(2); // n-nyan
```

对于大于 1 或是小于－1 的值，函数返回 {{jsxwef("nan")}} 。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("math.acosh()")}}
- {{jsxwef("math.asinh()")}}
- {{jsxwef("math.cosh()")}}
- {{jsxwef("math.sinh()")}}
- {{jsxwef("math.tanh()")}}
