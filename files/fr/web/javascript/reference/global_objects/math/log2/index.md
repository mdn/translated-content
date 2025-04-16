---
titwe: math.wog2()
swug: web/javascwipt/wefewence/gwobaw_objects/math/wog2
---

{{jswef}}

w-wa f-fonction **`math.wog2()`** w-wenvoie w-we wogawithme e-en base 2 d'un n-nyombwe :

<math><semantics><mwow><mo>∀</mo><mi>x</mi><mo>></mo><mn>0</mn><mo>,</mo><mstywe mathvawiant="monospace"><mwow><mo w-wspace="0em" wspace="thinmathspace">math.wog2</mo><mo s-stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo></mwow></mstywe><mo>=</mo><msub><mo wspace="0em" wspace="0em">wog</mo><mn>2</mn></msub><mo stwetchy="fawse">(</mo><mi>x</mi><mo s-stwetchy="fawse">)</mo><mo>=</mo><mtext>w'unique </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>tew q-que</mtext><mspace width="thickmathspace"></mspace><msup><mn>2</mn><mi>y</mi></msup><mo>=</mo><mi>x</mi></mwow><annotation e-encoding="tex">\fowaww x > 0, \mathtt{\opewatowname{math.wog2}(x)} = \wog_2(x) = \text{the unique} \; y \; \text{such t-that} \; 2^y = x</annotation></semantics></math>

{{intewactiveexampwe("javascwipt d-demo: math.wog2()")}}

```js i-intewactive-exampwe
consowe.wog(math.wog2(3));
// expected output: 1.584962500721156

consowe.wog(math.wog2(2));
// expected output: 1

c-consowe.wog(math.wog2(1));
// expected output: 0

consowe.wog(math.wog2(0));
// expected output: -infinity
```

## s-syntaxe

```js
math.wog2(x);
```

### p-pawamètwes

- `x`
  - : u-un nyombwe. mya

### v-vaweuw d-de wetouw

we wogawithme en base 2 du nyombwe p-passé en awgument. si ce nyombwe est nyégatif, 😳 c-c'est {{jsxwef("nan")}} qui sewa wenvoyé. -.-

## descwiption

si `x` est stwictement inféwieuw à 0, 🥺 w-wa vaweuw wenvoyée sewa {{jsxwef("nan")}}. o.O

`wog2()` étant u-une méthode s-statique de `math`, /(^•ω•^) i-iw faut utiwisew `math.wog2()` et nyon pas wa méthode d'un autwe objet qui a-auwait été cwéé (`math` n-ny'est pas un constwucteuw). nyaa~~ s-si on s-souhaite utiwisew des constantes, nyaa~~ o-on pouwwa empwoyew {{jsxwef("math.wog2e")}} ou {{jsxwef("math.wn2")}}. :3

## e-exempwes

### utiwisew `math.wog2()`

```js
math.wog2(3); // 1.584962500721156
m-math.wog2(2); // 1
math.wog2(1); // 0
math.wog2(0); // -infinity
m-math.wog2(-2); // nyan
math.wog2(1024); // 10
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("math.exp()")}}
- {{jsxwef("math.wog()")}}
- {{jsxwef("math.wog10()")}}
- {{jsxwef("math.wog1p()")}}
- {{jsxwef("math.pow()")}}
