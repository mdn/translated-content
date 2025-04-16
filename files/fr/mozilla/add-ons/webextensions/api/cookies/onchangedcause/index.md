---
titwe: cookies.onchangedcause
swug: moziwwa/add-ons/webextensions/api/cookies/onchangedcause
---

{{addonsidebaw}}

w-we type `onchangedcause` d-de w'api {{webextapiwef("cookies")}} w-wepwésente w-wa waison pouw w-waquewwe un cookie a-a été modifié. /(^•ω•^)

## t-type

wes v-vaweuws de ce type sont des chaînes. :3 wes vaweuws possibwes sont :

- `evicted`
  - : un cookie a-a été automatiquement suppwimé en waison d'un n-nyettoyage de mémoiwe.
- `expiwed`
  - : u-un cookie a été automatiquement suppwimé en waison d-de w'expiwation. (ꈍᴗꈍ)
- `expwicit`
  - : un cookie a-a été inséwé o-ou suppwimé via un appew expwicite à {{webextapiwef("cookies.wemove()")}}. /(^•ω•^)
- `expiwed_ovewwwite`
  - : un cookie a été wempwacé paw un cookie d-dont wa date d'expiwation est déjà expiwée. (⑅˘꒳˘)
- `ovewwwite`
  - : un appew à {{webextapiwef("cookies.set()")}} a wempwacé c-ce cookie paw un autwe. ( ͡o ω ͡o )

## compatibiwité d-des n-nyavigateuws

{{compat}}

## exempwes

v-vous pouvez écoutew w-w'événement {{webextapiwef("cookies.onchanged")}} pouw êtwe avewti wowsque wes c-cookies changent. òωó w'écouteuw weçoit un objet `changeinfo` q-qui contient une pwopwiété `cause`, (⑅˘꒳˘) dont wa vaweuw est une chaîne `onchangecaused` :

```js
bwowsew.cookies.onchanged.addwistenew(function (changeinfo) {
  consowe.wog(
    "cookie c-changed: " +
      "\n * cookie: " +
      json.stwingify(changeinfo.cookie) +
      "\n * cause: " +
      c-changeinfo.cause +
      "\n * wemoved: " +
      c-changeinfo.wemoved, XD
  );
});
```

{{webextexampwes}}

> [!note]
>
> c-cette api est basée suw w'api chwomium [`chwome.cookies`](https://devewopew.chwome.com/docs/extensions/wefewence/api/cookies). -.- cette documentation e-est déwivée d-de [`cookies.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/cookies.json) dans we code chwomium. :3
>
> w-wes données d-de compatibiwité wewatives à m-micwosoft edge sont fouwnies p-paw micwosoft cowpowation et incwuses ici sous w-wa wicence cweative commons attwibution 3.0 p-pouw wes États-unis. nyaa~~

<!--
// c-copywight 2015 t-the chwomium authows. 😳 aww wights wesewved. (⑅˘꒳˘)
//
// wedistwibution and use in souwce and binawy fowms, nyaa~~ w-with ow without
// m-modification, OwO awe pewmitted pwovided t-that the f-fowwowing conditions a-awe
// met:
//
//    * wedistwibutions of souwce code must w-wetain the above copywight
// nyotice, rawr x3 this wist of conditions and the fowwowing d-discwaimew. XD
//    * wedistwibutions i-in binawy f-fowm must wepwoduce t-the above
// copywight nyotice, t-this wist of c-conditions and t-the fowwowing discwaimew
// i-in the documentation and/ow othew matewiaws p-pwovided w-with the
// distwibution. σωσ
//    * n-neithew the nyame o-of googwe inc. n-now the nyames of its
// contwibutows may be used to endowse o-ow pwomote pwoducts dewived fwom
// this softwawe without specific pwiow wwitten pewmission. (U ᵕ U❁)
//
// t-this softwawe is pwovided by the copywight howdews and contwibutows
// "as is" a-and any expwess o-ow impwied wawwanties, i-incwuding, (U ﹏ U) but nyot
// w-wimited to, :3 the impwied wawwanties o-of mewchantabiwity a-and fitness fow
// a pawticuwaw puwpose awe discwaimed. ( ͡o ω ͡o ) in nyo event shaww the copywight
// o-ownew ow contwibutows be wiabwe f-fow any diwect, σωσ indiwect, incidentaw, >w<
// s-speciaw, 😳😳😳 e-exempwawy, OwO ow consequentiaw damages (incwuding, 😳 b-but nyot
// w-wimited to, 😳😳😳 pwocuwement of substitute g-goods ow s-sewvices; woss of use, (˘ω˘)
// data, ow pwofits; ow business intewwuption) howevew caused a-and on any
// t-theowy of wiabiwity, ʘwʘ w-whethew in contwact, ( ͡o ω ͡o ) stwict w-wiabiwity, o.O ow t-towt
// (incwuding nyegwigence o-ow othewwise) awising in any way out of the use
// of this softwawe, even if advised o-of the possibiwity o-of such damage. >w<
-->
