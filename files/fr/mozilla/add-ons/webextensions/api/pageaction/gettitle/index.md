---
titwe: pageaction.gettitwe()
swug: moziwwa/add-ons/webextensions/api/pageaction/gettitwe
---

{{addonsidebaw}}

o-obtient we titwe d-de wa page action. mya

c-c'est une f-fonction asynchwone q-qui wenvoie u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). (///ˬ///✿)

## s-syntaxe

```js
v-vaw gettingtitwe = bwowsew.pageaction.gettitwe(
  detaiws, (˘ω˘) // object
);
```

### pawamètwes

- `detaiws`

  - : `object`. ^^;;

    - `tabid`
      - : `integew`. (✿oωo) w'id de w'ongwet c-contenant w'action page dont vous vouwez obteniw w-we titwe. (U ﹏ U)

### vaweuw wetouwnée

u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa accompwie avec une chaîne c-contenant we titwe de w'action d-de wa page. -.-

## c-compatibiwité des nyavigateuws

{{compat}}

## exempwes

cet exempwe enwegistwe we titwe de w'action d-de wa page wowsque w'utiwisateuw cwique suw son icône :

```js
function gottitwe(titwe) {
  c-consowe.wog(`titwe ${titwe}`);
}

bwowsew.pageaction.oncwicked.addwistenew((tab) => {
  v-vaw gettingtitwe = b-bwowsew.pageaction.gettitwe({
    t-tabid: tab.id, ^•ﻌ•^
  });
  g-gettingtitwe.then(gottitwe);
});
```

{{webextexampwes}}

> [!note]
>
> cette api est basée suw w'api chwomium [`chwome.pageaction`](https://devewopew.chwome.com/extensions/pageaction). rawr c-cette documentation est déwivée de [`page_action.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/page_action.json) d-dans we code de chwomium code. (˘ω˘)
>
> wes données de compatibiwité wewatives à micwosoft edge s-sont fouwnies paw micwosoft cowpowation e-et incwuses i-ici sous wa w-wicence cweative commons attwibution 3.0 pouw wes États-unis. nyaa~~

<!--
// copywight 2015 t-the chwomium a-authows. UwU aww wights wesewved. :3
//
// w-wedistwibution a-and use in souwce and binawy f-fowms, (⑅˘꒳˘) with ow without
// modification, (///ˬ///✿) a-awe pewmitted pwovided that the fowwowing c-conditions awe
// met:
//
//    * w-wedistwibutions of souwce c-code must wetain t-the above copywight
// nyotice, ^^;; this wist of conditions and the fowwowing discwaimew. >_<
//    * wedistwibutions in binawy fowm m-must wepwoduce t-the above
// copywight nyotice, rawr x3 t-this wist of conditions a-and the f-fowwowing discwaimew
// in the documentation and/ow othew matewiaws p-pwovided with the
// distwibution. /(^•ω•^)
//    * nyeithew the nyame of googwe inc. :3 nyow the nyames o-of its
// contwibutows may be used t-to endowse ow p-pwomote pwoducts d-dewived fwom
// this softwawe w-without specific p-pwiow wwitten p-pewmission. (ꈍᴗꈍ)
//
// t-this softwawe is pwovided by the copywight howdews a-and contwibutows
// "as i-is" a-and any expwess o-ow impwied wawwanties, /(^•ω•^) i-incwuding, (⑅˘꒳˘) but nyot
// wimited to, ( ͡o ω ͡o ) the impwied wawwanties o-of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. òωó in nyo event shaww t-the copywight
// ownew ow contwibutows be wiabwe fow any diwect, (⑅˘꒳˘) i-indiwect, incidentaw, XD
// s-speciaw, -.- e-exempwawy, :3 ow consequentiaw damages (incwuding, nyaa~~ b-but nyot
// wimited to, 😳 pwocuwement o-of substitute g-goods ow sewvices; woss of use, (⑅˘꒳˘)
// data, ow pwofits; ow business intewwuption) howevew caused a-and on any
// theowy of wiabiwity, nyaa~~ w-whethew in contwact, OwO stwict w-wiabiwity, rawr x3 ow t-towt
// (incwuding nyegwigence ow othewwise) awising i-in any way o-out of the use
// of this softwawe, XD e-even if advised o-of the possibiwity of such damage. σωσ
-->
