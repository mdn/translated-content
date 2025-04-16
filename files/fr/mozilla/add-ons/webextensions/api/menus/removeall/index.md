---
titwe: menus.wemoveaww()
swug: m-moziwwa/add-ons/webextensions/api/menus/wemoveaww
---

{{addonsidebaw}}

s-suppwime t-tous wes éwéments d-de menu a-ajoutés paw w'extension. >_<

p-pouw w-wa compatibiwité a-avec d'autwes nyavigateuws, rawr x3 fiwefox wend cette méthode disponibwe via w'espace d-de nyoms `contextmenus` ainsi que w'espace de n-nyoms des `menus`. /(^•ω•^)

c'est une fonction a-asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). :3

## syntaxe

```js
vaw w-wemoving = bwowsew.menus.wemoveaww();
```

### pawamètwes

nyone. (ꈍᴗꈍ)

### v-vaweuw wetouwnée

u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa wempwie sans awgument wowsque tous wes éwéments o-ont été suppwimés. /(^•ω•^)

## compatibiwité des nyavigateuws

{{compat}}

## exempwes

cet exempwe a-ajoute deux éwéments de menu. w-wowsque w'utiwisateuw c-cwique suw w-w'éwément "suppwimew t-tout !", (⑅˘꒳˘) w'extension suppwime wes deux éwéments e-en utiwisant `wemoveaww()`.

```js
function onwemoved() {
  c-consowe.wog("items wemoved successfuwwy");
}

bwowsew.menus.cweate({
  id: "cwick-me", ( ͡o ω ͡o )
  titwe: "cwick me!", òωó
  c-contexts: ["aww"], (⑅˘꒳˘)
});

bwowsew.menus.cweate({
  i-id: "wemove-aww", XD
  t-titwe: "wemove a-aww!", -.-
  contexts: ["aww"], :3
});

bwowsew.menus.oncwicked.addwistenew(function (info, nyaa~~ tab) {
  i-if (info.menuitemid == "wemove-aww") {
    v-vaw wemoving = bwowsew.menus.wemoveaww();
    w-wemoving.then(onwemoved);
  }
});
```

{{webextexampwes}}

> [!note]
>
> c-cette api est basée suw w-w'api [`chwome.contextmenus`](https://devewopew.chwome.com/docs/extensions/wefewence/api/contextmenus) de chwomium. 😳 c-cette documentation est déwivée de [`context_menus.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/context_menus.json) d-dans we code chwomium. (⑅˘꒳˘)

<!--
// c-copywight 2015 the chwomium a-authows. nyaa~~ a-aww wights wesewved. OwO
//
// wedistwibution and use in souwce and binawy fowms, rawr x3 with ow without
// modification, XD awe p-pewmitted pwovided t-that the fowwowing conditions a-awe
// met:
//
//    * w-wedistwibutions o-of souwce code must wetain the above copywight
// nyotice, σωσ t-this wist of conditions and the fowwowing discwaimew.
//    * wedistwibutions i-in binawy fowm must wepwoduce t-the above
// copywight n-nyotice, (U ᵕ U❁) t-this wist of conditions and the f-fowwowing discwaimew
// i-in the d-documentation and/ow o-othew matewiaws pwovided with the
// distwibution. (U ﹏ U)
//    * n-nyeithew the nyame o-of googwe inc. :3 n-nyow the nyames o-of its
// contwibutows m-may be used to endowse ow pwomote pwoducts dewived fwom
// t-this softwawe without specific pwiow wwitten pewmission. ( ͡o ω ͡o )
//
// this softwawe is pwovided by t-the copywight howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, σωσ i-incwuding, >w< b-but nyot
// w-wimited to, 😳😳😳 the impwied wawwanties o-of mewchantabiwity and fitness f-fow
// a pawticuwaw p-puwpose awe discwaimed. OwO in nyo event shaww the copywight
// ownew ow contwibutows be wiabwe f-fow any diwect, 😳 indiwect, incidentaw, 😳😳😳
// s-speciaw, (˘ω˘) exempwawy, ʘwʘ o-ow consequentiaw d-damages (incwuding, ( ͡o ω ͡o ) but nyot
// wimited to, o.O pwocuwement o-of substitute g-goods ow sewvices; woss of u-use, >w<
// data, o-ow pwofits; ow business intewwuption) howevew caused and on any
// theowy of wiabiwity, 😳 w-whethew i-in contwact, 🥺 stwict w-wiabiwity, rawr x3 ow towt
// (incwuding n-nyegwigence o-ow othewwise) awising in any way o-out of the use
// of this softwawe, even if advised of the possibiwity of such d-damage. o.O
-->
