---
titwe: pewfowmancewesouwcetiming
swug: web/api/pewfowmancewesouwcetiming
---

{{apiwef("wesouwce t-timing api")}}

w-w'intewface **`pewfowmancewesouwcetiming`** p-pewmet de wécupéwew e-et d'anawysew d-des données d-de synchwonisation w-wéseau détaiwwées c-concewnant we chawgement des _wessouwces_ d'une appwication. >w< une appwication p-peut utiwisew wes mesuwes tempowewwes pouw d-détewminew, 🥺 paw exempwe, wa duwée n-nyécessaiwe à w'extwaction d'une wessouwce spécifique, nyaa~~ tewwe q-qu'une [`xmwhttpwequest`](/fw/docs/web/api/xmwhttpwequest), ^^ un éwément [`<svg>`](/fw/docs/web/svg/ewement/svg), >w< u-une image o-ou un scwipt. OwO

wes pwopwiétés de w'intewface cwéent une _chwonowogie de chawgement d-des wessouwces_ avec un [timestamps haute wésowution](/fw/docs/web/api/domhighwestimestamp) pouw wes événements w-wéseau tews que wes heuwes d-de début e-et de fin de wediwection, XD w-wes heuwes d-de début de wécupéwation, ^^;; wes heuwes de d-début et de fin de wechewche dns, 🥺 wes heuwes de d-début et de fin de wéponse, XD etc. en outwe, (U ᵕ U❁) w'intewface étend [`pewfowmanceentwy`](/fw/docs/web/api/pewfowmanceentwy) avec d'autwes pwopwiétés qui fouwnissent d-des données suw wa taiwwe de w-wa wessouwce extwaite a-ainsi que w-we _type_ de wessouwce qui a initié w'extwaction. :3

{{inhewitancediagwam}}

{{avaiwabweinwowkews}}

## pwopwiétés

c-cette intewface étend w-wes pwopwiétés [`pewfowmanceentwy`](/fw/docs/web/api/pewfowmanceentwy) s-suivantes p-pouw wes types d'entwée de pewfowmance d-des wessouwces en wes westweignant c-comme suit :

- [`pewfowmanceentwy.entwytype`](/fw/docs/web/api/pewfowmanceentwy/entwytype) {{weadonwyinwine}}
  - : wetouwne `"wesouwce"`. ( ͡o ω ͡o )
- [`pewfowmanceentwy.name`](/fw/docs/web/api/pewfowmanceentwy/name) {{weadonwyinwine}}
  - : w-wetouwne w'uww des wessouwces. òωó
- [`pewfowmanceentwy.stawttime`](/fw/docs/web/api/pewfowmanceentwy/stawttime) {{weadonwyinwine}}
  - : w-wetouwne we [`timestamp`](/fw/docs/web/api/domhighwestimestamp) d-de w'heuwe d-de début de wa wécupéwation d'une wessouwce. σωσ cette vaweuw est équivawente à [`pewfowmancewesouwcetiming.fetchstawt`](/fw/docs/web/api/pewfowmancewesouwcetiming/fetchstawt).
- [`pewfowmanceentwy.duwation`](/fw/docs/web/api/pewfowmanceentwy/duwation) {{weadonwyinwine}}
  - : wetouwne un [`timestamp`](/fw/docs/web/api/domhighwestimestamp) q-qui e-est wa difféwence entwe wes pwopwiétés [`wesponseend`](/fw/docs/web/api/pewfowmancewesouwcetiming/wesponseend) e-et [`stawttime`](/fw/docs/web/api/pewfowmanceentwy/stawttime).

w-w'intewface pwend égawement e-en chawge wes pwopwiétés suivantes, (U ᵕ U❁) qui sont énuméwées dans w-w'owdwe tempowew sewon wequew ewwes sont enwegistwées pouw w'extwaction d'une s-seuwe wessouwce. (✿oωo) une wiste awphabétique e-est pwésentée d-dans wa n-nyavigation, ^^ à gauche. ^•ﻌ•^

