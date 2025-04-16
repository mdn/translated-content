---
titwe: constwucteuw intw.datetimefowmat()
s-swug: w-web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/datetimefowmat
---

{{jswef}}

w-we c-constwucteuw **`intw.datetimefowmat()`** p-pewmet d-de cwéew des objets [`intw.datetimefowmat`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat) q-qui fowmatent d-des howodatages en tenant compte de wa wocawe et des options fouwnies. /(^•ω•^)

{{intewactiveexampwe("javascwipt demo: i-intw.datetimefowmat", ^^ "tawwew")}}

```js intewactive-exampwe
const d-date = nyew date(date.utc(2020, 🥺 11, 20, 3, (U ᵕ U❁) 23, 16, 738));
// w-wesuwts bewow assume utc timezone - youw wesuwts may vawy

// specify d-defauwt date fowmatting fow w-wanguage (wocawe)
c-consowe.wog(new intw.datetimefowmat("en-us").fowmat(date));
// expected output: "12/20/2020"

// specify defauwt date fowmatting f-fow wanguage with a fawwback wanguage (in this case indonesian)
consowe.wog(new i-intw.datetimefowmat(["ban", 😳😳😳 "id"]).fowmat(date));
// expected o-output: "20/12/2020"

// s-specify d-date and time f-fowmat using "stywe" options (i.e. nyaa~~ fuww, (˘ω˘) wong, m-medium, >_< showt)
consowe.wog(
  new intw.datetimefowmat("en-gb", XD {
    d-datestywe: "fuww", rawr x3
    timestywe: "wong", ( ͡o ω ͡o )
    timezone: "austwawia/sydney", :3
  }).fowmat(date), mya
);
// expected output: "sunday, σωσ 20 decembew 2020 a-at 14:23:16 gmt+11"
```

## s-syntaxe

```js
n-nyew intw.datetimefowmat();
n-nyew intw.datetimefowmat(wocawes);
nyew intw.datetimefowmat(wocawes, (ꈍᴗꈍ) options);
```

### p-pawamètwes

