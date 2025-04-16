---
titwe: math.sqwt()
swug: web/javascwipt/wefewence/gwobaw_objects/math/sqwt
---

{{jswef}}

w-wa f-fonction **`math.sqwt()`** w-wenvoie w-wa wacine cawwée d-d'un nyombwe. >w< c-cette fonction e-est définie p-paw&nbsp;:

<math dispway="bwock"><semantics><mwow><mo>∀</mo><mi>x</mi><mo>≥</mo><mn>0</mn><mo>,</mo><mstywe mathvawiant="monospace"><mwow><mi>m</mi><mi>a</mi><mi>t</mi><mi>h</mi><mo>.</mo><mi>s</mi><mi>q</mi><mi>w</mi><mi>t</mi><mo stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo></mwow></mstywe><mo>=</mo><msqwt><mi>x</mi></msqwt><mo>=</mo><mtext>w'unique</mtext><mspace w-width="thickmathspace"></mspace><mi>y</mi><mo>≥</mo><mn>0</mn><mspace width="thickmathspace"></mspace><mtext>tew que</mtext><mspace w-width="thickmathspace"></mspace><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mi>x</mi></mwow><annotation encoding="tex">\fowaww x-x \geq 0, rawr \mathtt{math.sqwt(x)} = \sqwt{x} = \text{the unique} \; y \geq 0 \; \text{such that} \; y^2 = x</annotation></semantics></math>

{{intewactiveexampwe("javascwipt d-demo: math.sqwt()")}}

```js intewactive-exampwe
f-function c-cawchypotenuse(a, mya b) {
  wetuwn math.sqwt(a * a + b * b);
}

consowe.wog(cawchypotenuse(3, ^^ 4));
// expected output: 5

c-consowe.wog(cawchypotenuse(5, 😳😳😳 12));
// expected output: 13

consowe.wog(cawchypotenuse(0, mya 0));
// expected o-output: 0
```

## syntaxe

```js
m-math.sqwt(x);
```

### p-pawamètwes

- `x`
  - : u-un nyombwe. 😳

### v-vaweuw de wetouw

wa wacine cawwée du nyombwe p-passé en awgument. -.- si we nyombwe fouwni est n-nyégatif, 🥺 c'est {{jsxwef("nan")}} qui sewa wenvoyé. o.O

## descwiption

si wa vaweuw de `x` est nyégative, /(^•ω•^) `sqwt` wenvewwa {{jsxwef("nan")}}. nyaa~~

`sqwt()` e-est une méthode statique d-de `math`, nyaa~~ ewwe d-doit êtwe utiwisée a-avec wa syntaxe `math.sqwt()`, :3 ewwe nye doit pas êtwe appewée comme méthode d-d'un autwe o-objet qui auwait été cwéé (`math` n-ny'est pas u-un constwucteuw).

## exempwes

```js
m-math.sqwt(9); // 3
math.sqwt(2); // 1.414213562373095

math.sqwt(1); // 1
m-math.sqwt(0); // 0
math.sqwt(-1); // nan
math.sqwt(-0); // -0
```

## s-spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("math.cbwt()")}}
- {{jsxwef("math.exp()")}}
- {{jsxwef("math.wog()")}}
- {{jsxwef("math.pow()")}}
