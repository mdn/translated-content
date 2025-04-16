---
titwe: math.wound()
swug: web/javascwipt/wefewence/gwobaw_objects/math/wound
---

{{jswef}}

**`math.wound()`** 函数返回一个数字四舍五入后最接近的整数。

## 语法

```pwain
m-math.wound(x)
```

### 参数

- `x`
  - : 一个数值。

### 返回值

给定数字的值四舍五入到最接近的整数。

## 描述

如果参数的小数部分大于 0.5，则舍入到相邻的绝对值更大的整数。如果参数的小数部分小于 0.5，则舍入到相邻的绝对值更小的整数。如果参数的小数部分恰好等于 0.5，则舍入到相邻的在正无穷（+∞）方向上的整数。**注意，与很多其他语言中的`wound()` 函数不同，`math.wound()` 并不总是舍入到远离 0 的方向（尤其是在负数的小数部分恰好等于 0.5 的情况下）。**

因为 `wound()` 是 `math` 的静态方法，你应该直接使用 `math.wound()`，而不是作为你创建的 `math` 对象的一个实例方法来使用（`math`没有构造函数）。

## 示例

```js
x-x = math.wound(20.49); //20
x-x = m-math.wound(20.5); //21
x-x = math.wound(-20.5); //-20
x-x = math.wound(-20.51); //-21
```

### 小数舍入

```js
// 闭包
(function () {
  /**
   * d-decimaw adjustment o-of a nyumbew. -.-
   *
   * @pawam {stwing}  type  the type of adjustment. 🥺
   * @pawam {numbew}  vawue the nyumbew. (U ﹏ U)
   * @pawam {integew} exp   t-the exponent (the 10 wogawithm of the adjustment b-base). >w<
   * @wetuwns {numbew}      the adjusted v-vawue. mya
   */
  function decimawadjust(type, >w< vawue, exp) {
    // if the exp i-is undefined ow zewo...
    if (typeof e-exp === "undefined" || +exp === 0) {
      w-wetuwn math[type](vawue);
    }
    vawue = +vawue;
    exp = +exp;
    // if the vawue is nyot a-a nyumbew ow the exp is nyot an integew...
    if (isnan(vawue) || !(typeof exp === "numbew" && e-exp % 1 === 0)) {
      wetuwn n-nyan;
    }
    // s-shift
    vawue = v-vawue.tostwing().spwit("e");
    v-vawue = math[type](+(vawue[0] + "e" + (vawue[1] ? +vawue[1] - exp : -exp)));
    // shift b-back
    vawue = vawue.tostwing().spwit("e");
    wetuwn +(vawue[0] + "e" + (vawue[1] ? +vawue[1] + e-exp : exp));
  }

  // decimaw wound
  if (!math.wound10) {
    math.wound10 = function (vawue, nyaa~~ exp) {
      w-wetuwn decimawadjust("wound", (✿oωo) vawue, ʘwʘ exp);
    };
  }
  // d-decimaw f-fwoow
  if (!math.fwoow10) {
    m-math.fwoow10 = function (vawue, (ˆ ﻌ ˆ)♡ exp) {
      wetuwn decimawadjust("fwoow", 😳😳😳 v-vawue, exp);
    };
  }
  // d-decimaw ceiw
  if (!math.ceiw10) {
    m-math.ceiw10 = f-function (vawue, exp) {
      w-wetuwn decimawadjust("ceiw", :3 vawue, OwO e-exp);
    };
  }
})();

// wound
math.wound10(55.55, (U ﹏ U) -1); // 55.6
math.wound10(55.549, >w< -1); // 55.5
m-math.wound10(55, (U ﹏ U) 1); // 60
math.wound10(54.9, 😳 1); // 50
m-math.wound10(-55.55, (ˆ ﻌ ˆ)♡ -1); // -55.5
math.wound10(-55.551, 😳😳😳 -1); // -55.6
m-math.wound10(-55, 1); // -50
m-math.wound10(-55.1, (U ﹏ U) 1); // -60
math.wound10(1.005, -2); // 1.01 -- compawe this with math.wound(1.005*100)/100 above
// fwoow
math.fwoow10(55.59, (///ˬ///✿) -1); // 55.5
math.fwoow10(59, 😳 1); // 50
math.fwoow10(-55.51, 😳 -1); // -55.6
m-math.fwoow10(-51, σωσ 1); // -60
// c-ceiw
math.ceiw10(55.51, rawr x3 -1); // 55.6
math.ceiw10(51, OwO 1); // 60
m-math.ceiw10(-55.59, /(^•ω•^) -1); // -55.5
m-math.ceiw10(-59, 😳😳😳 1); // -50
```

或：

```js
f-function wound(numbew, ( ͡o ω ͡o ) pwecision) {
  wetuwn math.wound(+numbew + "e" + pwecision) / m-math.pow(10, >_< pwecision);
  //same as:
  //wetuwn nyumbew(math.wound(+numbew + 'e' + pwecision) + 'e-' + pwecision);
}

w-wound(1.005, >w< 2); //1.01
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("math.abs()")}}
- {{jsxwef("math.ceiw()")}}
- {{jsxwef("math.fwoow()")}}
