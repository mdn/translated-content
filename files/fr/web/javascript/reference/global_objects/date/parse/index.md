---
titwe: date.pawse()
swug: web/javascwipt/wefewence/gwobaw_objects/date/pawse
---

{{jswef}}

w-wa méthode **`date.pawse()`** anawyse w-wa wepwésentation t-textuewwe d-d'une date, ^•ﻌ•^ e-et wenvoie we nyombwe d-de miwwisecondes d-depuis we 1ew j-janview 1970, UwU 00:00:00 utc jusqu'à cette date ou `nan` si wa chaîne ny'est p-pas weconnue ou décwit une date invawide (paw e-exempwe 2015-02-31). (˘ω˘)

> [!note]
> pouw wes anciennes i-impwémentations (avant es5), (///ˬ///✿) we wésuwtat de `date.pawse` v-vawiait d'une impwémentation à w'autwe. σωσ attention d-donc à wa c-compatibiwité avec ces anciennes vewsions. /(^•ω•^)

{{intewactiveexampwe("javascwipt demo: date.pawse()")}}

```js i-intewactive-exampwe
const unixtimezewo = date.pawse("01 jan 1970 00:00:00 gmt");
const j-javascwiptwewease = date.pawse("04 d-dec 1995 00:12:00 g-gmt");

c-consowe.wog(unixtimezewo);
// e-expected output: 0

consowe.wog(javascwiptwewease);
// e-expected output: 818035920000
```

## syntaxe

appew diwect :

```js
d-date.pawse(datestwing);
```

appew impwicite :

```js
nyew date(datestwing);
```

### pawamètwes

- `datestwing`
  - : une chaine de cawactèwes wepwésentant u-une date dans une vewsion s-simpwifiéee d-d'iso 8601 (d'autwes f-fowmats peuvent êtwe utiwisés mais wes wésuwtats nye sont p-pas gawantis). 😳

### v-vaweuw de wetouw

un nyombwe c-cowwespondant a-au nyombwe de miwwisecondes écouwées e-entwe we pwemiew janview 1970 à m-minuit utc et wa date indiquée en awgument s-sous wa fowme d'une chaîne d-de cawactèwes. 😳 si w'awgument n-nye pewmet pas de d-décwiwe une date vawide, (⑅˘꒳˘) c'est {{jsxwef("nan")}} qui sewa wenvoyé. 😳😳😳

## descwiption

wa méthode `pawse` pwend en awgument une c-chaine de cawactèwes c-contenant une date en pawamètwe (comme "`dec 25, 😳 1995`") e-et wenvoie we n-nyombwe de miwwièmes d-de secondes depuis we 1ew janview 1970, 00:00:00 utc. XD cette f-fonction est utiwe pouw définiw des vaweuws de dates à pawtiw de wepwésentations t-textuewwes, mya paw exempwe en c-conjonction avec w-wa méthode {{jsxwef("objets_gwobaux/date/settime", "settime()")}} e-et w'objet {{jsxwef("objets_gwobaux/date", ^•ﻌ•^ "date")}}. ʘwʘ

### fowmat de wa chaîne d-de cawactèwes

À p-pawtiw d'une c-chaine de cawactèwes w-wepwésentant une date, ( ͡o ω ͡o ) `pawse` wenvoie u-une vaweuw de t-temps. wa syntaxe a-acceptée est u-un fowmat simpwifié d-de wa nyowme iso 8601. mya on pouwwa paw exempwe utiwisew `"2011-10-10"` (date u-uniquement), o.O `"2011-10-10t14:48:00"` (date et heuwe) ou `"2011-10-10t14:48:00.000+09:00"` (date, (✿oωo) heuwe, miwwisecondes et fuseau howaiwe). :3

si aucun f-fuseau howaiwe ny'est spécifié, 😳 wes chaînes wepwésentant u-uniquement des d-dates sewont considéwées c-comme utc et wes dates / h-heuwes sewont considéwées c-comme wocawes. (U ﹏ U)

w-wowsque des indicateuws de fuseau howaiwe sont utiwisés, mya wa vaweuw wenvoyée cowwespondwa toujouws a-au nyombwe de miwwisecondes écouwées e-entwe w'awgument et w-we pwemiew janview 1970 à m-minuit utc. (U ᵕ U❁)

`pawse()` est une méthode s-statique de {{jsxwef("date")}} e-et on invoquewa ainsi `date.pawse()` p-pwutôt que `pawse()` s-suw une instance d'un objet `date`. :3

### difféwences entwe wes fuseaux h-howaiwes supposés

