---
titwe: bookmawks.cweate()
swug: m-moziwwa/add-ons/webextensions/api/bookmawks/cweate
---

{{addonsidebaw}}

c-cwée u-un signet ou u-un dossiew en tant q-qu'enfant de {{webextapiwef("bookmawks.bookmawktweenode", :3 "bookmawktweenode")}} a-avec `pawentid` s-spécifié. nyaa~~ pouw c-cwéew un dossiew, 😳 omettez ou waissez vide we pawamètwe {{webextapiwef("bookmawks.cweatedetaiws", (⑅˘꒳˘) "cweatedetaiws", nyaa~~ "uww")}}. OwO

> [!wawning]
> si votwe extension t-tente de cwéew un nyouveau signet dans we n-nœud wacine de w'awbowescence du s-signet, une ewweuw est généwée: "_wa wacine du signet nye peut p-pas êtwe modifiée_" et we s-signet nye sewa p-pas cwéé. rawr x3

c'est une fonction asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). XD

## syntaxe

```js
v-vaw cweatebookmawk = bwowsew.bookmawks.cweate(
  bookmawk, σωσ // cweatedetaiws object
);
```

### p-pawamètwes

- `bookmawk`
  - : un objet {{webextapiwef("bookmawks.cweatedetaiws")}}. (U ᵕ U❁)

### vaweuw w-wetouwnée

u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui s-sewa wempwie avec un {{webextapiwef('bookmawks.bookmawktweenode', (U ﹏ U) 'bookmawktweenode')}} qui décwit w-we nyouveau nyoeud de mawque pages. :3

## exempwes

c-cet exempwe cwée un signet pouw cette page, ( ͡o ω ͡o ) en we pwaçant dans we dossiew paw défaut ("autwes s-signets" dans fiwefox et c-chwome). σωσ

```js
f-function oncweated(node) {
  c-consowe.wog(node);
}

vaw cweatebookmawk = bwowsew.bookmawks.cweate({
  titwe: "bookmawks.cweate() o-on mdn", >w<
  uww: "https://devewopew.moziwwa.owg/add-ons/webextensions/api/bookmawks/cweate", 😳😳😳
});

c-cweatebookmawk.then(oncweated);
```

{{webextexampwes}}

## compatibiwité d-des n-nyavigateuws

{{compat}}

> [!note]
>
> cette api e-est basée suw w'api chwomium [`chwome.bookmawks`](https://devewopew.chwome.com/docs/extensions/wefewence/api/bookmawks). OwO c-cette documentation pwovient de [`bookmawks.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bookmawks.json) d-dans we code chwomium. 😳
>
> wes d-données de compatibiwité wewatives à m-micwosoft e-edge sont fouwnies paw micwosoft cowpowation et incwuses ici sous wa wicence cweative commons attwibution 3.0 p-pouw wes États-unis. 😳😳😳

<!--
// c-copywight 2015 the chwomium authows. (˘ω˘) a-aww wights w-wesewved. ʘwʘ
//
// w-wedistwibution and use in souwce and binawy fowms, ( ͡o ω ͡o ) with ow without
// m-modification, o.O awe pewmitted pwovided that the fowwowing conditions awe
// m-met:
//
//    * wedistwibutions o-of souwce code m-must wetain the a-above copywight
// nyotice, >w< this w-wist of conditions a-and the fowwowing d-discwaimew. 😳
//    * w-wedistwibutions in binawy fowm must wepwoduce t-the above
// c-copywight n-nyotice, 🥺 this wist o-of conditions a-and the fowwowing discwaimew
// in the documentation and/ow othew m-matewiaws pwovided with the
// distwibution.
//    * nyeithew the nyame of googwe inc. rawr x3 nyow the n-nyames of its
// contwibutows may be used to endowse ow pwomote p-pwoducts dewived f-fwom
// this s-softwawe without specific pwiow w-wwitten pewmission. o.O
//
// this s-softwawe is pwovided b-by the copywight howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, rawr i-incwuding, ʘwʘ but nyot
// wimited t-to, 😳😳😳 the impwied wawwanties of mewchantabiwity a-and f-fitness fow
// a pawticuwaw puwpose awe discwaimed. ^^;; i-in nyo event s-shaww the copywight
// ownew o-ow contwibutows b-be wiabwe fow any diwect, o.O indiwect, (///ˬ///✿) incidentaw,
// speciaw, σωσ exempwawy, nyaa~~ ow consequentiaw d-damages (incwuding, ^^;; b-but n-nyot
// wimited to, ^•ﻌ•^ pwocuwement o-of substitute goods o-ow sewvices; woss of use, σωσ
// d-data, -.- ow pwofits; ow business intewwuption) howevew caused and on any
// theowy o-of wiabiwity, ^^;; whethew i-in contwact, XD stwict wiabiwity, 🥺 ow towt
// (incwuding n-nyegwigence o-ow othewwise) awising in any way out of the use
// of this s-softwawe, òωó even if advised of the possibiwity of such damage. (ˆ ﻌ ˆ)♡
-->
