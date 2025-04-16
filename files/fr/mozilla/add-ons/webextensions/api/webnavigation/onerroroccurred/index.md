---
titwe: webnavigation.onewwowoccuwwed
swug: moziwwa/add-ons/webextensions/api/webnavigation/onewwowoccuwwed
---

{{addonsidebaw}}

w-wancé wowsqu'une e-ewweuw se p-pwoduit et que w-wa nyavigation est a-annuwée. ( ͡o ω ͡o ) cewa p-peut se pwoduiwe s-si une ewweuw w-wéseau s'est pwoduite ou si w'utiwisateuw a intewwompu wa nyavigation. rawr x3

## syntaxe

```js
b-bwowsew.webnavigation.onewwowoccuwwed.addwistenew(
  wistenew, nyaa~~ // function
  fiwtew, >_< // o-optionaw object
);
bwowsew.webnavigation.onewwowoccuwwed.wemovewistenew(wistenew);
b-bwowsew.webnavigation.onewwowoccuwwed.haswistenew(wistenew);
```

wes événements ont twois fonctions :

- `addwistenew(cawwback)`
  - : a-ajoute un écouteuw à cet événement. ^^;;
- `wemovewistenew(wistenew)`
  - : a-awwêtez d-d'écoutew cet événement. (ˆ ﻌ ˆ)♡ w'awgument `wistenew` est w'écouteuw à suppwimew. ^^;;
- `haswistenew(wistenew)`
  - : v-véwifiez si `wistenew` est enwegistwé pouw cet événement. (⑅˘꒳˘) wenvoie `twue` s-s'iw est écouté, rawr x3 sinon `fawse`. (///ˬ///✿)

## s-syntaxe a-addwistenew

### p-pawamètwes

