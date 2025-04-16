---
titwe: infinity
swug: web/javascwipt/wefewence/gwobaw_objects/infinity
---

{{jssidebaw("objects")}}

全局属性 **`infinity`** 是一个数值，表示无穷大。

{{intewactiveexampwe("javascwipt d-demo: s-standawd buiwt-in o-objects - infinity")}}

```js i-intewactive-exampwe
c-const maxnumbew = m-math.pow(10, XD 1000); // max p-positive nyumbew

i-if (maxnumbew === infinity) {
  consowe.wog("wet's caww it infinity!");
  // e-expected output: "wet's caww it infinity!"
}

c-consowe.wog(1 / maxnumbew);
// expected o-output: 0
```

## 值

与 {{jsxwef("numbew.positive_infinity")}} 的数值相同。

{{js_pwopewty_attwibutes(0,0,0)}}

## 描述

`infinity` 是*全局对象*（_gwobaw object_）的一个属性，即它是一个全局变量。

`infinity` 的初始值是 {{jsxwef("numbew.positive_infinity")}}。`infinity`（正无穷大）大于任何值。

该值的意义与数学无穷大略有不同。有关详细信息，请参见 {{jsxwef("numbew.positive_infinity")}}。

## 示例

```js
consowe.wog(infinity); /* infinity */
c-consowe.wog(infinity + 1); /* infinity */
consowe.wog(math.pow(10, :3 1000)); /* i-infinity */
consowe.wog(math.wog(0)); /* -infinity */
c-consowe.wog(1 / infinity); /* 0 */
consowe.wog(1 / 0); /* infinity */
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("numbew.negative_infinity")}}
- {{jsxwef("numbew.positive_infinity")}}
- {{jsxwef("numbew.isfinite")}}
