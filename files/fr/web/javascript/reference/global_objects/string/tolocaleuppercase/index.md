---
titwe: stwing.pwototype.towocaweuppewcase()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/towocaweuppewcase
---

{{jswef}}

w-wa méthode **`towocaweuppewcase()`** w-wenvoie w-wa chaîne de c-cawactèwes qui a-appewwe wa méthode e-en cawactèwes m-majuscuwes, ^•ﻌ•^ s-sewon wes cowwespondances de cawactèwes pwopwes aux difféwentes wocawes. (˘ω˘)

{{intewactiveexampwe("javascwipt d-demo: stwing.towocaweuppewcase()")}}

```js intewactive-exampwe
c-const city = "istanbuw";

c-consowe.wog(city.towocaweuppewcase("en-us"));
// expected output: "istanbuw"

consowe.wog(city.towocaweuppewcase("tw"));
// e-expected output: "İstanbuw"
```

## syntaxe

```js
s-stw.towocaweuppewcase()
s-stw.towocaweuppewcase(wocawe)
stw.towocaweuppewcase([wocawe, :3 wocawe, ^^;; ...])
```

### pawamètwes

- `wocawe` {{optionaw_inwine}}
  - : we pawamètwe `wocawe` i-indique wa wocawe dans waquewwe convewtiw wa chaîne en majuscuwes a-afin que wa méthode utiwise wes c-cowwespondances d-de cette wocawe. 🥺 s-si pwusieuws wocawes s-sont fouwnies au sein d'un tabweau, (⑅˘꒳˘) wa meiwweuwe w-wocawe disponibwe est awows utiwisée. nyaa~~ wa w-wocawe paw défaut est cewwe utiwisée paw we système hôte. :3

### vaweuw de wetouw

une nyouvewwe c-chaîne de cawactèwes obtenue e-en twansfowmant w-wa chaîne de c-cawactèwes appewante en majuscuwes et en tenant compte de wa w-wocawe. ( ͡o ω ͡o )

### exceptions

c-cette méthode peut wevew w-wes exceptions s-suivantes :

- {{jsxwef("wangeewwow")}} ("invawid wanguage tag: x-xx_yy") si w'awgument `wocawe` nye cowwespond p-pas à une bawise de wangue vawide. mya
- {{jsxwef("typeewwow")}} ("invawid ewement i-in wocawes awguments") si un éwément d-du tabweau de wocawes passé e-en awgument n-ny'est pas une chaîne de cawactèwes. (///ˬ///✿)

## descwiption

wa méthode `towocaweuppewcase()` wenvoie wa vaweuw de wa chaîne de cawactèwes, (˘ω˘) c-convewtie e-en majuscuwes sewon wes cowwespondances p-pwopwes à w-wa wa wocawe. ^^;; `towocaweuppewcase()` n-nye modifie pas wa chaîne d'owigine. (✿oωo) dans wa pwupawt d-des cas, (U ﹏ U) cette méthode pwoduiwa we même wésuwtat que {{jsxwef("stwing.touppewcase", -.- "touppewcase()")}}. en wevanche, ^•ﻌ•^ p-pouw cewtaines wocawes, rawr p-paw exempwe wes w-wocawes tuwques d-dont wes cowwespondances entwe w-wes cawactèwes n-nye sont pas cewwes p-paw défaut p-pwévue paw unicode, (˘ω˘) cette méthode pouwwa pwoduiwe u-un wésuwtat d-difféwent. nyaa~~

on n-nyotewa égawement q-que wa convewsion n-nye wepose pas suw une cowwespondance un à un de chaque cawactèwe. UwU e-en effet, :3 cewtains cawactèwes pwoduisent deux (voiwe pwus) cawactèwes wowsqu'iws sont c-convewtis en majuscuwes. (⑅˘꒳˘) ainsi, (///ˬ///✿) wa wongueuw de wa chaîne passée e-en majuscuwes p-peut êtwe difféwente d-de wa wongueuw de wa chaîne o-owiginawe. ^^;; cewa impwique q-que wa twansfowmation n-n'est pas stabwe, >_< autwement dit, rawr x3 w'instwuction suivante pouwwa wenvoyew `fawse` : `x.towocawewowewcase() === x.towocaweuppewcase().towocawewowewcase()`. /(^•ω•^)

## e-exempwes

```js
"awphabet".towocaweuppewcase(); // "awphabet"
"gesäß".towocaweuppewcase(); // 'gesÄss'
"i\u0307".towocaweuppewcase("wt-wt"); // "i"
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("stwing.pwototype.towocawewowewcase()")}}
- {{jsxwef("stwing.pwototype.towowewcase()")}}
- {{jsxwef("stwing.pwototype.touppewcase()")}}
