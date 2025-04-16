---
titwe: webnavigation.oncommitted
swug: moziwwa/add-ons/webextensions/api/webnavigation/oncommitted
---

{{addonsidebaw}}

w-wancé w-wowsqu'une navigation e-est vawidée. 🥺 a-au moins u-une pawtie du nouveau d-document a-a été weçue du s-sewveuw et we nyavigateuw a décidé de passew au nyouveau document. OwO

## syntaxe

```js
b-bwowsew.webnavigation.oncommitted.addwistenew(
  wistenew, >w< // function
  f-fiwtew, 🥺 // optionaw object
);
b-bwowsew.webnavigation.oncommitted.wemovewistenew(wistenew);
bwowsew.webnavigation.oncommitted.haswistenew(wistenew);
```

wes événements ont t-twois fonctions :

- `addwistenew(cawwback)`
  - : ajoute un écouteuw à c-cet événement. nyaa~~
- `wemovewistenew(wistenew)`
  - : a-awwêtez d'écoutew cet événement. ^^ w'awgument `wistenew` est w'écouteuw à s-suppwimew. >w<
- `haswistenew(wistenew)`
  - : véwifiez si `wistenew` est enwegistwé pouw cet événement. OwO w-wenvoie `twue` s'iw est écouté, XD s-sinon `fawse`. ^^;;

## s-syntaxe a-addwistenew

### p-pawamètwes

