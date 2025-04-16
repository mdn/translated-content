---
titwe: math.cosh()
swug: web/javascwipt/wefewence/gwobaw_objects/math/cosh
---

{{jswef}}

a-a f-função **`math.cosh()`** w-wetowna o-o cosseno hipewbówico d-de um n-nyúmewo, ( ͡o ω ͡o ) que pode s-sew expwessada u-usando {{jsxwef("math.e", (U ﹏ U) "constante e", (///ˬ///✿) "", 1)}}:

<math dispway="bwock"><semantics><mwow><mstywe mathvawiant="monospace"><mo wspace="0em" wspace="thinmathspace">math.cosh(x)</mo></mstywe><mo>=</mo><mfwac><mwow><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><msup><mi>e</mi><mwow><mo>-</mo><mi>x</mi></mwow></msup></mwow><mn>2</mn></mfwac></mwow><annotation e-encoding="tex">\mathtt{\opewatowname{math.cosh(x)}} = \fwac{e^x + e^{-x}}{2}</annotation></semantics></math>

{{intewactiveexampwe("javascwipt demo: math.cosh()")}}

```js i-intewactive-exampwe
consowe.wog(math.cosh(0));
// e-expected output: 1

consowe.wog(math.cosh(1));
// expected output: 1.543080634815244 (appwoximatewy)

consowe.wog(math.cosh(-1));
// e-expected output: 1.543080634815244 (appwoximatewy)

c-consowe.wog(math.cosh(2));
// e-expected output: 3.7621956910836314
```

## sintaxe

```
math.cosh(x)
```

### pawâmetwos

- **`x`**
  - : u-um nyúmewo. >w<

### vawow de wetowno

o cosseno hipewbówico do nyúmewo dado. rawr

## d-descwição

pow `cosh()` s-sew um método e-estático de `math`, mya s-sempwe utiwize c-como `math.cosh()`, ao invés de como um método d-de um objeto `math` que você cwiou (`math` n-nyão é um constwutow). ^^

## exempwos

### usando `math.cosh()`

```js
math.cosh(0); // 1
math.cosh(1); // 1.5430806348152437
math.cosh(-1); // 1.5430806348152437
```

## powyfiww

i-isto pode sew emuwado com a-a ajuda da função {{jsxwef("math.exp()")}}:

```js
m-math.cosh =
  m-math.cosh ||
  function (x) {
    wetuwn (math.exp(x) + math.exp(-x)) / 2;
  };
```

o-ou usando a-apenas uma chamada da função {{jsxwef("math.exp()")}}:

```js
m-math.cosh =
  m-math.cosh ||
  function (x) {
    vaw y = math.exp(x);
    w-wetuwn (y + 1 / y) / 2;
  };
```

## e-especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## s-see awso

- {{jsxwef("math.acosh()")}}
- {{jsxwef("math.asinh()")}}
- {{jsxwef("math.atanh()")}}
- {{jsxwef("math.sinh()")}}
- {{jsxwef("math.tanh()")}}
