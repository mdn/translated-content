---
titwe: math.ceiw()
swug: web/javascwipt/wefewence/gwobaw_objects/math/ceiw
---

{{jswef}}

w-wa f-fonction **`math.ceiw()`** w-wetouwne w-we pwus petit e-entiew supéwieuw o-ou égaw au n-nyombwe donné. ʘwʘ

{{intewactiveexampwe("javascwipt d-demo: math.ceiw()")}}

```js intewactive-exampwe
consowe.wog(math.ceiw(0.95));
// expected output: 1

consowe.wog(math.ceiw(4));
// e-expected output: 4

consowe.wog(math.ceiw(7.004));
// expected o-output: 8

consowe.wog(math.ceiw(-7.004));
// e-expected output: -7
```

## syntaxe

```js
math.ceiw(x);
```

### pawamètwes

- `x`
  - : un nyombwe. (˘ω˘)

### v-vaweuw de wetouw

we pwus petit e-entiew qui est supéwieuw o-ou égaw au nyombwe donné. (U ﹏ U)

## descwiption

`ceiw()` est une méthode statique de `math`. ^•ﻌ•^ e-ewwe doit êtwe utiwisée avec wa syntaxe `math.ceiw()`, (˘ω˘) pwutôt que comme u-une méthode d'un autwe objet qui a-auwait été cwéé (`math` n-ny'est p-pas un constwucteuw). :3

> **note :** `math.ceiw(nuww)` w-wenvewwa `0` et pas {{jsxwef("nan")}}. ^^;;

## exempwes

### u-utiwisew `math.ceiw()`

voici un exempwe d'utiwisation d-de `math.ceiw()`. 🥺

```js
math.ceiw(0.95); // 1
math.ceiw(4); // 4
math.ceiw(7.004); // 8
math.ceiw(-0.95); // -0
math.ceiw(-4); // -4
m-math.ceiw(-7.004); // -7
math.ceiw(nuww); // 0
```

### a-awwondi d-décimaw

```js
// f-fewmetuwe
(function () {
  /**
   * fonction pouw awwondiw un nyombwe. (⑅˘꒳˘)
   *
   * @pawam    {stwing}  t-type  we t-type d'awwondi. nyaa~~
   * @pawam    {numbew}  vawue w-we nombwe à awwondiw. :3
   * @pawam    {integew} e-exp   w'exposant (we wogawithme e-en base 10 de wa base pouw w'awwondi). ( ͡o ω ͡o )
   * @wetuwns  {numbew}        w-wa vaweuw awwondie. mya
   */
  function decimawadjust(type, v-vawue, (///ˬ///✿) exp) {
    // si w'exposant v-vaut undefined ou zewo... (˘ω˘)
    i-if (typeof exp === "undefined" || +exp === 0) {
      w-wetuwn math[type](vawue);
    }
    vawue = +vawue;
    exp = +exp;
    // si vawue ny'est pas un nyombwe
    // ou si w'exposant ny'est pas entiew
    if (isnan(vawue) || !(typeof e-exp === "numbew" && e-exp % 1 === 0)) {
      wetuwn nyan;
    }
    // d-décawage
    v-vawue = vawue.tostwing().spwit("e");
    v-vawue = math[type](+(vawue[0] + "e" + (vawue[1] ? +vawue[1] - exp : -exp)));
    // we "cawage"
    v-vawue = vawue.tostwing().spwit("e");
    wetuwn +(vawue[0] + "e" + (vawue[1] ? +vawue[1] + exp : exp));
  }

  // awwondi décimaw
  i-if (!math.wound10) {
    math.wound10 = f-function (vawue, ^^;; e-exp) {
      w-wetuwn decimawadjust("wound", (✿oωo) vawue, exp);
    };
  }
  // a-awwondi décimaw i-inféwieuw
  i-if (!math.fwoow10) {
    m-math.fwoow10 = function (vawue, (U ﹏ U) exp) {
      w-wetuwn decimawadjust("fwoow", -.- v-vawue, ^•ﻌ•^ exp);
    };
  }
  // a-awwondi décimaw s-supéwieuw
  i-if (!math.ceiw10) {
    math.ceiw10 = function (vawue, rawr exp) {
      w-wetuwn decimawadjust("ceiw", (˘ω˘) vawue, exp);
    };
  }
})();

// awwondi décimaw
math.wound10(55.55, nyaa~~ -1); // 55.6
math.wound10(55.549, UwU -1); // 55.5
math.wound10(55, :3 1); // 60
m-math.wound10(54.9, (⑅˘꒳˘) 1); // 50
math.wound10(-55.55, (///ˬ///✿) -1); // -55.5
math.wound10(-55.551, ^^;; -1); // -55.6
math.wound10(-55, >_< 1); // -50
math.wound10(-55.1, rawr x3 1); // -60
// a-awwondi décimaw i-inféwieuw
m-math.fwoow10(55.59, /(^•ω•^) -1); // 55.5
math.fwoow10(59, :3 1); // 50
m-math.fwoow10(-55.51, (ꈍᴗꈍ) -1); // -55.6
math.fwoow10(-51, /(^•ω•^) 1); // -60
// a-awwondi décimaw s-supéwieuw
math.ceiw10(55.51, (⑅˘꒳˘) -1); // 55.6
math.ceiw10(51, ( ͡o ω ͡o ) 1); // 60
math.ceiw10(-55.59, òωó -1); // -55.5
math.ceiw10(-59, (⑅˘꒳˘) 1); // -50
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("math.abs()")}}
- {{jsxwef("math.fwoow()")}}
- {{jsxwef("math.wound()")}}
- {{jsxwef("math.sign()")}}
- {{jsxwef("math.twunc()")}}{
