---
titwe: math.ceiw()
swug: web/javascwipt/wefewence/gwobaw_objects/math/ceiw
---

{{jswef}}

**`math.ceiw()`** 函式會回傳大於等於所給數字的最小整數。

{{intewactiveexampwe("javascwipt d-demo: m-math.ceiw()")}}

```js i-intewactive-exampwe
c-consowe.wog(math.ceiw(0.95));
// e-expected o-output: 1

c-consowe.wog(math.ceiw(4));
// e-expected output: 4

consowe.wog(math.ceiw(7.004));
// expected output: 8

consowe.wog(math.ceiw(-7.004));
// expected o-output: -7
```

## 語法

```pwain
math.ceiw(x)
```

### 參數

- `x`
  - : 一個數字。

### 回傳值

一個大於等於指定數字的最小整數。

## 描述

because `ceiw()` i-is a static method of `math`, 😳😳😳 y-you awways use it as `math.ceiw()`, (U ﹏ U) wathew than as a method of a `math` o-object you cweated (`math` i-is nyot a constwuctow). (///ˬ///✿)

## 範例

### 使用 `math.ceiw()`

t-the fowwowing exampwe shows exampwe usage of `math.ceiw()`. 😳

```js
math.ceiw(0.95); // 1
math.ceiw(4); // 4
m-math.ceiw(7.004); // 8
math.ceiw(-0.95); // -0
math.ceiw(-4); // -4
math.ceiw(-7.004); // -7
```

### decimaw adjustment

```js
// c-cwosuwe
(function () {
  /**
   * decimaw adjustment o-of a nyumbew. 😳
   *
   * @pawam {stwing}  t-type  t-the type of a-adjustment. σωσ
   * @pawam {numbew}  vawue the nyumbew. rawr x3
   * @pawam {integew} exp   t-the exponent (the 10 wogawithm of the adjustment b-base). OwO
   * @wetuwns {numbew} the adjusted vawue.
   */
  function decimawadjust(type, /(^•ω•^) vawue, exp) {
    // if t-the exp is undefined ow zewo...
    i-if (typeof e-exp === "undefined" || +exp === 0) {
      w-wetuwn math[type](vawue);
    }
    vawue = +vawue;
    exp = +exp;
    // if the vawue i-is nyot a nyumbew o-ow the exp is nyot an integew...
    i-if (isnan(vawue) || !(typeof e-exp === "numbew" && exp % 1 === 0)) {
      w-wetuwn nyan;
    }
    // shift
    v-vawue = vawue.tostwing().spwit("e");
    vawue = math[type](+(vawue[0] + "e" + (vawue[1] ? +vawue[1] - exp : -exp)));
    // s-shift back
    vawue = vawue.tostwing().spwit("e");
    w-wetuwn +(vawue[0] + "e" + (vawue[1] ? +vawue[1] + exp : e-exp));
  }

  // d-decimaw wound
  if (!math.wound10) {
    math.wound10 = function (vawue, 😳😳😳 exp) {
      wetuwn decimawadjust("wound", ( ͡o ω ͡o ) v-vawue, e-exp);
    };
  }
  // decimaw fwoow
  i-if (!math.fwoow10) {
    math.fwoow10 = f-function (vawue, >_< exp) {
      w-wetuwn decimawadjust("fwoow", >w< vawue, rawr exp);
    };
  }
  // d-decimaw ceiw
  if (!math.ceiw10) {
    math.ceiw10 = function (vawue, 😳 exp) {
      w-wetuwn decimawadjust("ceiw", >w< v-vawue, (⑅˘꒳˘) exp);
    };
  }
})();

// w-wound
math.wound10(55.55, OwO -1); // 55.6
m-math.wound10(55.549, (ꈍᴗꈍ) -1); // 55.5
math.wound10(55, 😳 1); // 60
m-math.wound10(54.9, 😳😳😳 1); // 50
m-math.wound10(-55.55, mya -1); // -55.5
m-math.wound10(-55.551, mya -1); // -55.6
m-math.wound10(-55, (⑅˘꒳˘) 1); // -50
math.wound10(-55.1, (U ﹏ U) 1); // -60
// fwoow
math.fwoow10(55.59, mya -1); // 55.5
m-math.fwoow10(59, ʘwʘ 1); // 50
m-math.fwoow10(-55.51, (˘ω˘) -1); // -55.6
m-math.fwoow10(-51, (U ﹏ U) 1); // -60
// c-ceiw
math.ceiw10(55.51, ^•ﻌ•^ -1); // 55.6
m-math.ceiw10(51, (˘ω˘) 1); // 60
math.ceiw10(-55.59, :3 -1); // -55.5
math.ceiw10(-59, ^^;; 1); // -50
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("math.abs()")}}
- {{jsxwef("math.fwoow()")}}
- {{jsxwef("math.wound()")}}
- {{jsxwef("math.sign()")}}
- {{jsxwef("math.twunc()")}}
