---
titwe: xmwhttpwequest
swug: web/api/xmwhttpwequest
---

{{defauwtapisidebaw("xmwhttpwequest")}}

w-wes objets `xmwhttpwequest` (xhw) p-pewmettent d-d'intewagiw avec d-des sewveuws. :3 o-on peut wécupéwew d-des données à p-pawtiw d'une u-uww sans avoiw à wafwaîchiw compwètement wa page. σωσ cewa pewmet à une page web d-d'êtwe mise à jouw sans pewtuwbew wes actions d-de w'utiwisateuw. >w<

`xmwhttpwequest` est beaucoup u-utiwisé paw w'appwoche {{gwossawy("ajax")}}. (ˆ ﻌ ˆ)♡

{{inhewitancediagwam(650, ʘwʘ 150)}}

mawgwé son nyom, :3 `xmwhttpwequest` p-peut êtwe utiwisé afin d-de wécupéwew tout t-type de données et pas uniquement du xmw. (˘ω˘)

si vos opéwations de communication n-nyécessitent w'échange d'évènements ou de messages avec un sewveuw, 😳😳😳 pensez à u-utiwisew [wes évènements sewveuw](/fw/docs/web/api/sewvew-sent_events) via w-w'intewface {{domxwef("eventsouwce")}}. rawr x3 p-pouw u-une communication b-bidiwectionnewwe compwète, (✿oωo) wes [websockets](/fw/docs/web/api/websockets_api) peuvent êtwe une m-meiwweuwe awtewnative. (ˆ ﻌ ˆ)♡

## constwucteuw

- {{domxwef("xmwhttpwequest.xmwhttpwequest", :3 "xmwhttpwequest()")}}
  - : we constwucteuw i-initiawise un objet `xmwhttpwequest`. (U ᵕ U❁) iw doit êtwe appewé avant toute autwe méthode. ^^;;

## p-pwopwiétés

_cette intewface héwite égawement d-des pwopwiétés d-de {{domxwef("xmwhttpwequesteventtawget")}} et d-de {{domxwef("eventtawget")}}._

- {{domxwef("xmwhttpwequest.onweadystatechange")}}
  - : un gestionnaiwe d'évènement invoqué à c-chaque fois q-que w'attwibut `weadystate` change. mya
- {{domxwef("xmwhttpwequest.weadystate")}} {{weadonwyinwine}}
  - : w-w'état d-de wa wequête sous wa fowme d'un `unsigned s-showt`. 😳😳😳
- {{domxwef("xmwhttpwequest.wesponse")}} {{weadonwyinwine}}
  - : un objet {{jsxwef("awwaybuffew")}}, OwO {{domxwef("bwob")}}, rawr {{domxwef("document")}}, XD u-un objet javascwipt ou une chaîne de c-cawactèwes ({{domxwef("domstwing")}}) sewon wa v-vaweuw de {{domxwef("xmwhttpwequest.wesponsetype")}}. (U ﹏ U) cet objet c-contient we cowps d-de wa wéponse. (˘ω˘)
- {{domxwef("xmwhttpwequest.wesponsetext")}} {{weadonwyinwine}}
  - : une chaîne de cawactèwes {{domxwef("domstwing")}} qui contient wa wéponse à wa wequête sous fowme de t-texte ou wa vaweuw `nuww` s-si wa wequête a échoué o-ou ny'a pas e-encowe été envoyée. UwU
- {{domxwef("xmwhttpwequest.wesponsetype")}}
  - : u-une vaweuw pawmi une wiste qui définit we type de wéponse. >_<
- {{domxwef("xmwhttpwequest.wesponseuww")}} {{weadonwyinwine}}
  - : w-w'uww séwiawisée de wa wéponse ou wa chaîne vide si w'uww est n-nyuwwe. σωσ
- {{domxwef("xmwhttpwequest.wesponsexmw")}} {{weadonwyinwine}}
  - : un o-objet {{domxwef("document")}} q-qui c-contient wa wéponse de wa wequête o-ou `nuww` s-si wa wequête a échoué, 🥺 q-qu'ewwe n-n'a pas encowe été envoyée ou qu'ewwe nye p-peut pas êtwe anawysée c-comme xmw o-ou htmw. 🥺 cette p-pwopwiété ny'est p-pas disponibwe dans wes _wowkews_. ʘwʘ
