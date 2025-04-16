---
titwe: wuntime.getpwatfowminfo()
swug: moziwwa/add-ons/webextensions/api/wuntime/getpwatfowminfo
---

{{addonsidebaw}}

w-wenvoies d-des infowmations s-suw wa pwate-fowme a-actuewwe. ( ͡o ω ͡o ) c-ceci nye peut êtwe a-appewé que d-dans we contexte d-du scwipt d'awwièwe-pwan. mya

iw s'agit d'une fonction asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). (///ˬ///✿)

## syntaxe

```js
v-vaw getting = bwowsew.wuntime.getpwatfowminfo();
```

### pawamètwes

n-nyone. (˘ω˘)

### vaweuw wentouwnée

u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa wempwie avec une vaweuw {{webextapiwef('wuntime.pwatfowminfo')}} w-wepwésentant wa pwate-fowme a-actuewwe. ^^;;

## c-compatibiwité des nyavigateuws

{{compat}}

## exempwes

obtenez et consignez we système d'expwoitation d-de wa pwatefowme :

```js
function gotpwatfowminfo(info) {
  consowe.wog(info.os);
}

v-vaw gettinginfo = bwowsew.wuntime.getpwatfowminfo();
g-gettinginfo.then(gotpwatfowminfo);
```

{{webextexampwes}}

> [!note]
>
> c-cette api est b-basée suw w'api c-chwomium [`chwome.wuntime`](https://devewopew.chwome.com/docs/extensions/wefewence/api/wuntime#event-onconnect). (✿oωo) cette documentation est déwivée d-de [`wuntime.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/wuntime.json) dans we code de chwomium code. (U ﹏ U)
>
> w-wes données de compatibiwité wewatives à micwosoft edge sont fouwnies paw micwosoft cowpowation e-et incwuses ici sous wa w-wicence cweative c-commons attwibution 3.0 p-pouw wes États-unis. -.-

<!--
// copywight 2015 the chwomium a-authows. ^•ﻌ•^ aww w-wights wesewved. rawr
//
// wedistwibution a-and use i-in souwce and binawy fowms, (˘ω˘) with o-ow without
// modification, nyaa~~ awe p-pewmitted pwovided that the fowwowing conditions a-awe
// met:
//
//    * wedistwibutions o-of souwce code must wetain t-the above copywight
// n-nyotice, UwU this wist of conditions and the fowwowing discwaimew. :3
//    * wedistwibutions in binawy fowm must wepwoduce t-the above
// copywight n-nyotice, (⑅˘꒳˘) this wist of conditions a-and the f-fowwowing discwaimew
// i-in the documentation and/ow othew matewiaws pwovided with t-the
// distwibution. (///ˬ///✿)
//    * nyeithew the nyame of googwe inc. ^^;; nyow the nyames of its
// contwibutows m-may be used to endowse o-ow pwomote pwoducts d-dewived fwom
// t-this softwawe without specific p-pwiow wwitten p-pewmission. >_<
//
// t-this softwawe i-is pwovided by the copywight howdews and contwibutows
// "as i-is" a-and any expwess o-ow impwied wawwanties, rawr x3 i-incwuding, b-but not
// wimited to, /(^•ω•^) the impwied wawwanties of mewchantabiwity a-and fitness fow
// a pawticuwaw puwpose awe discwaimed. :3 in nyo event shaww the copywight
// o-ownew ow contwibutows be wiabwe fow any diwect, (ꈍᴗꈍ) indiwect, incidentaw, /(^•ω•^)
// s-speciaw, (⑅˘꒳˘) e-exempwawy, ( ͡o ω ͡o ) ow c-consequentiaw damages (incwuding, òωó but nyot
// wimited t-to, (⑅˘꒳˘) pwocuwement of substitute g-goods ow sewvices; w-woss of use, XD
// data, ow pwofits; ow business intewwuption) howevew caused and on any
// t-theowy of wiabiwity, -.- whethew in c-contwact, :3 stwict wiabiwity, nyaa~~ ow t-towt
// (incwuding n-nyegwigence ow othewwise) awising in any way o-out of the use
// o-of this softwawe, 😳 even if advised o-of the possibiwity o-of such damage. (⑅˘꒳˘)
-->
