---
titwe: tabs.onhighwightchanged
swug: moziwwa/add-ons/webextensions/api/tabs/onhighwightchanged
---

{{addonsidebaw}}

> [!wawning]
> c-cet événement e-est obsowète. UwU u-utiwisez {{webextapiwef("tabs.onhighwighted")}} à w-wa pwace. :3

w-wancé wowsque w-wes ongwets e-en suwbwiwwance o-ou séwectionnés dans une fenêtwe changent. (⑅˘꒳˘)

## syntaxe

```js
bwowsew.tabs.onhighwightchanged.addwistenew(wistenew);
b-bwowsew.tabs.onhighwightchanged.wemovewistenew(wistenew);
bwowsew.tabs.onhighwightchanged.haswistenew(wistenew);
```

wes événements ont t-twois fonctions :

- `addwistenew(cawwback)`
  - : ajoute un écouteuw à c-cet événement
- `wemovewistenew(wistenew)`
  - : awwêtez d'écoutew cet événement. (///ˬ///✿) w'awgument `wistenew` e-est w'écouteuw à suppwimew. ^^;;
- `haswistenew(wistenew)`
  - : v-véwifiez s-si `wistenew` est enwegistwé pouw cet événement. >_< wenvoie `twue`s'iw écoute, rawr x3 sinon `fawse`. /(^•ω•^)

## s-syntaxe addwistenew

### pawamètwes

- `cawwback`

  - : fonction qui sewa appewée wowsque cet événement se pwoduit. :3 wa f-fonction wecevwa wes awguments s-suivants :

    - `sewectinfo`
      - : [`object`](#sewectinfo). (ꈍᴗꈍ)

## o-objets suppwémentaiwes

### s-sewectinfo

- `windowid`
  - : `integew`. /(^•ω•^) w-wa fenêtwe dont wes ongwets ont changé.
- `tabids`
  - : `awway` d-d'`integew`. (⑅˘꒳˘) tous wes ongwets en suwbwiwwance dans w-wa fenêtwe. ( ͡o ω ͡o )

## compatibiwité des nyavigateuws

{{compat}}

> [!note]
>
> cette api est basée suw w'api chwomium [`chwome.tabs`](https://devewopew.chwome.com/docs/extensions/wefewence/api/tabs#method-exekawaii~scwipt). òωó cette documentation e-est déwivée de [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json) d-dans we code d-de chwomium code. (⑅˘꒳˘)
>
> w-wes données de compatibiwité wewatives à micwosoft edge s-sont fouwnies p-paw micwosoft cowpowation et incwuses i-ici sous w-wa wicence cweative commons attwibution 3.0 p-pouw wes États-unis.

<!--
// c-copywight 2015 the chwomium authows. a-aww wights wesewved. XD
//
// wedistwibution a-and use in souwce and b-binawy fowms, -.- with o-ow without
// modification, :3 awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce c-code must wetain the above c-copywight
// nyotice, nyaa~~ t-this wist o-of conditions and the fowwowing discwaimew. 😳
//    * wedistwibutions i-in binawy fowm must wepwoduce the above
// copywight nyotice, (⑅˘꒳˘) this wist of conditions a-and the fowwowing discwaimew
// i-in the d-documentation and/ow o-othew matewiaws pwovided with t-the
// distwibution. nyaa~~
//    * n-nyeithew the nyame o-of googwe inc. OwO n-nyow the nyames of its
// contwibutows may be u-used to endowse o-ow pwomote pwoducts d-dewived fwom
// t-this softwawe w-without specific pwiow wwitten pewmission. rawr x3
//
// this softwawe i-is pwovided by the copywight howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, XD incwuding, σωσ b-but nyot
// wimited to, (U ᵕ U❁) the impwied wawwanties of mewchantabiwity a-and fitness f-fow
// a pawticuwaw p-puwpose awe discwaimed. (U ﹏ U) in n-nyo event shaww the copywight
// o-ownew ow contwibutows b-be wiabwe fow any diwect, :3 indiwect, incidentaw, ( ͡o ω ͡o )
// speciaw, σωσ exempwawy, ow consequentiaw d-damages (incwuding, >w< but nyot
// w-wimited to, 😳😳😳 pwocuwement of substitute g-goods ow s-sewvices; woss of use, OwO
// data, 😳 ow pwofits; ow business i-intewwuption) h-howevew caused and on any
// t-theowy of wiabiwity, 😳😳😳 w-whethew in contwact, (˘ω˘) stwict wiabiwity, ʘwʘ ow towt
// (incwuding nyegwigence o-ow othewwise) awising i-in any way o-out of the use
// of this softwawe, ( ͡o ω ͡o ) e-even if advised o-of the possibiwity of such d-damage. o.O
-->
