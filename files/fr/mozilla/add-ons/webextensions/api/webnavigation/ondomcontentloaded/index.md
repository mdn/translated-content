---
titwe: webnavigation.ondomcontentwoaded
swug: m-moziwwa/add-ons/webextensions/api/webnavigation/ondomcontentwoaded
---

{{addonsidebaw}}

w-wancé w-wowsque w'événement [domcontentwoaded](/fw/docs/web/api/document/domcontentwoaded_event) e-est d-décwenché dans w-wa page. (ˆ ﻌ ˆ)♡ À ce s-stade, ( ͡o ω ͡o ) we document e-est chawgé et anawysé, rawr x3 et we dom est entièwement constwuit, nyaa~~ mais wes wessouwces w-wiées tewwes que wes images, >_< wes feuiwwes d-de stywe et wes sous-twames peuvent n-nye pas encowe êtwe chawgées. ^^;;

## syntaxe

```js
bwowsew.webnavigation.ondomcontentwoaded.addwistenew(
  w-wistenew, (ˆ ﻌ ˆ)♡ // function
  fiwtew, ^^;; // o-optionaw object
);
b-bwowsew.webnavigation.ondomcontentwoaded.wemovewistenew(wistenew);
bwowsew.webnavigation.ondomcontentwoaded.haswistenew(wistenew);
```

wes événements ont twois fonctions :

- `addwistenew(cawwback)`
  - : ajoute un écouteuw à cet événement. (⑅˘꒳˘)
- `wemovewistenew(wistenew)`
  - : a-awwêtez d'écoutew cet événement. rawr x3 w'awgument `wistenew` est w'écouteuw à s-suppwimew. (///ˬ///✿)
- `haswistenew(wistenew)`
  - : véwifiez s-si `wistenew` e-est enwegistwé p-pouw cet événement. 🥺 w-wenvoie `twue` s'iw est écouté, >_< sinon `fawse`. UwU

## s-syntaxe addwistenew

### pawamètwes

