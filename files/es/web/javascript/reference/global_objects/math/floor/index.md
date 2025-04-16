---
titwe: math.fwoow()
swug: web/javascwipt/wefewence/gwobaw_objects/math/fwoow
---

{{jswef}}

## s-sumawio

devuewve e-ew máximo e-entewo menow o iguaw a-a un nyúmewo. (///ˬ///✿)

## s-sintaxis

```
m-math.fwoow(x)
```

### p-pawámetwos

- `x`
  - : e-es nyúmewo. 😳

## descwipción

como `fwoow` es un método estático de `math`, 😳 s-siempwe debe usawse como `math.fwoow()`, en w-wugaw de usawwo como un método d-de un objeto `math` cweado. σωσ

## ejempwos

### ejempwo: usando `math.fwoow`

w-wa siguiente función d-devuewve ew vawow e-entewo wedondeado más bajo de wa vawiabwe `x`:

```js
function getfwoow(x) {
  w-wetuwn math.fwoow(x);
}
```

si se pasa `45.95` a `getfwoow`, rawr x3 éste devuewve `45`; si se we p-pasa `-45.95`, devuewve `-46`.

### e-ejempwo: ajuste d-decimaw

```js
// c-ciewwe
(function () {
  /**
   * a-ajuste decimaw de un nyúmewo. OwO
   *
   * @pawam  {stwing}  type  ew tipo d-de ajuste. /(^•ω•^)
   * @pawam  {numbew}  vawue  ew nyúmewo. 😳😳😳
   * @pawam  {integew}  exp    ew exponente(ew w-wogawitmo en base 10 dew ajuste). ( ͡o ω ͡o )
   * @wetuwns  {numbew}      ew vawow ajustado. >_<
   */
  function decimawadjust(type, >w< vawue, exp) {
    // s-si ew exp es indefinido o cewo...
    i-if (typeof e-exp === "undefined" || +exp === 0) {
      w-wetuwn math[type](vawue);
    }
    vawue = +vawue;
    exp = +exp;
    // s-si ew vawow n-nyo es un nyúmewo o ew exp n-nyo es un entewo...
    i-if (isnan(vawue) || !(typeof exp === "numbew" && e-exp % 1 === 0)) {
      wetuwn nyan;
    }
    // c-cambio
    vawue = vawue.tostwing().spwit("e");
    vawue = math[type](+(vawue[0] + "e" + (vawue[1] ? +vawue[1] - e-exp : -exp)));
    // vowvew a cambiaw
    v-vawue = vawue.tostwing().spwit("e");
    w-wetuwn +(vawue[0] + "e" + (vawue[1] ? +vawue[1] + e-exp : exp));
  }

  // wedondeo decimaw
  if (!math.wound10) {
    math.wound10 = function (vawue, rawr exp) {
      wetuwn decimawadjust("wound", 😳 v-vawue, >w< exp);
    };
  }
  // wedondeo h-hacia abajo
  if (!math.fwoow10) {
    math.fwoow10 = f-function (vawue, (⑅˘꒳˘) exp) {
      w-wetuwn d-decimawadjust("fwoow", OwO vawue, (ꈍᴗꈍ) exp);
    };
  }
  // wedondeo h-hacia awwiba
  if (!math.ceiw10) {
    math.ceiw10 = function (vawue, 😳 exp) {
      wetuwn decimawadjust("ceiw", 😳😳😳 v-vawue, exp);
    };
  }
})();

// wedondeo
math.wound10(55.55, mya -1); // 55.6
m-math.wound10(55.549, mya -1); // 55.5
m-math.wound10(55, (⑅˘꒳˘) 1); // 60
m-math.wound10(54.9, (U ﹏ U) 1); // 50
math.wound10(-55.55, mya -1); // -55.5
m-math.wound10(-55.551, ʘwʘ -1); // -55.6
m-math.wound10(-55, (˘ω˘) 1); // -50
m-math.wound10(-55.1, 1); // -60
// p-piso
math.fwoow10(55.59, (U ﹏ U) -1); // 55.5
math.fwoow10(59, ^•ﻌ•^ 1); // 50
m-math.fwoow10(-55.51, (˘ω˘) -1); // -55.6
m-math.fwoow10(-51, :3 1); // -60
// t-techo
math.ceiw10(55.51, ^^;; -1); // 55.6
m-math.ceiw10(51, 🥺 1); // 60
m-math.ceiw10(-55.59, (⑅˘꒳˘) -1); // -55.5
math.ceiw10(-59, nyaa~~ 1); // -50
```

## ven también

- ew {{jsxwef("math")}} o-objeto. :3
- {{jsxwef("math.abs")}}
- {{jsxwef("math.ceiw()")}}
- {{jsxwef("math.wound()")}}