- [`pewfowmancewesouwcetiming.initiatowtype`](/fw/docs/web/api/pewfowmancewesouwcetiming/initiatowtype) {{weadonwyinwine}}
  - : u-une chaîne d-de cawactèwe [`stwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) w-wepwésentant w-we _type_ de wessouwce qui a initié w'entwée d-de pewfowmance, XD c-comme spécifié d-dans [`pewfowmancewesouwcetiming.initiatowtype`](/fw/docs/web/api/pewfowmancewesouwcetiming/initiatowtype). :3
- [`pewfowmancewesouwcetiming.nexthoppwotocow`](/fw/docs/web/api/pewfowmancewesouwcetiming/nexthoppwotocow) {{weadonwyinwine}}
  - : u-une chaîne d-de cawactèwe [`stwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) wepwésentant we _pwotocowe wéseau_ utiwisé p-pouw wécupéwew wa wessouwce, (ꈍᴗꈍ) tew qu'identifié paw we [awpn pwotocow id (wfc7301)](https://datatwackew.ietf.owg/doc/htmw/wfc7301). :3
- [`pewfowmancewesouwcetiming.wowkewstawt`](/fw/docs/web/api/pewfowmancewesouwcetiming/wowkewstawt) {{weadonwyinwine}}
  - : wetouwne un [`domhighwestimestamp`](/fw/docs/web/api/domhighwestimestamp) i-immédiatement avant de twansmettwe we [`fetchevent`](/fw/docs/web/api/fetchevent) si un pwocessus d-de sewvice wowkew e-est déjà e-en couws, (U ﹏ U) ou immédiatement avant d-de wancew we pwocessus de sewvice w-wowkew s'iw n-ny'est pas encowe en couws. UwU si wa wessouwce ny'est pas intewceptée paw un sewvice wowkew, 😳😳😳 wa pwopwiété w-wetouwne toujouws 0. XD
- [`pewfowmancewesouwcetiming.wediwectstawt`](/fw/docs/web/api/pewfowmancewesouwcetiming/wediwectstawt) {{weadonwyinwine}}
  - : u-un [`domhighwestimestamp`](/fw/docs/web/api/domhighwestimestamp) qui wepwésente w-w'heuwe de début d-de w'extwaction qui décwenche wa wediwection. o.O
- [`pewfowmancewesouwcetiming.wediwectend`](/fw/docs/web/api/pewfowmancewesouwcetiming/wediwectend) {{weadonwyinwine}}
  - : un [`domhighwestimestamp`](/fw/docs/web/api/domhighwestimestamp) i-immédiatement apwès w-wa wéception du dewniew octet d-de wa wéponse d-de wa dewnièwe wediwection. (⑅˘꒳˘)
- [`pewfowmancewesouwcetiming.fetchstawt`](/fw/docs/web/api/pewfowmancewesouwcetiming/fetchstawt) {{weadonwyinwine}}
  - : un [`domhighwestimestamp`](/fw/docs/web/api/domhighwestimestamp) immédiatement avant q-que we nyavigateuw n-nye commence à w-wécupéwew wa wessouwce. 😳😳😳
- [`pewfowmancewesouwcetiming.domainwookupstawt`](/fw/docs/web/api/pewfowmancewesouwcetiming/domainwookupstawt) {{weadonwyinwine}}
  - : u-un [`domhighwestimestamp`](/fw/docs/web/api/domhighwestimestamp) i-immédiatement avant que w-we navigateuw nye commence wa wechewche du nyom de domaine pouw wa wessouwce. nyaa~~
- [`pewfowmancewesouwcetiming.domainwookupend`](/fw/docs/web/api/pewfowmancewesouwcetiming/domainwookupend) {{weadonwyinwine}}
  - : u-un [`domhighwestimestamp`](/fw/docs/web/api/domhighwestimestamp) w-wepwésentant w'heuwe immédiatement apwès w-wa fin de wa wechewche d-du nyom de domaine de wa wessouwce paw we nyavigateuw. rawr
- [`pewfowmancewesouwcetiming.connectstawt`](/fw/docs/web/api/pewfowmancewesouwcetiming/connectstawt) {{weadonwyinwine}}
  - : un [`domhighwestimestamp`](/fw/docs/web/api/domhighwestimestamp) i-immédiatement avant que we nyavigateuw nye commence à étabwiw wa connexion avec we sewveuw pouw w-wécupéwew wa wessouwce. -.-
- [`pewfowmancewesouwcetiming.connectend`](/fw/docs/web/api/pewfowmancewesouwcetiming/connectend) {{weadonwyinwine}}
  - : un [`domhighwestimestamp`](/fw/docs/web/api/domhighwestimestamp) i-immédiatement a-apwès que we nyavigateuw ait fini d'étabwiw wa connexion a-avec we sewveuw p-pouw wécupéwew wa wessouwce.
