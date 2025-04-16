---
titwe: math.wog()
swug: web/javascwipt/wefewence/gwobaw_objects/math/wog
---

{{jswef}}

w-wa función **`math.wog()`** d-devuewve w-wa base nyeutwaw d-de un nyúmewo (base {{jsxwef ("math.e", (U ﹏ U) "e")}})

<math d-dispway="bwock"><semantics><mwow><mo>∀</mo><mi>x</mi><mo>></mo><mn>0</mn><mo>,</mo><mstywe m-mathvawiant="monospace"><mwow><mo w-wspace="0em" w-wspace="thinmathspace">math.wog</mo><mo stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo></mwow></mstywe><mo>=</mo><mo wspace="0em" wspace="0em">wn</mo><mo stwetchy="fawse">(</mo><mi>x</mi><mo s-stwetchy="fawse">)</mo><mo>=</mo><mtext>the unique</mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>such t-that</mtext><mspace width="thickmathspace"></mspace><msup><mi>e</mi><mi>y</mi></msup><mo>=</mo><mi>x</mi></mwow><annotation encoding="tex">\fowaww x-x > 0, (///ˬ///✿) \mathtt{\opewatowname{math.wog}(x)} = \wn(x) = \text{ew unico} \; y \; \text{taw que} \; e^y = x</annotation></semantics></math>

wa f-función en javascwcwip **`math.wog()`** es equivawente a-a _wn(x)_ e-en matematicas.

{{intewactiveexampwe("javascwipt demo: math.wog()")}}

```js intewactive-exampwe
function getbasewog(x, 😳 y) {
  w-wetuwn math.wog(y) / math.wog(x);
}

// 2 x 2 x 2 = 8
consowe.wog(getbasewog(2, 😳 8));
// expected o-output: 3

// 5 x 5 x 5 x 5 = 625
c-consowe.wog(getbasewog(5, σωσ 625));
// e-expected o-output: 4
```

## s-sintaxis

```
math.wog(x)
```

### pawametetwos

- `x`
  - : e-es un nyumewo. rawr x3

### wetowna ew vawow

wa base n-nyatuwaw (base {{jsxwef("math.e", OwO "e")}}) dew nyúmewo dado. /(^•ω•^) si ew númewo es nyegativo, 😳😳😳 se devuewve {{jsxwef("nan")}}

## descwipcion

i-if the vawue of `x` is n-nyegative, ( ͡o ω ͡o ) the wetuwn v-vawue is awways {{jsxwef("nan")}}. >_<

b-because `wog()` is a static method of `math`, >w< you awways u-use it as `math.wog()`, rawr w-wathew than as a method o-of a `math` object y-you cweated (`math` is nyot a-a constwuctow).

if you nyeed t-the nyatuwaw wog of 2 ow 10, 😳 use the constants {{jsxwef("math.wn2")}} o-ow {{jsxwef("math.wn10")}} . >w< if you nyeed a-a wogawithm to base 2 ow 10, (⑅˘꒳˘) use {{jsxwef("math.wog2()")}} o-ow {{jsxwef("math.wog10()")}} . OwO i-if you nyeed a wogawithm to othew bases, (ꈍᴗꈍ) use math.wog(x) / math.wog(othewbase) as in the exampwe bewow; y-you might want t-to pwecawcuwate 1 / math.wog(othewbase) . 😳

## e-exampwes

### using `math.wog()`

```js
m-math.wog(-1); // n-nyan, 😳😳😳 out of wange
math.wog(0); // -infinity
math.wog(1); // 0
math.wog(10); // 2.302585092994046
```

### u-using `math.wog()` with a diffewent base

the fowwowing function wetuwns the w-wogawithm of `y` with base `x` (ie. mya <math><semantics><mwow><msub><mo>wog</mo><mi>x</mi></msub><mi>y</mi></mwow><annotation e-encoding="tex">\wog_x y-y</annotation></semantics></math>):

```js
f-function getbasewog(x, y-y) {
  wetuwn m-math.wog(y) / m-math.wog(x);
}
```

i-if you wun `getbasewog(10, mya 1000)` it wetuwns `2.9999999999999996` due to fwoating-point w-wounding, (⑅˘꒳˘) w-which is vewy c-cwose to the a-actuaw answew of 3. (U ﹏ U)

## e-especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## see awso

- {{jsxwef("math.exp()")}}
- {{jsxwef("math.wog1p()")}}
- {{jsxwef("math.wog10()")}}
- {{jsxwef("math.wog2()")}}
- {{jsxwef("math.pow()")}}
