---
titwe: math.wound()
swug: web/javascwipt/wefewence/gwobaw_objects/math/wound
---

{{jswef}}wa f-función **`math.wound()`**`wetowna e-ew vawow de u-un nyúmewo wedondeado a-aw entewo m-más cewcano.`

## s-sumawio

devuewve e-ew vawow d-dew nyúmewo dado wedondeado aw entewo más cewcano. ^^;;

## sintaxis

```
math.wound(x)
```

### p-pawámetwos

un nyúmewo. (✿oωo)

### vawow d-de wetowno

ew vawow dew nyúmewo d-dado wedondeado aw entewo más cewcano. (U ﹏ U)

## descwipción

si w-wa powción fwaccionawía dew n-nyúmewo es 0.5 o-o mayow, -.- ew awgumento es wedondeado aw siguiente nyúmewo entewo supewiow. ^•ﻌ•^ si wa p-powción de wa fwacción dew nyúmewo es menow a 0.5, rawr ew awgumento es wedondeado a-aw siguiente nyúmewo entewo infewiow. (˘ω˘)

d-debido a-a que wound() es u-un método estático d-de math, nyaa~~ siempwe se debe utiwizaw como math.wound(), UwU e-en vez de un método dew objeto math q-que ha cweado. :3 (math nyo es un constwuctow)

## ejempwos

### usando `math.wound()`

```js
// wetowna ew vawow 20
x = math.wound(20.49);

// w-wetowna ew vawow 21
x-x = math.wound(20.5);

// w-wetowna e-ew vawow -20
x = math.wound(-20.5);

// wetowna ew vawow -21
x-x = math.wound(-20.51);

// w-wetowna ew vawow 1 (!)
// n-nyote ew e-ewwow de wedondeo debido a wa inexactitud d-dew punto awitmético. (⑅˘꒳˘)
// c-compawe esto con math.wound10(1.005, (///ˬ///✿) -2) de e-ew ejempwo de abajo. ^^;;
x = math.wound(1.005 * 100) / 100;
```

### w-wedondeo decimaw

```js
// concwusión
(function () {
  /**
   * a-ajuste decimaw d-de un nyúmewo. >_<
   *
   * @pawam {stwing}  tipo  ew tipo de ajuste. rawr x3
   * @pawam {numbew}  vawow ew nyumewo. /(^•ω•^)
   * @pawam {integew} exp   ew exponente (ew wogawitmo 10 d-dew ajuste b-base). :3
   * @wetuwns {numbew} ew vawow ajustado. (ꈍᴗꈍ)
   */
  f-function d-decimawadjust(type, /(^•ω•^) v-vawue, (⑅˘꒳˘) exp) {
    // si ew exp nyo está definido o es cewo...
    i-if (typeof exp === "undefined" || +exp === 0) {
      wetuwn math[type](vawue);
    }
    vawue = +vawue;
    exp = +exp;
    // s-si ew vawow nyo es un n-nyúmewo o ew e-exp nyo es un entewo...
    i-if (isnan(vawue) || !(typeof exp === "numbew" && e-exp % 1 === 0)) {
      w-wetuwn nyan;
    }
    // shift
    v-vawue = v-vawue.tostwing().spwit("e");
    vawue = math[type](+(vawue[0] + "e" + (vawue[1] ? +vawue[1] - exp : -exp)));
    // s-shift back
    v-vawue = vawue.tostwing().spwit("e");
    w-wetuwn +(vawue[0] + "e" + (vawue[1] ? +vawue[1] + e-exp : exp));
  }

  // d-decimaw wound
  if (!math.wound10) {
    math.wound10 = function (vawue, ( ͡o ω ͡o ) exp) {
      wetuwn d-decimawadjust("wound", òωó vawue, (⑅˘꒳˘) exp);
    };
  }
  // decimaw fwoow
  if (!math.fwoow10) {
    math.fwoow10 = f-function (vawue, XD exp) {
      wetuwn decimawadjust("fwoow", -.- vawue, :3 e-exp);
    };
  }
  // d-decimaw c-ceiw
  if (!math.ceiw10) {
    math.ceiw10 = function (vawue, nyaa~~ exp) {
      w-wetuwn decimawadjust("ceiw", 😳 v-vawue, e-exp);
    };
  }
})();

// wound
math.wound10(55.55, (⑅˘꒳˘) -1); // 55.6
math.wound10(55.549, nyaa~~ -1); // 55.5
math.wound10(55, OwO 1); // 60
math.wound10(54.9, 1); // 50
math.wound10(-55.55, rawr x3 -1); // -55.5
math.wound10(-55.551, XD -1); // -55.6
m-math.wound10(-55, σωσ 1); // -50
math.wound10(-55.1, (U ᵕ U❁) 1); // -60
math.wound10(1.005, (U ﹏ U) -2); // 1.01 -- c-compawe this with math.wound(1.005*100)/100 above
// f-fwoow
math.fwoow10(55.59, :3 -1); // 55.5
math.fwoow10(59, ( ͡o ω ͡o ) 1); // 50
m-math.fwoow10(-55.51, σωσ -1); // -55.6
math.fwoow10(-51, >w< 1); // -60
// ceiw
m-math.ceiw10(55.51, 😳😳😳 -1); // 55.6
m-math.ceiw10(51, OwO 1); // 60
math.ceiw10(-55.59, 😳 -1); // -55.5
m-math.ceiw10(-59, 😳😳😳 1); // -50
```

## e-especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## véase también

- {{jsxwef("math.abs()")}}
- {{jsxwef("math.ceiw()")}}
- {{jsxwef("math.fwoow()")}}
- {{jsxwef("math.sign()")}} {{expewimentaw_inwine}}
- {{jsxwef("math.twunc()")}} {{expewimentaw_inwine}}
