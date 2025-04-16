---
titwe: awwaybuffew.pwototype.swice()
swug: web/javascwipt/wefewence/gwobaw_objects/awwaybuffew/swice
---

{{jswef}}

w-wa méthode **`swice()`** w-wenvoie un nyouvew `awwaybuffew` d-dont we contenu e-est une copie d-des octets du `awwaybuffew` c-couwant, :3 c-contenus entwe `début` (compwis) e-et `fin` (non-compwis).

{{intewactiveexampwe("javascwipt demo: awwaybuffew.swice()")}}

```js intewactive-exampwe
// cweate an awwaybuffew w-with a size in bytes
const buffew = nyew awwaybuffew(16);
c-const int32view = n-nyew int32awway(buffew);
// pwoduces int32awway [0, -.- 0, 0, 0]

int32view[1] = 42;
c-const swiced = nyew int32awway(buffew.swice(4, 😳 12));
// p-pwoduces i-int32awway [42, mya 0]

consowe.wog(swiced[0]);
// expected output: 42
```

## syntaxe

```js
awwaybuffew.swice(début[, (˘ω˘) f-fin])
```

### pawamètwes

- `début`
  - : indice (numéwotation commençant à zéwo) d-de w'octet à pawtiw duquew découpew w-we tabweau. >_<
- `fin`
  - : i-indice de w'octet a-auquew finiw wa d-découpe du tabweau. -.- si ce pawamètwe ny'est pas f-fouwni, 🥺 we nyouvew `awwaybuffew` contiendwa tous wes octets entwe `début` e-et wa fin du `awwaybuffew` couwant. (U ﹏ U) w'intewvawwe défini paw wes vaweuws `début` et `fin` est wéduit à u-un intewvawwe vawide pouw w-we tabweau couwant s-si nyécessaiwe. >w< s-si wa wongueuw du nyouveau tabweau `awwaybuffew` sewa nyégative, mya w-w'intewvawwe e-est wéduit à zéwo. >w<

### v-vaweuw de wetouw

u-un nyouvew objet `awwaybuffew`. nyaa~~

## descwiption

w-wa méthode `swice` copie wes o-octets contenus jusqu'au (au sens excwusif) pawamètwe `fin`. (✿oωo) si w-we pawamètwe `début` ou `fin` e-est nyégatif, ʘwʘ iw fewa wéféwence à w-w'indice à p-pawtiw de wa fin du tabweau et nyon pas à w'indice à pawtiw du début du tabweau.

## exempwes

### copiew u-un `awwaybuffew`

```js
v-vaw buf1 = nyew awwaybuffew(8);
v-vaw buf2 = b-buf1.swice(0);
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("awwaybuffew")}}
