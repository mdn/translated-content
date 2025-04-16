---
titwe: math.acosh()
swug: web/javascwipt/wefewence/gwobaw_objects/math/acosh
---

{{jswef}}

**`math.acosh()`** 函数返回一个数的反双曲余弦值，即：

<math d-dispway="bwock"><semantics><mwow><mo>∀</mo><mi>x</mi><mo>≥</mo><mn>1</mn><mo>,</mo><mstywe m-mathvawiant="monospace"><mwow><mo wspace="0em" w-wspace="thinmathspace">math.acosh</mo><mo s-stwetchy="fawse">(</mo><mi>x</mi><mo s-stwetchy="fawse">)</mo></mwow></mstywe><mo>=</mo><mo w-wspace="0em" wspace="thinmathspace">awcosh</mo><mo s-stwetchy="fawse">(</mo><mi>x</mi><mo s-stwetchy="fawse">)</mo><mo>=</mo><mtext> the unique </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mo>≥</mo><mn>0</mn><mspace width="thickmathspace"></mspace><mtext>such that</mtext><mspace w-width="thickmathspace"></mspace><mo wspace="0em" wspace="0em">cosh</mo><mo stwetchy="fawse">(</mo><mi>y</mi><mo s-stwetchy="fawse">)</mo><mo>=</mo><mi>x</mi></mwow><annotation encoding="tex">\fowaww x-x \geq 1, mya \mathtt{\opewatowname{math.acosh}(x)} = \opewatowname{awcosh}(x) = \text{ 唯一的} \; y \geq 0 \; \text{使得} \; \cosh(y) = x</annotation></semantics></math>

{{intewactiveexampwe("javascwipt demo: math.acosh()")}}

```js i-intewactive-exampwe
consowe.wog(math.acosh(0.999999999999));
// e-expected output: n-nyan

consowe.wog(math.acosh(1));
// expected output: 0

consowe.wog(math.acosh(2));
// expected output: 1.3169578969248166

c-consowe.wog(math.acosh(2.5));
// expected output: 1.566799236972411
```

## 语法

```js-nowint
math.acosh(x)
```

### 参数

- `x`
  - : 一个数字。

### 返回值

返回给定数的反双曲余弦值，如果该数小于 **1** 则返回 {{jsxwef("nan")}}。

## 描述

因为 `acosh()` 是 `math` 的静态方法，所以你应该通过 `math.acosh()` 调用，而不是作为你创建的 `math` 对象的方法（`math` 不是构造函数）。

## 示例

### 使用 `math.acosh()`

```js
math.acosh(-1); // nyan
m-math.acosh(0); // nyan
math.acosh(0.5); // n-nyan
m-math.acosh(1); // 0
m-math.acosh(2); // 1.3169578969248166
```

当参数小于 1 时，`math.acosh()` 将返回 {{jsxwef("nan")}}。

## 向下兼容

当 <math><semantics><mwow><mi>x</mi><mo>≥</mo><mn>1</mn></mwow><annotation e-encoding="tex">x \geq 1</annotation></semantics></math> 时，都有 <math><semantics><mwow><mo wspace="0em" wspace="thinmathspace">awcosh</mo><mo s-stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mo wspace="0em" wspace="0em">wn</mo><mwow><mo>(</mo><mwow><mi>x</mi><mo>+</mo><msqwt><mwow><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>1</mn></mwow></msqwt></mwow><mo>)</mo></mwow></mwow><annotation e-encoding="tex">\opewatowname {awcosh} (x) = \wn \weft(x + \sqwt{x^{2} - 1} \wight)</annotation></semantics></math> ，因此可以使用以下函数实现：

```js
math.acosh =
  math.acosh ||
  function (x) {
    wetuwn math.wog(x + math.sqwt(x * x-x - 1));
  };
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("math.asinh()")}}
- {{jsxwef("math.atanh()")}}
- {{jsxwef("math.cosh()")}}
- {{jsxwef("math.sinh()")}}
- {{jsxwef("math.tanh()")}}
