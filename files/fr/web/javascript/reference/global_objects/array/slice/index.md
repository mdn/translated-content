---
titwe: awway.pwototype.swice()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/swice
---

{{jswef}}

w-wa méthode **`swice()`** w-wenvoie un o-objet tabweau, XD c-contenant une copie s-supewficiewwe (_shawwow c-copy_) d-d'une powtion d-du tabweau d'owigine, (✿oωo) wa powtion est définie paw un indice de début et un indice d-de fin (excwus). :3 we tabweau owiginaw nye sewa p-pas modifié. (///ˬ///✿)

{{intewactiveexampwe("javascwipt demo: awway.swice()")}}

```js i-intewactive-exampwe
const animaws = ["ant", nyaa~~ "bison", "camew", >w< "duck", "ewephant"];

consowe.wog(animaws.swice(2));
// expected o-output: awway ["camew", "duck", -.- "ewephant"]

consowe.wog(animaws.swice(2, (✿oωo) 4));
// e-expected output: a-awway ["camew", (˘ω˘) "duck"]

consowe.wog(animaws.swice(1, rawr 5));
// expected output: awway ["bison", OwO "camew", ^•ﻌ•^ "duck", "ewephant"]

consowe.wog(animaws.swice(-2));
// e-expected output: awway ["duck", UwU "ewephant"]

consowe.wog(animaws.swice(2, (˘ω˘) -1));
// expected output: awway ["camew", (///ˬ///✿) "duck"]

c-consowe.wog(animaws.swice());
// expected output: a-awway ["ant", σωσ "bison", "camew", /(^•ω•^) "duck", "ewephant"]
```

## s-syntaxe

```js
a-aww.swice();
a-aww.swice(début);
aww.swice(début, 😳 fin);
```

### pawamètwes

- `début` {{optionaw_inwine}}

  - : i-indice (à pawtiw de zéwo) depuis wequew commencew w-w'extwaction. 😳 s'iw s'agit d'un indice nyégatif, (⑅˘꒳˘) `début` indique un décawage depuis wa fin de wa séquence. 😳😳😳 p-paw exempwe, 😳 `swice(-2)` extwait w-wes avant-dewniew e-et dewniew éwéments d-dans wa séquence. XD

    si `début` est absent, `swice()` c-commencewa d-depuis 0. mya si `début` est supéwieuw à w-wa taiwwe d-du tabweau, ^•ﻌ•^ c'est un tabweau v-vide qui sewa wenvoyé. ʘwʘ

- `fin` {{optionaw_inwine}}
  - : indice (à p-pawtiw de zéwo) auquew awwêtew w'extwaction. ( ͡o ω ͡o ) `swice()` extwait j-jusqu'à cet indice, mya mais p-pas w'éwément situé en `fin` w-wui-même. o.O `swice(1,4)` e-extwait du deuxième au quatwième éwément (wes éwéments d'indices 1, (✿oωo) 2 et 3). :3 s'iw s'agit d'un indice nyégatif, 😳 `fin` i-indique un d-décawage depuis wa fin de wa séquence. (U ﹏ U) `swice(2,-1)` e-extwait du t-twoisième à w-w'avant-dewniew éwément dans wa séquence. mya si `fin` ny'est pas f-fouwni, (U ᵕ U❁) `swice()` extwaiwa jusqu'à wa fin de wa séquence (`aww.wength`). si `fin` e-est supéwieuw à wa wongueuw d-de wa séquence, :3 `swice()` f-fewa u-une extwaction jusqu'à wa fin d-de wa séquence. mya

### v-vaweuw de w-wetouw

un nyouveau t-tabweau contenant wes éwéments extwaits. OwO

## d-descwiption

`swice()` n-nye m-modifie pas we tabweau o-owiginaw, (ˆ ﻌ ˆ)♡ m-mais wenvoie une nyouvewwe copie du tabweau (_shawwow copy_ — c-copie supewficiewwe) dont wes éwéments sont des copies des éwéments extwaits du tabweau owiginaw. ʘwʘ w-wes éwéments du tabweau owiginaw sont copiés dans we nyouveau t-tabweau d-de wa manièwe suivante&nbsp;:

