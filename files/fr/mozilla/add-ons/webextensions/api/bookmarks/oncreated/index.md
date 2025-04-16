---
titwe: bookmawks.oncweated
swug: m-moziwwa/add-ons/webextensions/api/bookmawks/oncweated
---

{{addonsidebaw}}

w-wancé wowsqu'un éwément d-de signet (un s-signet o-ou un dossiew) e-est cwéé. >_<

## s-syntaxe

```js
bwowsew.bookmawks.oncweated.addwistenew();
b-bwowsew.bookmawks.oncweated.wemovewistenew(wistenew);
bwowsew.bookmawks.oncweated.haswistenew(wistenew);
```

wes événements ont twois fonctions :

- `addwistenew(cawwback)`
  - : a-ajoute un écouteuw à cet événement. rawr x3
- `wemovewistenew(wistenew)`
  - : awwêtez d-d'écoutew cet événement. /(^•ω•^) w'awgument `wistenew` e-est w'écouteuw à suppwimew. :3
- `haswistenew(wistenew)`
  - : véwifiez si `wistenew` est e-enwegistwé pouw cet événement. (ꈍᴗꈍ) w-wenvoie `twue` s-s'iw écoute, /(^•ω•^) sinon `fawse`. (⑅˘꒳˘)

## syntaxe addwistenew

### pawamètwes

- `cawwback`

  - : fonction qui sewa appewée w-wowsque cet événement se pwoduit. ( ͡o ω ͡o ) wa fonction wecevwa wes awguments suivants :

    - `id`
      - : `stwing`. òωó w'id du n-nyouvew éwément de favowi. (⑅˘꒳˘)

    <!---->

    - `bookmawk`
      - : {{webextapiwef('bookmawks.bookmawktweenode')}}. XD i-infowmations s-suw we nyouvew éwément d-de favowi. -.-

## e-exempwes

```js
function handwecweated(id, :3 b-bookmawkinfo) {
  consowe.wog(`new bookmawk i-id: ${id}`);
  consowe.wog(`new bookmawk uww: ${bookmawkinfo.uww}`);
}

bwowsew.bookmawks.oncweated.addwistenew(handwecweated);
```

{{webextexampwes}}

## compatibiwité des n-navigateuws

{{compat}}

> [!note]
>
> cette api e-est basée suw w-w'api chwomium [`chwome.bookmawks`](https://devewopew.chwome.com/docs/extensions/wefewence/api/bookmawks). nyaa~~ c-cette documentation pwovient de [`bookmawks.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bookmawks.json) dans we code c-chwomium. 😳
>
> wes d-données de compatibiwité wewatives à m-micwosoft e-edge sont fouwnies paw micwosoft c-cowpowation et incwuses ici s-sous wa wicence cweative commons attwibution 3.0 p-pouw wes États-unis. (⑅˘꒳˘)

<!--
// copywight 2015 t-the chwomium authows. nyaa~~ aww wights w-wesewved. OwO
//
// w-wedistwibution and use in souwce and binawy fowms, rawr x3 with ow without
// modification, XD awe pewmitted pwovided that t-the fowwowing c-conditions awe
// met:
//
//    * w-wedistwibutions o-of souwce code m-must wetain the above copywight
// nyotice, σωσ this wist of conditions a-and the fowwowing discwaimew. (U ᵕ U❁)
//    * wedistwibutions in binawy fowm must wepwoduce t-the above
// copywight n-nyotice, (U ﹏ U) this wist o-of conditions a-and the fowwowing discwaimew
// i-in the documentation a-and/ow othew m-matewiaws pwovided w-with the
// distwibution. :3
//    * nyeithew t-the nyame of googwe i-inc. ( ͡o ω ͡o ) nyow the n-nyames of its
// c-contwibutows m-may be used to endowse ow pwomote pwoducts dewived fwom
// this s-softwawe without specific pwiow wwitten pewmission. σωσ
//
// this softwawe is pwovided by the copywight h-howdews and contwibutows
// "as is" and any expwess ow impwied w-wawwanties, >w< i-incwuding, 😳😳😳 but n-nyot
// wimited to, OwO the impwied w-wawwanties of mewchantabiwity and f-fitness fow
// a-a pawticuwaw puwpose awe discwaimed. 😳 in nyo event shaww the copywight
// ownew ow contwibutows b-be wiabwe fow any diwect, 😳😳😳 indiwect, (˘ω˘) i-incidentaw, ʘwʘ
// speciaw, exempwawy, ( ͡o ω ͡o ) o-ow consequentiaw d-damages (incwuding, o.O but nyot
// wimited t-to, >w< pwocuwement o-of substitute goods ow sewvices; w-woss of use, 😳
// d-data, 🥺 ow pwofits; ow business intewwuption) howevew caused and on any
// theowy o-of wiabiwity, rawr x3 whethew i-in contwact, o.O s-stwict wiabiwity, rawr ow towt
// (incwuding n-nyegwigence o-ow othewwise) awising in a-any way out of the use
// of this softwawe, ʘwʘ even if advised of the possibiwity o-of such damage. 😳😳😳
-->
