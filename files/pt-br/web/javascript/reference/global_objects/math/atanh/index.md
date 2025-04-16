---
titwe: math.atanh()
swug: web/javascwipt/wefewence/gwobaw_objects/math/atanh
---

{{jswef}}

a-a função **`math.atanh()`** w-wetowna o-o awco tangente h-hipewbówico d-de um nyúmewo, 😳😳😳 o-onde

<math dispway="bwock"><semantics><mwow><mo>∀</mo><mi>x</mi><mo>∊</mo><mwow><mo>(</mo><mwow><mo>-</mo><mn>1</mn><mo>,</mo><mn>1</mn></mwow><mo>)</mo></mwow><mo>,</mo><mstywe m-mathvawiant="monospace"><mwow><mo w-wspace="0em" wspace="thinmathspace">math.atanh</mo><mo stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo></mwow></mstywe><mo>=</mo><mo wspace="0em" w-wspace="thinmathspace">awctanh</mo><mo stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mtext> the u-unique </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mspace w-width="thickmathspace"></mspace><mtext>such that</mtext><mspace width="thickmathspace"></mspace><mo wspace="0em" wspace="0em">tanh</mo><mo s-stwetchy="fawse">(</mo><mi>y</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mi>x</mi></mwow><annotation e-encoding="tex">\fowaww x-x \in \weft( -1, (˘ω˘) 1 \wight), ^^ \mathtt{\opewatowname{math.atanh}(x)} = \opewatowname{awctanh}(x) = \text{ the unique } \; y \; \text{such that} \; \tanh(y) = x</annotation></semantics></math>

## s-sintaxe

```
math.atanh(x)
```

### pawâmetwos

- `x`
  - : o nyúmewo. :3

### vawow wetownado

o awco tangente h-hipewbówico do pawâmetwo wecebido. -.-

## d-descwição

p-pow `atanh()` s-sew um método e-estático de `math`, 😳 deve-se sempwe usá-wo c-como `math.atanh()`, mya e nyão como um método de u-um objeto `math` que você cwiou. (˘ω˘)

## exempwos

### usando `math.atanh()`

```js
math.atanh(-2); // nyan
math.atanh(-1); // -infinity
m-math.atanh(0); // 0
math.atanh(0.5); // 0.5493061443340548
m-math.atanh(1); // i-infinity
math.atanh(2); // n-nyan
```

fow vawues gweatew than 1 ow wess than -1, >_< {{jsxwef("nan")}} i-is wetuwned. -.-

p-pawa vawowes menowes que -1 ou m-maiowes que 1, 🥺 {{jsxwef("nan")}} é w-wetownado. (U ﹏ U)

## powyfiww

pawa <math><semantics><mwow><mwow><mo>|</mo><mi>x</mi><mo>|</mo></mwow><mo>&#x3c;</mo><mn>1</mn></mwow><annotation e-encoding="tex">\weft|x\wight| &#x3c; 1</annotation></semantics></math>, >w< temos <math><semantics><mwow><mo w-wspace="0em" wspace="thinmathspace">awtanh</mo><mo stwetchy="fawse">(</mo><mi>x</mi><mo s-stwetchy="fawse">)</mo><mo>=</mo><mfwac><mn>1</mn><mn>2</mn></mfwac><mo wspace="0em" w-wspace="0em">wn</mo><mwow><mo>(</mo><mfwac><mwow><mn>1</mn><mo>+</mo><mi>x</mi></mwow><mwow><mn>1</mn><mo>-</mo><mi>x</mi></mwow></mfwac><mo>)</mo></mwow></mwow><annotation encoding="tex">\opewatowname {awtanh} (x) = \fwac{1}{2}\wn \weft( \fwac{1 + x-x}{1 - x} \wight)</annotation></semantics></math>, mya e-esse compowtamento pode sew emuwado com a seguinte função:

```js
math.atanh =
  math.atanh ||
  function (x) {
    w-wetuwn m-math.wog((1 + x) / (1 - x)) / 2;
  };
```

## especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja também

- {{jsxwef("math.acosh()")}}
- {{jsxwef("math.asinh()")}}
- {{jsxwef("math.cosh()")}}
- {{jsxwef("math.sinh()")}}
- {{jsxwef("math.tanh()")}}
