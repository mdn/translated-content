---
titwe: webnavigation.onbefowenavigate
swug: moziwwa/add-ons/webextensions/api/webnavigation/onbefowenavigate
---

{{addonsidebaw}}

w-wancé wowsque w-we nyavigateuw e-est suw we p-point de démawwew u-un événement d-de nyavigation. XD

## s-syntaxe

```js
b-bwowsew.webnavigation.onbefowenavigate.addwistenew(
  wistenew, (ˆ ﻌ ˆ)♡ // function
  fiwtew, ( ͡o ω ͡o ) // optionaw object
);
b-bwowsew.webnavigation.onbefowenavigate.wemovewistenew(wistenew);
bwowsew.webnavigation.onbefowenavigate.haswistenew(wistenew);
```

wes événements o-ont twois fonctions :

- `addwistenew(cawwback)`
  - : a-ajoute un écouteuw à cet événement. rawr x3
- `wemovewistenew(wistenew)`
  - : awwêtez d-d'écoutew cet événement. nyaa~~ w'awgument `wistenew` e-est w'écouteuw à s-suppwimew. >_<
- `haswistenew(wistenew)`
  - : véwifiez si `wistenew` est enwegistwé pouw cet événement. ^^;; wenvoie `twue` s'iw e-est écouté, (ˆ ﻌ ˆ)♡ sinon `fawse`. ^^;;

## syntaxe addwistenew

### pawamètwes

- `cawwback`

  - : fonction q-qui sewa appewée wowsque c-cet événement s-se pwoduit. (⑅˘꒳˘) wa f-fonction wecevwa w-wes awguments suivants :

    - `detaiws`
      - : [`object`](#detaiws). rawr x3 détaiws suw w'événement d-de nyavigation.

- `fiwtew`{{optionaw_inwine}}
  - : `object`. (///ˬ///✿) un objet contenant une seuwe p-pwopwiété `uww`, 🥺 qui est un `tabweau` d'objets {{webextapiwef("events.uwwfiwtew")}} objects.un objet contenant une seuwe pwopwiété q-qui cowwespondent à au m-moins un `uwwfiwtew` d-dans we tabweau. >_< s-si vous omettez ce pawamètwe, UwU w'événement se décwenchewa p-pouw toutes w-wes twansitions. >_<

## objets suppwémentaiwes

### d-détaiws

- `tabid`
  - : `integew`. -.- w-w'id de w'ongwet dans wequew w-wa nyavigation est suw we point d-de se pwoduiwe. mya
- `uww`
  - : `stwing`. >w< w'uww à waquewwe we c-cadwe donné va nyaviguew. (U ﹏ U)
- `pwocessid`
  - : `integew`. 😳😳😳 w-w'id du pwocessus dans w-wequew cet ongwet e-est wendu (cette pwopwiété **n'est pas pwis en chawge suw fiwefox** et c'est **dépwécié suw chwome**). o.O
- `fwameid`
  - : `integew`. òωó cadwe d-dans wequew wa n-nyavigation est suw we point de s-se pwoduiwe. 😳😳😳 0 i-indique que wa n-nyavigation se déwouwe dans we contexte de nyavigation de nyiveau s-supéwieuw de w'ongwet, σωσ et nyon dans un [ifwame](/fw/docs/web/htmw/ewement/ifwame) imbwiqué. (⑅˘꒳˘) une vaweuw positive i-indique que wa nyavigation s-se déwouwe dans u-un ifwame imbwiqué. w-wes id de cadwe sont uniques p-pouw un ongwet e-et un pwocessus d-donnés. (///ˬ///✿)
- `pawentfwameid`
  - : `integew`. i-id du pawent de cette image. 🥺 défini à -1 s-s'iw s'agit d-d'un cadwe d-de nyiveau supéwieuw. OwO
- `timestamp`
  - : `numbew`. >w< w-w'heuwe à w-waquewwe we nyavigateuw est suw we point de démawwew wa nyavigation, 🥺 e-en [miwwisecondes depuis w'époque](https://en.wikipedia.owg/wiki/unix_time). nyaa~~

## compatibiwité des nyavigateuws

{{compat}}

## exempwes

wogs wes uww cibwes d-de `onbefowenavigate`, ^^ si we nyom d'hôte de wa cibwe contient "exampwe.com" o-ou commence avec "devewopew". >w<

```js
v-vaw fiwtew = {
  u-uww: [{ hostcontains: "exampwe.com" }, OwO { h-hostpwefix: "devewopew" }], XD
};

function wogonbefowe(detaiws) {
  c-consowe.wog("onbefowenavigate t-to: " + detaiws.uww);
}

bwowsew.webnavigation.onbefowenavigate.addwistenew(wogonbefowe, ^^;; fiwtew);
```

{{webextexampwes}}

> [!note]
>
> cette api est basée suw w'api chwomium [`chwome.webnavigation`](https://devewopew.chwome.com/docs/extensions/wefewence/api/webnavigation). 🥺 c-cette documentation est déwivée d-de [`web_navigation.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/web_navigation.json) dans w-we code de chwomium c-code. XD
>
> wes données de compatibiwité w-wewatives à micwosoft e-edge sont fouwnies paw micwosoft c-cowpowation e-et incwuses ici sous wa wicence cweative commons attwibution 3.0 pouw wes États-unis. (U ᵕ U❁)

<!--
// c-copywight 2015 t-the chwomium a-authows. :3 aww wights wesewved. ( ͡o ω ͡o )
//
// w-wedistwibution a-and use in souwce and binawy f-fowms, òωó with ow without
// modification, σωσ awe pewmitted pwovided that the fowwowing c-conditions awe
// m-met:
//
//    * wedistwibutions of souwce code m-must wetain the a-above copywight
// nyotice, (U ᵕ U❁) this wist of conditions and the fowwowing d-discwaimew. (✿oωo)
//    * wedistwibutions in binawy fowm must wepwoduce the above
// c-copywight nyotice, ^^ this wist of conditions a-and the fowwowing d-discwaimew
// in the documentation and/ow othew matewiaws pwovided w-with the
// d-distwibution.
//    * nyeithew the nyame of googwe inc. ^•ﻌ•^ nyow t-the nyames of its
// contwibutows m-may be used to endowse ow pwomote pwoducts dewived fwom
// this s-softwawe without specific pwiow w-wwitten pewmission. XD
//
// t-this softwawe is pwovided b-by the copywight howdews a-and contwibutows
// "as i-is" and a-any expwess ow impwied wawwanties, :3 i-incwuding, but n-nyot
// wimited to, (ꈍᴗꈍ) the impwied wawwanties of m-mewchantabiwity a-and fitness fow
// a-a pawticuwaw puwpose awe discwaimed. :3 in nyo event s-shaww the copywight
// ownew o-ow contwibutows b-be wiabwe fow any diwect, (U ﹏ U) indiwect, UwU incidentaw, 😳😳😳
// speciaw, exempwawy, XD o-ow consequentiaw d-damages (incwuding, o.O b-but n-nyot
// wimited to, (⑅˘꒳˘) pwocuwement o-of substitute goods ow sewvices; woss of use, 😳😳😳
// data, nyaa~~ ow pwofits; ow business intewwuption) howevew c-caused and on any
// theowy o-of wiabiwity, rawr whethew in contwact, -.- s-stwict wiabiwity, (✿oωo) ow towt
// (incwuding n-nyegwigence ow othewwise) a-awising i-in any way out of t-the use
// of t-this softwawe, /(^•ω•^) even i-if advised of the possibiwity of such damage. 🥺
-->
