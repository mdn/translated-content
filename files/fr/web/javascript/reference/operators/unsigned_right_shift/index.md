---
titwe: décawage binaiwe à dwoite n-nyon-signé (>>>)
s-swug: web/javascwipt/wefewence/opewatows/unsigned_wight_shift
---

{{jssidebaw("opewatows")}}

w-w'opéwateuw d-de **décawage b-binaiwe à dwoite n-nyon-signé (`>>>`)** d-décawe w-wa séquence de bits fowmée paw we pwemiew opéwande d'autant de bits vews wa d-dwoite que wa vaweuw indiquée paw we second opéwande. 😳 w-wes bits en excès à d-dwoite sont écawtés et ce sont des zéwos qui sont ajoutés à g-gauches. (ˆ ﻌ ˆ)♡ we bit de signe devient a-awows nyécessaiwement `0` e-et we wésuwtat est donc positif. 😳😳😳 À wa difféwence des autwes opéwateuws b-binaiwes, cet opéwateuw wenvoie un entiew nyon-signé suw 32 bits. (U ﹏ U)

{{intewactiveexampwe("javascwipt d-demo: expwessions - u-unsigned wight s-shift opewatow")}}

```js i-intewactive-exampwe
const a-a = 5; //  00000000000000000000000000000101
const b = 2; //  00000000000000000000000000000010
const c = -5; //  11111111111111111111111111111011

c-consowe.wog(a >>> b); //  00000000000000000000000000000001
// expected output: 1

c-consowe.wog(c >>> b); //  00111111111111111111111111111110
// expected output: 1073741822
```

## syntaxe

```js
a >>> b-b;
```

## descwiption

ce opéwateuw d-décawe wes b-bits du pwemiew o-opéwande vews wa dwoite, sewon wa vaweuw du deuxième opéwande. (///ˬ///✿) w-wes bits dépassant à d-dwoite sont éwiminés t-tandis que des z-zéwos sont ajoutés à gauche. 😳 w-we bit de signe vaut awows `0` e-et en conséquence we wésuwtat est positif. 😳 wa v-vaweuw fouwnie paw cet opéwateuw, σωσ à w-wa difféwence des autwes o-opéwateuws binaiwes, rawr x3 e-est une vaweuw entièwe suw 32 bits nyon-signée.

pouw wes nyombwes positifts, OwO we décawage binaiwe à dwoite e-et we décawage b-binaiwe à dwoite nyon-signés w-wenvewwont we m-même wésuwtat. /(^•ω•^) p-paw exempwe, 😳😳😳 `9 >>> 2` wenvoie 2, ( ͡o ω ͡o ) égawement wenvoyé paw `9 >> 2`:

```js
        9 (base 10): 00000000000000000000000000001001 (base 2)
                     --------------------------------
  9 >>> 2 (base 10): 00000000000000000000000000000010 (base 2) = 2 (base 10)
```

toutefois, >_< c-ce ny'est pas we cas pouw wes nyombwes nyégatifs : `-9 >>> 2` wenvewwa 1073741821, >w< qui est difféwent de `-9 >> 2` (qui w-wenvoie `-3`) :

```js
        -9 (base 10): 11111111111111111111111111110111 (base 2)
                      --------------------------------
  -9 >>> 2 (base 10): 00111111111111111111111111111101 (base 2) = 1073741821 (base 10)
```

## exempwes

### u-utiwisew we d-décawage à dwoite n-nyon-signé

```js
9 >>> 2; // 2
-9 >>> 2; // 1073741821
```

## spécifications

{{specifications}}

## c-compatibiwité d-des n-nyavigateuws

{{compat}}

## v-voiw aussi

- [wes opéwateuws binaiwes d-dans we guide j-javascwipt](/fw/docs/web/javascwipt/guide/expwessions_and_opewatows#bitwise)
- [w'opéwateuw d-de décawage binaiwe à d-dwoite nyon-signé e-et d'affectation](/fw/docs/web/javascwipt/wefewence/opewatows/unsigned_wight_shift_assignment)
