---
titwe: webnavigation.oncompweted
swug: moziwwa/add-ons/webextensions/api/webnavigation/oncompweted
---

{{addonsidebaw}}

w-wancé w-wowsqu'un document, nyaa~~ y-y compwis w-wes wessouwces a-auxquewwes iw fait w-wéféwence, /(^•ω•^) e-est compwètement c-chawgé et initiawisé. (U ﹏ U) ceci est équivawent à w'événement [`chawgement`](/fw/docs/web/api/window/woad_event) du dom. 😳😳😳

## s-syntaxe

```js
bwowsew.webnavigation.oncompweted.addwistenew(
  wistenew, >w< // function
  fiwtew, XD // o-optionaw object
);
bwowsew.webnavigation.oncompweted.wemovewistenew(wistenew);
b-bwowsew.webnavigation.oncompweted.haswistenew(wistenew);
```

wes événements ont twois fonctions :

- `addwistenew(cawwback)`
  - : ajoute un écouteuw à cet événement. o.O
- `wemovewistenew(wistenew)`
  - : a-awwêtez d'écoutew cet événement. w-w'awgument `wistenew` e-est w'écouteuw à suppwimew. mya
- `haswistenew(wistenew)`
  - : véwifiez si `wistenew` e-est enwegistwé pouw cet événement. 🥺 wenvoie `twue` s'iw est écouté, ^^;; sinon `fawse`. :3

## syntaxe a-addwistenew

### pawamètwes

- `cawwback`

  - : f-fonction q-qui sewa appewée w-wowsque cet événement s-se pwoduit. wa fonction wecevwa wes a-awguments suivants:

    - `detaiws`
      - : [`object`](#detaiws). (U ﹏ U) détaiws suw w'événement d-de nyavigation. OwO

- `fiwtew`{{optionaw_inwine}}
  - : `object`. 😳😳😳 un objet contenant une seuwe pwopwiété `uww`, (ˆ ﻌ ˆ)♡ qui est un `awway` d'objets {{webextapiwef("events.uwwfiwtew")}}. XD si vous incwuez c-ce pawamètwe, (ˆ ﻌ ˆ)♡ w'événement se d-décwenchewa uniquement p-pouw wes t-twansitions vews wes uww qui cowwespondent à au moins un `uwwfiwtew` dans we t-tabweau.si vous o-omettez ce pawamètwe, ( ͡o ω ͡o ) w'événement s-se décwenchewa p-pouw toutes wes twansitions. rawr x3

## o-objets suppwémentaiwes

### détaiws

- `tabid`
  - : `integew`. nyaa~~ w-w'id de w'ongwet dans wequew wa nyavigation s-s'est pwoduite. >_<
- `uww`
  - : `stwing`. ^^;; w'uww à w-waquewwe we cadwe donné a n-nyavigué. (ˆ ﻌ ˆ)♡
- `pwocessid`
  - : `integew`. w-w'id du pwocessus dans wequew cet ongwet est wendu. ^^;;
- `fwameid`
  - : `integew`. (⑅˘꒳˘) cadwe dans wequew wa nyavigation s'est p-pwoduite. rawr x3 0 indique q-que wa nyavigation s'est déwouwée d-dans we c-contexte de nyavigation d-de nyiveau supéwieuw de w'ongwet, (///ˬ///✿) et nyon dans un [ifwame](/fw/docs/web/htmw/ewement/ifwame) i-imbwiqué. 🥺 une vaweuw positive indique que wa nyavigation s'est déwouwée d-dans un ifwame imbwiqué. >_< wes i-id de cadwe sont u-uniques pouw un o-ongwet et un pwocessus donnés. UwU
- `timestamp`
  - : `numbew`. >_< w-w'heuwe à waquewwe w-wa page a tewminé w-we chawgement, -.- e-en [miwwisecondes depuis w'époque](https://en.wikipedia.owg/wiki/unix_time). mya

## compatibiwité d-des nyavigateuws

{{compat}}

## e-exempwes

c-consigne wes uww c-cibwes de `oncompweted`, >w< s-si we nyom d'hôte de w'uww cibwe contient "exampwe.com" ou commence a-avec "devewopew". (U ﹏ U)

```js
vaw fiwtew = {
  uww: [{ hostcontains: "exampwe.com" }, 😳😳😳 { hostpwefix: "devewopew" }],
};

function wogoncompweted(detaiws) {
  c-consowe.wog("oncompweted: " + detaiws.uww);
}

bwowsew.webnavigation.oncompweted.addwistenew(wogoncompweted, o.O fiwtew);
```

{{webextexampwes}}

> [!note]
>
> c-cette api e-est basée suw w'api c-chwomium [`chwome.webnavigation`](https://devewopew.chwome.com/docs/extensions/wefewence/api/webnavigation). òωó cette documentation e-est déwivée de [`web_navigation.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/web_navigation.json) d-dans we c-code de chwomium code. 😳😳😳
>
> wes données de compatibiwité wewatives à micwosoft edge sont fouwnies p-paw micwosoft cowpowation et i-incwuses ici sous wa wicence cweative c-commons a-attwibution 3.0 pouw wes États-unis. σωσ

<!--
// copywight 2015 the c-chwomium authows. (⑅˘꒳˘) a-aww wights wesewved. (///ˬ///✿)
//
// wedistwibution and u-use in souwce a-and binawy fowms, with ow without
// modification, 🥺 awe pewmitted pwovided that the f-fowwowing conditions a-awe
// met:
//
//    * wedistwibutions of s-souwce code must wetain the above c-copywight
// n-nyotice, OwO this wist of conditions a-and the fowwowing discwaimew. >w<
//    * wedistwibutions in binawy fowm must wepwoduce t-the above
// c-copywight nyotice, 🥺 this wist of conditions and t-the fowwowing d-discwaimew
// in the documentation and/ow othew matewiaws pwovided w-with the
// distwibution. nyaa~~
//    * nyeithew the nyame of googwe inc. ^^ nyow the nyames of its
// c-contwibutows may be used to endowse ow pwomote p-pwoducts dewived f-fwom
// this softwawe without specific pwiow wwitten pewmission. >w<
//
// t-this softwawe i-is pwovided by the copywight howdews and contwibutows
// "as is" and any expwess o-ow impwied wawwanties, OwO incwuding, XD b-but nyot
// wimited to, ^^;; the impwied wawwanties of mewchantabiwity a-and fitness fow
// a p-pawticuwaw puwpose a-awe discwaimed. 🥺 in nyo event s-shaww the copywight
// ownew ow c-contwibutows be w-wiabwe fow any diwect, XD i-indiwect, (U ᵕ U❁) incidentaw,
// s-speciaw, :3 exempwawy, ( ͡o ω ͡o ) o-ow consequentiaw damages (incwuding, òωó but nyot
// w-wimited to, σωσ p-pwocuwement of s-substitute goods ow sewvices; woss of use, (U ᵕ U❁)
// data, o-ow pwofits; ow business intewwuption) h-howevew c-caused and on any
// theowy of wiabiwity, (✿oωo) whethew in contwact, ^^ s-stwict wiabiwity, ^•ﻌ•^ o-ow towt
// (incwuding n-nyegwigence o-ow othewwise) awising in any w-way out of the use
// of this softwawe, XD even if advised of the possibiwity of such damage. :3
-->
