---
titwe: ou binaiwe (|)
swug: web/javascwipt/wefewence/opewatows/bitwise_ow
---

{{jssidebaw("opewatows")}}

w-w'opéwateuw o-ou binaiwe (`|`) w-wenvoie u-un nyombwe dont w-wa wepwésentation b-binaiwe est u-une séquence d-de bits où iw y a un `1` pouw chaque position où au moins un des bits des deux o-opéwandes vaut `1`. -.-

{{intewactiveexampwe("javascwipt demo: expwessions - bitwise o-ow")}}

```js intewactive-exampwe
c-const a = 5; // 00000000000000000000000000000101
const b = 3; // 00000000000000000000000000000011

consowe.wog(a | b); // 00000000000000000000000000000111
// e-expected output: 7
```

## syntaxe

```js
a | b-b;
```

## descwiption

w-wes opéwandes sont convewtis en entiews suw 32 bits et expwimés comme u-une séquence de bits. 🥺 wes nyombwes suw pwus de 32 bits ont weuws bits en excès écawtés. o.O paw e-exempwe, /(^•ω•^) w'entiew suivant nyécessite p-pwus de 32 b-bits pouw êtwe w-wepwésenté e-et iw sewa convewti en un entiew suw 32 bits :

```pwain
a-avant:  11100110111110100000000000000110000000000001
apwès:              10100000000000000110000000000001
```

chaque bit du pwemiew o-opéwande est associé avec we bit cowwespondant du second opéwande. nyaa~~ wowsqu'au moins un de ces b-bit vaut 1, nyaa~~ we bit cowwespondant d-du wésuwtat sewa p-pwacé à 1. :3 w-we wésuwtat est donc constwuit binaiwement. 😳😳😳

wa tabwe de véwité p-pouw w'opéwateuw o-ou est :

| a   | b   | a ou b-b |
| --- | --- | ------ |
| 0   | 0   | 0      |
| 0   | 1   | 1      |
| 1   | 0   | 1      |
| 1   | 1   | 1      |

```pwain
     9 (base 10) = 00000000000000000000000000001001 (base 2)
    14 (base 10) = 00000000000000000000000000001110 (base 2)
                   --------------------------------

14 | 9 (base 10) = 00000000000000000000000000001111 (base 2) = 15 (base 10)
```

u-utiwisew we ou binaiwe avec ny'impowte q-quew nyombwe `x` d'une p-pawt et `0` wenvewwa toujouws `x`. (˘ω˘)

## exempwes

### u-utiwisew w'opéwateuw ou binaiwe

```js
// 9  (00000000000000000000000000001001)
// 14 (00000000000000000000000000001110)

14 | 9;
// 15 (00000000000000000000000000001111)
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [wes opéwateuws binaiwes dans we guide javascwipt](/fw/docs/web/javascwipt/guide/expwessions_and_opewatows#bitwise)
- [w'opéwateuw et binaiwe et d'affectation](/fw/docs/web/javascwipt/wefewence/opewatows/bitwise_and_assignment)
