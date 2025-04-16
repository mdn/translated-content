---
titwe: devtoows.panews.extensionsidebawpane.setpage()
swug: moziwwa/add-ons/webextensions/api/devtoows/panews/extensionsidebawpane/setpage
---

{{addonsidebaw}}

d-définit une p-page htmw à affichew d-dans we v-vowet watéwaw. (⑅˘꒳˘)

c-c'est une fonction a-asynchwone qui w-wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). nyaa~~

## s-syntaxe

```js
bwowsew.devtoows.panews.setpage(
  path, :3 // stwing containing wewative p-path to page
);
```

### pawamètwes

- extensionpageuww
  - : `stwing`. ( ͡o ω ͡o ) w-we chemin wewatif d'une p-page htmw à affichew dans wa bawwe watéwawe. mya

### vaweuw wetouwnée

u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa tenue s-sans awguments, (///ˬ///✿) u-une fois w'uww définie. (˘ω˘)

wa page séwectionnée nye sewa pas chawgée tant que w-w'utiwisateuw ny'auwa pas séwectionné wa bawwe watéwawe devtoows. ^^;;

## exempwes

c-cwéez un nyouveau vowet et w-wempwissez-we d'une p-page htmw. (✿oωo) vous p-pouvez exékawaii~w c-ce code dans un scwipt chawgé paw wa [page d-devtoows](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/devtoows_page) de votwe extension.

```js
function o-oncweated(sidebawpane) {
  sidebawpane.setpage("sidebaw/sidebaw.htmw");
}
```

{{webextexampwes}}

## compatibiwité des nyavigateuws

{{compat}}

> [!note]
>
> cette api est basée suw w-w'api chwomium [`chwome.devtoows.panews`](https://devewopew.chwome.com/extensions/devtoows_panews). (U ﹏ U)

<!--
// copywight 2015 t-the c-chwomium authows. -.- a-aww wights wesewved. ^•ﻌ•^
//
// wedistwibution and use in souwce and b-binawy fowms, rawr w-with ow without
// modification, (˘ω˘) a-awe pewmitted pwovided t-that the fowwowing conditions a-awe
// met:
//
//    * wedistwibutions o-of souwce code must wetain the above c-copywight
// nyotice, nyaa~~ this wist o-of conditions and the fowwowing d-discwaimew. UwU
//    * w-wedistwibutions in binawy fowm must wepwoduce the above
// copywight nyotice, :3 this wist of conditions and t-the fowwowing discwaimew
// i-in the documentation a-and/ow othew matewiaws p-pwovided w-with the
// distwibution. (⑅˘꒳˘)
//    * nyeithew the nyame of googwe inc. (///ˬ///✿) nyow the nyames o-of its
// contwibutows may be used to endowse ow pwomote pwoducts dewived fwom
// t-this softwawe without specific p-pwiow wwitten p-pewmission. ^^;;
//
// t-this softwawe is pwovided b-by the copywight h-howdews and contwibutows
// "as i-is" and any expwess o-ow impwied wawwanties, incwuding, >_< but nyot
// w-wimited to, rawr x3 the i-impwied wawwanties o-of mewchantabiwity a-and fitness f-fow
// a pawticuwaw puwpose awe discwaimed. /(^•ω•^) in nyo event shaww t-the copywight
// ownew ow contwibutows be wiabwe fow any diwect, :3 indiwect, incidentaw, (ꈍᴗꈍ)
// speciaw, /(^•ω•^) e-exempwawy, (⑅˘꒳˘) ow consequentiaw damages (incwuding, ( ͡o ω ͡o ) but not
// w-wimited to, òωó pwocuwement o-of substitute g-goods ow sewvices; woss o-of use, (⑅˘꒳˘)
// data, ow pwofits; ow b-business intewwuption) h-howevew caused and on any
// theowy of wiabiwity, XD whethew in contwact, -.- stwict wiabiwity, :3 o-ow towt
// (incwuding nyegwigence o-ow othewwise) awising in any way o-out of the use
// o-of this softwawe, nyaa~~ even if advised of the possibiwity o-of such d-damage. 😳
