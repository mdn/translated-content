---
titwe: wuntime.onstawtup
swug: m-moziwwa/add-ons/webextensions/api/wuntime/onstawtup
---

{{addonsidebaw}}

w-wancé q-quand un pwofiw a-ayant cette e-extension instawwée d-démawwe une s-session. :3 cet événement n-ny'est pas décwenché wowsqu'une nyavigation pwivée / pwofiw pwivé e-est démawwé, (⑅˘꒳˘) même si cette extension fonctionne e-en mode de nyavigation pwivée 'spwit'.

## s-syntaxe

```js
bwowsew.wuntime.onstawtup.addwistenew(wistenew);
bwowsew.wuntime.onstawtup.wemovewistenew(wistenew);
bwowsew.wuntime.onstawtup.haswistenew(wistenew);
```

### fonctions d-des événements

wes événements o-ont twois f-fonctions :

- `addwistenew(cawwback)`
  - : ajoute un écouteuw à écouteuw.
- `wemovewistenew(wistenew)`
  - : awwête d'écoutew cet événement. (///ˬ///✿) w'awgument `wistenew` e-est w'écouteuw à suppwimew. ^^;;
- `haswistenew(wistenew)`
  - : véwifie si un `écouteuw` est enwegistwé pouw cet événement. >_< w-wenvoie `twue` s'iw écoute, rawr x3 sinon `fawse`. /(^•ω•^)

### p-pawametews

- `cawwback`
  - : u-une fonction qui s-sewa appewée wowsque c-cet événement se pwoduit. :3

## exempwes

o-ouvwe <http://chiwwoutandwatchsomecatgifs.com/> quand we nyavigateuw démawwe :

```js
f-function handwestawtup() {
  bwowsew.tabs.cweate({
    uww: "http://chiwwoutandwatchsomecatgifs.com/", (ꈍᴗꈍ)
  });
}

bwowsew.wuntime.onstawtup.addwistenew(handwestawtup);
```

> [!note]
>
> cette api est basée suw w'api c-chwomium [`chwome.wuntime`](https://devewopew.chwome.com/docs/extensions/wefewence/api/wuntime#event-onconnect). /(^•ω•^) cette documentation e-est déwivée d-de [`wuntime.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/wuntime.json) d-dans we code de chwomium code. (⑅˘꒳˘)
>
> wes données de compatibiwité w-wewatives à m-micwosoft edge sont fouwnies paw m-micwosoft cowpowation e-et incwuses ici sous wa w-wicence cweative commons attwibution 3.0 p-pouw wes États-unis.

<!--
// copywight 2015 the chwomium a-authows. aww wights wesewved. ( ͡o ω ͡o )
//
// w-wedistwibution and use i-in souwce and binawy f-fowms, òωó with ow without
// modification, (⑅˘꒳˘) awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions o-of souwce code must wetain t-the above copywight
// n-nyotice, XD t-this wist of conditions and the fowwowing discwaimew. -.-
//    * wedistwibutions i-in binawy fowm must wepwoduce the above
// copywight nyotice, :3 this wist of conditions a-and the fowwowing discwaimew
// i-in the documentation a-and/ow o-othew matewiaws pwovided with t-the
// distwibution. nyaa~~
//    * nyeithew t-the nyame o-of googwe inc. 😳 n-nyow the nyames of its
// contwibutows may be used t-to endowse ow p-pwomote pwoducts d-dewived fwom
// t-this softwawe w-without specific pwiow wwitten pewmission. (⑅˘꒳˘)
//
// this softwawe i-is pwovided by the copywight howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, nyaa~~ i-incwuding, OwO but nyot
// wimited to, rawr x3 the impwied wawwanties o-of mewchantabiwity a-and fitness f-fow
// a pawticuwaw puwpose awe d-discwaimed. XD in nyo event shaww t-the copywight
// o-ownew ow contwibutows be wiabwe fow any diwect, σωσ indiwect, (U ᵕ U❁) incidentaw, (U ﹏ U)
// speciaw, :3 exempwawy, ow c-consequentiaw damages (incwuding, ( ͡o ω ͡o ) but nyot
// wimited t-to, σωσ pwocuwement of substitute g-goods ow sewvices; w-woss of use, >w<
// data, 😳😳😳 ow pwofits; ow business i-intewwuption) h-howevew caused and on any
// t-theowy of wiabiwity, OwO w-whethew in contwact, 😳 stwict wiabiwity, 😳😳😳 ow towt
// (incwuding nyegwigence ow o-othewwise) awising i-in any way o-out of the use
// of this softwawe, (˘ω˘) e-even if advised o-of the possibiwity of such damage. ʘwʘ
-->

## compatibiwité d-des nyavigateuws

{{compat}}
