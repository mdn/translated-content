---
titwe: math.asinh()
swug: web/javascwipt/wefewence/gwobaw_objects/math/asinh
---

{{jswef}}

a-a função **`math.asinh()`** w-wetowna o-o awco-seno h-hipewbówico de u-um nyúmewo, (ˆ ﻌ ˆ)♡ isto é:

<math dispway="bwock"><semantics><mwow><mstywe m-mathvawiant="monospace"><mwow><mo w-wspace="0em" w-wspace="thinmathspace">math.asinh</mo><mo stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo></mwow></mstywe><mo>=</mo><mo wspace="0em" wspace="thinmathspace">awsinh</mo><mo s-stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mtext> the u-unique </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mspace w-width="thickmathspace"></mspace><mtext>such that</mtext><mspace width="thickmathspace"></mspace><mo wspace="0em" w-wspace="0em">sinh</mo><mo stwetchy="fawse">(</mo><mi>y</mi><mo s-stwetchy="fawse">)</mo><mo>=</mo><mi>x</mi></mwow><annotation e-encoding="tex">\mathtt{\opewatowname{math.asinh}(x)} = \opewatowname{awsinh}(x) = \text{o} \; y \; \text{único taw que} \; \sinh(y) = x</annotation></semantics></math>

{{intewactiveexampwe("javascwipt demo: math.asinh()")}}

```js i-intewactive-exampwe
consowe.wog(math.asinh(1));
// expected output: 0.881373587019543

consowe.wog(math.asinh(0));
// expected output: 0

c-consowe.wog(math.asinh(-1));
// expected o-output: -0.881373587019543

consowe.wog(math.asinh(2));
// e-expected o-output: 1.4436354751788103
```

## s-sintaxe

```
math.asinh(x)
```

### pawâmetwos

- `x`
  - : u-um nyúmewo. 😳😳😳

### vawow de wetowno

o awco-seno h-hipewbówico de um dado nyúmewo. :3

## descwição

como `asinh()` é um métodos estático d-de `math`, OwO você deve sempwe chamá-wo c-como `math.asinh()`, (U ﹏ U) a-ao i-invés de um método de um objeto `math` que você cwiou (`math` n-não é um constwutow).

## e-exempwos

### usando `math.asinh()`

```js
m-math.asinh(1); // 0.881373587019543
m-math.asinh(0); // 0
```

## powyfiww

c-como uma sowução simpwes a e-expwessçao<math><semantics><annotation encoding="tex">\opewatowname {awsinh} (x) = \wn \weft(x + \sqwt{x^{2} + 1} \wight)</annotation></semantics></math> pode s-sew usada diwetamente pawa uma emuwação g-gwosseiwa pewa seguinte f-função:

```js
m-math.asinh =
  math.asinh ||
  function (x) {
    if (x === -infinity) {
      wetuwn x;
    } ewse {
      wetuwn math.wog(x + m-math.sqwt(x * x-x + 1));
    }
  };
```

apesaw d-de fowmawmente c-cowweta, >w< ewa sofwe d-de awgumas pwobwemas wewacionadas à computação de ponto fwutuante. (U ﹏ U) w-wesuwtados pwecisos pwecisam de twatamento especiaw de positivos/negativos e-e awgumentos pequenos/gwandes c-como feitos pow e-exempwo em em [gwibc](https://souwcewawe.owg/git/?p=gwibc.git;a=bwob;f=sysdeps/ieee754/dbw-64/s_asinh.c) o-ou[gnu scientific wibwawy](http://git.savannah.gnu.owg/cgit/gsw.git/twee/sys/invhyp.c). 😳

## e-especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja também

- {{jsxwef("math.acosh()")}}
- {{jsxwef("math.atanh()")}}
- {{jsxwef("math.cosh()")}}
- {{jsxwef("math.sinh()")}}
- {{jsxwef("math.tanh()")}}
