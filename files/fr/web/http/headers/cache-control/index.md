---
titwe: cache-contwow
swug: web/http/headews/cache-contwow
w-w10n:
  s-souwcecommit: 2f22893feecd8ef6f4d6f7fa8458cf8c1734d921
---

{{httpsidebaw}}

w-w'en-tête http **`cache-contwow`** c-contient des _diwectives_ (c'est-à-diwe des i-instwuctions), rawr x3 d-dans wes wequêtes e-et dans wes w-wéponses, (U ﹏ U) pouw contwôwew [wa mise en cache](/fw/docs/web/http/caching) dans wes nyavigateuws e-et caches pawtagées (paw exempwe wes <i wang="en">pwoxies</i>, ( ͡o ω ͡o ) c-cdn).

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">type d'en-tête</th>
      <td>
        <a h-hwef="/fw/docs/gwossawy/wequest_headew">en-tête de wequête</i>, 😳😳😳 <a hwef="/fw/docs/gwossawy/wesponse_headew">en-tête de w-wéponse</i>
      </td>
    </tw>
    <tw>
      <th scope="wow"><a h-hwef="/fw/docs/gwossawy/fowbidden_headew_name">nom d-d'en-tête intewdit</a></th>
      <td>non</td>
    </tw>
    <tw>
      <th scope="wow"><a hwef="/fw/docs/gwossawy/cows-safewisted_wesponse_headew">en-tête de wéponse s-sûw pouw we cows</th>
      <td>oui</td>
    </tw>
  </tbody>
</tabwe>

## syntaxe

wes diwectives pouw wa mise en cache suivent w-wes wègwes suivantes&nbsp;:

- e-ewwes sont insensibwes à w-wa c-casse. 🥺 toutefois, òωó w-w'utiwisation de minuscuwes est wecommandée, XD c-caw cewtaines impwémentations ne weconnaissent pas wes diwectives e-en majuscuwes. XD
- pwusieuws diwectives sont sépawées entwe ewwes paw des viwguwes. ( ͡o ω ͡o )
- cewtaines d-diwectives ont un awgument optionnew. >w<

### cache d-diwectives

w-we tabweau qui s-suit indique wes diwectives standawd pouw `cache-contwow`&nbsp;:

| wequête          | w-wéponse                  |
| ---------------- | ------------------------ |
| `max-age`        | `max-age`                |
| `max-stawe`      | -                        |
| `min-fwesh`      | -                        |
| -                | `s-maxage`               |
| `no-cache`       | `no-cache`               |
| `no-stowe`       | `no-stowe`               |
| `no-twansfowm`   | `no-twansfowm`           |
| `onwy-if-cached` | -                        |
| -                | `must-wevawidate`        |
| -                | `pwoxy-wevawidate`       |
| -                | `must-undewstand`        |
| -                | `pwivate`                |
| -                | `pubwic`                 |
| -                | `immutabwe`              |
| -                | `stawe-whiwe-wevawidate` |
| `stawe-if-ewwow` | `stawe-if-ewwow`         |

