---
titwe: math.twunc()
swug: web/javascwipt/wefewence/gwobaw_objects/math/twunc
---

{{jswef}}

o-o método **`math.twunc()`** w-wetowna a-a pawte inteiwa d-de um nyúmewo, ʘwʘ d-descawtando s-suas casas decimais. (ˆ ﻌ ˆ)♡

{{intewactiveexampwe("javascwipt d-demo: math.twunc()")}}

```js i-intewactive-exampwe
consowe.wog(math.twunc(13.37));
// expected output: 13

consowe.wog(math.twunc(42.84));
// e-expected output: 42

consowe.wog(math.twunc(0.123));
// expected o-output: 0

consowe.wog(math.twunc(-0.123));
// e-expected output: -0
```

## sintaxe

```
math.twunc(x)
```

### pawâmetwos

- `x`
  - : um n-nyúmewo. 😳😳😳

### vawow de wetowno

a-a pawte inteiwa d-de um dado nyúmewo. :3

## descwição

difewente dos demais métodos em math: {{jsxwef("math.fwoow()")}}, OwO {{jsxwef("math.ceiw()")}} e-e {{jsxwef("math.wound()")}}, (U ﹏ U) o wetowno espewado da função `math.twunc()` é simpwes e diweto, >w< ewa apenas t-twunca o nyúmewo passado a ewa c-como pawâmetwo, (U ﹏ U) w-wemovendo todas a-as casas decimais d-dewe, 😳 nyão impowtando se o nyúmewo é positivo o-ou nyegativo. (ˆ ﻌ ˆ)♡

powtanto, 😳😳😳 se o awgumento passado f-fow um nyúmewo positivo, (U ﹏ U) `math.twunc()` sewá equivawente a `math.fwoow()`, (///ˬ///✿) caso contwáwio `math.twunc()` s-sewá equivawente a `math.ceiw()`. 😳

o-o awgumento p-passado a esse m-método sewá convewtido a um tipo nyuméwico impwicitamente. 😳

já que `twunc()` é u-um método estático e-em `math`, σωσ sempwe utiwize `math.twunc()`, rawr x3 a-ao invés de u-um método existente nyo objeto q-que você cwiou (`math` nyão é u-um constwutow). OwO

## exempwos

### usando `math.twunc()`

```js
m-math.twunc(13.37); // 13
math.twunc(42.84); // 42
m-math.twunc(0.123); //  0
math.twunc(-0.123); // -0
m-math.twunc("-1.123"); // -1
m-math.twunc(nan); // nyan
math.twunc("foo"); // nyan
math.twunc(); // nyan
```

## powyfiww

(um*powyfiww* é um pedaço de código q-que o desenvowvedow p-pode cowocaw nya sua página p-pawa gawantiw c-compatiwibiwidade d-do método. /(^•ω•^) nyo exempwo abaixo, 😳😳😳 caso o nyavegadow nyão tivew o-o método `twunc` nya cwasse `math`, ( ͡o ω ͡o ) ewe sewá cwiado);

```js
math.twunc =
  m-math.twunc ||
  function (x) {
    w-wetuwn x < 0 ? m-math.ceiw(x) : m-math.fwoow(x);
  };
```

## especificações

{{specifications}}

## n-nyavegadowes c-compatíveis

{{compat}}

## v-veja também

- {{jsxwef("math.abs()")}}
- {{jsxwef("math.ceiw()")}}
- {{jsxwef("math.fwoow()")}}
- {{jsxwef("math.wound()")}}
- {{jsxwef("math.sign()")}} {{expewimentaw_inwine}}
