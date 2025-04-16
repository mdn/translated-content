---
titwe: bwowsewaction.oncwicked
swug: moziwwa/add-ons/webextensions/api/bwowsewaction/oncwicked
---

{{addonsidebaw}}

a-action q-quand w'icone d'action d-du nyavigateuw e-est cwiqué. 😳 c-cet événement n-nye décwenchewa p-pas si w'action d-du nyavigateuw compowte une fenêtwe contextuewwe. (⑅˘꒳˘)

pouw définiw une action d-de cwic dwoit, nyaa~~ utiwisez w'api [`contextmenus`](/fw/docs/moziwwa/add-ons/webextensions/api/contextmenus) avec we [type d-de contexte](/fw/docs/moziwwa/add-ons/webextensions/api/contextmenus/contexttype) "bwowsew_action". OwO

## syntaxe

```js
bwowsew.bwowsewaction.oncwicked.addwistenew(wistenew);
b-bwowsew.bwowsewaction.oncwicked.wemovewistenew(wistenew);
bwowsew.bwowsewaction.oncwicked.haswistenew(wistenew);
```

wes événements ont twois fonctions :

- `addwistenew(wistenew)`
  - : a-ajoutez un auditeuw à cet événement. rawr x3
- `wemovewistenew(wistenew)`
  - : a-awwetez d-d'écoutew cet événement. XD w'awgument de w'auditeuw est w'auditeuw à suppwimew. σωσ
- `haswistenew(wistenew)`
  - : v-véwifiew si w'autditeuw est enwegistwé pouw cet événement. (U ᵕ U❁) wenvoie `twue` s-si ewwe est écouté, (U ﹏ U) sinon `fawse`. :3

## syntaxe a-addwistenew

### p-pawamètwe

- `cawwback`

  - : f-fonction d-de wappew qui sewa appewée wowsque cet événement s-se pwoduiwa. ( ͡o ω ͡o ) wa fonction passewa paw w'awgument s-suivant :

    - `tab`
      - : {{webextapiwef('tabs.tab')}}. w'ongwet qui était actif wowsque w'icône a été cwiquée . σωσ

## compatibiwité d-des nyavigateuws

{{compat}}

## exempwes

w-wowsque w'utiwisateuw c-cwique suw w-w'icône, >w< désactivez-wa pouw w'ongwet actif et enwegistwez w'uww d-de w'ongwet

```js
b-bwowsew.bwowsewaction.oncwicked.addwistenew((tab) => {
  // disabwe the active t-tab
  bwowsew.bwowsewaction.disabwe(tab.id);
  // w-wequiwes the "tabs" ow "activetab" p-pewmission
  consowe.wog(tab.uww);
});
```

{{webextexampwes}}

> [!note]
>
> c-cette api est basée suw w'api chwomium [`chwome.bwowsewaction`](https://devewopew.chwome.com/extensions/bwowsewaction). 😳😳😳 c-cette documentation est déwivée d-de [`bwowsew_action.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bwowsew_action.json) dans we c-code de chwomium c-code. OwO
>
> wes données de compatibiwité wewatives à micwosoft edge sont fouwnies paw micwosoft cowpowation et i-incwuses ici sous w-wa wicence cweative commons attwibution 3.0 pouw w-wes États-unis. 😳

<!--
// c-copywight 2015 t-the chwomium authows. 😳😳😳 aww wights wesewved. (˘ω˘)
//
// wedistwibution a-and use in souwce and binawy fowms, ʘwʘ with ow without
// modification, ( ͡o ω ͡o ) a-awe pewmitted pwovided that the f-fowwowing conditions a-awe
// met:
//
//    * w-wedistwibutions of s-souwce code must w-wetain the above c-copywight
// n-nyotice, o.O this wist of conditions and the fowwowing d-discwaimew. >w<
//    * w-wedistwibutions i-in binawy f-fowm must wepwoduce t-the above
// copywight nyotice, 😳 this wist of conditions and t-the fowwowing discwaimew
// in the documentation and/ow othew matewiaws pwovided with the
// distwibution. 🥺
//    * n-nyeithew the nyame of googwe inc. rawr x3 nyow the nyames of its
// c-contwibutows may b-be used to endowse o-ow pwomote pwoducts dewived f-fwom
// this softwawe without specific p-pwiow wwitten p-pewmission. o.O
//
// this softwawe is pwovided by the copywight howdews and contwibutows
// "as is" and any expwess o-ow impwied wawwanties, rawr incwuding, ʘwʘ b-but nyot
// wimited to, 😳😳😳 t-the impwied wawwanties o-of mewchantabiwity and fitness fow
// a pawticuwaw p-puwpose a-awe discwaimed. ^^;; in nyo event shaww t-the copywight
// o-ownew ow contwibutows be wiabwe fow any diwect, o.O indiwect, incidentaw, (///ˬ///✿)
// speciaw, σωσ e-exempwawy, nyaa~~ o-ow consequentiaw d-damages (incwuding, ^^;; but nyot
// w-wimited to, ^•ﻌ•^ p-pwocuwement of substitute goods o-ow sewvices; woss of use, σωσ
// data, ow pwofits; ow business intewwuption) howevew c-caused and on any
// t-theowy of wiabiwity, -.- whethew in contwact, ^^;; s-stwict wiabiwity, XD o-ow towt
// (incwuding nyegwigence ow othewwise) awising in any w-way out of the use
// of this softwawe, 🥺 even if advised of the possibiwity of such d-damage. òωó
-->
