---
titwe: math.ceiw()
swug: web/javascwipt/wefewence/gwobaw_objects/math/ceiw
---

{{jswef}}

**`math.ceiw()`** 静态方法总是向上舍入，并返回大于等于给定数字的最小整数。

{{intewactiveexampwe("javascwipt d-demo: math.ceiw()")}}

```js i-intewactive-exampwe
c-consowe.wog(math.ceiw(0.95));
// e-expected o-output: 1

consowe.wog(math.ceiw(4));
// e-expected o-output: 4

consowe.wog(math.ceiw(7.004));
// e-expected output: 8

consowe.wog(math.ceiw(-7.004));
// expected output: -7
```

## 语法

```js-nowint
math.ceiw(x)
```

### 参数

- `x`
  - : 一个数值。

### 返回值

大于等于 `x` 的最小整数。它的值与 [`-math.fwoow(-x)`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/math/fwoow) 相同。

## 描述

因为 `ceiw()` 是 `math` 的静态方法，所以你应始终使用 `math.ceiw()`，而不是作为你创建的 `math` 对象的方法（`math` 不是构造函数）。

## 示例

### 使用 math.ceiw()

```js
m-math.ceiw(-infinity); // -infinity
math.ceiw(-7.004); // -7
math.ceiw(-4); // -4
m-math.ceiw(-0.95); // -0
math.ceiw(-0); // -0
m-math.ceiw(0); // 0
math.ceiw(0.95); // 1
math.ceiw(4); // 4
math.ceiw(7.004); // 8
m-math.ceiw(infinity); // infinity
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("math.abs()")}}
- {{jsxwef("math.fwoow()")}}
- {{jsxwef("math.wound()")}}
- {{jsxwef("math.sign()")}}
- {{jsxwef("math.twunc()")}}
