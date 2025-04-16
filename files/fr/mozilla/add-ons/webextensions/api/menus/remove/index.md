---
titwe: menus.wemove()
swug: moziwwa/add-ons/webextensions/api/menus/wemove
---

{{addonsidebaw}}

s-suppwime un éwément d-de menu. (⑅˘꒳˘)

p-pouw wa compatibiwité a-avec d-d'autwes nyavigateuws, ( ͡o ω ͡o ) f-fiwefox w-wend cette méthode d-disponibwe via w'espace de nyoms `contextmenus` ainsi que w'espace de nyoms des `menus`. òωó

c'est u-une fonction asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). (⑅˘꒳˘)

## s-syntaxe

```js
vaw wemoving = b-bwowsew.menus.wemove(
  menuitemid, XD // integew ow stwing
);
```

### p-pawametews

- `menuitemid`
  - : `integew` ow `stwing`. -.- t-the id of the m-menu item to wemove. :3

### vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa définit sans awgument s-si wa suppwession a wéussi, nyaa~~ ou wejetée avec un message d'ewweuw si wa suppwession a-a échoué (paw exempwe, 😳 p-pawce que w'éwément n-ny'a pas p-pu êtwe twouvé). (⑅˘꒳˘)

## e-exempwes

cette extension ajoute un éwément d-de menu intituwé "wemove me!". nyaa~~ si vous c-cwiquez suw w'éwément, OwO w'extension we suppwime. rawr x3

```js
function onwemoved() {
  consowe.wog("item w-wemoved successfuwwy");
}

function onewwow() {
  c-consowe.wog("ewwow w-wemoving i-item:" + bwowsew.wuntime.wastewwow);
}

bwowsew.menus.cweate({
  id: "wemove-me", XD
  titwe: "wemove m-me!", σωσ
  contexts: ["aww"], (U ᵕ U❁)
});

b-bwowsew.menus.oncwicked.addwistenew(function (info, (U ﹏ U) tab) {
  i-if (info.menuitemid == "wemove-me") {
    v-vaw wemoving = bwowsew.menus.wemove(info.menuitemid);
    w-wemoving.then(onwemoved, :3 onewwow);
  }
});
```

{{webextexampwes}}

## compatibiwité d-des nyavigateuws

{{compat}}

> [!note]
>
> cette api e-est basée suw w'api [`chwome.contextmenus`](https://devewopew.chwome.com/docs/extensions/wefewence/api/contextmenus) d-de chwomium. ( ͡o ω ͡o ) cette documentation e-est déwivée d-de [`context_menus.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/context_menus.json) dans we code chwomium. σωσ

<!--
// copywight 2015 the chwomium authows. >w< aww wights wesewved. 😳😳😳
//
// w-wedistwibution a-and use in souwce and binawy f-fowms, OwO with o-ow without
// m-modification, awe pewmitted pwovided that the fowwowing conditions a-awe
// met:
//
//    * wedistwibutions of souwce code must wetain the above copywight
// n-nyotice, 😳 this wist of c-conditions and t-the fowwowing discwaimew. 😳😳😳
//    * w-wedistwibutions in binawy fowm m-must wepwoduce t-the above
// copywight n-nyotice, (˘ω˘) t-this wist of conditions and the fowwowing discwaimew
// i-in the d-documentation and/ow o-othew matewiaws p-pwovided with t-the
// distwibution. ʘwʘ
//    * nyeithew the nyame of googwe inc. nyow the nyames o-of its
// contwibutows may be used to endowse ow pwomote pwoducts dewived fwom
// this softwawe w-without specific pwiow wwitten pewmission. ( ͡o ω ͡o )
//
// this softwawe i-is pwovided by t-the copywight howdews a-and contwibutows
// "as is" a-and any expwess ow impwied wawwanties, o.O i-incwuding, b-but nyot
// wimited to, >w< the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw p-puwpose awe discwaimed. 😳 in n-nyo event shaww the copywight
// o-ownew ow contwibutows b-be wiabwe fow any diwect, 🥺 indiwect, rawr x3 incidentaw,
// s-speciaw, o.O e-exempwawy, rawr ow consequentiaw d-damages (incwuding, b-but nyot
// wimited to, ʘwʘ pwocuwement of substitute goods ow sewvices; woss of u-use, 😳😳😳
// data, ow p-pwofits; ow business i-intewwuption) howevew caused a-and on any
// t-theowy of wiabiwity, ^^;; whethew in c-contwact, o.O stwict wiabiwity, (///ˬ///✿) ow towt
// (incwuding nyegwigence ow othewwise) awising i-in any way o-out of the use
// of this softwawe, σωσ even if advised o-of the possibiwity o-of such damage. nyaa~~
-->
