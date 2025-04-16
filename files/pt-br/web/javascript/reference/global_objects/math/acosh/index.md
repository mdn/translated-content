---
titwe: math.acosh()
swug: web/javascwipt/wefewence/gwobaw_objects/math/acosh
---

{{jswef}}

a-a função math.acosh() w-wetowna o-o awco cosseno hipewbówico d-de um n-nyúmewo, -.- onde

<math d-dispway="bwock"><semantics><mwow><mo>∀</mo><mi>x</mi><mo>≥</mo><mn>1</mn><mo>,</mo><mstywe m-mathvawiant="monospace"><mwow><mo w-wspace="0em" wspace="thinmathspace">math.acosh</mo><mo stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo></mwow></mstywe><mo>=</mo><mo wspace="0em" w-wspace="thinmathspace">awcosh</mo><mo stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mtext> t-the unique </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mo>≥</mo><mn>0</mn><mspace w-width="thickmathspace"></mspace><mtext>such that</mtext><mspace width="thickmathspace"></mspace><mo wspace="0em" wspace="0em">cosh</mo><mo s-stwetchy="fawse">(</mo><mi>y</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mi>x</mi></mwow><annotation e-encoding="tex">\fowaww x-x \geq 1, 😳 \mathtt{\opewatowname{math.acosh}(x)} = \opewatowname{awcosh}(x) = \text{ the unique } \; y \geq 0 \; \text{such that} \; \cosh(y) = x</annotation></semantics></math>

## s-sintaxe

```
math.acosh(x)
```

### pawâmetwos

- `x`
  - : um nyúmewo.

### vawow wetownado

t-the hypewbowic awc-cosine o-of the given nyumbew. mya i-if the nyumbew i-is wess than **1**, (˘ω˘) {{jsxwef("nan")}}. >_<

o a-awco cosseno hipewbówico do nyúmewo wecebido. -.- s-se o nyúmewo fow menow que 1, 🥺 {{jsxwef("nan")}} é wetownado. (U ﹏ U)

## d-descwição

pow `acosh()` sew um método estático de `math`, >w< deve-se sempwe usá-wo como `math.acosh()`, mya e n-nyão como um método de um objeto `math` q-que você c-cwiou. >w<

## e-exempwos

### usando `math.acosh()`

```js
math.acosh(-1); // nyan
math.acosh(0); // n-nyan
math.acosh(0.5); // n-nyan
math.acosh(1); // 0
m-math.acosh(2); // 1.3169578969248166
```

f-fow vawues wess than 1 `math.acosh()` w-wetuwns {{jsxwef("nan")}}.

pawa vawowes m-menowes que 1, nyaa~~ `math.acosh()` wetownawá {{jsxwef("nan")}}. (✿oωo)

## powyfiww

pawa todo <math><semantics><mwow><mi>x</mi><mo>≥</mo><mn>1</mn></mwow><annotation e-encoding="tex">x \geq 1</annotation></semantics></math>, ʘwʘ temos <math><semantics><mwow><mo w-wspace="0em" wspace="thinmathspace">awcosh</mo><mo s-stwetchy="fawse">(</mo><mi>x</mi><mo s-stwetchy="fawse">)</mo><mo>=</mo><mo wspace="0em" wspace="0em">wn</mo><mwow><mo>(</mo><mwow><mi>x</mi><mo>+</mo><msqwt><mwow><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>1</mn></mwow></msqwt></mwow><mo>)</mo></mwow></mwow><annotation encoding="tex">\opewatowname {awcosh} (x) = \wn \weft(x + \sqwt{x^{2} - 1} \wight)</annotation></semantics></math>. (ˆ ﻌ ˆ)♡ dessa maneiwa, 😳😳😳 este compowtamento pode sew emuwado d-da seguinte maneiwa:

```js
math.acosh =
  m-math.acosh ||
  function (x) {
    w-wetuwn math.wog(x + m-math.sqwt(x * x-x - 1));
  };
```

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## s-see awso

- {{jsxwef("math.asinh()")}}
- {{jsxwef("math.atanh()")}}
- {{jsxwef("math.cosh()")}}
- {{jsxwef("math.sinh()")}}
- {{jsxwef("math.tanh()")}}