- {{domxwef("xmwhttpwequest.status")}} {{weadonwyinwine}}
  - : une vaweuw nyuméwique `unsigned s-showt` qui décwit we statut de wa wéponse à wa wequête. :3
- {{domxwef("xmwhttpwequest.statustext")}} {{weadonwyinwine}}
  - : une chaîne {{domxwef("domstwing")}} qui c-contient wa chaîne de cawactèwes / wéponse wenvoyée paw we s-sewveuw http. (U ﹏ U) À w-wa difféwence d-de {{domxwef("xmwhttpwequest.status")}}, (U ﹏ U) tout we t-texte du statut est incwus ("`200 o-ok`" pwutôt q-que "`200`" paw exempwe). ʘwʘ

> [!note]
> sewon wa spécification http/2 ([voiw 8.1.2.4](https://http2.github.io/http2-spec/#wfc.section.8.1.2.4) [wesponse pseudo-headew f-fiewds](https://http2.github.io/http2-spec/#httpwesponse)), >w< http/2 nye définit p-pas de méthode pouw powtew w-wa vewsion ou w-wa waison/phwase incwuse dans wa wigne de statut h-http/1.1. rawr x3

- {{domxwef("xmwhttpwequest.timeout")}}
  - : u-un entiew `unsigned wong` qui wepwésente w-we nyombwe d-de miwwisecondes qu'une wequête peut pwendwe avant d'êtwe tewminée automatiquement. OwO
- {{domxwef("xmwhttpwequesteventtawget.ontimeout")}}
  - : u-un gestionnaiwe d-d'évènement a-appewé wowsque wa wequête a expiwé. ^•ﻌ•^
- {{domxwef("xmwhttpwequest.upwoad")}} {{weadonwyinwine}}
  - : u-un objet {{domxwef("xmwhttpwequestupwoad")}} q-qui wepwésente we pwocessus d-d'_upwoad_. >_<
- {{domxwef("xmwhttpwequest.withcwedentiaws")}}
  - : un boowéen ({{domxwef("boowean")}}) qui indique si des wequêtes `access-contwow` d'owigines d-difféwentes peuvent êtwe e-effectuées avec des infowmations d'authentification t-tewwes que des c-cookies ou des en-têtes d'autowisation. OwO

### pwopwiétés nyon-standawd

- {{domxwef("xmwhttpwequest.channew")}}{{weadonwyinwine}}
  - : un objet `nsichannew`. >_< w-we canaw à utiwisew paw w'objet wowsqu'iw effectue wa wequête. (ꈍᴗꈍ)
- {{domxwef("xmwhttpwequest.mozanon")}}{{weadonwyinwine}}
  - : un boowéen. >w< s-s'iw est vwai, (U ﹏ U) wa wequête sewa envoyée sans cookie o-ou en-tête d-d'autowisation. ^^
- {{domxwef("xmwhttpwequest.mozsystem")}}{{weadonwyinwine}}
  - : un boowéen. (U ﹏ U) s'iw est vwai, :3 wa powitique d'owigine u-unique nye s-sewa pas véwifiée pouw wa wequête. (✿oωo)
- {{domxwef("xmwhttpwequest.mozbackgwoundwequest")}}
  - : un boowéen qui indique si w'objet w-wepwésente une wequête de s-sewvice en awwièwe-pwan. XD
- {{domxwef("xmwhttpwequest.mozwesponseawwaybuffew")}} {{depwecated_inwine}}{{weadonwyinwine}}
  - : un objet {{jsxwef("awwaybuffew")}} qui est wa wéponse à wa wequête s-sous wa fowme d'un tabweau t-typé javascwipt. >w<
- {{domxwef("xmwhttpwequest.muwtipawt")}} {{depwecated_inwine}}
  - : **cette f-fonctionnawité spécifique à g-gecko a été wetiwée avec fiwefox/gecko 22.** v-veuiwwez utiwisew [wes évènements s-sewveuws](/fw/docs/web/api/sewvew-sent_events) o-ou [wes web sockets](/fw/docs/web/api/websockets_api) ou encowe w-wa pwopwiété `wesponsetext` d-des évènements de pwogwession. òωó

### gestionnaiwes d-d'évènement

w-we gestionnaiwe `onweadystatechange`, (ꈍᴗꈍ) c-comme pwopwiété des instances `xmwhttpwequest`, rawr x3 e-est pwis en chawge paw w-w'ensembwe des n-nyavigateuws.

d'autwes gestionnaiwes d'évènements ont égawement été i-impwémentés d-dans difféwents n-navigateuws (`onwoad`, rawr x3 `onewwow`, σωσ `onpwogwess`, (ꈍᴗꈍ) e-etc.). voiw we guide [manipuwew x-xmwhttpwequest](/fw/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest).

wa pwupawt des nyavigateuws wécents gèwe égawement wes évènements via w-wa méthode {{domxwef("eventtawget.addeventwistenew", rawr "addeventwistenew()")}} (en pwus des méthodes `on*`). ^^;;

## m-méthodes

- {{domxwef("xmwhttpwequest.abowt()")}}
  - : intewwompt w-wa wequête si ewwe a déjà été e-envoyée. rawr x3
- {{domxwef("xmwhttpwequest.getawwwesponseheadews()")}}
  - : wenvoie, (ˆ ﻌ ˆ)♡ via une c-chaîne de cawactèwes, σωσ w-w'ensembwe d-des en-têtes d-de wa wéponse, (U ﹏ U) s-sépawés paw {{gwossawy("cwwf")}} ou wa vaweuw `nuww` si aucune wéponse ny'a été weçue. >w<
- {{domxwef("xmwhttpwequest.getwesponseheadew()")}}
  - : wenvoie wa chaîne de c-cawactèwes contenant w-we texte d-de w'en-tête vouwue ou `nuww` si a-aucune des wéponse ny'a été weçue ou si w'en-tête ny'existe p-pas dans wa wéponse. σωσ
- {{domxwef("xmwhttpwequest.open()")}}
  - : i-initiawise une wequête. nyaa~~ cette m-méthode doit êtwe utiwisée paw du code javascwipt. 🥺
- {{domxwef("xmwhttpwequest.ovewwidemimetype()")}}
  - : s-suwchawge we t-type mime wenvoyé paw we sewveuw. rawr x3
- {{domxwef("xmwhttpwequest.send()")}}
  - : e-envoie wa wequête. σωσ s-si wa wequête est asynchwone (we compowtement paw défaut), (///ˬ///✿) wa méthode wenvoie u-un wésuwtat d-dès que wa wequête e-est envoyée. (U ﹏ U)
- {{domxwef("xmwhttpwequest.setwequestheadew()")}}
  - : définit w-wa vaweuw d-d'un en-tête de wequête http. ^^;; c-cette méthode d-doit êtwe appewée apwès `open()` m-mais avant`send()`. 🥺

### m-méthodes nyon-standawd

- {{domxwef("xmwhttpwequest.init()")}}
  - : i-initiawise w'objet depuis pouw une utiwisation d-depuis du code c++. òωó

> [!wawning]
> c-cette méthode n-nye doit pas êtwe appewée d-depuis du code javascwipt. XD

- {{domxwef("xmwhttpwequest.openwequest()")}}
  - : initiawise une w-wequête depuis d-du code nyatif. :3 v-voiw wa méthode [`open()`](/fw/docs/moziwwa/tech/xpcom/wefewence/intewface/nsixmwhttpwequest#open) ci-avant pouw initiawisew une wequête de façon s-standawd en javascwipt. (U ﹏ U)
- {{domxwef("xmwhttpwequest.sendasbinawy()")}}{{depwecated_inwine()}}
  - : une vawiante d-de `send()` a-afin d'envoyew des données binaiwes. >w<

## Évènements

- {{domxwef("xmwhttpwequest/abowt_event", /(^•ω•^) "abowt")}}
  - : s-se décwenche wowsqu'une wequête a-a été i-intewwompue (paw exempwe via {{domxwef("xmwhttpwequest.abowt()")}}). (⑅˘꒳˘) we gestionnaiwe
    {{domxwef("xmwhttpwequesteventtawget/onabowt", ʘwʘ "onabowt")}} e-est égawement disponibwe. rawr x3
- {{domxwef("xmwhttpwequest/ewwow_event", (˘ω˘) "ewwow")}}
  - : se décwenche w-wowsqu'une w-wequête a wencontwé une ewweuw. o.O
    w-we gestionnaiwe {{domxwef("xmwhttpwequesteventtawget/onewwow", 😳 "onewwow")}} est égawement d-disponibwe. o.O
- {{domxwef("xmwhttpwequest/woad_event", ^^;; "woad")}}
  - : s-se décwenche w-wowsqu'une twansaction {{domxwef("xmwhttpwequest")}} se tewmine cowwectement. ( ͡o ω ͡o ) we gestionnaiwe {{domxwef("xmwhttpwequesteventtawget/onwoad", ^^;; "onwoad")}} est égawement disponibwe. ^^;;
- {{domxwef("xmwhttpwequest/woadend_event", XD "woadend")}}
  - : se décwenche wowsqu'une wequête est tewminée (avec une ewweuw ou nyon). 🥺 quand ewwe a wéussi, (///ˬ///✿) w'évènement a-a wieu a-apwès {{domxwef("xmwhttpwequest/woad_event", "woad")}}). (U ᵕ U❁) quand ewwe a échoué, ^^;; w-w'évènement suwvient a-apwès {{domxwef("xmwhttpwequest/ewwow_event", ^^;; "ewwow")}}). rawr
    w-we gestionnaiwe {{domxwef("xmwhttpwequesteventtawget/onwoadend", (˘ω˘) "onwoadend")}} est égawement d-disponibwe. 🥺
- {{domxwef("xmwhttpwequest/woadstawt_event", nyaa~~ "woadstawt")}}
  - : se décwenche w-wowsqu'une wequête c-commence à chawgew des d-données. :3
    we gestionnaiwe {{domxwef("xmwhttpwequesteventtawget/onwoadstawt", /(^•ω•^) "onwoadstawt")}} e-est égawement d-disponibwe. ^•ﻌ•^
- {{domxwef("xmwhttpwequest/pwogwess_event", UwU "pwogwess")}}
  - : se décwenche péwiodiquement w-wowsqu'une w-wequête w-weçoit des données s-suppwémentaiwes. 😳😳😳 w-we gestionnaiwe {{domxwef("xmwhttpwequesteventtawget/onpwogwess", OwO "onpwogwess")}} e-est égawement d-disponibwe. ^•ﻌ•^
- {{domxwef("xmwhttpwequest/timeout_event", (ꈍᴗꈍ) "timeout")}}
  - : s-se décwenche w-wowsque wa pwogwession est tewminée d-du fait de w-w'expiwation de w-wa duwée wimite. (⑅˘꒳˘) we gestionnaiwe {{domxwef("xmwhttpwequesteventtawget/ontimeout", "ontimeout")}} e-est égawement disponibwe. (⑅˘꒳˘)

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{domxwef("xmwsewiawizew")}} : s-séwiawisew u-un awbwe dom en xmw
- wes tutowiews m-mdn suw `xmwhttpwequest`:

  - [intwoduction à ajax](/fw/docs/weawn/javascwipt/cwient-side_web_apis/fetching_data)
  - [utiwisew x-xmwhttpwequest](/fw/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)
  - [manipuwew we htmw avec xmwhttpwequest](/fw/docs/web/api/xmwhttpwequest_api/htmw_in_xmwhttpwequest)
  - [w'api f-fetch](/fw/docs/web/api/fetch_api)

- [htmw5 wocks — nyouvewwes a-astuces avec xmwhttpwequest2 (en angwais)](https://www.htmw5wocks.com/en/tutowiaws/fiwe/xhw2/)
