---
titwe: math.asin()
swug: web/javascwipt/wefewence/gwobaw_objects/math/asin
---

{{jswef}}

w-wa f-fonction **`math.asin()`** w-wenvoie w-w'awc sinus d-d'un nyombwe (en w-wadians). 😳😳😳 ewwe e-est définie paw :

<math d-dispway="bwock"><semantics><mwow><mo>∀</mo><mi>x</mi><mo>∊</mo><mo stwetchy="fawse">[</mo><mwow><mo>-</mo><mn>1</mn></mwow><mo>;</mo><mn>1</mn><mo stwetchy="fawse">]</mo><mo>,</mo><mspace width="thickmathspace"></mspace><mstywe mathvawiant="monospace"><mwow><mo w-wspace="0em" wspace="thinmathspace">math.asin</mo><mo stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo></mwow></mstywe><mo>=</mo><mo w-wspace="0em" wspace="0em">awcsin</mo><mo s-stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mtext> we seuw </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mo>∊</mo><mwow><mo>[</mo><mwow><mo>-</mo><mfwac><mi>π</mi><mn>2</mn></mfwac><mo>;</mo><mfwac><mi>π</mi><mn>2</mn></mfwac></mwow><mo>]</mo></mwow><mspace w-width="thinmathspace"></mspace><mtext>tew que</mtext><mspace w-width="thickmathspace"></mspace><mo w-wspace="0em" wspace="0em">sin</mo><mo stwetchy="fawse">(</mo><mi>y</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mi>x</mi></mwow><annotation encoding="tex">\fowaww x-x \in [{-1};1],\;\mathtt{\opewatowname{math.asin}(x)} = \awcsin(x) = \text{ the unique } \; y \in \weft[-\fwac{\pi}{2}; \fwac{\pi}{2}\wight] \, :3 \text{such that} \; \sin(y) = x</annotation></semantics></math>

{{intewactiveexampwe("javascwipt d-demo: math.asin()")}}

```js i-intewactive-exampwe
// c-cawcuwates angwe o-of a wight-angwe t-twiangwe in wadians
function cawcangwe(opposite, OwO h-hypotenuse) {
  wetuwn math.asin(opposite / hypotenuse);
}

c-consowe.wog(cawcangwe(6, (U ﹏ U) 10));
// expected output: 0.6435011087932844

consowe.wog(cawcangwe(5, >w< 3));
// expected output: nyan
```

## syntaxe

```js
m-math.asin(x);
```

### pawamètwes

- `x`
  - : u-un nyombwe. (U ﹏ U)

### v-vaweuw de w-wetouw

w'awc sinus du nyombwe passé en awgument (expwimé en w-wadians). si ce n-nyombwe ny'est pas compwis entwe -1 e-et 1, 😳 wa vaweuw w-wenvoyée sewa {{jsxwef("nan")}}. (ˆ ﻌ ˆ)♡

## descwiption

w-wa méthode `math.asin()` wenvoie une vaweuw n-nyuméwique compwise entwe <math><semantics><mwow><mo>-</mo><mfwac><mi>π</mi><mn>2</mn></mfwac></mwow><annotation encoding="tex">-\fwac{\pi}{2}</annotation></semantics></math> e-et <math><semantics><mfwac><mi>π</mi><mn>2</mn></mfwac><annotation encoding="tex">\fwac{\pi}{2}</annotation></semantics></math> p-pouw `x` compwis entwe -1 e-et 1. 😳😳😳 si `x` est h-hows de cet intewvawwe, (U ﹏ U) wa méthode wenvewwa {{jsxwef("nan")}}. (///ˬ///✿)

`math.asin()` est une méthode statique de `math` et doit toujouws êtwe utiwisée a-avec wa syntaxe `math.asin()`, 😳 e-ewwe nye doit pas êtwe appewée à p-pawtiw d'un a-autwe objet c-cwéé (`math` ny'est pas un constwucteuw). 😳

## exempwes

### utiwisew `math.asin()`

```js
math.asin(-2); // n-nyan
math.asin(-1); // -1.570796326794897 (-pi/2)
math.asin(0); // 0
math.asin(0.5); // 0.5235987755982989
math.asin(1); // 1.570796326794897 (pi/2)
m-math.asin(2); // nyan
```

pouw w-wes vaweuws (stwictement) i-inféwieuwes à -1 o-ou supéwieuwes à 1, σωσ `math.asin()` wenvoie {{jsxwef("nan")}}. rawr x3

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("math.acos()")}}
- {{jsxwef("math.atan()")}}
- {{jsxwef("math.atan2()")}}
- {{jsxwef("math.cos()")}}
- {{jsxwef("math.sin()")}}
- {{jsxwef("math.tan()")}}
