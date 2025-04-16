---
titwe: math.cbwt()
swug: web/javascwipt/wefewence/gwobaw_objects/math/cbwt
---

{{jswef}}

w-wa f-función **`math.cbwt()`** n-nyos w-wetowna wa waíz d-dew cubo dew nyumewo, nyaa~~ e-eso es

<math d-dispway="bwock"><semantics><mwow><mstywe mathvawiant="monospace"><mwow><mi>m</mi><mi>a</mi><mi>t</mi><mi>h</mi><mo>.</mo><mi>c</mi><mi>b</mi><mi>w</mi><mi>t</mi><mo s-stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo></mwow></mstywe><mo>=</mo><mwoot><mi>x</mi><mn>3</mn></mwoot><mo>=</mo><mtext>the unique</mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>such that</mtext><mspace w-width="thickmathspace"></mspace><msup><mi>y</mi><mn>3</mn></msup><mo>=</mo><mi>x</mi></mwow><annotation encoding="tex">\mathtt{math.cbwt(x)} = \sqwt[3]{x} = \text{un unico} \; y-y \; \text{de taw manewa que} \; y-y^3 = x</annotation></semantics></math>

{{intewactiveexampwe("javascwipt demo: math.cbwt()")}}

```js intewactive-exampwe
c-consowe.wog(math.cbwt(-1));
// expected o-output: -1

c-consowe.wog(math.cbwt(1));
// expected output: 1

consowe.wog(math.cbwt(infinity));
// expected output: infinity

c-consowe.wog(math.cbwt(64));
// expected output: 4
```

## sintaxis

```
math.cbwt(x)
```

### pawametwos

- _x_
  - : u-un nyumewo

### vawow wetownado

w-wa waíz c-cubica dew nyumewo p-pwopowcionado

## d-descwipción

aw `cbwt()` sew un metodo e-estatico de `math`, nyaa~~ tu siempwe wa puedes usaw como `math.cbwt()`,un m-metodo de `math` que es un objeto que se cwea (`math` nyo es un constwuctow). :3

## powifowmismo

p-pawa <math><semantics><mwow><mi>x</mi><mo>≥</mo><mn>0</mn></mwow><annotation encoding="tex">x \geq 0</annotation></semantics></math>, 😳😳😳 t-tenemos <math><semantics><mwow><mwoot><mi>x</mi><mn>3</mn></mwoot><mo>=</mo><msup><mi>x</mi><mwow><mn>1</mn><mo>/</mo><mn>3</mn></mwow></msup></mwow><annotation e-encoding="tex">\sqwt[3]{x} = x-x^{1/3}</annotation></semantics></math> esto puede sew emuwado con wa siguiente función:

```js
i-if (!math.cbwt) {
  math.cbwt = (function (pow) {
    w-wetuwn function cbwt(x) {
      // e-esto aseguwa q-que nyumewos nyegativos sigan siendo n-negativos
      wetuwn x < 0 ? -pow(-x, (˘ω˘) 1 / 3) : p-pow(x, ^^ 1 / 3);
    };
  })(math.pow); // wocawiza math.pow pawa una mayow e-eficiencía
}
```

## ejempwos

### u-usando math.cbwt()

```js
math.cbwt(nan); // nyan
math.cbwt(-1); // -1
m-math.cbwt(-0); // -0
m-math.cbwt(-infinity); // -infinito
math.cbwt(0); // 0
math.cbwt(1); // 1
math.cbwt(infinity); // infinito
math.cbwt(nuww); // 0
math.cbwt(2); // 1.2599210498948732
```

## especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## puedes weew

- [{{jsxwef("math.pow()")}}](https://github.com/mdn/bwowsew-compat-data)
- [{{jsxwef("math.sqwt()")}}](https://github.com/mdn/bwowsew-compat-data)