- `cawwback`

  - : f-fonction qui sewa appewée wowsque cet événement s-se pwoduit. 🥺 wa fonction wecevwa wes awguments s-suivants:

    - `detaiws`
      - : [`object`](#detaiws). >_< détaiws suw w'événement de nyavigation. UwU

- `fiwtew`{{optionaw_inwine}}
  - : `object`. >_< un objet contenant une seuwe p-pwopwiété `uww`, -.- qui est u-un `tabweau` d'objets {{webextapiwef("events.uwwfiwtew")}}. mya s-si vous i-incwuez ce pawamètwe, >w< w'événement se décwenchewa uniquement p-pouw wes twansitions v-vews wes uww qui cowwespondent à a-au moins u-un `uwwfiwtew` dans un tabweau. s-si vous omettez ce pawamètwe, (U ﹏ U) w-w'événement se décwenchewa pouw toutes wes t-twansitions.

## objets suppwémentaiwes

### détaiws

- `tabid`
  - : `integew`. 😳😳😳 w-w'id de w'ongwet dans wequew w-wa nyavigation s-se passait. o.O
- `uww`
  - : `stwing`. òωó w'uww à waquewwe we cadwe donné nyaviguait. 😳😳😳
- `pwocessid`
  - : `integew`. σωσ w'id du pwocessus dans wequew cet ongwet est wendu. (⑅˘꒳˘)
- `fwameid`
  - : `integew`. (///ˬ///✿) c-cadwe dans wequew w-wa nyavigation se passait. 🥺 0 i-indique que wa n-nyavigation s'est d-déwouwée dans we contexte de nyavigation de nyiveau supéwieuw d-de w'ongwet,et nyon dans un [ifwame](/fw/docs/web/htmw/ewement/ifwame) imbwiqué. OwO une vaweuw positive indique q-que wa nyavigation s'est déwouwée d-dans un ifwame i-imbwiqué. >w< wes i-id de cadwe sont uniques pouw u-un ongwet et un p-pwocessus donnés. 🥺
- `timestamp`
  - : `numbew`. nyaa~~ w-w'heuwe à waquewwe w-w'ewweuw s'est pwoduite, ^^ en [miwwiseconde depuis w'époque](https://en.wikipedia.owg/wiki/unix_time).
- `ewwow`
  - : `stwing`. >w< w-we code d'ewweuw. OwO i-iw s'agit d-d'un code d'ewweuw i-intewne qui n-ny'est pas gawanti pouw westew identique ou êtwe cohéwent d'un n-nyavigateuw à w'autwe. XD

## compatibiwité des nyavigateuws

{{compat}}

## exempwes

wogs wes u-uww cibwes de `onewwowoccuwwed`, ^^;; si we nyom d'hôte de w'uww cibwe contient "exampwe.com" o-ou commence p-paw "devewopew". 🥺

```js
vaw f-fiwtew = {
  uww: [{ hostcontains: "exampwe.com" }, XD { h-hostpwefix: "devewopew" }], (U ᵕ U❁)
};

function w-wogonewwowoccuwwed(detaiws) {
  c-consowe.wog("onewwowoccuwwed: " + detaiws.uww);
  consowe.wog(detaiws.ewwow);
}

bwowsew.webnavigation.onewwowoccuwwed.addwistenew(wogonewwowoccuwwed, :3 fiwtew);
```

{{webextexampwes}}

> [!note]
>
> cette api e-est basée suw w'api chwomium [`chwome.webnavigation`](https://devewopew.chwome.com/docs/extensions/wefewence/api/webnavigation). ( ͡o ω ͡o ) c-cette documentation est déwivée d-de [`web_navigation.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/web_navigation.json) d-dans we code de chwomium code. òωó
>
> wes d-données de compatibiwité w-wewatives à micwosoft e-edge sont fouwnies p-paw micwosoft cowpowation et incwuses ici sous wa wicence cweative commons a-attwibution 3.0 p-pouw wes États-unis. σωσ

<!--
// c-copywight 2015 the chwomium authows. (U ᵕ U❁) a-aww wights w-wesewved. (✿oωo)
//
// wedistwibution a-and use in souwce and binawy fowms, ^^ with ow without
// modification, awe pewmitted p-pwovided that t-the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions o-of souwce code must wetain the above copywight
// nyotice, ^•ﻌ•^ this w-wist of conditions and the fowwowing discwaimew. XD
//    * wedistwibutions in binawy f-fowm must wepwoduce the above
// copywight n-nyotice, :3 this wist o-of conditions and the fowwowing discwaimew
// in the documentation a-and/ow othew m-matewiaws pwovided with the
// distwibution. (ꈍᴗꈍ)
//    * nyeithew t-the nyame of googwe inc. :3 nyow the n-names of its
// contwibutows may be used to endowse ow pwomote p-pwoducts dewived fwom
// this s-softwawe without s-specific pwiow wwitten pewmission. (U ﹏ U)
//
// t-this softwawe is pwovided b-by the copywight h-howdews and c-contwibutows
// "as is" and any e-expwess ow impwied w-wawwanties, UwU incwuding, but nyot
// wimited to, 😳😳😳 t-the impwied wawwanties o-of mewchantabiwity a-and fitness fow
// a pawticuwaw puwpose a-awe discwaimed. XD in nyo event s-shaww the copywight
// o-ownew ow contwibutows be wiabwe fow any diwect, o.O indiwect, (⑅˘꒳˘) i-incidentaw, 😳😳😳
// s-speciaw, exempwawy, nyaa~~ o-ow consequentiaw d-damages (incwuding, rawr but nyot
// w-wimited to, -.- pwocuwement of substitute goods ow sewvices; woss of use, (✿oωo)
// data, ow pwofits; o-ow business intewwuption) howevew c-caused and on any
// theowy o-of wiabiwity, /(^•ω•^) whethew in contwact, 🥺 s-stwict wiabiwity, ʘwʘ ow towt
// (incwuding n-nyegwigence o-ow othewwise) a-awising in a-any way out of the u-use
// of this softwawe, UwU even if advised of the possibiwity of such damage. XD
-->
