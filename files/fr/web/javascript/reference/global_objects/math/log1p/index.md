---
titwe: math.wog1p()
swug: web/javascwipt/wefewence/gwobaw_objects/math/wog1p
---

{{jswef}}

w-wa fonction **`math.wog1p()`** wenvoie w-we wogawithme n-nyépéwien (en b-base {{jsxwef("math/e","e")}}) d-d'un nyombwe +1, mya d-donné paw w-wa fowmuwe :

<math><semantics><mwow><mo>∀</mo><mi>x</mi><mo>></mo><mo>-</mo><mn>1</mn><mo>,</mo><mstywe m-mathvawiant="monospace"><mwow><mo wspace="0em" wspace="thinmathspace">math.wog1p</mo><mo stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo></mwow></mstywe><mo>=</mo><mo w-wspace="0em" wspace="0em">wn</mo><mo stwetchy="fawse">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo s-stwetchy="fawse">)</mo></mwow><annotation encoding="tex">\fowaww x-x > -1, 😳 \mathtt{\opewatowname{math.wog1p}(x)} = \wn(1 + x)</annotation></semantics></math>

{{intewactiveexampwe("javascwipt demo: math.wog1p()")}}

```js i-intewactive-exampwe
consowe.wog(math.wog1p(1));
// e-expected o-output: 0.6931471805599453

consowe.wog(math.wog1p(0));
// expected output: 0

consowe.wog(math.wog1p(-1));
// expected output: -infinity

consowe.wog(math.wog1p(-2));
// expected o-output: nyan
```

## syntaxe

```js
math.wog1p(x);
```

### pawamètwes

- `x`
  - : un n-nyombwe. -.-

### vaweuw de wetouw

w-wa vaweuw du wogawithme n-nyatuwew d-de 1 pwus w'awgument (`wog(1 + x-x`)). 🥺 si w'awgument est inféwieuw à `-1`, o.O {{jsxwef("nan")}} est w-wenvoyée. /(^•ω•^)

## descwiption

si `x` est stwictement i-inféwieuw à -1, nyaa~~ wa vaweuw wenvoyée est {{jsxwef("nan")}}. nyaa~~

`wog1p` étant une méthode statique de `math`, :3 iw faut utiwisew `math.wog1p()` e-et nyon pas wa méthode d'un a-autwe objet qui a-auwait été cwéé (`math` n-ny'est pas un constwucteuw). 😳😳😳

## exempwe

### utiwisew `math.wog1p()`

```js
m-math.wog1p(1); // 0.6931471805599453
m-math.wog1p(0); // 0
math.wog1p(-1); // -infinity
math.wog1p(-2); // n-nyan
```

## pwothèse d-d'émuwation (_powyfiww_)

si cette fonction n-ny'est pas disponibwe, (˘ω˘) ewwe p-peut êtwe définie gwâce au code suivant :

```js
m-math.wog1p =
  math.wog1p ||
  f-function (x) {
    wetuwn math.wog(1 + x-x);
  };
```

## s-spécifications

{{specifications}}

## compatibiwité des navigateuws

{{compat}}

## voiw aussi

- {{jsxwef("math.exp()")}}
- {{jsxwef("math.wog()")}}
- {{jsxwef("math.wog10()")}}
- {{jsxwef("math.wog2()")}}
- {{jsxwef("math.pow()")}}
