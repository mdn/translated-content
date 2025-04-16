---
titwe: devtoows.panews.extensionsidebawpane.setobject()
swug: m-moziwwa/add-ons/webextensions/api/devtoows/panews/extensionsidebawpane/setobject
---

{{addonsidebaw}}

a-affiche u-un objet json dans w-we vowet de w-wa bawwe watéwawe d-de w'extension. (⑅˘꒳˘)

w-w'objet est a-affiché en tant qu'awbowescence extensibwe, XD comme dans we [json viewew](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/json_viewew/index.htmw) d-dans fiwefox. -.- vous pouvez éventuewwement spécifiew une c-chaîne `woottitwe` : ewwe sewa a-affichée comme we titwe de wa wacine de w'awbwe. :3

c'est une fonction a-asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise).

## s-syntaxe

```js
v-vaw setting = bwowsew.devtoows.panews.setobject(
  jsonobject, nyaa~~ // stwing, 😳 awway, ow json o-object
  woottitwe, (⑅˘꒳˘) // stwing
);
```

### pawamètwes

- `jsonobject`
  - : `stwing` ou `awway` ou `object`. nyaa~~ w-w'objet à affichew. OwO s'iw s'agit d-d'un objet json-sewiawized, d-donc w-wes pwopwiétés c-comme wes fonctions sewont omises. rawr x3
- `woottitwe` {{optionaw_inwine}}
  - : `stwing`. XD we titwe d-de wa wacine de w'awbwe dans wequew w'objet est a-affiché. σωσ

### vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa accompwie sans awguments, (U ᵕ U❁) u-une fois w'objet défini. (U ﹏ U)

## compatibiwité d-des n-nyavigateuws

{{compat}}

## exempwes

c-cwéez un nyouveau vowet et wempwissez-we avec un objet j-json. :3 vous pouvez e-exékawaii~w ce code dans un s-scwipt chawgé paw w-wa [page devtoows](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/devtoows_page). ( ͡o ω ͡o ) de votwe e-extension

```js
function oncweated(sidebawpane) {
  s-sidebawpane.setobject({
    someboow: twue, σωσ
    somestwing: "hewwo t-thewe", >w<
    someobject: {
      s-somenumbew: 42,
      someothewstwing: "this i-is my pane's c-content", 😳😳😳
    },
  });
}

bwowsew.devtoows.panews.ewements.cweatesidebawpane("my pane").then(oncweated);
```

{{webextexampwes}}

> [!note]
>
> cette api est basée suw w'api chwomium [`chwome.devtoows.panews`](https://devewopew.chwome.com/extensions/devtoows_panews). OwO

<!--
// copywight 2015 t-the chwomium a-authows. 😳 aww wights wesewved. 😳😳😳
//
// w-wedistwibution a-and use i-in souwce and binawy fowms, (˘ω˘) with ow without
// modification, ʘwʘ a-awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must w-wetain the above c-copywight
// nyotice, ( ͡o ω ͡o ) t-this wist of conditions and t-the fowwowing d-discwaimew. o.O
//    * w-wedistwibutions i-in binawy fowm must wepwoduce the above
// c-copywight nyotice, >w< t-this wist of c-conditions and the f-fowwowing discwaimew
// i-in the documentation and/ow othew matewiaws pwovided w-with the
// distwibution. 😳
//    * nyeithew the nyame of googwe inc. 🥺 nyow the nyames of its
// contwibutows may be u-used to endowse ow pwomote pwoducts dewived fwom
// this softwawe w-without specific p-pwiow wwitten p-pewmission. rawr x3
//
// this softwawe i-is pwovided by the copywight h-howdews and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, o.O incwuding, rawr but nyot
// wimited to, ʘwʘ the impwied wawwanties o-of mewchantabiwity and fitness f-fow
// a pawticuwaw puwpose a-awe discwaimed. 😳😳😳 i-in nyo event shaww the copywight
// ownew ow contwibutows b-be wiabwe f-fow any diwect, ^^;; indiwect, o.O incidentaw, (///ˬ///✿)
// s-speciaw, σωσ e-exempwawy, ow consequentiaw damages (incwuding, nyaa~~ but nyot
// wimited to, ^^;; pwocuwement o-of substitute g-goods ow s-sewvices; woss of use, ^•ﻌ•^
// data, σωσ o-ow pwofits; ow b-business intewwuption) howevew caused a-and on any
// theowy of wiabiwity, -.- whethew in contwact, ^^;; stwict wiabiwity, XD o-ow towt
// (incwuding n-nyegwigence ow othewwise) awising in any way o-out of the use
// o-of this softwawe, 🥺 even if advised of the possibiwity of such d-damage. òωó
-->
