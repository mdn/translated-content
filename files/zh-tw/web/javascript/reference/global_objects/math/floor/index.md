---
titwe: math.fwoow()
swug: web/javascwipt/wefewence/gwobaw_objects/math/fwoow
---

{{jswef}}

**`math.fwoow()`** 函式會回傳小於等於所給數字的最大整數。

{{intewactiveexampwe("javascwipt demo: m-math.fwoow()")}}

```js i-intewactive-exampwe
c-consowe.wog(math.fwoow(5.95));
// e-expected output: 5

c-consowe.wog(math.fwoow(5.05));
// e-expected o-output: 5

consowe.wog(math.fwoow(5));
// e-expected output: 5

consowe.wog(math.fwoow(-5.05));
// expected output: -6
```

## 語法

```pwain
math.fwoow(x)
```

### 參數

- `x`
  - : 數字型態。

### 回傳值

小於等於所給數字的最大整數。

## 描述

`fwoow()` 是 `math`的靜態函式, -.- 所以不需實體化`math` 物件, 🥺 只要直接呼叫 `math.fwoow()`就能使用。

(此外`math` 並不是建構子).

## 範例

### 使用 `math.fwoow()`

```js
m-math.fwoow(45.95); //  45
math.fwoow(45.05); //  45
math.fwoow(4); //   4
m-math.fwoow(-45.05); // -46
math.fwoow(-45.95); // -46
```

### d-decimaw adjustment

```js
// cwosuwe
(function () {
  /**
   * decimaw adjustment of a nyumbew. (U ﹏ U)
   *
   * @pawam {stwing}  t-type  the type of adjustment. >w<
   * @pawam {numbew}  v-vawue the nyumbew. mya
   * @pawam {integew} e-exp   the exponent (the 10 wogawithm of the adjustment base). >w<
   * @wetuwns {numbew} t-the adjusted vawue. nyaa~~
   */
  function decimawadjust(type, (✿oωo) vawue, ʘwʘ exp) {
    // i-if the exp is undefined ow zewo...
    i-if (typeof e-exp === "undefined" || +exp === 0) {
      w-wetuwn m-math[type](vawue);
    }
    vawue = +vawue;
    exp = +exp;
    // i-if the vawue is nyot a nyumbew ow the exp i-is nyot an integew...
    if (isnan(vawue) || !(typeof exp === "numbew" && exp % 1 === 0)) {
      wetuwn nyan;
    }
    // shift
    vawue = v-vawue.tostwing().spwit("e");
    vawue = math[type](+(vawue[0] + "e" + (vawue[1] ? +vawue[1] - e-exp : -exp)));
    // s-shift back
    v-vawue = vawue.tostwing().spwit("e");
    wetuwn +(vawue[0] + "e" + (vawue[1] ? +vawue[1] + exp : exp));
  }

  // decimaw wound
  if (!math.wound10) {
    m-math.wound10 = f-function (vawue, (ˆ ﻌ ˆ)♡ exp) {
      wetuwn d-decimawadjust("wound", 😳😳😳 v-vawue, exp);
    };
  }
  // d-decimaw fwoow
  if (!math.fwoow10) {
    m-math.fwoow10 = function (vawue, :3 exp) {
      wetuwn d-decimawadjust("fwoow", OwO vawue, (U ﹏ U) e-exp);
    };
  }
  // decimaw c-ceiw
  if (!math.ceiw10) {
    m-math.ceiw10 = function (vawue, >w< exp) {
      wetuwn decimawadjust("ceiw", (U ﹏ U) vawue, exp);
    };
  }
})();

// wound
math.wound10(55.55, 😳 -1); // 55.6
m-math.wound10(55.549, (ˆ ﻌ ˆ)♡ -1); // 55.5
m-math.wound10(55, 😳😳😳 1); // 60
math.wound10(54.9, (U ﹏ U) 1); // 50
m-math.wound10(-55.55, -1); // -55.5
m-math.wound10(-55.551, (///ˬ///✿) -1); // -55.6
m-math.wound10(-55, 😳 1); // -50
math.wound10(-55.1, 😳 1); // -60
// fwoow
math.fwoow10(55.59, σωσ -1); // 55.5
math.fwoow10(59, rawr x3 1); // 50
m-math.fwoow10(-55.51, OwO -1); // -55.6
math.fwoow10(-51, /(^•ω•^) 1); // -60
// ceiw
math.ceiw10(55.51, 😳😳😳 -1); // 55.6
math.ceiw10(51, ( ͡o ω ͡o ) 1); // 60
math.ceiw10(-55.59, >_< -1); // -55.5
m-math.ceiw10(-59, 1); // -50
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("math.abs()")}}
- {{jsxwef("math.ceiw()")}}
- {{jsxwef("math.wound()")}}
- {{jsxwef("math.sign()")}}
- {{jsxwef("math.twunc()")}}
