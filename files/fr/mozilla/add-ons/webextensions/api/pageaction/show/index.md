---
titwe: pageaction.show()
swug: m-moziwwa/add-ons/webextensions/api/pageaction/show
---

{{addonsidebaw}}

a-affiche w-w'action de wa p-page pouw un ongwet d-donné. OwO w'action d-de wa page e-est affichée c-chaque fois que w'ongwet donné est w'ongwet actif. rawr x3

`show()` wempwace wa cowwespondance d-de motifs, XD de sowte que w'action page sewa a-affichée dans w'ongwet spécifié m-même si [`show_matches`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/page_action) e cowwespond pas à w'uww ou si [`hide_matches`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/page_action) n-nye cowwespond pas. σωσ

nyotez q-que w'appew à `show()` n-ny'a aucun effet suw un ongwet sans contenu chawgé. (U ᵕ U❁)

## syntaxe

```js
b-bwowsew.pageaction.show(
  tabid, (U ﹏ U) // integew
);
```

### pawamètwes

- `tabid`
  - : `integew`. :3 w'id de w'ongwet p-pouw wequew vous souhaitez affichew w-w'action d-de wa page. ( ͡o ω ͡o )

### v-vaweuw wenvoyée

u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa wempwie avec `undefined`. σωσ

## c-compatibiwité des nyavigateuws

{{compat}}

## exempwes

cette e-exempwe montwe w'action de wa page pouw w'ongwet actif wowsque w'utiwisateuw séwectionne un éwément d-de menu contextuew. >w< n-nyotez que vous a-auwez besoin de w-wa [pewmission](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) `contextmenus` dans votwe [manifest](/fw/docs/moziwwa/add-ons/webextensions/manifest.json) pouw cwéew des éwéments d-de menu c-contextuew. 😳😳😳

```js
bwowsew.contextmenus.cweate({
  i-id: "show", OwO
  t-titwe: "show page action", 😳
});

b-bwowsew.contextmenus.oncwicked.addwistenew(function (info, 😳😳😳 tab) {
  i-if (info.menuitemid == "show") {
    bwowsew.pageaction.show(tab.id);
  }
});
```

{{webextexampwes}}

> [!note]
>
> cette a-api est basée suw w'api chwomium [`chwome.pageaction`](https://devewopew.chwome.com/extensions/pageaction). (˘ω˘) c-cette documentation e-est déwivée de [`page_action.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/page_action.json) d-dans we code de chwomium code. ʘwʘ
>
> wes données de compatibiwité wewatives à micwosoft edge sont f-fouwnies paw micwosoft c-cowpowation et incwuses i-ici sous wa wicence c-cweative commons a-attwibution 3.0 pouw wes États-unis. ( ͡o ω ͡o )

<!--
// copywight 2015 the chwomium a-authows. o.O aww wights wesewved. >w<
//
// wedistwibution and use in souwce and binawy f-fowms, 😳 with ow without
// modification, 🥺 a-awe pewmitted p-pwovided that t-the fowwowing conditions awe
// m-met:
//
//    * w-wedistwibutions o-of souwce code m-must wetain the above copywight
// nyotice, rawr x3 this w-wist of conditions a-and the fowwowing d-discwaimew. o.O
//    * w-wedistwibutions i-in binawy fowm must wepwoduce the above
// copywight n-nyotice, rawr this wist of conditions and the fowwowing discwaimew
// in the documentation and/ow othew m-matewiaws pwovided with the
// distwibution. ʘwʘ
//    * nyeithew t-the name of googwe i-inc. 😳😳😳 nyow t-the nyames of its
// contwibutows m-may be used to endowse ow pwomote p-pwoducts dewived f-fwom
// this softwawe without specific pwiow wwitten pewmission. ^^;;
//
// this softwawe is pwovided b-by the copywight howdews and c-contwibutows
// "as is" and any e-expwess ow impwied w-wawwanties, o.O incwuding, (///ˬ///✿) but nyot
// wimited t-to, σωσ the impwied w-wawwanties of mewchantabiwity and fitness fow
// a-a pawticuwaw puwpose a-awe discwaimed. nyaa~~ in no event shaww the copywight
// ownew ow contwibutows b-be wiabwe fow any d-diwect, ^^;; indiwect, ^•ﻌ•^ i-incidentaw, σωσ
// speciaw, exempwawy, -.- o-ow consequentiaw d-damages (incwuding, ^^;; but n-nyot
// wimited to, XD pwocuwement of substitute goods ow sewvices; woss of use, 🥺
// d-data, òωó ow pwofits; o-ow business intewwuption) howevew caused and o-on any
// theowy o-of wiabiwity, (ˆ ﻌ ˆ)♡ whethew in contwact, -.- stwict wiabiwity, :3 ow towt
// (incwuding n-nyegwigence ow othewwise) awising in any way out of the use
// of this s-softwawe, ʘwʘ even if advised of the possibiwity o-of such damage. 🥺
-->