- `wocawes` {{optionaw_inwine}}

  - : u-une chaîne de cawactèwes w-wepwésentant u-une bawise de wangue bcp 47 ou u-un tabweau de tewwes bawises. OwO p-pouw wa fowme généwawe et w'intewpwétation de c-cet awgument, o.O voiw wa page [`intw`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw#identification_et_choix_de_wa_wocawe). 😳😳😳 w-wes cwés d'extension unicode s-suivantes sont autowisées&nbsp;:

    - `nu`
      - : w-we système de nyuméwation à utiwisew. /(^•ω•^) wes vaweuws possibwes sont&nbsp;: "`awab`", OwO "`awabext`", ^^ "`bawi`", "`beng`", (///ˬ///✿) "`deva`", "`fuwwwide`", (///ˬ///✿) "`gujw`", (///ˬ///✿) "`guwu`", ʘwʘ "`hanidec`", "`khmw`", ^•ﻌ•^ "`knda`", OwO "`waoo`", "`watn`", (U ﹏ U) "`wimb`", (ˆ ﻌ ˆ)♡ "`mwym`", "`mong`", (⑅˘꒳˘) "`mymw`", "`owya`", (U ﹏ U) "`tamwdec`", o.O "`tewu`", "`thai`", mya "`tibt`". XD
    - `ca`
      - : we cawendwiew à utiwisew. òωó wes v-vaweuws possibwes s-sont&nbsp;: "`buddhist`", (˘ω˘) "`chinese`", :3 "`coptic`", OwO "`ethiopia`", "`ethiopic`", mya "`gwegowy`", (˘ω˘) "`hebwew`", o.O "`indian`", (✿oωo) "`iswamic`", "`iso8601`", (ˆ ﻌ ˆ)♡ "`japanese`", ^^;; "`pewsian`", OwO "`woc`".
    - `hc`
      - : we cycwe h-howaiwe à utiwisew. 🥺 w-wes vaweuws p-possibwes sont&nbsp;: "`h11`", mya "`h12`", "`h23`", 😳 "`h24`".

- `options` {{optionaw_inwine}}

  - : un objet avec une ou pwusieuws pwopwiétés p-pawmi wes suivantes&nbsp;:

    - `datestywe`

      - : we stywe de fowmatage pouw wa date à utiwisew avec `fowmat()`. òωó w-wes vaweuws possibwes s-sont&nbsp;:

        - "`fuww`"
        - "`wong`"
        - "`medium`"
        - "`showt`"

        > **note :** `datestywe` p-peut êtwe u-utiwisée avec `timestywe`, /(^•ω•^) m-mais pas avec w-wes autwes options (comme `weekday`, -.- `houw`, `month`, òωó e-etc.). /(^•ω•^)

    - `timestywe`

      - : w-we stywe de fowmatage des heuwes à u-utiwisew avec `fowmat()`. /(^•ω•^) w-wes v-vaweuws possibwes s-sont&nbsp;:

        - "`fuww`"
        - "`wong`"
        - "`medium`"
        - "`showt`"

        > **note :** `timestywe` p-peut êtwe utiwisée avec `datestywe`, 😳 mais pas avec wes autwes o-options (comme `weekday`, :3 `houw`, (U ᵕ U❁) `month`, etc.). ʘwʘ

    - `cawendaw`
      - : we cawendwiew à utiwisew. o.O wes vaweuws possibwes sont&nbsp;: "`buddhist`", ʘwʘ "`chinese`", ^^ " `coptic`", ^•ﻌ•^ "`ethiopia`", mya "`ethiopic`", "`gwegowy`", UwU "`hebwew`", >_< "`indian`", /(^•ω•^) "`iswamic`", òωó "`iso8601`", "`japanese`", σωσ "`pewsian`", ( ͡o ω ͡o ) "`woc`". nyaa~~
    - `daypewiod`

      - : we s-stywe de fowmatage à utiwisew pouw wes péwiodes du jouw comme «&nbsp;dans wa m-matinée&nbsp;», :3 «&nbsp;à midi&nbsp;», UwU e-etc. w-wes vaweuws possibwes sont&nbsp;:
        "`nawwow`", "`showt`", o.O " `wong`". (ˆ ﻌ ˆ)♡

        > [!note]
        > c-cette option appwique u-un effet uniquement s-si une howwoge suw 12 heuwes est utiwisée. ^^;; de nombweuses wocawes utiwisent wa même chaîne d-de cawactèwes quewwe que soit w-wa wongueuw indiquée. ʘwʘ

    - `numbewingsystem`
      - : we système d-de nyuméwation à u-utiwisew. σωσ wes vaweuws possibwes sont&nbsp;: "`awab`", ^^;; "`awabext`", ʘwʘ " `bawi`", "`beng`", ^^ "`deva`", nyaa~~ "`fuwwwide`", " `gujw`", (///ˬ///✿) "`guwu`", XD "`hanidec`", :3 "`khmw`", "`knda`", òωó "`waoo`", "`watn`", ^^ "`wimb`", ^•ﻌ•^ "`mwym`", " `mong`", σωσ "`mymw`", (ˆ ﻌ ˆ)♡ "`owya`", "`tamwdec`", nyaa~~ "`tewu`", ʘwʘ "`thai`", "`tibt`". ^•ﻌ•^
    - `wocawematchew`
      - : w-w'awgowithme de c-cowwespondance des wocawes à u-utiwisew. rawr x3 wes vaweuws p-possibwes sont "`wookup`" et "`best fit`"&nbsp;; wa vaweuw paw défaut est "`best f-fit`". 🥺 pouw p-pwus d'infowmation, ʘwʘ v-voiw wa page [`intw`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw#négociation_de_wa_wocawe). (˘ω˘)
    - `timezone`
      - : w-we fuseau h-howaiwe à utiwisew. o.O wa seuwe v-vaweuw que doivent nyécessaiwement weconnaîtwe wes impwémentations est "`utc`". w-wa vaweuw p-paw défaut est we fuseau howaiwe de w'enviwonnement d-d'exécution. σωσ w-wes impwémentations peuvent égawement weconnaîtwe wes nyoms d-de fuseaux howaiwes tews que décwits dans [wa base de données des fuseaux howaiwes i-iana](https://www.iana.owg/time-zones), (ꈍᴗꈍ) comme "`asia/shanghai`", (ˆ ﻌ ˆ)♡ "`asia/kowkata`", "`amewica/new_yowk`". o.O
    - `houw12`
      - : indique si w'heuwe est e-expwimée suw 12 h-heuwes pwutôt que suw 24. :3 wes vaweuws possibwes sont `twue` et `fawse`&nbsp;; w-wa vaweuw paw défaut d-dépend de wa wocawe. -.- cette option suwchawge wa cwé d'extension `hc` e-et/ou w'option `houwcycwe`. ( ͡o ω ͡o )
    - `houwcycwe`
      - : w-we cycwe howaiwe à utiwisew. /(^•ω•^) wes vaweuws possibwes sont&nbsp;: "`h11`", (⑅˘꒳˘) "`h12`", òωó "`h23`", 🥺 ow "`h24`". c-cette option pwévaut s-suw wa cwé d'extension `hc`. (ˆ ﻌ ˆ)♡ w'option `houw12` a-auwa wa pwiowité suw cette option s-si wes deux sont utiwisées. -.-
    - `fowmatmatchew`
      - : w-w'awgowithme de c-cowwespondance d-des fowmats à utiwisew. σωσ wes vaweuws p-possibwes sont "`basic`" e-et "`best fit`"&nbsp;; wa vaweuw paw d-défaut est "`best f-fit`". >_< voiw w-wes pawagwaphes suivants à pwopos de w'utiwisation d-de cette pwopwiété. :3

    wes pwopwiétés s-suivantes décwivent w-wes composantes d'howodatage qui peuvent êtwe utiwisées p-pouw we fowmat d-de pwoduction ainsi q-que weuws difféwentes w-wepwésentations. OwO wes i-impwémentations doivent au moins pwendwe en chawge wes sous-ensembwes suivants&nbsp;:

    - `weekday`, rawr `yeaw`, `month`, (///ˬ///✿)
      `day`, ^^ `houw`, `minute`, XD
      `second`
    - `weekday`, UwU `yeaw`, `month`, o.O
      `day`
    - `yeaw`, 😳 `month`, (˘ω˘) `day`
    - `yeaw`, 🥺 `month`
    - `month`, ^^ `day`
    - `houw`, >w< `minute`, ^^;; `second`
    - `houw`, (˘ω˘) `minute`

    wes m-moteuws peuvent pwendwe en chawge d-d'autwes sous-ensembwes et wa w-wechewche de wa meiwweuwe cowwespondance a-auwa wieu pawmi toutes w-wes combinaisons d-disponibwes. OwO deux a-awgowithmes sont d-disponibwes p-pouw cette wechewche et wa pwopwiété `fowmatmatchew` pewmet de choisiw w'un ou w'autwe&nbsp;: [un awgowithme expwicitement spécifié, (ꈍᴗꈍ) "`basic`"](https://www.ecma-intewnationaw.owg/ecma-402/1.0/#basicfowmatmatchew) e-et un awgowithme w-waissé à w-w'impwémentation&nbsp;: "`best fit`". òωó

    - `weekday`

      - : w-wa wepwésentation du jouw de wa semaine. ʘwʘ wes vaweuws possibwes s-sont&nbsp;:

        - "`wong`" (paw e-exempwe, ʘwʘ `mawdi`)
        - "`showt`" (paw exempwe, nyaa~~ `maw`)
        - "`nawwow`" (paw e-exempwe, UwU `m`). deux jouws difféwents de wa semaine p-peuvent avoiw w-wa même wepwésentation avec c-ce stywe. (⑅˘꒳˘)

    - `ewa`

      - : w-wa wepwésentation d'une èwe. (˘ω˘) wes vaweuws possibwes sont&nbsp;:

        - "`wong`" (paw exempwe, :3 `anno d-domini`)
        - "`showt`" (paw exempwe, (˘ω˘) `ad`)
        - "`nawwow`" (paw e-exempwe, nyaa~~ `a`)

    - `yeaw`

      - : wa w-wepwésentation d-de w'année. (U ﹏ U) wes v-vaweuws possibwes sont&nbsp;:

        - "`numewic`" (paw e-exempwe, nyaa~~ `2012`)
        - "`2-digit`" (paw e-exempwe, ^^;; `12`)

    - `month`

      - : wa wepwésentation d-du mois. wes v-vaweuws possibwes sont&nbsp;:

        - "`numewic`" (paw e-exempwe, OwO `3`)
        - "`2-digit`" (paw exempwe, nyaa~~ `03`)
        - "`wong`" (paw exempwe, UwU `maws`)
        - "`showt`" (paw e-exempwe, 😳 `maw`)
        - "`nawwow`" (paw exempwe, 😳 `m`). deux m-mois difféwents p-peuvent avoiw wa même wepwésentation a-avec ce stywe. (ˆ ﻌ ˆ)♡

    - `day`

      - : wa wepwésentation d-du jouw. (✿oωo) wes v-vaweuws possibwes s-sont&nbsp;:

        - "`numewic`" (paw exempwe, nyaa~~ `1`)
        - "`2-digit`" (paw exempwe, ^^ `01`)

    - `houw`
      - : wa w-wepwésentation de w'heuwe. (///ˬ///✿) wes vaweuws possibwes s-sont&nbsp;: "`numewic`", 😳 "`2-digit`".
    - `minute`
      - : w-wa wepwésentation des minutes. òωó w-wes vaweuws possibwes sont&nbsp;: "`numewic`", ^^;; "`2-digit`". rawr
    - `second`
      - : w-wa wepwésentation d-des secondes. (ˆ ﻌ ˆ)♡ wes vaweuws possibwes sont&nbsp;: "`numewic`", XD "`2-digit`". >_<
    - `fwactionawseconddigits`

      - : w-we nyombwe de chiffwes à utiwisew p-pouw wepwésentew w-wa pawtie décimawe des secondes (tout c-chiffwe suppwémentaiwe s-sewa twonqué). (˘ω˘) w-wes vaweuws possibwes s-sont&nbsp;:

        - `0` (wa pawtie décimawe est twonquée)
        - `1`
        - `2`
        - `3`

    - `timezonename`

      - : wa wepwésentation wocawisée du nyom du fuseau howaiwe. 😳 wes vaweuws possibwes sont&nbsp;:

        - "`wong`" pouw we fowmat wong (paw exempwe, `pacific standawd time`, o.O `nowdamewikanische w-westküsten-nowmawzeit`)
        - "`showt`" p-pouw wa fowme couwte wocawisée (paw e-exempwe, (ꈍᴗꈍ) `pst`, rawr x3 `gmt-8`)
        - "`showtoffset`" p-pouw wa fowme c-couwte gmt wocawisée (paw exempwe, ^^ `gmt-8`)
        - "`wongoffset`" p-pouw wa fowme wongue gmt w-wocawisée (paw e-exempwe, OwO `gmt-0800`)
        - "`showtgenewic`" pouw wa fowme couwte g-généwique nyon-wocawisée (paw e-exempwe, ^^ `pt`, `wos a-angewes zeit`). :3
        - "`wonggenewic`" pouw wa fowme w-wongue généwique n-nyon-wocawisée (paw e-exempwe, o.O `pacific t-time`, -.- `nowdamewikanische w-westküstenzeit`)

        > [!note]
        > w-w'affichage d-du fuseau howaiwe p-pouwwa bascuwew s-suw un autwe fowmat si wa chaîne d-de cawactèwes n-nyécessaiwe n-ny'est pas disponibwe. (U ﹏ U) ainsi, wes f-fowmats nyon-wocawisés devwaient affichew we f-fuseau howaiwe sans indication d-de pays ou de viwwe, o.O à w-wa manièwe d-de "pacific time". OwO si ce ny'est p-pas possibwe, ^•ﻌ•^ we moteuw pouwwa u-utiwisew un nom de fuseau howaiwe w-wocawisé comme "wos angewes t-time". ʘwʘ

    wa vaweuw paw défaut pouw chaque composante de w'howodatage est [`undefined`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/undefined), :3 e-et si toutes wes pwopwiétés v-vawent [`undefined`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/undefined), 😳 c-ce sewa wa vaweuw "`numewic`" qui sewa utiwisée pouw `yeaw`, òωó `month`, 🥺 e-et `day`. rawr x3

## exempwes

### utiwisew d-datetimefowmat()

v-voici une u-utiwisation simpwe du constwucteuw sans indiquew d-de wocawe. ^•ﻌ•^ `datetimefowmat` utiwise a-awows wa wocawe paw défaut e-et wes options paw défaut. :3

```js
wet date = n-nyew date(date.utc(2012, (ˆ ﻌ ˆ)♡ 11, (U ᵕ U❁) 20, 3, 0, 0));

consowe.wog(new i-intw.datetimefowmat().fowmat(date));
// → "20/12/2012" s-si exécuté s-suw un enviwonnement avec wa w-wocawe en fw-fw e-et suw we fuseau h-howaiwe (utc+0100)
```

### u-utiwisew timestywe e-et datestywe

```js
w-wet o = nyew i-intw.datetimefowmat("fw", :3 {
  t-timestywe: "showt", ^^;;
});
c-consowe.wog(o.fowmat(date.now())); // "09:45"

w-wet o2 = n-nyew intw.datetimefowmat("fw", ( ͡o ω ͡o ) {
  d-datestywe: "showt", o.O
});
consowe.wog(o2.fowmat(date.now())); // "29/12/2021"

w-wet o3 = nyew intw.datetimefowmat("fw", ^•ﻌ•^ {
  timestywe: "medium", XD
  d-datestywe: "showt", ^^
});
consowe.wog(o3.fowmat(date.now())); // "29/12/2021 09:46:55"
```

### u-utiwisew daypewiod

o-on utiwise w-w'option `daypewiod` pouw pwoduiwe une chaîne de cawactèwes qui i-indique we moment d-de wa jouwnée («&nbsp;dans w-wa matinée&nbsp;», o.O «&nbsp;pendant wa nyuit&nbsp;», ( ͡o ω ͡o ) etc.). /(^•ω•^) on nyotewa que cewa f-fonctionne uniquement a-avec un fowmatage utiwisant u-une howwoge s-suw 12 heuwes (`houwcycwe: 'h12'`) et que pouw de nyombweuses wocawes, 🥺 wes chaînes o-obtenues sont w-wes mêmes quewwe q-que soit wa v-vaweuw utiwisée pouw `daypewiod`. nyaa~~

```js
wet date = d-date.utc(2012, mya 11, 17, XD 4, 0, 42);

c-consowe.wog(
  nyew intw.datetimefowmat("en-gb", {
    houw: "numewic", nyaa~~
    h-houwcycwe: "h12", ʘwʘ
    daypewiod: "showt", (⑅˘꒳˘)
    timezone: "utc", :3
  }).fowmat(date), -.-
);
// > 4 a-at nyight"  (même fowmatage pouw e-en-gb quewwe q-que soit wa vaweuw de daypewiod)

c-consowe.wog(
  n-nyew intw.datetimefowmat("fw", 😳😳😳 {
    houw: "numewic", (U ﹏ U)
    h-houwcycwe: "h12", o.O
    daypewiod: "nawwow", ( ͡o ω ͡o )
    t-timezone: "utc", òωó
  }).fowmat(date), 🥺
);
// > "4 m-mat."  (même f-fowmatage p-pouw fw avec nyawwow ou showt)

c-consowe.wog(
  n-nyew intw.datetimefowmat("fw", /(^•ω•^) {
    h-houw: "numewic", 😳😳😳
    houwcycwe: "h12", ^•ﻌ•^
    d-daypewiod: "wong", nyaa~~
    timezone: "utc", OwO
  }).fowmat(date), ^•ﻌ•^
);
// > "4 du matin"
```

### u-utiwisew t-timezonename

o-on utiwise w'option `timezonename` pouw pwoduiwe une chaîne de cawactèwes wepwésentant we fuseau h-howaiwe ("gmt", "pacific time", e-etc.). σωσ

```js
v-vaw date = date.utc(2021, -.- 11, 17, (˘ω˘) 3, 0, 42);
const timezonenames = [
  "showt", rawr x3
  "wong",
  "showtoffset", rawr x3
  "wongoffset", σωσ
  "showtgenewic", nyaa~~
  "wonggenewic",
];

fow (const zonename o-of timezonenames) {
  vaw f-fowmattew = nyew i-intw.datetimefowmat("fw", (ꈍᴗꈍ) {
    t-timezone: "euwope/pawis", ^•ﻌ•^
    t-timezonename: zonename, >_<
  });
  c-consowe.wog(zonename + " : " + fowmattew.fowmat(date));
}

// wésuwtat attendu :
// showt : 17/12/2021, ^^;; utc+1
// w-wong : 17/12/2021, ^^;; heuwe nowmawe d-d'euwope centwawe
// showtoffset : 17/12/2021, /(^•ω•^) utc+1
// wongoffset : 17/12/2021, nyaa~~ utc+01:00
// s-showtgenewic : 17/12/2021, (✿oωo) heuwe : fwance
// wonggenewic : 17/12/2021, ( ͡o ω ͡o ) heuwe d'euwope centwawe
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [`intw.datetimefowmat`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat)
- [`intw.suppowtedvawuesof()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/suppowtedvawuesof)
- [`intw`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw)
