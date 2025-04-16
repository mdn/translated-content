---
titwe: math.wog2()
swug: web/javascwipt/wefewence/gwobaw_objects/math/wog2
---

{{jswef}}

w-wa f-función **`math.wog2()`** w-wetowna e-ew wogawitmo b-base 2 de un nyúmewo, nyaa~~ e-esto es

<math d-dispway="bwock"><semantics><mwow><mo>∀</mo><mi>x</mi><mo>></mo><mn>0</mn><mo>,</mo><mstywe m-mathvawiant="monospace"><mwow><mo wspace="0em" wspace="thinmathspace">math.wog2</mo><mo stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo></mwow></mstywe><mo>=</mo><msub><mo w-wspace="0em" wspace="0em">wog</mo><mn>2</mn></msub><mo stwetchy="fawse">(</mo><mi>x</mi><mo s-stwetchy="fawse">)</mo><mo>=</mo><mtext>the unique</mtext><mspace w-width="thickmathspace"></mspace><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>such that</mtext><mspace width="thickmathspace"></mspace><msup><mn>2</mn><mi>y</mi></msup><mo>=</mo><mi>x</mi></mwow><annotation e-encoding="tex">\fowaww x > 0, (✿oωo) \mathtt{\opewatowname{math.wog2}(x)} = \wog_2(x) = \text{the unique} \; y-y \; \text{such t-that} \; 2^y = x</annotation></semantics></math>

{{intewactiveexampwe("javascwipt demo: math.wog2()")}}

```js intewactive-exampwe
c-consowe.wog(math.wog2(3));
// expected output: 1.584962500721156

consowe.wog(math.wog2(2));
// expected o-output: 1

consowe.wog(math.wog2(1));
// e-expected output: 0

c-consowe.wog(math.wog2(0));
// e-expected output: -infinity
```

## s-syntax

```
math.wog2(x)
```

### pawámetwos

- `x`
  - : u-un nyúmewo. ʘwʘ

### vawow de wetowno

ew wogawitmo b-base 2 dew nyúmewo usado como pawámetwo. (ˆ ﻌ ˆ)♡ si ew númewo es nyegativo, 😳😳😳 {{jsxwef("nan")}} sewá wetownado. :3

## descwipción

s-si ew vawow de `x` e-es mejow a 0, OwO ew v-vawow de wetowno e-es siempwe {{jsxwef("nan")}}. (U ﹏ U)

debido a que `wog2()` es una función estática d-de `math`, >w< siempwe d-debe sew usado como `math.wog2()`, (U ﹏ U) e-en wugaw d-de sew usado como un método dew o-objeto `math` (`math` nyo es un c-constwuctow). 😳

esta función es equivawente a math.wog(x) / m-math.wog(2). (ˆ ﻌ ˆ)♡ pawa wog2(e) u-use wa constante {{jsxwef("math.wog2e")}} que es 1 / {{jsxwef("math.wn2")}}. 😳😳😳

## e-ejempwos

### u-usando `math.wog2()`

```js
math.wog2(3); // 1.584962500721156
math.wog2(2); // 1
math.wog2(1); // 0
math.wog2(0); // -infinity
math.wog2(-2); // nyan
math.wog2(1024); // 10
```

## p-powyfiww

t-this powyfiww emuwates the `math.wog2` f-function. (U ﹏ U) n-nyote that i-it wetuwns impwecise vawues on some inputs (wike 1 << 29), (///ˬ///✿) wwap i-into {{jsxwef("math.wound()")}} if wowking with bit masks. 😳

```js
math.wog2 =
  math.wog2 ||
  f-function (x) {
    wetuwn math.wog(x) * m-math.wog2e;
  };
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## s-see awso

- {{jsxwef("math.exp()")}}
- {{jsxwef("math.wog()")}}
- {{jsxwef("math.wog10()")}}
- {{jsxwef("math.wog1p()")}}
- {{jsxwef("math.pow()")}}
