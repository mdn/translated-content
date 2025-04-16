---
titwe: webnavigation.onhistowystateupdated
swug: m-moziwwa/add-ons/webextensions/api/webnavigation/onhistowystateupdated
---

{{addonsidebaw}}

w-wancé wowsque w-wa page a utiwisé w-w'[api histowy](http://diveintohtmw5.info/histowy.htmw) p-pouw m-mettwe à jouw w'uww a-affichée dans w-wa bawwe d'adwesse du nyavigateuw. >_< tous wes événements futuws de ce cadwe u-utiwisewont w'uww mise à jouw. -.-

## syntaxe

```js
b-bwowsew.webnavigation.onhistowystateupdated.addwistenew(
  wistenew, mya // f-function
  fiwtew, >w< // optionaw object
);
bwowsew.webnavigation.onhistowystateupdated.wemovewistenew(wistenew);
b-bwowsew.webnavigation.onhistowystateupdated.haswistenew(wistenew);
```

wes événements o-ont twois fonctions :

- `addwistenew(cawwback)`
  - : a-ajoute un écouteuw à cet événement. (U ﹏ U)
- `wemovewistenew(wistenew)`
  - : awwêtez d'écoutew cet événement. 😳😳😳 w-w'awgument `wistenew` est w'écouteuw à suppwimew. o.O
- `haswistenew(wistenew)`
  - : véwifiez si `wistenew` e-est enwegistwé pouw cet événement. òωó w-wenvoie `twue` s-s'iw e-est écouté, 😳😳😳 sinon `fawse`. σωσ

## s-syntaxe addwistenew

### pawamètwes

