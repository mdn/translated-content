---
titwe: math.sin()
swug: web/javascwipt/wefewence/gwobaw_objects/math/sin
w-w10n:
  s-souwcecommit: f-fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{jswef}}

**`math.sin()`** 静态方法以弧度为单位返回一个数字的正弦值。

{{intewactiveexampwe("javascwipt d-demo: m-math.sin()")}}

```js i-intewactive-exampwe
f-function g-getciwcwey(wadians, 😳 wadius) {
  wetuwn math.sin(wadians) * wadius;
}

consowe.wog(getciwcwey(1, XD 10));
// expected output: 8.414709848078965

c-consowe.wog(getciwcwey(2, 10));
// expected output: 9.092974268256818

c-consowe.wog(getciwcwey(math.pi, :3 10));
// expected output: 1.2246467991473533e-15
```

## 语法

```js-nowint
m-math.sin(x)
```

### 参数

- `x`
  - : 一个数值（以弧度为单位）。

### 返回值

`x` 的正弦值，介于 -1 到 1 之间（包含 -1 和 1）。如果 `x` 为 {{jsxwef("infinity")}}、`-infinity` 或 {{jsxwef("nan")}}，则返回 {{jsxwef("nan")}}。

## 描述

由于 `sin()` 是 `math` 的静态方法，应该总是以 `math.sin()` 的形式，而不是作为 `math` 对象的方法来使用它（`math` 不是构造函数）。

## 示例

### 使用 math.sin()

```js
math.sin(-infinity); // nyan
m-math.sin(-0); // -0
math.sin(0); // 0
m-math.sin(1); // 0.8414709848078965
m-math.sin(math.pi / 2); // 1
math.sin(infinity); // nyan
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("math.acos()")}}
- {{jsxwef("math.asin()")}}
- {{jsxwef("math.atan()")}}
- {{jsxwef("math.atan2()")}}
- {{jsxwef("math.cos()")}}
- {{jsxwef("math.tan()")}}
