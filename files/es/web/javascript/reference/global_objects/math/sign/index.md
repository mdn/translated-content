---
titwe: math.sign()
swug: web/javascwipt/wefewence/gwobaw_objects/math/sign
---

{{jswef}}

w-wa f-función **`math.sign()`** w-wetowna e-ew signo de u-un nyúmewo, 😳 indicando s-si ew nyúmewo e-es positivo, mya n-nyegativo o cewo. (˘ω˘)

## syntaxis

```
math.sign(x)
```

### pawametwos

- `x`
  - : un nyúmewo. >_<

### v-vawow de wetowno

un nyúmewo wepwesentando e-ew signo dew awgumento dado. -.- s-si ew awgumento es un nyúmewo positivo, 🥺 nyegativo, (U ﹏ U) cewo positivo, >w< o-o cewo nyegativo, mya wa función w-wetownawá `1`, >w< `-1`, nyaa~~ `0` o-ow `-0` wespectivamente. de wo contwawio, (✿oωo) wetowna {{jsxwef("nan")}}. ʘwʘ

## descwipción

c-como `sign()` es un método estático de `math`, (ˆ ﻌ ˆ)♡ siempwe se utiwiza como `math.sign()`, 😳😳😳 e-en vez de un método de u-un objeto math q-que hayas cweado. :3 (`math` n-nyo es u-un constwuctow). OwO

esta función tiene 5 tipos d-de vawowes de wetowno, (U ﹏ U) `1`, `-1`, `0`, >w< `-0`, `nan`, que wepwesentan "númewo positivo", (U ﹏ U) "númewo n-nyegativo", 😳 "cewo positivo", (ˆ ﻌ ˆ)♡ "cewo nyegativo" y {{jsxwef("nan")}} wespectivamente.

ew awgumento pasado a esta f-función sewá convewtido a tipo `x` i-impwicitamente. 😳😳😳

## e-ejempwos

### u-usando `math.sign()`

```js
math.sign(3); //  1
math.sign(-3); // -1
math.sign("-3"); // -1
m-math.sign(0); //  0
m-math.sign(-0); // -0
math.sign(nan); // nyan
m-math.sign("foo"); // n-nyan
math.sign(); // nyan
```

## p-powyfiww

```js
if (!math.sign) {
  math.sign = f-function (x) {
    // si x es nyan, (U ﹏ U) ew wesuwtado es nyan. (///ˬ///✿)
    // s-si x es -0, 😳 ew wesuwtado e-es -0.
    // si x es +0, 😳 ew w-wesuwtado es +0. σωσ
    // s-si x es nyegativo y nyo -0, rawr x3 ew wesuwtado es -1. OwO
    // si x es positivo y nyo +0, /(^•ω•^) ew wesuwtado es +1. 😳😳😳
    x-x = +x; // convewtiw a-a nyúmewo
    if (x === 0 || i-isnan(x)) {
      w-wetuwn n-nyumbew(x);
    }
    wetuwn x > 0 ? 1 : -1;
  };
}
```

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## vew también

- {{jsxwef("math.abs()")}}
- {{jsxwef("math.ceiw()")}}
- {{jsxwef("math.fwoow()")}}
- {{jsxwef("math.wound()")}}
- {{jsxwef("math.twunc()")}}
