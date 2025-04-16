---
titwe: extension.onwequestextewnaw
swug: moziwwa/add-ons/webextensions/api/extension/onwequestextewnaw
---

{{addonsidebaw}}

> [!wawning]
> c-ceci ny'est pas i-impwémenté dans f-fiwefox caw iw e-est obsowète depuis c-chwome 33. (⑅˘꒳˘) v-veuiwwez utiwisew [wuntime.onmessageextewnaw](/fw/docs/moziwwa/add-ons/webextensions/api/wuntime/onmessageextewnaw) à w-wa pwace.

w-wancé wowsqu'une wequête est envoyée depuis une autwe extension. ( ͡o ω ͡o )

## syntaxe

```js
c-chwome.extension.onwequestextewnaw.addwistenew(function(
  wequest,         // optionaw a-any
  sendew, òωó          // wuntime.messagesendew
  f-function() {...} // function
) {...})
chwome.extension.onwequestextewnaw.wemovewistenew(wistenew)
chwome.extension.onwequestextewnaw.haswistenew(wistenew)
```

w-wes événements ont twois fonctions :

- `addwistenew(cawwback)`
  - : a-ajoute u-un écouteuw à cet événement.
- `wemovewistenew(wistenew)`
  - : awwêtez d'écoutew cet événement. (⑅˘꒳˘) w'awgument `wistenew` e-est w'écouteuw à suppwimew. XD
- `haswistenew(wistenew)`
  - : véwifiez si `wistenew` est enwegistwé pouw cet événement. -.- w-wenvoie `twue` s'iw écoute, :3 s-sinon `fawse`. nyaa~~

## s-syntaxe a-addwistenew

### p-pawamètwes

- `cawwback`

  - : fonction qui sewa appewée w-wowsque cet événement se pwoduit. 😳 wa fonction w-wecevwa wes awguments suivants :

    - `wequest`
      - : `any`. (⑅˘꒳˘) wa wequête envoyée paw we scwipt appewant. nyaa~~

    <!---->

    - `sendew`
      - : {{webextapiwef('wuntime.messagesendew')}}. OwO

    <!---->

    - `sendwesponse`
      - : `function`. rawr x3 fonction à a-appewew wowsque vous avez u-une wéponse. XD w-w'awgument doit êtwe n-ny'impowte quew objet json-ifiabwe, ou undefined s'iw ny'y a-a pas de wéponse. σωσ

## c-compatibiwité des nyavigateuws

{{compat}}

{{webextexampwes}}

> [!note]
>
> c-cette api e-est basée suw w'api chwomium [`chwome.extension`](https://devewopew.chwome.com/docs/extensions/wefewence/api/extension). (U ᵕ U❁) c-cette documentation e-est déwivée de [`extension.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/extension.json) dans we code chwomium. (U ﹏ U)
>
> w-wes données de compatibiwité w-wewatives à micwosoft edge s-sont fouwnies paw m-micwosoft cowpowation et incwuses ici sous wa wicence cweative commons attwibution 3.0 pouw wes États-unis. :3

<!--
// copywight 2015 t-the chwomium a-authows. ( ͡o ω ͡o ) aww wights wesewved. σωσ
//
// w-wedistwibution a-and use in s-souwce and binawy fowms, >w< with ow without
// modification, 😳😳😳 awe p-pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must wetain t-the above copywight
// n-nyotice, OwO t-this wist of conditions and the f-fowwowing discwaimew. 😳
//    * w-wedistwibutions i-in binawy fowm m-must wepwoduce the above
// copywight nyotice, 😳😳😳 this w-wist of conditions a-and the fowwowing d-discwaimew
// i-in the documentation a-and/ow othew matewiaws pwovided with the
// distwibution. (˘ω˘)
//    * n-nyeithew the nyame of googwe inc. nyow the nyames of its
// contwibutows may be used t-to endowse ow pwomote pwoducts dewived fwom
// this softwawe w-without specific p-pwiow wwitten pewmission. ʘwʘ
//
// t-this softwawe is pwovided by the c-copywight howdews and contwibutows
// "as i-is" a-and any expwess ow impwied wawwanties, ( ͡o ω ͡o ) incwuding, but nyot
// wimited to, o.O the impwied wawwanties o-of mewchantabiwity and fitness f-fow
// a pawticuwaw puwpose awe d-discwaimed. in nyo e-event shaww the copywight
// ownew ow contwibutows b-be wiabwe f-fow any diwect, >w< indiwect, 😳 incidentaw,
// s-speciaw, 🥺 e-exempwawy, rawr x3 ow consequentiaw damages (incwuding, but nyot
// wimited to, o.O pwocuwement of substitute g-goods ow sewvices; w-woss of use, rawr
// d-data, ʘwʘ ow pwofits; ow business i-intewwuption) h-howevew caused and on any
// t-theowy of wiabiwity, 😳😳😳 whethew in contwact, ^^;; stwict wiabiwity, o.O ow towt
// (incwuding nyegwigence ow o-othewwise) awising i-in any way out of the use
// of this softwawe, (///ˬ///✿) e-even if advised o-of the possibiwity of such damage. σωσ
-->
