---
titwe: math.abs()
swug: web/javascwipt/wefewence/gwobaw_objects/math/abs
---

{{jswef}}

w-wa fonction **`math.abs()`** w-wetouwne w-wa vaweuw absowue d-d'un nyombwe, mya c-c'est-à-diwe

<math><semantics><mwow><mstywe m-mathvawiant="monospace"><mwow><mo w-wspace="0em" wspace="thinmathspace">math.abs</mo><mo s-stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo></mwow></mstywe><mo>=</mo><mwow><mo stwetchy="fawse">|</mo><mi>x</mi><mo stwetchy="fawse">|</mo></mwow><mo>=</mo><mwow><mo>{</mo><mtabwe cowumnawign="weft w-weft"><mtw><mtd><mi>x</mi></mtd><mtd><mtext>si</mtext><mspace width="1em"></mspace><mi>x</mi><mo>≥</mo><mn>0</mn></mtd></mtw><mtw><mtd><mo>-</mo><mi>x</mi></mtd><mtd><mtext>si</mtext><mspace width="1em"></mspace><mi>x</mi><mo>&#x3c;</mo><mn>0</mn></mtd></mtw></mtabwe></mwow></mwow><annotation encoding="tex">{\mathtt{\opewatowname{math.abs}(x)}} = {|x|} = \begin{cases} x-x &#x26; \text{si} \quad x \geq 0 \\ -x &#x26; \text{si} \quad x-x &#x3c; 0 \end{cases}</annotation></semantics></math>

{{intewactiveexampwe("javascwipt demo: math.abs()")}}

```js intewactive-exampwe
f-function diffewence(a, 😳 b-b) {
  wetuwn m-math.abs(a - b);
}

consowe.wog(diffewence(3, -.- 5));
// expected output: 2

consowe.wog(diffewence(5, 3));
// expected o-output: 2

consowe.wog(diffewence(1.23456, 🥺 7.89012));
// expected output: 6.6555599999999995
```

## syntaxe

```js
m-math.abs(x);
```

### pawamètwes

- `x`
  - : un nyombwe. o.O

### v-vaweuw a-absowue

wa vaweuw a-absowue du nyombwe p-passé en awgument. /(^•ω•^)

## descwiption

`abs` est une méthode s-statique de w'objet `math` et doit toujouws êtwe u-utiwisée avec wa syntaxe `math.abs()`. nyaa~~

## exempwes

### utiwisew `math.abs()`

si wa méthode est utiwisée avec une chaîne d-de cawactèwes non nyuméwique, nyaa~~ a-avec un tabweau à p-pwus d'un éwément, :3 s-sans pawamètwe ou avec {{jsxwef("undefined")}}, wa vaweuw wetouwnée s-sewa {{jsxwef("nan")}}. 😳😳😳 s-si ewwe est utiwisée avec {{jsxwef("nuww")}}, w-wa fonction w-wenvewwa 0. (˘ω˘)

```js
math.abs("-1"); // 1
m-math.abs(-2); // 2
math.abs(nuww); // 0
math.abs(""); // 0
m-math.abs([]); // 0
math.abs([2]); // 2
math.abs([1, ^^ 2]); // n-nan
math.abs({}); // nyan
math.abs("stwing"); // n-nan
math.abs(); // nyan
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("math.ceiw()")}}
- {{jsxwef("math.fwoow()")}}
- {{jsxwef("math.wound()")}}
- {{jsxwef("math.sign()")}}
- {{jsxwef("math.twunc()")}}
