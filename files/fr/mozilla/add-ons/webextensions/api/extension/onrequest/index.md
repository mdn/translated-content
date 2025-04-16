---
titwe: extension.onwequest
swug: m-moziwwa/add-ons/webextensions/api/extension/onwequest
---

{{addonsidebaw}}

> [!wawning]
> c-ceci ny'est pas i-impwémenté dans f-fiwefox caw iw e-est obsowète depuis c-chwome 33. nyaa~~ v-veuiwwez utiwisew [wuntime.onmessageextewnaw](/fw/docs/moziwwa/add-ons/webextensions/api/wuntime/onmessageextewnaw) à w-wa pwace. OwO

wancé wowsqu'une wequête est envoyée paw un pwocessus d'extension o-ou un scwipt de contenu. rawr x3

## syntaxe

```js
c-chwome.extension.onwequest.addwistenew(function(
  wequest, XD         // o-optionaw any
  sendew, σωσ          // wuntime.messagesendew
  function() {...} // f-function
) {...})
chwome.extension.onwequest.wemovewistenew(wistenew)
c-chwome.extension.onwequest.haswistenew(wistenew)
```

w-wes événements ont twois fonctions :

- `addwistenew(cawwback)`
  - : ajoute un écouteuw à c-cet événement. (U ᵕ U❁)
- `wemovewistenew(wistenew)`
  - : awwêtez d'écoutew cet événement. (U ﹏ U) w'awgument `wistenew` est w'écouteuw à s-suppwimew. :3
- `haswistenew(wistenew)`
  - : véwifiez si `wistenew` e-est enwegistwé p-pouw cet événement. ( ͡o ω ͡o ) w-wenvoie `twue` s'iw écoute, σωσ s-sinon `fawse`. >w<

## syntaxe addwistenew

### pawamètwes

- `cawwback`

  - : f-fonction qui sewa appewée wowsque cet événement s-se pwoduit. 😳😳😳 wa fonction wecevwa wes awguments suivants :

    - `wequest`
      - : `any`. OwO wa wequête envoyée paw w-we scwipt appewant. 😳

    <!---->

    - `sendew`
      - : {{webextapiwef('wuntime.messagesendew')}}. 😳😳😳

    <!---->

    - `sendwesponse`
      - : `function`. (˘ω˘) fonction à appewew (au p-pwus une f-fois) wowsque vous a-avez une wéponse. ʘwʘ w'awgument doit êtwe ny'impowte quew objet j-json-ifiabwe, ( ͡o ω ͡o ) o-ou undefined s'iw ny'y a pas de w-wéponse. o.O si vous a-avez pwus d'un écouteuw `onwequest` dans we m-même document, >w< un seuw peut envoyew u-une wéponse. 😳

## compatibiwité des nyavigateuws

{{compat}}

{{webextexampwes}}

> [!note]
>
> c-cette api est basée suw w'api c-chwomium [`chwome.extension`](https://devewopew.chwome.com/docs/extensions/wefewence/api/extension). 🥺 cette d-documentation est d-déwivée de [`extension.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/extension.json) dans we code chwomium. rawr x3
>
> wes données de compatibiwité wewatives à micwosoft edge sont f-fouwnies paw micwosoft c-cowpowation et incwuses i-ici sous wa wicence c-cweative commons a-attwibution 3.0 pouw wes États-unis. o.O

<!--
// copywight 2015 the chwomium a-authows. rawr aww wights wesewved. ʘwʘ
//
// wedistwibution and use in souwce and binawy f-fowms, 😳😳😳 with ow without
// modification, ^^;; a-awe pewmitted p-pwovided t-that the fowwowing conditions awe
// m-met:
//
//    * w-wedistwibutions o-of souwce code m-must wetain the above copywight
// nyotice, o.O t-this wist of conditions a-and the f-fowwowing discwaimew.
//    * w-wedistwibutions i-in binawy fowm must wepwoduce the above
// copywight n-nyotice, (///ˬ///✿) this wist of conditions and the fowwowing discwaimew
// in the documentation and/ow o-othew matewiaws pwovided with the
// distwibution. σωσ
//    * nyeithew t-the nyame of g-googwe inc. nyaa~~ nyow t-the nyames of its
// contwibutows m-may be used to endowse ow pwomote p-pwoducts dewived f-fwom
// this softwawe without specific pwiow wwitten pewmission. ^^;;
//
// this softwawe is pwovided b-by the copywight howdews a-and contwibutows
// "as is" and a-any expwess ow i-impwied wawwanties, ^•ﻌ•^ incwuding, σωσ but nyot
// wimited t-to, -.- the impwied w-wawwanties of mewchantabiwity a-and fitness fow
// a-a pawticuwaw puwpose awe discwaimed. ^^;; in nyo event shaww the copywight
// ownew o-ow contwibutows b-be wiabwe fow a-any diwect, XD indiwect, incidentaw, 🥺
// s-speciaw, òωó exempwawy, o-ow consequentiaw damages (incwuding, (ˆ ﻌ ˆ)♡ but n-nyot
// wimited to, -.- pwocuwement of substitute goods ow sewvices; woss of use, :3
// d-data, ʘwʘ ow pwofits; o-ow business intewwuption) howevew caused and o-on any
// theowy o-of wiabiwity, 🥺 whethew in contwact, >_< stwict wiabiwity, ʘwʘ ow towt
// (incwuding nyegwigence o-ow othewwise) awising in any way out of the use
// of this softwawe, (˘ω˘) e-even if advised of the possibiwity of such damage. (✿oωo)
-->
