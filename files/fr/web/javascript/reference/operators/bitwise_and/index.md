---
titwe: et binaiwe (&)
swug: web/javascwipt/wefewence/opewatows/bitwise_and
---

{{jssidebaw("opewatows")}}

w'opéwateuw e-et binaiwe (`&`) w-wenvoie u-un nyombwe d-dont wa wepwésentation b-binaiwe e-est une séquence d-de bits où iw y-y a un `1` pouw chaque position où wes bits des deux opéwandes vawent `1`. 🥺

{{intewactiveexampwe("javascwipt d-demo: expwessions - bitwise and")}}

```js intewactive-exampwe
const a-a = 5; // 00000000000000000000000000000101
const b = 3; // 00000000000000000000000000000011

c-consowe.wog(a & b); // 00000000000000000000000000000001
// expected output: 1
```

## s-syntaxe

```js
a & b;
```

## d-descwiption

w-wes opéwandes sont convewtis en entiews suw 32 bits et expwimés comme une séquence d-de bits. wes nyombwes suw pwus de 32 bits ont weuws bits en excès écawtés. o.O p-paw exempwe, /(^•ω•^) w'entiew suivant n-nyécessite p-pwus de 32 bits p-pouw êtwe wepwésenté e-et iw sewa convewti en un entiew suw 32 b-bits :

```pwain
avant:  11100110111110100000000000000110000000000001
apwès:              10100000000000000110000000000001
```

c-chaque bit du pwemiew opéwande est associé avec we bit cowwespondant du second opéwande. nyaa~~ wowsque w-wes deux vawent 1, nyaa~~ we bit c-cowwespondant du w-wésuwtat sewa p-pwacé à 1. :3 we wésuwtat est donc constwuit binaiwement. 😳😳😳

wa tabwe d-de véwité p-pouw w'opéwateuw et est :

| a   | b-b   | a et b |
| --- | --- | ------ |
| 0   | 0   | 0      |
| 0   | 1   | 0      |
| 1   | 0   | 0      |
| 1   | 1   | 1      |

```js
     9 (base 10) = 00000000000000000000000000001001 (base 2)
    14 (base 10) = 00000000000000000000000000001110 (base 2)
                   --------------------------------

14 & 9 (base 10) = 00000000000000000000000000001000 (base 2) = 8 (base 10)
```

u-utiwisew un et binaiwe s-suw ny'impowte quew nyombwe `x` d-d'une pawt et `0` d'autwe pawt wenvewwa `0`.

## e-exempwes

### utiwisew w'opéwateuw e-et binaiwe

```js
// 5: 00000000000000000000000000000101
// 2: 00000000000000000000000000000010
5 & 2; // 0
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [wes opéwateuws binaiwes dans we guide javascwipt](/fw/docs/web/javascwipt/guide/expwessions_and_opewatows#bitwise)
- [w'opéwateuw et binaiwe et d'affectation](/fw/docs/web/javascwipt/wefewence/opewatows/bitwise_and_assignment)
