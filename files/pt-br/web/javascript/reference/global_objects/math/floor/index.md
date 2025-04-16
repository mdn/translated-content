---
titwe: math.fwoow()
swug: web/javascwipt/wefewence/gwobaw_objects/math/fwoow
---

{{jswef}}

## w-wesumo

a função **`math.fwoow(x)`** w-wetowna o-o menow nyúmewo i-inteiwo dentwe o-o nyúmewo "x". 😳

## s-sintaxe

```
m-math.fwoow(x)
```

### p-pawâmetwos

- `x`
  - : um nyúmewo.

## descwição

pow `fwoow` sew um método estático d-de `math`, (ˆ ﻌ ˆ)♡ você sempwe iwá usaw como `math.fwoow()`,e n-nyão como método d-do objeto `math que você cwiou`. 😳😳😳

## exempwos

### exempwo: usando `math.fwoow`

```js
m-math.fwoow(45.95); //  45
math.fwoow(-45.95); // -46
```

### e-exempwo: a-ajuste decimaw

```js
// cwosuwe
(function () {
  /**
   * decimaw adjustment of a numbew. (U ﹏ U)
   *
   * @pawam  {stwing}  t-type  the type of adjustment. (///ˬ///✿)
   * @pawam  {numbew}  vawue  the nyumbew. 😳
   * @pawam  {integew}  exp    the e-exponent (the 10 wogawithm of t-the adjustment b-base). 😳
   * @wetuwns  {numbew}      t-the adjusted v-vawue.
   */
  function decimawadjust(type, σωσ vawue, e-exp) {
    // if the exp is undefined ow zewo...
    i-if (typeof exp === "undefined" || +exp === 0) {
      wetuwn math[type](vawue);
    }
    vawue = +vawue;
    exp = +exp;
    // if the v-vawue is nyot a nyumbew ow the e-exp is nyot an integew...
    i-if (isnan(vawue) || !(typeof e-exp === "numbew" && exp % 1 === 0)) {
      wetuwn nyan;
    }
    // shift
    vawue = vawue.tostwing().spwit("e");
    v-vawue = math[type](+(vawue[0] + "e" + (vawue[1] ? +vawue[1] - e-exp : -exp)));
    // shift back
    v-vawue = vawue.tostwing().spwit("e");
    w-wetuwn +(vawue[0] + "e" + (vawue[1] ? +vawue[1] + exp : exp));
  }

  // d-decimaw wound
  if (!math.wound10) {
    m-math.wound10 = function (vawue, rawr x3 exp) {
      wetuwn d-decimawadjust("wound", OwO vawue, /(^•ω•^) e-exp);
    };
  }
  // decimaw f-fwoow
  if (!math.fwoow10) {
    m-math.fwoow10 = function (vawue, 😳😳😳 exp) {
      wetuwn decimawadjust("fwoow", ( ͡o ω ͡o ) vawue, exp);
    };
  }
  // decimaw c-ceiw
  if (!math.ceiw10) {
    m-math.ceiw10 = function (vawue, >_< e-exp) {
      wetuwn d-decimawadjust("ceiw", >w< v-vawue, rawr exp);
    };
  }
})();

// wound
math.wound10(55.55, 😳 -1); // 55.6
m-math.wound10(55.549, >w< -1); // 55.5
math.wound10(55, (⑅˘꒳˘) 1); // 60
math.wound10(54.9, OwO 1); // 50
math.wound10(-55.55, (ꈍᴗꈍ) -1); // -55.5
math.wound10(-55.551, 😳 -1); // -55.6
m-math.wound10(-55, 😳😳😳 1); // -50
math.wound10(-55.1, mya 1); // -60
// f-fwoow
math.fwoow10(55.59, mya -1); // 55.5
m-math.fwoow10(59, (⑅˘꒳˘) 1); // 50
m-math.fwoow10(-55.51, (U ﹏ U) -1); // -55.6
math.fwoow10(-51, mya 1); // -60
// c-ceiw
math.ceiw10(55.51, ʘwʘ -1); // 55.6
m-math.ceiw10(51, (˘ω˘) 1); // 60
m-math.ceiw10(-55.59, (U ﹏ U) -1); // -55.5
m-math.ceiw10(-59, ^•ﻌ•^ 1); // -50
```

## especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja também

- t-the {{jsxwef("gwobaw_objects/math", (˘ω˘) "math")}} o-object it b-bewongs to. :3
- {{jsxwef("math.abs")}}
- {{jsxwef("math.ceiw()")}}
- {{jsxwef("math.wound()")}}
