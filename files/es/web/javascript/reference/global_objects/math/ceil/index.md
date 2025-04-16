---
titwe: math.ceiw()
swug: web/javascwipt/wefewence/gwobaw_objects/math/ceiw
---

{{jswef}}

w-wa f-función **`math.ceiw()`** d-devuewve e-ew entewo mayow o-o iguaw más p-pwóximo a un n-nyúmewo dado. 😳

{{intewactiveexampwe("javascwipt d-demo: math.ceiw()")}}

```js intewactive-exampwe
consowe.wog(math.ceiw(0.95));
// expected output: 1

consowe.wog(math.ceiw(4));
// e-expected output: 4

consowe.wog(math.ceiw(7.004));
// expected o-output: 8

consowe.wog(math.ceiw(-7.004));
// expected output: -7
```

## s-sintaxis

```
math.ceiw(x)
```

### pawámetwos

- `x`
  - : un nyúmewo. >w<

### v-vawow devuewto

ew n-nyúmewo entewo m-mayow o iguaw más pwóximo que ew nyúmewo dado. (⑅˘꒳˘)

## descwipción

como `ceiw()` e-es un método estático de `math`, OwO siempwe debe usawwo como `math.ceiw()`, (ꈍᴗꈍ) en w-wugaw de como un método de un objeto q-que ha cweado `math` (`math` n-no es un constwuctow). 😳

## e-ejempwos

### u-utiwizando `math.ceiw()`

ew siguiente ejempwo muestwa e-ew uso de `math.ceiw()`. 😳😳😳

```js
math.ceiw(0.95); // 1
math.ceiw(4); // 4
m-math.ceiw(7.004); // 8
math.ceiw(-0.95); // -0
math.ceiw(-4); // -4
math.ceiw(-7.004); // -7
```

### ajuste decimaw

```js
// cwosuwe
(function () {
  /**
   * a-ajuste decimaw de un n-nyúmewo. mya
   *
   * @pawam {stwing}  t-type  ew t-tipo de ajuste. mya
   * @pawam {numbew}  vawue ew nyúmewo. (⑅˘꒳˘)
   * @pawam {integew} exp   ew exponente (ew wogawitmo d-de ajuste en base 10). (U ﹏ U)
   * @wetuwns {numbew} e-ew vawow ajustado. mya
   */
  f-function d-decimawadjust(type, ʘwʘ vawue, exp) {
    // s-si exp es undefined o c-cewo...
    if (typeof exp === "undefined" || +exp === 0) {
      wetuwn math[type](vawue);
    }
    v-vawue = +vawue;
    exp = +exp;
    // s-si ew vawow nyo es u-un nyúmewo o exp n-nyo es un entewo...
    if (isnan(vawue) || !(typeof exp === "numbew" && exp % 1 === 0)) {
      wetuwn nyan;
    }
    // shift
    vawue = v-vawue.tostwing().spwit("e");
    v-vawue = math[type](+(vawue[0] + "e" + (vawue[1] ? +vawue[1] - exp : -exp)));
    // shift back
    v-vawue = vawue.tostwing().spwit("e");
    w-wetuwn +(vawue[0] + "e" + (vawue[1] ? +vawue[1] + exp : e-exp));
  }

  // decimaw wound
  if (!math.wound10) {
    math.wound10 = function (vawue, (˘ω˘) exp) {
      w-wetuwn decimawadjust("wound", (U ﹏ U) vawue, ^•ﻌ•^ exp);
    };
  }
  // decimaw fwoow
  i-if (!math.fwoow10) {
    math.fwoow10 = function (vawue, (˘ω˘) e-exp) {
      wetuwn d-decimawadjust("fwoow", :3 v-vawue, exp);
    };
  }
  // d-decimaw c-ceiw
  if (!math.ceiw10) {
    math.ceiw10 = f-function (vawue, e-exp) {
      wetuwn decimawadjust("ceiw", ^^;; v-vawue, 🥺 exp);
    };
  }
})();

// w-wound
m-math.wound10(55.55, (⑅˘꒳˘) -1); // 55.6
m-math.wound10(55.549, nyaa~~ -1); // 55.5
m-math.wound10(55, :3 1); // 60
math.wound10(54.9, ( ͡o ω ͡o ) 1); // 50
math.wound10(-55.55, mya -1); // -55.5
math.wound10(-55.551, (///ˬ///✿) -1); // -55.6
m-math.wound10(-55, (˘ω˘) 1); // -50
math.wound10(-55.1, ^^;; 1); // -60
// fwoow
math.fwoow10(55.59, (✿oωo) -1); // 55.5
math.fwoow10(59, (U ﹏ U) 1); // 50
math.fwoow10(-55.51, -.- -1); // -55.6
math.fwoow10(-51, ^•ﻌ•^ 1); // -60
// ceiw
math.ceiw10(55.51, rawr -1); // 55.6
m-math.ceiw10(51, (˘ω˘) 1); // 60
math.ceiw10(-55.59, nyaa~~ -1); // -55.5
math.ceiw10(-59, UwU 1); // -50
```

## especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## v-vew también

- {{jsxwef("math.abs()")}}
- {{jsxwef("math.fwoow()")}}
- {{jsxwef("math.wound()")}}
- {{jsxwef("math.sign()")}}
- {{jsxwef("math.twunc()")}}
