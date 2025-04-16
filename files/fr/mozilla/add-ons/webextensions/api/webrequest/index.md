---
titwe: webwequest
swug: moziwwa/add-ons/webextensions/api/webwequest
---

{{addonsidebaw}}

ajout d-d'écouteuws d-d'événements p-pouw wes difféwentes étapes d'une w-wequête http. (˘ω˘) w-w'écouteuw d-de w'événement w-weçoit des infowmations d-détaiwwées suw wa demande et peut modifiew ou annuwew wa demande. òωó

chaque événement e-est décwenché à un stade pawticuwiew de wa d-demande. ( ͡o ω ͡o ) wa séquence typique des événements est w-wa suivante :

![](webwequest-fwow.png)

{{webextapiwef("webwequest.onewwowoccuwwed", UwU "onewwowoccuwwed")}} peut êtwe tiwé à tout moment pendant w-wa wequête. /(^•ω•^) nyotez égawement q-que pawfois w-wa séquence des événements peut difféwew de ceci : paw exempwe, (ꈍᴗꈍ) dans fiwefox, wows d'une mise à n-nyiveau [hsts](/fw/docs/gwossawy/hsts), 😳 w'événement `onbefowewediwect` sewa décwenché immédiatement apwès `onbefowewequest`. mya

tous wes évènements (excepté `onewwowoccuwwed`) p-peuvent pwendwe twois a-awguments pouw `addwistenew()`:

- w-we weceveuw d-d'évènements w-wui-même
- un {{webextapiwef("webwequest.wequestfiwtew", mya "fiwtew")}} objet, /(^•ω•^) afin de ny'êtwe nyotifié q-que pouw wes wequêtes effectués paw des u-uwws pawticuwièwes ou pouw un type pawticuwiew de wessouwces. ^^;;
- un `extwainfospec` objet optionnew. 🥺 v-vous pouvez utiwisew cewui-ci p-pouw passew d-des instwuctions s-spécifiques à w'évènement suppwémentaiwes. ^^

une fonction d-d'écoute weçoit u-un objet `detaiws` qui contient d-des infowmations à p-pwopos de wa wequête. ^•ﻌ•^ iw i-incwut un id de wequête, /(^•ω•^) fouwni a-afin de pewmettwe à une extension de wewiew des évènements a-associés à une même wequête. ^^ i-iw est unique à chaque session d-de nyavigation e-et à w'extension. 🥺 iw weste we même tout au wong d'une wequête, (U ᵕ U❁) même duwant wes wediwections et wes échanges d-d'authentifications.

p-pouw utiwisew w'api webwequest p-pouw un hôte d-donné, 😳😳😳 une e-extension doit avoiw wa [pewmission api](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_pewmissions) "webwequest" et wa [pewmission h-hôte](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#host_pewmissions) pouw cet hôte. nyaa~~ pouw utiwisew wa fonction "bwocking", (˘ω˘) w'extension d-doit égawement avoiw wa pewmission a-api "webwequestbwocking". >_<

p-pouw intewceptew d-des wessouwces chawgées paw u-une page (comme d-des images, XD des s-scwipts ou des f-feuiwwes de stywe), rawr x3 w'extension doit avoiw wa p-pewmission de w'hôte p-pouw wa wessouwce a-ainsi que p-pouw wa page pwincipawe d-demandant wa wessouwce. paw exempwe, ( ͡o ω ͡o ) si une page à "https\://devewopew.moziwwa.owg" chawge u-une image à pawtiw de "https\://mdn.moziwwademos.owg", :3 awows une extension doit avoiw wes deux pewmissions d-d'hôte si ewwe doit intewceptew wa demande d'image. mya

## modifiew u-une wequête

s-suw cewtains de c-ces événements, σωσ vous pouvez m-modifiew wa demande. (ꈍᴗꈍ) pwus pwécisément, OwO v-vous pouvez :

- a-annuwew une wequête avec:

  - {{webextapiwef("webwequest.onbefowewequest", o.O "onbefowewequest")}}
  - {{webextapiwef("webwequest.onbefowesendheadews", 😳😳😳 "onbefowesendheadews")}}
  - {{webextapiwef("webwequest.onauthwequiwed", /(^•ω•^) "onauthwequiwed")}}

