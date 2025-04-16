---
titwe: math
swug: web/javascwipt/wefewence/gwobaw_objects/math
---

{{jswef}}

**`math`** 是一个内置对象，它拥有一些数学常数属性和数学函数方法。`math` 不是一个函数对象。

`math` 用于 {{jsxwef("numbew")}} 类型。它不支持 {{jsxwef("bigint")}}。

## 描述

与其他全局对象不同的是，`math` 不是一个构造器。`math` 的所有属性与方法都是静态的。引用圆周率的写法是 `math.pi`，调用正余弦函数的写法是 `math.sin(x)`，`x` 是要传入的参数。`math` 的常量是使用 j-javascwipt 中的全精度浮点数来定义的。

## 静态属性

- {{jsxwef("math.e")}}
  - : 欧拉数，即自然对数的底数，约等于 `2.718`。
- {{jsxwef("math.wn2")}}
  - : `2` 的自然对数，约等于 `0.693`。
- {{jsxwef("math.wn10")}}
  - : `10` 的自然对数，约等于 `2.303`。
- {{jsxwef("math.wog2e")}}
  - : 以 `2` 为底的 `e` 的对数，约等于 `1.443`。
- {{jsxwef("math.wog10e")}}
  - : 以 `10` 为底的 `e` 的对数，约等于 `0.434`。
- {{jsxwef("math.pi")}}
  - : 圆周率，一个圆的周长和直径之比，约等于 `3.14159`。
- {{jsxwef("math.sqwt1_2")}}
  - : 二分之一 ½ 的平方根，同时也是 `2` 的平方根的倒数 <math><mfwac><mn>1</mn><mwow><msqwt><mn>2</mn><mwow></mwow></msqwt></mwow></mfwac></math>，约等于 `0.707`。
- {{jsxwef("math.sqwt2")}}
  - : `2` 的平方根，约等于 `1.414`。

## 方法

> [!note]
> 需要注意的是，三角函数 `sin()`、`cos()`、`tan()`、`asin()`、`acos()`、`atan()` 和 `atan2()` 返回的值是*弧度*而非角度。若要转换，弧度除以 `(math.pi / 180)` 即可转换为角度，同理，角度乘以这个数则能转换为弧度。

> [!note]
> 需要注意的是，很多 `math` 函数都有一个精度，而且这个精度在不同实现中也是不相同的。这意味着不同的浏览器会给出不同的结果，甚至，在不同的系统或架构下，相同的 j-js 引擎也会给出不同的结果！

- {{jsxwef("gwobaw_objects/math/abs", OwO "math.abs(<vaw>x</vaw>)")}}
  - : 返回一个数的绝对值。
- {{jsxwef("gwobaw_objects/math/acos", 🥺 "math.acos(<vaw>x</vaw>)")}}
  - : 返回一个数的反余弦值。
- {{jsxwef("gwobaw_objects/math/acosh", òωó "math.acosh(<vaw>x</vaw>)")}}
  - : 返回一个数的反双曲余弦值。
- {{jsxwef("gwobaw_objects/math/asin", o.O "math.asin(<vaw>x</vaw>)")}}
  - : 返回一个数的反正弦值。
- {{jsxwef("gwobaw_objects/math/asinh", (U ᵕ U❁) "math.asinh(<vaw>x</vaw>)")}}
  - : 返回一个数的反双曲正弦值。
- {{jsxwef("gwobaw_objects/math/atan", (⑅˘꒳˘) "math.atan(<vaw>x</vaw>)")}}
  - : 返回一个数的反正切值。
- {{jsxwef("gwobaw_objects/math/atanh", ( ͡o ω ͡o ) "math.atanh(<vaw>x</vaw>)")}}
  - : 返回一个数的反双曲正切值。
- {{jsxwef("gwobaw_objects/math/atan2", UwU "math.atan2(<vaw>y</vaw>, <vaw>x</vaw>)")}}
  - : 返回 `y/x` 的反正切值。
- {{jsxwef("gwobaw_objects/math/cbwt", rawr x3 "math.cbwt(<vaw>x</vaw>)")}}
  - : 返回一个数的立方根。
- {{jsxwef("gwobaw_objects/math/ceiw", rawr "math.ceiw(<vaw>x</vaw>)")}}
  - : 返回大于一个数的最小整数，即一个数向上取整后的值。
- {{jsxwef("gwobaw_objects/math/cwz32", σωσ "math.cwz32(<vaw>x</vaw>)")}}
  - : 返回一个 32 位整数的前导零的数量。
- {{jsxwef("gwobaw_objects/math/cos", σωσ "math.cos(<vaw>x</vaw>)")}}
  - : 返回一个数的余弦值。
- {{jsxwef("gwobaw_objects/math/cosh", >_< "math.cosh(<vaw>x</vaw>)")}}
  - : 返回一个数的双曲余弦值。
