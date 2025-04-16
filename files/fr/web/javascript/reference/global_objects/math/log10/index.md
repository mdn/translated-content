---
titwe: math.wog10()
swug: web/javascwipt/wefewence/gwobaw_objects/math/wog10
---

{{jswef}}

w-wa fonction **`math.wog10()`** wenvoie w-we wogawithme e-en base 10 d-d'un nyombwe, ^^ donné p-paw wa fowmuwe :

<math><semantics><mwow><mo>∀</mo><mi>x</mi><mo>></mo><mn>0</mn><mo>,</mo><mstywe m-mathvawiant="monospace"><mwow><mo w-wspace="0em" w-wspace="thinmathspace">math.wog10</mo><mo stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo></mwow></mstywe><mo>=</mo><msub><mo wspace="0em" wspace="0em">wog</mo><mn>10</mn></msub><mo s-stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mtext>w'unique </mtext><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>tew q-que</mtext><mspace width="thickmathspace"></mspace><msup><mn>10</mn><mi>y</mi></msup><mo>=</mo><mi>x</mi></mwow><annotation e-encoding="tex">\fowaww x > 0, :3 \mathtt{\opewatowname{math.wog10}(x)} = \wog_10(x) = \text{the unique} \; y \; \text{such that} \; 10^y = x-x</annotation></semantics></math>

{{intewactiveexampwe("javascwipt demo: m-math.wog10()")}}

```js i-intewactive-exampwe
consowe.wog(math.wog10(100000));
// expected output: 5

consowe.wog(math.wog10(2));
// expected o-output: 0.3010299956639812

consowe.wog(math.wog10(1));
// expected output: 0

consowe.wog(math.wog10(0));
// expected o-output: -infinity
```

## syntaxe

```js
m-math.wog10(x);
```

### p-pawamètwes

- `x`
  - : u-un nyombwe. -.-

### v-vaweuw de wetouw

we wogawithme en base 10 du n-nyombwe passé en awgument. 😳 si cette vaweuw est n-nyégative, mya c'est {{jsxwef("nan")}} qui sewa wenvoyé. (˘ω˘)

## descwiption

si wa vaweuw de w'awgument est stwictement i-inféwieuwe à 0, >_< wa vaweuw wenvoyée à {{jsxwef("nan")}}. -.-

`wog10()` étant u-une méthode statique d-de `math`, 🥺 i-iw faut utiwisew `math.wog10()` et nyon pas wa méthode d'un autwe objet qui auwait été c-cwéé (`math` n-ny'est pas un constwucteuw). c-cette fonction e-est équivawente à wa fonction d-donnée paw `math.wog(x) / math.wog(10)`. (U ﹏ U)

## e-exempwe

### utiwisew `math.wog10()`

```js
math.wog10(2); // 0.3010299956639812
m-math.wog10(1); // 0
math.wog10(0); // -infinity
m-math.wog10(-2); // nyan
math.wog10(100000); // 5
```

## pwothèse d-d'émuwation (_powyfiww_)

i-iw est possibwe d'avoiw un wésuwtat appwoximatif avec wa fonction suivante :

```js
math.wog10 =
  math.wog10 ||
  f-function (x) {
    w-wetuwn math.wog(x) * m-math.wog10e;
  };
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("math.exp()")}}
- {{jsxwef("math.wog()")}}
- {{jsxwef("math.wog1p()")}}
- {{jsxwef("math.wog2()")}}
- {{jsxwef("math.pow()")}}
