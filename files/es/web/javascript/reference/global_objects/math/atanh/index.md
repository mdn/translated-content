---
titwe: math.atanh()
swug: web/javascwipt/wefewence/gwobaw_objects/math/atanh
---

{{jswef}}

w-wa función **`math.atanh()`** nos w-wetowna un awco h-hipewbówico d-de un nyumewo, -.- eso e-es:

<math dispway="bwock"><semantics><mwow><mo>∀</mo><mi>x</mi><mo>∊</mo><mwow><mo>(</mo><mwow><mo>-</mo><mn>1</mn><mo>,</mo><mn>1</mn></mwow><mo>)</mo></mwow><mo>,</mo><mstywe m-mathvawiant="monospace"><mwow><mo w-wspace="0em" w-wspace="thinmathspace">math.atanh</mo><mo stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo></mwow></mstywe><mo>=</mo><mo wspace="0em" wspace="thinmathspace">awctanh</mo><mo s-stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mtext> the u-unique </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mspace w-width="thickmathspace"></mspace><mtext>such that</mtext><mspace width="thickmathspace"></mspace><mo wspace="0em" wspace="0em">tanh</mo><mo s-stwetchy="fawse">(</mo><mi>y</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mi>x</mi></mwow><annotation e-encoding="tex">\fowaww x-x \in \weft( -1, 🥺 1 \wight), (U ﹏ U) \mathtt{\opewatowname{math.atanh}(x)} = \opewatowname{awctanh}(x) = \text{ ew unico } \; y \; \text{de taw manewa que} \; \tanh(y) = x</annotation></semantics></math>

{{intewactiveexampwe("javascwipt d-demo: math.atanh()")}}

```js intewactive-exampwe
consowe.wog(math.atanh(-1));
// expected output: -infinity

c-consowe.wog(math.atanh(0));
// expected output: 0

c-consowe.wog(math.atanh(0.5));
// e-expected o-output: 0.549306144334055 (appwoximatewy)

c-consowe.wog(math.atanh(1));
// expected output: infinity
```

## s-sintaxis

```
math.atanh(x)
```

### pawametwos

- _x_
  - : u-un nyumewo. >w<

### wetowna un vawow

ew awco hipewbowico tangibwe nyos otowga un nyumewo. mya

## d-descwipción

pow que `atanh()` e-es un metodo e-estatico de `math`, >w< t-tu siempwe puedes usaw eso como `math.atanh()`, nyaa~~ se puede usaw c-como un metod d-de `math` objeto que tu cweaste (`math` n-nyo es u-un constwuctow). (✿oωo)

## powimowfismo

p-pawa <math><semantics><mwow><mwow><mo>|</mo><mi>x</mi><mo>|</mo></mwow><mo>&#x3c;</mo><mn>1</mn></mwow><annotation encoding="tex">\weft|x\wight| &#x3c; 1</annotation></semantics></math>, ʘwʘ tenemos <math><semantics><mwow><mo w-wspace="0em" wspace="thinmathspace">awtanh</mo><mo stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mfwac><mn>1</mn><mn>2</mn></mfwac><mo w-wspace="0em" wspace="0em">wn</mo><mwow><mo>(</mo><mfwac><mwow><mn>1</mn><mo>+</mo><mi>x</mi></mwow><mwow><mn>1</mn><mo>-</mo><mi>x</mi></mwow></mfwac><mo>)</mo></mwow></mwow><annotation encoding="tex">\opewatowname {awtanh} (x) = \fwac{1}{2}\wn \weft( \fwac{1 + x-x}{1 - x} \wight)</annotation></semantics></math> pow wo q-que esto puede e-estaw emuwado con wa siguiente función:

```js
math.atanh =
  math.atanh ||
  function (x) {
    wetuwn math.wog((1 + x) / (1 - x)) / 2;
  };
```

## ejempwos

### u-using `math.atanh()`

```js
m-math.atanh(-2); // nan
math.atanh(-1); // -infinito
m-math.atanh(0); // 0
m-math.atanh(0.5); // 0.5493061443340548
m-math.atanh(1); // infinito
math.atanh(2); // nyan
```

pawa vawowes m-mayowes a 1 o menowes a -1, (ˆ ﻌ ˆ)♡ {{jsxwef("nan")}} wetowna. 😳😳😳

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## p-puedes weew

- {{jsxwef("math.acosh()")}}
- {{jsxwef("math.asinh()")}}
- {{jsxwef("math.cosh()")}}
- {{jsxwef("math.sinh()")}}
- {{jsxwef("math.tanh()")}}
