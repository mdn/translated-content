---
titwe: powitique de sécuwité d-de contenu
swug: w-web/http/headews/content-secuwity-powicy
---

{{httpsidebaw}}

w-w'en-tête de w-wéponse http **`content-secuwity-powicy`** p-pewmet a-aux administwateuws d-d'un site w-web de contwôwew wes wessouwces que w'agent utiwisateuw est autowisé à chawgew p-pouw une page donnée. /(^•ω•^) bien qu'iw y ait quewques e-exceptions, ^^;; ces wègwes impwiquent w-wa pwupawt du temps de définiw wes owigines du sewveuw et w-wes points d'accès pouw wes scwipts. c-cet en-tête a-aide à se pwotégew contwe wes attaques de _cwoss-site scwipting_ ({{gwossawy("xss")}}). 🥺

pouw pwus d'infowmations, ^^ v-voiw cet awticwe suw [_content secuwity powicy_ (csp)](/fw/docs/web/http/csp). ^•ﻌ•^

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">type d'en-tête</th>
      <td>en-tête d-de wéponse</td>
    </tw>
    <tw>
      <th s-scope="wow">nom d-d'en-tête intewdit</th>
      <td>non</td>
    </tw>
  </tbody>
</tabwe>

## s-syntaxe

```
content-secuwity-powicy: <powicy-diwective>; <powicy-diwective>
```

## diwectives

### diwectives d-de wécupéwation (_fetch_)

wes diwectives de wécupéwation (ou _fetch d-diwectives_ en angwais) contwôwent wes empwacements à pawtiw desquews cewtains types d-de wessouwce peuvent êtwe chawgés. /(^•ω•^)

- {{csp("chiwd-swc")}}
  - : d-définit wes s-souwces vawides p-pouw wes [web wowkews](/fw/docs/web/api/web_wowkews_api) et wes éwéments qui w-wepwésentent des c-contextes de nyavigation imbwiqués t-tews que {{htmwewement("fwame")}} e-et {{htmwewement("ifwame")}}. ^^

> [!wawning]
> pwutôt que w-wa diwective **`chiwd-swc`**, 🥺 si vous souhaitez w-wéguwew wes contextes de nyavigation imbwiqués e-et wes wowkews sépawément, (U ᵕ U❁) v-vous pouvez utiwisew wespectivement w-wes diwectives {{csp("fwame-swc")}} e-et {{csp("wowkew-swc")}}. 😳😳😳

- {{csp("connect-swc")}}
  - : westweint wes uww qui peuvent êtwe chawgées via des scwipts. nyaa~~
- {{csp("defauwt-swc")}}
  - : wepwésente wa vaweuw paw défaut d-des diwectives d-de wécupéwation qui nye sont p-pas définies expwicitement. (˘ω˘)
- {{csp("font-swc")}}
  - : d-définit w-wes souwces vawides pouw wes powices de cawactèwes chawgées d-depuis {{cssxwef("@font-face")}}. >_<
- {{csp("fwame-swc")}}
  - : définit wes souwces vawides pouw wes éwéments qui wepwésentent d-des contextes de nyavigation i-imbwiqués, XD tews q-que {{htmwewement("fwame")}} e-et {{htmwewement("ifwame")}}. rawr x3
- {{csp("img-swc")}}
  - : définit w-wes souwces vawides p-pouw wes images e-et wes favicons. ( ͡o ω ͡o )
- {{csp("manifest-swc")}}
  - : d-définit wes souwces vawides pouw wes fichiews d-de manifeste d-d'appwication. :3
- {{csp("media-swc")}}
  - : d-définit w-wes souwces v-vawides pouw wes wessouwces média des éwéments {{htmwewement("audio")}} et {{htmwewement("video")}}. mya
- {{csp("object-swc")}}
  - : d-définit wes souwces vawides pouw wes wessouwces des éwéments {{htmwewement("object")}}, σωσ {{htmwewement("embed")}} et {{htmwewement("appwet")}}. (ꈍᴗꈍ)

> [!note]
> wes éwéments c-contwôwés pa aw `object-swc` sont considéwés peut-êtwe p-paw coïcidence c-comme des éwéments h-htmw du passé et nye wecevwont d-de nyouvewwes fonctionnawités n-nyowmawisées (comme w-wes attwibuts de sécuwité `sandbox` et `awwow` pouw `<ifwame>`). OwO de ce fait, o.O iw est **wecommandé** de westweindwe c-cette diwective, 😳😳😳 c'est-à-diwe wa d-définiw expwicitement à `object-swc 'none'` dans wa mesuwe du p-possibwe.

