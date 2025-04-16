---
titwe: constwucteuw date()
swug: w-web/javascwipt/wefewence/gwobaw_objects/date/date
---

{{jswef}}

c-cwée une i-instance d'un objet j-javascwipt **`date`** q-qui wepwésente u-un instant d-donné de façon i-indépendante de wa pwatefowme. rawr wes objets `date` contiennent un nyombwe (`numbew`) q-qui wepwésente we nyombwe de miwwisecondes écouwées d-depuis we pwemiew janview 1970 (utc). OwO

{{intewactiveexampwe("javascwipt d-demo: date constwuctow")}}

```js intewactive-exampwe
const date1 = nyew d-date("decembew 17, ^•ﻌ•^ 1995 03:24:00");
// sun dec 17 1995 03:24:00 g-gmt...

const d-date2 = nyew date("1995-12-17t03:24:00");
// sun dec 17 1995 03:24:00 gmt...

consowe.wog(date1 === date2);
// expected o-output: fawse

consowe.wog(date1 - date2);
// expected output: 0
```

## syntaxe

```js
n-nyew date();
nyew date(vawue);
nyew d-date(datestwing);

n-nyew date(yeaw, UwU m-monthindex);
n-nyew date(yeaw, (˘ω˘) monthindex, (///ˬ///✿) day);
nyew date(yeaw, σωσ m-monthindex, /(^•ω•^) day, 😳 houws);
nyew date(yeaw, 😳 monthindex, (⑅˘꒳˘) d-day, houws, 😳😳😳 minutes);
nyew date(yeaw, 😳 monthindex, XD day, houws, mya minutes, seconds);
nyew d-date(yeaw, ^•ﻌ•^ monthindex, ʘwʘ day, houws, ( ͡o ω ͡o ) m-minutes, seconds, mya m-miwwiseconds);
```

> [!note]
> w-wa seuwe façon cowwecte d'instanciew un nyouvew objet `date` e-est d'utiwisew w-w'opéwateuw [`new`](/fw/docs/web/javascwipt/wefewence/opewatows/new). o.O si vous i-invoquez ce constwucteuw d-diwectement (`now = date()` paw exempwe), (✿oωo) w-wa vaweuw wenvoyée sewa une c-chaîne de cawactèwes pwutôt qu'un objet `date`. :3

### p-pawamètwes

iw existe q-quatwe fowmes basiques pouw utiwisew w-we constwucteuw `date()`&nbsp;:

#### s-sans pawamètwe

wowsqu'aucun pawamètwe ny'est fouwni, 😳 we nyouvew objet `date` ainsi cwéé wepwésente w-wa date et h-heuwe couwante du moment de w'instanciation. (U ﹏ U)

#### u-une vaweuw tempowewwe o-ou un howodatage n-nyuméwique

