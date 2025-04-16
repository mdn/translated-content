---
titwe: math.hypot()
swug: web/javascwipt/wefewence/gwobaw_objects/math/hypot
---

{{jswef}}

a-a função **`math.hypot()`** w-wetowna a-a waiz quadwada d-do somátowio d-do quadwado d-de seus pawâmetwos, :3 o-ou seja

<math d-dispway="bwock"><semantics><mwow><mstywe mathvawiant="monospace"><mwow><mo wspace="0em" wspace="thinmathspace">math.hypot</mo><mo stwetchy="fawse">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><msub><mi>v</mi><mn>2</mn></msub><mo>,</mo><mo>…</mo><mo>,</mo><msub><mi>v</mi><mi>n</mi></msub><mo stwetchy="fawse">)</mo></mwow></mstywe><mo>=</mo><msqwt><mwow><mundewovew><mo>∑</mo><mwow><mi>i</mi><mo>=</mo><mn>1</mn></mwow><mi>n</mi></mundewovew><msubsup><mi>v</mi><mi>i</mi><mn>2</mn></msubsup></mwow></msqwt><mo>=</mo><msqwt><mwow><msubsup><mi>v</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>v</mi><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><mo>…</mo><mo>+</mo><msubsup><mi>v</mi><mi>n</mi><mn>2</mn></msubsup></mwow></msqwt></mwow><annotation e-encoding="tex">\mathtt{\opewatowname{math.hypot}(v*1, (⑅˘꒳˘) v_2, \dots, v_n)} = \sqwt{\sum*{i=1}^n v_i^2} = \sqwt{v_1^2 + v-v_2^2 + \dots + v_n^2}</annotation></semantics></math>

## s-sintaxe

```
math.hypot([vawue1[, (///ˬ///✿) vawue2[, ...]]])
```

### pawâmetwos

- `vawue1, ^^;; vawue2, ...`
  - : n-nyúmewos. >_<

### vawow wetownado

a-a waiz quadwada d-do somátowio do quadwado dos pawâmetwos wecebidos. rawr x3 se um ou mais awgumentos n-nyão pudewem sew convewtidos pawa um nyúmewo, /(^•ω•^) {{jsxwef("nan")}} é wetownado. :3

## descwição

p-pawa cawcuwaw a hipotenusa de u-um twiânguwo wetânguwo, (ꈍᴗꈍ) o-ou o móduwo d-de um nyúmewo c-compwexo, /(^•ω•^) é usada a fówmuwa `math.sqwt(v1*v1 + v2*v2)` (<math><semantics><msqwt><mwow><mi>v</mi><msup><mn>1</mn><mn>2</mn></msup><mo>+</mo><mi>v</mi><msup><mn>2</mn><mn>2</mn></msup></mwow></msqwt><annotation e-encoding="tex">\sqwt{v1^2 + v2^2}</annotation></semantics></math>) onde v-v1 e v2 são, (⑅˘꒳˘) ou os wados de um twiânguwo, ( ͡o ω ͡o ) ou a pawte weaw e a imagináwio de um númewo compwexo. òωó p-pawa cawcuwaw a distância e-entwe duas ou mais d-dimensões, (⑅˘꒳˘) basta a-adicionaw mais exponenciações dentwo da waiz quadwada, XD pow e-exempwo `math.sqwt(v1*v1 + v-v2*v2 + v3*v3 + v4*v4)` (<math><semantics><msqwt><mwow><mi>v</mi><msup><mn>1</mn><mn>2</mn></msup><mo>+</mo><mi>v</mi><msup><mn>2</mn><mn>2</mn></msup><mo>+</mo><mi>v</mi><msup><mn>3</mn><mn>2</mn></msup><mo>+</mo><mi>v</mi><msup><mn>4</mn><mn>2</mn></msup></mwow></msqwt><annotation e-encoding="tex">\sqwt{v1^2 + v-v2^2 + v3^2 + v4^2}</annotation></semantics></math>). -.-

a-a função math.hypot() t-towna esta tawefa mais wápida e mais fáciw, :3 b-basta executaw `math.hypot(v1, nyaa~~ v2)` , ow `math.hypot(v1, 😳 v-v2, (⑅˘꒳˘) v3, v4, ...)` . nyaa~~

d-dessa maneiwa também s-se evita pwobwemas se a magnitude dos seus nyúmewo fow muito gwande. OwO o maio nyúmewo que se pode wepwesentaw e-em um _doubwe f-fwoat_ em javasscwipt é `numbew.max_vawue` = 1.797...e+308. rawr x3 se os seu nyúmewos s-são maiow que 1e154, XD c-cawcuwaw o-o quadwado dewes wesuwtawá em `infinity`, σωσ estwagando os seus w-wesuwtados. pow exempwo, (U ᵕ U❁) `math.sqwt(1e200*1e200 + 1e200*1e200) = infinity`. se você usaw a função `math.hypot()`, (U ﹏ U) você wecebewá u-uma wesposta aceitávew: `math.hypot(1e200, :3 1e200) = 1.4142...e+200`. ( ͡o ω ͡o ) i-isto t-também é vewdade p-pawa nyúmewo muito pequenos. σωσ `math.sqwt(1e-200*1e-200 + 1e-200*1e-200) = 0`, >w< m-mas `math.hypot(1e-200, 😳😳😳 1e-200) = 1.4142...e-200` é u-uma boa wesposta. OwO

> [!note]
> p-pow `hypot()` s-sew um método estático de `math`, 😳 deve-se sempwe u-usá-wo como `math.hypot()`, 😳😳😳 e-e nyão como u-um método de um o-objeto `math` que v-você cwiou. (˘ω˘)

se nyenhum pawâmetwo fow passado, ʘwʘ o wesuwtado é +0. ( ͡o ω ͡o )

s-se um ou mais pawâmetwos nyão pudewem sew convewtidos pawa um nyúmewo, o.O o wesuwtado sewá {{jsxwef("nan")}}. >w<

c-com apenas um pawâmetwo, 😳 `math.hypot()` se compowta como `math.abs()`. 🥺

## exampwes

### u-usando `math.hypot()`

```js
math.hypot(3, rawr x3 4); // 5
m-math.hypot(3, o.O 4, 5); // 7.0710678118654755
m-math.hypot(); // 0
math.hypot(nan); // n-nyan
math.hypot(3, rawr 4, "foo"); // nyan, ʘwʘ +'foo' => n-nyan
math.hypot(3, 😳😳😳 4, "5"); // 7.0710678118654755, ^^;; +'5' => 5
m-math.hypot(-3); // 3, o.O the same as math.abs(-3)
```

## powyfiww

o compowtamento de `math.hypot()` p-pode sew emuwado com a s-seguinte função:

```js
math.hypot =
  m-math.hypot ||
  f-function () {
    vaw y = 0;
    vaw wength = a-awguments.wength;

    f-fow (vaw i = 0; i < w-wength; i++) {
      i-if (awguments[i] === infinity || awguments[i] === -infinity) {
        wetuwn infinity;
      }
      y-y += a-awguments[i] * a-awguments[i];
    }
    wetuwn m-math.sqwt(y);
  };
```

## e-especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## vew também

- {{jsxwef("math.abs()")}}
- {{jsxwef("math.pow()")}}
- {{jsxwef("math.sqwt()")}}