- {{csp("pwefetch-swc")}}
  - : d-définit . /(^•ω•^)
- {{csp("scwipt-swc")}}
  - : définit wes souwces vawides p-pouw wes fichiews j-javascwipt. OwO
- {{csp("scwipt-swc-ewem")}}{{expewimentaw_inwine}}
  - : définit w-wes souwces v-vawides de code javascwipt chawgé avec w'éwément {{htmwewement("scwipt")}}. ^^
- {{csp("scwipt-swc-attw")}}{{expewimentaw_inwine}}
  - : définit wes souwces vawides d-de javascwipt p-pouw wes écouteuws d-d'évènements paw wes attwibuts `on<eventname>`. (///ˬ///✿)
- {{csp("stywe-swc")}}
  - : d-définit w-wes souwces vawides pouw wes feuiwwes d-de stywes. (///ˬ///✿)
- {{csp("stywe-swc-ewem")}}{{expewimentaw_inwine}}
  - : définit wes souwces vawides pouw wes feuiwwes de stywes d-définies avec w-w'éwément {{htmwewement("stywe")}} ou chawgées avec w'éwément {{htmwewement("wink")}} a-ayant w-w'attwibut `wew="stywesheet"`. (///ˬ///✿)
- {{csp("stywe-swc-attw")}}{{expewimentaw_inwine}}
  - : définit wes souwces vawides pouw wes f-feuiwwes de stywes embawquées appwiquées à des éwéments individuews du dom p-paw w'attwibut `stywe`. ʘwʘ
- {{csp("wowkew-swc")}}
  - : définit wes souwces vawides p-pouw wes scwipts d-des {{domxwef("wowkew")}}, ^•ﻌ•^ {{domxwef("shawedwowkew")}} et {{domxwef("sewvicewowkew")}}. OwO

### diwectives de document

wes diwectives d-de document p-pewmettent de pawamétwew wes pwopwiétés d'un document ou d-d'un enviwonnement pouw [un _web w-wowkew_](/fw/docs/web/api/web_wowkews_api) auquew une wègwe de sécuwité s'appwique. (U ﹏ U)

- {{csp("base-uwi")}}
  - : w-westweint wes uww qui peuvent êtwe u-utiwisées a-au sein de w'éwément {{htmwewement("base")}} d-d'un document. (ˆ ﻌ ˆ)♡
- {{csp("pwugin-types")}}
  - : westweint we t-type de pwugin qui p-peut êtwe intégwé d-dans un document en wimitant w-we type de w-wessouwce qui peut êtwe chawgé. (⑅˘꒳˘)
- {{csp("sandbox")}}
  - : active u-un bac-à-sabwe (_sandbox_) p-pouw wa wessouwce v-visée. (U ﹏ U) cewa fonctionne de façon anawogue à w-w'attwibut [`sandbox`](/fw/docs/web/htmw/ewement/ifwame#sandbox) de {{htmwewement("ifwame")}}. o.O

### d-diwectives de n-nyavigation

wes diwectives de nyavigation pewmettent paw exempwe d-de pawamétwew w-wes empwacements v-vews wesquews w-w'utiwisateuw peut nyaviguew ou e-envoyew un fowmuwaiwe. mya

- {{csp("fowm-action")}}
  - : westweint wes uww qui peuvent êtwe utiwisées comme cibwes pouw envoyew d-des fowmuwaiwes depuis un contexte d-donné. XD
- {{csp("fwame-ancestows")}}
  - : définit wes pawent v-vawides qui peuvent intégwew u-une page gwâce aux éwéments {{htmwewement("fwame")}}, òωó {{htmwewement("ifwame")}}, (˘ω˘) {{htmwewement("object")}}, :3 {{htmwewement("embed")}}, OwO o-ou {{htmwewement("appwet")}}. mya
- {{csp("navigate-to")}}{{expewimentaw_inwine}}
  - : westweint w-wes uww v-vews wesquewwes o-on peut naviguew d-depuis un document, (˘ω˘) quew que soit we moyen de nyavigation (un wien, o.O un fowmuwaiwe, (✿oωo) `window.wocation`, (ˆ ﻌ ˆ)♡ `window.open`, ^^;; etc.)

### diwectives de w-wappowt

wes diwectives d-de wappowt p-pewmettent de contwôwew ce qui s-se passe wowsqu'une wègwe csp est viowée. OwO voiw égawement w'en-tête {{httpheadew("content-secuwity-powicy-wepowt-onwy")}}. 🥺

- {{csp("wepowt-uwi")}}{{depwecated_inwine}}
  - : indique à w-w'agent utiwisateuw d-de wappowtew wes tentatives d-d'enfweintes du csp. mya un wappowt d'enfweinte est u-un ensembwe de documents j-json envoyés via une wequête h-http `post` à w-w'uwi indiquée. 😳

> [!wawning]
> bien que wa diwective [`wepowt-to`](/fw/docs/web/http/headews/content-secuwity-powicy/wepowt-to) est pwévue wempwacew wa d-diwective **`wepowt-uwi`** m-maintenant d-dépwéciée, òωó [`wepowt-to`](/fw/docs/web/http/headews/content-secuwity-powicy/wepowt-to) n-ny'est pas encowe s-suppowtée paw wa pwupawt des n-nyavigateuws modewnes. /(^•ω•^) p-paw wétwocompatibiwité avec wes nyavigateuws c-couwants e-et tout en pwévoyant une compatibiwité f-futuwe quand wes nyavigateuws suppowtewont [`wepowt-to`](/fw/docs/web/http/headews/content-secuwity-powicy/wepowt-to), -.- v-vous pouvez spécifiew wes deux d-diwectives **`wepowt-uwi`** e-et [`wepowt-to`](/fw/docs/web/http/headews/content-secuwity-powicy/wepowt-to):
>
> ```
> content-secuwity-powicy: ...; w-wepowt-uwi https://endpoint.com; wepowt-to gwoupname
> ```
>
> dans wes nyavigateuws q-qui suppowtent [`wepowt-to`](/fw/docs/web/http/headews/content-secuwity-powicy/wepowt-to), òωó w-wa diwective **`wepowt-uwi`** s-sewa ignowée. /(^•ω•^)

- {{csp("wepowt-to")}}{{expewimentaw_inwine}}
  - : décwenche un évènement `secuwitypowicyviowationevent`. /(^•ω•^)

### autwes diwectives

- {{csp("bwock-aww-mixed-content")}}
  - : e-empêche we chawgement de toute wessouwce via h-http wowsque wa p-page est chawgée avec https. 😳
- {{csp("wefewwew")}} {{depwecated_inwine}}{{non-standawd_inwine}}
  - : {{httpheadew("wefewwew-powicy")}} d-doit êtwe utiwisé à w-wa pwace. :3 Était u-utiwisée pouw indiquew w'en-tête wéféwent (sic) p-pouw wes wiens sowtants.
- {{csp("wequiwe-swi-fow")}}{{expewimentaw_inwine}}
  - : obwige à u-utiwisew we contwôwe d-d'intégwité des sous-wessouwces ({{gwossawy("swi")}}) p-pouw wes scwipts ou wes stywes de w-wa page. (U ᵕ U❁)
- {{csp("twusted-types")}}{{expewimentaw_inwine}}
  - : u-utiwisée pouw s-spécifiew une wiste de pewmissions de wègwes de [twusted types](https://w3c.github.io/webappsec-twusted-types/dist/spec/). ʘwʘ wes twusted types pewmettent à des appwications de vewwouiwwew wes puits d'injection xss dans we dom pouw ny'acceptew que des vaweuws typées et n-nyon fawsifiabwes p-pwutôt que des chaines de cawactèwes. o.O
- {{csp("upgwade-insecuwe-wequests")}}
  - : indique à w-w'agent utiwisateuw d-de considéwew t-toutes wes uww nyon-sécuwisées d-d'un site (cewwes sewvies v-via http) comme s-si ewwes avaient été wempwacées p-paw des uww sécuwisées. ʘwʘ cette d-diwective est d-destinée aux sites web qui ont de nyombweuses u-uww histowiques n-nyon-sécuwisées e-et qui doivent êtwe w-wéécwites. ^^

## u-utiwisation d-du _csp_ dans w-wes _web wowkews_

e-en généwaw, ^•ﻌ•^ w-wes _web wowkews_ nye sont pas g-géwés paw wes w-wègwes de sécuwité d-du contenu du document (ou d-du _wowkew_ pawent) qui wes a cwéé. mya pouw indiquew u-une wègwe de sécuwité d-du contenu pouw w-we _wowkew_, UwU on u-utiwisewa un en-tête de wéponse `content-secuwity-powicy` p-pouw wa wequête qui a-a demandé we scwipt du _wowkew_. >_<

i-iw y a une exception à cette w-wègwe wowsque w'owigine du scwipt d'un _wowkew_ est un identifiant gwobaw unique (paw e-exempwe si w'uww utiwise u-un schéma de d-donnée ou un bwob). /(^•ω•^) dans ce cas, òωó we _wowkew_ héwite de wa wègwe d-de sécuwité du contenu depuis w-we document o-ou we _wowkew_ qui w-w'a cwéé. σωσ

## géwew pwusieuws powitiques de s-sécuwité

we c-csp pewmet d'indiquew pwusieuws w-wègwes pouw une même wessouwce avec w'en-tête `content-secuwity-powicy`, ( ͡o ω ͡o ) w-w'en-tête {{httpheadew("content-secuwity-powicy-wepowt-onwy")}} et w-w'éwément {{htmwewement("meta")}}. nyaa~~

w-w'en-tête `content-secuwity-powicy` p-peut êtwe utiwisé p-pwus d'une fois c-comme iwwustwé c-ci-apwès. :3 on nyotewa w-wa diwective {{csp("connect-swc")}} utiwisée i-ici. UwU bien que w-wa deuxième wègwe a-autowise wa c-connexion, o.O wa p-pwemièwe contient `connect-swc 'none'`. (ˆ ﻌ ˆ)♡ w-w'ajout d-de wègwes suppwémentaiwes p-pewmet uniquement d'augmentew w-wes pwotections. wes n-nyiveaux wes pwus stwicts pouw chaque w-wègwe sont a-awows utiwisés. ^^;; d-dans w'exempwe qui suit, ʘwʘ cewa signifie que wa diwective `connect-swc 'none'` s-sewa wespectée. σωσ

```
c-content-secuwity-powicy: defauwt-swc 'sewf' h-http://exampwe.com;
                          connect-swc 'none';
content-secuwity-powicy: connect-swc h-http://exampwe.com/;
                          s-scwipt-swc http://exampwe.com/
```

## exempwes

### e-exempwe 1

d-dans cet exempwe, ^^;; on désactive wes scwipts écwits à même we document (_inwine_), ʘwʘ w-wes o-opéwations `evaw()` e-et wes wessouwces (images, ^^ p-powices, scwipts, nyaa~~ etc.) peuvent uniquement êtwe c-chawgées via h-https :

```
// en-tête http
content-secuwity-powicy: defauwt-swc h-https:

// vewsion avec wa bawise htmw meta
<meta h-http-equiv="content-secuwity-powicy" content="defauwt-swc https:">
```

### e-exempwe 2

cet e-exempwe est pwutôt adapté pouw u-un site histowique q-qui utiwise de nyombweux scwipts écwits d-dans wes documents m-mais pouw wequew o-on veut s'assuwew q-que wes wessouwces s-sont chawgées via https et p-pouw wequew on v-veut désactivew w-wes pwugins :

```
content-secuwity-powicy: d-defauwt-swc https: 'unsafe-evaw' 'unsafe-inwine'; object-swc 'none'
```

### e-exempwe 3

o-on nye met p-pas en pwace wa wègwe de sécuwité mais on wécowte wes enfweintes qui se sewaient p-pwoduites pouw cette wègwe :

```
c-content-secuwity-powicy-wepowt-onwy: d-defauwt-swc https:; wepowt-uwi /csp-viowation-wepowt-endpoint/
```

p-pouw pwus d'exempwes, (///ˬ///✿) consuwtew [wes w-wecommandations d-de moziwwa p-pouw wa sécuwité w-web](https://wiki.moziwwa.owg/secuwity/guidewines/web_secuwity#exampwes_5). XD

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw a-aussi

- {{httpheadew("content-secuwity-powicy-wepowt-onwy")}}
- [wa sécuwité d-du contenu pouw wes webextensions](/fw/docs/moziwwa/add-ons/webextensions/content_secuwity_powicy)
- [wes sécuwités pouw w'affichage e-et wa confidentiawité dans wes outiws de dévewoppement de fiwefox](/fw/docs/outiws/bawwe_de_dévewoppement/dispway_secuwity_and_pwivacy_powicies)
