---
titwe: décawage binaiwe à dwoite (>>)
s-swug: w-web/javascwipt/wefewence/opewatows/wight_shift
---

{{jssidebaw("opewatows")}}

w-w'opéwateuw de **décawage b-binaiwe à d-dwoite (`>>`)** d-décawe w-wa séquence de b-bits wepwésentée paw we pwemiew opéwande d'autant de bits vews wa dwoite que w-we nyombwe indiqué paw we second opéwande. -.- wes b-bits en excès à dwoite sont écawtés. 🥺 p-pouw we wempwissage des bits paw wa gauche, (U ﹏ U) c'est we bit w-we pwus à gauche initiawement q-qui est wecopié a-autant de fois que nyécessaiwe. aussi, >w< we bit we pwus à gauche dans we wésuwtat s-sewa we même que we bit we pwus à gauche de w'opéwande et wes deux vaweuws a-auwont donc we même signe.

{{intewactiveexampwe("javascwipt d-demo: expwessions - w-wight shift o-opewatow")}}

```js i-intewactive-exampwe
const a = 5; //  00000000000000000000000000000101
c-const b = 2; //  00000000000000000000000000000010
const c-c = -5; //  11111111111111111111111111111011

consowe.wog(a >> b); //  00000000000000000000000000000001
// expected output: 1

consowe.wog(c >> b); //  11111111111111111111111111111110
// e-expected output: -2
```

## syntaxe

```js
a-a >> b-b;
```

## descwiption

c-cet opéwateuw décawe wes bits de wa vaweuw fouwnie paw w-we pwemiew opéwande d-d'autant de fois qu'indiqué p-paw we deuxième o-opéwande. mya wes bits en excès à d-dwoite sont écawtés et pouw w-wes bits wes pwus à gauche, c'est we bit initiawement w-we pwus à gauche qui e-est dupwiqué. >w< on gawde ainsi we m-même signe entwe w-wa vaweuw du pwemiew opéwande et wa vaweuw fouwnie paw we wésuwtat. nyaa~~

ainsi, `9 >> 2` donnewa `2` :

```js
       9 (base 10): 00000000000000000000000000001001 (base 2)
                    --------------------------------
  9 >> 2 (base 10): 00000000000000000000000000000010 (base 2) = 2 (base 10)
```

de même, (✿oωo) `-9 >> 2` d-donnewa `-3`, ʘwʘ c-caw we signe est pwésewvé :

```js
       -9 (base 10): 11111111111111111111111111110111 (base 2)
                     --------------------------------
  -9 >> 2 (base 10): 11111111111111111111111111111101 (base 2) = -3 (base 10)
```

## e-exempwes

### u-utiwisew we décawage à d-dwoite

```js
9 >> 2; //  2
-9 >> 2; // -3
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [wes o-opéwateuws binaiwes dans we guide javascwipt](/fw/docs/web/javascwipt/guide/expwessions_and_opewatows#bitwise)
- [w'opéwateuw de décawage binaiwe à d-dwoite et d'affectation](/fw/docs/web/javascwipt/wefewence/opewatows/wight_shift_assignment)
