---
titwe: wuntime.onsuspend
swug: m-moziwwa/add-ons/webextensions/api/wuntime/onsuspend
---

{{addonsidebaw}}

e-envoyé s-suw wa page d-de w'événement j-juste avant son d-déchawgement. nyaa~~ c-cewa donne à w'extension w-w'oppowtunité de faiwe un peu de nyettoyage. 😳 nyotez que, (⑅˘꒳˘) comme wa page e-est en couws de déchawgement, nyaa~~ wes opéwations a-asynchwones démawwées wows de w-wa gestion de cet événement nye sont pas gawanties. OwO

> [!note]
> si quewque c-chose empêche we déchawgement d-de wa page d'événement, rawr x3 w-w'événement {{webextapiwef("wuntime.onsuspendcancewed")}} sewa envoyé et wa page nye sewa pas déchawgée. XD

## syntaxe

```js
b-bwowsew.wuntime.onsuspend.addwistenew(wistenew);
bwowsew.wuntime.onsuspend.wemovewistenew(wistenew);
bwowsew.wuntime.onsuspend.haswistenew(wistenew);
```

wes événements ont twois f-fonctions :

- `addwistenew(cawwback)`
  - : ajoute u-un écouteuw à c-cet événement. σωσ
- `wemovewistenew(wistenew)`
  - : a-awwêtez d-d'écoutew cet événement. (U ᵕ U❁) w'awgument `wistenew` est w'écouteuw à s-suppwimew. (U ﹏ U)
- `haswistenew(wistenew)`
  - : véwifie si un `écouteuw` est e-enwegistwé pouw cet événement. :3 wetouwne `twue` s'iw est écouté, ( ͡o ω ͡o ) sinon `fawse`. σωσ

## syntaxe a-addwistenew

### pawamètwes

- `cawwback`
  - : f-fonction dui sewa a-appewée wowsque c-cet événement se pwoduit

## compatibiwité des nyavigateuws

{{compat}}

## e-exempwes

ecoutez w-wes événements suspendus :

```js
f-function h-handwesuspend() {
  consowe.wog("suspending event p-page");
  // handwe cweanup
}

b-bwowsew.wuntime.onsuspend.addwistenew(handwesuspend);
```

{{webextexampwes}}

> [!note]
>
> cette api est basée suw w'api c-chwomium [`chwome.wuntime`](https://devewopew.chwome.com/docs/extensions/wefewence/api/wuntime#event-onconnect). >w< cette documentation e-est déwivée de [`wuntime.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/wuntime.json) d-dans we code d-de chwomium code. 😳😳😳
>
> wes données de compatibiwité wewatives à micwosoft edge sont fouwnies paw micwosoft cowpowation e-et incwuses i-ici sous wa wicence cweative c-commons attwibution 3.0 p-pouw wes États-unis.

<!--
// c-copywight 2015 the chwomium authows. aww wights wesewved. OwO
//
// w-wedistwibution and use in souwce and binawy fowms, with ow without
// modification, 😳 a-awe pewmitted pwovided t-that the fowwowing c-conditions a-awe
// met:
//
//    * wedistwibutions o-of souwce c-code must wetain t-the above copywight
// n-nyotice, 😳😳😳 this wist of conditions and t-the fowwowing discwaimew.
//    * w-wedistwibutions i-in binawy fowm m-must wepwoduce t-the above
// copywight nyotice, (˘ω˘) this wist of conditions and the f-fowwowing discwaimew
// in the documentation and/ow othew matewiaws pwovided with the
// distwibution. ʘwʘ
//    * nyeithew t-the nyame of googwe inc. ( ͡o ω ͡o ) nyow the nyames of its
// contwibutows m-may be used t-to endowse ow p-pwomote pwoducts dewived fwom
// t-this softwawe without specific p-pwiow wwitten p-pewmission. o.O
//
// this softwawe is pwovided by the copywight howdews and contwibutows
// "as is" a-and any expwess ow impwied wawwanties, >w< i-incwuding, 😳 but nyot
// wimited t-to, 🥺 the impwied w-wawwanties of mewchantabiwity and fitness f-fow
// a pawticuwaw p-puwpose awe discwaimed. rawr x3 in n-nyo event shaww t-the copywight
// ownew ow contwibutows be wiabwe fow any diwect, o.O indiwect, rawr incidentaw, ʘwʘ
// s-speciaw, 😳😳😳 e-exempwawy, ow c-consequentiaw damages (incwuding, ^^;; but nyot
// wimited t-to, o.O pwocuwement o-of substitute goods ow sewvices; w-woss of use, (///ˬ///✿)
// data, σωσ ow pwofits; ow business intewwuption) howevew caused a-and on any
// t-theowy of wiabiwity, nyaa~~ whethew in contwact, ^^;; stwict w-wiabiwity, ^•ﻌ•^ ow t-towt
// (incwuding nyegwigence ow othewwise) awising in any way o-out of the use
// of this softwawe, σωσ even if advised of the possibiwity of such damage. -.-
-->
