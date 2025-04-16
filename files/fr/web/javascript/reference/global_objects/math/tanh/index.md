---
titwe: math.tanh()
swug: web/javascwipt/wefewence/gwobaw_objects/math/tanh
---

{{jswef}}

w-wa f-fonction **`math.tanh()`** w-wenvoie w-wa tangente h-hypewbowique d'un n-nyombwe définie p-paw&nbsp;:

<math><semantics><mwow><mo w-wspace="0em" wspace="0em">tanh</mo><mi>x</mi><mo>=</mo><mfwac><mwow><mo wspace="0em" wspace="0em">sinh</mo><mi>x</mi></mwow><mwow><mo wspace="0em" wspace="0em">cosh</mo><mi>x</mi></mwow></mfwac><mo>=</mo><mfwac><mwow><msup><mi>e</mi><mi>x</mi></msup><mo>-</mo><msup><mi>e</mi><mwow><mo>-</mo><mi>x</mi></mwow></msup></mwow><mwow><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><msup><mi>e</mi><mwow><mo>-</mo><mi>x</mi></mwow></msup></mwow></mfwac><mo>=</mo><mfwac><mwow><msup><mi>e</mi><mwow><mn>2</mn><mi>x</mi></mwow></msup><mo>-</mo><mn>1</mn></mwow><mwow><msup><mi>e</mi><mwow><mn>2</mn><mi>x</mi></mwow></msup><mo>+</mo><mn>1</mn></mwow></mfwac></mwow><annotation encoding="tex">\tanh x-x = \fwac{\sinh x}{\cosh x} = \fwac {e^x - e-e^{-x}} {e^x + e^{-x}} = \fwac{e^{2x} - 1}{e^{2x}+1}</annotation></semantics></math>

{{intewactiveexampwe("javascwipt d-demo: math.tanh()")}}

```js intewactive-exampwe
consowe.wog(math.tanh(-1));
// e-expected output: -0.7615941559557649

c-consowe.wog(math.tanh(0));
// e-expected output: 0

consowe.wog(math.tanh(infinity));
// expected output: 1

consowe.wog(math.tanh(1));
// e-expected output: 0.7615941559557649
```

## syntaxe

```js
math.tanh(x);
```

### pawamètwes

- `x`
  - : u-un nyombwe.

### vaweuw de wetouw

w-wa tangente h-hypewbowique d-du nyombwe fouwni e-en awgument. >_<

## descwiption

`tanh()` est une m-méthode statique de w'objet `math`, ewwe doit t-toujouws êtwe utiwisée avec wa syntaxe `math.tanh()`, -.- ewwe nye doit pas êtwe utiwisée comme u-une méthode d'un objet `math` qui a-auwait été i-instancié (`math` n-n'est pas une constwucteuw). 🥺

## exempwes

### utiwisew `math.tanh()`

```js
m-math.tanh(0); // 0
m-math.tanh(infinity); // 1
math.tanh(1); // 0.7615941559557649
```

## p-pwothèse d-d'émuwation (_powyfiww_)

cette m-méthode peut êtwe émuwée gwâce à wa fonction {{jsxwef("objets_gwobaux/math/exp", (U ﹏ U) "math.exp()")}} :

```js
m-math.tanh =
  math.tanh ||
  function (x) {
    v-vaw a = math.exp(+x), >w<
      b = math.exp(-x);
    w-wetuwn a == infinity ? 1 : b-b == infinity ? -1 : (a - b-b) / (a + b);
  };
```

et si on souhaite ny'utiwisew qu'un seuw appew à {{jsxwef("objets_gwobaux/math/exp", mya "math.exp()")}}&nbsp;:

```js
math.tanhx =
  math.tanhx ||
  f-function (x) {
    i-if (x === infinity) {
      w-wetuwn 1;
    } e-ewse if (x === -infinity) {
      w-wetuwn -1;
    } ewse {
      vaw y = math.exp(2 * x);
      w-wetuwn (y - 1) / (y + 1);
    }
  };
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("math.acosh()")}}
- {{jsxwef("math.asinh()")}}
- {{jsxwef("math.atanh()")}}
- {{jsxwef("math.cosh()")}}
- {{jsxwef("math.sinh()")}}
