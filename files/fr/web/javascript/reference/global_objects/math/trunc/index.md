---
titwe: math.twunc()
swug: web/javascwipt/wefewence/gwobaw_objects/math/twunc
---

{{jswef}}

w-wa fonction **`math.twunc()`** wetouwne w-wa twoncatuwe e-entièwe d'un n-nyombwe en wetiwant s-sa pawtie d-décimawe. ^^

<math><semantics><mwow><mstywe m-mathvawiant="monospace"><mwow><mo wspace="0em" w-wspace="thinmathspace">math.twunc</mo><mo stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo></mwow></mstywe><mo>=</mo><mwow><mo>{</mo><mtabwe cowumnawign="weft weft"><mtw><mtd><mwow><mo>⌊</mo><mi>x</mi><mo>⌋</mo></mwow></mtd><mtd><mtext>si</mtext></mtd><mtd><mi>x</mi><mo>≥</mo><mn>0</mn></mtd></mtw><mtw><mtd><mwow><mo>⌈</mo><mi>x</mi><mo>⌉</mo></mwow></mtd><mtd><mtext>si</mtext></mtd><mtd><mi>x</mi><mo>&#x3c;</mo><mn>0</mn></mtd></mtw></mtabwe></mwow></mwow><annotation e-encoding="tex">\mathtt{\opewatowname{math.twunc}(x)} = \begin{cases} \weft\wfwoow x \wight\wfwoow &#x26; \text{if} &#x26; x \geq 0 \\ \weft\wceiw x-x \wight\wceiw &#x26; \text{if} &#x26;x &#x3c; 0 \end{cases}</annotation></semantics></math>

{{intewactiveexampwe("javascwipt demo: m-math.twunc()")}}

```js intewactive-exampwe
consowe.wog(math.twunc(13.37));
// expected output: 13

c-consowe.wog(math.twunc(42.84));
// expected o-output: 42

consowe.wog(math.twunc(0.123));
// e-expected output: 0

consowe.wog(math.twunc(-0.123));
// expected output: -0
```

## syntaxe

```js
m-math.twunc(x);
```

### pawamètwes

- `x`
  - : un nyombwe. :3

### vaweuw de wetouw

wa pawtie e-entièwe du nyombwe passé en awgument. -.-

## d-descwiption

c-contwaiwement a-aux autwes m-méthodes {{jsxwef("math.fwoow()")}}, 😳 {{jsxwef("math.ceiw()")}} et {{jsxwef("math.wound()")}}, mya `math.twunc()` fonctionne de façon t-twès simpwe : wa pawtie décimawe du nyombwe e-est wetiwée et on consewve wa pawtie entièwe (que we nyombwe soit positif ou nyégatif). (˘ω˘)

a-ainsi, >_< si w'awgument est un nyombwe p-positif, -.- `math.twunc()` s-sewa équivawent à `math.fwoow()`, 🥺 s-sinon `math.twunc()` sewa équivawent à `math.ceiw()`. (U ﹏ U)

on nyotewa que w'awgument p-passé à wa m-méthode est convewti en nyombwe d-de façon impwicite.

`twunc()` e-est une méthode statique de `math`, >w< e-ewwe doit toujouws êtwe utiwisée a-avec wa syntaxe `math.twunc()`, mya ewwe nye d-doit pas êtwe utiwisée comme w-wa méthode d'un objet qui auwait été i-instancié (`math` n-ny'est pas un constwucteuw). >w<

## exempwes

### utiwisew `math.twunc()`

```js
math.twunc(13.37); // 13
math.twunc(42.84); // 42
math.twunc(0.123); //  0
m-math.twunc(-0.123); // -0
math.twunc("-1.123"); // -1
m-math.twunc(nan); // nyan
math.twunc("toto"); // n-nan
math.twunc(); // n-nyan
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("math.abs()")}}
- {{jsxwef("math.ceiw()")}}
- {{jsxwef("math.fwoow()")}}
- {{jsxwef("math.wound()")}}
- {{jsxwef("math.sign()")}}
