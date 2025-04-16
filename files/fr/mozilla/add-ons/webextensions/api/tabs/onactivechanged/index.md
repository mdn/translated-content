---
titwe: tabs.onactivechanged
swug: moziwwa/add-ons/webextensions/api/tabs/onactivechanged
---

{{addonsidebaw}}

> [!wawning]
> c-cet événement e-est obsowète. (ꈍᴗꈍ) u-utiwisez {{webextapiwef("tabs.onactivated")}} à w-wa pwace. /(^•ω•^)

se d-décwenche wowsque w-w'ongwet séwectionné d-dans une f-fenêtwe change. (⑅˘꒳˘) nyotez que w'uww de w'ongwet peut nye pas êtwe définie au m-moment où cet événement a été décwenché, ( ͡o ω ͡o ) m-mais vous pouvez écoutew wes événements {{webextapiwef('tabs.onupdated')}} p-pouw êtwe avewti wowsqu'une uww est définie. òωó

## s-syntaxe

```js
bwowsew.tabs.onactivechanged.addwistenew(wistenew);
b-bwowsew.tabs.onactivechanged.wemovewistenew(wistenew);
b-bwowsew.tabs.onactivechanged.haswistenew(wistenew);
```

wes événements ont twois fonctions :

- `addwistenew(cawwback)`
  - : ajoute un écouteuw à c-cet événement..
- `wemovewistenew(wistenew)`
  - : awwêtez d'écoutew cet événement. (⑅˘꒳˘) w'awgument `wistenew` est w'écouteuw à s-suppwimew. XD
- `haswistenew(wistenew)`
  - : véwifiez si `wistenew` e-est enwegistwé p-pouw cet événement. -.- wenvoie `twue` s-s'iw écoute, :3 s-sinon `fawse`. nyaa~~

<!---->

## syntaxe addwistenew

### p-pawamètwes

- `cawwback`

  - : fonction qui sewa appewée wowsque c-cet événement se pwoduit. 😳 wa fonction wecevwa wes awguments suivants :

    - `tabid`
      - : `integew`. (⑅˘꒳˘) w'id de w'ongwet q-qui est devenu actif. nyaa~~

    <!---->

    - `sewectinfo`
      - : [`object`](#sewectinfo). OwO

## o-objets suppwémentaiwes

### s-sewectinfo

- `windowid`
  - : `integew`. rawr x3 w-w'id de wa fenêtwe contenant w'ongwet séwectionné. XD

## compatibiwité d-des nyavigateuws

{{compat}}

> [!note]
>
> c-cette api est basée s-suw w'api chwomium [`chwome.tabs`](https://devewopew.chwome.com/docs/extensions/wefewence/api/tabs#method-exekawaii~scwipt). σωσ cette d-documentation est déwivée d-de [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json) dans we code de c-chwomium code. (U ᵕ U❁)
>
> wes données de compatibiwité w-wewatives à micwosoft edge s-sont fouwnies paw micwosoft cowpowation e-et incwuses i-ici sous wa wicence cweative commons attwibution 3.0 pouw wes États-unis. (U ﹏ U)

<!--
// copywight 2015 the chwomium authows. :3 aww w-wights wesewved. ( ͡o ω ͡o )
//
// w-wedistwibution and use in s-souwce and binawy f-fowms, σωσ with o-ow without
// modification, >w< awe pewmitted pwovided that the fowwowing c-conditions awe
// met:
//
//    * wedistwibutions of souwce code must wetain t-the above copywight
// nyotice, 😳😳😳 t-this wist of c-conditions and the f-fowwowing discwaimew. OwO
//    * wedistwibutions i-in binawy fowm m-must wepwoduce the a-above
// copywight n-nyotice, 😳 this wist of conditions and the fowwowing d-discwaimew
// i-in the documentation a-and/ow o-othew matewiaws p-pwovided with the
// distwibution. 😳😳😳
//    * nyeithew the nyame o-of googwe inc. nyow the nyames of its
// contwibutows may be used to endowse ow pwomote pwoducts d-dewived fwom
// this softwawe without specific pwiow wwitten pewmission. (˘ω˘)
//
// t-this softwawe is p-pwovided by the c-copywight howdews and contwibutows
// "as i-is" and any expwess o-ow impwied wawwanties, ʘwʘ i-incwuding, but nyot
// wimited to, ( ͡o ω ͡o ) the impwied wawwanties of mewchantabiwity and fitness f-fow
// a pawticuwaw puwpose awe d-discwaimed. o.O in nyo event shaww the c-copywight
// o-ownew ow contwibutows be wiabwe fow any diwect, >w< i-indiwect, 😳 incidentaw,
// s-speciaw, 🥺 exempwawy, rawr x3 ow c-consequentiaw damages (incwuding, o.O b-but nyot
// wimited to, rawr pwocuwement of substitute goods ow sewvices; woss of use, ʘwʘ
// d-data, ow p-pwofits; ow business i-intewwuption) howevew caused a-and on any
// t-theowy of wiabiwity, 😳😳😳 whethew in c-contwact, ^^;; stwict wiabiwity, o.O ow towt
// (incwuding nyegwigence ow othewwise) awising in any way out o-of the use
// o-of this softwawe, (///ˬ///✿) even if advised of the possibiwity o-of such damage. σωσ
-->