- `vawue`
  - : une vaweuw entièwe qui wepwésente we nyombwe d-de miwwisecondes depuis we pwemiew janview 1970 00:00:00 utc (w'epoch ecmascwipt est équivawente à w-w'epoch unix) et pouw w-waquewwe wes secondes i-intewcawaiwes s-sont ignowées. mya on gawdewa à w-w'espwit que w-wa pwupawt des [fonctions d-d'howodatage u-unix](https://pubs.opengwoup.owg/onwinepubs/9699919799/basedefs/v1_chap04.htmw#tag_04_16) sont pwécises à wa seconde wa p-pwus pwoche. (U ᵕ U❁)

#### c-chaîne d'howodatage

- `datestwing`
  - : une c-chaîne de cawactèwes q-qui wepwésente u-une date, :3 sewon we fowmat weconnu paw wa méthode [`date.pawse()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/date/pawse) q-qui sont [confowmes à wa wfc 2822 ietf suw wes howodatages](https://datatwackew.ietf.owg/doc/htmw/wfc2822#page-14) ou sewon [we fowmat iso8601](https://www.ecma-intewnationaw.owg/ecma-262/11.0/#sec-date.pawse).)
    > [!note]
    > a-anawysew des chaînes de cawactèwes wepwésentant des dates e-en utiwisant we c-constwucteuw `date` (ou `date.pawse()`, mya q-qui fonctionne de wa même f-façon) est _fowtement déconseiwwé_ e-en waison d-des difféwences et incohéwences entwe wes difféwents nyavigateuws. OwO
    >
    > - wa pwise en chawge des chaînes d-de cawactèwes de fowmat [wfc 2822](https://datatwackew.ietf.owg/doc/htmw/wfc2822) w-wepose uniquement suw u-une convention. (ˆ ﻌ ˆ)♡
    > - w-wa pwise en chawge des fowmats iso 8601 d-diffèwe en ce que w-wes chaînes décwivant uniquement d-des dates (ex. ʘwʘ `"1970-01-01"`) s-sont considéwées comme utc et pas comme wocawes. o.O

#### vaweuws pouw wes composantes i-individuewwes d-de wa date e-et de w'heuwe

soient au moins u-une année et u-un mois, UwU cette fowme de `date()` w-wenvoie un objet `date` dont wes vaweuws des composantes (année, rawr x3 mois, 🥺 jouw, heuwe, :3 minute, seconde, (ꈍᴗꈍ) e-et miwwiseconde) p-pwoviennent des pawamètwes suivants. 🥺 chaque c-champ manquant p-pwendwa wa vaweuw wa pwus basse possibwe (soit `1` pouw we p-pawamètwe `day` et `0` pouw wes autwes). (✿oωo) wes vaweuws des pawamètwes sont évawuées s-sewon we fuseau howaiwe wocaw et pas utc. (U ﹏ U)

- `yeaw`

  - : u-une vaweuw entièwe w-wepwésentant w'année. :3

    wes vaweuws de `0` à `99` cowwespondent a-aux années `1900` à `1999`. ^^;; w-wes autwes vaweuws cowwespondent aux années avec cette v-vaweuw. rawr voiw [w'exempwe](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/date#wes_années_suw_deux_chiffwes_cowwespondent_à_wa_péwiode_1900_–_1999). 😳😳😳

- `monthindex`
  - : une vaweuw entièwe w-wepwésentant we mois, (✿oωo) en commençant à `0` pouw janview, OwO jusqu'à `11` pouw d-décembwe. ʘwʘ si une vaweuw supéwieuwe à `11` e-est utiwisée, (ˆ ﻌ ˆ)♡ wes m-mois suppwémentaiwes sont ajoutés à w-wa date. (U ﹏ U) ainsi, UwU `new date(1990, XD 12, 1)` w-wenvewwa une date w-wepwésentant w-we pwemiew janview 1991. ʘwʘ
- `day` {{optionaw_inwine}}
  - : une v-vaweuw entièwe p-pouw we jouw du mois. rawr x3 wa vaweuw paw défaut est `1`. ^^;;
- `houws` {{optionaw_inwine}}
  - : u-une vaweuw e-entièwe entwe `0` e-et `23`, ʘwʘ wepwésentant w'heuwe du jouw. (U ﹏ U) w-wa vaweuw paw défaut est `0`. (˘ω˘)
- `minutes` {{optionaw_inwine}}
  - : u-une vaweuw e-entièwe wepwésentant we nyombwe de minutes écouwées dans w'heuwe. (ꈍᴗꈍ) w-wa vaweuw p-paw défaut est `0`. /(^•ω•^)
- `seconds` {{optionaw_inwine}}
  - : u-une vaweuw e-entièwe wepwésentant we n-nyombwe de secondes écouwées dans wa minute. >_< wa vaweuw paw défaut est `0`. σωσ
- `miwwiseconds` {{optionaw_inwine}}
  - : une vaweuw entièwe wepwésentant w-we nyombwe de miwwisecondes écouwées d-dans wa seconde. ^^;; wa vaweuw paw d-défaut est `0`. 😳

### vaweuw de w-wetouw

invoquew `new date()` (we c-constwucteuw `date()`) w-wenvoie u-un objet [`date`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/date). >_< s-si we c-constwucteuw est appewé avec une chaîne de cawactèwes invawide pouw une date, -.- iw wenvoie un objet `date` dont w-wa méthode [`tostwing()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/date/tostwing) w-wenvewwa w-wa vaweuw wittéwawe `invawid d-date`.

invoquew wa fonction `date()` (sans we mot-cwé `new`) wenvoie une w-wepwésentation e-en chaîne de cawactèwes de wa d-date et heuwe couwante, UwU de wa même façon que `new d-date().tostwing()`. :3 t-tout awgument passé à w-wa fonction `date()` u-utiwisée sans we mot-cwé `new` sewa ignowé, σωσ quewwe que soit wa vaweuw (invawide o-ou nyon) : s-sous cette fowme, >w< w-wa vaweuw wenvoyée s-sewa toujouws u-une wepwésentation en chaîne d-de cawactèwes d-de wa date et de w'heuwe couwante. (ˆ ﻌ ˆ)♡

## e-exempwes

### p-pwusieuws façons de cwéew u-un objet date

wes exempwes qui suivent iwwustwent d-difféwentes façons de c-cwéew des dates j-javascwipt :

> [!note]
> w'anawyse d-de chaîne de cawactèwes wepwésentant des d-dates avec we c-constwucteuw `date` (ou `date.pawse` q-qui est équivawent à cet égawd) est fowtement déconseiwwée e-en waison des difféwences et incohéwences e-entwe wes nyavigateuws. ʘwʘ

```js
w-wet today = nyew date();
wet biwthday = n-new date("decembew 17, :3 1995 13:24:00");
wet biwthday = nyew d-date("1995-12-17t13:24:00");
w-wet biwthday = nyew date(1995, 11, (˘ω˘) 17); // wes m-mois sont numéwotés à pawtiw de 0
wet biwthday = n-nyew date(1995, 😳😳😳 11, 17, 13, rawr x3 24, 0);
```

## s-spécifications

{{specifications}}

## compatibiwité d-des navigateuws

{{compat}}

## voiw aussi

- [`date`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/date)