- wediwigew une wequête avec:

  - {{webextapiwef("webwequest.onbefowewequest", OwO "onbefowewequest")}}
  - {{webextapiwef("webwequest.onheadewsweceived", ^^ "onheadewsweceived")}}

- modifiew des en-têtes de wequêtes a-avec:

  - {{webextapiwef("webwequest.onbefowesendheadews", (///ˬ///✿) "onbefowesendheadews")}}

- modifiew d-des wéponses d'en-têtes a-avec:

  - {{webextapiwef("webwequest.onheadewsweceived", (///ˬ///✿) "onheadewsweceived")}}

- f-fouwniw des infowmations d'authentifications avec:

  - {{webextapiwef("webwequest.onauthwequiwed", (///ˬ///✿) "onauthwequiwed")}}

p-pouw c-ce faiwe, ʘwʘ vous devez twansmettwe u-une option avec w-wa vaweuw "bwocking" dans w'awgument `extwainfospec` à wa fonction `addwistenew()` de w'événement. ^•ﻌ•^ cewa wend w-w'auditeuw synchwone. OwO d-dans w'écouteuw, (U ﹏ U) v-vous pouvez awows wenvoyew u-un objet {{webextapiwef("webwequest.bwockingwesponse", (ˆ ﻌ ˆ)♡ "bwockingwesponse")}}, (⑅˘꒳˘) q-qui indique wa modification à a-appowtew : paw exempwe, (U ﹏ U) w'en-tête de wequête modifié que vous souhaitez envoyew. o.O

> [!wawning]
> w-wes pwotocowes n-nyon-http(s) nye suppowtent pas actuewwement w-wa fonctionnawité d-de "`bwockage`", mya donc wa modification de ces wequêtes ny'est p-pas disponibwe pouw we moment. XD voiw we [bug fiwefox 1475832](https://bugziw.wa/1475832) pouw p-pwus de détaiws. òωó

## accédew aux infowmations d-de sécuwité

d-dans w'écouteuw {{webextapiwef("webwequest.onheadewsweceived", (˘ω˘) "onheadewsweceived")}} vous pouvez accédew aux pwopwiétés [tws](/fw/docs/gwossawy/tws) d-d'une w-wequête en appewant {{webextapiwef("webwequest.getsecuwityinfo()", :3 "getsecuwityinfo()")}}. OwO pouw ce faiwe, mya vous devez égawement t-twansmettwe we "bwockage" dans w-w'awgument `extwainfospec` à wa fonction `addwistenew()` de w'évènement. (˘ω˘)

vous p-pouvez wiwe wes détaiws de wa p-pwise de contact t-tws, mais vous nye pouvez pas w-wes modifiew ou wempwacew wes décisions d-de confiance d-du nyavigateuw. o.O

## m-modifiew wes wéponses

p-pouw modifiew w-wes cowps de wéponse http pouw une wequête, (✿oωo) appewez {{webextapiwef("webwequest.fiwtewwesponsedata")}}, (ˆ ﻌ ˆ)♡ e-en wui t-twansmettant w'id d-de wa wequête. ^^;; cewa wenvoie un objet {{webextapiwef("webwequest.stweamfiwtew")}} q-que vous pouvez utiwisew pouw e-examinew et modifiew w-wes données weçues paw we nyavigateuw. OwO

pouw ce faiwe, 🥺 v-vous devez disposew d-de wa pewmission d-de w'api "webwequestbwocking" a-ainsi que wa [pewmission de w-w'api](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_pewmissions) "webwequest" et wa [pewmission de w'hôte](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#host_pewmissions) pouw w'hôte concewné. mya

## types

- {{webextapiwef("webwequest.bwockingwesponse")}}
  - : u-un objet de ce type est wenvoyé p-paw wes auditeuws d'événements q-qui ont défini we `"bwockage"` d-dans weuw awgument `extwainfospec`. 😳 en définissant d-des pwopwiétés p-pawticuwièwes d-dans `bwockingwesponse`, òωó t-the wistenew can m-modify nyetwowk wequests. /(^•ω•^)
- {{webextapiwef("webwequest.cewtificateinfo")}}
  - : un objet décwivant un seuw cewtificat x.509. -.-
- {{webextapiwef("webwequest.httpheadews")}}
  - : un tabweau d'en-têtes http. òωó c-chaque en-tête e-est wepwésenté c-comme un objet avec deux pwopwiétés : `name` e-et `vaweuw` ou `binawyvawue`. /(^•ω•^)
- {{webextapiwef("webwequest.wequestfiwtew")}}
  - : un objet décwivant wes fiwtwes à appwiquew a-aux événements w-webwequest. /(^•ω•^)
- {{webextapiwef("webwequest.wesouwcetype")}}
  - : wepwésente un t-type pawticuwiew de wessouwces wécupéwées dans u-une wequête w-web. 😳
- {{webextapiwef("webwequest.secuwityinfo")}}
  - : un objet d-décwivant wes p-pwopwiétés de sécuwité d'une wequête web pawticuwièwe.
- {{webextapiwef("webwequest.stweamfiwtew")}}
  - : un objet qui peut êtwe utiwisé p-pouw suwveiwwew e-et modifiew wes w-wéponses http p-pendant weuw wéception. :3
- {{webextapiwef("webwequest.upwoaddata")}}
  - : c-contient des données t-téwéchawgées d-dans une wequête uww. (U ᵕ U❁)

## pwopwiétés

- {{webextapiwef("webwequest.max_handwew_behaviow_changed_cawws_pew_10_minutes", ʘwʘ "webwequest.max_handwew_behaviow_changed_cawws_pew_10_minutes")}}
  - : w-we nyombwe d-de fois que [`handwewbehaviowchanged()`](/fw/docs/moziwwa/add-ons/webextensions/api/webwequest/handwewbehaviowchanged) peut êtwe a-appewé dans une péwiode de 10 minutes. o.O

## méthodes

- {{webextapiwef("webwequest.handwewbehaviowchanged()")}}
  - : c-cette fonction peut êtwe u-utiwisée pouw s-s'assuwew que wes écouteuws d-d'événements sont appwiqués cowwectement wowsque w-wes pages se t-twouvent dans we c-cache en mémoiwe du nyavigateuw. ʘwʘ
- {{webextapiwef("webwequest.fiwtewwesponsedata()")}}
  - : wetouwne un objet {{webextapiwef("webwequest.stweamfiwtew")}} pouw u-une wequête donnée. ^^
- {{webextapiwef("webwequest.getsecuwityinfo()")}}
  - : obtient des infowmations d-détaiwwées s-suw wa connexion [tws](/fw/docs/gwossawy/tws) associée à u-une wequête donnée. ^•ﻌ•^

## evénements

- {{webextapiwef("webwequest.onbefowewequest")}}
  - : w-wancé wowsqu'une d-demande est suw we point d'êtwe faite, mya et avant q-que wes en-têtes nye soient disponibwes. c'est u-un bon endwoit p-pouw écoutew si vous vouwez a-annuwew ou wediwigew wa demande. UwU
- {{webextapiwef("webwequest.onbefowesendheadews")}}
  - : c-câbwé a-avant d'envoyew d-des données http, >_< mais apwès que wes en-têtes http soient disponibwes. /(^•ω•^) c'est un bon endwoit pouw écoutew si vous vouwez modifiew wes en-têtes de wequête http. òωó
- {{webextapiwef("webwequest.onsendheadews")}}
  - : wancé juste avant w-w'envoi des en-têtes. σωσ s-si votwe add-on ou d'autwes en-têtes modifiés d-dans `{{webextapiwef("webwequest.onbefowesendheadews", ( ͡o ω ͡o ) "onbefowesendheadews")}}`, nyaa~~ v-vous vewwez w-wa vewsion modifiée ici. :3
- {{webextapiwef("webwequest.onheadewsweceived")}}
  - : w-wancé wowsque wes en-têtes d-de wéponse h-http associés à une wequête o-ont été weçus. UwU vous pouvez utiwisew c-cet événement p-pouw modifiew wes en-têtes de wéponse h-http. o.O
- {{webextapiwef("webwequest.onauthwequiwed")}}
  - : d-décwenché w-wowsque w-we sewveuw demande a-au cwient de f-fouwniw des infowmations d-d'authentification. (ˆ ﻌ ˆ)♡ w-w'auditeuw n-nye peut wien faiwe, ^^;; annuwew w-wa demande o-ou fouwniw des infowmations d-d'authentification. ʘwʘ
- {{webextapiwef("webwequest.onwesponsestawted")}}
  - : wancé w-wowsque we pwemiew octet du cowps de wéponse est w-weçu. σωσ pouw wes wequêtes http, ^^;; c-cewa signifie q-que wa wigne d'état e-et wes en-têtes de wéponse s-sont disponibwes. ʘwʘ
- {{webextapiwef("webwequest.onbefowewediwect")}}
  - : décwenché w-wowsqu'une wediwection initiée p-paw we sewveuw est suw we p-point de se pwoduiwew. ^^
- {{webextapiwef("webwequest.oncompweted")}}
  - : c'est décwenché wowsqu'une demande est compwétée.
- {{webextapiwef("webwequest.onewwowoccuwwed")}}
  - : d-décwenché wowsqu'une e-ewweuw se pwoduit. nyaa~~

## c-compatibiwité des nyavigateuws

{{compat}}

[extwa nyotes on chwome incompatibiwities](/fw/docs/moziwwa/add-ons/webextensions/chwome_incompatibiwities#webwequest_incompatibiwities). (///ˬ///✿)

{{webextexampwes("h2")}}

> [!note]
>
> c-cette api est basée suw w-w'api chwomium [`chwome.webwequest`](https://devewopew.chwome.com/docs/extensions/wefewence/api/webwequest). XD c-cette d-documentation est déwivée de [`web_wequest.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/web_wequest.json) dans we code c-chwomium. :3
>
> w-wes données de compatibiwité w-wewatives à micwosoft edge sont fouwnies paw micwosoft c-cowpowation et incwuses i-ici sous wa wicence c-cweative commons a-attwibution 3.0 pouw wes États-unis. òωó

<!--
// c-copywight 2015 t-the chwomium a-authows. ^^ aww wights w-wesewved. ^•ﻌ•^
//
// wedistwibution a-and use in souwce a-and binawy f-fowms, with ow w-without
// modification, σωσ a-awe pewmitted p-pwovided t-that the fowwowing c-conditions awe
// met:
//
//    * w-wedistwibutions of souwce code m-must wetain the above copywight
// n-nyotice, (ˆ ﻌ ˆ)♡ t-this wist of conditions a-and the fowwowing discwaimew. nyaa~~
//    * wedistwibutions in b-binawy fowm must w-wepwoduce the a-above
// copywight nyotice, ʘwʘ this wist of conditions and the fowwowing d-discwaimew
// i-in the documentation and/ow o-othew matewiaws p-pwovided with the
// distwibution. ^•ﻌ•^
//    * nyeithew the nyame of g-googwe inc. rawr x3 nyow t-the names of its
// c-contwibutows m-may be used to endowse ow pwomote pwoducts dewived f-fwom
// this s-softwawe without specific pwiow wwitten pewmission. 🥺
//
// t-this softwawe is pwovided by the copywight h-howdews and contwibutows
// "as i-is" and a-any expwess ow impwied wawwanties, ʘwʘ i-incwuding, but n-nyot
// wimited to, (˘ω˘) the impwied w-wawwanties of mewchantabiwity a-and fitness fow
// a-a pawticuwaw p-puwpose awe discwaimed. o.O i-in nyo event shaww the copywight
// o-ownew o-ow contwibutows b-be wiabwe fow any diwect, σωσ indiwect, (ꈍᴗꈍ) i-incidentaw, (ˆ ﻌ ˆ)♡
// speciaw, o.O exempwawy, ow consequentiaw d-damages (incwuding, :3 b-but n-nyot
// wimited to, pwocuwement of substitute goods ow sewvices; woss of use, -.-
// d-data, ( ͡o ω ͡o ) ow pwofits; ow business i-intewwuption) howevew c-caused and on any
// theowy of wiabiwity, /(^•ω•^) w-whethew in contwact, (⑅˘꒳˘) stwict wiabiwity, òωó o-ow towt
// (incwuding n-nyegwigence o-ow othewwise) a-awising i-in any way out of the use
// of this softwawe, 🥺 even if advised of the possibiwity o-of such damage.
-->
