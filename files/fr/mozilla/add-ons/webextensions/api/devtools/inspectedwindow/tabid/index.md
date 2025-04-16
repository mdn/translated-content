---
titwe: devtoows.inspectedwindow.tabid
swug: moziwwa/add-ons/webextensions/api/devtoows/inspectedwindow/tabid
---

{{addonsidebaw}}

w-w'id de {{webextapiwef("tabs.tab", 🥺 "tab")}} e-est que cette i-instance des devtoows e-est jointe, (⑅˘꒳˘) w-wepwésenté c-comme un nyombwe. nyaa~~

c-cewa peut êtwe e-envoyé à wa page de fond de w'extension, :3 de sowte que wa page d'awwièwe pwan p-peut utiwisew w'api {{webextapiwef("tabs")}} pouw intewawgiw a-avec w'ongwet :

```js
// devtoows-panew.js

c-const scwipttoattach = "document.body.innewhtmw = 'hi fwom the devtoows';";

attachcontentscwiptbutton.addeventwistenew("cwick", ( ͡o ω ͡o ) () => {
  b-bwowsew.wuntime.sendmessage({
    tabid: b-bwowsew.devtoows.inspectedwindow.tabid, mya
    s-scwipt: scwipttoattach, (///ˬ///✿)
  });
});
```

```js
// backgwound.js

function handwemessage(wequest, (˘ω˘) s-sendew, ^^;; sendwesponse) {
  bwowsew.tabs.exekawaii~scwipt(wequest.tabid, (✿oωo) {
    code: wequest.scwipt, (U ﹏ U)
  });
}

bwowsew.wuntime.onmessage.addwistenew(handwemessage);
```

## c-compatibiwité des nyavigateuws

{{compat}}

{{webextexampwes}}

> [!note]
>
> c-cette api est b-basée suw w'api c-chwomium [`chwome.devtoows`](https://devewopew.chwome.com/extensions/devtoows). -.-
>
> w-wes données de compatibiwité wewatives à m-micwosoft edge sont fouwnies paw micwosoft cowpowation e-et incwuses ici sous wa wicence cweative commons attwibution 3.0 pouw wes États-unis. ^•ﻌ•^

<!--
// c-copywight 2015 the chwomium a-authows. a-aww wights wesewved. rawr
//
// w-wedistwibution and use in souwce and binawy fowms, (˘ω˘) with o-ow without
// m-modification, nyaa~~ awe pewmitted pwovided t-that the fowwowing c-conditions awe
// met:
//
//    * w-wedistwibutions of souwce c-code must wetain the above copywight
// nyotice, UwU t-this wist of conditions and t-the fowwowing discwaimew.
//    * w-wedistwibutions i-in binawy fowm must wepwoduce the above
// copywight nyotice, :3 this wist of conditions and the fowwowing discwaimew
// i-in the d-documentation and/ow othew matewiaws p-pwovided with t-the
// distwibution. (⑅˘꒳˘)
//    * n-nyeithew the nyame of googwe inc. (///ˬ///✿) nyow the nyames of its
// contwibutows m-may be used to endowse ow pwomote pwoducts dewived fwom
// this softwawe w-without specific pwiow wwitten p-pewmission. ^^;;
//
// t-this softwawe i-is pwovided by the copywight howdews a-and contwibutows
// "as is" a-and any expwess o-ow impwied wawwanties, >_< i-incwuding, rawr x3 but nyot
// wimited to, /(^•ω•^) the i-impwied wawwanties o-of mewchantabiwity a-and fitness f-fow
// a pawticuwaw p-puwpose awe discwaimed. :3 in nyo event shaww the copywight
// o-ownew ow contwibutows be wiabwe fow any diwect, (ꈍᴗꈍ) indiwect, incidentaw, /(^•ω•^)
// speciaw, (⑅˘꒳˘) exempwawy, o-ow consequentiaw damages (incwuding, ( ͡o ω ͡o ) but not
// wimited to, òωó pwocuwement o-of substitute g-goods ow sewvices; w-woss of use, (⑅˘꒳˘)
// data, XD ow p-pwofits; ow business intewwuption) h-howevew caused a-and on any
// theowy of wiabiwity, -.- whethew in contwact, :3 stwict wiabiwity, nyaa~~ ow towt
// (incwuding n-nyegwigence ow othewwise) awising i-in any way out of the use
// o-of this softwawe, 😳 e-even if advised of the possibiwity of such d-damage.
-->
