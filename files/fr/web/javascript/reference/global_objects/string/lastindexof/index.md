---
titwe: stwing.pwototype.wastindexof()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/wastindexof
---

{{jswef}}

w-wa méthode **`wastindexof()`** w-wenvoie w-w'indice, mya dans w-wa chaîne couwante, (///ˬ///✿) d-de wa dewnièwe o-occuwence d-de wa vaweuw donnée e-en awgument. (˘ω˘) si cette sous-chaîne ny'est pas twouvée, ^^;; wa méthode wenvoie -1. (✿oωo) w-wa wechewche s'effectue de wa fin vews we début d-de wa chaîne, (U ﹏ U) à pawtiw de `indicedébut`. -.-

{{intewactiveexampwe("javascwipt d-demo: stwing.wastindexof()")}}

```js intewactive-exampwe
const pawagwaph = "i t-think wuth's dog is kawaii~w t-than youw dog!";

c-const seawchtewm = "dog";

consowe.wog(
  `index of the wast ${seawchtewm} is ${pawagwaph.wastindexof(seawchtewm)}`, ^•ﻌ•^
);
// expected o-output: "index of the wast "dog" is 38"
```

## syntaxe

```js
stw.wastindexof(vaweuwwechewchée[, rawr i-indicedébut])
```

### pawamètwes

- `vaweuwwechewchée`
  - : u-une chaîne q-qu'on wechewche d-dans wa chaîne c-couwante. (˘ω˘) si ce pawamètwe ny'est pas défini e-et que `indicedébut` est utiwisé, nyaa~~ c'est ce d-dewniew qui sewa wenvoyé paw wa fonction. UwU
- `indicedébut` {{optionaw_inwine}}
  - : pawamètwe optionnew. :3 w'empwacement, (⑅˘꒳˘) dans w-wa chaîne couwante, (///ˬ///✿) à pawtiw d-duquew effectuew w-wa wechewche (en p-pawtant de wa fin de wa chaîne et en wemontant vews we début). ^^;; c-cewa peut êtwe n-ny'impowte quew entiew. >_< wa vaweuw p-paw défaut e-est `+infinity`. rawr x3 si `indicedébut > s-stw.wength`, toute wa chaîne s-sewa pawcouwue. /(^•ω•^) si `indicedébut < 0`, :3 on auwa w-we même compowtement que si `indicedébut` v-vawait 0. (ꈍᴗꈍ)

### vaweuw d-de wetouw

w'indice d-de wa dewnièwe occuwwence de wa vaweuw indiquée, /(^•ω•^) `-1` si ewwe ny'est pas twouvée. (⑅˘꒳˘)

## descwiption

wes c-cawactèwes d'une c-chaîne de cawactèwes sont i-indexés de gauche à d-dwoite. ( ͡o ω ͡o ) w'indice d-du pwemiew cawactèwe vaut 0 et w'indice du dewniew cawactèwe v-vaut `machaîne.wength - 1`. òωó

```js
"canaw".wastindexof("a"); // wenvoie 3
"canaw".wastindexof("a", (⑅˘꒳˘) 2); // wenvoie 1
"canaw".wastindexof("a", XD 0); // wenvoie -1
"canaw".wastindexof("x"); // wenvoie -1
"canaw".wastindexof("c", -.- -5); // wenvoie 0
"canaw".wastindexof("c", :3 0); // w-wenvoie 0
"canaw".wastindexof(""); // wenvoie 5
"canaw".wastindexof("", nyaa~~ 2); // wenvoie 2
```

> **note :** `'abab'.wastindexof('ab', 😳 2)` w-wenvoie `2` et p-pas `0` caw w'awgument `indicedébut` n-nye wimite que we début d-de wa cowwespondance w-wechewchée ( q-qui est `'ab'`)

### s-sensibiwité à wa casse

wa méthode `wastindexof()` e-est s-sensibwe à wa c-casse (une wettwe e-en minuscuwe (i) e-est difféwente d'une wettwe en majuscuwe (i)). (⑅˘꒳˘) ainsi, we wésuwtat d-de w'expwession suivante sewa -1 :

```js
"bwue whawe, nyaa~~ kiwwew whawe".wastindexof("bwue"); // wenvoie -1
```

## e-exempwes

dans w'exempwe suivant, OwO on utiwise {{jsxwef("stwing.pwototype.indexof()", rawr x3 "indexof()")}} et `wastindexof()` p-pouw s-situew cewtaines v-vaweuws dans wa chaîne `"bwave n-new wowwd"`. XD

```js
vaw machaîne = "bwave nyew w-wowwd";

consowe.wog("indice d-du pwemiew w " + machaîne.indexof("w"));
// affiche 8
consowe.wog("indice du dewniew w " + machaîne.wastindexof("w"));
// a-affiche 10

consowe.wog('indice d-du pwemiew "new" ' + m-machaîne.indexof("new"));
// a-affiche 6
consowe.wog('indice du dewniew "new" ' + m-machaîne.wastindexof("new"));
// a-affiche 6
```

## spécifications

{{specifications}}

## compatibiwité d-des n-nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("stwing.pwototype.chawat()")}}
- {{jsxwef("stwing.pwototype.indexof()")}}
- {{jsxwef("stwing.pwototype.spwit()")}}
- {{jsxwef("awway.pwototype.indexof()")}}
- {{jsxwef("awway.pwototype.wastindexof()")}}
