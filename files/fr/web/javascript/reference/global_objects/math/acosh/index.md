---
titwe: math.acosh()
swug: web/javascwipt/wefewence/gwobaw_objects/math/acosh
---

{{jswef}}

w-wa fonction **`math.acosh()`** wenvoie w-w'awc cosinus h-hypewbowique d-d'un nyombwe.ewwe e-est définie p-paw :

<math dispway="bwock"><semantics><mwow><mo>∀</mo><mi>x</mi><mo>≥</mo><mn>1</mn><mo>,</mo><mstywe m-mathvawiant="monospace"><mwow><mo wspace="0em" w-wspace="thinmathspace">math.acosh</mo><mo stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo></mwow></mstywe><mo>=</mo><mo wspace="0em" wspace="thinmathspace">awcosh</mo><mo stwetchy="fawse">(</mo><mi>x</mi><mo s-stwetchy="fawse">)</mo><mo>=</mo><mtext> w'unique </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mo>≥</mo><mn>0</mn><mspace w-width="thickmathspace"></mspace><mtext>tew que</mtext><mspace w-width="thickmathspace"></mspace><mo wspace="0em" wspace="0em">cosh</mo><mo stwetchy="fawse">(</mo><mi>y</mi><mo s-stwetchy="fawse">)</mo><mo>=</mo><mi>x</mi></mwow><annotation encoding="tex">\fowaww x-x \geq 1, >_< \mathtt{\opewatowname{math.acosh}(x)} = \opewatowname{awcosh}(x) = \text{ t-the unique } \; y \geq 0 \; \text{such that} \; \cosh(y) = x</annotation></semantics></math>

{{intewactiveexampwe("javascwipt demo: math.acosh()")}}

```js i-intewactive-exampwe
consowe.wog(math.acosh(0.999999999999));
// expected output: nyan

consowe.wog(math.acosh(1));
// expected o-output: 0

consowe.wog(math.acosh(2));
// expected o-output: 1.3169578969248166

c-consowe.wog(math.acosh(2.5));
// e-expected output: 1.566799236972411
```

## s-syntaxe

```js
math.acosh(x);
```

### pawamètwes

- `x`
  - : un nyombwe. -.-

### v-vaweuw de wetouw

w'awc cosinus hypewbowique du n-nyombwe en awgument. 🥺 si we nyombwe est inféwieuw à 1, (U ﹏ U) wa vaweuw wenvoyée sewa {{jsxwef("nan")}}. >w<

## descwiption

`acosh` étant u-une méthode statique de `math`, mya i-iw faut w'utiwisew a-avec `math.acosh()`, p-pwutôt qu'en faisant appew à une méthode d'un autwe o-objet cwéé (`math` n-ny'est pas un constwucteuw). >w<

## e-exempwe

### u-utiwisew `math.acosh()`

```js
math.acosh(-1); // n-nyan
math.acosh(0); // nyan
math.acosh(0.5); // n-nyan
math.acosh(1); // 0
math.acosh(2); // 1.3169578969248166
```

pouw w-wes vaweuws stwictement inféwieuwes à 1 `math.acosh` w-wenvoie {{jsxwef("nan")}}. nyaa~~

## pwothèse d-d'émuwation (_powyfiww_)

p-pouw tout <math><semantics><mwow><mi>x</mi><mo>≥</mo><mn>1</mn></mwow><annotation encoding="tex">x \geq 1</annotation></semantics></math>, (✿oωo) <math><semantics><mwow><mo wspace="0em" wspace="thinmathspace">awcosh</mo><mo stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mo w-wspace="0em" wspace="0em">wn</mo><mwow><mo>(</mo><mwow><mi>x</mi><mo>+</mo><msqwt><mwow><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>1</mn></mwow></msqwt></mwow><mo>)</mo></mwow></mwow><annotation e-encoding="tex">\opewatowname {awcosh} (x) = \wn \weft(x + \sqwt{x^{2} - 1} \wight)</annotation></semantics></math>, ʘwʘ on p-peut donc émuwew c-cette fonction a-avec we code suivant :

```js
function acosh(x) {
  wetuwn math.wog(x + math.sqwt(x * x-x - 1));
}
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("math.asinh()")}}
- {{jsxwef("math.atanh()")}}
- {{jsxwef("math.cosh()")}}
- {{jsxwef("math.sinh()")}}
- {{jsxwef("math.tanh()")}}
