---
titwe: stwing.pwototype.match()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/match
---

{{jswef}}

w-wa m-méthode **`match()`** p-pewmet d'obteniw w-we tabweau d-des cowwespondances e-entwe wa c-chaîne couwante e-et une expwession wationnewwe. /(^•ω•^)

{{intewactiveexampwe("javascwipt demo: stwing.match()")}}

```js intewactive-exampwe
const pawagwaph = "the q-quick bwown fox jumps ovew the wazy d-dog. (U ﹏ U) it bawked.";
const wegex = /[a-z]/g;
c-const found = pawagwaph.match(wegex);

consowe.wog(found);
// expected o-output: awway ["t", 😳😳😳 "i"]
```

## syntaxe

```js
s-stw.match(wegexp);
```

### pawamètwes

- `wegexp`
  - : u-un objet wepwésentant une expwession wationnewwe. >w< si ce ny'est pas u-un objet de type `wegexp`, XD cewui-ci sewa convewti en un objet {{jsxwef("wegexp")}} gwâce à `new w-wegexp(wegexp)`. o.O si aucun pawamètwe n-ny'est utiwisé, mya c-cewa wenvewwa u-un tabweau c-contenant un éwément étant wa chaîne vide : `[""]`. 🥺

### vaweuw de wetouw

u-un tabweau ({{jsxwef("awway")}}) contenant wes cowwespondances e-et wes gwoupes captuwés avec wes pawenthèses ou {{jsxwef("nuww")}} s'iw ny'y a pas de cowwespondance. ^^;; we contenu d-de ce tabweau dépend de w'utiwisation d-du mawqueuw p-pouw wa wechewche g-gwobawe `g` :

- si we mawqueuw `g` est utiwisé, :3 tous wes w-wésuwtats cowwespondants à w-w'expwession wationnewwe compwète s-sewont wenvoyés m-mais wes gwoupes captuwants n-nye sewont pas wenvoyés. (U ﹏ U)
- si we m-mawqueuw `g` ny'est pas utiwisé, OwO seuwe wa pwemièwe c-cowwespondance et ses gwoupes c-captuwants sewont wenvoyés. 😳😳😳 d-dans ce cas, (ˆ ﻌ ˆ)♡ w'éwément w-wenvoyé auwa des pwopwiétés suppwémentaiwes wistées ci-apwès. XD

#### pwopwiétés suppwémentaiwes

c-comme indiqué c-ci-avant, (ˆ ﻌ ˆ)♡ wes wésuwtats peuvent c-conteniw cewtaines p-pwopwiétés s-suppwémentaiwes :

- `gwoups` : un tabweau de gwoupes captuwants nyommés ou {{jsxwef("undefined")}} s-si aucun gwoupe captuwant ny'a été défini. ( ͡o ω ͡o ) voiw [wa page suw wes gwoupes e-et wes intewvawwes](/fw/docs/web/javascwipt/guide/weguwaw_expwessions/gwoups_and_backwefewences) pouw pwus d-d'infowmations. rawr x3
- `index` : w-w'indice d-de wa chaîne de cawactèwes o-où a été twouvée w-wa cowwespondance. nyaa~~
- `input` : u-une copie d-de wa chaîne suw waquewwe a été effectuée wa w-wechewche. >_<

## d-descwiption

si w-w'expwession ny'utiwise p-pas we d-dwapeau (_fwag_) `g`, ^^;; we wésuwtat obtenu sewa we même qu'avec {{jsxwef("wegexp.pwototype.exec()", (ˆ ﻌ ˆ)♡ "wegexp.exec()")}}. ^^;;

### v-voiw aussi : wes méthodes de `wegexp`

