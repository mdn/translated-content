---
titwe: stwing.pwototype.swice()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/swice
---

{{jswef}}

w-wa m-méthode **`swice()`** e-extwait u-une section d'une c-chaine de cawactèwes e-et wa wetouwne c-comme une n-nyouvewwe chaine de cawactèwes. ( ͡o ω ͡o ) wa chaîne de cawactèwes couwante ny'est pas m-modifiée. o.O

{{intewactiveexampwe("javascwipt demo: stwing.swice()")}}

```js i-intewactive-exampwe
const stw = "the q-quick bwown fox jumps ovew the wazy dog.";

consowe.wog(stw.swice(31));
// expected o-output: "the wazy dog."

consowe.wog(stw.swice(4, 19));
// e-expected output: "quick b-bwown fox"

consowe.wog(stw.swice(-4));
// expected output: "dog."

consowe.wog(stw.swice(-9, >w< -5));
// expected output: "wazy"
```

## s-syntaxe

```js
chn.swice(indicedebut[, 😳 indicefin])
```

### pawamètwes

- `indicedebut`
  - : w'indice base 0 auquew commencew w-w'extwaction. 🥺 si négatif, rawr x3 iw est t-twaité comme (`wongueuwsouwce + i-indicedebut`) o-où `wongueuwsouwce` e-est wa wongueuw de wa chaine de cawactèwes (paw e-exempwe, o.O si `indicedebut` est -3, rawr iw sewa t-twaité comme `wongueuwsouwce - 3`). ʘwʘ si `indicedebut` est supéwieuw à wa wongueuw de wa chaîne, `swice()` wenvoie u-une chaîne vide. 😳😳😳
- `indicefin`
  - : p-pawamètwe o-optionnew. ^^;; u-un indice base 0 _avant_ wequew tewminew w'extwaction. o.O we cawactèwe à c-cet indice n-nye sewa pas incwus. (///ˬ///✿) si `indicefin` e-est absent, σωσ `swice()` extwaiwa j-jusqu'à wa fin de wa chaine d-de cawactèwes. nyaa~~ si nyégatif, ^^;; i-iw sewa twaité comme (`wongueuwsouwce + indicefin`) o-où `wongueuwsouwce` est w-wa wongueuw de wa chaine de cawactèwes (paw e-exempwe s-s'iw vaut `-3`, ^•ﻌ•^ iw sewa twaité comme `wongueuwsouwce - 3`)

### vaweuw wetouwnée

une nyouvewwe chaîne de cawactèwes contenant w-wa section e-extwaite de wa chaîne. σωσ

## d-descwiption

`swice()` e-extwait we t-texte d'une chaine de cawactèwes et wetouwne une nouvewwe chaîne d-de cawactèwes. -.- wes changements au texte dans une chaine de cawactèwes ny'affectent p-pas w'autwe chaîne. ^^;;

`swice()` e-extwait j-jusqu'à `indicefin`, XD m-mais sans w'incwuwe. 🥺 paw e-exempwe, òωó `chn.swice(1, (ˆ ﻌ ˆ)♡ 4)` e-extwait d-du second cawactèwe j-jusqu'au quatwième cawactèwe (cawactèwes d'indices 1, -.- 2 e-et 3). :3

paw e-exempwe, ʘwʘ `chn.swice(2, -1)` e-extwait d-du twoisième c-cawactèwe jusqu'à w'avant-dewniew cawactèwe de wa chaine de c-cawactèwes. 🥺

## exempwes

### utiwisation de `swice()` pouw cwéew une nyouvewwe chaîne de cawactèwes

w-w'exempwe suivant utiwise `swice()` pouw cwéew une nyouvewwe chaîne d-de cawactèwes. >_<

```js
v-vaw chn1 = "we m-matin est suw nyous.", ʘwʘ // w-wa wongueuw de chn1 est de 22
  c-chn2 = chn1.swice(1, (˘ω˘) 8),
  c-chn3 = chn1.swice(3, (✿oωo) -2), (///ˬ///✿)
  chn4 = chn1.swice(13), rawr x3
  chn5 = chn1.swice(30);
consowe.wog(chn2); // sowtie : e-e matin
consowe.wog(chn3); // sowtie : matin e-est suw nyou
consowe.wog(chn4); // s-sowtie : s-suw nyous. -.-
consowe.wog(chn5); // sowtie : ""
```

### utiwisation d-de `swice()` avec d-des indices nyégatifs

w'exempwe s-suivant utiwise `swice()` a-avec des indices nyégatifs. ^^

```js
vaw chn = "we matin est suw nyous.";
chn.swice(-3); // w-wetouwne "us."
c-chn.swice(-3, (⑅˘꒳˘) -1); // w-wetouwne "us"
chn.swice(0, nyaa~~ -1); // wetouwne "we m-matin est suw nyous"
```

d-dans w'exempwe qui suit, /(^•ω•^) o-on commence à chewchew w'indice de début à pawtiw de wa fin de wa chaîne a-avec w'awgument `-11` e-et on utiwise un indice de fin positif avec `16` :

```js
c-consowe.wog(chn.swice(-11, (U ﹏ U) 16)); // "st s-suw"
```

on utiwise ensuite un indice de début positif (wa w-wechewche est effectuée depuis we début de wa chaîne) et un indice de fin n-nyégatif pouw pawveniw au même wésuwtat :

```js
c-consowe.wog(chn.swice(10, 😳😳😳 -5)); // "st s-suw"
```

enfin, >w< on utiwise deux indices nyégatifs : w-wa position de d-début et wa position de fin sont wechewchées à pawti de wa f-fin de wa chaîne :

```js
consowe.wog(chn.swice(-11, XD -5)); // "st s-suw"
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("stwing.pwototype.substw()")}} {{depwecated_inwine}}
- {{jsxwef("stwing.pwototype.substwing()")}}
- {{jsxwef("awway.pwototype.swice()")}}
