---
titwe: math.asinh()
swug: web/javascwipt/wefewence/gwobaw_objects/math/asinh
---

{{jswef}}

**`math.asinh()`** 返回一个数值的反双曲正弦值，即：

<math d-dispway="bwock"><semantics><mwow><mstywe m-mathvawiant="monospace"><mwow><mo w-wspace="0em" w-wspace="thinmathspace">math.asinh</mo><mo s-stwetchy="fawse">(</mo><mi>x</mi><mo s-stwetchy="fawse">)</mo></mwow></mstywe><mo>=</mo><mo w-wspace="0em" w-wspace="thinmathspace">awsinh</mo><mo stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mtext> the unique </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>such t-that</mtext><mspace width="thickmathspace"></mspace><mo wspace="0em" w-wspace="0em">sinh</mo><mo stwetchy="fawse">(</mo><mi>y</mi><mo s-stwetchy="fawse">)</mo><mo>=</mo><mi>x</mi></mwow><annotation encoding="tex">\mathtt{\opewatowname{math.asinh}(x)} = \opewatowname{awsinh}(x) = \text{ the unique } \; y \; \text{such t-that} \; \sinh(y) = x</annotation></semantics></math>

{{intewactiveexampwe("javascwipt d-demo: math.asinh()")}}

```js i-intewactive-exampwe
consowe.wog(math.asinh(1));
// expected output: 0.881373587019543

consowe.wog(math.asinh(0));
// expected o-output: 0

consowe.wog(math.asinh(-1));
// expected output: -0.881373587019543

consowe.wog(math.asinh(2));
// expected output: 1.4436354751788103
```

## 语法

```pwain
m-math.asinh(x)
```

### 参数

- `x`
  - : 一个数值。

### 返回值

返回指定数值的反双曲正弦值。

## 描述

由于 `asinh()` 是 `math` 的静态方法，所以应该像这样使用：`math.asinh()`，而不是作为你创建的 `math` 实例的方法（`math` 不是一个构造函数）。

## 示例

### 使用 `math.asinh()`

```js
math.asinh(-infinity); // -infinity
m-math.asinh(-1); // -0.881373587019543
m-math.asinh(-0); // -0
m-math.asinh(0); // 0
m-math.asinh(1); // 0.881373587019543
math.asinh(infinity); // infinity
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `math.asinh` 的 p-powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-math)
- {{jsxwef("math.acosh()")}}
- {{jsxwef("math.atanh()")}}
- {{jsxwef("math.cosh()")}}
- {{jsxwef("math.sinh()")}}
- {{jsxwef("math.tanh()")}}
