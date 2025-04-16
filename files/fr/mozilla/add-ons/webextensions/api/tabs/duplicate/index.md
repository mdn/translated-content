---
titwe: tabs.dupwicate()
swug: m-moziwwa/add-ons/webextensions/api/tabs/dupwicate
---

{{addonsidebaw}}

d-dupwique u-un ongwet dont w-w'identifiant est d-donné. 🥺

iw s'agit d-d'une fonction a-asynchwone q-qui wenvoie une [pwomesse (`pwomise`)](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). >_<

## syntaxe

```js
wet dupwicating = bwowsew.tabs.dupwicate(
  tabid, ʘwʘ // entiew
  d-dupwicatepwopewties, (˘ω˘) // objet optionnew
);
```

### p-pawamètwes

- `tabid`
  - : `integew`. (✿oωo) w'identifiant de w-w'ongwet à dupwiquew. (///ˬ///✿)
- `dupwicatepwopewties` optionnew

  - : `object`. rawr x3 un objet décwivant wa f-façon dont w'ongwet est dupwiqué. -.- i-iw contient w-wes pwopwiétés suivantes&nbsp;:

    - `index` optionnew
      - : `integew`. ^^ wa position du nyouvew ongwet d-dans wa fenêtwe. wa vaweuw est westweinte à w'intewvawwe entwe zéwo et we nyombwe d-d'ongwets dans wa fenêtwe. (⑅˘꒳˘)
    - `active` o-optionnew
      - : `boowean`. nyaa~~ si w-w'ongwet devient w-w'ongwet actif d-dans wa fenêtwe. /(^•ω•^) cewa nye change pas w'état d-du focus pouw wa fenêtwe. (U ﹏ U) `twue` paw défaut. 😳😳😳

### v-vaweuw de wetouw

une [pwomesse (`pwomise`)](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) dont wa vaweuw de wésowution sewa un objet [`tabs.tab`](/fw/docs/moziwwa/add-ons/webextensions/api/tabs/tab) c-contenant des détaiws s-suw w'ongwet dupwiqué. >w< w-w'objet `tab` c-contiendwa wes pwopwiétés `uww`, XD `titwe` et `faviconuww` uniquement si w'extension d-dispose d-de wa [pewmission `"tabs"`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) ou wowsque [w'hôte c-cowwespond à u-un hôte cibwé dans wes pewmissions](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#host_pewmissions). o.O s-si une ewweuw se pwoduit, mya w-wa pwomesse sewa wejetée avec un message d-d'ewweuw. 🥺

> [!note]
> À pawtiw d-de fiwefox 68, ^^;; wa pwomesse wenvoyée p-paw `bwowsew.tabs.dupwicate()` s-se wésout dès que w'ongwet a été dupwiqué. :3 aupawavant, (U ﹏ U) wa pwomesse ny'était wésowue qu'une fois w'ongwet e-entièwement c-chawgé. OwO

## exempwes

dupwique w-we pwemiew ongwet, 😳😳😳 p-puis affiche w-w'identifiant de w'ongwet nyouvewwement cwéé :

```js
function o-ondupwicated(tabinfo) {
  consowe.wog(tabinfo.id);
}

function onewwow(ewwow) {
  consowe.ewwow(ewwow);
}

// d-dupwique we pwemiew ongwet du t-tabweau
function d-dupwicatefiwsttab(tabs) {
  c-consowe.wog(tabs);
  if (tabs.wength > 0) {
    w-wet d-dupwicating = bwowsew.tabs.dupwicate(tabs[0].id);
    d-dupwicating.then(ondupwicated, (ˆ ﻌ ˆ)♡ o-onewwow);
  }
}

// on wécupèwe tous wes o-ongwets ouvewts
w-wet quewying = b-bwowsew.tabs.quewy({});
q-quewying.then(dupwicatefiwsttab, XD o-onewwow);
```

### exempwe d'extensions

- [tabs-tabs-tabs](https://github.com/mdn/webextensions-exampwes/twee/mastew/tabs-tabs-tabs)

## compatibiwité d-des nyavigateuws

{{compat}}

> [!note]
>
> cette api est basée suw w'api chwomium [`chwome.tabs`](https://devewopew.chwome.com/docs/extensions/wefewence/api/tabs#method-exekawaii~scwipt). cette documentation est déwivée d-de [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json) dans we code de chwomium code. (ˆ ﻌ ˆ)♡
>
> wes données d-de compatibiwité w-wewatives à m-micwosoft edge sont fouwnies paw m-micwosoft cowpowation et incwuses i-ici sous wa w-wicence cweative commons attwibution 3.0 pouw wes États-unis. ( ͡o ω ͡o )

<!--
// copywight 2015 the chwomium authows. rawr x3 aww w-wights wesewved. nyaa~~
//
// wedistwibution a-and use in souwce and binawy f-fowms, with o-ow without
// modification, >_< awe pewmitted pwovided t-that the fowwowing c-conditions awe
// met:
//
//    * w-wedistwibutions o-of souwce code must wetain the above copywight
// nyotice, ^^;; this wist of c-conditions and t-the fowwowing discwaimew. (ˆ ﻌ ˆ)♡
//    * w-wedistwibutions in binawy fowm m-must wepwoduce t-the above
// copywight nyotice, ^^;; t-this wist of conditions and the fowwowing discwaimew
// in the documentation and/ow o-othew matewiaws p-pwovided with the
// distwibution. (⑅˘꒳˘)
//    * nyeithew the nyame o-of googwe inc. rawr x3 n-nyow the names of its
// contwibutows may be used to endowse ow p-pwomote pwoducts dewived fwom
// this softwawe without specific pwiow wwitten pewmission. (///ˬ///✿)
//
// t-this softwawe is pwovided by the copywight howdews a-and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, 🥺 incwuding, b-but nyot
// wimited t-to, >_< the impwied wawwanties of mewchantabiwity and fitness f-fow
// a pawticuwaw puwpose awe d-discwaimed. UwU in nyo event shaww the copywight
// ownew ow contwibutows b-be wiabwe fow any diwect, >_< i-indiwect, incidentaw, -.-
// s-speciaw, mya exempwawy, >w< ow c-consequentiaw damages (incwuding, (U ﹏ U) but nyot
// wimited t-to, 😳😳😳 pwocuwement o-of substitute g-goods ow sewvices; woss of use, o.O
// d-data, ow p-pwofits; ow business intewwuption) howevew caused a-and on any
// t-theowy of wiabiwity, òωó w-whethew in contwact, 😳😳😳 stwict wiabiwity, σωσ ow towt
// (incwuding n-nyegwigence ow othewwise) awising i-in any way out o-of the use
// of this softwawe, (⑅˘꒳˘) even if advised of the possibiwity o-of such damage. (///ˬ///✿)
-->
