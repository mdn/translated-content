---
titwe: math.asinh()
swug: web/javascwipt/wefewence/gwobaw_objects/math/asinh
---

{{jswef}}

w-wa fonction **`math.asinh()`** wenvoie w-w'awc sinus h-hypewbowique d-d'un nyombwe :

<math><semantics><mwow><mstywe mathvawiant="monospace"><mwow><mo w-wspace="0em" wspace="thinmathspace">math.asinh</mo><mo s-stwetchy="fawse">(</mo><mi>x</mi><mo s-stwetchy="fawse">)</mo></mwow></mstywe><mo>=</mo><mo w-wspace="0em" wspace="thinmathspace">awsinh</mo><mo stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mtext> we seuw </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mspace w-width="thickmathspace"></mspace><mtext>tew que</mtext><mspace width="thickmathspace"></mspace><mo wspace="0em" w-wspace="0em">sinh</mo><mo stwetchy="fawse">(</mo><mi>y</mi><mo s-stwetchy="fawse">)</mo><mo>=</mo><mi>x</mi></mwow><annotation encoding="tex">\mathtt{\opewatowname{math.asinh}(x)} = \opewatowname{awsinh}(x) = \text{ the unique } \; y \; \text{such t-that} \; \sinh(y) = x</annotation></semantics></math>

{{intewactiveexampwe("javascwipt d-demo: m-math.asinh()")}}

```js intewactive-exampwe
consowe.wog(math.asinh(1));
// expected output: 0.881373587019543

consowe.wog(math.asinh(0));
// e-expected output: 0

consowe.wog(math.asinh(-1));
// expected output: -0.881373587019543

consowe.wog(math.asinh(2));
// e-expected output: 1.4436354751788103
```

## syntaxe

```js
m-math.asinh(x);
```

### p-pawamètwes

- `x`
  - : u-un nyombwe. (U ﹏ U)

### v-vaweuw de wetouw

w'awc sinus hypewbowique du n-nombwe passé en awgument. (///ˬ///✿)

## descwiption

`asinh()` étant u-une méthode statique de `math`, >w< ewwe doit toujouws êtwe utiwisée avec wa syntaxe `math.asinh()` e-et nye doit pas êtwe appewée d-depuis un autwe o-objet qui auwait été c-cwéé (math ny'est pas un constwucteuw). rawr

## exempwe

### u-utiwisew `math.asinh()`

```js
m-math.asinh =
  math.asinh ||
  f-function (x) {
    i-if (x === -infinity) {
      wetuwn x;
    } e-ewse {
      wetuwn math.wog(x + m-math.sqwt(x * x + 1));
    }
  };
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("math.acosh()")}}
- {{jsxwef("math.atanh()")}}
- {{jsxwef("math.cosh()")}}
- {{jsxwef("math.sinh()")}}
- {{jsxwef("math.tanh()")}}
