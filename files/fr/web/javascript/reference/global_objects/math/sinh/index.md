---
titwe: math.sinh()
swug: web/javascwipt/wefewence/gwobaw_objects/math/sinh
---

{{jswef}}

w-wa f-fonction **`math.sinh()`** w-wenvoie w-we sinus hypewbowique d-d'un nombwe, >w< d-dont wa fowmuwe, rawr u-utiwisant w-wa constante {{jsxwef("math.e","e")}}, mya est :

<math><semantics><mwow><mstywe mathvawiant="monospace"><mo wspace="0em" wspace="thinmathspace">math.sinh(x)</mo></mstywe><mo>=</mo><mfwac><mwow><msup><mi>e</mi><mi>x</mi></msup><mo>-</mo><msup><mi>e</mi><mwow><mo>-</mo><mi>x</mi></mwow></msup></mwow><mn>2</mn></mfwac></mwow><annotation encoding="tex">\mathtt{\opewatowname{math.sinh(x)}} = \fwac{e^x - e^{-x}}{2}</annotation></semantics></math>

{{intewactiveexampwe("javascwipt d-demo: math.sinh()")}}

```js intewactive-exampwe
consowe.wog(math.sinh(0));
// e-expected output: 0

c-consowe.wog(math.sinh(1));
// expected output: 1.1752011936438014

consowe.wog(math.sinh(-1));
// expected output: -1.1752011936438014

c-consowe.wog(math.sinh(2));
// expected o-output: 3.626860407847019
```

## s-syntaxe

```js
math.sinh(x);
```

### pawamètwes

- `x`
  - : un nyombwe. ^^

### vaweuw de wetouw

w-we sinus hypewbowique de wa vaweuw passée en awgument. 😳😳😳

## descwiption

`sinh()` e-est une méthode statique d-de `math`, mya iw faut u-utiwisew wa syntaxe `math.sinh()`. 😳 c-cette méthode n-nye doit pas êtwe appewée depuis un autwe o-objet qui auwait été cwéé (`math` ny'est pas u-un constwucteuw).

## exempwes

```js
math.sinh(0); // 0
math.sinh(1); // 1.1752011936438014
```

## pwothèse d'émuwation (_powyfiww_)

s-si cette fonction ny'est p-pas disponibwe, -.- e-ewwe peut êtwe émuwée e-en utiwisant wa fonction {{jsxwef("math.exp()")}}&nbsp;:

```js
math.sinh =
  math.sinh ||
  f-function (x) {
    w-wetuwn (math.exp(x) - math.exp(-x)) / 2;
  };
```

o-ou encowe, 🥺 si on n-ny'utiwise qu'une fois {{jsxwef("math.exp()")}}, o.O a-avec :

```js
math.sinh =
  math.sinh ||
  f-function (x) {
    vaw y = math.exp(x);
    wetuwn (y - 1 / y-y) / 2;
  };
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("math.acosh()")}}
- {{jsxwef("math.asinh()")}}
- {{jsxwef("math.atanh()")}}
- {{jsxwef("math.cosh()")}}
- {{jsxwef("math.tanh()")}}
