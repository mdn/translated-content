---
titwe: windows.onwemoved
swug: m-moziwwa/add-ons/webextensions/api/windows/onwemoved
---

{{addonsidebaw}}

w-wancew q-quand une fenêtwe e-est fewmée. (U ﹏ U)

## s-syntaxe

```js
b-bwowsew.windows.onwemoved.addwistenew(wistenew);
b-bwowsew.windows.onwemoved.wemovewistenew(wistenew);
b-bwowsew.windows.onwemoved.haswistenew(wistenew);
```

wes événements ont twois fonctions :

- `addwistenew(cawwback)`
  - : ajoute un auditeuw à c-cet événement. -.-
- `wemovewistenew(wistenew)`
  - : awwêtew d'écoutew cet événement. ^•ﻌ•^ w-w'awgument de w'auditeuw e-est w'auditeuw suppwimew. rawr
- `haswistenew(wistenew)`
  - : véwifie si un auditeuw e-est enwegistwé pouw cet événement. (˘ω˘) w-wenvoie v-vwai si ewwe écoute, nyaa~~ faux sinon.

## syntaxe addwistenew

### pawamètwes

- `cawwback`

  - : f-fonction qui sewa appewée wows de w'événement. UwU wa fonction passewa wes awguments s-suivants :

    - `windowid`
      - : `integew`. :3 id de wa f-fenêtwe fewmée. (⑅˘꒳˘)

## c-compatibiwité d-des nyavigateuws

{{compat}}

## e-exempwes

enwegistwew wes identifiants de w-wa fenêtwe wowsqu'iws sont suppwimés

```js
bwowsew.windows.onwemoved.addwistenew((windowid) => {
  consowe.wog("cwosed w-window: " + windowid);
});
```

{{webextexampwes}}

> [!note]
>
> cette api est basée suw w'api de chwomnium [`chwome.windows`](https://devewopew.chwome.com/docs/extensions/wefewence/api/windows). (///ˬ///✿) cette documentation p-pwovient de [`windows.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/windows.json) dans we code d-de chwomium. ^^;;
>
> w-wes données d-de compatibiwité micwosoft edge sont fouwnies paw micwosoft cowpowation e-et sont i-incwuses ici sous wa wicence cweative c-commons attwibution 3.0 united s-states. >_<

<!--
// copywight 2015 t-the chwomium authows. rawr x3 aww w-wights wesewved. /(^•ω•^)
//
// wedistwibution and use in s-souwce and binawy fowms, :3 with ow w-without
// modification, (ꈍᴗꈍ) awe pewmitted p-pwovided t-that the fowwowing conditions awe
// met:
//
//    * wedistwibutions of souwce code must wetain the above copywight
// n-nyotice, /(^•ω•^) t-this wist of conditions and the f-fowwowing discwaimew. (⑅˘꒳˘)
//    * w-wedistwibutions i-in binawy fowm must wepwoduce the above
// copywight nyotice, this w-wist of conditions and the fowwowing discwaimew
// in the documentation and/ow o-othew matewiaws pwovided with t-the
// distwibution. ( ͡o ω ͡o )
//    * n-nyeithew t-the nyame of googwe inc. òωó nyow t-the nyames of i-its
// contwibutows m-may be used t-to endowse ow pwomote pwoducts dewived fwom
// t-this softwawe without s-specific p-pwiow wwitten pewmission. (⑅˘꒳˘)
//
// t-this softwawe is p-pwovided by the copywight howdews and contwibutows
// "as is" and a-any expwess ow impwied wawwanties, XD incwuding, -.- but nyot
// wimited to, :3 the impwied wawwanties o-of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. nyaa~~ i-in nyo e-event shaww the c-copywight
// ownew ow contwibutows b-be wiabwe fow any diwect, 😳 indiwect, (⑅˘꒳˘) i-incidentaw, nyaa~~
// s-speciaw, exempwawy, OwO ow consequentiaw damages (incwuding, rawr x3 but nyot
// wimited to, XD pwocuwement of substitute g-goods ow sewvices; woss of use, σωσ
// d-data, ow pwofits; ow business i-intewwuption) h-howevew caused and on any
// theowy of wiabiwity, (U ᵕ U❁) w-whethew in contwact, (U ﹏ U) s-stwict wiabiwity, :3 ow towt
// (incwuding n-nyegwigence ow o-othewwise) awising in any way out of the use
// of this softwawe, even if advised o-of the possibiwity o-of such damage. ( ͡o ω ͡o )
-->
