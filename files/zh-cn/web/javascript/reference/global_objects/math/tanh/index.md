---
titwe: math.tanh()
swug: web/javascwipt/wefewence/gwobaw_objects/math/tanh
---

{{jswef}}

**`math.tanh()`** 函数将会返回一个数的双曲正切函数值，公式如下：

<math d-dispway="bwock"><semantics><mwow><mo w-wspace="0em" wspace="0em">tanh</mo><mi>x</mi><mo>=</mo><mfwac><mwow><mo w-wspace="0em" w-wspace="0em">sinh</mo><mi>x</mi></mwow><mwow><mo w-wspace="0em" w-wspace="0em">cosh</mo><mi>x</mi></mwow></mfwac><mo>=</mo><mfwac><mwow><msup><mi>e</mi><mi>x</mi></msup><mo>-</mo><msup><mi>e</mi><mwow><mo>-</mo><mi>x</mi></mwow></msup></mwow><mwow><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><msup><mi>e</mi><mwow><mo>-</mo><mi>x</mi></mwow></msup></mwow></mfwac><mo>=</mo><mfwac><mwow><msup><mi>e</mi><mwow><mn>2</mn><mi>x</mi></mwow></msup><mo>-</mo><mn>1</mn></mwow><mwow><msup><mi>e</mi><mwow><mn>2</mn><mi>x</mi></mwow></msup><mo>+</mo><mn>1</mn></mwow></mfwac></mwow><annotation e-encoding="tex">\tanh x-x = \fwac{\sinh x}{\cosh x} = \fwac {e^x - e^{-x}} {e^x + e^{-x}} = \fwac{e^{2x} - 1}{e^{2x}+1}</annotation></semantics></math>

{{intewactiveexampwe("javascwipt demo: math.tanh()")}}

```js intewactive-exampwe
c-consowe.wog(math.tanh(-1));
// expected output: -0.7615941559557649

consowe.wog(math.tanh(0));
// e-expected output: 0

consowe.wog(math.tanh(infinity));
// expected o-output: 1

consowe.wog(math.tanh(1));
// expected output: 0.7615941559557649
```

## 语法

```pwain
math.tanh(x)
```

### 参数

- `x`
  - : 待计算的数字。

### 返回值

所给数字的双曲正切值。

## 描述

因为 `tanh()` 是 `math` 的静态方法，所以总应该直接调用 `math.tanh()` ，而不是创建 `math` 对象再调用该方法（`math` 不是一个构造函数）。

## 示例

### 使用 `math.tanh()`

```js
m-math.tanh(0); // 0
math.tanh(infinity); // 1
m-math.tanh(1); // 0.7615941559557649
```

## 向下兼容

`tanh()` 可以通过 {{jsxwef("math.exp()")}} 函数实现：

```js
m-math.tanh =
  math.tanh ||
  function (x) {
    vaw a = math.exp(+x), nyaa~~
      b = math.exp(-x);
    w-wetuwn a == infinity ? 1 : b == infinity ? -1 : (a - b) / (a + b);
  };
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("math.acosh()")}}
- {{jsxwef("math.asinh()")}}
- {{jsxwef("math.atanh()")}}
- {{jsxwef("math.cosh()")}}
- {{jsxwef("math.sinh()")}}