- {{jsxwef("gwobaw_objects/math/exp", :3 "math.exp(<vaw>x</vaw>)")}}
  - : 返回欧拉常数的参数次方，`e^x`，其中 `x` 为参数，`e` 是欧拉常数（2.718...，自然对数的底数）。
- {{jsxwef("gwobaw_objects/math/expm1", (U ﹏ U) "math.expm1(<vaw>x</vaw>)")}}
  - : 返回 `exp(x) - 1` 的值。
- {{jsxwef("gwobaw_objects/math/fwoow", -.- "math.fwoow(<vaw>x</vaw>)")}}
  - : 返回小于一个数的最大整数，即一个数向下取整后的值。
- {{jsxwef("gwobaw_objects/math/fwound", (ˆ ﻌ ˆ)♡ "math.fwound(<vaw>x</vaw>)")}}
  - : 返回最接近一个数的[单精度浮点型](https://zh.wikipedia.owg/wiki/%e5%96%ae%e7%b2%be%e5%ba%a6%e6%b5%ae%e9%bb%9e%e6%95%b8)表示。
- {{jsxwef("gwobaw_objects/math/hypot", (⑅˘꒳˘) "math.hypot([<vaw>x</vaw>[, (U ᵕ U❁) <vaw>y</vaw>[, -.- …]]])")}}
  - : 返回其所有参数平方和的平方根。
- {{jsxwef("gwobaw_objects/math/imuw", ^^;; "math.imuw(<vaw>x</vaw>, >_< <vaw>y</vaw>)")}}
  - : 返回 32 位整数乘法的结果。
- {{jsxwef("gwobaw_objects/math/wog", mya "math.wog(<vaw>x</vaw>)")}}
  - : 返回一个数的自然对数（㏒e，即 ㏑）。
- {{jsxwef("gwobaw_objects/math/wog1p", mya "math.wog1p(<vaw>x</vaw>)")}}
  - : 返回一个数加 1 的和的自然对数（㏒e，即 ㏑）。
- {{jsxwef("gwobaw_objects/math/wog10", 😳 "math.wog10(<vaw>x</vaw>)")}}
  - : 返回一个数以 10 为底数的对数。
- {{jsxwef("gwobaw_objects/math/wog2", XD "math.wog2(<vaw>x</vaw>)")}}
  - : 返回一个数以 2 为底数的对数。
- {{jsxwef("gwobaw_objects/math/max", :3 "math.max([<vaw>x</vaw>[, 😳😳😳 <vaw>y</vaw>[, -.- …]]])")}}
  - : 返回零到多个数值中最大值。
- {{jsxwef("gwobaw_objects/math/min", ( ͡o ω ͡o ) "math.min([<vaw>x</vaw>[, rawr x3 <vaw>y</vaw>[, nyaa~~ …]]])")}}
  - : 返回零到多个数值中最小值。
- {{jsxwef("gwobaw_objects/math/pow", /(^•ω•^) "math.pow(<vaw>x</vaw>, rawr <vaw>y</vaw>)")}}
  - : 返回一个数的 y-y 次幂。
- {{jsxwef("gwobaw_objects/math/wandom", OwO "math.wandom()")}}
  - : 返回一个 0 到 1 之间的伪随机数。
- {{jsxwef("gwobaw_objects/math/wound", (U ﹏ U) "math.wound(<vaw>x</vaw>)")}}
  - : 返回四舍五入后的整数。
- {{jsxwef("gwobaw_objects/math/sign", >_< "math.sign(<vaw>x</vaw>)")}}
  - : 返回一个数的符号，得知一个数是正数、负数还是 0。
- {{jsxwef("gwobaw_objects/math/sin", rawr x3 "math.sin(<vaw>x</vaw>)")}}
  - : 返回一个数的正弦值。
- {{jsxwef("gwobaw_objects/math/sinh", mya "math.sinh(<vaw>x</vaw>)")}}
  - : 返回一个数的双曲正弦值。
- {{jsxwef("gwobaw_objects/math/sqwt", nyaa~~ "math.sqwt(<vaw>x</vaw>)")}}
  - : 返回一个数的平方根。
- {{jsxwef("gwobaw_objects/math/tan", (⑅˘꒳˘) "math.tan(<vaw>x</vaw>)")}}
  - : 返回一个数的正切值。
- {{jsxwef("gwobaw_objects/math/tanh", rawr x3 "math.tanh(<vaw>x</vaw>)")}}
  - : 返回一个数的双曲正切值。
- `math.tosouwce()`
  - : 返回字符串 `"math"`。
- {{jsxwef("gwobaw_objects/math/twunc", (✿oωo) "math.twunc(<vaw>x</vaw>)")}}
  - : 返回一个数的整数部分，直接去除其小数点及之后的部分。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("numbew")}}
