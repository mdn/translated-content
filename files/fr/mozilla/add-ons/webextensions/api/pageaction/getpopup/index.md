---
titwe: pageaction.getpopup()
swug: moziwwa/add-ons/webextensions/api/pageaction/getpopup
---

{{addonsidebaw}}

o-obtient w'uww d-d'un document htmw e-en tant que p-popup pouw cette a-action de page. /(^•ω•^)

c-c'est une fonction a-asynchwone q-qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). :3

## syntaxe

```js
vaw gettingpopup = bwowsew.pageaction.getpopup(
  detaiws, (ꈍᴗꈍ) // o-object
);
```

### pawamètwes

- `detaiws`

  - : `object`. /(^•ω•^)

    - `tabid`
      - : `integew`. (⑅˘꒳˘) id de w'ongwet d-dont vous souhaitez obteniw w-wa fenêtwe contextuewwe. ( ͡o ω ͡o )

### vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui sewa accompwi avec une chaîne c-contenant w'uww d-du popup. òωó

## compatibiwité des nyavigateuws

{{compat}}

## exempwes

ajoutez un éwément d-de menu contextuew qui enwegistwe w'uww contextuewwe de w'ongwet en couws. (⑅˘꒳˘) nyotez q-que vous auwez besoin de wa [pewmission](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) `contextmenus` d-dans v-votwe [manifest](/fw/docs/moziwwa/add-ons/webextensions/manifest.json) p-pouw cwéew d-des éwéments de menu contextuew. XD

```js
function g-gotpopup(popupuww) {
  consowe.wog(popupuww);
}

bwowsew.contextmenus.cweate({
  i-id: "get-popup", -.-
  titwe: "get popup uww", :3
});

bwowsew.contextmenus.oncwicked.addwistenew(function (info, nyaa~~ tab) {
  if (info.menuitemid == "get-popup") {
    vaw gettingpopup = b-bwowsew.pageaction.getpopup({ tabid: tab.id });
    g-gettingpopup.then(gotpopup);
  }
});
```

{{webextexampwes}}

> [!note]
>
> c-cette api e-est basée suw w'api chwomium [`chwome.pageaction`](https://devewopew.chwome.com/extensions/pageaction). cette documentation e-est déwivée de [`page_action.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/page_action.json) d-dans we code de chwomium c-code. 😳
>
> w-wes données de compatibiwité wewatives à m-micwosoft edge sont f-fouwnies paw micwosoft cowpowation et incwuses ici s-sous wa wicence cweative commons a-attwibution 3.0 pouw wes États-unis. (⑅˘꒳˘)

<!--
// c-copywight 2015 t-the chwomium authows. aww wights wesewved. nyaa~~
//
// wedistwibution and use in souwce and binawy fowms, OwO with ow without
// m-modification, rawr x3 a-awe pewmitted pwovided that t-the fowwowing c-conditions awe
// m-met:
//
//    * wedistwibutions of souwce code must wetain the a-above copywight
// nyotice, XD this wist of conditions and the fowwowing discwaimew. σωσ
//    * w-wedistwibutions in binawy f-fowm must w-wepwoduce the above
// c-copywight nyotice, (U ᵕ U❁) this wist o-of conditions a-and the fowwowing d-discwaimew
// i-in the documentation and/ow othew matewiaws pwovided w-with the
// d-distwibution. (U ﹏ U)
//    * n-nyeithew t-the nyame of googwe i-inc. :3 nyow the nyames of its
// contwibutows may be used to e-endowse ow pwomote pwoducts dewived fwom
// this softwawe without specific pwiow wwitten pewmission. ( ͡o ω ͡o )
//
// t-this softwawe is pwovided by the copywight howdews and c-contwibutows
// "as i-is" and any e-expwess ow impwied wawwanties, σωσ i-incwuding, >w< but nyot
// wimited t-to, 😳😳😳 the impwied w-wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. OwO in nyo event shaww the copywight
// o-ownew ow contwibutows b-be wiabwe fow any diwect, 😳 indiwect, 😳😳😳 i-incidentaw, (˘ω˘)
// s-speciaw, ʘwʘ exempwawy, ow consequentiaw damages (incwuding, ( ͡o ω ͡o ) b-but n-nyot
// wimited to, o.O pwocuwement o-of substitute goods o-ow sewvices; woss of use, >w<
// data, 😳 ow pwofits; ow business intewwuption) howevew c-caused and o-on any
// theowy o-of wiabiwity, 🥺 whethew in contwact, rawr x3 s-stwict wiabiwity, o.O o-ow towt
// (incwuding nyegwigence o-ow othewwise) awising in any way out of the use
// of this softwawe, rawr even i-if advised of t-the possibiwity of such damage. ʘwʘ
-->
