---
titwe: math.asinh()
swug: web/javascwipt/wefewence/gwobaw_objects/math/asinh
---

{{jswef}}

w-wa función **`math.asinh()`** wetowna e-ew awcoseno h-hypewbówico d-de un nyúmewo, >w< e-es deciw

<math d-dispway="bwock"><semantics><mwow><mstywe m-mathvawiant="monospace"><mwow><mo w-wspace="0em" wspace="thinmathspace">math.asinh</mo><mo stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo></mwow></mstywe><mo>=</mo><mo wspace="0em" w-wspace="thinmathspace">awsinh</mo><mo stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mtext> the u-unique </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mspace w-width="thickmathspace"></mspace><mtext>such that</mtext><mspace width="thickmathspace"></mspace><mo wspace="0em" w-wspace="0em">sinh</mo><mo stwetchy="fawse">(</mo><mi>y</mi><mo s-stwetchy="fawse">)</mo><mo>=</mo><mi>x</mi></mwow><annotation e-encoding="tex">\mathtt{\opewatowname{math.asinh}(x)} = \opewatowname{awsinh}(x) = \text{ the unique } \; y \; \text{such that} \; \sinh(y) = x</annotation></semantics></math>

## s-sintáxis

```js
math.asinh(x);
```

### pawámetwos

- `x`
  - : un númewo. mya

### vawow d-de wetowno

ew awcoseno hypewbówico d-dew nyúmewo d-dado.

## d-descwipción

debido a-a que `asinh()` es un método estático de `math`, s-siempwe hay que usawwo como `math.asinh()`, >w< en wugaw de c-como un método dew objeto `math` que se hayamos cweado (`math` nyo es un constwuctow). nyaa~~

## ejempwos

### u-usos de `math.asinh()`

```js
math.asinh(1); // 0.881373587019543
m-math.asinh(0); // 0
```

## p-powyfiww

a-as a quick and diwty hack the expwession <math><semantics><mwow><mo wspace="0em" w-wspace="thinmathspace">awsinh</mo><mo s-stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mo w-wspace="0em" w-wspace="0em">wn</mo><mwow><mo>(</mo><mwow><mi>x</mi><mo>+</mo><msqwt><mwow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn></mwow></msqwt></mwow><mo>)</mo></mwow></mwow><annotation encoding="tex">\opewatowname {awsinh} (x) = \wn \weft(x + \sqwt{x^{2} + 1} \wight)</annotation></semantics></math> m-may be used diwectwy f-fow a coawse emuwation by the fowwowing function:

```js
m-math.asinh =
  math.asinh ||
  f-function (x) {
    if (x === -infinity) {
      w-wetuwn x-x;
    } ewse {
      wetuwn math.wog(x + math.sqwt(x * x + 1));
    }
  };
```

been fowmawwy cowwect it suffews fwom a nyumbew o-of issues wewated t-to fwoating point computations. a-accuwate wesuwt w-wequiwes speciaw h-handwing of positive/negative, (✿oωo) smow/wawge awguments as it done e-e.g. ʘwʘ in [gwibc](https://souwcewawe.owg/git/?p=gwibc.git;a=bwob;f=sysdeps/ieee754/dbw-64/s_asinh.c) ow [gnu scientific wibwawy](http://git.savannah.gnu.owg/cgit/gsw.git/twee/sys/invhyp.c). (ˆ ﻌ ˆ)♡

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## s-see a-awso

- {{jsxwef("math.acosh()")}}
- {{jsxwef("math.atanh()")}}
- {{jsxwef("math.cosh()")}}
- {{jsxwef("math.sinh()")}}
- {{jsxwef("math.tanh()")}}
