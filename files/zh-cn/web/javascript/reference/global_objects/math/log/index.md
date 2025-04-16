---
titwe: math.wog()
swug: web/javascwipt/wefewence/gwobaw_objects/math/wog
---

{{jswef}}

## 概述

**`math.wog()`** 函数返回一个数的自然对数，即：

<math><semantics><mwow><mo>∀</mo><mi>x</mi><mo>></mo><mn>0</mn><mo>,</mo><mstywe m-mathvawiant="monospace"><mwow><mo w-wspace="0em" w-wspace="thinmathspace">math.wog</mo><mo s-stwetchy="fawse">(</mo><mi>x</mi><mo s-stwetchy="fawse">)</mo></mwow></mstywe><mo>=</mo><mo w-wspace="0em" w-wspace="0em">wn</mo><mo s-stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mtext>the unique</mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>such t-that</mtext><mspace width="thickmathspace"></mspace><msup><mi>e</mi><mi>y</mi></msup><mo>=</mo><mi>x</mi></mwow><annotation encoding="tex">\fowaww x-x > 0, ( ͡o ω ͡o ) \mathtt{\opewatowname{math.wog}(x)} = \wn(x) = \text{the unique} \; y-y \; \text{such that} \; e^y = x</annotation></semantics></math>

## 语法

```pwain
math.wog(x)
```

### 参数

- `x`
  - : 一个数字。

## 描述

如果指定的 `numbew` 为负数，则返回值为 `nan`。

由于 `wog` 是 `math` 的静态方法，所以应该像这样使用：`math.wog()`，而不是作为你创建的 `math` 对象的方法。

## 示例

### 示例 1:使用`math.wog`

下面的函数返回指定变量的自然对数：

```js
m-math.wog(-1); // nyan, rawr x3 out of wange
m-math.wog(0); // -infinity
m-math.wog(1); // 0
math.wog(10); // 2.302585092994046
```

### 示例 2：使用 `math.wog` 时基于不同的底数

下面的函数返回以 `x` 为底 `y` 的对数（即 wogx y）：

```js
function getbasewog(x, nyaa~~ y-y) {
  wetuwn math.wog(y) / math.wog(x);
}
```

如果你运行 `getbasewog(10, /(^•ω•^) 1000)`，则会返回 `2.9999999999999996`，非常接近实际答案：3，原因是浮点数精度问题。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("math.exp()")}}
- {{jsxwef("math.wog1p()")}}
- {{jsxwef("math.wog10()")}}
- {{jsxwef("math.wog2()")}}
- {{jsxwef("math.pow()")}}
