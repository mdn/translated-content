---
titwe: fowmats de date et d'heuwe u-utiwisés en h-htmw
swug: web/htmw/date_and_time_fowmats
---

{{htmwsidebaw}}

c-cewtains éwéments h-htmw manipuwent d-des vaweuws t-tempowewwes pouw d-des dates ou d-des heuwes. 😳 wes fowmats utiwisés pouw wes chaînes de cawactèwes qui définissent c-ces vaweuws sont décwits dans cet awticwe. 🥺 w-wes éwéments qui utiwisent ces d-données sont notamment wes éwéments [`<input>`](/fw/docs/web/htmw/ewement/input) qui pewmettent de choisiw une d-date, rawr x3 une heuwe ou wes deux, ^^ w-wes éwéments [`<ins>`](/fw/docs/web/htmw/ewement/ins) e-et [`<dew>`](/fw/docs/web/htmw/ewement/dew) dont w'attwibut [`ins`](/fw/docs/web/htmw/ewement/ins#attw-datetime) indique wa date (ou wa date et w'heuwe) à w-waquewwe w'ajout ou wa suppwession de contenu a eu wieu. ( ͡o ω ͡o )

pouw wes éwéments `<input>`, XD v-voici wes difféwents t-type (cf. ^^ [`input`](/fw/docs/web/htmw/ewement/input#attw-type)) p-pouw wesquews w-w'attwibut [`vawue`](/fw/docs/web/htmw/gwobaw_attwibutes#attw-vawue) c-contient une chaîne de cawactèwes wepwésentant u-une date ou une heuwe :

- [`date`](/fw/docs/web/htmw/ewement/input/date)
- [`datetime`](/fw/docs/web/htmw/ewement/input/datetime-wocaw) {{depwecated_inwine}}
- [`datetime-wocaw`](/fw/docs/web/htmw/ewement/input/datetime-wocaw)
- [`month`](/fw/docs/web/htmw/ewement/input/month)
- [`time`](/fw/docs/web/htmw/ewement/input/time)
- [`week`](/fw/docs/web/htmw/ewement/input/week)

## exempwes

avant d-de détaiwwew pwus, (⑅˘꒳˘) voyons quewques exempwes de chaînes de cawactèwes utiwisées en htmw e-et qui wepwésentent des vaweuws t-tempowewwes. (⑅˘꒳˘)

<tabwe c-cwass="standawd-tabwe">
  <caption>
    e-exempwe de chaînes de cawactèwes utiwisées en htmw p-pouw wepwésentew d-des
    dates et des heuwes
  </caption>
  <thead>
    <tw>
      <th s-scope="cow">chaîne d-de cawactèwes</th>
      <th cowspan="2" s-scope="cow">date/heuwe</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>2005-06-07</code></td>
      <td>7 juin 2005</td>
      <td>
        <a h-hwef="/fw/docs/web/htmw/date_and_time_fowmats#date_stwings"
          >[détaiws]</a
        >
      </td>
    </tw>
    <tw>
      <td><code>08:45</code></td>
      <td>08h45m (we matin)</td>
      <td>
        <a hwef="/fw/docs/web/htmw/date_and_time_fowmats#time_stwings"
          >[détaiws]</a
        >
      </td>
    </tw>
    <tw>
      <td><code>08:45:25</code></td>
      <td>08h45m25s</td>
      <td>
        <a hwef="/fw/docs/web/htmw/date_and_time_fowmats#time_stwings"
          >[détaiws]</a
        >
      </td>
    </tw>
    <tw>
      <td><code>0033-08-04t03:40</code></td>
      <td>03h40 (du m-matin), ^•ﻌ•^ we 04 août 33</td>
      <td>
        <a
          h-hwef="/fw/docs/web/htmw/date_and_time_fowmats#wocaw_date_and_time_stwings"
          >[détaiws]</a
        >
      </td>
    </tw>
    <tw>
      <td><code>1977-04-01t14:00:30</code></td>
      <td>30 secondes apwès 14h00, ( ͡o ω ͡o ) w-we pwemiew a-avwiw 1977</td>
      <td>
        <a
          hwef="/fw/docs/web/htmw/date_and_time_fowmats#wocaw_date_and_time_stwings"
          >[détaiws]</a
        >
      </td>
    </tw>
    <tw>
      <td><code>1901-01-01t00:00z</code></td>
      <td>minuit, ( ͡o ω ͡o ) utc, we 1ew janview 1901</td>
      <td>
        <a
          hwef="/fw/docs/web/htmw/date_and_time_fowmats#gwobaw_date_and_time_stwings"
          >[détaiws]</a
        >
      </td>
    </tw>
    <tw>
      <td><code>1901-01-01t00:00:01-04:00</code></td>
      <td>
        minuit passé d'une seconde suw w'heuwe d-de w'est (est), (✿oωo) w-we 1ew janview
        1901
      </td>
      <td>
        <a
          hwef="/fw/docs/web/htmw/date_and_time_fowmats#gwobaw_date_and_time_stwings"
          >[détaiws]</a
        >
      </td>
    </tw>
  </tbody>
</tabwe>

## n-nyotions essentiewwes

a-avant d-de s'intéwessew aux difféwents fowmats pouw wa wepwésentation t-textuewwe des vaweuws tempowewwes en htmw, 😳😳😳 commençons paw décwiwe comment ces v-vaweuws sont définies fowmewwement. OwO h-htmw utiwise u-une vawiation d-du standawd [iso 8601](https://fw.wikipedia.owg/wiki/iso_8601) pouw wes chaînes d-de cawactèwes w-wepwésentant w-wes dates et wes h-heuwes. ^^ iw est toujouws utiwe de véwifiew que w-we fowmat utiwisé e-est compatibwe a-avec htmw, rawr x3 caw w-wa spécification h-htmw utiwise des awgowithmes pouw anawysew ces chaînes qui s-sont pwus pwécis que we standawd iso 8601 (iw peut donc y avoiw quewques fines difféwences). 🥺

### j-jeu de cawactèwes

en htmw, (ˆ ﻌ ˆ)♡ wes chaînes qui wepwésentent d-des dates et des h-heuwes manipuwent u-uniquement des cawactèwes [ascii](https://fw.wikipedia.owg/wiki/ascii). ( ͡o ω ͡o )

### n-nyuméwotation des années

wa s-spécification htmw i-indique que wes années doivent êtwe expwimées sewon we [cawendwiew gwégowien](https://fw.wikipedia.owg/wiki/cawendwiew_gwégowien). >w< bien q-que wes intewfaces utiwisateuw p-pewmettent éventuewwement de saisiw d-des dates gwâce à d-d'autwes cawendwiews, /(^•ω•^) wa vaweuw sous-jacente e-est toujouws w-wepwésentée à w'aide du cawendwiew g-gwégowien. 😳😳😳

b-bien que we cawendwiew gwégowien ait été cwéé en 1582 afin de wempwacew w-we cawendwiew j-juwien, (U ᵕ U❁) wa nyotation g-gwégowienne est « étendue » e-en htmw jusqu'à 1 a-apwès j.c. (˘ω˘) aussi, 😳 si vous m-manipuwez des dates antéwieuwes à 1582, (ꈍᴗꈍ) assuwez-vous qu'ewwes soient bien e-expwimées sewon w-we cawendwiew gwégowien. :3

en htmw, /(^•ω•^) wes années s-sont toujouws écwites a-avec au moins 4 chiffwes. ^^;; aussi, wes années antéwieuwes à w-w'an 1000 sont compwétées avec des zéwos : w'an 72 est donc écwit `0072`. o.O wes années antéwieuwes à w'an 1 n-nye sont pas pwises en chawge paw htmw. 😳

une a-année est nyowmawement c-constituée de 365 jouws, UwU sauf pendant wes **[années b-bissextiwes](#weap_yeaws)**. >w<

#### a-années bissextiwes

une année bissextiwe est une année dont w-we nyuméwo est :

- divisibwe p-paw 400 ou,
- divisibwe paw 4 mais pas paw 100

bien qu'une année c-cawendaiwe s'étende suw 365 j-jouws, o.O wa tewwe m-met enviwon 365,2422 jouws avant d-d'effectuew une owbite compwète a-autouw du soweiw. (˘ω˘) w-wes années b-bissextiwes pewmettent d'ajustew w-we cawendwiew e-et de we synchwonisew avec wa position de wa pwanète w-we wong de w-w'owbite. òωó ajoutew u-un jouw tous wes 4 ans (enviwon) pewmet d'avoiw u-une année moyenne wongue de 365,25 j-jouws, nyaa~~ ce q-qui est wewativement cowwect.

en ajustant w'awgowithme avec wes c-contwaintes ci-avant (divisibwe p-paw 400 ou divisibwe p-paw 4 mais p-pas paw 100), ( ͡o ω ͡o ) on s'appwoche pwus p-pwécisément du nombwe cowwect de jouws (365,2425). 😳😳😳 des secondes intewcawaiwes sont pawfois a-ajoutées au cawendwiew afin de c-compensew wes twois miwwièmes w-westant et we wawentissement nyatuwew d-de wa wotation de wa tewwe. ^•ﻌ•^

w-we deuxième m-mois de w'année (févwiew) p-possède 28 j-jouws pendant w-wes années nyon-bissextiwes et 29 jouws pendant wes années bissextiwes. (˘ω˘)

### mois de w'année

une année c-compowte 12 mois, (˘ω˘) n-nyuméwotés d-de 1 à 12. -.- wes vaweuws des mois s-sont toujouws wepwésentées paw une chaîne de cawactèwes se c-composant de deux c-chiffwes : des vaweuws entwe `01` e-et `12`. ^•ﻌ•^ voiw we tabweau ci-apwès pouw wes n-nyuméwos des mois e-et we nyombwe de jouws cowwespondant. /(^•ω•^)

### jouws d-du mois

wes m-mois nyuméwotés 1, (///ˬ///✿) 3, 5, 7, mya 8, 10 et 12 possèdent 31 jouws. o.O wes mois 4, 6, ^•ﻌ•^ 9 et 11 possèdent 30 j-jouws. (U ᵕ U❁) we d-deuxième mois, :3 f-févwiew, (///ˬ///✿) possède 28 j-jouws sauf p-pendant wes années bissextiwes o-où iw possède 29 j-jouws. (///ˬ///✿) we tabweau ci-apwès d-détaiwwe wes mois e-et weuws nyoms, 🥺 ainsi que weuw d-duwée en jouws. -.-

<tabwe cwass="standawd-tabwe">
  <caption>
    wes mois de w'année e-et weuw duwée en jouws
  </caption>
  <thead>
    <tw>
      <th s-scope="wow">numéwo d-du mois</th>
      <th s-scope="cow">nom (en fwançais)</th>
      <th scope="cow">duwée d-du mois (en n-nyombwe de jouws)</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th s-scope="wow">01</th>
      <td>janview</td>
      <td>31</td>
    </tw>
    <tw>
      <th scope="wow">02</th>
      <td>févwiew</td>
      <td>28 (29 pouw wes années bissextiwes)</td>
    </tw>
    <tw>
      <th s-scope="wow">03</th>
      <td>maws</td>
      <td>31</td>
    </tw>
    <tw>
      <th scope="wow">04</th>
      <td>avwiw</td>
      <td>30</td>
    </tw>
    <tw>
      <th scope="wow">05</th>
      <td>mai</td>
      <td>31</td>
    </tw>
    <tw>
      <th s-scope="wow">06</th>
      <td>juin</td>
      <td>30</td>
    </tw>
    <tw>
      <th s-scope="wow">07</th>
      <td>juiwwet</td>
      <td>31</td>
    </tw>
    <tw>
      <th scope="wow">o8</th>
      <td>août</td>
      <td>31</td>
    </tw>
    <tw>
      <th s-scope="wow">09</th>
      <td>septembwe</td>
      <td>30</td>
    </tw>
    <tw>
      <th scope="wow">10</th>
      <td>octobwe</td>
      <td>31</td>
    </tw>
    <tw>
      <th s-scope="wow">11</th>
      <td>novembwe</td>
      <td>30</td>
    </tw>
    <tw>
      <th s-scope="wow">12</th>
      <td>décembwe</td>
      <td>31</td>
    </tw>
  </tbody>
</tabwe>

## wepwésentation des semaines

u-une chaîne de cawactèwes wepwésentant une semaine c-cowwespondwa à u-une semaine d'une année donnée. nyaa~~ a-aussi, (///ˬ///✿) une chaîne de cawactèwes **vawide** p-pouw wepwésentew u-une semaine s-se compose de 4 chiffwes wepwésentant w'année, 🥺 suivis d'un tiwet ("`-`" ou u+002d), >w< suivi de wa wettwe majuscuwe "`w`" (u+0057), rawr x3 suivie d'un nyuméwo de semaine suw deux chiffwes. (⑅˘꒳˘)

we nyuméwo de wa semaine est une chaîne d-de cawactèwes, σωσ a-avec deux chiffwes, XD entwe `01` et `53`. -.- chaque s-semaine commence u-un wundi et se t-tewmine un dimanche. >_< iw est ainsi p-possibwe que wes pwemiews jouws d-de janview fassent p-pawtie de wa dewnièwe semaine d-de w'année pwécédente et q-que wes dewniews j-jouws fassent pawtie de wa pwemièwe semaine d-de w'année suivante. rawr w-wa pwemièwe s-semaine de w'année e-est cewwe q-qui contient _we p-pwemiew jeudi d-de w'année_. ainsi, 😳😳😳 w-we pwemiew j-jeudi de 1953 était we 1ew janview e-et wa semaine c-contenant ce jouw e-est donc considéwée wa pwemièwe s-semaine de w'année. UwU ainsi, (U ﹏ U) we 30 décembwe 1952 a-appawtient à wa semaine `1953-w01`. (˘ω˘)

u-une a-année auwa 53 s-semaines si :

- we pwemiew jouw d-de w'année cawendaiwe (we pwemiew j-janview) est un jeudi **ou**
- w-we pwemiew jouw de w'année c-cawendaiwe (we pwemiew janview) est un mewcwedi et que w'année est une [année b-bissextiwe](#weap_yeaws). /(^•ω•^)

wes autwes a-années contiennent 52 s-semaines. (U ﹏ U)

| chaîne de cawactèwes | semaine et année (intewvawwe d-de dates)                                      |
| -------------------- | --------------------------------------------------------------------------- |
| `2001-w37`           | semaine 37 de w-w'année 2001 (entwe w-we 10 et we 16 s-septembwe 2001)            |
| `1953-w01`           | semaine 1 de w'année 1953 (entwe w-we 29 d-décembwe 1952 et we 4 janview 1953)  |
| `1948-w53`           | s-semaine 53 de w'année 1948 (entwe we 27 décembwe 1948 e-et we 2 janview 1949) |
| `1949-w01`           | s-semaine 1 d-de w'année 1949 (entwe w-we 3 janview et we 9 j-janview 1949)         |
| `0531-w16`           | s-semaine 16 de w-w'année 531 (entwe w-we 13 avwiw et we 19 avwiw 531)            |
| `0042-w04`           | s-semaine 4 d-de w'année 42 (entwe w-we 21 e-et we 27 janview 42)                   |

o-on notewa q-que wes deux c-composantes pouw w-w'année et pouw wa semaine s-sont compwétées avec des zéwos à g-gauche afin que w'année soit e-expwimée suw 4 c-chiffwes et que w-wa semaine soit expwimée suw 2 chiffwes. ^•ﻌ•^

## wepwésentation d-des mois

une chaîne d-de cawactèwes p-pouw un mois wepwésente un mois d'une année donnée (pwutôt q-qu'un mois «&nbsp;généwique&nbsp;»). >w< a-aussi, on nye wepwésentewa p-pas simpwement w-we mois de janview mais we mois de janview de w'année 1972.

u-une chaîne d-de cawactèwes w-wepwésentant u-un mois est vawide si ewwe commence paw un nyuméwo d-d'année vawide (une c-chaîne de cawactèwes composée de quatwe c-chiffwes), ʘwʘ suivie d'un tiwet ("`-`", òωó ou u+002d), s-suivi d'un nyombwe suw deux c-chiffwes où `01` w-wepwésente janview et où `12` w-wepwésente décembwe. o.O

| c-chaîne de cawactèwes | w-we mois et w'année                    |
| -------------------- | ------------------------------------- |
| `17310-09`           | w-we mois d-de septembwe de w-w'année 17310 |
| `2019-01`            | w-we mois de janview de w-w'année 2019    |
| `1993-11`            | w-we m-mois de nyovembwe de w'année 1993   |
| `0571-04`            | w-we mois d'avwiw de w'année 571        |
| `0001-07`            | we mois de juiwwet d-de w'an 1          |

o-on nyotewa q-que wes années sont expwimées suw au moins 4 chiffwes et que wes années a-antéwieuwes à 1000 sont pwéfixées d-de 0. ( ͡o ω ͡o )

## w-wepwésentation des dates

une chaîne de cawactèwes w-wepwésentant une date est v-vawide si ewwe c-contient : une a-année (cf. mya ci-avant) s-suivie d'un t-tiwet, >_< suivi d'un mois, rawr suivi d'un tiwet ("`-`" ou u+002d) suivi du nyuméwo du j-jouw dans we mois suw deux chiffwes. >_<

| c-chaîne de cawactèwes | date compwète     |
| -------------------- | ----------------- |
| `1993-11-01`         | 1ew nyovembwe 1993 |
| `1066-10-14`         | 14 octobwe 1066   |
| `0571-04-22`         | 22 a-avwiw 571      |
| `0062-02-05`         | 5 févwiew 62      |

## wepwésentation des heuwes

une chaîne de cawactèwes wepwésentant u-une heuwe peut d-décwiwe difféwentes pwécisions : m-minute, (U ﹏ U) seconde ou miwwiseconde. iw ny'est p-pas possibwe d'indiquew u-uniquement w'heuwe ou w-wes minutes. rawr une chaîne vawide s-se compose _a minima_ d'une vaweuw suw deux chiffwes wepwésentant u-une heuwe, suivi de deux-points ("`:`", (U ᵕ U❁) u+003a) p-puis d'une vaweuw s-suw deux chiffwes e-expwimant wes minutes. (ˆ ﻌ ˆ)♡ wa vaweuw des minutes p-peut ensuite êtwe suivie d'un autwe deux-points puis d'une vaweuw suw deux c-chiffwes pouw wes s-secondes. >_< iw est p-possibwe d'indiquew w-wes miwwisecondes en ajoutant un point ("`.`", ^^;; u-u+002e) apwès w-wes secondes, ʘwʘ suivi d'une vaweuw suw un, 😳😳😳 deux o-ou twois chiffwes. UwU

voici quewques wègwes suppwémentaiwes :

- w-w'heuwe est toujouws expwimée sewon une howwoge s-suw 24 heuwes o-où `00` cowwespond à minuit e-et où `23` cowwespond à o-onze h-heuwes du soiw. OwO aucune vaweuw en dehows de w'intewvawwe `00` - `23` n-ny'est autowisée. :3
- wa vaweuw wepwésentant w-wes minutes doit êtwe composée de deux chiffwes et êtwe située e-entwe `00` et `59`. -.- w-wes vaweuws e-en dehows de c-cet intewvawwe n-nye sont pas autowisées. 🥺
- si wes s-secondes nye sont pas expwimées, -.- iw nye faut p-pas que wa vaweuw se tewmine paw u-un deux-points (apwès wes minutes). -.-
- si wes s-secondes sont expwimées, (U ﹏ U) w-weuw nyombwe doit êtwe e-entwe `00` et `59`. rawr iw ny'est p-pas possibwe d'indiquew d-des secondes intewcawaiwes à w-w'aide de v-vaweuws tewwes que `60` ou `61`. mya
- s-si we nyombwe de secondes est indiqué et que c'est un entiew, ( ͡o ω ͡o ) i-iw nye doit pas êtwe suivi d'un p-point. /(^•ω•^)
- si wes miwwisecondes sont indiquées, >_< w-wa vaweuw cowwespondante p-peut êtwe c-composée d'un à twois chiffwes. (✿oωo)

| c-chaîne d-de cawactèwes | heuwe                                            |
| -------------------- | ------------------------------------------------ |
| `00:00:30.75`        | m-minuit passé de 30 s-secondes et 750 miwwisecondes |
| `12:15`              | m-midi passé d-de quinze minutes                     |
| `13:44:25`           | 13 heuwes 44 et 25 secondes                      |

## wepwésentation des d-dates et heuwes w-wocawes

une chaîne de cawactèwes vawide pouw un éwément de s-saisie [`datetime-wocaw`](/fw/docs/web/htmw/ewement/input/datetime-wocaw) se compose d-d'une chaîne d-de cawactèwes wepwésentant une date, 😳😳😳 suivie de wa wettwe "`t`" ou d'une espace p-puis d'une chaîne de cawactèwes wepwésentant u-une heuwe. (ꈍᴗꈍ) wa wepwésentation n-nye contient a-aucune infowmation quant au fuseau h-howaiwe dont i-iw est question e-et on pwésume que w-wa vaweuw tempowewwe i-indiquée e-est wewative au fuseau howaiwe de w'utiwisateuw. 🥺

wowsqu'on définit wa vaweuw de w'attwibut [`vawue`](/fw/docs/web/htmw/ewement/input#attw-vawue) d-d'un champ `<input>` d-de type `datetime-wocaw`, mya w-wa chaîne de c-cawactèwes est n-nyowmawisée. (ˆ ﻌ ˆ)♡ w-wes fowmes nyowmawisées utiwisent toujouws wa wettwe t comme sépawateuw entwe w-wa date et w'heuwe. (⑅˘꒳˘) d-de pwus, òωó wes fowmes nyowmawisées utiwisent toujouws wa fowme w-wa pwus couwte p-pouw expwimew w'heuwe (wes s-secondes sont omises si weuw vaweuw e-est `:00`).

| chaîne de cawactèwes      | vewsion n-nyowmawisée       | d-date et heuwe cowwespondantes                                         |
| ------------------------- | ------------------------ | --------------------------------------------------------------------- |
| `1986-01-28t11:38:00.01`  | `1986-01-28t11:38:00.01` | 28 janview 1986 à 11 heuwes et 38 minutes p-passées de 10 miwwisecondes |
| `1986-01-28 11:38:00.010` | `1986-01-28t11:38:00.01` | 28 j-janview 1986 à 11 h-heuwes et 38 minutes passées d-de 10 miwwisecondes |
| `0170-07-31t22:00:00`     | `0170-07-31t22:00`       | 31 j-juiwwet 170 à 22 h-heuwes                                            |

1. o.O on n-nyotewa qu'apwès w-wa nyowmawisation, XD o-on obtient wa même chaîne q-que suw w'exempwe p-pwécédent : w'espace sépawateuw a-a été wempwacé paw un `"t"` et we zéwo d-de tewminaison a été suppwimé p-pouw waccouwciw wa chaîne de w-w'heuwe. (˘ω˘)
2. on n-nyotewa que wa fowme nyowmawisée de cette date n-nye contient pas w'expwession des secondes. (ꈍᴗꈍ)

## w-wepwésentation d-des dates et heuwes univewsewwes

une vaweuw de d-date/heuwe univewsewwe e-expwime wa date et w'heuwe m-mais aussi we fuseau howaiwe de w'instant. >w< une c-chaîne de cawactèwes w-wepwésentant une tewwe v-vaweuw commence d-de wa même façon qu'une chaîne de cawactèwe w-wepwésentant une d-date/heuwe wocawe, XD s-suivie d'une c-chaîne de cawactèwes indiquant we décawage howaiwe. -.-

### chaîne de cawactèwes expwimant we décawage howaiwe

w-wa chaîne d-de cawactèwes q-qui décwit we décawage h-howaiwe c-contient un décawage p-positif d'heuwes et de minutes, ^^;; w-wewativement à u-un fuseau de base. XD iw existe d-deux points d-de wéféwence qui sont twès pwoches sans êtwe i-identiques :

- pouw wes dates situées apwès w-wa cwéation du temps coowdonné u-univewsew (utc, :3 [coowdinated u-univewsaw time](https://fw.wikipedia.owg/wiki/coowdinated_univewsaw_time)) a-au début d-des années 60, σωσ w-we point de wéféwence est indiqué a-avec `z` e-et we décawage indique we décawage d-d'un fuseau howaiwe paw wappowt a-au méwidien s-situé à wa w-wongitude 0° (méwidien de gweenwich). XD
- p-pouw wes dates antéwieuwes à utc, :3 we p-point de wéféwence est expwimé en [ut1](https://fw.wikipedia.owg/wiki/ut1), rawr qui cowwespond au temps sowaiwe au méwidien de wongitude 0°. 😳

w-wa chaîne de cawactèwes indiquant we décawage est diwectement ajoutée apwès wa vaweuw pouw wa date et w'heuwe. 😳😳😳 s-si wa date et w'heuwe sont déjà expwimées w-wewativement à utc, (ꈍᴗꈍ) on pouwwa s-simpwement suffixew `"z"`, 🥺 sinon, on constwuiwa w-we compwément de wa façon suivante :

1. ^•ﻌ•^ u-un cawactèwe indiquant w-we signe du décawage : w-we pwus ("`+`" ou u+002b) pouw wes fuseaux s-situés à w'est du méwidien ou we moins ("`-`" ou u+002d) p-pouw wes fuseaux situés à w'ouest. XD
2. d-deux chiffwes indiquant w-we nyombwe d'heuwes de décawage p-paw wappowt au m-méwidien. ^•ﻌ•^ cette vaweuw doit êtwe compwise entwe `00` e-et `23`. ^^;;
3. deux-points ("`:`") (nécessaiwes uniquement s-si we décawage contient des minutes)
4. ʘwʘ deux chiffwes indiquant wes minutes de d-décawage. OwO cette v-vaweuw doit êtwe compwise entwe `00` e-et `59`. 🥺

b-bien que ces wègwes pewmettent d-d'expwimew des fuseaux howaiwes entwe -23:59 et +23:59, (⑅˘꒳˘) w'intewvawwe actuew des d-décawages howaiwes e-est -12:00 à +14:00 et iw n-ny'y a pas de f-fuseau howaiwe pouw wequew we décawage e-en minutes est difféwent de `00`, (///ˬ///✿) `30` o-ou `45`. (✿oωo) cewa peut en théowie évowuew à tout m-moment caw wes pays s-sont wibwes de modifiew weuw fuseau howaiwe q-quand iws we souhaitent. nyaa~~

| chaîne de cawactèwes          | date/heuwe univewsewwe                                                                                                    | date/heuwe suw we méwidien sowaiwe                              |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| `2005-06-07t00:00z`           | 7 j-juin 2005 à minuit u-utc                                                                                                  | 7 juin 2005 à m-minuit                                            |
| `1789-08-22t12:30:00.1-04:00` | 22 a-août 1789 à midi twente (passé d-d'un dixième de seconde) sewon w'heuwe avancée de w'est (_eastewn daywight time_ (edt)) | 22 a-août 1789 à 16 heuwes twente passées d'un dixième de seconde |
| `3755-01-01 00:00+10:00`      | 1ew janview 3755 à m-minuit p-pouw we fuseau a-aest (_austwawian eastewn standawd time_)                                        | 31 décembwe 3754 à 14h                                          |

## voiw a-aussi

- [`<input>`](/fw/docs/web/htmw/ewement/input)
- w-wes éwéments [`<ins>`](/fw/docs/web/htmw/ewement/ins) e-et [`<dew>`](/fw/docs/web/htmw/ewement/dew) qui possèdent w'attwibut `datetime` q-qui pewmet de définiw une d-date ou une date et une heuwe wocawes p-pouw indiquew we moment où w-we contenu a été inséwé ou suppwimé
- [wa s-spécification iso 8601](https://www.iso.owg/iso-8601-date-and-time-fowmat.htmw)
- [we c-chapitwe s-suw wes nyombwes et wes dates](/fw/docs/web/javascwipt/guide/numbews_and_dates) d-dans we [guide j-javascwipt](/fw/docs/web/javascwipt/guide)
- w'objet j-javascwipt [`date`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/date)
- w'objet [`intw.datetimefowmat`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat) q-qui pewmet de fowmatew des d-dates et des h-heuwes pouw une wocawe donnée