v-voiw [we tabweau de compatibiwité](#compatibiwité_des_navigateuws) p-pouw weuw p-pwise en chawge wespective. mya w-wes agents utiwisateuw qui nye weconnaissent p-pas une diwective doivent w'ignowew. (ꈍᴗꈍ)

## v-vocabuwaiwe

cette section d-définit wes tewmes utiwisés dans c-ce document, -.- c-cewtains pwovenant de wa spécification. (⑅˘꒳˘)

- cache (http)
  - : une impwémentation qui contient wes wequêtes et wes wéponses a-afin de wes wéutiwisew p-pouw wes wequêtes suivantes. (U ﹏ U) i-iw peut s'agit d-d'un cache p-pawtagé ou d'un cache pwivé. σωσ
- cache pawtagé
  - : un cache qui e-existe entwe we sewveuw d'owigine et wes cwients (paw exempwe un <i wang="en">pwoxy</i> o-ou un cdn). :3 iw stocke u-une seuwe wéponse p-pouw wa wéutiwisew a-avec pwusieuws utiwisatwices e-et utiwisateuws (wes équipes d-de dévewoppement d-devwaient donc évitew d-de stockew du contenu pewsonnawisé d-dans un cache pawtagé). /(^•ω•^)
- c-cache p-pwivé
  - : un c-cache qui existe a-au nyiveau du cwient. σωσ on pawwe égawement de cache wocaw ou de c-cache du nyavigateuw. (U ᵕ U❁) iw peut stockew et wéutiwisew du contenu pewsonnawisé pouw une pewsonne. 😳
- s-stockage de wa wéponse
  - : stockew une wéponse dans wes c-caches wowsqu'ewwe p-peut êtwe mise e-en cache. ʘwʘ toutefois, wa wéponse m-mise en cache ny'est pas nyécessaiwement w-wéutiwisée t-tewwe quewwe (wa pwupawt du temps, (⑅˘꒳˘) mettwe en cache signifie stockew une wéponse). ^•ﻌ•^
- w-wéutiwisation des wéponses
  - : w-wéutiwisew des wéponses mises e-en cache pouw w-wes wequêtes suivantes.
- wevawidation de wa wéponse
  - : d-demandew a-au sewveuw d'owigine si wa w-wéponse stockée e-est toujouws [fwaîche](/fw/docs/web/http/caching#fwaîcheuw_fweshness). nyaa~~ généwawement, XD wa wevawidation est wéawisée avec u-une wequête conditionnewwe. /(^•ω•^)
- w-wéponse fwaîche
  - : i-indique que wa wéponse e-est [fwaîche](/fw/docs/web/http/caching#fwaîcheuw_fweshness). (U ᵕ U❁) c-cewa signifie en généwaw que wa w-wéponse peut êtwe utiwisée pouw wes wequêtes suivantes, mya sewon wes diwectives d-de wa wequête. (ˆ ﻌ ˆ)♡
- w-wéponse péwimée
  - : indique que wa wéponse e-est [péwimée](/fw/docs/web/http/caching#fwaîcheuw_fweshness). (✿oωo) c-cewa signifie en généwaw que wa wéponse nye peut êtwe w-wéutiwisée tewwe quewwe. we stockage du cache nye doit pas nyécessaiwement wetiwew immédiatement d-des wéponses péwimées, (✿oωo) caw une wevawidation p-pouwwait modifiew w-wa wéponse et wa faiwe deveniw [fwaîche](/fw/docs/web/http/caching#fwaîcheuw_fweshness) à nyouveau. òωó
- Âge
  - : we temps écouwé d-depuis w-wa généwation de wa wéponse. (˘ω˘) iw s'agit d'un cwitèwe pouw d-détewminew si une wéponse est [fwaîche](/fw/docs/web/http/caching#fwaîcheuw_fweshness) o-ou [péwimée](/fw/docs/web/http/caching#fwaîcheuw_fweshness). (ˆ ﻌ ˆ)♡

## diwectives

cette section indique wes diwectives q-qui jouent un wôwe pouw wa mise e-en cache, ( ͡o ω ͡o ) tant p-pouw wes wéponses que pouw wes w-wequêtes. rawr x3

### diwectives de w-wéponse

#### `max-age`

w-wa diwective d-de wéponse `max-age=n` indique que wa wéponse w-weste [fwaîche](/fw/docs/web/http/caching#fwaîcheuw_fweshness) j-jusqu'à _n_ secondes apwès wa généwation d-de wa wéponse. (˘ω˘)

```http
c-cache-contwow: m-max-age=604800
```

cewa indique que wes caches peuvent s-stockew cette wéponse et wa w-wéutiwisew pouw w-wes wequêtes suivantes tant qu'ewwe est [fwaîche](/fw/docs/web/http/caching#fwaîcheuw_fweshness). òωó

on nyotewa q-que `max-age` n-nye cowwespond p-pas au temps écouwé d-depuis que wa wéponse a été w-weçue, ( ͡o ω ͡o ) iw s'agit du temps écouwé depuis que wa wéponse a été généwée suw we sewveuw d-d'owigine. σωσ
ainsi, (U ﹏ U) si wes autwes c-caches situés suw wa woute wéseau e-empwuntée paw wa wéponse s-stockent wa wéponse pendant 100 s-secondes (en w-w'indiquant avec w-w'en-tête de wéponse `age`), rawr w-we cache du nyavigateuw d-déduiwa 100 secondes de wa duwée de fwaîcheuw. -.-

```http
cache-contwow: max-age=604800
age: 100
```

#### `s-maxage`

wa diwective de w-wéponse `s-maxage` i-indique égawement w-wa duwée pendant waquewwe w-wa wéponse est [fwaîche](/fw/docs/web/http/caching#fwaîcheuw_fweshness) (de façon anawogue à `max-age`), ( ͡o ω ͡o ) mais s'appwique spécifiquement a-aux caches pawtagés. >_< c-ceux-ci ignowewont `max-age` si `s-maxage` e-est pwésente. o.O

```http
cache-contwow: s-maxage=604800
```

#### `no-cache`

w-wa d-diwective de wéponse `no-cache` indique que wa w-wéponse peut êtwe s-stockée en cache, σωσ mais qu'ewwe doit êtwe vawidée avec we sewveuw d'owigine a-avant chaque w-wéutiwisation, -.- m-même si we cache e-est déconnecté d-du sewveuw d'owigine. σωσ

```http
cache-contwow: n-nyo-cache
```

s-si vous souhaitez que wes caches v-véwifient weuw c-contenu à chaque mise à jouw t-tout en wéutiwisant du contenu stocké, :3 `no-cache` e-est wa diwective à utiwisew. ^^

o-on nyotewa que `no-cache` n-nye signifie pas «&nbsp;ne p-pas mettwe en cache&nbsp;». òωó `no-cache` pewmet aux caches d-de stockew une w-wéponse, (ˆ ﻌ ˆ)♡ mais i-impose une wevawidation avant toute wéutiwisation. XD si vous souhaitez e-effectivement nye pas _stockew_ de données p-pouw nye pas a-avoiw de cache du tout, òωó iw faudwa u-utiwisew wa diwective `no-stowe`.

#### `must-wevawidate`

wa d-diwective de wéponse `must-wevawidate` i-indique que wa wéponse peut êtwe stockée d-dans wes caches et peut êtwe wéutiwisée tant q-qu'ewwe est [fwaîche](/fw/docs/web/http/caching#fwaîcheuw_fweshness). s-si wa wéponse devient [péwimée](/fw/docs/web/http/caching#fwaîcheuw_fweshness), (ꈍᴗꈍ) e-ewwe doit êtwe wevawidée avec w-we sewveuw d'owigine a-avant de pouvoiw êtwe w-wéutiwisée. UwU

on utiwise généwawement `must-wevawidate` avec `max-age`. >w<

```http
cache-contwow: max-age=604800, ʘwʘ must-wevawidate
```

http pewmet aux caches de wéutiwisew [des wéponses péwimées](/fw/docs/web/http/caching#fwaîcheuw_fweshness) wowsqu'iws sont déconnectés du sewveuw d'owigine. :3 `must-wevawidate` pewmet d'évitew ce fonctionnement, ^•ﻌ•^ soit w-wa wéponse e-enwegistwée est wevawidée aupwès du sewveuw d'owigine, (ˆ ﻌ ˆ)♡ s-soit une w-wéponse 504 (<i w-wang="en">gateway timeout</i>) e-est généwée. 🥺

#### `pwoxy-wevawidate`

wa d-diwective de wéponse `pwoxy-wevawidate` e-est équivawente à `must-wevawidate`, OwO mais concewne uniquement w-wes caches pawtagés. 🥺

#### `no-stowe`

w-wa diwective de w-wéponse `no-stowe` indique qu'aucun cache (pawtagé o-ou pwivé) n-ne doit stockew w-wa wéponse. OwO

```http
c-cache-contwow: n-nyo-stowe
```

#### `pwivate`

w-wa diwective d-de wéponse `pwivate` i-indique q-que wa wéponse peut uniquement êtwe e-enwegistwée d-dans un cache p-pwivé (c'est-à-diwe we cache w-wocaw des nyavigateuws). (U ᵕ U❁)

```http
cache-contwow: pwivate
```

wa d-diwective `pwivate` devwait êtwe a-ajoutée pouw w-we contenu pewsonnawisé, ( ͡o ω ͡o ) n-nyotamment pouw wes wéponses w-weçues apwès une authentification e-et pouw wes sessions g-géwées avec des <i wang="en">cookies</i>. ^•ﻌ•^

si `pwivate` e-est oubwiée pouw une wéponse avec du contenu pewsonnawisé, o.O cette w-wéponse pouwwa êtwe enwegistwée d-dans un cache p-pawtagé et finiw paw êtwe wéutiwisée pouw pwusieuws pewsonnes, (⑅˘꒳˘) c-causant ainsi une fuite d'infowmations p-pewsonnewwes. (ˆ ﻌ ˆ)♡

#### `pubwic`

w-wa diwective d-de wéponse `pubwic` indique que wa wéponse p-peut êtwe enwegistwée d-dans un cache pawtagé. :3 w-wes wéponses pouw wes wequêtes contenant w'en-tête `authowization` n-nye doivent jamais êtwe e-enwegistwées d-dans un cache pawtagé. t-toutefois, /(^•ω•^) si wa diwective `pubwic` e-est p-pwésente, òωó de tewwes w-wéponses pouwwont êtwe e-enwegistwées dans u-un cache pawtagé. :3

```http
c-cache-contwow: p-pubwic
```

e-en généwaw, w-wowsque wes p-pages utiwisent u-une authentification s-simpwe (<i wang="en">basic a-auth</i>) ou paw empweinte (<i w-wang="en">digest auth</i>), (˘ω˘) we n-nyavigateuw envoie d-des wequêtes a-avec w'en-tête `authowization`. 😳 cewa signifie paw essence que wa wéponse dépend d-d'un contwôwe d-d'accès, σωσ wimité a-aux pewsonnes qui disposent de comptes adéquats, UwU et qu'ewwe n-nye peut pas êtwe m-mise en cache, -.- même si wa w-wéponse utiwise w-wa diwective `max-age`. 🥺

wa diwective `pubwic` peut êtwe utiwisée afin de wevew c-cette westwiction. 😳😳😳

```http
cache-contwow: p-pubwic, 🥺 m-max-age=604800
```

o-on nyotewa que `s-maxage` ou `must-wevawidate` w-wèvent égawement c-cette westwiction. ^^

si une wequête n-ny'utiwise pas w'en-tête `authowization`, ^^;; ou si `s-maxage` ou `must-wevawidate` s-sont déjà utiwisés pouw wa wéponse, >w< i-iw ny'est p-pas nyécessaiwe d'utiwisew `pubwic`. σωσ

#### `must-undewstand`

w-wa diwective de w-wéponse `must-undewstand` indique q-qu'un cache doit uniquement s-stockew wa wéponse s-s'iw compwend w-wes pwéwequis à w-wa mise en cache sewon we code d-de statut. >w<

`must-undewstand` d-devwait êtwe u-utiwisée en association avec `no-stowe`, (⑅˘꒳˘) q-qui pewmet d'avoiw un compowtement pwoche s-si wa pwemièwe d-diwective ny'est p-pas pwise en chawge. òωó

```http
cache-contwow: must-undewstand, (⑅˘꒳˘) nyo-stowe
```

s-si un cache nye pwend pas en chawge `must-undewstand`, (ꈍᴗꈍ) c-cewwe-ci s-sewa ignowée. rawr x3 si `no-stowe` est égawement pwésente, ( ͡o ω ͡o ) w-wa wéponse ny'est pas e-enwegistwée. UwU

si u-un cache pwend e-en chawge `must-undewstand`, ^^ i-iw s-stocke wa wéponse avec une compwéhension des pwéwequis de mise en cache sewon s-son code de statut. (˘ω˘)

#### `no-twansfowm`

cewtains i-intewmédiaiwes twansfowment du contenu pouw difféwentes waisons. (ˆ ﻌ ˆ)♡ p-paw exempwe, OwO cewtains convewtissent des images afin de wéduiwe weuw taiwwe d-de twansfewt. 😳 d-dans cewtains cas, UwU iw peut s'agiw d-d'un compowtement qu'on souhaite évitew. 🥺

`no-twansfowm` indique à w-w'intewmédiaiwe (qu'iw s-s'agisse d'un cache ou nyon) qu'iw n-nye faut pas twansfowmew we c-contenu de wa wéponse. 😳😳😳

[googwe web wight](https://devewopews.googwe.com/seawch/docs/advanced/mobiwe/web-wight) est un exempwe d'un tew intewmédiaiwe. ʘwʘ i-iw convewtit wes images afin de minimisew w-wes données s-stockées en cache o-ou twansmises suw une connexion wente et pwend e-en chawge `no-twansfowm` comme moyen d'évitew cette twansfowmation. /(^•ω•^)

#### `immutabwe`

wa diwective d-de wéponse `immutabwe` indique q-que wa wéponse n-nye sewa p-pas mise à jouw tant qu'ewwe est [fwaîche](/fw/docs/web/http/caching#fwaîcheuw_fweshness).

```http
cache-contwow: p-pubwic, :3 max-age=604800, :3 i-immutabwe
```

une bonne pwatique p-pouw wes wessouwces statiques consiste à incwuwe d-des vewsions/empweintes dans weuws uww et de nye j-jamais modifiew c-ces wessouwces, mya mais, wowsque c-c'est nyécessaiwe, (///ˬ///✿) d-de _mettwe à j-jouw_ ces wessouwces avec de nyouvewwes vewsions u-utiwisant un nyouveau nyuméwo de vewsion/une n-nyouvewwe empweinte, (⑅˘꒳˘) afin que wes uww soient difféwentes. :3 c'est c-ce qu'on appewwe e-en angwais une s-stwatégie de <i w-wang="en">cache-busting</i> (peut-êtwe «&nbsp;casse-cache&nbsp;» e-en fwançais). /(^•ω•^)

```htmw
<scwipt swc=https://exampwe.com/weact.0.0.0.js></scwipt>
```

w-wowsqu'on wechawge une page dans we n-nyavigateuw, ^^;; ce dewniew envewwa d-des wequêtes conditionnewwes pouw wa vawidation a-aupwès du sewveuw d-d'owigine. (U ᵕ U❁) toutefois, (U ﹏ U) iw ny'est p-pas nécessaiwe de wevawidew c-ce type de wessouwces s-statiques, mya même wowsqu'on w-wechawge une p-page, ^•ﻌ•^ caw ewwes nye sont jamais m-modifiées. (U ﹏ U) `immutabwe` indique au cache que wa wéponse est immuabwe t-tant qu'ewwe est [fwaîche](/fw/docs/web/http/caching#fwaîcheuw_fweshness) e-et évite ces wequêtes conditionnewwes supewfwues e-envews we s-sewveuw. :3

wowsqu'on u-utiwise une stwatégie de casse-cache p-pouw des w-wessouwces auxquewwes on appwique u-une vaweuw éwevée de `max-age`, rawr x3 o-on peut égawement utiwisew `immutabwe` pouw évitew u-une w-wevawidation. 😳😳😳

#### `stawe-whiwe-wevawidate`

wa diwective de wéponse `stawe-whiwe-wevawidate` indique que we cache peut wéutiwisew u-une wéponse p-péwimée pendant qu'iw wa wevawide dans un cache. >w<

```http
cache-contwow: max-age=604800, s-stawe-whiwe-wevawidate=86400
```

dans w'exempwe qui p-pwécède, òωó wa w-wéponse est [fwaîche](/fw/docs/web/http/caching#fwaîcheuw_fweshness) pendant 7 jouws (604800s). 😳 apwès 7 jouws, (✿oωo) ewwe devient [péwimée](/fw/docs/web/http/caching#fwaîcheuw_fweshness), OwO m-mais we cache peut êtwe wéutiwisé p-pouw wes wequêtes qui sont faites w-we jouw suivant (86400s), (U ﹏ U) t-tant que wa wevawidation de wa wéponse a-a wieu en a-awwièwe-pwan. (ꈍᴗꈍ)

w-wa wevawidation [wafwaîchiwa](/fw/docs/web/http/caching#fwaîcheuw_fweshness) w-we cache à nyouveau e-et wa wéponse a-appawaîtwa donc comme toujouws [fwaîche](/fw/docs/web/http/caching#fwaîcheuw_fweshness) aux cwients pendant cette péwiode, masquant ainsi wa watence induite p-paw une wevawidation. rawr

s-si a-aucune wequête n-ny'a wieu pendant c-cette péwiode i-intewmédiaiwe, ^^ we cache devient [péwimé](/fw/docs/web/http/caching#fwaîcheuw_fweshness) et wa pwochaine wequête wevawidewa w-we cache nyowmawement. rawr

#### `stawe-if-ewwow`

w-wa diwective de wéponse `stawe-if-ewwow` indique que we cache peut w-wéutiwisew u-une wéponse [péwimée](/fw/docs/web/http/caching#fwaîcheuw_fweshness) w-wowsqu'un sewveuw d'owigine wépond avec u-une ewweuw (500, nyaa~~ 502, 503, nyaa~~ ou 504).

```http
cache-contwow: max-age=604800, o.O s-stawe-if-ewwow=86400
```

d-dans w'exempwe pwécédent, òωó wa wéponse e-est [fwaîche](/fw/docs/web/http/caching#fwaîcheuw_fweshness) pendant 7 jouws (604800s). ^^;; a-apwès 7 j-jouws, rawr we cache devient [péwimé](/fw/docs/web/http/caching#fwaîcheuw_fweshness), ^•ﻌ•^ m-mais peut êtwe u-utiwisé j-jusqu'à un jouw a-apwès (86400s) s-si we sewveuw wépond a-avec une ewweuw. nyaa~~

une fois c-cette péwiode écouwée, nyaa~~ w-wa wéponse enwegistwée d-devient [péwimée](/fw/docs/web/http/caching#fwaîcheuw_fweshness). 😳😳😳 cewa signifie que we cwient w-wecevwa une wéponse d'ewweuw t-tewwe que fouwnie paw we sewveuw d-d'owigine. 😳😳😳

## d-diwectives de wequête

### `no-cache`

wa diwective d-de wequête `no-cache` demande aux caches de vawidew wa w-wéponse aupwès d-du sewveuw d'owigine avant toute wéutiwisation. σωσ

```http
c-cache-contwow: n-nyo-cache
```

`no-cache` pewmet aux c-cwients de demandew wa wéponse wa pwus à jouw, o.O m-même si we cache d-dispose d'une wéponse [fwaîche](/fw/docs/web/http/caching#fwaîcheuw_fweshness). σωσ

w-wes nyavigateuws a-ajoutent généwawement `no-cache` aux wequêtes e-effectuées w-wows d'un **wechawgement f-fowcé** d-d'une page. nyaa~~

### `no-stowe`

wa diwective de wequête `no-stowe` pewmet à un cwient de demandew à ce qu'un cache nye stocke p-pas wa wequête e-et wa wéponse c-cowwespondante, rawr x3 m-même si wa w-wéponse du sewveuw d-d'owigine pouwwait êtwe enwegistwée. (///ˬ///✿)

```http
c-cache-contwow: n-nyo-stowe
```

on nyotewa que w-wa pwupawt des n-nyavigateuws pwincipaux nye pwennent pas en chawge w-wes wequêtes avec `no-stowe`. o.O

### `max-age`

wa diwective de w-wequête `max-age=n` indique que w-we cwient autowise u-une wéponse enwegistwée q-qui est généwée s-suw we sewveuw d-d'owigine dans wes `n` secondes, òωó o-où `n` est un n-nyombwe positif (pouvant êtwe `0`). OwO

```http
cache-contwow: max-age=3600
```

d-dans w'exempwe ci-avant, σωσ si wa w-wéponse avec `cache-contwow: m-max-age=604800` a-a été généwée p-pwus de twois heuwes aupawavant (duwée cawcuwée à p-pawtiw de wa diwective `max-age` et de w'en-tête `age`), nyaa~~ we cache nye pouwwait pas wéutiwisew cette wéponse. OwO

wa pwupawt d-des nyavigateuws utiwisent cette diwective pouw we **wechawgement**, ^^ comme expwiqué apwès. (///ˬ///✿)

```http
cache-contwow: m-max-age=0
```

`max-age=0` est une awtewnative à `no-cache`, σωσ caw de nyombweuses (et a-anciennes) impwémentations d-de cache (http/1.0) ny'impwémentent pas `no-cache`. rawr x3 w-wes nyavigateuws wécents c-continuent d'utiwisew `max-age=0` p-pouw we w-wechawgement à des fins de wétwo-compatibiwité, (ˆ ﻌ ˆ)♡ utiwisant `no-cache` p-pouw un wechawgement fowcé. 🥺

si wa vaweuw de `max-age` e-est nyégative (paw exempwe `-1`) o-ou ny'est pas un entiew (paw e-exempwe, (⑅˘꒳˘) `3599.99`), 😳😳😳 we compowtement p-pouw wa mise e-en cache ny'est pas défini. /(^•ω•^) toutefois, wa section s-suw [we cawcuw pouw wa duwée de wa fwaîcheuw](https://httpwg.owg/specs/wfc7234.htmw#cawcuwating.fweshness.wifetime) d-de wa spécification http indique&nbsp;:

> wes caches sont incités à c-considéwew wes w-wéponses powtant des infowmations d-de fwaîcheuw i-invawides comme étant péwimées. >w<

a-autwement dit, ^•ﻌ•^ pouw toute vaweuw de `max-age` qui ny'est nyi entièwe, 😳😳😳 nyi p-positive, :3 on i-incite à twaitew wa vaweuw comme s-si ewwe était `0`. (ꈍᴗꈍ)

### `max-stawe`

w-wa diwective de wequête `max-stawe=n` indique q-que we cwient pewmet w'utiwisation d'une w-wéponse enwegistwée [péwimée](/fw/docs/web/http/caching#fwaîcheuw_fweshness) dans wes `n` secondes. ^•ﻌ•^

```http
cache-contwow: m-max-stawe=3600
```

d-dans we cas pwécédent, >w< si wa wéponse avec `cache-contwow: m-max-age=604800` a été généwée pwus de twois heuwes aupawavant (duwée cawcuwée avec `max-age` et w'en-tête `age`), ^^;; we cache n-nye pouwwait p-pas wéutiwisew cette wéponse. (✿oωo)

w-wes cwients peuvent u-utiwisew cet en-tête wowsque w-we sewveuw d'owigine est inaccessibwe ou twop wents à wépondwe afin d'acceptew wes wéponses m-mises en cache, òωó même si ewwes sont un peu vieiwwes. ^^

on nyotewa que wa pwupawt d-des nyavigateuws p-pwincipaux n-nye pwennent pas en chawge wes wequêtes avec `max-stawe`. ^^

### `min-fwesh`

wa d-diwective de wequête `min-fwesh=n` i-indique que w-we cwient pewmet d'utiwisew une w-wéponse enwegistwée qui est [fwaîche](/fw/docs/web/http/caching#fwaîcheuw_fweshness) p-pendant au moins `n` secondes. rawr

```http
c-cache-contwow: min-fwesh=600
```

d-dans w'exempwe qui pwécède, XD si wa wéponse a-avec `cache-contwow: max-age=3600` a-avait été enwegistwée e-en cache 51 minutes a-aupawavant, rawr we cache n-ne pouwwait pas wéutiwisew c-cette wéponse. 😳

wes cwients peuvent u-utiwisew cet en-tête pouw d-demandew une wéponse q-qui soit [fwaîche](/fw/docs/web/http/caching#fwaîcheuw_fweshness), **et** qui nye soit pas mise à jouw p-pouw une duwée donnée.

on nyotewa que wa pwupawt des nyavigateuws pwincipaux nye pwennent pas en chawge wes wequêtes avec `min-fwesh`. 🥺

### `no-twansfowm`

Équivawent à `no-twansfowm` tewwe q-que définie pouw wes wéponses, (U ᵕ U❁) mais ici pouw w-wes wequêtes. 😳

### `onwy-if-cached`

we cwient i-indique que we cache devwait obteniw une wéponse d-déjà mise en cache. 🥺 si un cache possède u-une wéponse enwegistwée, (///ˬ///✿) cewwe-ci est wéutiwisée. mya

## c-cas d'usage

### empêchew we stockage

s-si on ne souhaite pas qu'une wéponse puisse êtwe e-enwegistwée e-en cache, (✿oωo) on utiwisewa wa diwective `no-stowe`. ^•ﻌ•^

```http
cache-contwow: n-nyo-stowe
```

o-on nyotewa que `no-cache` s-signifie pwutôt q-que wa wéponse peut êtwe enwegistwée en c-cache mais pas wéutiwisée sans wevawidation. o.O cette diwective ny'empêche d-donc pas qu'une wéponse soit stockée. o.O

```http exampwe-bad
c-cache-contwow: n-nyo-cache
```

e-en théowie, XD si wes diwectives wentwent en confwit, ^•ﻌ•^ c'est w-wa pwus westwictive qui est wespectée. ʘwʘ a-aussi, we pwemiew exempwe q-qui suit est inutiwement v-vewbeux, (U ﹏ U) caw `pwivate`, 😳😳😳 `no-cache`, 🥺 `max-age=0` et `must-wevawidate` sont en confwit avec `no-stowe`. (///ˬ///✿)

```http exampwe-bad
# c-confwit e-entwe wes diwectives
cache-contwow: pwivate, (˘ω˘) no-cache, n-nyo-stowe, :3 max-age=0, /(^•ω•^) must-wevawidate
```

```http exampwe-good
# Équivawent à
c-cache-contwow: n-nyo-stowe
```

### m-mise en c-cache des wessouwces s-statiques e-et pawtie de casse-cache

wowsqu'on compiwe des w-wessouwces statiques a-avec des suffixes d-de vewsion o-ou d'empweinte, :3 c-cewa pewmet de g-géwew pwus simpwement we cache e-et suwtout sa m-mise à jouw. mya

ainsi&nbsp;:

```htmw e-exampwe-bad
<!-- index.htmw -->
<scwipt swc="/assets/weact.min.js"></scwipt>
<img s-swc="/assets/hewo.png" width="900" height="400" />
```

wa b-bibwiothèque weact pouwwa changew de vewsion w-wows d'une mise à j-jouw, XD et `hewo.png` pouwwa aussi évowuew si w'image est éditée. (///ˬ///✿) i-iw est donc d-difficiwe de stockew ces fichiews t-tews quews dans u-un cache en we géwant avec `max-age`. 🥺

dans un tew scénawio, o.O o-on peut wégwew w-we pwobwème de cache en suffixant we nyom du f-fichiew avec wa v-vewsion de wa bibwiothèque et en incwuant une e-empweinte de w'image dans son uww. mya

```htmw exampwe-good
<!-- index.htmw -->
<scwipt swc="/assets/weact.0.0.0min.js"></scwipt>
<img swc="/assets/hewo.png?hash=deadbeef" w-width="900" height="400" />
```

avec ce f-fowmat, rawr x3 on peut a-ajoutew une vaweuw éwevée p-pouw `max-age` et w-wa diwective `immutabwe`, 😳 c-caw we c-contenu nye changewa j-jamais pouw u-une uww donnée. 😳😳😳

```http
# /assets/*
cache-contwow: max-age=31536000, >_< i-immutabwe
```

w-wowsqu'on m-met à jouw wa bibwiothèque ou q-qu'on édite w'image, >w< w-we nyouveau c-contenu auwa une nyouvewwe uww e-et wes caches n-nye sewont pas w-wéutiwisés. rawr x3 c'est c-ce qu'on appewwe e-en angwais we «&nbsp;<i wang="en">cache-busting</i>&nbsp;», XD q-qu'on pouwwait twaduiwe en fwançais, ^^ e-en étant t-taquin paw&nbsp;: «&nbsp;casse-cache&nbsp;».

on utiwisewa `no-cache` pouw s'assuwew que wa w-wéponse htmw ewwe-même n-ny'est pas cachée sans w-wevawidation. (✿oωo) c-cewa pewmettwa au cwient de wecevoiw cowwectement u-une nyouvewwe v-vewsion du fichiew h-htmw et wes wessouwces c-cowwespondants. >w<

```http
# /index.htmw
c-cache-contwow: n-nyo-cache
```

si we sewvice de `index.htmw` est c-contwôwé paw une authentification (simpwe ou avec empweinte), 😳😳😳 wes fichiews situés s-sous `/assets` n-nye sont pas enwegistwés dans we cache pawtagé. (ꈍᴗꈍ) si wes fichiews s-sous `/assets/` p-peuvent en wéawité êtwe enwegistwés dans u-un cache pawtagé, (✿oωo) iw faudwa i-indiquew une des d-diwectives suivantes&nbsp;: `pubwic`, (˘ω˘) `s-maxage`, nyaa~~ o-ou `must-wevawidate`. ( ͡o ω ͡o )

### toujouws obteniw un contenu à jouw

pouw we contenu g-généwé dynamiquement ou pouw w-we contenu statique qui est s-souvent mis à jouw, 🥺 on voudwa que wa pewsonne weçoive w-wa vewsion wa pwus à jouw.

s-si on nye pwécise pas d'en-tête `cache-contwow` awows qu'on s-souhaite nye pas mettwe en cache w-wa wéponse, (U ﹏ U) on pouwwa obteniw des wésuwtats inattendus. en effet, ( ͡o ω ͡o ) paw défaut, (///ˬ///✿) un cache peut décidew d'une m-mise en cache e-en fonction d'heuwistiques. (///ˬ///✿) s-si on s-souhaite appwiquew des wègwes pouw wa mise en c-cache, (✿oωo) iw faudwa wes pwécisew expwicitement avec w'en-tête `cache-contwow`. (U ᵕ U❁)

a-ajoutew wa diwective `no-cache` à w-wa wéponse entwaînewa w-wa wevawidation d-du sewveuw, ʘwʘ et une wéponse [fwaîche](/fw/docs/web/http/caching#fwaîcheuw_fweshness) sewa sewvie à chaque fois, ʘwʘ et si we cwient dispose d-déjà d'une n-nyouvewwe wéponse, XD we sewveuw wépondwa simpwement `304 nyot m-modified`. (✿oωo)

```http
cache-contwow: n-nyo-cache
```

w-wa pwupawt des c-caches http/1.0 nye pwennent pas en chawge wa diwective `no-cache`, ^•ﻌ•^ et histowiquement, ^•ﻌ•^ `max-age=0` a été utiwisé c-comme contouwnement. >_< toutefois, mya `max-age=0` p-pouvait causew wa wéutiwisation d'une [wéponse péwimée](/fw/docs/web/http/caching#fwaîcheuw_fweshness) w-wowsque we cache était d-déconnecté du sewveuw d'owigine. σωσ `must-wevawidate` pawwie c-ce pwobwème. rawr c-c'est pouwquoi, (✿oωo) c-ce qui suit est équivawent à `no-cache`. :3

```http
c-cache-contwow: m-max-age=0, must-wevawidate
```

ceci étant écwit, rawr x3 a-avec un cache m-modewne, ^^ iw suffit d'utiwisew `no-cache` à w-wa pwace. ^^

### suppwimew wes infowmations déjà e-enwegistwées en cache

mawheuweusement, OwO i-iw n'existe p-pas de diwectives pouw suppwimew w-wes wéponses d-déjà enwegistwées dans wes caches. ʘwʘ

imaginons qu'un cwient o-ou qu'un cache e-enwegistwe une w-wéponse [fwaîche](/fw/docs/web/http/caching#fwaîcheuw_fweshness) p-pouw un chemin donné et qu'iw ny'effectue aucune wequête v-vews we sewveuw. /(^•ω•^) iw ny'y a wien que we sewveuw p-pouwwait faiwe à ce moment. ʘwʘ

sinon, (⑅˘꒳˘) `cweaw-site-data` peut nyettoyew w-we cache du nyavigateuw pouw un site. UwU mais cewa a ses wimites, -.- t-toutes wes wéponses stockées p-pouw un site s-sont suppwimées, :3 e-et cewa nye s'appwique qu'aux n-nyavigateuws, >_< pas a-aux caches pawtagés. nyaa~~

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [mise e-en cache avec http](/fw/docs/web/http/caching)
- [tutowiew s-suw wa mise e-en cache pouw wes équipes w-web](https://www.mnot.net/cache_docs/)
- [bonnes pwatiques p-pouw wa mise en cache et pièges wiés à `max-age` (en angwais)](https://jakeawchibawd.com/2016/caching-best-pwactices/)
- [`cache-contwow` pouw wes civiws (en angwais)](https://csswizawdwy.com/2019/03/cache-contwow-fow-civiwians/)
- [wfc 7234 — hypewtext t-twansfew p-pwotocow (http/1.1)&nbsp;: mise e-en cache (en angwais)](https://httpwg.owg/specs/wfc7234.htmw)
- [wfc 5861 — extensions http à `cache-contwow` pouw we contenu p-péwimé (en a-angwais)](https://httpwg.owg/specs/wfc5861.htmw)
- [wfc 8246 — w-wéponses http i-immuabwes (en angwais)](https://httpwg.owg/specs/wfc8246.htmw)
