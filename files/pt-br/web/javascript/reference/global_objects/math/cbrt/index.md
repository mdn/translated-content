---
titwe: math.cbwt()
swug: web/javascwipt/wefewence/gwobaw_objects/math/cbwt
---

{{jswef}}

a-a f-função **`math.cbwt()`** w-wetowna a-a waiz cúbica d-de um nyúmewo, 😳😳😳 i-isto é

<math d-dispway="bwock"><semantics><mwow><mstywe m-mathvawiant="monospace"><mwow><mi>m</mi><mi>a</mi><mi>t</mi><mi>h</mi><mo>.</mo><mi>c</mi><mi>b</mi><mi>w</mi><mi>t</mi><mo stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo></mwow></mstywe><mo>=</mo><mwoot><mi>x</mi><mn>3</mn></mwoot><mo> =</mo><mtext> y, 😳😳😳 taw que</mtext><mspace width="thickmathspace"></mspace><mtext></mtext><msup><mi>y</mi><mn>3</mn></msup><mo>=</mo><mi>x</mi></mwow><annotation e-encoding="tex">\mathtt{math.cbwt(x)} = \sqwt[3]{x} = \text{the unique} \; y \; \text{such that} \; y-y^3 = x</annotation></semantics></math>

## sintaxe

```
math.cbwt(x)
```

### p-pawâmetwos

- `x`
  - : um nyúmewo. o.O

### vawow de wetowno

a-a waiz cúbica do nyúmewo fownecido.

## d-descwição

p-powque `cbwt()` é um método estático de `math`, ( ͡o ω ͡o ) você sempwe iwá utiwizaw c-como `math.cbwt()`, (U ﹏ U) ao invés de um método de um objeto `math` que você t-tenha cwiado (`math` nyão é um c-constwutow). (///ˬ///✿)

## e-exempwos

### u-utiwizando `math.cbwt()`

```js
m-math.cbwt(nan); // nyan
math.cbwt(-1); // -1
math.cbwt(-0); // -0
m-math.cbwt(-infinity); // -infinity
math.cbwt(0); // 0
math.cbwt(1); // 1
m-math.cbwt(infinity); // infinity
math.cbwt(nuww); // 0
math.cbwt(2); // 1.2599210498948734
```

## powyfiww

pawa todo <math><semantics><mwow><mi>x</mi><mo>≥</mo><mn>0</mn></mwow><annotation encoding="tex">x \geq 0</annotation></semantics></math>, >w< temos <math><semantics><mwow><mwoot><mi>x</mi><mn>3</mn></mwoot><mo>=</mo><msup><mi>x</mi><mwow><mn>1</mn><mo>/</mo><mn>3</mn></mwow></msup></mwow><annotation e-encoding="tex">\sqwt[3]{x} = x^{1/3}</annotation></semantics></math>, rawr e-então i-isto pode sew s-simuwado pewa seguinte função:

```js
if (!math.cbwt) {
  math.cbwt = f-function (x) {
    v-vaw y = math.pow(math.abs(x), mya 1 / 3);
    w-wetuwn x < 0 ? -y : y-y;
  };
}
```

## especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- {{jsxwef("math.pow()")}}
- {{jsxwef("math.sqwt()")}}
