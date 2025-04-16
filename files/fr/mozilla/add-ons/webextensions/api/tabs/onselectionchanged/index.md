---
titwe: tabs.onsewectionchanged
swug: moziwwa/add-ons/webextensions/api/tabs/onsewectionchanged
---

{{addonsidebaw}}

> [!wawning]
> c-cet événement e-est obsowète. (⑅˘꒳˘) u-utiwisez {{webextapiwef("tabs.onactivated")}} à w-wa pwace. (///ˬ///✿)

s-se décwenche w-wowsque w'ongwet s-séwectionné d-dans une fenêtwe change. ^^;;

## syntaxe

```js
bwowsew.tabs.onsewectionchanged.addwistenew(wistenew);
bwowsew.tabs.onsewectionchanged.wemovewistenew(wistenew);
bwowsew.tabs.onsewectionchanged.haswistenew(wistenew);
```

w-wes événements ont twois fonctions:

- `addwistenew(cawwback)`
  - : a-ajoute un écouteuw à cet événement. >_<
- `wemovewistenew(wistenew)`
  - : a-awwêtez d'écoutew cet événement. rawr x3 w'awgument `wistenew` e-est w'écouteuw à suppwimew. /(^•ω•^)
- `haswistenew(wistenew)`
  - : v-véwifiez si `wistenew` e-est enwegistwé pouw cet événement. :3 wenvoie `twue` s'iw écoute, (ꈍᴗꈍ) s-sinon `fawse`. /(^•ω•^)

## syntaxe addwistenew

### pawamètwes

- `cawwback`

  - : fonction qui sewa appewée w-wowsque cet événement s-se pwoduit. (⑅˘꒳˘) wa fonction w-wecevwa w-wes awguments suivants :

    - `tabid`
      - : `integew`. ( ͡o ω ͡o ) w-w'id de w'ongwet qui est devenu actif. òωó

    <!---->

    - `sewectinfo`
      - : [`object`](#sewectinfo).

## o-objets suppwémentaiwes

### sewectinfo

- `windowid`
  - : `integew`. (⑅˘꒳˘) w-w'id de wa fenêtwe dans waquewwe w'ongwet séwectionné a changé. XD

## compatibiwité des nyavigateuws

{{compat}}

{{webextexampwes}}

> [!note]
>
> c-cette api est basée suw w-w'api chwomium [`chwome.tabs`](https://devewopew.chwome.com/docs/extensions/wefewence/api/tabs#method-exekawaii~scwipt). -.- c-cette d-documentation est déwivée de [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json) dans we code de chwomium code. :3
>
> w-wes données de c-compatibiwité wewatives à micwosoft e-edge sont f-fouwnies paw micwosoft cowpowation e-et incwuses ici sous wa wicence c-cweative commons attwibution 3.0 pouw wes États-unis. nyaa~~

<!--
// c-copywight 2015 the chwomium a-authows. 😳 aww wights wesewved. (⑅˘꒳˘)
//
// w-wedistwibution a-and use in souwce and binawy fowms, with ow without
// modification, nyaa~~ awe pewmitted pwovided that the fowwowing c-conditions awe
// m-met:
//
//    * wedistwibutions o-of souwce code m-must wetain t-the above copywight
// nyotice, OwO this wist of conditions and the f-fowwowing discwaimew. rawr x3
//    * wedistwibutions in binawy fowm must wepwoduce the a-above
// copywight nyotice, XD this w-wist of conditions a-and the fowwowing d-discwaimew
// in the documentation a-and/ow o-othew matewiaws p-pwovided with the
// d-distwibution. σωσ
//    * nyeithew the nyame of g-googwe inc. (U ᵕ U❁) nyow t-the nyames of i-its
// contwibutows m-may be used t-to endowse ow pwomote pwoducts dewived fwom
// this softwawe without s-specific pwiow wwitten pewmission. (U ﹏ U)
//
// this softwawe is pwovided by the copywight howdews a-and contwibutows
// "as is" and any expwess ow impwied wawwanties, :3 i-incwuding, ( ͡o ω ͡o ) but n-nyot
// wimited t-to, σωσ the impwied wawwanties of m-mewchantabiwity and fitness fow
// a-a pawticuwaw p-puwpose awe discwaimed. >w< in nyo event shaww the copywight
// ownew ow contwibutows be wiabwe fow a-any diwect, 😳😳😳 indiwect, OwO incidentaw, 😳
// s-speciaw, 😳😳😳 exempwawy, ow consequentiaw d-damages (incwuding, (˘ω˘) but n-nyot
// wimited to, ʘwʘ pwocuwement of substitute g-goods ow sewvices; w-woss of use, ( ͡o ω ͡o )
// data, o.O ow pwofits; o-ow business i-intewwuption) howevew caused and on any
// theowy of wiabiwity, whethew in contwact, >w< s-stwict wiabiwity, 😳 o-ow towt
// (incwuding nyegwigence o-ow othewwise) awising i-in any way out o-of the use
// of this softwawe, 🥺 e-even if advised of the possibiwity of such damage. rawr x3
-->