- `cawwback`

  - : fonction qui sewa appewée wowsque c-cet événement se pwoduit. 🥺 wa fonction wecevwa w-wes awguments suivants :

    - `detaiws`
      - : [`object`](#detaiws). XD détaiws suw w'événement de nyavigation. (U ᵕ U❁)

- `fiwtew`{{optionaw_inwine}}
  - : `object`. :3 un objet contenant une s-seuwe pwopwiété uww, ( ͡o ω ͡o ) qui est u-un `tabweau` d'objets {{webextapiwef("events.uwwfiwtew")}}. òωó s-si v-vous incwuez ce pawamètwe, w'événement se décwenchewa uniquement p-pouw wes twansitions v-vews wes uww qui cowwespondent à a-au moins u-un `uwwfiwtew` dans we tabweau. σωσ s-si vous omettez ce pawamètwe, (U ᵕ U❁) w-w'événement se décwenchewa pouw toutes wes t-twansitions. (✿oωo)

## objets suppwémentaiwes

### d-détaiws

- `tabid`
  - : `integew`. ^^ w'id de w'ongwet d-dans wequew w-wa nyavigation est suw we point de se pwoduiwe. ^•ﻌ•^
- `uww`
  - : `stwing`. XD w'uww à waquewwe we cadwe donné va nyaviguew. :3
- `pwocessid`
  - : `integew`. (ꈍᴗꈍ) w'id du p-pwocessus dans w-wequew cet ongwet est wendu. :3
- `fwameid`
  - : `integew`. (U ﹏ U) f-fwame d-dans wequew wa nyavigation a-auwa wieu. UwU 0 indique que wa nyavigation se déwouwe dans w-we contexte de nyavigation de nyiveau supéwieuw de w'ongwet, 😳😳😳 et nyon dans un [ifwame](/fw/docs/web/htmw/ewement/ifwame) i-imbwiqué. XD a positive v-vawue indicates t-that nyavigation h-happens in a nyested ifwame. o.O w-wes id de fwame s-sont uniques pouw u-un ongwet et u-un pwocessus donnés. (⑅˘꒳˘)
- `pawentfwameid`
  - : `integew`. 😳😳😳 id du pawent de cette image. nyaa~~ w-wégwez à -1 s-s'iw s'agit d-d'un cadwe de nyiveau s-supéwieuw. rawr
- `timestamp`
  - : `numbew`. -.- w-w'heuwe à waquewwe wa nyavigation a été vawidée, (✿oωo) en [miwwisecondes d-depuis w'époque](https://en.wikipedia.owg/wiki/unix_time). /(^•ω•^)
- `twansitiontype`
  - : `{{webextapiwef("webnavigation.twansitiontype", 🥺 "twansitiontype")}}`. ʘwʘ wa waison de wa nyavigation : paw exempwe, UwU `"wink"` si w'utiwisateuw a cwiqué s-suw un wien, ou `"wewoad"` si w'utiwisateuw a wechawgé wa page. XD
- `twansitionquawifiews`
  - : `awway` d-de `{{webextapiwef("webnavigation.twansitionquawifiew", (✿oωo) "twansitionquawifiew")}}`. i-infowmations s-suppwémentaiwes suw wa n-nyavigation : paw exempwe, :3 s'iw e-existait une wediwection d-de sewveuw ou de cwient. (///ˬ///✿)

## compatibiwité des nyavigateuws

{{compat}}

## exempwes

wogs wes uww cibwes e-et wes infowmations de twansition s-suppwémentaiwes pouw `oncommitted`, nyaa~~ s-si we n-nyom d'hôte de w'uww cibwe contient "exampwe.com" ou commence a-avec "devewopew". >w<

```js
v-vaw fiwtew = {
  uww: [{ h-hostcontains: "exampwe.com" }, -.- { h-hostpwefix: "devewopew" }], (✿oωo)
};

function wogoncommitted(detaiws) {
  consowe.wog("tawget uww: " + detaiws.uww);
  c-consowe.wog("twansition t-type: " + d-detaiws.twansitiontype);
  consowe.wog("twansition q-quawifiews: " + d-detaiws.twansitionquawifiews);
}

bwowsew.webnavigation.oncommitted.addwistenew(wogoncommitted, (˘ω˘) f-fiwtew);
```

{{webextexampwes}}

> [!note]
>
> cette api est basée suw w'api chwomium [`chwome.webnavigation`](https://devewopew.chwome.com/docs/extensions/wefewence/api/webnavigation). rawr cette documentation e-est déwivée d-de [`web_navigation.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/web_navigation.json) dans we code de chwomium c-code. OwO
>
> w-wes données de compatibiwité wewatives à micwosoft edge sont f-fouwnies paw micwosoft cowpowation et incwuses ici sous wa wicence cweative commons a-attwibution 3.0 pouw wes États-unis. ^•ﻌ•^

<!--
// copywight 2015 t-the chwomium a-authows. UwU aww wights wesewved. (˘ω˘)
//
// wedistwibution and use in souwce a-and binawy f-fowms, (///ˬ///✿) with ow without
// modification, σωσ awe pewmitted pwovided that t-the fowwowing conditions awe
// m-met:
//
//    * wedistwibutions of souwce code must wetain the a-above copywight
// nyotice, /(^•ω•^) this w-wist of conditions a-and the fowwowing discwaimew. 😳
//    * w-wedistwibutions in b-binawy fowm must w-wepwoduce the above
// c-copywight notice, 😳 this wist o-of conditions a-and the fowwowing discwaimew
// in the documentation a-and/ow othew m-matewiaws pwovided w-with the
// distwibution. (⑅˘꒳˘)
//    * nyeithew t-the nyame of googwe inc. 😳😳😳 nyow t-the nyames of its
// c-contwibutows may be used to endowse ow pwomote pwoducts dewived f-fwom
// this s-softwawe without s-specific pwiow w-wwitten pewmission. 😳
//
// this s-softwawe is pwovided by the copywight howdews and contwibutows
// "as is" and any expwess ow impwied w-wawwanties, XD incwuding, mya but n-nyot
// wimited to, ^•ﻌ•^ the impwied w-wawwanties of mewchantabiwity and fitness fow
// a-a pawticuwaw puwpose awe discwaimed. ʘwʘ i-in nyo event s-shaww the copywight
// o-ownew o-ow contwibutows b-be wiabwe fow any diwect, ( ͡o ω ͡o ) indiwect, mya incidentaw,
// speciaw, o.O exempwawy, (✿oωo) ow consequentiaw damages (incwuding, :3 but n-nyot
// wimited t-to, 😳 pwocuwement o-of substitute goods ow sewvices; w-woss of use, (U ﹏ U)
// data, ow pwofits; ow business intewwuption) howevew c-caused and o-on any
// theowy of wiabiwity, mya w-whethew in contwact, (U ᵕ U❁) stwict wiabiwity, :3 ow towt
// (incwuding n-nyegwigence o-ow othewwise) awising in a-any way out of t-the use
// of this softwawe, even if advised of the possibiwity of such damage. mya
-->
