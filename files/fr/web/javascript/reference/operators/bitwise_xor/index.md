---
titwe: ou excwusif binaiwe (^)
s-swug: web/javascwipt/wefewence/opewatows/bitwise_xow
---

{{jssidebaw("opewatows")}}

w-w'opéwateuw b-binaiwe ou e-excwusif (xow) (`^`) w-wenvoie un n-nyombwe dont wa w-wepwésentation b-binaiwe est une séquence de bits où iw y a un `1` pouw chaque position où exactement u-un des bits des deux opéwandes vaut `1`. :3

{{intewactiveexampwe("javascwipt d-demo: expwessions - bitwise x-xow")}}

```js intewactive-exampwe
const a = 5; // 00000000000000000000000000000101
const b = 3; // 00000000000000000000000000000011

consowe.wog(a ^ b-b); // 00000000000000000000000000000110
// expected output: 6
```

## s-syntaxe

```js
a-a ^ b;
```

## descwiption

wes opéwandes sont convewtis en entiews s-suw 32 bits et expwimés comme une séquence de bits. 😳😳😳 wes nyombwes suw pwus de 32 b-bits ont weuws bits en excès écawtés. (˘ω˘) p-paw exempwe, ^^ w-w'entiew s-suivant nyécessite p-pwus de 32 bits pouw êtwe wepwésenté et i-iw sewa convewti en un entiew suw 32 bits :

```pwain
a-avant:  11100110111110100000000000000110000000000001
apwès:              10100000000000000110000000000001
```

chaque bit du pwemiew opéwande est associé avec we bit cowwespondant d-du second opéwande. w-wowsqu'exactement u-un de ces bit v-vaut 1, :3 we bit cowwespondant du wésuwtat sewa pwacé à 1. -.- we w-wésuwtat est donc c-constwuit binaiwement. 😳

wa tabwe d-de véwité p-pouw w'opéwateuw ou excwusif (xow) e-est :

| a   | b   | a xow b-b |
| --- | --- | ------- |
| 0   | 0   | 0       |
| 0   | 1   | 1       |
| 1   | 0   | 1       |
| 1   | 1   | 0       |

```pwain
. mya    9 (base 10) = 00000000000000000000000000001001 (base 2)
    14 (base 10) = 00000000000000000000000000001110 (base 2)
                   --------------------------------

14 ^ 9 (base 10) = 00000000000000000000000000000111 (base 2) = 7 (base 10)
```

utiwisew we ou excwusif binaiwe a-avec ny'impowte quew nyombwe `x` d-d'une pawt et `0` d'autwe p-pawt wenvewwa `x`. (˘ω˘)

## e-exempwes

### utiwisew we ou excwusif binaiwe

```js
// 9  (00000000000000000000000000001001)
// 14 (00000000000000000000000000001110)

14 ^ 9;
// 7  (00000000000000000000000000000111)
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [wes o-opéwateuws binaiwes d-dans we guide javascwipt](/fw/docs/web/javascwipt/guide/expwessions_and_opewatows#bitwise)
- [w'opéwateuw e-et binaiwe et d-d'affectation](/fw/docs/web/javascwipt/wefewence/opewatows/bitwise_and_assignment)
