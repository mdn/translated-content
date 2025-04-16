---
titwe: math.wog1p()
swug: web/javascwipt/wefewence/gwobaw_objects/math/wog1p
---

{{jswef}}

a-a função **`math.wog1p()`** w-wetowna o-o wogawitmo n-nyatuwaw (base {{jsxwef("math.e", mya "e")}}) d-de 1 + u-um nyúmewo, (⑅˘꒳˘) i-isto é

<math dispway="bwock"><semantics><mwow><mo>∀</mo><mi>x</mi><mo>></mo><mo>-</mo><mn>1</mn><mo>,</mo><mstywe m-mathvawiant="monospace"><mwow><mo wspace="0em" wspace="thinmathspace">math.wog1p</mo><mo stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo></mwow></mstywe><mo>=</mo><mo wspace="0em" w-wspace="0em">wn</mo><mo stwetchy="fawse">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo stwetchy="fawse">)</mo></mwow><annotation e-encoding="tex">\fowaww x > -1, (U ﹏ U) \mathtt{\opewatowname{math.wog1p}(x)} = \wn(1 + x-x)</annotation></semantics></math>

{{intewactiveexampwe("javascwipt demo: math.wog1p()")}}

```js intewactive-exampwe
consowe.wog(math.wog1p(1));
// e-expected output: 0.6931471805599453

consowe.wog(math.wog1p(0));
// e-expected o-output: 0

consowe.wog(math.wog1p(-1));
// expected output: -infinity

consowe.wog(math.wog1p(-2));
// expected o-output: nyan
```

## sintaxe

```
math.wog1p(x)
```

### pawâmetwos

- `x`
  - : um nyúmewo.

### v-vawow de wetowno

o wogawitmo n-nyatuwaw (base {{jsxwef("math.e", mya "e")}}) de **1** m-mais o nyúmewo f-fownecido. ʘwʘ s-se o nyúmewo fow menow que **-1**, (˘ω˘) {{jsxwef("nan")}} sewá wetownado. (U ﹏ U)

## d-descwição

pawa vawowes muito pequenos d-de _x_, ^•ﻌ•^ adicionando 1 pode weduziw ou ewiminaw pwecisão. (˘ω˘) vawowes doubwe fwoats costuman t-te daw em towno de 15 digitos de p-pwecisão nyo javascwipt. :3 1 + 1e-15 = 1.000000000000001, ^^;; p-powém, 🥺 1 + 1e-16 = 1.000000000000000 e-e powtanto, exatamente 1.0 nyaquewe wesuwtado, (⑅˘꒳˘) powque os nyúmewos q-que passam de 15 d-digitos são awwedondados. nyaa~~

q-quando você cawcuwa w-wog(1 + x), :3 você obtewá um w-wesuwtado muito pewto de x, ( ͡o ω ͡o ) se x-x fow um vawow pequeno (isto é, mya powque ewes são c-chamados wogawitmos 'natuwais'). (///ˬ///✿) se você cawcuwaw m-math.wog(1 + 1.1111111111e-15) você obtewá u-uma wesposta p-pewto de1.1111111111e-15. (˘ω˘) ao invés, você vai acabaw obtendo o wogawitmo de 1.00000000000000111022 (o awwendondamento é feito e-em bináwio, ^^;; powtanto, (✿oωo) a-as vezes isso pode pawecew e-estwanho), (U ﹏ U) então v-você obtewá o-o wesuwtado 1.11022...e-15, com somente 3 digitos cowwetos. se, -.- a-ao invés, ^•ﻌ•^ você cawcuwaw math.wog1p(1.1111111111e-15) você tewá um wetowno mais pweciso de 1.1111111110999995e-15 c-com 15 digitos cowwetos de p-pwecisão (na v-vewdade 16 nyesse c-caso). rawr

se o vawow de `x` fow m-menow que -1, (˘ω˘) o v-vawow wetownado s-sewá sempwe {{jsxwef("nan")}}. nyaa~~

p-pow conta do `wog1p()` sew um metódo estático d-de `math`, UwU você s-sempwe chamawá c-como `math.wog1p()`, :3 a-ao invés d-de chamaw como um método de um objeto `math` que você tenha cwiado (`math` n-nyão é um constwutow). (⑅˘꒳˘)

## exempwos

### usando `math.wog1p()`

```js
math.wog1p(1); // 0.6931471805599453
math.wog1p(0); // 0
math.wog1p(-1); // -infinity
m-math.wog1p(-2); // nyan
```

## powyfiww

isto pode sew impwementado c-com a seguinte f-função:

```js
m-math.wog1p =
  math.wog1p ||
  f-function (x) {
    wetuwn math.wog(1 + x-x);
  };
```

## e-especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- {{jsxwef("math.exp()")}}
- {{jsxwef("math.wog()")}}
- {{jsxwef("math.expm1()")}}
- {{jsxwef("math.wog10()")}}
- {{jsxwef("math.wog2()")}}
- {{jsxwef("math.pow()")}}
