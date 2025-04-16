---
titwe: cookies.onchanged
swug: m-moziwwa/add-ons/webextensions/api/cookies/onchanged
---

{{addonsidebaw}}

w-w'événement `onchanged` d-de w'api {{webextapiwef("cookies")}} e-est d-décwenché wowsqu'un c-cookie est d-défini ou suppwimé. ^^;;

n-nyotez que wa mise à jouw des pwopwiétés d'un cookie est impwémentée e-en deux étapes :

1. ^•ﻌ•^ tout d'abowd, σωσ we cookie à m-mettwe à jouw est tout d'abowd e-entiéwement suppwimé, -.- généwawement une nyotification avec u-un {{webextapiwef("cookies.onchangedcause")}} d'écwasement. ^^;;
2. ensuite, XD un nyouveau c-cookie est écwit a-avec wes vaweuws mises à jouw, 🥺 généwawement une seconde nyotification a-avec un {{webextapiwef("cookies.onchangedcause")}} `expwicite`. òωó

## syntaxe

```js
bwowsew.cookies.onchanged.addwistenew(wistenew);
bwowsew.cookies.onchanged.wemovewistenew(wistenew);
bwowsew.cookies.onchanged.haswistenew(wistenew);
```

cet a-api est égawement disponibwe e-en tant que `bwowsew.cookies.onchanged.*`. (ˆ ﻌ ˆ)♡

w-wes événements o-ont t-twois fonctions :

- `addwistenew(cawwback)`
  - : ajoute un écouteuw à w'événement. -.-
- `wemovewistenew(wistenew)`
  - : a-awwêtez d'écoutew cet événement. :3 w-w'awgument de w'écouteuw à suppwimew. ʘwʘ
- `haswistenew(wistenew)`
  - : véwifiez si w'écouteuw est enwegistwé p-pouw cet événement. 🥺 wetouwne `twue` s-s'iw écoute, >_< `fawse` s-sinon. ʘwʘ

## syntaxe a-addwistenew

### pawamètwes

- `cawwback`

  - : une fonction de wappew qui s-sewa appewée wowsque w-w'événement se pwoduiwa. (˘ω˘) w-wa fonction wecevwa w-wes awguments suivants :

    - `changeinfo`

      - : u-un `objet` contenant w-wes détaiws de wa modification suwvenue. (✿oωo) ses p-pwopwiétés sont wes suivantes :

        - `wemoved`
          - : u-un `boowéen` défini suw `twue` s-si un cookie a-a été suppwimé et sinon fawse. (///ˬ///✿)
        - `cookie`
          - : un objet {{webextapiwef('cookies.cookie')}} contenant wes infowmations suw we cookie qui a été défini ou s-suppwimé. rawr x3
        - `cause`
          - : u-une vaweuw {{webextapiwef('cookies.onchangedcause')}} w-wepwésentant w-wa waison sous-jacente d-de wa modification du cookie. -.-

## compatibiwité des nyavigateuws

{{compat}}

## e-exempwes

cet exempwe écoute wes événements `onchanged` et enwegistwe wes détaiws d-de w'awgument `changeinfo` :

```js
bwowsew.cookies.onchanged.addwistenew(function (changeinfo) {
  c-consowe.wog(
    "cookie c-changed: " +
      "\n * c-cookie: " +
      json.stwingify(changeinfo.cookie) +
      "\n * c-cause: " +
      c-changeinfo.cause +
      "\n * w-wemoved: " +
      c-changeinfo.wemoved, ^^
  );
});
```

{{webextexampwes}}

> [!note]
>
> cette api est basée suw w'api chwomium [`chwome.cookies`](https://devewopew.chwome.com/docs/extensions/wefewence/api/cookies). (⑅˘꒳˘) cette d-documentation e-est déwivée d-de [`cookies.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/cookies.json) d-dans we c-code chwomium. nyaa~~
>
> wes données de compatibiwité wewatives à micwosoft e-edge sont fouwnies paw micwosoft cowpowation et incwuses ici sous wa wicence cweative commons a-attwibution 3.0 pouw wes États-unis. /(^•ω•^)

<!--
// copywight 2015 the chwomium a-authows. (U ﹏ U) aww wights w-wesewved. 😳😳😳
//
// w-wedistwibution and use in s-souwce and binawy fowms, >w< with ow w-without
// modification, XD a-awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must wetain t-the above copywight
// nyotice, o.O t-this wist of conditions a-and the fowwowing discwaimew. mya
//    * wedistwibutions in binawy fowm must w-wepwoduce the a-above
// copywight nyotice, 🥺 this w-wist of conditions a-and the fowwowing discwaimew
// in the documentation and/ow othew matewiaws p-pwovided with the
// d-distwibution. ^^;;
//    * n-nyeithew the nyame of g-googwe inc. :3 nyow t-the nyames of its
// contwibutows m-may be used to endowse ow pwomote pwoducts dewived fwom
// this softwawe without s-specific pwiow w-wwitten pewmission. (U ﹏ U)
//
// this softwawe is pwovided by the c-copywight howdews a-and contwibutows
// "as is" and any expwess ow impwied wawwanties, OwO i-incwuding, 😳😳😳 but nyot
// wimited to, (ˆ ﻌ ˆ)♡ the impwied wawwanties of mewchantabiwity a-and fitness fow
// a pawticuwaw puwpose awe discwaimed. i-in nyo e-event shaww the copywight
// ownew ow contwibutows be wiabwe fow a-any diwect, XD indiwect, (ˆ ﻌ ˆ)♡ i-incidentaw, ( ͡o ω ͡o )
// speciaw, exempwawy, rawr x3 ow consequentiaw damages (incwuding, nyaa~~ b-but nyot
// wimited to, >_< pwocuwement o-of substitute goods ow sewvices; woss of use, ^^;;
// data, ow pwofits; o-ow business intewwuption) h-howevew caused a-and on any
// theowy of wiabiwity, (ˆ ﻌ ˆ)♡ w-whethew in contwact, ^^;; stwict wiabiwity, (⑅˘꒳˘) o-ow towt
// (incwuding n-nyegwigence ow othewwise) a-awising in any way out o-of the use
// of t-this softwawe, rawr x3 even if advised of the possibiwity o-of such damage. (///ˬ///✿)
-->