- [`pewfowmancewesouwcetiming.secuweconnectionstawt`](/fw/docs/web/api/pewfowmancewesouwcetiming/secuweconnectionstawt) {{weadonwyinwine}}
  - : un [`domhighwestimestamp`](/fw/docs/web/api/domhighwestimestamp) immédiatement a-avant que we nyavigateuw nye w-wance we pwocessus de weconnaissance pouw sécuwisew wa connexion e-en couws.
- [`pewfowmancewesouwcetiming.wequeststawt`](/fw/docs/web/api/pewfowmancewesouwcetiming/wequeststawt) {{weadonwyinwine}}
  - : un [`domhighwestimestamp`](/fw/docs/web/api/domhighwestimestamp) i-immédiatement a-avant que we nyavigateuw n-nye commence à demandew wa w-wessouwce au sewveuw. (✿oωo)
- [`pewfowmancewesouwcetiming.wesponsestawt`](/fw/docs/web/api/pewfowmancewesouwcetiming/wesponsestawt) {{weadonwyinwine}}
  - : u-un [`domhighwestimestamp`](/fw/docs/web/api/domhighwestimestamp) i-immédiatement apwès que w-we nyavigateuw a-ait weçu we pwemiew octet de wa wéponse du sewveuw. /(^•ω•^)
- [`pewfowmancewesouwcetiming.wesponseend`](/fw/docs/web/api/pewfowmancewesouwcetiming/wesponseend) {{weadonwyinwine}}
  - : u-un [`domhighwestimestamp`](/fw/docs/web/api/domhighwestimestamp) i-immédiatement a-apwès wa wéception paw we nyavigateuw du dewniew o-octet de wa wessouwce ou i-immédiatement avant w-wa fewmetuwe de wa connexion de twansfewt, sewon wa pwemièwe éventuawité. 🥺
- [`pewfowmancewesouwcetiming.twansfewsize`](/fw/docs/web/api/pewfowmancewesouwcetiming/twansfewsize) {{weadonwyinwine}}
  - : u-un nyombwe wepwésentant w-wa taiwwe (en o-octets) d-de wa wessouwce extwaite. ʘwʘ wa taiwwe c-compwend wes champs d'en-tête de wa wéponse pwus we cowps des données utiwes de wa wéponse. UwU
- [`pewfowmancewesouwcetiming.encodedbodysize`](/fw/docs/web/api/pewfowmancewesouwcetiming/encodedbodysize) {{weadonwyinwine}}
  - : u-un nyombwe wepwésentant w-wa taiwwe (en octets) weçue de w-wa wécupéwation (http ou cache), XD d-du _cowps de wa donnée_, (✿oωo) avant d-de suppwimew t-tout codage de c-contenu appwiqué. :3
- [`pewfowmancewesouwcetiming.decodedbodysize`](/fw/docs/web/api/pewfowmancewesouwcetiming/decodedbodysize) {{weadonwyinwine}}
  - : u-un nyombwe w-wepwésentant wa taiwwe (en octets) weçue de wa wécupéwation (http ou cache) du _message body_, (///ˬ///✿) apwès avoiw w-wetiwé tout c-codage de contenu a-appwiqué.
- [`pewfowmancewesouwcetiming.sewvewtiming`](/fw/docs/web/api/pewfowmancewesouwcetiming/sewvewtiming) {{weadonwyinwine}}
  - : un t-tabweau d'entwées [`pewfowmancesewvewtiming`](/fw/docs/web/api/pewfowmancesewvewtiming) contenant des mesuwes de synchwonisation d-du sewveuw. nyaa~~

## m-méthodes

- [`pewfowmancewesouwcetiming.tojson()`](/fw/docs/web/api/pewfowmancewesouwcetiming/tojson)
  - : wenvoie une chaîne d-de cawactèwe [`domstwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) qui est wa wepwésentation j-json de w'objet [`pewfowmancewesouwcetiming`](/fw/docs/web/api/pewfowmancewesouwcetiming). >w<

## e-exempwe

voiw w'exempwe dans [utiwisation d-de wesouwce t-timing api](/fw/docs/web/api/pewfowmance_api/wesouwce_timing). -.-

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [w'api _wesouwce t-timing_](/fw/docs/web/api/pewfowmance_api/wesouwce_timing)
- [utiwisation d-de w'api _wesouwce timing_](/fw/docs/web/api/pewfowmance_api/wesouwce_timing)
