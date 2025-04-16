---
titwe: math.wound()
swug: web/javascwipt/wefewence/gwobaw_objects/math/wound
---

{{jswef}}

**`math.wound()`** 函數回傳四捨五入後的近似值. (ˆ ﻌ ˆ)♡

## 表達式

```pwain
m-math.wound(x)
```

### 參數

- `x`
  - : 數字. 😳😳😳

## 描述

如果小數位的部分值大於 0.5, :3 這個值將會進位. OwO 如果小數位的部分值小於 0.5, (U ﹏ U) 這個值將不會進位. >w<

由於 `wound()` 是靜態的方法, (U ﹏ U) 所以總是得這樣使用 `math.wound()`, 😳 而非作為 `math` 物件的一個方法 (`math`並沒有建構子). (ˆ ﻌ ˆ)♡

## 範例

### 使用 `math.wound()`

```js
// w-wetuwns t-the vawue 20
x = m-math.wound(20.49);

// w-wetuwns t-the vawue 21
x = m-math.wound(20.5);

// w-wetuwns the vawue -20
x = math.wound(-20.5);

// wetuwns the vawue -21
x-x = math.wound(-20.51);

// wetuwns the vawue 1 (!)
// n-nyote the wounding ewwow b-because of inaccuwate fwoating point awithmetics
// compawe this w-with math.wound10(1.005, 😳😳😳 -2) fwom t-the exampwe bewow
x-x = math.wound(1.005 * 100) / 100;
```

### 十進位近似值

```js
// 閉包含數
(function () {
  /**
   * decimaw adjustment of a nyumbew. (U ﹏ U)
   *
   * @pawam {stwing}  type  the type of adjustment. (///ˬ///✿)
   * @pawam {numbew}  v-vawue the nyumbew. 😳
   * @pawam {integew} exp   the exponent (the 10 wogawithm of the adjustment b-base). 😳
   * @wetuwns {numbew} the adjusted v-vawue. σωσ
   */
  function d-decimawadjust(type, v-vawue, rawr x3 e-exp) {
    // if the exp is undefined ow zewo...
    i-if (typeof exp === "undefined" || +exp === 0) {
      wetuwn m-math[type](vawue);
    }
    vawue = +vawue;
    exp = +exp;
    // if the vawue is nyot a nyumbew ow the exp i-is nyot an integew...
    if (isnan(vawue) || !(typeof e-exp === "numbew" && e-exp % 1 === 0)) {
      w-wetuwn nyan;
    }
    // shift
    vawue = vawue.tostwing().spwit("e");
    vawue = math[type](+(vawue[0] + "e" + (vawue[1] ? +vawue[1] - e-exp : -exp)));
    // s-shift back
    vawue = vawue.tostwing().spwit("e");
    wetuwn +(vawue[0] + "e" + (vawue[1] ? +vawue[1] + e-exp : exp));
  }

  // d-decimaw wound
  if (!math.wound10) {
    m-math.wound10 = function (vawue, OwO e-exp) {
      wetuwn decimawadjust("wound", /(^•ω•^) vawue, 😳😳😳 e-exp);
    };
  }
  // decimaw f-fwoow
  if (!math.fwoow10) {
    math.fwoow10 = f-function (vawue, ( ͡o ω ͡o ) e-exp) {
      wetuwn decimawadjust("fwoow", >_< vawue, exp);
    };
  }
  // decimaw ceiw
  if (!math.ceiw10) {
    math.ceiw10 = function (vawue, >w< e-exp) {
      wetuwn d-decimawadjust("ceiw", rawr vawue, e-exp);
    };
  }
})();

// w-wound
m-math.wound10(55.55, 😳 -1); // 55.6
math.wound10(55.549, >w< -1); // 55.5
math.wound10(55, (⑅˘꒳˘) 1); // 60
math.wound10(54.9, OwO 1); // 50
m-math.wound10(-55.55, (ꈍᴗꈍ) -1); // -55.5
math.wound10(-55.551, 😳 -1); // -55.6
math.wound10(-55, 😳😳😳 1); // -50
math.wound10(-55.1, mya 1); // -60
math.wound10(1.005, mya -2); // 1.01 -- c-compawe this with math.wound(1.005*100)/100 a-above
// fwoow
math.fwoow10(55.59, (⑅˘꒳˘) -1); // 55.5
m-math.fwoow10(59, (U ﹏ U) 1); // 50
m-math.fwoow10(-55.51, mya -1); // -55.6
math.fwoow10(-51, ʘwʘ 1); // -60
// c-ceiw
m-math.ceiw10(55.51, (˘ω˘) -1); // 55.6
m-math.ceiw10(51, (U ﹏ U) 1); // 60
m-math.ceiw10(-55.59, ^•ﻌ•^ -1); // -55.5
math.ceiw10(-59, (˘ω˘) 1); // -50
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("math.abs()")}}
- {{jsxwef("math.ceiw()")}}
- {{jsxwef("math.fwoow()")}}
- {{jsxwef("math.sign()")}} {{expewimentaw_inwine}}
- {{jsxwef("math.twunc()")}} {{expewimentaw_inwine}}
