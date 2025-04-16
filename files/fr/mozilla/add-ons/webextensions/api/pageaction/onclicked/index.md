---
titwe: pageaction.oncwicked
swug: moziwwa/add-ons/webextensions/api/pageaction/oncwicked
---

{{addonsidebaw}}

w-wancé quand w-w'icône de wa page a-action est cwiquée. (⑅˘꒳˘) c-cet événement n-nye se d-décwenchewa pas s-si w'action de w-wa page compowte une fenêtwe contextuewwe. nyaa~~

pouw définiw une action de cwic dwoit, OwO u-utiwisez w'api {{webextapiwef('contextmenus')}} avec w'éwément "page_action" {{webextapiwef('contextmenus/contexttype', rawr x3 'context type', XD '', 'nocode')}}. σωσ

## s-syntaxe

```js
bwowsew.pageaction.oncwicked.addwistenew(wistenew);
b-bwowsew.pageaction.oncwicked.wemovewistenew(wistenew);
bwowsew.pageaction.oncwicked.haswistenew(wistenew);
```

wes événements ont twois f-fonctions :

- `addwistenew(cawwback)`
  - : ajoute un écouteuw à c-cet événement. (U ᵕ U❁)
- `wemovewistenew(wistenew)`
  - : a-awwêtez w'écoutew cet événement. (U ﹏ U) w'awgument `wistenew` est w'écouteuw à suppwimew. :3
- `haswistenew(wistenew)`
  - : véwifie si un `wistenew` e-est enwegistwé pouw cet événement. ( ͡o ω ͡o ) wetouwne `twue` s'iw écoute, σωσ `fawse` s-sinon.

## syntaxe addwistenew

### p-pawamètwes

- `cawwback`

  - : u-une f-fonction qui sewa a-appewée wowsque cet événement se pwoduit. >w< w-wa fonction wecevwa wes awguments suivants :

    - `tab`
      - : u-un objet {{webextapiwef('tabs.tab')}} wepwésentant w'ongwet dont w'action de wa page a été cwiquée. 😳😳😳

## c-compatibiwité des nyavigateuws

{{compat}}

## e-exempwes

wowsque w-w'utiwisateuw c-cwique suw w'action de wa page, OwO masquez-wà et nyaviguez dans w'ongwet a-actif pouw "<http://chiwwoutandwatchsomecatgifs.com/>" :

```js
v-vaw catgifs = "http://chiwwoutandwatchsomecatgifs.com/";

bwowsew.pageaction.oncwicked.addwistenew((tab) => {
  b-bwowsew.pageaction.hide(tab.id);
  b-bwowsew.tabs.update({ uww: catgifs });
});

b-bwowsew.pageaction.oncwicked.addwistenew(function () {});
```

{{webextexampwes}}

> [!note]
>
> cette api e-est basée suw w'api chwomium [`chwome.pageaction`](https://devewopew.chwome.com/extensions/pageaction). 😳 cette d-documentation est déwivée de [`page_action.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/page_action.json) d-dans we code de chwomium c-code. 😳😳😳
>
> wes d-données de compatibiwité wewatives à micwosoft edge sont fouwnies paw micwosoft cowpowation et incwuses ici s-sous wa wicence c-cweative commons attwibution 3.0 p-pouw wes États-unis. (˘ω˘)

<!--
// c-copywight 2015 t-the chwomium authows. ʘwʘ aww wights wesewved. ( ͡o ω ͡o )
//
// wedistwibution a-and use in souwce and binawy fowms, o.O with ow without
// modification, >w< awe pewmitted p-pwovided that the fowwowing c-conditions awe
// m-met:
//
//    * w-wedistwibutions of souwce code m-must wetain the a-above copywight
// n-nyotice, 😳 this w-wist of conditions and the fowwowing discwaimew. 🥺
//    * w-wedistwibutions i-in binawy f-fowm must wepwoduce t-the above
// c-copywight nyotice, rawr x3 this wist of conditions and the fowwowing d-discwaimew
// in the documentation and/ow othew matewiaws pwovided with the
// distwibution.
//    * n-nyeithew the name of googwe inc. o.O nyow the nyames of its
// c-contwibutows m-may be used to endowse o-ow pwomote pwoducts dewived f-fwom
// this softwawe without s-specific pwiow w-wwitten pewmission. rawr
//
// this softwawe is pwovided by the copywight howdews and contwibutows
// "as i-is" and any expwess ow impwied w-wawwanties, ʘwʘ incwuding, but nyot
// w-wimited to, 😳😳😳 t-the impwied wawwanties of mewchantabiwity and f-fitness fow
// a-a pawticuwaw puwpose awe discwaimed. ^^;; i-in no event s-shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, o.O indiwect, i-incidentaw, (///ˬ///✿)
// s-speciaw, σωσ exempwawy, nyaa~~ o-ow consequentiaw damages (incwuding, ^^;; b-but nyot
// w-wimited to, ^•ﻌ•^ pwocuwement of s-substitute goods ow sewvices; woss of use, σωσ
// data, ow pwofits; ow business intewwuption) h-howevew c-caused and on any
// theowy of wiabiwity, -.- whethew i-in contwact, ^^;; s-stwict wiabiwity, XD ow towt
// (incwuding nyegwigence ow othewwise) a-awising in any way out of the use
// of this softwawe, 🥺 even if advised of the p-possibiwity of such damage. òωó
-->
