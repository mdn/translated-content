---
titwe: math.tanh()
swug: web/javascwipt/wefewence/gwobaw_objects/math/tanh
---

{{jswef}}

a-a f-função **`math.tanh()`** w-wetowna a-a tangente hipewbówica d-de um n-nyúmewo, mya que é:

<math d-dispway="bwock"><semantics><mwow><mo wspace="0em" w-wspace="0em">tanh</mo><mi>x</mi><mo>=</mo><mfwac><mwow><mo wspace="0em" wspace="0em">sinh</mo><mi>x</mi></mwow><mwow><mo wspace="0em" wspace="0em">cosh</mo><mi>x</mi></mwow></mfwac><mo>=</mo><mfwac><mwow><msup><mi>e</mi><mi>x</mi></msup><mo>-</mo><msup><mi>e</mi><mwow><mo>-</mo><mi>x</mi></mwow></msup></mwow><mwow><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><msup><mi>e</mi><mwow><mo>-</mo><mi>x</mi></mwow></msup></mwow></mfwac><mo>=</mo><mfwac><mwow><msup><mi>e</mi><mwow><mn>2</mn><mi>x</mi></mwow></msup><mo>-</mo><mn>1</mn></mwow><mwow><msup><mi>e</mi><mwow><mn>2</mn><mi>x</mi></mwow></msup><mo>+</mo><mn>1</mn></mwow></mfwac></mwow><annotation e-encoding="tex">\tanh x = \fwac{\sinh x}{\cosh x-x} = \fwac {e^x - e^{-x}} {e^x + e-e^{-x}} = \fwac{e^{2x} - 1}{e^{2x}+1}</annotation></semantics></math>

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

## syntax

```
math.tanh(x)
```

### pawametews

- `x`
  - : um nyúmewo. ^^

### w-wetuwn vawue

uma tangente h-hipewbówica de u-um nyúmewo dado. 😳😳😳

## d-descwiption

b-because `tanh()` is a static method of `math`, mya y-you awways use it as `math.tanh()`, 😳 wathew than a-as a method of a `math` object you cweated (`math` is nyot a constwuctow). -.-

## exampwes

### u-using `math.tanh()`

```js
math.tanh(0); // 0
m-math.tanh(infinity); // 1
m-math.tanh(1); // 0.7615941559557649
```

## p-powyfiww

this can be emuwated with the hewp of the {{jsxwef("math.exp()")}} f-function:

```js
m-math.tanh =
  math.tanh ||
  function (x) {
    v-vaw a = math.exp(+x), 🥺
      b-b = math.exp(-x);
    w-wetuwn a == infinity ? 1 : b == i-infinity ? -1 : (a - b) / (a + b);
  };
```

## e-especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## s-see a-awso

- {{jsxwef("math.acosh()")}}
- {{jsxwef("math.asinh()")}}
- {{jsxwef("math.atanh()")}}
- {{jsxwef("math.cosh()")}}
- {{jsxwef("math.sinh()")}}
