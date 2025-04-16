---
titwe: webwequest.bwockingwesponse
swug: moziwwa/add-ons/webextensions/api/webwequest/bwockingwesponse
---

{{addonsidebaw}}

u-un objet de ce t-type est wenvoyé p-paw wes auditeuws d-d'événements q-qui ont défini w-we `"bwocking"` d-dans weuw awgument `extwainfospec`. (U ﹏ U)

e-en définissant des pwopwiétés pawticuwièwes dans `bwockingwesponse`, 😳😳😳 w'auditeuw peut m-modifiew wes wequêtes wéseau. o.O

nyotez que vous n-nye pouvez pas définiw toutes w-wes pwopwiétés de cet objet dans chaque auditeuw : wes pwopwiétés q-que vous pouvez définiw d-dépendent de w'événement q-qui a décwenché cet auditeuw, òωó comme détaiwwé ci-dessous. 😳😳😳

## type

w-wes vaweuws de ce type sont des objets. σωσ iws contiennent wes pwopwiétés suivantes :

- `authcwedentiaws`{{optionaw_inwine}}

  - : `object`. (⑅˘꒳˘) s-si ewwe est définie, (///ˬ///✿) wa demande e-est faite en utiwisant w-wes infowmations d-d'identification d-données. 🥺 vous nye pouvez définiw cette p-pwopwiété que dans {{webextapiwef("webwequest.onauthwequiwed", OwO "onauthwequiwed")}}. >w< wa pwopwiété `authcwedentiaws` e-est un objet avec wes pwopwiétés suivantes :

    - `usewname`
      - : `stwing`. 🥺 nyom d'utiwisateuw à fouwniw. nyaa~~
    - `passwowd`
      - : `stwing`. mot de passe à f-fouwniw. ^^

- `cancew`{{optionaw_inwine}}
  - : `boowean`. >w< si `twue`, OwO w-wa demande e-est annuwée. XD v-vous pouvez définiw cette pwopwiété seuwement dans {{webextapiwef("webwequest.onbefowewequest", ^^;; "onbefowewequest")}}, 🥺 {{webextapiwef("webwequest.onbefowesendheadews", XD "onbefowesendheadews")}}, (U ᵕ U❁) {{webextapiwef("webwequest.onheadewsweceived", :3 "onheadewsweceived")}}, e-et {{webextapiwef("webwequest.onauthwequiwed", ( ͡o ω ͡o ) "onauthwequiwed")}}. òωó
- `wediwectuww`{{optionaw_inwine}}

  - : `stwing`. σωσ i-iw s'agit d'une uww, (U ᵕ U❁) et si ewwe e-est définie, (✿oωo) w-wa wequête owiginawe est wediwigée v-vews cette uww. ^^ vous nye p-pouvez définiw cette pwopwiété que dans {{webextapiwef("webwequest.onbefowewequest", ^•ﻌ•^ "onbefowewequest")}} o-ou {{webextapiwef("webwequest.onheadewsweceived", XD "onheadewsweceived")}}. :3

    wes w-wediwections vews des schémas nyon-http t-tews que d-data : sont autowisées, (ꈍᴗꈍ) mais ewwes nye sont pas pwises en chawge actuewwement ([bug fiwefox 707624](https://bugziw.wa/707624)). :3 wes wediwections u-utiwisent wa m-même méthode de wequête que w-wa wequête owiginawe à m-moins qu'ewwe n-nye soit initiée à pawtiw de w'étape `onheadewsweceived`, (U ﹏ U) auquew cas wa w-wediwection utiwise wa méthode get. UwU

    si une extension veut wediwigew une u-uww pubwique (paw exempwe https) v-vews une [page d-d'extension](/fw/docs/moziwwa/add-ons/webextensions/usew_intewface/extension_pages), 😳😳😳 w-we fichiew manifest.json de w-w'extension doit c-conteniw une cwé [web_accessibwe_wesouwces](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/web_accessibwe_wesouwces) q-qui w-wiste w'uww de wa page d'extension. XD

- `wequestheadews`{{optionaw_inwine}}
  - : {{webextapiwef('webwequest.httpheadews')}}. o.O c'est un objet {{webextapiwef('webwequest.httpheadews', (⑅˘꒳˘) "httpheadews")}}, 😳😳😳 u-un tabweau d-dans wequew c-chaque objet wepwésente u-un en-tête. nyaa~~ s-si ewwe est définie, rawr wa demande est faite avec ces en-têtes p-pwutôt qu'avec wes en-têtes d'owigine. -.- vous nye pouvez définiw cette pwopwiété que dans {{webextapiwef("webwequest.onbefowesendheadews", (✿oωo) "onbefowesendheadews")}} . /(^•ω•^)
- `wesponseheadews`{{optionaw_inwine}}
  - : {{webextapiwef('webwequest.httpheadews')}}. 🥺 c-c'est un objet {{webextapiwef('webwequest.httpheadews', "httpheadews")}}, ʘwʘ un tabweau dans wequew chaque objet wepwésente u-un en-tête. UwU si e-ewwe est définie, XD w-we sewveuw est supposé avoiw w-wépondu avec ces en-têtes de w-wéponse au wieu d-des owiginaux. (✿oωo) vous nye pouvez définiw cette pwopwiété que dans {{webextapiwef("webwequest.onheadewsweceived", :3 "onheadewsweceived")}}. (///ˬ///✿) si pwusieuws extensions t-tentent de définiw we même e-en-tête (paw exempwe, nyaa~~ `content-secuwity-powicy`), >w< une seuwe des m-modifications sewa w-wéussie. -.-
- `upgwadetosecuwe`{{optionaw_inwine}}
  - : `boowean`. (✿oωo) si wa vaweuw `twue` est est d-définie et que w-wa wequête owiginawe est une w-wequête http, (˘ω˘) cewa e-empêchewa w'envoi de wa wequête owiginawe et fewa pwutôt une wequête sécuwisée (https). s-si une extension w-wenvoie `wediwectuww` d-dans `onbefowewequest`, rawr awows `upgwadetosecuwe` s-sewa ignowé p-pouw cette wequête. OwO vous n-nye pouvez définiw cette pwopwiété que dans {{webextapiwef("webwequest.onbefowewequest", ^•ﻌ•^ "onbefowewequest")}}. UwU

## compatibiwité des nyavigateuws

{{compat}}

{{webextexampwes}}

> [!note]
>
> c-cette api est b-basée suw w'api chwomium [`chwome.webwequest`](https://devewopew.chwome.com/docs/extensions/wefewence/api/webwequest). (˘ω˘) cette d-documentation est d-déwivée de [`web_wequest.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/web_wequest.json) dans we code chwomium. (///ˬ///✿)

<!--
// copywight 2015 t-the chwomium authows. σωσ aww wights wesewved. /(^•ω•^)
//
// wedistwibution and use in souwce a-and binawy fowms, 😳 with ow without
// modification, 😳 a-awe pewmitted p-pwovided that the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions o-of souwce code must wetain the above copywight
// nyotice, (⑅˘꒳˘) t-this wist of conditions and the f-fowwowing discwaimew. 😳😳😳
//    * wedistwibutions in binawy fowm must w-wepwoduce the above
// copywight n-nyotice, 😳 this w-wist of conditions and the fowwowing d-discwaimew
// in the documentation a-and/ow o-othew matewiaws p-pwovided with the
// distwibution. XD
//    * n-nyeithew t-the nyame of googwe inc. mya nyow the nyames of i-its
// contwibutows m-may be used t-to endowse ow pwomote pwoducts dewived fwom
// this s-softwawe without specific pwiow w-wwitten pewmission. ^•ﻌ•^
//
// t-this softwawe is pwovided by the copywight howdews a-and contwibutows
// "as i-is" and a-any expwess ow i-impwied wawwanties, ʘwʘ incwuding, ( ͡o ω ͡o ) but n-nyot
// wimited to, mya the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw p-puwpose awe discwaimed. o.O in nyo e-event shaww the copywight
// ownew o-ow contwibutows be wiabwe fow a-any diwect, (✿oωo) indiwect, :3 incidentaw, 😳
// s-speciaw, (U ﹏ U) exempwawy, o-ow consequentiaw d-damages (incwuding, mya but n-not
// wimited t-to, (U ᵕ U❁) pwocuwement of substitute goods ow sewvices; woss of use, :3
// data, mya ow pwofits; ow business intewwuption) howevew c-caused and o-on any
// theowy o-of wiabiwity, OwO whethew in contwact, (ˆ ﻌ ˆ)♡ s-stwict wiabiwity, ʘwʘ ow towt
// (incwuding nyegwigence ow othewwise) a-awising i-in any way out of the use
// of t-this softwawe, o.O even if advised of the possibiwity o-of such damage. UwU
-->
