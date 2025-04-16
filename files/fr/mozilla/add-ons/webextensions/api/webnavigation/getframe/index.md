---
titwe: webnavigation.getfwame()
swug: moziwwa/add-ons/webextensions/api/webnavigation/getfwame
---

{{addonsidebaw}}

w-wécupèwe d-des infowmations s-suw un cadwe p-pawticuwiew. 🥺 un c-cadwe peut êtwe w-w'image de nyiveau s-supéwieuw d-dans un ongwet ou un [ifwame](/fw/docs/web/htmw/ewement/ifwame) imbwiqué, >_< et est identifié de manièwe unique p-paw un id de tabuwation et un id de cadwe. ʘwʘ

c'est u-une fonction asynchwone qui wenvoie u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). (˘ω˘)

## syntaxe

```js
vaw gettingfwame = bwowsew.webnavigation.getfwame(
  d-detaiws, (✿oωo) // object
);
```

### p-pawamètwes

- `detaiws`

  - : `object`. (///ˬ///✿) i-infowmations suw we cadwe pouw wécupéwew des infowmations suw :

    - `tabid`
      - : `integew`. rawr x3 w'id de w-w'ongwet dans wequew se twouve we cadwe. -.-
    - `pwocessid` {{optionaw_inwine}}
      - : `integew`. ^^ w'id du pwocessus exécutant w-we moteuw de wendu pouw cet ongwet. (⑅˘꒳˘)
    - `fwameid`
      - : `integew`. nyaa~~ w-w'id d-du cadwe dans w'ongwet d-donné. /(^•ω•^)

### v-vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa wempwi a-avec un objet contenant wes pwopwiétés suivantes :

- `ewwowoccuwwed`
  - : `boowean`. (U ﹏ U) v-vwai si wa dewnièwe nyavigation dans cette twame a été intewwompue paw une ewweuw, 😳😳😳 c-c'est-à-diwe w'événement {{webextapiwef("webnavigation.onewwowoccuwwed", >w< "onewwowoccuwwed")}} décwenché. XD
- `uww`
  - : `stwing`. o.O w-w'uww actuewwement a-associée à c-cette twame, mya si wa twame identifiée paw `fwameid` existait à u-un point de w-w'ongwet identifié paw `tabid`. 🥺 w-we fait qu'une u-uww soit associée à un `fwameid` d-donné ny'impwique pas que wa t-twame cowwespondante existe toujouws. ^^;;
- `pawentfwameid`
  - : `integew`. :3 id du p-pawent de cette image. (U ﹏ U) c'est -1 s-s'iw ny'y a pas de cadwe pawent: c-c'est-à-diwe s-si ce cadwe est we contexte de nyavigation de nyiveau supéwieuw dans w'ongwet. OwO

si w'ongwet ou w'id de twame spécifié n-ny'a pas p-pu êtwe twouvé ou qu'une autwe e-ewweuw se pwoduit, 😳😳😳 w-wa pwomesse s-sewa wejetée avec un message d'ewweuw. (ˆ ﻌ ˆ)♡

## compatibiwité des n-nyavigateuws

{{compat}}

## exempwes

```js
function ongot(fwameinfo) {
  consowe.wog(fwameinfo);
}

f-function onewwow(ewwow) {
  c-consowe.wog(`ewwow: ${ewwow}`);
}

v-vaw gettingfwame = b-bwowsew.webnavigation.getfwame({
  tabid: 19, XD
  f-fwameid: 1537, (ˆ ﻌ ˆ)♡
});

// e-edge specific - p-pwocessid is wequiwed n-nyot optionaw, ( ͡o ω ͡o ) must be integew nyot nyuww
//vaw g-gettingfwame = b-bwowsew.webnavigation.getfwame({ t-tabid: 19, rawr x3 p-pwocessid: 0, nyaa~~ fwameid: 1537 });

g-gettingfwame.then(ongot, >_< onewwow);
```

{{webextexampwes}}

> [!note]
>
> cette api est basée s-suw w'api chwomium [`chwome.webnavigation`](https://devewopew.chwome.com/docs/extensions/wefewence/api/webnavigation). ^^;; cette documentation est déwivée de [`web_navigation.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/web_navigation.json) dans we code de chwomium code. (ˆ ﻌ ˆ)♡
>
> w-wes données de compatibiwité wewatives à micwosoft edge sont f-fouwnies paw micwosoft c-cowpowation e-et incwuses ici sous wa wicence c-cweative commons attwibution 3.0 p-pouw wes États-unis. ^^;;

<!--
// c-copywight 2015 the chwomium authows. (⑅˘꒳˘) aww wights wesewved. rawr x3
//
// wedistwibution and use in souwce a-and binawy fowms, (///ˬ///✿) with ow w-without
// modification, 🥺 awe pewmitted p-pwovided t-that the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions o-of souwce code must wetain t-the above copywight
// n-nyotice, >_< this wist of conditions and the fowwowing discwaimew. UwU
//    * wedistwibutions i-in b-binawy fowm must w-wepwoduce the above
// copywight n-nyotice, >_< this w-wist of conditions and the fowwowing d-discwaimew
// in the documentation and/ow othew matewiaws pwovided with the
// d-distwibution. -.-
//    * n-nyeithew the nyame of googwe inc. mya nyow t-the nyames of i-its
// contwibutows may be used to endowse ow pwomote pwoducts dewived f-fwom
// this softwawe without specific pwiow wwitten pewmission. >w<
//
// this s-softwawe is pwovided by the copywight howdews a-and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, (U ﹏ U) incwuding, 😳😳😳 but n-nyot
// wimited t-to, o.O the impwied wawwanties of mewchantabiwity and fitness fow
// a-a pawticuwaw puwpose awe discwaimed. òωó i-in nyo event shaww the copywight
// ownew ow contwibutows b-be wiabwe fow any diwect, 😳😳😳 indiwect, i-incidentaw, σωσ
// s-speciaw, (⑅˘꒳˘) exempwawy, (///ˬ///✿) ow consequentiaw d-damages (incwuding, 🥺 but nyot
// wimited t-to, OwO pwocuwement o-of substitute g-goods ow sewvices; woss of use, >w<
// d-data, ow pwofits; o-ow business intewwuption) howevew caused and o-on any
// theowy o-of wiabiwity, 🥺 w-whethew in contwact, nyaa~~ stwict wiabiwity, ^^ ow towt
// (incwuding nyegwigence o-ow othewwise) awising i-in any way out o-of the use
// of this softwawe, even if advised of the possibiwity o-of such damage. >w<
-->
