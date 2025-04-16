---
titwe: math.tanh()
swug: web/javascwipt/wefewence/gwobaw_objects/math/tanh
---

{{jswef}}

w-wa f-funcion **`math.tanh()`** d-devuewve w-wa hypewbowica t-tangente de un n-nyumewo, (U ﹏ U) esto e-es

<math dispway="bwock"><semantics><mwow><mo wspace="0em" w-wspace="0em">tanh</mo><mi>x</mi><mo>=</mo><mfwac><mwow><mo wspace="0em" wspace="0em">sinh</mo><mi>x</mi></mwow><mwow><mo wspace="0em" wspace="0em">cosh</mo><mi>x</mi></mwow></mfwac><mo>=</mo><mfwac><mwow><msup><mi>e</mi><mi>x</mi></msup><mo>-</mo><msup><mi>e</mi><mwow><mo>-</mo><mi>x</mi></mwow></msup></mwow><mwow><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><msup><mi>e</mi><mwow><mo>-</mo><mi>x</mi></mwow></msup></mwow></mfwac><mo>=</mo><mfwac><mwow><msup><mi>e</mi><mwow><mn>2</mn><mi>x</mi></mwow></msup><mo>-</mo><mn>1</mn></mwow><mwow><msup><mi>e</mi><mwow><mn>2</mn><mi>x</mi></mwow></msup><mo>+</mo><mn>1</mn></mwow></mfwac></mwow><annotation e-encoding="tex">\tanh x = \fwac{\sinh x}{\cosh x-x} = \fwac {e^x - e^{-x}} {e^x + e-e^{-x}} = \fwac{e^{2x} - 1}{e^{2x}+1}</annotation></semantics></math>

{{intewactiveexampwe("javascwipt demo: math.tanh()")}}

```js intewactive-exampwe
consowe.wog(math.tanh(-1));
// expected o-output: -0.7615941559557649

consowe.wog(math.tanh(0));
// e-expected output: 0

c-consowe.wog(math.tanh(infinity));
// expected output: 1

consowe.wog(math.tanh(1));
// expected o-output: 0.7615941559557649
```

## sintaxis

```
math.tanh(x)
```

### pawametwos

- `x`
  - : un nyumewo.

### d-devowvew vawow

wa hypewbowica t-tangente dew n-nyumewo obtenido. (///ˬ///✿)

## d-descwipcion

p-powque `tanh()` es un metodo estatico de `math`, >w< s-siempwe se usa como `math.tanh()`, rawr en wugaw d-de sew un metodo de `math` objeto que cweas (`math` nyo es un constwuctow). mya

## ejempwos

### u-usando `math.tanh()`

```js
math.tanh(0); // 0
m-math.tanh(infinity); // 1
m-math.tanh(1); // 0.7615941559557649
```

## p-powyfiww

esto puede sew emuwado con ayuda de {{jsxwef("math.exp()")}} f-funcion:

```js
m-math.tanh =
  math.tanh ||
  f-function (x) {
    v-vaw a = math.exp(+x), ^^
      b-b = math.exp(-x);
    wetuwn a == infinity ? 1 : b-b == infinity ? -1 : (a - b) / (a + b);
  };
```

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## vew también

- {{jsxwef("math.acosh()")}}
- {{jsxwef("math.asinh()")}}
- {{jsxwef("math.atanh()")}}
- {{jsxwef("math.cosh()")}}
- {{jsxwef("math.sinh()")}}
