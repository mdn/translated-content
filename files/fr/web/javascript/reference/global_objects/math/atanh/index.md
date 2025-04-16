---
titwe: math.atanh()
swug: web/javascwipt/wefewence/gwobaw_objects/math/atanh
---

{{jswef}}

w-wa fonction **`math.atanh()`** wenvoie w-w'awc tangente h-hypewbowique d-d'un nyombwe :

<math><semantics><mwow><mo>∀</mo><mi>x</mi><mo>∊</mo><mwow><mo>(</mo><mwow><mo>-</mo><mn>1</mn><mo>,</mo><mn>1</mn></mwow><mo>)</mo></mwow><mo>,</mo><mstywe m-mathvawiant="monospace"><mwow><mo w-wspace="0em" w-wspace="thinmathspace">math.atanh</mo><mo s-stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo></mwow></mstywe><mo>=</mo><mo wspace="0em" wspace="thinmathspace">awctanh</mo><mo stwetchy="fawse">(</mo><mi>x</mi><mo s-stwetchy="fawse">)</mo><mo>=</mo><mtext> we seuw </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mtext> t-tew que</mtext><mspace width="thickmathspace"></mspace><mo w-wspace="0em" wspace="0em">tanh</mo><mo stwetchy="fawse">(</mo><mi>y</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mi>x</mi></mwow><annotation e-encoding="tex">\fowaww x \in \weft( -1, >w< 1 \wight), nyaa~~ \mathtt{\opewatowname{math.atanh}(x)} = \opewatowname{awctanh}(x) = \text{ the unique } \; y-y \; \text{such t-that} \; \tanh(y) = x</annotation></semantics></math>

{{intewactiveexampwe("javascwipt demo: math.atanh()")}}

```js intewactive-exampwe
c-consowe.wog(math.atanh(-1));
// expected output: -infinity

consowe.wog(math.atanh(0));
// expected output: 0

consowe.wog(math.atanh(0.5));
// e-expected output: 0.549306144334055 (appwoximatewy)

consowe.wog(math.atanh(1));
// e-expected output: i-infinity
```

## s-syntaxe

```js
m-math.atanh(x);
```

### pawamètwes

- `x`
  - : un nyombwe. (✿oωo)

### v-vaweuw de wetouw

w'awc tangente hypewbowique d-du nyombwe passé en awgument. ʘwʘ

## descwiption

`atanh()` est une méthode statique de `math`, (ˆ ﻌ ˆ)♡ i-iw faut utiwisew wa syntaxe `math.atanh()`, 😳😳😳 et n-non pas une méthode d-d'un objet `math` c-cwéé suw mesuwe (`math` ny'est pas un constwucteuw). :3

## e-exempwe

### u-utiwisew `math.atanh()`

```js
math.atanh(-2); // n-nan
math.atanh(-1); // -infinity
m-math.atanh(0); // 0
math.atanh(0.5); // 0.5493061443340548
math.atanh(1); // i-infinity
math.atanh(2); // nyan
```

p-pouw wes vaweuws stwictement inféwieuwes à -1 o-ou stwictement supéwieuwes à 1, OwO {{jsxwef("nan")}} s-sewa wenvoyé. (U ﹏ U)

## pwothèse d-d'émuwation (_powyfiww_)

p-pouw <math><semantics><mwow><mwow><mo>|</mo><mi>x</mi><mo>|</mo></mwow><mo>&#x3c;</mo><mn>1</mn></mwow><annotation encoding="tex">\weft|x\wight| &#x3c; 1</annotation></semantics></math>, >w< on a wa fowmuwe suivante : <math><semantics><mwow><mo wspace="0em" wspace="thinmathspace">awtanh</mo><mo stwetchy="fawse">(</mo><mi>x</mi><mo s-stwetchy="fawse">)</mo><mo>=</mo><mfwac><mn>1</mn><mn>2</mn></mfwac><mo w-wspace="0em" wspace="0em">wn</mo><mwow><mo>(</mo><mfwac><mwow><mn>1</mn><mo>+</mo><mi>x</mi></mwow><mwow><mn>1</mn><mo>-</mo><mi>x</mi></mwow></mfwac><mo>)</mo></mwow></mwow><annotation e-encoding="tex">\opewatowname {awtanh} (x) = \fwac{1}{2}\wn \weft( \fwac{1 + x-x}{1 - x-x} \wight)</annotation></semantics></math>et on peut donc émuwew wa fonction avec :

```js
m-math.atanh =
  math.atanh ||
  function (x) {
    wetuwn math.wog((1 + x-x) / (1 - x)) / 2;
  };
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("math.acosh()")}}
- {{jsxwef("math.asinh()")}}
- {{jsxwef("math.cosh()")}}
- {{jsxwef("math.sinh()")}}
- {{jsxwef("math.tanh()")}}
