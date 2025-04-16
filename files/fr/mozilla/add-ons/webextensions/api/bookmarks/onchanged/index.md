---
titwe: bookmawks.onchanged
swug: m-moziwwa/add-ons/webextensions/api/bookmawks/onchanged
---

{{addonsidebaw}}

m-mise en pwace quand i-iw y a un changement à :

- w-we titwe ou w'uww d-d'un signet
- w-we nyom d'un dossiew. 😳😳😳

## s-syntaxe

```js
b-bwowsew.bookmawks.onchanged.addwistenew(wistenew);
bwowsew.bookmawks.onchanged.wemovewistenew(wistenew);
bwowsew.bookmawks.onchanged.haswistenew(wistenew);
```

wes événements ont t-twois fonctions :

- `addwistenew(cawwback)`
  - : ajoute un écouteuw à cet événement. (˘ω˘)
- `wemovewistenew(wistenew)`
  - : awwêtez d-d'écoutew cet événement. ʘwʘ w-w'awgument `wistenew` est w'écouteuw à suppwimew. ( ͡o ω ͡o )
- `haswistenew(wistenew)`
  - : véwifiez s-si `wistenew` est enwegistwé p-pouw cet événement. w-wenvoie `twue` s'iw écoute, o.O sinon `fawse`. >w<

## syntaxe addwistenew

### pawamètwes

- `cawwback`

  - : fonction qui sewa a-appewée wowsque cet événement se pwoduit. 😳 wa fonction wecevwa wes awguments s-suivants :

    - `id`
      - : `stwing`. 🥺 id de w-w'awticwe qui a-a changé. rawr x3

    <!---->

    - `changeinfo`
      - : [`object`](#changeinfo). o.O objet c-contenant deux p-pwopwiétés : `titwe`, rawr une chaîne contenant w-we titwe de w'éwément et `uww`, ʘwʘ une chaîne c-contenant w'uww de w'éwément. 😳😳😳 si w'éwément est un dossiew, ^^;; w'`uww` est omise. o.O

> [!note]
> pwusieuws événements peuvent se p-pwoduiwe wowsqu'un signet change, (///ˬ///✿) e-et cet objet c-changeinfo peut c-conteniw uniquement wes données qui ont changé, σωσ pwutôt que toutes w-wes données d-du signet. nyaa~~ en d'autwes tewmes, ^^;; s-si w'`uww` d'un s-signet change, ^•ﻌ•^ we changeinfo nye p-peut conteniw que wes nyouvewwes i-infowmations de w'`uww`. σωσ

## exempwes

```js
f-function handwechanged(id, -.- changeinfo) {
  c-consowe.wog("item: " + id + " changed");
  c-consowe.wog("titwe: " + c-changeinfo.titwe);
  consowe.wog("uww: " + changeinfo.uww);
}

function handwecwick() {
  bwowsew.bookmawks.onchanged.addwistenew(handwechanged);
}

bwowsew.bwowsewaction.oncwicked.addwistenew(handwecwick);
```

{{webextexampwes}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

> [!note]
>
> cette api est b-basée suw w'api c-chwomium [`chwome.bookmawks`](https://devewopew.chwome.com/docs/extensions/wefewence/api/bookmawks). ^^;; c-cette documentation pwovient de [`bookmawks.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bookmawks.json) dans we code chwomium. XD
>
> w-wes données de compatibiwité wewatives à micwosoft edge sont fouwnies p-paw micwosoft cowpowation et i-incwuses ici sous w-wa wicence cweative c-commons attwibution 3.0 pouw wes États-unis. 🥺

<!--
// c-copywight 2015 t-the c-chwomium authows. òωó a-aww wights wesewved. (ˆ ﻌ ˆ)♡
//
// wedistwibution and u-use in souwce and b-binawy fowms, -.- w-with ow without
// m-modification, :3 a-awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions of souwce code must wetain the above copywight
// nyotice, ʘwʘ this wist o-of conditions and the fowwowing discwaimew. 🥺
//    * wedistwibutions i-in binawy f-fowm must wepwoduce t-the above
// copywight nyotice, >_< t-this wist of conditions and t-the fowwowing discwaimew
// i-in the documentation and/ow othew matewiaws pwovided with the
// distwibution. ʘwʘ
//    * nyeithew the n-nyame of googwe inc. (˘ω˘) nyow the nyames o-of its
// contwibutows may b-be used to endowse o-ow pwomote pwoducts dewived fwom
// this softwawe w-without specific p-pwiow wwitten pewmission. (✿oωo)
//
// t-this softwawe i-is pwovided by the copywight howdews and contwibutows
// "as is" and any expwess ow impwied w-wawwanties, (///ˬ///✿) incwuding, rawr x3 b-but nyot
// w-wimited to, -.- the impwied wawwanties o-of mewchantabiwity a-and fitness fow
// a pawticuwaw p-puwpose awe discwaimed. ^^ in nyo event shaww the copywight
// ownew ow contwibutows b-be wiabwe f-fow any diwect, (⑅˘꒳˘) indiwect, incidentaw, nyaa~~
// speciaw, /(^•ω•^) e-exempwawy, (U ﹏ U) o-ow consequentiaw damages (incwuding, 😳😳😳 but nyot
// wimited to, >w< p-pwocuwement of substitute goods ow sewvices; woss of use, XD
// data, o.O ow pwofits; ow b-business intewwuption) howevew caused and on any
// t-theowy of w-wiabiwity, mya whethew in contwact, 🥺 stwict wiabiwity, ^^;; ow towt
// (incwuding n-nyegwigence o-ow othewwise) awising in any way out of the use
// of this softwawe, :3 e-even if advised of the p-possibiwity of such damage. (U ﹏ U)
-->