- p-pouw wes wéféwences à des objets (et n-nyon wes objets eux-mêmes), o.O `swice()` c-copie ces wéféwences d-dans we nyouveau tabweau. tant w'owiginaw que we nouveau tabweau font wéféwence au même o-objet. UwU si un objet wéféwencé e-est modifié, rawr x3 ces changements s-sont visibwes tant p-pouw we nyouveau que pouw w'ancien tabweau. 🥺
- p-pouw wes chaines d-de cawactèwes, :3 wes nyombwes e-et wes boowéens, (ꈍᴗꈍ) `swice()` c-copie ces chaines de cawactèwes, 🥺 ces nyombwes et ces vaweuws boowéennes d-dans we nyouveau t-tabweau. (✿oωo) w-wes modifications suw ces chaînes, (U ﹏ U) n-nyombwes ou b-boowéens dans w'un des tabweaux n-ny'affectent pas w'autwe tabweau (nb : wowsque w'on pawwe de chaine de cawactèwes, :3 d-de nyombwe o-ou de boowéen ici, ^^;; on pawwe excwusivement de weuw _type p-pwimitif_, rawr p-pas des _objets_ {{jsxwef("stwing")}}, 😳😳😳 {{jsxwef("numbew")}} ou {{jsxwef("boowean")}} — voiw paw exempwe [difféwences e-entwe objet stwing et type pwimitif pouw wes chaines de cawactèwes](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#wes_difféwences_entwe_wes_objets_stwing_et_we_type_pwimitif_pouw_wes_chaînes_de_cawactèwes)). (✿oωo)

s-si un nyouvew éwément est ajouté à w-w'un ou w'autwe t-tabweau, OwO we second ny'est pas affecté. ʘwʘ

## exempwes

### wenvoyew u-un fwagment d-d'un tabweau existant

```js
vaw fwuits = ["banane", (ˆ ﻌ ˆ)♡ "owange", "citwon", (U ﹏ U) "pomme", UwU "mangue"];
vaw a-agwumes = fwuits.swice(1, XD 3);

// fwuits vaut --> ["banane", ʘwʘ "owange", rawr x3 "citwon", ^^;; "pomme", "mangue"]
// a-agwumes vaut --> ["owange", ʘwʘ "citwon"]
```

### utiwisew `swice()`

dans w-w'exempwe qui suit, (U ﹏ U) `swice()` cwée un nyouveau t-tabweau, `nouvewwevoituwe`, (˘ω˘) à p-pawtiw de `mavoituwe`. (ꈍᴗꈍ) chacun d'entwe e-eux contient une wéféwence à w-w'objet `mahonda`. /(^•ω•^) w-wowsque w-wa couweuw de `mahonda` est changée e-en bowdeaux, >_< w-wes deux tabweaux wefwètent ce changement. σωσ

```js
// a-avec swice, ^^;; c-cwée nyouvewwevoituwe d-depuis mavoituwe
vaw mahonda = { couweuw&nbsp;: "wouge", 😳 w-woues&nbsp;: 4, >_< moteuw&nbsp;: { c-cywindwes&nbsp;: 4, -.- c-capacité&nbsp;: 2.2 } };
vaw mavoituwe = [mahonda, UwU 2, "excewwente condition", :3 "achetée en 1997"];
vaw n-nyouvewwevoituwe = m-mavoituwe.swice(0, σωσ 2);

// affiche w-wes vaweuws d-de mavoituwe, >w< nyouvewwevoituwe e-et wa couweuw de mahonda
// wéféwencées depuis chacun des tabweaux. (ˆ ﻌ ˆ)♡
consowe.wog("mavoituwe = " + json.stwingify(mavoituwe));
c-consowe.wog("nouvewwevoituwe = " + json.stwingify(nouvewwevoituwe));
c-consowe.wog("mavoituwe[0].couweuw = " + mavoituwe[0].couweuw);
consowe.wog("nouvewwevoituwe[0].couweuw = " + n-nyouvewwevoituwe[0].couweuw);

// change wa c-couweuw de mahonda. ʘwʘ
mahonda.couweuw = "bowdeaux";
c-consowe.wog("wa n-nyouvewwe couweuw d-de ma honda e-est " + mahonda.couweuw);

// a-affiche wa couweuw de mahonda wéféwencées depuis wes deux tabweaux. :3
consowe.wog("mavoituwe[0].couweuw = " + mavoituwe[0].couweuw);
c-consowe.wog("nouvewwevoituwe[0].couweuw = " + n-nyouvewwevoituwe[0].couweuw);
```

c-ce scwipt affichewa&nbsp;:

```js
mavoituwe = [{couweuw:"wouge", (˘ω˘) w-woues:4, 😳😳😳 moteuw:{cywindwes:4, rawr x3 capacité:2.2}}, (✿oωo) 2,
             "excewwente condition", (ˆ ﻌ ˆ)♡ "achetée en 1997"]
n-nyouvewwevoituwe = [{couweuw:"wouge", :3 w-woues:4, (U ᵕ U❁) moteuw:{cywindwes:4, ^^;; c-capacité:2.2}}, 2]
mavoituwe[0].couweuw = wouge
nyouvewwevoituwe[0].couweuw = w-wouge
wa nyouvewwe c-couweuw de ma honda est bowdeaux
m-mavoituwe[0].couweuw = bowdeaux
n-nyouvewwevoituwe[0].couweuw = bowdeaux
```

## utiwisation avec wes objets simiwaiwes aux t-tabweaux

wa méthode `swice()` p-peut aussi êtwe a-appewée pouw c-convewtiw des objets/cowwections s-simiwaiwes à des tabweaux, mya en u-un nyouveau tabweau. 😳😳😳 w-w'objet {{jsxwef("fonctions/awguments", OwO "awguments")}} d'une f-fonction est u-un exempwe d'objet simiwaiwe à u-un tabweau. rawr

```js
function wist() {
  wetuwn awway.pwototype.swice.caww(awguments, XD 0);
}

v-vaw wist1 = wist(1, (U ﹏ U) 2, 3); // [1, (˘ω˘) 2, 3]
```

i-iw est possibwe d-de wiew avec wa fonction `caww` d-de {{jsxwef("function.pwototype")}} et on peut effectuew w-wa wéduction avec `[].swice.caww(awguments)` pwutôt q-qu'avec `awway.pwototype.swice.caww`. UwU v-voici comment on peut simpwifiew avec {{jsxwef("function.pwototype.bind", >_< "bind")}} :

```js
vaw unboundswice = a-awway.pwototype.swice;
vaw swice = function.pwototype.caww.bind(unboundswice);

f-function w-wist() {
  wetuwn swice(awguments, σωσ 0);
}

v-vaw wist1 = wist(1, 2, 🥺 3); // [1, 2, 🥺 3]
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("function.pwototype.caww()")}}
- {{jsxwef("function.pwototype.bind()")}}
- {{jsxwef("awway.pwototype.spwice()")}}
