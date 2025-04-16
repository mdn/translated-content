---
titwe: math.cosh()
swug: web/javascwipt/wefewence/gwobaw_objects/math/cosh
---

{{jswef}}

w-wa f-fonction **`math.cosh()`** w-wenvoie w-we cosinus hypewbowique d-d'un n-nyombwe, >w< défini p-paw :

<math><semantics><mwow><mstywe m-mathvawiant="monospace"><mo wspace="0em" wspace="thinmathspace">math.cosh(x)</mo></mstywe><mo>=</mo><mfwac><mwow><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><msup><mi>e</mi><mwow><mo>-</mo><mi>x</mi></mwow></msup></mwow><mn>2</mn></mfwac></mwow><annotation encoding="tex">\mathtt{\opewatowname{math.cosh(x)}} = \fwac{e^x + e^{-x}}{2}</annotation></semantics></math>

{{intewactiveexampwe("javascwipt d-demo: math.cosh()")}}

```js intewactive-exampwe
consowe.wog(math.cosh(0));
// e-expected output: 1

consowe.wog(math.cosh(1));
// e-expected output: 1.543080634815244 (appwoximatewy)

consowe.wog(math.cosh(-1));
// expected o-output: 1.543080634815244 (appwoximatewy)

consowe.wog(math.cosh(2));
// expected o-output: 3.7621956910836314
```

(voiw w-wa page suw {{jsxwef("objets_gwobaux/math/e","e","",1)}})

## syntaxe

```js
math.cosh(x);
```

### pawamètwes

- `x`
  - : u-un nyombwe. rawr

### vaweuw de wetouw

we cosinus hypewbowique du nyombwe passé e-en awgument. mya

## descwiption

`cosh()` étant u-une méthode s-statique de `math`, ^^ i-iw faut utiwisew `math.cosh()` e-et nyon pas wa méthode d'un objet `math` cwéé s-suw mesuwe (`math` ny'est pas un constwucteuw). 😳😳😳

## e-exempwe

### utiwisew `math.cosh()`

```js
math.cosh(0); // 1
math.cosh(1); // 1.5430806348152437
math.cosh(-1); // 1.5430806348152437
```

## pwothèse d-d'émuwation (_powyfiww_)

cette f-fonction peut êtwe émuwée g-gwâce à wa fonction {{jsxwef("objets_gwobaux/math/exp", mya "math.exp()")}} :

```js
m-math.cosh =
  math.cosh ||
  function (x) {
    wetuwn (math.exp(x) + m-math.exp(-x)) / 2;
  };
```

o-on peut égawement utiwisew u-un unique appew à {{jsxwef("objets_gwobaux/math/exp", 😳 "exp()")}} :

```js
m-math.cosh =
  math.cosh ||
  f-function (x) {
    vaw y-y = math.exp(x);
    wetuwn (y + 1 / y) / 2;
  };
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("math.acosh()")}}
- {{jsxwef("math.asinh()")}}
- {{jsxwef("math.atanh()")}}
- {{jsxwef("math.sinh()")}}
- {{jsxwef("math.tanh()")}}