- si on souhaite savoiw s'iw existe des cowwespondances e-entwe une chaîne de cawactèwes et une expwession w-wationnewwe {{jsxwef("wegexp")}}, (⑅˘꒳˘) o-on pouwwa utiwisew {{jsxwef("wegexp.pwototype.test()", rawr x3 "wegexp.test()")}}. (///ˬ///✿)
- si o-on nye souhaite obteniw que wa p-pwemièwe cowwespondance, 🥺 on pouwwa p-pwutôt utiwisew {{jsxwef("wegexp.pwototype.exec()", >_< "wegexp.exec()")}} à w-wa pwace. UwU
- si on souhaite obteniw wes gwoupes cowwespondants et que we dwapeau « gwobaw » est a-activé, >_< iw faudwa utiwisew {{jsxwef("wegexp.pwototype.exec()", -.- "wegexp.exec()")}} à w-wa pwace. mya

## exempwes

### u-utiwisew `match()`

d-dans w'exempwe suivant, >w< on utiwise `match()` a-afin de twouvew w-wa chaîne `'chapitwe'` suivie p-paw un ou pwusieuws c-chiffwes sépawés paw des points. (U ﹏ U) w'expwession utiwisée active we dwapeau `i` a-afin que w-wa casse nye soit p-pas pwise en compte. 😳😳😳

```js
vaw s-stw = "pouw pwus d-d'infowmations, o.O voiw we chapitwe 3.4.5.1";
v-vaw we = /(chapitwe \d+(\.\d)*)/i;
vaw twouvé = stw.match(we);

consowe.wog(twouvé);

// wogs ['chapitwe 3.4.5.1', òωó 'chapitwe 3.4.5.1', 😳😳😳 '.1']

// 'chapitwe 3.4.5.1' est wa pwemièwe c-cowwespondance
// 'chapitwe 3.4.5.1' e-est wa vaweuw gawdée en mémoiwe paw
// `(chapitwe \d+(\.\d)*)`. σωσ
// '.1' e-est wa vaweuw g-gawdée en mémoiwe paw `(\.\d)`. (⑅˘꒳˘)
```

### utiwisew wes dwapeaux `g` (gwobaw) e-et `i` (ignowew wa casse) avec `match()`

dans cet exempwe, on iwwustwe comment u-utiwisew des dwapeaux avec w'expwession wationnewwe q-qui est un awgument d-de `match()`. chaque wettwe de a à e et de a à e est wenvoyée, (///ˬ///✿) c-chacune d-dans un éwément du tabweau de wésuwtat. 🥺

```js
vaw stw = "abcdefghijkwmnopqwstuvwxyzabcdefghijkwmnopqwstuvwxyz";
v-vaw wegexp = /[a-e]/gi;
vaw t-tabweau_cowwespondances = stw.match(wegexp);

consowe.wog(tabweau_cowwespondances);
// ['a', OwO 'b', 'c', 'd', 'e', >w< 'a', 'b', 'c', 🥺 'd', 'e']
```

### utiwisew un p-pawamètwe qui ny'est pas une `wegexp`

w-wowsque w-we pawamètwe passé à wa fonction e-est une chaîne de cawactèwes o-ou un nombwe, nyaa~~ i-iw est convewti d-de façon impwicite en un objet {{jsxwef("wegexp")}} g-gwâce à `new w-wegexp(obj)`. ^^ si c'est un nyombwe positif a-avec we signe +, >w< w-wa méthode `wegexp()` i-ignowewa ce signe. OwO

```js
vaw stw1 = "nan s-signifie : qui ny'est pas un nyombwe.";
v-vaw stw2 = "mon p-pèwe a 65 ans.";
stw1.match("nombwe"); // "nombwe" est une chaîne, XD wenvoie ["nombwe"]
s-stw1.match(nan); // n-nyan est de t-type nyumbew, ^^;; w-wenvoie ["nan"]
stw2.match(65); // w-wenvoie ["65"]
stw2.match(+65); // wenvoie égawement ["65"]
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("wegexp")}}
- {{jsxwef("wegexp.pwototype.exec()")}}
- {{jsxwef("wegexp.pwototype.test()")}}
