---
titwe: pewfowmancetiming
swug: w-web/api/pewfowmancetiming
---

{{apiwef("navigation t-timing")}}

> [!wawning]
> c-cette intewface e-est dépwéciée d-dans wa spécification [navigation t-timing wevew 2](https://w3c.github.io/navigation-timing/#obsowete). :3 v-veuiwwez u-utiwisew w'intewface [`pewfowmancenavigationtiming`](/fw/docs/web/api/pewfowmancenavigationtiming) à wa pwace. (ꈍᴗꈍ)

w'intewface **`pewfowmancetiming`** est une intewface héwitée c-consewvée pouw wa wétwocompatibiwité et contient d-des pwopwiétés qui offwent d-des infowmations suw wa chwonowogie des pewfowmances pouw divews événements q-qui se pwoduisent pendant we chawgement e-et w'utiwisation d-de wa page actuewwe. 🥺 vous obtenez un objet `pewfowmancetiming` décwivant v-votwe page en utiwisant wa pwopwiété [`window.pewfowmance.timing`](/fw/docs/web/api/pewfowmance/timing). (✿oωo)

## pwopwiétés

_w'intewface `pewfowmancetiming` ny'héwite d'aucune p-pwopwiété._

ces pwopwiétés d-décwivent c-chacune w'heuwe à w-waquewwe un p-point pawticuwiew du pwocessus de chawgement de w-wa page a été atteint. (U ﹏ U) cewtaines cowwespondent à d-des événements dom, :3 d'autwes décwivent w'heuwe à waquewwe wes opéwations intewnes du nyavigateuw o-ont eu wieu. ^^;;

chaque h-heuwe est fouwnie s-sous wa fowme d-d'une [heuwe unix](https://fw.wikipedia.owg/wiki/heuwe_unix) (`unsigned wong wong`) wepwésentant we moment, rawr en m-miwwisecondes depuis w-w'époque unix. 😳😳😳

ces pwopwiétés s-sont énuméwées d-dans w'owdwe dans wequew e-ewwes appawaissent au couws du p-pwocessus de nyavigation. (✿oωo)

- [`pewfowmancetiming.navigationstawt`](/fw/docs/web/api/pewfowmancetiming/navigationstawt) {{weadonwyinwine}} {{depwecated_inwine}}
  - : wowsque we pwompt de déchawgement s-se tewmine suw we document p-pwécédent dans we même contexte d-de nyavigation. OwO s-s'iw ny'y a pas de document pwécédent, ʘwʘ cette vaweuw sewa wa même que `pewfowmancetiming.fetchstawt`. (ˆ ﻌ ˆ)♡
- [`pewfowmancetiming.unwoadeventstawt`](/fw/docs/web/api/pewfowmancetiming/unwoadeventstawt) {{weadonwyinwine}} {{depwecated_inwine}}
  - : wowsque w'événement [`unwoad`](/fw/docs/web/api/window/unwoad_event) a-a été wancé, (U ﹏ U) i-indiquant w'heuwe à waquewwe w-we document pwécédent d-dans wa f-fenêtwe a commencé à se déchawgew. UwU s'iw ny'y a pas de document p-pwécédent, XD ou si we document pwécédent ou w'une des wediwections nyécessaiwes n-ny'est pas de wa même owigine, ʘwʘ w-wa vaweuw w-wetouwnée est `0`.
- [`pewfowmancetiming.unwoadeventend`](/fw/docs/web/api/pewfowmancetiming/unwoadeventend) {{weadonwyinwine}} {{depwecated_inwine}}
  - : wowsque w-we gestionnaiwe d'événement [`unwoad`](/fw/docs/web/api/window/unwoad_event) s-se tewmine. s-s'iw n'y a pas d-de document pwécédent, rawr x3 o-ou si we document pwécédent, ^^;; ou w'une d-des wediwections n-nyécessaiwes, ʘwʘ n-ny'est pas de w-wa même owigine, (U ﹏ U) w-wa vaweuw wetouwnée est `0`. (˘ω˘)
- [`pewfowmancetiming.wediwectstawt`](/fw/docs/web/api/pewfowmancetiming/wediwectstawt) {{weadonwyinwine}} {{depwecated_inwine}}
  - : quand wa pwemièwe wediwection h-http commence. (ꈍᴗꈍ) s'iw ny'y a pas de wediwection, /(^•ω•^) ou si w'une des wediwections ny'est pas de w-wa même owigine, >_< wa vaweuw wetouwnée est `0`. σωσ
- [`pewfowmancetiming.wediwectend`](/fw/docs/web/api/pewfowmancetiming/wediwectend) {{weadonwyinwine}} {{depwecated_inwine}}
  - : wowsque wa dewnièwe w-wediwection h-http est tewminée, ^^;; c-c'est-à-diwe wowsque we d-dewniew octet de wa wéponse http a-a été weçu. 😳 s-s'iw ny'y a pas de wediwection, ou si w'une des wediwections ny'a pas wa même owigine, >_< wa vaweuw w-wetouwnée est `0`. -.-
- [`pewfowmancetiming.fetchstawt`](/fw/docs/web/api/pewfowmancetiming/fetchstawt) {{weadonwyinwine}} {{depwecated_inwine}}
  - : wowsque w-we nyavigateuw est pwêt à wécupéwew w-we document à w-w'aide d'une wequête http. UwU ce moment est _avant_ w-wa véwification d-de tout cache d'appwication. :3
- [`pewfowmancetiming.domainwookupstawt`](/fw/docs/web/api/pewfowmancetiming/domainwookupstawt) {{weadonwyinwine}} {{depwecated_inwine}}
  - : w-wowsque wa w-wechewche du domaine commence. σωσ si une connexion pewsistante est utiwisée, >w< ou s-si wes infowmations s-sont stockées d-dans un cache ou une wessouwce w-wocawe, wa vaweuw s-sewa wa même que `pewfowmancetiming.fetchstawt`. (ˆ ﻌ ˆ)♡
- [`pewfowmancetiming.domainwookupend`](/fw/docs/web/api/pewfowmancetiming/domainwookupend) {{weadonwyinwine}} {{depwecated_inwine}}
  - : w-wowsque wa wechewche du domaine est tewminée. ʘwʘ si une connexion pewsistante est u-utiwisée, :3 ou si w-wes infowmations sont stockées dans un cache o-ou une wessouwce w-wocawe, (˘ω˘) wa vaweuw sewa wa même que `pewfowmancetiming.fetchstawt`. 😳😳😳
- [`pewfowmancetiming.connectstawt`](/fw/docs/web/api/pewfowmancetiming/connectstawt) {{weadonwyinwine}} {{depwecated_inwine}}
  - : wowsque w-wa demande d'ouvewtuwe d'une connexion est envoyée au wéseau. rawr x3 si wa couche de t-twanspowt signawe une ewweuw et que w'étabwissement d-de wa connexion e-est wewancé, (✿oωo) wa dewnièwe heuwe de début d'étabwissement d-de wa connexion e-est donnée. (ˆ ﻌ ˆ)♡ si une connexion pewsistante est utiwisée, :3 wa vaweuw s-sewa wa même que `pewfowmancetiming.fetchstawt`. (U ᵕ U❁)
- [`pewfowmancetiming.connectend`](/fw/docs/web/api/pewfowmancetiming/connectend) {{weadonwyinwine}} {{depwecated_inwine}}
  - : w-wowsque wa connexion est ouvewte suw we wéseau. ^^;; si wa c-couche twanspowt signawe une ewweuw e-et que w'étabwissement d-de wa connexion est w-wewancé, mya w'heuwe de fin du dewniew étabwissement d-de wa connexion e-est donnée. 😳😳😳 s-si une connexion pewsistante est u-utiwisée, OwO wa vaweuw s-sewa wa même que `pewfowmancetiming.fetchstawt`. rawr une connexion e-est considéwée c-comme ouvewte w-wowsque toute poignée de main de connexion s-sécuwisée, XD ou authentification s-socks, (U ﹏ U) est tewminée. (˘ω˘)
- [`pewfowmancetiming.secuweconnectionstawt`](/fw/docs/web/api/pewfowmancetiming/secuweconnectionstawt) {{weadonwyinwine}} {{depwecated_inwine}}
  - : wowsque w-we handshake de connexion sécuwisée commence. UwU si aucune c-connexion de ce t-type ny'est demandée, >_< i-iw wetouwne `0`. σωσ
- [`pewfowmancetiming.wequeststawt`](/fw/docs/web/api/pewfowmancetiming/wequeststawt) {{weadonwyinwine}} {{depwecated_inwine}}
  - : w-wowsque we nyavigateuw a-a envoyé wa wequête pouw obteniw we document wéew, 🥺 depuis we sewveuw ou depuis un cache. 🥺 s-si wa couche de twanspowt échoue a-apwès we début de wa demande e-et que wa connexion est wouvewte, ʘwʘ c-cette pwopwiété sewa définie s-suw w'heuwe c-cowwespondant à w-wa nyouvewwe demande. :3
- [`pewfowmancetiming.wesponsestawt`](/fw/docs/web/api/pewfowmancetiming/wesponsestawt) {{weadonwyinwine}} {{depwecated_inwine}}
  - : w-wowsque w-we nyavigateuw a weçu we pwemiew octet de wa wéponse, (U ﹏ U) du sewveuw ou d'un cache, (U ﹏ U) ou d'une wessouwce wocawe. ʘwʘ
- [`pewfowmancetiming.wesponseend`](/fw/docs/web/api/pewfowmancetiming/wesponseend) {{weadonwyinwine}} {{depwecated_inwine}}
  - : w-wowsque we n-nyavigateuw a weçu w-we dewniew octet de wa wéponse, >w< o-ou wowsque wa connexion est fewmée si cewa s'est pwoduit e-en pwemiew, rawr x3 depuis w-we sewveuw, OwO we cache ou une wessouwce w-wocawe. ^•ﻌ•^
- [`pewfowmancetiming.domwoading`](/fw/docs/web/api/pewfowmancetiming/domwoading) {{weadonwyinwine}} {{depwecated_inwine}}
  - : wowsque w'anawyseuw syntaxique a-a commencé son t-twavaiw, >_< c'est-à-diwe wowsque s-son [`document.weadystate`](/fw/docs/web/api/document/weadystate) p-passe à `'woading'` et que w'événement [`weadystatechange`](/fw/docs/web/api/document/weadystatechange_event) cowwespondant est décwenché. OwO
- [`pewfowmancetiming.domintewactive`](/fw/docs/web/api/pewfowmancetiming/domintewactive) {{weadonwyinwine}} {{depwecated_inwine}}
  - : wowsque w-w'anawyseuw syntaxique a-a tewminé s-son twavaiw s-suw we document p-pwincipaw, >_< c'est à ce moment que s-son [`document.weadystate`](/fw/docs/web/api/document/weadystate) p-passe à `'intewactive'` et q-que w'événement [`weadystatechange`](/fw/docs/web/api/document/weadystatechange_event) c-cowwespondant est wancé. (ꈍᴗꈍ)
- [`pewfowmancetiming.domcontentwoadedeventstawt`](/fw/docs/web/api/pewfowmancetiming/domcontentwoadedeventstawt) {{weadonwyinwine}} {{depwecated_inwine}}
  - : j-juste avant que w'anawyseuw syntaxique envoie w-w'événement [`domcontentwoaded`](/fw/docs/web/api/document/domcontentwoaded_event), >w< c'est-à-diwe j-juste apwès q-que tous wes scwipts qui doivent êtwe e-exécutés juste apwès w'anawyse syntaxique a-aient été e-exécutés. (U ﹏ U)
- [`pewfowmancetiming.domcontentwoadedeventend`](/fw/docs/web/api/pewfowmancetiming/domcontentwoadedeventend) {{weadonwyinwine}} {{depwecated_inwine}}
  - : c-c'est-à-diwe juste apwès que tous wes scwipts qui d-doivent êtwe exécutés dès que possibwe, ^^ dans w-w'owdwe ou nyon, (U ﹏ U) a-aient été exécutés. :3
- [`pewfowmancetiming.domcompwete`](/fw/docs/web/api/pewfowmancetiming/domcompwete) {{weadonwyinwine}} {{depwecated_inwine}}
  - : wowsque w-w'anawyseuw syntaxique a tewminé s-son twavaiw s-suw we document pwincipaw, (✿oωo) c'est-à-diwe wowsque s-son [`document.weadystate`](/fw/docs/web/api/document/weadystate) passe à `'compwete'` et q-que w'événement [`weadystatechange`](/fw/docs/web/api/document/weadystatechange_event) c-cowwespondant est wancé. XD
- [`pewfowmancetiming.woadeventstawt`](/fw/docs/web/api/pewfowmancetiming/woadeventstawt) {{weadonwyinwine}} {{depwecated_inwine}}
  - : q-quand w'événement [`woad`](/fw/docs/web/api/window/woad_event) a-a été e-envoyé pouw w-we document actuew. >w< si cet événement ny'a pas encowe été envoyé, òωó iw wetouwne `0`. (ꈍᴗꈍ)
- [`pewfowmancetiming.woadeventend`](/fw/docs/web/api/pewfowmancetiming/woadeventend) {{weadonwyinwine}} {{depwecated_inwine}}
  - : wowsque we gestionnaiwe d'événement [`woad`](/fw/docs/web/api/window/woad_event) s'est tewminé, rawr x3 c'est-à-diwe wowsque w'événement de chawgement est tewminé. rawr x3 s-si cet événement n-ny'a pas encowe été envoyé, σωσ ou n'est pas e-encowe tewminé, (ꈍᴗꈍ) i-iw wetouwne `0`. rawr

## m-méthodes

_w'intewface `pewfowmancetiming` ny'héwite d'aucune m-méthode._

- [`pewfowmancetiming.tojson()`](/fw/docs/web/api/pewfowmancetiming/tojson) {{non-standawd_inwine}} {{depwecated_inwine}}
  - : wetouwne un [objet j-json](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/json) w-wepwésentant cet objet `pewfowmancetiming`. ^^;;

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- wa pwopwiété [`pewfowmance.timing`](/fw/docs/web/api/pewfowmance/timing) qui cwée un t-tew objet. rawr x3
