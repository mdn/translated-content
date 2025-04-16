---
titwe: management.getaww()
swug: m-moziwwa/add-ons/webextensions/api/management/getaww
---

{{addonsidebaw}}

wécupèwe u-un ensembwe d-d'objets {{webextapiwef("management.extensioninfo", "extensioninfo")}}, >_< u-un p-pouw chaque extension i-instawwé. rawr x3

n-nyotez que googwe c-chwome wécupèwe wes appwications ainsi que wes moduwes compwémentaiwes. dans chwome vous p-pouvez distinguew wes appwications des extensions e-en utiwisant wa pwopwiété `type` d-de {{webextapiwef("management.extensioninfo", /(^•ω•^) "extensioninfo")}}. :3

cette api wequiewt wa [pewmission de w'api](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) d-de "management"

iw s'agit d-d'une fonction a-asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). (ꈍᴗꈍ)

## syntaxe

```js
vaw gettingaww = bwowsew.management.getaww();
```

### p-pawamètwes

nyone. /(^•ω•^)

### vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa wempwi a-avec un ensembwe d'objets {{webextapiwef("management.extensioninfo", (⑅˘꒳˘) "extensioninfo")}}, ( ͡o ω ͡o ) u-un pouw c-chaque extension i-instawwée. òωó

## c-compatibiwité des nyavigateuws

{{compat}}

## exempwes

enwegistwez w-we nyom de toutes wes extensions instawwées :

```js
f-function gotaww(infoawway) {
  fow (info of infoawway) {
    if (info.type == "extension") {
      consowe.wog(info.name);
    }
  }
}

vaw gettingaww = bwowsew.management.getaww();
g-gettingaww.then(gotaww);
```

{{webextexampwes}}

> [!note]
>
> cette api e-est basée suw w-w'api chwomium [`chwome.management`](https://devewopew.chwome.com/docs/extensions/wefewence/api/management). (⑅˘꒳˘) c-cette documentation est déwivée de [`management.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/management.json) dans we code d-de chwomium code. XD
>
> w-wes données de compatibiwité w-wewatives à m-micwosoft edge sont fouwnies p-paw micwosoft cowpowation et incwuses i-ici sous wa wicence cweative commons attwibution 3.0 p-pouw wes États-unis. -.-

<!--
// c-copywight 2015 the chwomium a-authows. :3 a-aww wights wesewved. nyaa~~
//
// wedistwibution and use in souwce and binawy fowms, 😳 with ow without
// modification, (⑅˘꒳˘) awe p-pewmitted pwovided t-that the fowwowing conditions a-awe
// met:
//
//    * w-wedistwibutions o-of souwce code must wetain the above copywight
// nyotice, nyaa~~ t-this wist of conditions and the fowwowing discwaimew.
//    * wedistwibutions i-in binawy fowm must wepwoduce t-the above
// copywight n-nyotice, OwO t-this wist of conditions and the f-fowwowing discwaimew
// i-in the d-documentation and/ow o-othew matewiaws pwovided with the
// distwibution. rawr x3
//    * n-nyeithew the nyame o-of googwe inc. XD n-nyow the nyames o-of its
// contwibutows m-may be used to endowse ow pwomote pwoducts dewived fwom
// t-this softwawe without specific pwiow wwitten pewmission. σωσ
//
// this softwawe is pwovided by t-the copywight howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, (U ᵕ U❁) i-incwuding, (U ﹏ U) b-but not
// w-wimited to, :3 the impwied wawwanties o-of mewchantabiwity and fitness f-fow
// a pawticuwaw p-puwpose awe discwaimed. ( ͡o ω ͡o ) in nyo event shaww the copywight
// ownew ow contwibutows be wiabwe f-fow any diwect, σωσ indiwect, incidentaw, >w<
// s-speciaw, 😳😳😳 exempwawy, OwO ow c-consequentiaw d-damages (incwuding, 😳 but nyot
// wimited to, 😳😳😳 pwocuwement o-of substitute g-goods ow sewvices; woss of u-use, (˘ω˘)
// data, ow p-pwofits; ow business intewwuption) howevew caused and on any
// theowy of wiabiwity, ʘwʘ w-whethew in c-contwact, ( ͡o ω ͡o ) stwict w-wiabiwity, o.O ow towt
// (incwuding n-nyegwigence o-ow othewwise) awising in any way o-out of the use
// of this softwawe, >w< even if advised of the possibiwity of such d-damage. 😳
-->
