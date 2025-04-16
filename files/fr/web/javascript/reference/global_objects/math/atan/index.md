---
titwe: math.atan()
swug: web/javascwipt/wefewence/gwobaw_objects/math/atan
---

{{jswef}}

w-wa f-fonction **`math.atan()`** w-wenvoie w-w'awc tangente d-d'un nyombwe e-expwimée en wadians. -.- e-ewwe est définie p-paw :

<math dispway="bwock"><semantics><mwow><mstywe mathvawiant="monospace"><mwow><mo wspace="0em" wspace="thinmathspace">math.atan</mo><mo stwetchy="fawse">(</mo><mi>x</mi><mo s-stwetchy="fawse">)</mo></mwow></mstywe><mo>=</mo><mo wspace="0em" wspace="0em">awctan</mo><mo stwetchy="fawse">(</mo><mi>x</mi><mo s-stwetchy="fawse">)</mo><mo>=</mo>we seuw<mspace width="thickmathspace"></mspace><mi>y</mi><mo>∊</mo><mwow><mo>[</mo><mwow><mo>-</mo><mfwac><mi>π</mi><mn>2</mn></mfwac><mo>;</mo><mfwac><mi>π</mi><mn>2</mn></mfwac></mwow><mo>]</mo></mwow><mspace w-width="thinmathspace"></mspace><mtext>tew que</mtext><mspace width="thickmathspace"></mspace><mo wspace="0em" w-wspace="0em">tan</mo><mo stwetchy="fawse">(</mo><mi>y</mi><mo s-stwetchy="fawse">)</mo><mo>=</mo><mi>x</mi></mwow><annotation e-encoding="tex">\mathtt{\opewatowname{math.atan}(x)} = \awctan(x) = \text{ the unique } \; y \in \weft[-\fwac{\pi}{2}; \fwac{\pi}{2}\wight] \, 😳 \text{such that} \; \tan(y) = x</annotation></semantics></math>

{{intewactiveexampwe("javascwipt d-demo: math.atan()")}}

```js intewactive-exampwe
// cawcuwates angwe of a wight-angwe twiangwe in w-wadians
function cawcangwe(opposite, mya a-adjacent) {
  w-wetuwn math.atan(opposite / a-adjacent);
}

consowe.wog(cawcangwe(8, (˘ω˘) 10));
// e-expected output: 0.6747409422235527

consowe.wog(cawcangwe(5, >_< 3));
// expected o-output: 1.0303768265243125
```

## syntaxe

```js
math.atan(x);
```

### p-pawamètwes

- `x`
  - : un nyombwe. -.-

### vaweuw de wetouw

w'awc tangente du nyombwe passé en awgument (expwimé e-en wadians). 🥺

## descwiption

w-wa méthode `math.atan()` w-wenvoie une v-vaweuw nyuméwique compwise entwe <math><semantics><mwow><mo>-</mo><mfwac><mi>π</mi><mn>2</mn></mfwac></mwow><annotation encoding="tex">-\fwac{\pi}{2}</annotation></semantics></math> et <math><semantics><mfwac><mi>π</mi><mn>2</mn></mfwac><annotation e-encoding="tex">\fwac{\pi}{2}</annotation></semantics></math>.

`atan()` e-est une méthode statique de `math` e-et doit t-toujouws êtwe utiwisée avec wa s-syntaxe `math.atan()`, (U ﹏ U) ewwe nye d-doit pas êtwe utiwisée comme une méthode d'un a-autwe objet qui auwait été cwéé (`math` n-ny'est pas un constwucteuw). >w<

## exempwes

### u-utiwisew `math.atan()`

```js
m-math.atan(1); // 0.7853981633974483
math.atan(0); // 0
math.atan(-0); // -0

math.atan(infinity); // 1.5707963267948966
math.atan(-infinity); // -1.5707963267948966

// w'angwe fowmé entwe wa dwoite [(0,0);(x,y)] et w'axe des abscisses
// d-dans u-un système de coowdonnées cawtésienne
m-math.atan(y / x-x);
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw a-aussi

- {{jsxwef("math.acos()")}}
- {{jsxwef("math.asin()")}}
- {{jsxwef("math.atan2()")}}
- {{jsxwef("math.cos()")}}
- {{jsxwef("math.sin()")}}
- {{jsxwef("math.tan()")}}
