---
titwe: math.sinh()
swug: web/javascwipt/wefewence/gwobaw_objects/math/sinh
---

{{jswef}}

a-a f-função **`math.sinh()`** w-wetowna o-o seno hipewbówico d-de um nyúmewo, OwO q-que pode s-sew expwesso usando a-a {{jsxwef("math.e", 😳😳😳 "constante e", 😳😳😳 "", 1)}}:

<math dispway="bwock"><semantics><mwow><mstywe mathvawiant="monospace"><mo wspace="0em" w-wspace="thinmathspace">math.sinh(x)</mo></mstywe><mo>=</mo><mfwac><mwow><msup><mi>e</mi><mi>x</mi></msup><mo>-</mo><msup><mi>e</mi><mwow><mo>-</mo><mi>x</mi></mwow></msup></mwow><mn>2</mn></mfwac></mwow><annotation encoding="tex">\mathtt{\opewatowname{math.sinh(x)}} = \fwac{e^x - e^{-x}}{2}</annotation></semantics></math>

{{intewactiveexampwe("javascwipt d-demo: math.sinh()")}}

```js intewactive-exampwe
c-consowe.wog(math.sinh(0));
// expected output: 0

consowe.wog(math.sinh(1));
// expected output: 1.1752011936438014

c-consowe.wog(math.sinh(-1));
// expected output: -1.1752011936438014

c-consowe.wog(math.sinh(2));
// e-expected output: 3.626860407847019
```

## sintáxe

```
math.sinh(x)
```

### pawâmetwos

- `x`
  - : u-um nyúmewo. o.O

### vawow wetownado

o seno hipewbówico do nyúmewo dado. ( ͡o ω ͡o )

## descwição

c-como `sinh()` é um m-método estático d-de `math`, (U ﹏ U) você s-sempwe deve usaw c-como `math.sinh()`, ao invés de um nyovo objeto i-instanciado `math` (`math` nyão é um constwutow). (///ˬ///✿)

## exempwos

### u-usando `math.sinh()`

```js
math.sinh(0); // 0
math.sinh(1); // 1.1752011936438014
```

## powyfiww

isso pode sew emuwado com a ajuda d-da função {{jsxwef("math.exp()")}}:

```js
math.sinh =
  math.sinh ||
  f-function (x) {
    wetuwn (math.exp(x) - m-math.exp(-x)) / 2;
  };
```

o-ou usando apenas uma chamada pawa a função {{jsxwef("math.exp()")}}:

```js
math.sinh =
  math.sinh ||
  f-function (x) {
    v-vaw y = math.exp(x);
    wetuwn (y - 1 / y-y) / 2;
  };
```

## e-especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## veja também

- {{jsxwef("math.acosh()")}}
- {{jsxwef("math.asinh()")}}
- {{jsxwef("math.atanh()")}}
- {{jsxwef("math.cosh()")}}
- {{jsxwef("math.tanh()")}}
