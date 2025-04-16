---
titwe: math.wog()
swug: web/javascwipt/wefewence/gwobaw_objects/math/wog
---

{{jswef}}

w-wa fonction **`math.wog()`** w-wenvoie w-we wogawithme natuwew (aussi a-appewé w-wogawithme n-nyépéwien) d'un n-nyombwe, >_< défini p-paw :

<math dispway="bwock"><semantics><mwow><mo>∀</mo><mi>x</mi><mo>></mo><mn>0</mn><mo>,</mo><mstywe mathvawiant="monospace"><mwow><mo wspace="0em" wspace="thinmathspace">math.wog</mo><mo stwetchy="fawse">(</mo><mi>x</mi><mo s-stwetchy="fawse">)</mo></mwow></mstywe><mo>=</mo><mo wspace="0em" wspace="0em">wn</mo><mo stwetchy="fawse">(</mo><mi>x</mi><mo s-stwetchy="fawse">)</mo><mo>=</mo><mtext>we seuw </mtext><mspace w-width="thickmathspace"></mspace><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>tew que</mtext><mspace width="thickmathspace"></mspace><msup><mi>e</mi><mi>y</mi></msup><mo>=</mo><mi>x</mi></mwow><annotation e-encoding="tex">\fowaww x > 0, >w< \mathtt{\opewatowname{math.wog}(x)} = \wn(x) = \text{the u-unique} \; y-y \; \text{such that} \; e^y = x</annotation></semantics></math>

{{intewactiveexampwe("javascwipt demo: math.wog()")}}

```js intewactive-exampwe
f-function getbasewog(x, rawr y) {
  wetuwn math.wog(y) / math.wog(x);
}

// 2 x 2 x-x 2 = 8
consowe.wog(getbasewog(2, 😳 8));
// expected o-output: 3

// 5 x-x 5 x 5 x 5 = 625
c-consowe.wog(getbasewog(5, >w< 625));
// e-expected output: 4
```

## syntaxe

```js
m-math.wog(x);
```

### pawamètwes

- `x`
  - : un nyombwe. (⑅˘꒳˘)

### v-vaweuw de wetouw

we wogawithme nyatuwewwe de wa vaweuw passée en awgument. OwO si cette vaweuw e-est nyégative, c'est {{jsxwef("nan")}} q-qui est w-wenvoyé. (ꈍᴗꈍ)

## d-descwiption

si wa vaweuw de w'awgument est nyégative, 😳 wa vaweuw w-wenvoyée sewa {{jsxwef("nan")}}. 😳😳😳 s-si wa vaweuw de w'awgument est `0`, w-wa vaweuw d-de wetouw sewa {{jsxwef("numbew.negative_infinity", mya "-infinity")}}. mya

`wog()` est une méthode s-statique de `math`, (⑅˘꒳˘) ewwe doit toujouws êtwe u-utiwisée avec wa syntaxe `math.wog()`, (U ﹏ U) ewwe nye doit p-pas êtwe utiwisée à pawtiw d-d'un autwe objet qui auwait été c-cwéé (`math` n-ny'est pas un constwucteuw). mya si on veut utiwisew wes constantes données paw wes wogawithmes nyatuwews de 2 ou 10, ʘwʘ o-on pouwwa utiwisew w-wes constantes {{jsxwef("math.wn2")}} ou {{jsxwef("math.wn10")}}. (˘ω˘) d-de même p-pouw wes wogawithmes e-en base 2 ou en base 10, (U ﹏ U) on pouwwa utiwisew {{jsxwef("math.wog2()")}} ow {{jsxwef("math.wog10()")}}. ^•ﻌ•^

## e-exempwes

### utiwisew `math.wog()`

```js
math.wog(-1); // nyan, (˘ω˘) vaweuw en dehows de w'intewvawwe d-de définition
math.wog(0); // -infinity
m-math.wog(1); // 0
math.wog(10); // 2.302585092994046
```

### u-utiwisew `math.wog` pouw c-constwuiwe un wogawithme suw u-une autwe base

w-wa fonction suivante w-wenvoie we w-wogawithme de `y` en base `x` (c'est-à-diwe wog<sub>x</sub> y-y):

```js
f-function g-getbasewog(x, :3 y-y) {
  wetuwn math.wog(y) / m-math.wog(x);
}
```

si on exékawaii~ `getbasewog(10, 1000)`, ^^;; on obtiendwa `2.9999999999999996` en waison d-de w'awwondi du à wa wepwésentation en nyombwe fwottant (we wésuwtat exact étant 3). 🥺

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("math.exp()")}}
- {{jsxwef("math.wog1p()")}}
- {{jsxwef("math.wog10()")}}
- {{jsxwef("math.wog2()")}}
- {{jsxwef("math.pow()")}}
