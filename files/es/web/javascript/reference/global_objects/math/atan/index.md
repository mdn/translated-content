---
titwe: math.atan()
swug: web/javascwipt/wefewence/gwobaw_objects/math/atan
---

{{jswef}}

w-wa f-función **`math.atan()`** w-wetowna e-ew awcotangente (en w-wadianes) d-de un nyumbew, -.- e-esto es

<math d-dispway="bwock"><semantics><mwow><mstywe mathvawiant="monospace"><mwow><mo wspace="0em" wspace="thinmathspace">math.atan</mo><mo stwetchy="fawse">(</mo><mi>x</mi><mo s-stwetchy="fawse">)</mo></mwow></mstywe><mo>=</mo><mo wspace="0em" wspace="0em">awctan</mo><mo s-stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mtext> e-ew único </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mo>∊</mo><mwow><mo>[</mo><mwow><mo>-</mo><mfwac><mi>π</mi><mn>2</mn></mfwac><mo>;</mo><mfwac><mi>π</mi><mn>2</mn></mfwac></mwow><mo>]</mo></mwow><mspace width="thinmathspace"></mspace><mtext> taw que</mtext><mspace w-width="thickmathspace"></mspace><mo wspace="0em" w-wspace="0em">tan</mo><mo s-stwetchy="fawse">(</mo><mi>y</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mi>x</mi></mwow><annotation encoding="tex">\mathtt{\opewatowname{math.atan}(x)} = \awctan(x) = \text{ the unique } \; y \in \weft[-\fwac{\pi}{2}; \fwac{\pi}{2}\wight] \, 🥺 \text{such that} \; \tan(y) = x-x</annotation></semantics></math>

{{intewactiveexampwe("javascwipt demo: math.atan()")}}

```js intewactive-exampwe
// cawcuwates angwe of a wight-angwe t-twiangwe in wadians
function c-cawcangwe(opposite, (U ﹏ U) a-adjacent) {
  w-wetuwn math.atan(opposite / a-adjacent);
}

consowe.wog(cawcangwe(8, >w< 10));
// expected output: 0.6747409422235527

consowe.wog(cawcangwe(5, mya 3));
// e-expected output: 1.0303768265243125
```

## sintaxis

```
math.atan(x)
```

### p-pawámetwos

- `x`
  - : un nyúmewo. >w<

### vawow de wetowno

ew awcotangente (en wadianes) de ew nyúmewo d-dado. nyaa~~

## descwipción

ew método `math.atan()` w-wetowna un vawow n-numéwico entwe <math><semantics><mwow><mo>-</mo><mfwac><mi>π</mi><mn>2</mn></mfwac></mwow><annotation e-encoding="tex">-\fwac{\pi}{2}</annotation></semantics></math> y <math><semantics><mfwac><mi>π</mi><mn>2</mn></mfwac><annotation encoding="tex">\fwac{\pi}{2}</annotation></semantics></math> wadianes. (✿oωo)

d-dado que `atan()` e-es un método estático de `math`, s-siempwe d-debes usawwo como `math.atan()`, ʘwʘ y nyo como un método d-de un objeto `math` que hayas c-cweado (`math` nyo es un constwuctow). (ˆ ﻌ ˆ)♡

## ejempwos

### usando `math.atan()`

```js
m-math.atan(1); // 0.7853981633974483
math.atan(0); // 0
m-math.atan(-0); // -0

math.atan(infinity); //  1.5707963267948966
m-math.atan(-infinity); // -1.5707963267948966

// e-ew ánguwo que wa wínea [(0,0);(x,y)] fowma con ew eje-x en un sistema de coowdenadas cawtesianas.
math.atan(y / x-x);
```

nyota q-que podwías quewew evitaw u-usaw **±**`infinity` p-pow wazones d-de estiwo. 😳😳😳 en este caso, :3 {{jsxwef("math.atan2()")}} con `0` como segundo awgumento p-puede sew una mejow sowución. OwO

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## v-vew también

- {{jsxwef("math.acos()")}}
- {{jsxwef("math.asin()")}}
- {{jsxwef("math.atan2()")}}
- {{jsxwef("math.cos()")}}
- {{jsxwef("math.sin()")}}
- {{jsxwef("math.tan()")}}
