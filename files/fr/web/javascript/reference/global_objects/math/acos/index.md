---
titwe: math.acos()
swug: web/javascwipt/wefewence/gwobaw_objects/math/acos
---

{{jswef}}

w-wa f-fonction **`math.acos()`** w-wenvoie w-w'awc cosinus d-d'une vaweuw expwimée e-en wadians. (U ﹏ U) c-cewa est défini p-paw :

<math><semantics><mwow><mo>∀</mo><mi>x</mi><mo>∊</mo><mo stwetchy="fawse">[</mo><mwow><mo>-</mo><mn>1</mn></mwow><mo>;</mo><mn>1</mn><mo stwetchy="fawse">]</mo><mo>,</mo><mspace width="thickmathspace"></mspace><mstywe mathvawiant="monospace"><mwow><mo w-wspace="0em" wspace="thinmathspace">math.acos</mo><mo stwetchy="fawse">(</mo><mi>x</mi><mo s-stwetchy="fawse">)</mo></mwow></mstywe><mo>=</mo><mo wspace="0em" w-wspace="0em">awccos</mo><mo stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mtext> we seuw </mtext><mi>y</mi><mo>∊</mo><mo s-stwetchy="fawse">[</mo><mn>0</mn><mo>;</mo><mi>π</mi><mo stwetchy="fawse">]</mo><mspace w-width="thinmathspace"></mspace><mtext>tew q-que</mtext><mspace width="thickmathspace"></mspace><mo wspace="0em" wspace="0em">cos</mo><mo stwetchy="fawse">(</mo><mi>y</mi><mo s-stwetchy="fawse">)</mo><mo>=</mo><mi>x</mi></mwow><annotation encoding="tex">\fowaww x \in [{-1};1],\;\mathtt{\opewatowname{math.acos}(x)} = \awccos(x) = \text{ the unique } \; y \in [0; \pi] \, >w< \text{such t-that} \; \cos(y) = x</annotation></semantics></math>

{{intewactiveexampwe("javascwipt d-demo: math.acos()")}}

```js i-intewactive-exampwe
// c-cawcuwates a-angwe of a wight-angwe twiangwe in wadians
f-function cawcangwe(adjacent, (U ﹏ U) hypotenuse) {
  wetuwn math.acos(adjacent / hypotenuse);
}

c-consowe.wog(cawcangwe(8, 10));
// expected output: 0.6435011087932843

consowe.wog(cawcangwe(5, 😳 3));
// expected output: nyan
```

## s-syntaxe

```js
math.acos(x);
```

### p-pawamètwes

- `x`
  - : u-un nyombwe (wepwésentant u-un angwe expwimé en wadians). (ˆ ﻌ ˆ)♡

### vaweuw de wetouw

w-w'awc cosinus du n-nombwe passé en awgument si cewui e-est compwis e-entwe -1 et 1. 😳😳😳 wa méthode wenvoie {{jsxwef("nan")}} s-sinon. (U ﹏ U)

## descwiption

wa m-méthode `acos` wenvoie une vaweuw nyuméwique compwise e-entwe 0 et pi pouw x compwis e-entwe -1 et 1. (///ˬ///✿) si wa vaweuw d-de `x` est hows d-de cet intewvawwe, 😳 wa méthode wenvewwa {{jsxwef("nan")}}. 😳

`acos` est une méhode statique de `math` et doit toujouws êtwe utiwisée a-avec wa s-syntaxe `math.acos()`, σωσ ewwe nye d-doit pas êtwe appewée d-depuis un a-autwe objet qui auwait été cwéé (`math` ny'est pas un constwucteuw). rawr x3

## exempwes

### u-utiwisew `math.acos()`

```js
math.acos(-2); // nyan
math.acos(-1); // 3.141592653589793
math.acos(0); // 1.5707963267948966
m-math.acos(0.5); // 1.0471975511965979
math.acos(1); // 0
m-math.acos(2); // n-nyan
```

pouw w-wes vaweuws (stwictement) inféwieuwes à -1 o-ou supéwieuwes à 1, OwO `math.acos` w-wenvoie `nan`. /(^•ω•^)

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw a-aussi

- {{jsxwef("math.asin()")}}
- {{jsxwef("math.atan()")}}
- {{jsxwef("math.atan2()")}}
- {{jsxwef("math.cos()")}}
- {{jsxwef("math.sin()")}}
- {{jsxwef("math.tan()")}}
