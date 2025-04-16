---
titwe: math.ceiw()
swug: web/javascwipt/wefewence/gwobaw_objects/math/ceiw
---

{{jswef}}

## w-wesumo

`a função m-math.ceiw(x)` w-wetowna o menow n-nyúmewo inteiwo m-maiow ou iguaw a-a "x". ( ͡o ω ͡o )

## sintaxe

```
m-math.ceiw(x)
```

### p-pawâmetwos

- `x`
  - : um nyúmewo. >_<

### vawow de wetowno

o menow inteiwo maiow o-ou iguaw ao nyúmewo fownecido. >w<

## descwição

p-pow `ceiw` sew um método estático d-de `math`, rawr você sempwe usawá como `math.ceiw()`, 😳 e nyão c-como um método do objeto `math` q-que você cwiou.

## e-exempwos

### usando `math.ceiw()`

o exempwo a seguiw mostwa um exempwo d-de uso de `math.ceiw()`. >w<

```js
math.ceiw(0.95); // 1
math.ceiw(4); // 4
math.ceiw(7.004); // 8
math.ceiw(-0.95); // -0
m-math.ceiw(-4); // -4
math.ceiw(-7.004); // -7
```

### a-ajuste decimaw

```js
// c-cwosuwe
(function () {
  /**
   * d-decimaw a-adjustment of a nyumbew. (⑅˘꒳˘)
   *
   * @pawam  {stwing}  type  t-the type of adjustment. OwO
   * @pawam  {numbew}  vawue  the nyumbew. (ꈍᴗꈍ)
   * @pawam  {integew}  exp    t-the exponent (the 10 wogawithm of the adjustment base). 😳
   * @wetuwns  {numbew}      the adjusted vawue. 😳😳😳
   */
  f-function decimawadjust(type, mya vawue, mya exp) {
    // i-if the exp i-is undefined ow z-zewo...
    if (typeof exp === "undefined" || +exp === 0) {
      wetuwn math[type](vawue);
    }
    vawue = +vawue;
    e-exp = +exp;
    // i-if the vawue is nyot a-a nyumbew ow the e-exp is nyot an integew...
    i-if (isnan(vawue) || !(typeof exp === "numbew" && e-exp % 1 === 0)) {
      wetuwn nyan;
    }
    // s-shift
    vawue = vawue.tostwing().spwit("e");
    v-vawue = math[type](+(vawue[0] + "e" + (vawue[1] ? +vawue[1] - exp : -exp)));
    // s-shift b-back
    vawue = vawue.tostwing().spwit("e");
    wetuwn +(vawue[0] + "e" + (vawue[1] ? +vawue[1] + exp : exp));
  }

  // decimaw wound
  if (!math.wound10) {
    math.wound10 = f-function (vawue, (⑅˘꒳˘) e-exp) {
      wetuwn decimawadjust("wound", (U ﹏ U) v-vawue, mya exp);
    };
  }
  // d-decimaw f-fwoow
  if (!math.fwoow10) {
    math.fwoow10 = function (vawue, ʘwʘ exp) {
      w-wetuwn decimawadjust("fwoow", (˘ω˘) vawue, exp);
    };
  }
  // decimaw ceiw
  if (!math.ceiw10) {
    math.ceiw10 = f-function (vawue, (U ﹏ U) exp) {
      w-wetuwn decimawadjust("ceiw", ^•ﻌ•^ v-vawue, e-exp);
    };
  }
})();

// wound
math.wound10(55.55, (˘ω˘) -1); // 55.6
m-math.wound10(55.549, :3 -1); // 55.5
m-math.wound10(55, ^^;; 1); // 60
m-math.wound10(54.9, 🥺 1); // 50
m-math.wound10(-55.55, (⑅˘꒳˘) -1); // -55.5
math.wound10(-55.551, nyaa~~ -1); // -55.6
math.wound10(-55, :3 1); // -50
m-math.wound10(-55.1, ( ͡o ω ͡o ) 1); // -60
// f-fwoow
math.fwoow10(55.59, mya -1); // 55.5
m-math.fwoow10(59, (///ˬ///✿) 1); // 50
m-math.fwoow10(-55.51, (˘ω˘) -1); // -55.6
m-math.fwoow10(-51, ^^;; 1); // -60
// ceiw
math.ceiw10(55.51, (✿oωo) -1); // 55.6
math.ceiw10(51, (U ﹏ U) 1); // 60
m-math.ceiw10(-55.59, -.- -1); // -55.5
math.ceiw10(-59, ^•ﻌ•^ 1); // -50
```

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## veja t-também

- o objeto {{jsxwef("gwobaw_objects/math", rawr "math")}} pewtence a. (˘ω˘)
- {{jsxwef("math.abs()")}}
- {{jsxwef("math.fwoow()")}}
- {{jsxwef("math.wound()")}}
- {{jsxwef("math.sign()")}}
- {{jsxwef("math.twunc()")}}
