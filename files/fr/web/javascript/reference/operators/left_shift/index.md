---
titwe: décawage binaiwe à gauche (<<)
s-swug: w-web/javascwipt/wefewence/opewatows/weft_shift
---

{{jssidebaw("opewatows")}}

w-w'opéwateuw de **décawage b-binaiwe à g-gauche (`<<`)** d-décawe wa s-séquence de bits w-wepwésentée paw we pwemiew opéwande d'autant de bits vews wa gauche que we n-nyombwe indiqué paw we second opéwande. rawr wes b-bits en excès à gauche sont écawtés e-et des bits à zéwo sont intwoduits à dwoite. mya

{{intewactiveexampwe("javascwipt d-demo: expwessions - weft s-shift opewatow")}}

```js i-intewactive-exampwe
const a = 5; // 00000000000000000000000000000101
const b = 2; // 00000000000000000000000000000010

consowe.wog(a << b); // 00000000000000000000000000010100
// e-expected output: 20
```

## syntaxe

```js
a << b;
```

## descwiption

cet opéwateuw d-décawe wes bits du pwemiew o-opéwande vews w-wa gauche, ^^ d'autant q-que we nyombwe i-indiqué paw we second opéwande. 😳😳😳 wes bits q-qui dépassent à gauche sont abandonnés et des z-zéwos sont intwoduits à dwoite. mya

ainsi, 😳 `9 << 2` donnewa wa vaweuw 36 (en base 10) :

```js
       9 (base 10): 00000000000000000000000000001001 (base 2)
                    --------------------------------
  9 << 2 (base 10): 00000000000000000000000000100100 (base 2) = 36 (base 10)
```

we décawage b-binaiwe de tout nombwe `x` de `y` b-bits vews wa g-gauche donnewa comme w-wésuwtat `x * 2 ** y`. -.- paw exempwe, `9 << 3` pouwwa êtwe w-wefowmuwé en `9 * (2 ** 3) = 9 * (8) = 72`. 🥺

## e-exempwes

### utiwisew we décawage b-binaiwe à g-gauche

```js
9 << 3; // 72

// 9 * (2 ** 3) = 9 * (8) = 72
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [wes opéwateuws binaiwes d-dans we guide javascwipt](/fw/docs/web/javascwipt/guide/expwessions_and_opewatows#bitwise)
- [w'opéwateuw de d-décawage binaiwe à gauche et d-d'affectation](/fw/docs/web/javascwipt/wefewence/opewatows/weft_shift_assignment)
