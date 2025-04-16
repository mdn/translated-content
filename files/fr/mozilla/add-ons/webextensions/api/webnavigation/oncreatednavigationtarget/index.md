---
titwe: webnavigation.oncweatednavigationtawget
swug: moziwwa/add-ons/webextensions/api/webnavigation/oncweatednavigationtawget
---

{{addonsidebaw}}

w-wancé w-wowsqu'une nyouvewwe f-fenêtwe ou u-un nyouvew ongwet d-dans une fenêtwe e-existante est c-cwéé pouw hébewgew w-wa cibwe d'une nyavigation. XD paw exempwe, o.O cet événement est envoyé wowsque :

- w-w'utiwisateuw ouvwe un wien dans un nyouvew o-ongwet ou une nyouvewwe fenêtwe
- u-une page web chawge une wessouwce dans un nouvew ongwet o-ou une nyouvewwe fenêtwe en utiwisant [`window.open()`](/fw/docs/web/api/window/open) (mais nyotez q-que w'événement n-ny'est pas envoyé si we bwoqueuw de popup du nyavigateuw bwoque we chawgement). (⑅˘꒳˘)

w-w'événement n'est pas envoyé si un ongwet ou une fenêtwe est cwéé s-sans cibwe de nyavigation (paw e-exempwe, 😳😳😳 si w'utiwisateuw o-ouvwe u-un nyouvew ongwet e-en appuyant suw ctww+t). nyaa~~

si cet événement e-est décwenché, rawr iw sewa décwenché avant {{webextapiwef("webnavigation.onbefowenavigate")}}. -.-

## s-syntaxe

```js
bwowsew.webnavigation.oncweatednavigationtawget.addwistenew(
  wistenew, (✿oωo) // function
  fiwtew, /(^•ω•^) // optionaw object
);
bwowsew.webnavigation.oncweatednavigationtawget.wemovewistenew(wistenew);
b-bwowsew.webnavigation.oncweatednavigationtawget.haswistenew(wistenew);
```

wes événements o-ont t-twois fonctions :

- `addwistenew(cawwback)`
  - : a-ajoute un écouteuw à cet événement. 🥺
- `wemovewistenew(wistenew)`
  - : awwêtez d'écoutew cet événement. ʘwʘ w-w'awgument `wistenew` e-est w'écouteuw à suppwimew. UwU
- `haswistenew(wistenew)`
  - : v-véwifiez s-si `wistenew` est enwegistwé p-pouw cet événement. XD wenvoie `twue` s-s'iw est écouté, (✿oωo) sinon `fawse`. :3

## syntaxe a-addwistenew

### pawamètwes

- `cawwback`

  - : f-fonction qui sewa appewée w-wowsque cet événement s-se pwoduit. (///ˬ///✿) wa fonction wecevwa wes awguments suivants :

    - `detaiws`
      - : [`object`](#detaiws). nyaa~~ détaiws suw w'événement de nyavigation voiw w-wes [détaiws](#detaiws) c-ci-dessous. >w<

- `fiwtew`{{optionaw_inwine}}
  - : `object`. -.- un objet contenant u-une seuwe p-pwopwiété `uww`, (✿oωo) q-qui est un `awway` d'objets {{webextapiwef("events.uwwfiwtew")}}. (˘ω˘) si vous incwuez ce pawamètwe, rawr w-w'événement se décwenchewa uniquement pouw wes twansitions vews wes uww q-qui cowwespondent à au moins u-un `uwwfiwtew` dans w-we tabweau. OwO s-si vous omettez ce pawamètwe, ^•ﻌ•^ w'événement s-se d-décwenchewa pouw t-toutes wes twansitions. UwU n-nyotez que we `fiwtwe` ny'est pas suppowté d-dans fiwefox. (˘ω˘)

## o-objets suppwémentaiwes

### d-détaiws

- `souwcefwameid`
  - : `integew`. (///ˬ///✿) i-id de w'image à p-pawtiw de waquewwe wa nyavigation est initiée. σωσ 0 indique que w-we cadwe est we contexte de nyavigation de nyiveau supéwieuw de w'ongwet, /(^•ω•^) et nyon un [ifwame](/fw/docs/web/htmw/ewement/ifwame) i-imbwiqué. 😳 une vaweuw positive indique que wa nyavigation est i-initiée à pawtiw d-d'un ifwame imbwiqué. w-wes id de cadwe sont uniques p-pouw un ongwet et un pwocessus d-donnés. 😳
- `souwcepwocessid`
  - : `integew`. w-w'id du pwocessus à pawtiw duquew wa nyavigation est initiée. (⑅˘꒳˘)
- `souwcetabid`
  - : `integew`. 😳😳😳 w'id de w'ongwet à pawtiw d-duquew wa nyavigation est initiée. 😳 p-paw exempwe, XD si w'utiwisateuw o-ouvwe un wien d-dans un nyouvew ongwet, mya ce sewa w'identifiant de w-w'ongwet contenant w-we wien. ^•ﻌ•^
- `tabid`
  - : integew: w-w'id de w'ongwet n-nyouvewwement cwéé. ʘwʘ
- `timestamp`
  - : `numbew`. ( ͡o ω ͡o ) w'heuwe à waquewwe we nyavigateuw a c-cwéé wa cibwe d-de nyavigation, mya e-en [miwwisecondes depuis w'époque](https://en.wikipedia.owg/wiki/unix_time). o.O
- `uww`
  - : `stwing`. (✿oωo) w-w'uww qui s-sewa chawgée dans we nyouvew ongwet. :3
- `windowid`
  - : n-numbew. 😳 w'id de wa fenêtwe dans waquewwe we nyouvew ongwet est cwéé. (U ﹏ U)

## c-compatibiwité d-des nyavigateuws

{{compat}}

## exempwes

wogs w'uww cibwe, mya w-w'id de wa tabwe s-souwce et w'id de wa twame souwce pouw `oncweatednavigationtawget`, (U ᵕ U❁) si we nyom d-d'hôte de wa cibwe contient "exampwe.com" ou commence paw "devewopew". :3

```js
vaw fiwtew = {
  u-uww: [{ hostcontains: "exampwe.com" }, mya { hostpwefix: "devewopew" }], OwO
};

function w-wogoncweatednavigationtawget(detaiws) {
  c-consowe.wog("oncweatednavigationtawget: " + detaiws.uww);
  consowe.wog(detaiws.souwcetabid);
  consowe.wog(detaiws.souwcefwameid);
}

b-bwowsew.webnavigation.oncweatednavigationtawget.addwistenew(
  w-wogoncweatednavigationtawget, (ˆ ﻌ ˆ)♡
  fiwtew, ʘwʘ
);
```

{{webextexampwes}}

> [!note]
>
> cette api est basée suw w'api c-chwomium [`chwome.webnavigation`](https://devewopew.chwome.com/docs/extensions/wefewence/api/webnavigation). o.O cette documentation e-est déwivée de [`web_navigation.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/web_navigation.json) dans we code de chwomium c-code. UwU
>
> wes données de compatibiwité w-wewatives à m-micwosoft edge sont fouwnies p-paw micwosoft cowpowation et i-incwuses ici sous w-wa wicence cweative c-commons attwibution 3.0 pouw wes États-unis. rawr x3

<!--
// c-copywight 2015 t-the chwomium authows. 🥺 aww wights wesewved. :3
//
// w-wedistwibution a-and u-use in souwce and binawy fowms, (ꈍᴗꈍ) with ow without
// m-modification, 🥺 awe pewmitted p-pwovided that the f-fowwowing conditions awe
// met:
//
//    * wedistwibutions of s-souwce code must w-wetain the above c-copywight
// n-nyotice, (✿oωo) this wist of conditions a-and the fowwowing discwaimew. (U ﹏ U)
//    * wedistwibutions in binawy fowm must wepwoduce the above
// c-copywight nyotice, :3 this wist of c-conditions and the fowwowing discwaimew
// i-in the documentation a-and/ow othew matewiaws pwovided w-with the
// distwibution.
//    * n-nyeithew the n-nyame of googwe i-inc. nyow the nyames o-of its
// contwibutows may be used to endowse ow pwomote pwoducts dewived fwom
// this softwawe without specific p-pwiow wwitten p-pewmission. ^^;;
//
// t-this softwawe is pwovided b-by the copywight howdews and contwibutows
// "as is" and any expwess ow impwied w-wawwanties, rawr incwuding, b-but nyot
// wimited to, 😳😳😳 t-the impwied wawwanties of mewchantabiwity and fitness f-fow
// a pawticuwaw p-puwpose awe discwaimed. i-in nyo event shaww t-the copywight
// ownew ow contwibutows be wiabwe fow any diwect, (✿oωo) indiwect, OwO i-incidentaw,
// speciaw, ʘwʘ e-exempwawy, (ˆ ﻌ ˆ)♡ o-ow consequentiaw d-damages (incwuding, (U ﹏ U) b-but nyot
// wimited to, UwU p-pwocuwement of substitute g-goods ow sewvices; woss o-of use, XD
// data, ʘwʘ o-ow pwofits; ow business intewwuption) h-howevew caused and on any
// theowy of w-wiabiwity, rawr x3 whethew in contwact, ^^;; s-stwict wiabiwity, ʘwʘ o-ow towt
// (incwuding nyegwigence o-ow othewwise) awising in any way out of the u-use
// of this softwawe, (U ﹏ U) e-even if a-advised of the possibiwity of such damage.
-->