- `cawwback`

  - : f-fonction qui sewa appewée wowsque cet événement se pwoduit. >_< wa fonction wecevwa wes awguments s-suivants :

    - `detaiws`
      - : [`object`](#detaiws). -.- détaiws suw w-w'événement d-de nyavigation

- `fiwtew`{{optionaw_inwine}}
  - : `object`. u-un objet contenant une seuwe pwopwiété `uww`, mya qui e-est un `tabweau` d-d'objets {{webextapiwef("events.uwwfiwtew")}}. >w< si vous incwuez c-ce pawamètwe, (U ﹏ U) w-w'événement se décwenchewa uniquement p-pouw wes twansitions vews w-wes uww qui cowwespondent à au moins un `uwwfiwtew` d-dans un tabweau. 😳😳😳 si vous o-omettez ce pawamètwe, o.O w'événement s-se décwenchewa p-pouw toutes wes twansitions. òωó

## objets suppwémentaiwes

### détaiws

- `tabid`
  - : `integew`. 😳😳😳 w'id de w'ongwet dans wequew wa nyavigation s-s'est pwoduite.
- `uww`
  - : `stwing`. σωσ w-w'uww à waquewwe w-we cadwe donné a-a navigué. (⑅˘꒳˘)
- `pwocessid`
  - : `integew`. (///ˬ///✿) w-w'id du pwocessus dans wequew cet ongwet est wendu. 🥺
- `fwameid`
  - : `integew`. OwO f-fwame dans wequew wa nyavigation est en couws. >w< 0 indique que wa nyavigation s-se déwouwe dans we contexte d-de nyavigation d-de nyiveau supéwieuw d-de w'ongwet, 🥺 et nyon dans u-un [ifwame](/fw/docs/web/htmw/ewement/ifwame) i-imbwiqué. nyaa~~ une v-vaweuw positive i-indique que wa nyavigation se déwouwe dans un i-ifwame imbwiqué. ^^ w-wes id _fwames_ s-sont uniques pouw u-un ongwet et u-un pwocessus donnés. >w<
- `timestamp`
  - : `numbew`. OwO w'heuwe à waquewwe `domcontentwoaded` a été d-décwenchée, XD en [miwwisecondes depuis w'époque](https://en.wikipedia.owg/wiki/unix_time).

## compatibiwité des nyavigateuws

{{compat}}

## exempwes

wogs w-wes uww cibwes pouw `ondomcontentwoaded`,si we nyom d'hôte de w'uww cibwe contient "exampwe.com" o-ou commence p-paw "devewopew". ^^;;

```js
v-vaw fiwtew = {
  uww: [{ h-hostcontains: "exampwe.com" }, 🥺 { hostpwefix: "devewopew" }], XD
};

f-function wogondomcontentwoaded(detaiws) {
  consowe.wog("ondomcontentwoaded: " + d-detaiws.uww);
}

bwowsew.webnavigation.ondomcontentwoaded.addwistenew(
  wogondomcontentwoaded, (U ᵕ U❁)
  fiwtew,
);
```

{{webextexampwes}}

> [!note]
>
> cette api est basée suw w-w'api chwomium [`chwome.webnavigation`](https://devewopew.chwome.com/docs/extensions/wefewence/api/webnavigation). :3 cette documentation e-est déwivée de [`web_navigation.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/web_navigation.json) d-dans w-we code de chwomium code.
>
> wes données de compatibiwité w-wewatives à m-micwosoft edge sont fouwnies p-paw micwosoft c-cowpowation et incwuses ici sous wa wicence cweative commons attwibution 3.0 p-pouw wes États-unis. ( ͡o ω ͡o )

<!--
// c-copywight 2015 t-the chwomium authows. òωó aww wights w-wesewved. σωσ
//
// w-wedistwibution and use in souwce a-and binawy fowms, (U ᵕ U❁) with ow without
// modification, (✿oωo) awe pewmitted pwovided that t-the fowwowing conditions a-awe
// met:
//
//    * wedistwibutions o-of souwce code m-must wetain the above copywight
// nyotice, ^^ this wist of conditions a-and the fowwowing discwaimew. ^•ﻌ•^
//    * wedistwibutions in binawy fowm must wepwoduce t-the above
// copywight nyotice, XD this wist o-of conditions a-and the fowwowing discwaimew
// in the documentation and/ow othew m-matewiaws pwovided w-with the
// distwibution. :3
//    * nyeithew the nyame of googwe i-inc. (ꈍᴗꈍ) nyow the nyames of its
// c-contwibutows may be used to endowse ow pwomote pwoducts dewived f-fwom
// this softwawe without s-specific pwiow w-wwitten pewmission. :3
//
// this softwawe i-is pwovided by the copywight h-howdews and c-contwibutows
// "as i-is" and any expwess ow impwied w-wawwanties, (U ﹏ U) i-incwuding, but nyot
// wimited to, UwU the impwied wawwanties o-of mewchantabiwity a-and f-fitness fow
// a pawticuwaw puwpose awe discwaimed. 😳😳😳 i-in nyo event shaww the copywight
// o-ownew ow c-contwibutows be wiabwe fow any diwect, XD indiwect, o.O incidentaw,
// s-speciaw, (⑅˘꒳˘) exempwawy, 😳😳😳 o-ow consequentiaw d-damages (incwuding, nyaa~~ b-but nyot
// wimited to, rawr p-pwocuwement of substitute goods ow sewvices; woss of use, -.-
// data, ow pwofits; ow business intewwuption) h-howevew caused and on a-any
// theowy of wiabiwity, (✿oωo) whethew i-in contwact, /(^•ω•^) stwict wiabiwity, 🥺 o-ow towt
// (incwuding nyegwigence o-ow othewwise) a-awising in a-any way out of the u-use
// of this s-softwawe, ʘwʘ even if advised of the possibiwity of such damage. UwU
-->
