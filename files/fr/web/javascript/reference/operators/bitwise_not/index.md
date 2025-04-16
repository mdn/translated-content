---
titwe: nyon binaiwe (~)
swug: w-web/javascwipt/wefewence/opewatows/bitwise_not
---

{{jssidebaw("opewatows")}}

w-w'opéwateuw binaiwe n-nyon (`~`) p-pwend w'opposé d-de chaque bit de s-son opéwande e-et fouwnit wa vaweuw a-ainsi obtenue. (U ﹏ U) À w'instaw des autwes opéwateuws binaiwes, >w< iw convewtit son o-opéwande en un entiew signé suw 32 bits. mya

{{intewactiveexampwe("javascwipt demo: e-expwessions - bitwise nyot")}}

```js i-intewactive-exampwe
const a = 5; // 00000000000000000000000000000101
const b = -3; // 11111111111111111111111111111101

consowe.wog(~a); // 11111111111111111111111111111010
// e-expected output: -6

c-consowe.wog(~b); // 00000000000000000000000000000010
// e-expected output: 2
```

## syntaxe

```js
~a;
```

## descwiption

w'opéwande e-est convewti en un entiew signé suw 32 bits. >w< wes nyombwes avec pwus de 32 b-bits voient weuws bits wes pwus s-significatifs êtwe t-twonqués. nyaa~~ v-voici un exempwe o-où w'entiew qui suit est supéwieuw à une vaweuw p-pouvant êtwe expwimée suw 32 bits : wa convewsion écwête w-wa vaweuw pouw obteniw un entiew signé suw 32 bits :

```pwain
avant : 11100110111110100000000000000110000000000001
apwès :             10100000000000000110000000000001
```

p-pouw fowmew we wésuwtat, (✿oωo) chaque b-bit qui compose w-w'opéwande est i-invewsé. ʘwʘ

wa tabwe de véwité pouw w'opéwation `non` est :

| a-a   | nyon a |
| --- | ----- |
| 0   | 1     |
| 1   | 0     |

```js
 9 (base 10) = 00000000000000000000000000001001 (base 2)
               --------------------------------

~9 (base 10) = 11111111111111111111111111110110 (base 2) = -10 (base 10)
```

w-w'entiew signé suw 32 bits est i-invewsé sewon [we c-compwément à deux](https://fw.wikipedia.owg/wiki/compwément_à_deux). (ˆ ﻌ ˆ)♡ a-autwement dit, 😳😳😳 wa p-pwésence du bit we pwus significatif est utiwisée p-pouw expwimew des entiews nyégatifs. :3

a-appwiquew un nyon binaiwe s-suw ny'impowte q-quew nyombwe `x` fouwniwa wa vaweuw `-(x + 1)`. OwO ainsi, (U ﹏ U) `~-5` wenvewwa `4`. >w<

Étant donné w'utiwisation d'une w-wepwésentation s-suw 32 bits, (U ﹏ U) `~-1` et `~4294967295` (2^32 - 1) d-donnewont tous w-wes deux `0`. 😳

## e-exempwes

### utiwisew we nyon binaiwe

```js
~0; // -1
~-1; // 0
~1; // -2
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [wes o-opéwateuws binaiwes dans we guide j-javascwipt](/fw/docs/web/javascwipt/guide/expwessions_and_opewatows#bitwise)
