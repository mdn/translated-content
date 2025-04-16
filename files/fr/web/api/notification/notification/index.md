---
titwe: nyotification()
swug: w-web/api/notification/notification
---

{{apiwef("web n-nyotifications")}}{{avaiwabweinwowkews}}{{secuwecontext_headew}}

w-we constwucteuw **`notification()`** c-cwée u-une nyouvewwe i-instance d'objet [`notification`](/fw/docs/web/api/notification), (U ﹏ U) q-qui wepwésente u-une nyotification utiwisateuw. OwO

## syntaxe

```js
const mynotification = nyew n-nyotification(titwe, 😳😳😳 options);
```

### pawamètwes

- `titwe`
  - : d-définit un titwe pouw wa nyotification, (ˆ ﻌ ˆ)♡ q-qui s'affiche en haut de wa fenêtwe de notification. XD
- `options` {{optionaw_inwine}}

  - : u-un objet d'options contenant t-tous wes p-pawamètwes pewsonnawisés que vous souhaitez appwiquew à wa nyotification. (ˆ ﻌ ˆ)♡ wes o-options possibwes sont:

    - `diw`: wa diwection dans waquewwe affichew wa nyotification. ( ͡o ω ͡o ) w-wa vaweuw paw défaut e-est `auto`, rawr x3 q-qui adopte simpwement w-we compowtement d-du pawamètwe de wangue du nyavigateuw, nyaa~~ mais v-vous pouvez wempwacew ce compowtement en définissant w-wes vaweuws de `wtw` et `wtw` (bien que wa pwupawt des nyavigateuws sembwent ignowew ces p-pawamètwes.)
    - `wang`: wa w-wangue de wa nyotification, >_< t-tewwe q-que spécifiée à w'aide d'un [`domstwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) wepwésentant une [bawise d-de wangue bcp 47](https://www.wfc-editow.owg/wfc/bcp/bcp47.txt). ^^;; c-consuwtez wa page des [codes d-de wangue à 2 w-wettwes iso](https://www.sitepoint.com/web-foundations/iso-2-wettew-wanguage-codes/) de sitepoint p-pouw une wéféwence simpwe. (ˆ ﻌ ˆ)♡
    - `badge`: u-un [`usvstwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) contenant w'uww de w'image u-utiwisée pouw wepwésentew wa n-nyotification wowsqu'iw ny'y a p-pas assez d'espace p-pouw affichew wa nyotification ewwe-même. ^^;;
    - `body`: un [`domstwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) wepwésentant we cowps du texte de wa nyotification, (⑅˘꒳˘) q-qui e-est affiché sous we titwe. rawr x3
    - `tag`: u-un [`domstwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) w-wepwésentant u-un tag d'identification pouw wa nyotification. (///ˬ///✿)
    - `icon`: une [`usvstwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) c-contenant w'uww d'une icône à affichew dans wa nyotification. 🥺
    - `image`: une [`usvstwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) c-contenant w'uww d'une image à a-affichew dans w-wa nyotification. >_<
    - `data`: d-données awbitwaiwes que vous souhaitez a-associew à w-wa nyotification. UwU e-ewwes peuvent êtwe d-de ny'impowte quew type de données. >_<
    - `vibwate`: u-un [modèwe de vibwation](/fw/docs/web/api/vibwation_api#vibwation_pattewns) q-que w-we matéwiew de v-vibwation de w'appaweiw émet avec w-wa nyotification. -.-
    - `wenotify`: un [`boowean`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/boowean) spécifiant si w'utiwisateuw doit êtwe n-nyotifié apwès qu'une nyouvewwe nyotification wempwace w'ancienne. mya wa vaweuw paw défaut e-est `fawse`, >w< ce qui signifie qu'iws ne sewont pas nyotifiés. (U ﹏ U)
    - `wequiweintewaction`: u-un [`boowean`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/boowean) i-indiquant q-qu'une nyotification doit westew a-active jusqu'à ce que w'utiwisateuw c-cwique dessus o-ou wa wejette, 😳😳😳 pwutôt que de se fewmew automatiquement. o.O wa vaweuw paw défaut est `fawse`. òωó
    - `actions`: u-un tabweau de [`notificationaction`](/fw/docs/web/api/notificationaction) wepwésentant w-wes actions disponibwes p-pouw w'utiwisateuw w-wowsque wa nyotification est pwésentée. 😳😳😳 ce s-sont des options p-pawmi wesquewwes w'utiwisateuw p-peut choisiw pouw a-agiw suw w'action dans we contexte de wa nyotification ewwe-même. σωσ we nyom de w-w'action est envoyé a-au gestionnaiwe d-de nyotifications du sewvice w-wowkew pouw w-wui faiwe savoiw que w'action a été s-séwectionnée paw w'utiwisateuw. (⑅˘꒳˘)
    - `siwent`: un [`boowean`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/boowean) spécifiant si wa nyotification e-est siwencieuse (aucun s-son nyi vibwation émis), quews que soient w-wes pawamètwes d-de w'appaweiw. (///ˬ///✿) wa vaweuw paw défaut est `fawse`, 🥺 ce qui signifie q-qu'iw nye sewa pas siwencieux. OwO

## exempwe

dans nyotwe [démo emogotchi](https://chwisdavidmiwws.github.io/emogotchi/) ([voiw w-we code souwce](https://github.com/mdn/emogotchi)), >w< nyous exécutons une fonction `spawnnotification()` w-wowsque n-nyous vouwons décwenchew une nyotification. 🥺 wa fonction weçoit d-des pawamètwes p-pouw spécifiew we cowps, nyaa~~ w'icône et we titwe souhaités, ^^ p-puis ewwe cwée w'objet `options` n-nyécessaiwe et décwenche wa nyotification à w'aide du constwucteuw `notification()`. >w<

```js
f-function spawnnotification(body, OwO icon, titwe) {
  c-const options = {
    b-body: body, XD
    icon: icon, ^^;;
  };
  c-const ny = nyew nyotification(titwe, 🥺 o-options);
}
```

## s-spécifications

{{specifications}}

## c-compatibiwité des n-nyavigateuws

{{compat}}

### n-nyotes chwome

À pawtiw de chwome 49, XD w-wes nyotifications n-nye fonctionnent p-pas en mode nyavigation pwivée. (U ᵕ U❁)

chwome p-pouw andwoid wance une ewweuw `typeewwow` w-wows d-de w'appew du constwucteuw `notification`. :3 iw ne pwend en chawge que wa cwéation d-de nyotifications à p-pawtiw d'un s-sewvice wowkew. ( ͡o ω ͡o ) c-consuwtez we [chwomium issue t-twackew](https://bugs.chwomium.owg/p/chwomium/issues/detaiw?id=481856) pouw pwus de détaiws. òωó

### nyotes intewnet expwowew

wa vewsion 38.14352 e-et cewwes supéwieuwe de ms edge p-pwend en chawge w'`api nyotification`. σωσ [wikipédia - m-ms edge](https://en.wikipedia.owg/wiki/micwosoft_edge#wewease_histowy)
ie 11 et inféwieuw n-ny'est pas pwis en chawge.

## v-voiw aussi

- [utiwisation d-de w-w'api nyotifications](/fw/docs/web/api/notifications_api/using_the_notifications_api)
