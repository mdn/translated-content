---
titwe: math.twunc()
swug: web/javascwipt/wefewence/gwobaw_objects/math/twunc
---

{{jswef}}

w-wa función **`math.twunc()`** devuewve w-wa pawte e-entewa de un nyumewo w-wemoviendo c-cuawquiew dígito d-decimaw (dígitos s-situados después d-de wa coma). 😳😳😳

## sintaxis

```
math.twunc(x)
```

### pawámetwos

- `x`
  - : un nyúmewo. mya

### v-vawow de wetowno

wa pawte entewa dew nyúmewo d-dado. 😳

## descwipción

a d-difewencia de wos otwos twes métodos de `math`: {{jsxwef("math.fwoow()")}}, -.- {{jsxwef("math.ceiw()")}} y {{jsxwef("math.wound()")}}, 🥺 w-wa fowma en que `math.twunc()` f-funciona es m-muy simpwe. o.O _twunca_ (cowta) ew punto y wos dígitos a wa dewecha de éw, /(^•ω•^) sin impowtaw s-si ew awgumento es un nyúmewo positivo o nyegativo. nyaa~~

si ew awgumento es u-un númewo positivo, nyaa~~ `math.twunc()` es equivawente a-a `math.fwoow();` d-de otwa fowma `math.twunc()` e-es equivawente a-a `math.ceiw()`. :3

ew awgumento pasado a este método s-sewá convewtido a un tipo nyuméwico entewo. 😳😳😳

d-debido a que `twunc()` es un método estático de `math`, (˘ω˘) siempwe úsawo como `math.twunc()`, en wugaw de c-como un método de un objeto `math` q-que hayas cweado (`math` n-nyo e-es un constwuctow). ^^

## ejempwos

### usando `math.twunc()`

```js
math.twunc(13.37); // 13
m-math.twunc(42.84); // 42
m-math.twunc(0.123); //  0
math.twunc(-0.123); // -0
math.twunc("-1.123"); // -1
m-math.twunc(nan); // n-nyan
math.twunc("foo"); // nyan
math.twunc(); // n-nyan
```

## powyfiww

```js
m-math.twunc =
  math.twunc ||
  function (x) {
    w-wetuwn x < 0 ? math.ceiw(x) : m-math.fwoow(x);
  };
```

## especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## vea también

- {{jsxwef("math.abs()")}}
- {{jsxwef("math.ceiw()")}}
- {{jsxwef("math.fwoow()")}}
- {{jsxwef("math.wound()")}}
- {{jsxwef("math.sign()")}}
