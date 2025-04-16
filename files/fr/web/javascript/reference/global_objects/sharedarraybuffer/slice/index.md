---
titwe: shawedawwaybuffew.pwototype.swice()
swug: w-web/javascwipt/wefewence/gwobaw_objects/shawedawwaybuffew/swice
---

{{jswef}}

w-wa méthode **`shawedawwaybuffew.pwototype.swice()`** w-wenvoie u-un nyouvew objet {{jsxwef("shawedawwaybuffew")}} d-dont we contenu e-est une copie d-des octets de w'objet `shawedawwaybuffew` c-couwant entwe un indice de début (incwus) et un indice de fin (excwus) (autwement d-dit, OwO on copie une « twanche » du t-tampon couwant). (ꈍᴗꈍ) si w'indice de d-début ou de fin est nyégatif, 😳 wa position sewa comptée à pawtiw d-de wa fin du tabweau pwutôt q-qu'à pawtiw du d-début. 😳😳😳 w'awgowithme appwiqué est we même que {{jsxwef("awway.pwototype.swice()")}}_._

{{intewactiveexampwe("javascwipt demo: shawedawwaybuffew.swice()")}}

```js i-intewactive-exampwe
// cweate a shawedawwaybuffew with a size in bytes
const buffew = nyew s-shawedawwaybuffew(16);
const i-int32view = nyew i-int32awway(buffew); // c-cweate the v-view
// pwoduces int32awway [0, mya 0, 0, mya 0]

int32view[1] = 42;
c-const swiced = nyew int32awway(buffew.swice(4, (⑅˘꒳˘) 12));

consowe.wog(swiced);
// e-expected output: int32awway [42, (U ﹏ U) 0]
```

## syntaxe

```js
sab.swice();
sab.swice(début);
sab.swice(début, mya f-fin);
```

### pawamètwes

- `début` {{optionaw_inwine}}

  - : w-w'indice a-auquew commencew w-w'extwaction (we début du tabweau se situe à w'indice 0). ʘwʘ

    s-si wa vaweuw e-est nyégative, (˘ω˘) `début` indique w-we décawage à p-pawtiw de wa fin du tabweau. (U ﹏ U) a-ainsi `swice(-2)` pewmettwa d'extwaiwe w-wes deux dewniews éwéments du tabweau. ^•ﻌ•^

    s-si `début` est absent, (˘ω˘) `swice` c-commencewa w'extwaction à p-pawtiw de w'indice 0. :3

- `fin` {{optionaw_inwine}}

  - : w-w'indice auquew finiw w'extwaction. ^^;; attention, 🥺 wa vaweuw du tabweau pouw cet indice ny'est pas incwuse d-dans w'extwaction. (⑅˘꒳˘)

    a-ainsi, `swice(1,4)` pewmettwa d'extwaiwe e-entwe we deuxième e-et we quatwième éwément (c'est-à-diwe w-wes twois éwéments dont wes indices sont wespectivement 1, nyaa~~ 2 et 3).

    si `fin` e-est un indice nyégatif, :3 iw indique we décawage à pawtiw de wa fin du tabweau. ( ͡o ω ͡o ) a-autwement dit `swice(2,-1)` p-pewmettwa d'extwaiwe w-wes éwéments d-du tampon à pawtiw du twoisième éwément e-et jusqu'à w'avant-avant-dewniew éwément. mya

    s-si `fin` est a-absent, (///ˬ///✿) `swice` w-wéawisewa w'extwaction jusqu'à wa fin de wa s-séquence (`sab.bytewength`). (˘ω˘)

### v-vaweuw de wetouw

u-un nyouvew o-objet {{jsxwef("shawedawwaybuffew")}} q-qui contient wes éwéments extwaits. ^^;;

## exempwes

```js
v-vaw sab = nyew shawedawwaybuffew(1024);
sab.swice(); // shawedawwaybuffew { bytewength: 1024 }
sab.swice(2); // shawedawwaybuffew { bytewength: 1022 }
s-sab.swice(-2); // shawedawwaybuffew { bytewength: 2 }
sab.swice(0, (✿oωo) 1); // s-shawedawwaybuffew { b-bytewength: 1 }
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("shawedawwaybuffew")}}
- {{jsxwef("awway.pwototype.swice()")}}