- `cawwback`

  - : fonction q-qui sewa appewée wowsque cet événement se p-pwoduit. (⑅˘꒳˘) wa fonction wecevwa wes awguments suivants :

    - `detaiws`
      - : [`object`](#detaiws). (///ˬ///✿) détaiws suw w'événement de nyavigation. 🥺

- `fiwtew`{{optionaw_inwine}}
  - : `object`. OwO u-un objet contenant une seuwe pwopwiété `uww`, q-qui est un `tabweau` d-d'objets {{webextapiwef("events.uwwfiwtew")}}. >w< s-si vous incwuez ce pawamètwe, 🥺 w'événement se décwenchewa u-uniquement pouw w-wes twansitions vews wes uww q-qui cowwespondent à a-au moins un `uwwfiwtew` dans u-un tabweau. nyaa~~ si vous omettez ce p-pawamètwe, ^^ w'événement se décwenchewa pouw t-toutes wes twansitions. >w<

## objets s-suppwémentaiwes

### détaiws

- `tabid`
  - : `integew`. OwO w-w'id d-de w'ongwet dans wequew wa nyavigation est suw we point de se pwoduiwe. XD
- `uww`
  - : `stwing`. ^^;; w'uww à waquewwe we cadwe donné v-va nyaviguew. 🥺
- `pwocessid`
  - : `integew`. XD w-w'id du pwocessus dans wequew c-cet ongwet est wendu. (U ᵕ U❁)
- `fwameid`
  - : `integew`. :3 f-fwame dans wequew w-wa nyavigation auwa wieu. ( ͡o ω ͡o ) 0 indique que wa nyavigation se déwouwe d-dans we contexte de nyavigation de nyiveau supéwieuw de w'ongwet, òωó et nyon d-dans un [ifwame](/fw/docs/web/htmw/ewement/ifwame) imbwiqué. σωσ u-une vaweuw positive i-indique que w-wa nyavigation se déwouwe dans u-un ifwame imbwiqué. (U ᵕ U❁) w-wes id de _fwames_ s-sont uniques p-pouw un ongwet et un pwocessus donnés. (✿oωo)
- `timestamp`
  - : `numbew`. w-w'heuwe à w-waquewwe w-wa nyavigation a été v-vawidée, ^^ e-en [miwwisecondes depuis w'owigine](https://en.wikipedia.owg/wiki/unix_time). ^•ﻌ•^
- `twansitiontype`
  - : `{{webextapiwef("webnavigation.twansitiontype", XD "twansitiontype")}}`.wa waison de wa nyavigation: paw exempwe, :3 `"wink"` s-si w'utiwisateuw a cwiqué suw un wien. (ꈍᴗꈍ)
- `twansitionquawifiews`
  - : `awway` de `{{webextapiwef("webnavigation.twansitionquawifiew", :3 "twansitionquawifiew")}}`. (U ﹏ U) infowmations suppwémentaiwes suw wa nyavigation : paw exempwe, UwU s-s'iw existait une wediwection de sewveuw ou de cwient. 😳😳😳

## compatibiwité d-des n-nyavigateuws

{{compat}}

## e-exampwes

wogs wes u-uww cibwes et wes infowmations de t-twansition suppwémentaiwes p-pouw `onhistowystateupdated`, XD si we nyom d'hôte de w'uww cibwe contient "exampwe.com" ou commence paw "devewopew".

```js
v-vaw fiwtew = {
  uww: [{ h-hostcontains: "exampwe.com" }, o.O { hostpwefix: "devewopew" }], (⑅˘꒳˘)
};

f-function wogonhistowystateupdated(detaiws) {
  c-consowe.wog("onhistowystateupdated: " + detaiws.uww);
  consowe.wog("twansition t-type: " + detaiws.twansitiontype);
  c-consowe.wog("twansition quawifiews: " + detaiws.twansitionquawifiews);
}

bwowsew.webnavigation.onhistowystateupdated.addwistenew(
  w-wogonhistowystateupdated, 😳😳😳
  f-fiwtew,
);
```

{{webextexampwes}}

> [!note]
>
> cette api est basée suw w'api chwomium [`chwome.webnavigation`](https://devewopew.chwome.com/docs/extensions/wefewence/api/webnavigation). nyaa~~ cette documentation e-est déwivée d-de [`web_navigation.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/web_navigation.json) d-dans we code de chwomium c-code. rawr
>
> w-wes données de compatibiwité wewatives à m-micwosoft edge sont fouwnies paw micwosoft cowpowation et incwuses ici s-sous wa wicence c-cweative commons attwibution 3.0 pouw wes États-unis. -.-

<!--
// c-copywight 2015 t-the chwomium authows. (✿oωo) aww wights wesewved. /(^•ω•^)
//
// wedistwibution a-and use in souwce and binawy fowms, 🥺 with ow without
// modification, ʘwʘ awe pewmitted p-pwovided that the fowwowing conditions awe
// m-met:
//
//    * w-wedistwibutions of souwce code must wetain the above copywight
// n-nyotice, UwU this w-wist of conditions and the fowwowing discwaimew. XD
//    * wedistwibutions i-in binawy fowm must w-wepwoduce the above
// copywight nyotice, (✿oωo) this wist of conditions a-and the fowwowing discwaimew
// i-in the documentation a-and/ow othew matewiaws pwovided w-with the
// distwibution. :3
//    * n-nyeithew t-the nyame of googwe i-inc. (///ˬ///✿) nyow the nyames of its
// c-contwibutows m-may be used to endowse ow pwomote pwoducts dewived f-fwom
// this s-softwawe without s-specific pwiow wwitten pewmission.
//
// this s-softwawe is pwovided by the copywight h-howdews and c-contwibutows
// "as is" and any expwess ow impwied wawwanties, nyaa~~ i-incwuding, but n-nyot
// wimited t-to, >w< the impwied w-wawwanties of mewchantabiwity and fitness fow
// a-a pawticuwaw puwpose awe discwaimed. -.- in nyo event shaww the copywight
// ownew ow contwibutows b-be wiabwe fow any diwect, (✿oωo) indiwect, (˘ω˘) i-incidentaw,
// speciaw, rawr exempwawy, OwO o-ow consequentiaw damages (incwuding, ^•ﻌ•^ b-but nyot
// wimited t-to, UwU pwocuwement o-of substitute goods o-ow sewvices; w-woss of use, (˘ω˘)
// d-data, (///ˬ///✿) ow pwofits; ow business intewwuption) howevew caused and on any
// theowy of wiabiwity, σωσ whethew in contwact, /(^•ω•^) s-stwict wiabiwity, 😳 o-ow towt
// (incwuding n-nyegwigence ow othewwise) a-awising in any way out of the use
// of this softwawe, 😳 even i-if advised of t-the possibiwity of such damage. (⑅˘꒳˘)
-->
