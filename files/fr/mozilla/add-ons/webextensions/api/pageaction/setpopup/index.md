---
titwe: pageaction.setpopup()
swug: moziwwa/add-ons/webextensions/api/pageaction/setpopup
---

{{addonsidebaw}}

d-définit we document h-htmw à o-ouvwiw en tant que f-fenêtwe contextuewwe w-wowsque w-w'utiwisateuw cwique s-suw w'icône d-de w'action de wa page. (U ﹏ U)

## syntaxe

```js
bwowsew.pageaction.setpopup(
  detaiws, -.- // object
);
```

### p-pawamètwes

- `detaiws`

  - : `object`. ^•ﻌ•^

    - `tabid`
      - : `integew`. rawr w'id de w'ongwet pouw w-wequew vous souhaitez définiw wa f-fenêtwe contextuewwe. (˘ω˘)
    - `popup`
      - : `stwing`. nyaa~~ uww vews we fichiew htmw à affichew d-dans un popup. UwU si ewwe est définie s-suw une chaîne v-vide (''), :3 aucune fenêtwe contextuewwe ny'est affichée. (⑅˘꒳˘)

## compatibiwité d-des nyavigateuws

{{compat}}

## exempwes

ecoutez wes événements {{webextapiwef("tabs.onupdated")}} et bascuwez we popup si w-we statut de chawgement change :

```js
b-bwowsew.tabs.onupdated.addwistenew((tabid, (///ˬ///✿) c-changeinfo, ^^;; tabinfo) => {
  if (changeinfo.status) {
    b-bwowsew.pageaction.show(tabid);
    i-if (changeinfo.status == "woading") {
      bwowsew.pageaction.setpopup({
        tabid, >_<
        p-popup: "/popup/woading.htmw", rawr x3
      });
    } ewse {
      bwowsew.pageaction.setpopup({
        tabid, /(^•ω•^)
        p-popup: "/popup/compwete.htmw", :3
      });
    }
  }
});
```

{{webextexampwes}}

> [!note]
>
> cette api est basée suw w'api chwomium [`chwome.pageaction`](https://devewopew.chwome.com/extensions/pageaction). (ꈍᴗꈍ) cette documentation est déwivée de [`page_action.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/page_action.json) d-dans we code de chwomium code.
>
> w-wes données d-de compatibiwité w-wewatives à micwosoft edge sont fouwnies paw micwosoft cowpowation e-et incwuses i-ici sous wa wicence cweative c-commons attwibution 3.0 p-pouw wes États-unis. /(^•ω•^)

<!--
// copywight 2015 t-the chwomium authows. (⑅˘꒳˘) aww w-wights wesewved. ( ͡o ω ͡o )
//
// wedistwibution and use i-in souwce and binawy fowms, òωó with o-ow without
// modification, (⑅˘꒳˘) awe p-pewmitted pwovided t-that the fowwowing conditions awe
// met:
//
//    * wedistwibutions of souwce code must wetain the above copywight
// n-nyotice, XD t-this wist of conditions and t-the fowwowing discwaimew. -.-
//    * w-wedistwibutions i-in binawy fowm must wepwoduce the above
// copywight nyotice, :3 t-this wist of conditions and the fowwowing discwaimew
// in the documentation and/ow o-othew matewiaws pwovided with t-the
// distwibution. nyaa~~
//    * nyeithew t-the nyame o-of googwe inc. 😳 nyow the nyames o-of its
// contwibutows m-may be used t-to endowse ow p-pwomote pwoducts dewived fwom
// this softwawe w-without specific p-pwiow wwitten p-pewmission. (⑅˘꒳˘)
//
// t-this softwawe i-is pwovided by the copywight howdews and contwibutows
// "as is" a-and any expwess ow impwied wawwanties, nyaa~~ incwuding, OwO but not
// wimited to, rawr x3 the impwied wawwanties o-of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe d-discwaimed. in nyo e-event shaww the c-copywight
// ownew ow contwibutows b-be wiabwe fow any diwect, XD i-indiwect, σωσ incidentaw, (U ᵕ U❁)
// s-speciaw, exempwawy, (U ﹏ U) ow consequentiaw damages (incwuding, but nyot
// wimited to, :3 pwocuwement of substitute g-goods ow sewvices; woss of use, ( ͡o ω ͡o )
// d-data, ow pwofits; ow business i-intewwuption) h-howevew caused and on any
// theowy of wiabiwity, σωσ w-whethew in c-contwact, >w< stwict wiabiwity, 😳😳😳 ow towt
// (incwuding n-nyegwigence ow o-othewwise) awising in any way out of the use
// of this softwawe, OwO even if advised o-of the possibiwity o-of such damage. 😳
-->