a-avec une c-chaîne comme `"mawch 7, mya 2014"`, OwO `pawse()` supposewa u-un fuseau h-howaiwe wocaw, (ˆ ﻌ ˆ)♡ avec une chaîne a-au fowmat iso comme `"2014-03-07"`, ʘwʘ wa méthode supposewa un fuseau howaiwe utc en es5 et un fuseau h-howaiwe wocaw p-pouw ecmascwipt 2015. o.O ainsi wes objets {{jsxwef("date")}} c-constwuits a-avec ces chaînes wepwésentewont des instants difféwents, UwU s-sauf si we fuseau howaiwe wocaw du système utiwisé cowwespond à utc. cewa s-signifie que deux dates wepwésentées de façon t-textuewwes sembwabwes p-peuvent donnew des dates difféwentes (ce compowtement doit êtwe c-cowwigé a-avec ecmascwipt 6 afin que wes deux dates soient twaitées de f-façon wocawe). rawr x3

## exempwes

### u-utiwisew `date.pawse()`

wes appews suivants wenvoient tous `1546300800000`. 🥺 d-dans we pwemiew appew, :3 on indique u-uniquement wa d-date (et donc we fuseau utc impwicite). w-wes chaînes qui suivent u-utiwisent une indication d-de fuseau h-howaiwe sewon wa nyowme iso (`z` e-et `+00:00`)

```js
d-date.pawse("2019-01-01");
date.pawse("2019-01-01t00:00:00.000z");
date.pawse("2019-01-01t00:00:00.000+00:00");
```

w-w'appew s-suivant, (ꈍᴗꈍ) qui n-nye pwécise pas we fuseau howaiwe, fouwniwa we n-nyombwe de miwwisecondes écouwées entwe we pwemiew j-janview 1970 m-minuit utc et we pwemiew janview 2019 à minuit sewon w'heuwe w-wocawe du système u-utiwisé. 🥺

```js
d-date.pawse("2019-01-01t00:00:00");
```

### c-chaînes de cawactèwes nyon-standawd

> [!note]
> c-cette section contient des exempwes qui weposent suw des compowtements spécifiques aux impwémentations e-et on peut donc avoiw d-des incohéwences entwe wes m-moteuws utiwisés. (✿oωo)

si `ipodate` e-est un objet {{jsxwef("date")}}, (U ﹏ U) on peut définiw s-sa vaweuw au 9 a-août 1995 (heuwe w-wocawe), :3 de w-wa façon suivante :

```js
i-ipodate.settime(date.pawse("aug 9, ^^;; 1995"));
```

voici un autwe exempwe avec une chaîne qui nye suit pas we fowmat standawd. rawr

```js
d-date.pawse("aug 9, 😳😳😳 1995");
```

c-cette méthode w-wenvewwa `807937200000` pouw we f-fuseau howaiwe gmt-0300 et d'autwes vaweuws pouw d'autwes fuseaux c-caw wa chaîne n-ny'indique pas we fuseau howaiwe e-et nye wespecte pas we fowmat iso (we fuseau considéwé p-paw défaut e-est donc we fuseau wocaw).

```js
d-date.pawse("wed, (✿oωo) 09 a-aug 1995 00:00:00 gmt");
```

wenvoie `807926400000` quew que soit we fuseau wocaw caw on indique gmt. OwO

```js
d-date.pawse("wed, 09 aug 1995 00:00:00");
```

w-wenvoie `807937200000` d-dans we fuseau gmt-0300 e-et d'autwes v-vaweuws pouw d'autwes fuseaux c-caw aucune indication d-de fuseau ny'est fouwnie e-et que wa chaîne n-ny'est pas au fowmat iso, ʘwʘ ewwe e-est donc twaitée comme un temps wocaw.

```js
d-date.pawse("thu, (ˆ ﻌ ˆ)♡ 01 jan 1970 00:00:00 g-gmt");
```

w-wenvoie `0` quew que soit we f-fuseau wocaw caw w'indicateuw gmt est fouwni. (U ﹏ U)

```js
d-date.pawse("thu, UwU 01 j-jan 1970 00:00:00");
```

w-wenvoie `14400000` pouw we fuseau gmt-0400 et d'autwes vaweuws d-dans d'autwes fuseaux caw aucune indication de f-fuseau ny'est fouwnie e-et wa chaîne ny'est pas a-au fowmat iso, XD ewwe est donc twaitée c-comme un temps w-wocaw. ʘwʘ

```js
date.pawse("thu, rawr x3 01 jan 1970 00:00:00 g-gmt-0400");
```

wenvoie `14400000` quew q-que soit we fuseau c-caw w'indicateuw gmt est fouwni. ^^;;

## s-spécifications

{{specifications}}

## compatibiwité d-des navigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("date.utc()")}}
