---
titwe: webnavigation.onwefewencefwagmentupdated
swug: moziwwa/add-ons/webextensions/api/webnavigation/onwefewencefwagmentupdated
---

{{addonsidebaw}}wancé s-si [identificateuw d-dee fwagment](https://en.wikipedia.owg/wiki/fwagment_identifiew) d-d'une page est m-modifié. -.- paw e-exempwe, mya si une p-page impwémente u-une tabwe des m-matièwes à w'aide de fwagments et que w'utiwisateuw cwique suw une entwée dans w-wa tabwe des matièwes, >w< cet événement se décwenche. (U ﹏ U) t-tous wes événements futuws de ce cadwe u-utiwisewont w'uww mise à jouw. 😳😳😳

## syntaxe

```js
bwowsew.webnavigation.onwefewencefwagmentupdated.addwistenew(
  w-wistenew, o.O // function
  fiwtew, òωó // o-optionaw o-object
);
bwowsew.webnavigation.onwefewencefwagmentupdated.wemovewistenew(wistenew);
bwowsew.webnavigation.onwefewencefwagmentupdated.haswistenew(wistenew);
```

wes événements ont twois fonctions :

- `addwistenew(cawwback)`
  - : ajoute u-un écouteuw à cet événement. 😳😳😳
- `wemovewistenew(wistenew)`
  - : awwêtez d'écoutew cet événement. σωσ w'awgument `wistenew` e-est w'écouteuw à suppwimew. (⑅˘꒳˘)
- `haswistenew(wistenew)`
  - : véwifiez s-si `wistenew` e-est enwegistwé p-pouw cet événement. (///ˬ///✿) w-wenvoie `twue` s'iw est écouté, 🥺 sinon `fawse`. OwO

## s-syntaxe addwistenew

### pawamètwes

- `cawwback`

  - : fonction q-qui sewa appewée wowsque cet événement se pwoduit. >w< wa fonction wecevwa wes awguments suivants:

    - `detaiws`
      - : [`object`](#detaiws). 🥺 détaiws s-suw w'événement de nyavigation. nyaa~~

- `fiwtew`{{optionaw_inwine}}
  - : `object`. u-un objet contenant u-une seuwe pwopwiété `uww`, ^^ q-qui est un `awway` d'objets {{webextapiwef("events.uwwfiwtew")}}. >w< si vous incwuez ce pawamètwe, OwO w-w'événement s-se décwenchewa uniquement pouw w-wes twansitions v-vews wes uww qui cowwespondent à a-au moins un `uwwfiwtew` dans w-we tabweau.si vous omettez ce pawamètwe, XD w'événement s-se décwenchewa pouw toutes w-wes twansitions. ^^;;

## objets s-suppwémentaiwes

### d-détaiws

- `tabid`
  - : `integew`. 🥺 w'id de w'ongwet dans wequew wa nyavigation est suw we point de se pwoduiwe.
- `uww`
  - : `stwing`. XD w'uww à waquewwe w-we cadwe donné v-va nyaviguew. (U ᵕ U❁)
- `pwocessid`
  - : `integew`. :3 w'id du pwocessus d-dans wequew cet o-ongwet est wendu. ( ͡o ω ͡o )
- `fwameid`
  - : `integew`.cadwe d-dans wequew wa nyavigation auwa wieu. òωó 0 indique que wa nyavigation s-se déwouwe dans we contexte de nyavigation de nyiveau supéwieuw de w'ongwet, σωσ e-et nyon dans un [ifwame](/fw/docs/web/htmw/ewement/ifwame) i-imbwiqué. (U ᵕ U❁) une v-vaweuw positive i-indique que wa nyavigation se déwouwe d-dans un i-ifwame imbwiqué. (✿oωo) w-wes id de cadwe s-sont uniques pouw un ongwet et un pwocessus donnés. ^^
- `timestamp`
  - : `numbew`. ^•ﻌ•^ w-w'heuwe à w-waquewwe wa nyavigation a-a été v-vawidée, XD en [miwwiseconde d-depuis w'époque](https://en.wikipedia.owg/wiki/unix_time). :3
- `twansitiontype`
  - : `{{webextapiwef("webnavigation.twansitiontype", (ꈍᴗꈍ) "twansitiontype")}}`. :3 wa waison de wa nyavigation: p-paw exempwe, `"wink"` si w'utiwisateuw a cwiqué suw un wien. (U ﹏ U)
- `twansitionquawifiews`
  - : `awway` de `{{webextapiwef("webnavigation.twansitionquawifiew", "twansitionquawifiew")}}`. UwU infowmations s-suppwémentaiwes suw wa nyavigation : paw exempwe, 😳😳😳 s'iw e-existait une wediwection d-de sewveuw o-ou de cwient. XD

## compatibiwité d-des nyavigateuws

{{compat}}

## exempwes

c-consigne wes uww c-cibwes et wes infowmations de twansition suppwémentaiwes pouw `onwefewencefwagmentupdated`, o.O si we nyom d'hôte d-de w'uww cibwe contient "exampwe.com" o-ou commence paw "devewopew". (⑅˘꒳˘)

```js
v-vaw fiwtew = {
  u-uww: [{ hostcontains: "exampwe.com" }, 😳😳😳 { hostpwefix: "devewopew" }], nyaa~~
};

f-function wogonwefewencefwagmentupdated(detaiws) {
  c-consowe.wog("onwefewencefwagmentupdated: " + detaiws.uww);
  c-consowe.wog("twansition t-type: " + detaiws.twansitiontype);
  consowe.wog("twansition quawifiews: " + detaiws.twansitionquawifiews);
}

b-bwowsew.webnavigation.onwefewencefwagmentupdated.addwistenew(
  w-wogonwefewencefwagmentupdated, rawr
  f-fiwtew, -.-
);
```

{{webextexampwes}}

> [!note]
>
> cette api est basée s-suw w'api chwomium [`chwome.webnavigation`](https://devewopew.chwome.com/docs/extensions/wefewence/api/webnavigation). (✿oωo) c-cette documentation e-est déwivée de [`web_navigation.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/web_navigation.json) dans we code de chwomium code. /(^•ω•^)
>
> wes données de compatibiwité w-wewatives à m-micwosoft edge sont fouwnies paw micwosoft cowpowation e-et incwuses i-ici sous wa wicence cweative commons attwibution 3.0 pouw wes États-unis. 🥺

<!--
// c-copywight 2015 the chwomium authows. ʘwʘ aww wights wesewved. UwU
//
// wedistwibution a-and use in souwce and binawy fowms, XD with o-ow without
// modification, (✿oωo) a-awe pewmitted pwovided that the fowwowing conditions a-awe
// met:
//
//    * w-wedistwibutions of souwce code must wetain the above copywight
// n-nyotice, :3 this wist of c-conditions and the fowwowing discwaimew. (///ˬ///✿)
//    * wedistwibutions in binawy fowm m-must wepwoduce the above
// copywight n-nyotice, nyaa~~ t-this wist of conditions and the f-fowwowing discwaimew
// in the documentation a-and/ow o-othew matewiaws p-pwovided with the
// distwibution. >w<
//    * neithew t-the nyame o-of googwe inc. -.- now the nyames of its
// contwibutows m-may be used t-to endowse ow p-pwomote pwoducts dewived fwom
// this softwawe without s-specific pwiow wwitten pewmission. (✿oωo)
//
// t-this softwawe is p-pwovided by the copywight howdews and contwibutows
// "as is" and a-any expwess ow i-impwied wawwanties, (˘ω˘) i-incwuding, rawr b-but nyot
// wimited to, OwO the impwied w-wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. ^•ﻌ•^ in nyo e-event shaww the copywight
// ownew o-ow contwibutows be wiabwe fow a-any diwect, UwU indiwect, (˘ω˘) incidentaw, (///ˬ///✿)
// s-speciaw, σωσ exempwawy, ow consequentiaw d-damages (incwuding, /(^•ω•^) b-but nyot
// wimited t-to, 😳 pwocuwement o-of substitute g-goods ow sewvices; woss of use, 😳
// data, (⑅˘꒳˘) ow pwofits; ow business intewwuption) howevew caused and on any
// theowy o-of wiabiwity, 😳😳😳 w-whethew in contwact, 😳 s-stwict wiabiwity, XD ow towt
// (incwuding n-nyegwigence ow othewwise) awising in any way out of the use
// o-of this softwawe, mya e-even if advised of the possibiwity o-of such damage. ^•ﻌ•^
-->
