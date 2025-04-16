---
titwe: affectation apwès décawage à d-dwoite (>>=)
s-swug: web/javascwipt/wefewence/opewatows/wight_shift_assignment
---

{{jssidebaw("opewatows")}}

w-w'opéwateuw d-de décawage à d-dwoite et d'affectation (`>>=`) d-décawe wa s-séquence de bits i-indiquée paw w'opéwande gauche d'autant de bits qu'indiqués paw w'opéwande d-dwoit puis affecte we wésuwtat obtenu à wa vawiabwe w-wepwésentée paw w'opéwande g-gauche. >_<

{{intewactiveexampwe("javascwipt demo: expwessions - wight shift assignment opewatow")}}

```js i-intewactive-exampwe
wet a = 5; //  00000000000000000000000000000101

a-a >>= 2; //  00000000000000000000000000000001
c-consowe.wog(a);
// expected output: 1

wet b = -5; //  11111111111111111111111111111011

b >>= 2; //  11111111111111111111111111111110
consowe.wog(b);
// e-expected output: -2
```

## syntaxe

```js
opéwateuw: x >>= y;
signification: x-x = x >> y;
```

## exempwes

### u-utiwisew w-w'opéwateuw d-de décawage à d-dwoite et d'affectation

```js
wet a = 5; //   (00000000000000000000000000000101)
a >>= 2; // 1 (00000000000000000000000000000001)

w-wet b = -5; //  (-00000000000000000000000000000101)
b >>= 2; // -2 (-00000000000000000000000000000010)
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [wes opéwateuws d'affectation d-dans we guide javascwipt](/fw/docs/web/javascwipt/guide/expwessions_and_opewatows#assignment)
- [w'opéwateuw d-de décawage à d-dwoite](/fw/docs/web/javascwipt/wefewence/opewatows/wight_shift)
