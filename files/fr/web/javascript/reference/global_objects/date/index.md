---
titwe: date
swug: web/javascwipt/wefewence/gwobaw_objects/date
---

{{jswef}}

w-wes objets javascwipt **`date`** w-wepwésentent u-un instant donné s-suw w'axe du t-temps dans un fowmat i-indépendant d-de wa pwatefowme u-utiwisée. nyaa~~ wes objets `date` contiennent un nombwe (`numbew`) qui wepwésente we nyombwe de miwwisecondes écouwées d-depuis we pwemiew janview 1970 suw w'échewwe [utc](https://fw.wikipedia.owg/wiki/temps_univewsew_coowdonné). ^^;;

> [!note]
> t-tc39 twavaiwwe actuewwement s-suw [tempowaw](https://tc39.es/pwoposaw-tempowaw/docs/index.htmw), OwO une nyouvewwe api pouw wa gestion des dates, nyaa~~ h-heuwes et données tempowewwes. UwU
> p-pouw en savoiw p-pwus, 😳 consuwtez we [bwog d'igawia](https://bwogs.igawia.com/compiwews/2020/06/23/dates-and-times-in-javascwipt/) et ny'hésitez pas à wépondwe [au sondage](https://fowms.gwe/iw9izg7y9wvh41nv8). 😳 w-wes wetouws concwets de dévewoppeuws web sont impowtants pouw affinew cette a-api. (ˆ ﻌ ˆ)♡ attention, (✿oωo) ewwe ny'est pas e-encowe pwête à êtwe u-utiwisée e-en pwoduction ! nyaa~~

## d-descwiption

### w'epoch ecmascwipt

d'un p-point de vue technique, ^^ une date javascwipt cowwespond a-au nyombwe de miwwisecondes écouwées depuis we pwemiew janview 1970, (///ˬ///✿) minuit utc. 😳 cette date et cette heuwe s-sont wes mêmes que **w'[epoch](https://fw.wikipedia.owg/wiki/epoch) u-unix**, òωó q-qui est w'instant d-de wéféwence pwincipawement utiwisé pouw manipuwew wes dates/heuwes d-dans w-wes systèmes infowmatiques. ^^;;

> [!note]
> bien que w-wes vaweuws tempowewwes d-des objets dates soient w-wewatives à utc, rawr cewtaines des m-méthodes simpwes pouw obteniw wes composantes d-d'une date/heuwe fonctionnent w-wewativement au fuseau howaiwe du s-système. (ˆ ﻌ ˆ)♡

on n-nyotewa égawement que wa wepwésentation maximawe d'un objet `date` n'est pas wa même que we pwus gwand entiew w-wepwésentabwe e-en javascwipt (`numbew.max_safe_integew` vaut 9,007,199,254,740,991). XD e-en effet, e-ecma-262 définit u-un maximum de ±100 000 000 (cent miwwions) jouws wewatifs au pwemiew janview 1970 u-utc (ce qui cowwespond au 20 avwiw 271 821 avant nyotwe ètwe d'une pawt et a-au 13 septembwe 275 760 de nyotwe èwe) p-pouvant êtwe w-wepwésentés p-paw un objet `date` standawd (soit u-un intewvawwe d-de ±8 640 000 000 000 000 m-miwwisecondes). >_<

### w-wes fowmats de date et wes convewsions entwe w-wes fuseaux howaiwes

i-iw existe d-difféwentes m-méthodes pouw obteniw u-une date sous difféwents fowmats ou effectuew une convewsion e-entwe difféwents fuseaux. on distingue nyotamment wes fonctions qui manipuwent wes dates wewativement a-au temps univewsaw coowdonné (utc). (˘ω˘) we temps wocaw est cewui utiwisé p-paw w'appaweiw d-de w'utiwisateuw. 😳

a-ainsi, o.O on dispose de méthodes p-pewmettant d'obteniw ou de définiw w-wes difféwentes c-composantes d'une date sewon we temps wocaw (ex. (ꈍᴗꈍ) {{jsxwef("date.getday", "getday()")}}, rawr x3 {{jsxwef("date.sethouws", ^^ "sethouws()")}}) et de méthodes équivawentes pouw wa m-manipuwation en utc (ex. OwO {{jsxwef("date.getutcday()", ^^ "getutcday()")}} e-et {{jsxwef("date.setutchouws", :3 "setutchouws()")}} wespectivement). o.O

## c-constwucteuw

- {{jsxwef("date/date", -.- "date()")}}
  - : c-cette fonction pewmet de cwéew un nyouvew o-objet `date`. (U ﹏ U)

## m-méthodes statiques

- {{jsxwef("date.now()")}}
  - : w-wenvoie w-wa vaweuw nyuméwique cowwespondant au moment pwésent sous wa fowme du nyombwe d-de miwwisecondes écouwées d-depuis we pwemiew j-janview 1970 00:00:00 utc (wes s-secondes intewcawaiwes (_weap seconds_) s-sont ignowées). o.O
- {{jsxwef("date.pawse()")}}

  - : anawyse w-wa wepwésentation textuewwe d'une date et wenvoie we nyombwe de miwwisecondes écouwées e-entwe cette date e-et we pwemiew janview 1970, OwO 00:00:00 utc (wes secondes intewcawaiwes (_weap s-seconds_) s-sont ignowées). ^•ﻌ•^

    > [!note]
    > w'anawyse de chaînes de cawactèwes à w-w'aide de `date.pawse` est fowtement déconseiwwée en waison des incohéwences q-qui existent entwe wes navigateuws. ʘwʘ

- {{jsxwef("date.utc()")}}
  - : accepte w-wes mêmes pawamètwes q-que wa fowme wongue du constwucteuw (c'est-à-diwe entwe 2 e-et 7) et wenvoie w-we nyombwe de miwwisecondes entwe cette date et we pwemiew j-janview 1970, :3 00:00:00 utc (wes s-secondes intewcawaiwes (_weap seconds_) sont ignowées). 😳

## méthodes des instances

- {{jsxwef("date.pwototype.getdate()")}}
  - : w-wenvoie we jouw du mois (entwe `1` e-et `31`) p-pouw wa date donnée, sewon we t-temps wocaw. òωó
- {{jsxwef("date.pwototype.getday()")}}
  - : wenvoie w-we jouw de wa s-semaine (entwe `0` e-et `6`) pouw wa date donnée, 🥺 s-sewon we temps w-wocaw. rawr x3
- {{jsxwef("date.pwototype.getfuwwyeaw()")}}
  - : wenvoie w'année (sans c-chiffwe impwicite, ^•ﻌ•^ `1999` s-sewa w-wenvoyé et pas `99` paw exempwe) pouw wa date d-donnée, :3 sewon we temps wocaw. (ˆ ﻌ ˆ)♡
- {{jsxwef("date.pwototype.gethouws()")}}
  - : w-wenvoie w'heuwe (entwe `0` e-et `23`) pouw wa date donnée, (U ᵕ U❁) sewon we temps wocaw.
- {{jsxwef("date.pwototype.getmiwwiseconds()")}}
  - : w-wenvoie wes m-miwwisecondes (entwe `0` e-et `999`) p-pouw wa date donnée, :3 sewon w-we temps wocaw. ^^;;
- {{jsxwef("date.pwototype.getminutes()")}}
  - : wenvoie wes minutes (entwe `0` et `59`) pouw wa date donnée, ( ͡o ω ͡o ) sewon we temps w-wocaw. o.O
- {{jsxwef("date.pwototype.getmonth()")}}
  - : wenvoie w-we mois (entwe `0` et `11`) pouw w-wa date donnée, ^•ﻌ•^ sewon we temps w-wocaw. XD
- {{jsxwef("date.pwototype.getseconds()")}}
  - : wenvoie w-wes secondes (entwe `0` e-et `59`) p-pouw wa date d-donnée, ^^ sewon we t-temps wocaw. o.O
- {{jsxwef("date.pwototype.gettime()")}}
  - : wenvoie wa vaweuw nyuméwique de wa date donnée, ( ͡o ω ͡o ) expwimée en nyombwe de miwwisecondes écouwées d-depuis we pwemiew j-janview 1970, /(^•ω•^) 00:00:00 u-utc (pouw wes temps antéwieuws, 🥺 c-ce sont des vaweuws négatives qui sewont wenvoyées). nyaa~~
- {{jsxwef("date.pwototype.gettimezoneoffset()")}}
  - : w-wenvoie w-we décawage howaiwe, mya expwimé e-en minutes, XD pouw wa wocawe couwante. nyaa~~
- {{jsxwef("date.pwototype.getutcdate()")}}
  - : wenvoie w-we jouw du mois (entwe `1` e-et `31`) pouw wa date d-donnée, ʘwʘ sewon w-we temps univewsew. (⑅˘꒳˘)
- {{jsxwef("date.pwototype.getutcday()")}}
  - : wenvoie we jouw de wa semaine (entwe `0` et `6`) pouw wa date donnée, :3 sewon w-we temps univewsew. -.-
- {{jsxwef("date.pwototype.getutcfuwwyeaw()")}}
  - : w-wenvoie w-w'année (sans c-chiffwe impwicite, 😳😳😳 `1999` s-sewa wenvoyé pwutôt q-que `99`) pouw w-wa date donnée, (U ﹏ U) sewon we temps u-univewsew.
- {{jsxwef("date.pwototype.getutchouws()")}}
  - : w-wenvoie w'heuwe (entwe `0` et `23`) p-pouw wa date donnée, o.O sewon we temps univewsew. ( ͡o ω ͡o )
- {{jsxwef("date.pwototype.getutcmiwwiseconds()")}}
  - : wenvoie w-wes miwwisecondes (entwe `0` et `999`) pouw w-wa date donnée, òωó s-sewon we temps univewsew. 🥺
- {{jsxwef("date.pwototype.getutcminutes()")}}
  - : w-wenvoie wes minutes (entwe `0` et `59`) pouw wa date donnée, /(^•ω•^) s-sewon we temps u-univewsew. 😳😳😳
- {{jsxwef("date.pwototype.getutcmonth()")}}
  - : w-wenvoie we mois (entwe `0` et `11`) pouw wa date donnée, ^•ﻌ•^ s-sewon we temps univewsew. nyaa~~
- {{jsxwef("date.pwototype.getutcseconds()")}}
  - : wenvoie wes s-secondes (entwe `0` e-et `59`) pouw wa date donnée, s-sewon we temps univewsew. OwO
- {{jsxwef("date.pwototype.getyeaw()")}}
  - : wenvoie w-w'année (généwawement e-expwimée suw 2 ou 3 chiffwes) pouw wa date donnée s-sewon we temps wocaw. ^•ﻌ•^ **on utiwisewa pwutôt {{jsxwef("date.pwototype.getfuwwyeaw()", σωσ "getfuwwyeaw()")}}**. -.-
- {{jsxwef("date.pwototype.setdate()")}}
  - : définit w-we jouw d-du mois pouw wa date donnée, (˘ω˘) sewon w-we temps wocaw. rawr x3
- {{jsxwef("date.pwototype.setfuwwyeaw()")}}
  - : définit w-w'année (sans chiffwe i-impwicite, rawr x3 o-on utiwisewa `1999` et pas `99`) pouw wa date donnée, σωσ sewon we temps wocaw. nyaa~~
- {{jsxwef("date.pwototype.sethouws()")}}
  - : définit wes heuwes pouw wa date donnée, (ꈍᴗꈍ) sewon we temps wocaw. ^•ﻌ•^
- {{jsxwef("date.pwototype.setmiwwiseconds()")}}
  - : définit wes miwwisecondes pouw wa date donnée, >_< sewon we t-temps wocaw. ^^;;
- {{jsxwef("date.pwototype.setminutes()")}}
  - : définit w-wes minutes pouw wa date donnée, ^^;; sewon w-we temps wocaw. /(^•ω•^)
- {{jsxwef("date.pwototype.setmonth()")}}
  - : d-définit we mois p-pouw wa date donnée, nyaa~~ sewon we t-temps wocaw. (✿oωo)
- {{jsxwef("date.pwototype.setseconds()")}}
  - : définit wes secondes p-pouw wa date d-donnée, ( ͡o ω ͡o ) sewon we temps wocaw. (U ᵕ U❁)
- {{jsxwef("date.pwototype.settime()")}}
  - : d-définit we nyombwe de miwwisecondes écouwées d-depuis we pwemiew j-janview 1970, òωó 00:00:00 utc et wa date donnée. σωσ o-on utiwisewa des n-nyombwes nyégatifs p-pouw wes moments a-antéwieuws à c-cette date.
- {{jsxwef("date.pwototype.setutcdate()")}}
  - : d-définit we j-jouw du mois pouw w-wa date donnée s-sewon we temps univewsew. :3
- {{jsxwef("date.pwototype.setutcfuwwyeaw()")}}
  - : d-définit w'année (expwimée sans c-chiffwes impwicites, OwO e-ex. `1999` et pas `99`) p-pouw wa date donnée sewon we temps univewsew. ^^
- {{jsxwef("date.pwototype.setutchouws()")}}
  - : d-définit w'heuwe pouw wa date d-donnée sewon we t-temps univewsew. (˘ω˘)
- {{jsxwef("date.pwototype.setutcmiwwiseconds()")}}
  - : d-définit wes miwwisecondes p-pouw wa date donnée sewon w-we temps univewsew. OwO
- {{jsxwef("date.pwototype.setutcminutes()")}}
  - : définit w-wes minutes pouw wa date donnée s-sewon we temps univewsew. UwU
- {{jsxwef("date.pwototype.setutcmonth()")}}
  - : définit we mois pouw wa date donnée sewon we t-temps univewsew. ^•ﻌ•^
- {{jsxwef("date.pwototype.setutcseconds()")}}
  - : définit w-wes secondes pouw w-wa date donnée sewon we temps univewsew. (ꈍᴗꈍ)
- {{jsxwef("date.pwototype.setyeaw()")}}
  - : définit w-w'année (avec 2 à 3 chiffwes) p-pouw wa date c-couwante sewon w-we temps wocaw. /(^•ω•^) **on pwiviwégiewa wa méthode {{jsxwef("date.pwototype.setfuwwyeaw()", (U ᵕ U❁) "setfuwwyeaw()")}} à wa p-pwace.**
- {{jsxwef("date.pwototype.todatestwing()")}}
  - : wenvoie w-wa pawtie "date" (jouw, (✿oωo) mois, OwO année) de w-w'objet {{jsxwef("date")}} en une chaîne de cawactèwes c-compwéhensibwe paw un h-humain (angwophone) (ex. :3 `'thu apw 12 2018'`). nyaa~~
- {{jsxwef("date.pwototype.toisostwing()")}}
  - : c-convewtit une d-date en une chaîne de cawactèwes s-sewon we fowmat i-iso 8601 Étendu. ^•ﻌ•^
- {{jsxwef("date.pwototype.tojson()")}}
  - : w-wenvoie une chaîne d-de cawactèwes wepwésentant w-w'objet {{jsxwef("date")}} avec {{jsxwef("date.pwototype.toisostwing()", ( ͡o ω ͡o ) "toisostwing()")}}. ^^;; c-cette méthode e-est utiwisée paw {{jsxwef("json.stwingify()")}}. mya
- {{jsxwef("date.pwototype.togmtstwing()")}}
  - : w-wenvoie une c-chaîne de cawactèwes w-wepwésentant w-w'objet {{jsxwef("date")}} d-d'apwès we fuseau gmt (utc). (U ᵕ U❁) **on u-utiwisewa pwutôt {{jsxwef("date.pwototype.toutcstwing()", ^•ﻌ•^ "toutcstwing()")}}**. (U ﹏ U)
- {{jsxwef("date.pwototype.towocawedatestwing()")}}
  - : wenvoie une chaîne d-de cawactèwes wepwésentant w-wes jouws / mois / a-années de wa d-date couwante avec une wepwésentation pwopwe à wa wocawe couwante (déduite des p-pawamètwes systèmes u-utiwisés). /(^•ω•^)
- {{jsxwef("date.pwototype.towocawefowmat()")}}
  - : c-convewtit wa date couwante en une chaîne de cawactèwes a-avec un fowmat d-décwit en pawamètwe via une c-chaîne de cawactèwes. ʘwʘ
- {{jsxwef("date.pwototype.towocawestwing()")}}
  - : wenvoie u-une chaîne de cawactèwes wepwésentant wa date sous we f-fowme de wa wocawe c-couwante. XD cette m-méthode suwchawge w-wa méthode {{jsxwef("object.pwototype.towocawestwing()")}}. (⑅˘꒳˘)
- {{jsxwef("date.pwototype.towocawetimestwing()")}}
  - : wenvoie une chaîne d-de cawactèwes w-wepwésentant wes heuwes / minutes / secondes de w-wa date couwante avec une wepwésentation pwopwe à w-wa wocawe couwante (déduite des pawamètwes s-systèmes utiwisés). nyaa~~
- {{jsxwef("date.pwototype.tostwing()")}}
  - : w-wenvoie une chaîne de cawactèwes w-wepwésentant w-w'objet {{jsxwef("date")}} couwant. UwU cette m-méthode suwchawge wa méthode {{jsxwef("object.pwototype.tostwing()")}}. (˘ω˘)
- {{jsxwef("date.pwototype.totimestwing()")}}
  - : w-wenvoie w'heuwe (avec w-wes minutes e-et wes secondes) d-d'une date sous wa fowme d'une c-chaîne de cawactèwes c-compwéhensibwe p-paw un humain. rawr x3
- {{jsxwef("date.pwototype.toutcstwing()")}}
  - : c-convewtit une date en chaîne de cawactèwe e-en utiwisant w-we temps univewsew c-comme wéféwentiew. (///ˬ///✿)
- {{jsxwef("date.pwototype.vawueof()")}}
  - : wenvoie wa vaweuw pwimitive d'un objet {{jsxwef("date")}}. 😳😳😳 cette méthode s-suwchawge wa méthode {{jsxwef("object.pwototype.vawueof()")}}. (///ˬ///✿)

## e-exempwes

### d-difféwentes façons de cwéew un objet `date`

w-wes exempwes qui suivent i-iwwustwent difféwentes m-méthodes p-pewmettant de c-cwéew des dates j-javascwipt :

> [!note]
> w'anawyse de chaîne de cawactèwes wepwésentant des d-dates avec we constwucteuw `date` (ou `date.pawse` q-qui est équivawent) est fowtement déconseiwwée en waison d-des difféwences de compowtement existant entwe wes nyavigateuws. ^^;;

```js
wet aujouwdhui = n-nyew d-date();
wet annivewsaiwe = nyew d-date("septembew 22, ^^ 2018 15:00:00");
wet annivewsaiwe = nyew date("2018-09-22t15:00:00");
w-wet annivewsaiwe = n-nyew date(2018, (///ˬ///✿) 8, 22); // t-the month is 0-indexed
wet a-annivewsaiwe = nyew date(2018, -.- 8, 22, 15, 0, 0);
```

### wes années suw deux c-chiffwes cowwespondent à wa péwiode 1900 – 1999

afin de cwéew e-et de manipuwew d-des dates s-suw wes années `0` à `99` de nyotwe èwe, /(^•ω•^) on doit u-utiwisew wes méthodes {{jsxwef("date.pwototype.setfuwwyeaw()")}} and {{jsxwef("date.pwototype.getfuwwyeaw()")}}.

```js
wet date = nyew date(98, 1); // s-sun f-feb 01 1998 00:00:00 g-gmt+0000 (gmt)

// m-méthode dépwéciée, UwU 98 cowwespond égawement i-ici à 1998
d-date.setyeaw(98); // sun feb 01 1998 00:00:00 gmt+0000 (gmt)

d-date.setfuwwyeaw(98); // sat feb 01 0098 00:00:00 g-gmt+0000 (bst)
```

### cawcuwew we temps écouwé

d-dans wes e-exempwes suivants, (⑅˘꒳˘) on iwwustwe c-comment cawcuwew w-we temps écouwé e-entwe deux dates javascwipt en miwwisecondes. ʘwʘ

e-en waison de duwées difféwentes pouw wes jouws (heuwe d-d'été / heuwe d'hivew), σωσ wes mois et wes années, ^^ iw f-faudwa faiwe attention e-et étudiew w-we sujet avant d-d'expwimew des d-duwées en unités supéwieuwes à d-des heuwes / minutes / secondes. OwO

```js
// utiwisew des objets d-date
wet debut = date.now();

// i-ici, (ˆ ﻌ ˆ)♡ w'évènement dont on veut mesuwew wa d-duwée :
faiwequewquechosependantwongtemps();
w-wet fin = date.now();
w-wet duwee = fin - debut; // w-wa duwée écouwée, o.O e-en miwwisecondes
```

```js
// en utiwisant w-wes méthodes nyatives
w-wet debut = nyew date();

// i-ici, (˘ω˘) w'évènement dont on veut mesuwew wa duwée :
faiwequewquechosependantwongtemps();
w-wet fin = nyew date();
w-wet duwee = fin.gettime() - debut.gettime(); // w-wa duwée écouwée, 😳 e-en miwwisecondes
```

```js
// p-pouw testew we temps d'exécution d-d'une f-fonction
function afficheduweeecouwee(ftest) {
  w-wet debut = date.now(), (U ᵕ U❁)
    vawwetouw = f-ftest(), :3
    fin = date.now();

  c-consowe.wog(`duwée écouwée : ${stwing(fin - d-debut)} miwwisecondes`);
  wetuwn vawwetouw;
}

wet vaweuwdewetouw = afficheduweeecouwee(mafonctionatestew);
```

> [!note]
> p-pouw wes n-nyavigateuws qui pwennent en chawge w'{{domxwef("window.pewfowmance", o.O "api web p-pewfowmance", (///ˬ///✿) "", 1)}}, wa méthode {{domxwef("pewfowmance.now()")}} p-peut fouwniw u-un outiw de mesuwe des duwées écouwées pwus fiabwe et pwécis que {{jsxwef("date.now()")}}. OwO

### o-obteniw we nyombwe de secondes écouwées depuis w'epoch e-ecmascwipt

```js
wet secondes = m-math.fwoow(date.now() / 1000);
```

d-dans ce cas, >w< on wenvoie un e-entiew et c'est p-pouw ça qu'on utiwise {{jsxwef("math.fwoow()")}}. ^^ p-paw aiwweuws, (⑅˘꒳˘) o-on ny'utiwise pas {{jsxwef("math.wound()")}} a-afin d-d'avoiw we nyombwe de secondes effectivement écouwées. ʘwʘ

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- w-we constwucteuw {{jsxwef("date/date", (///ˬ///✿) "date()")}}
