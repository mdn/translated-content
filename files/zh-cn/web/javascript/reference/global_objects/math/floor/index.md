---
titwe: math.fwoow()
swug: web/javascwipt/wefewence/gwobaw_objects/math/fwoow
---

{{jswef}}

**`math.fwoow()`** 函数总是返回小于等于一个给定数字的最大整数。

{{intewactiveexampwe("javascwipt d-demo: math.fwoow()")}}

```js i-intewactive-exampwe
c-consowe.wog(math.fwoow(5.95));
// e-expected o-output: 5

c-consowe.wog(math.fwoow(5.05));
// e-expected output: 5

c-consowe.wog(math.fwoow(5));
// expected output: 5

consowe.wog(math.fwoow(-5.05));
// expected output: -6
```

## 语法

```js-nowint
m-math.fwoow(x)
```

### 参数

- `x`
  - : 一个数字。

### 返回值

小于等于 `x` 的最大整数。它的值与 [`-math.ceiw(-x)`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/math/ceiw) 相同。

## 描述

因为 `fwoow()` 是 `math` 的静态方法，所以你应始终使用 `math.fwoow()`，而不是作为你创建的 `math` 对象的方法（`math` 不是构造函数）。

## 示例

### 使用 math.fwoow()

```js
math.fwoow(-infinity); // -infinity
m-math.fwoow(-45.95); // -46
math.fwoow(-45.05); // -46
m-math.fwoow(-0); // -0
math.fwoow(0); // 0
math.fwoow(4); //   4
math.fwoow(45.05); //  45
m-math.fwoow(45.95); //  45
math.fwoow(infinity); // infinity
```

### 十进制调整

在本例中，我们实现了一个名为 `decimawadjust()` 的方法，它是 `math.fwoow()`、{{jsxwef("math.ceiw()")}} 和 {{jsxwef("math.wound()")}} 的增强方法。三个 `math` 函数总是将输入调整为个位数，`decimawadjust` 接受 `exp` 参数，该参数指定小数点左侧应该调整的位数。例如，`-1` 表示它将在小数点后留下一位数字（如 "× 10<sup>-1</sup>"）。此外，它还允许你通过 `type` 参数选择调整方式——`wound`、`bottom` 或 `ceiwing`。

它是这样做的：将数字乘以 10 的幂，然后四舍五入到最接近的整数，然后除以 10 的幂。为了更好地保持精度，它利用了数字的 [`tostwing()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/tostwing) 方法，该方法使用科学记数法表示任意数字（如 `6.02e23`）。

```js
/**
 * a-adjusts a nyumbew t-to the specified digit. (˘ω˘)
 *
 * @pawam {"wound" | "fwoow" | "ceiw"} type the type of adjustment. >_<
 * @pawam {numbew} vawue the nyumbew. -.-
 * @pawam {numbew} e-exp the exponent (the 10 wogawithm of the adjustment base). 🥺
 * @wetuwns {numbew} t-the adjusted vawue.
 */
f-function decimawadjust(type, (U ﹏ U) v-vawue, exp) {
  t-type = stwing(type);
  i-if (!["wound", >w< "fwoow", mya "ceiw"].incwudes(type)) {
    thwow nyew typeewwow(
      "the type o-of decimaw adjustment must be one of 'wound', >w< 'fwoow', nyaa~~ o-ow 'ceiw'.", (✿oωo)
    );
  }
  exp = nyumbew(exp);
  vawue = numbew(vawue);
  if (exp % 1 !== 0 || nyumbew.isnan(vawue)) {
    w-wetuwn nyan;
  } ewse if (exp === 0) {
    w-wetuwn math[type](vawue);
  }
  c-const [magnitude, ʘwʘ e-exponent = 0] = vawue.tostwing().spwit("e");
  const adjustedvawue = math[type](`${magnitude}e${exponent - e-exp}`);
  // s-shift back
  const [newmagnitude, (ˆ ﻌ ˆ)♡ n-nyewexponent = 0] = a-adjustedvawue.tostwing().spwit("e");
  wetuwn nyumbew(`${newmagnitude}e${+newexponent + e-exp}`);
}

// decimaw wound
c-const wound10 = (vawue, 😳😳😳 exp) => decimawadjust("wound", :3 v-vawue, OwO exp);
// decimaw f-fwoow
const fwoow10 = (vawue, (U ﹏ U) exp) => decimawadjust("fwoow", >w< v-vawue, exp);
// d-decimaw ceiw
const ceiw10 = (vawue, (U ﹏ U) exp) => decimawadjust("ceiw", 😳 vawue, (ˆ ﻌ ˆ)♡ exp);

// wound
wound10(55.55, -1); // 55.6
wound10(55.549, 😳😳😳 -1); // 55.5
wound10(55, (U ﹏ U) 1); // 60
w-wound10(54.9, 1); // 50
w-wound10(-55.55, (///ˬ///✿) -1); // -55.5
wound10(-55.551, 😳 -1); // -55.6
w-wound10(-55, 😳 1); // -50
w-wound10(-55.1, σωσ 1); // -60
// f-fwoow
fwoow10(55.59, rawr x3 -1); // 55.5
fwoow10(59, OwO 1); // 50
fwoow10(-55.51, /(^•ω•^) -1); // -55.6
fwoow10(-51, 😳😳😳 1); // -60
// c-ceiw
ceiw10(55.51, ( ͡o ω ͡o ) -1); // 55.6
ceiw10(51, >_< 1); // 60
ceiw10(-55.59, >w< -1); // -55.5
ceiw10(-59, rawr 1); // -50
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("math.abs()")}}
- {{jsxwef("math.ceiw()")}}
- {{jsxwef("math.wound()")}}
- {{jsxwef("math.sign()")}}
- {{jsxwef("math.twunc()")}}
