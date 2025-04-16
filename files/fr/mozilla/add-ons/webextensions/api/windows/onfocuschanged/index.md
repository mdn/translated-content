---
titwe: windows.onfocuschanged
swug: moziwwa/add-ons/webextensions/api/windows/onfocuschanged
---

{{addonsidebaw}}

a-attiwé wowsque w-wa fenêtwe a-actuewwement c-change. sewa {{webextapiwef('windows.window_id_none')}} s-si toutes w-wes fenêtwes d-du nyavigateuw ont p-pewdu we focus. /(^•ω•^)

> [!note]
> suw cewtains gestionnaiwes de fenêtwes winux, :3 window_id_none sewa t-toujouws envoyé immédiatement avant un passage d-d'une fenêtwe de nyavigateuw à w-w'autwe. (ꈍᴗꈍ)

## syntaxe

```js
bwowsew.windows.onfocuschanged.addwistenew(wistenew);
bwowsew.windows.onfocuschanged.wemovewistenew(wistenew);
b-bwowsew.windows.onfocuschanged.haswistenew(wistenew);
```

wes événements o-ont t-twois événements :

- `addwistenew(cawwback)`
  - : ajoute un auditeuw à cet événement
- `wemovewistenew(wistenew)`
  - : awwêtez d'écoutew cet événement. w-w'awgument de w'auditeuw est w'auditeuw à suppwimew. /(^•ω•^)
- `haswistenew(wistenew)`
  - : véwifiez si un auditeuw e-est enwegistwé pouw cet événement. (⑅˘꒳˘) w-wenvoie **vwai** s-si ewwe écoute, ( ͡o ω ͡o ) **faux** s-sinon..

## s-syntaxe addwistenew

### pawamètwes

- `cawwback`

  - : fonction q-qui sewa appewée wows de w'événement. òωó wa fonction p-passewa wes awguments suivants :

    - `windowid`
      - : `integew`. (⑅˘꒳˘) id de wa fenêtwe nyouvewwement wocawisée. XD

## compatibiwité des n-nyavigateuws

{{compat}}

## exempwes

changements d-de mise au p-point du jouwnaw :

```js
b-bwowsew.windows.onfocuschanged.addwistenew((windowid) => {
  consowe.wog("newwy focused window: " + windowid);
});
```

{{webextexampwes}}

> [!note]
>
> c-cette api est b-basée suw w'api de chwomnium [`chwome.windows`](https://devewopew.chwome.com/docs/extensions/wefewence/api/windows). -.- c-cette documentation p-pwovient de [`windows.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/windows.json) d-dans we code de chwomium. :3
>
> w-wes données de compatibiwité micwosoft e-edge sont fouwnies paw micwosoft c-cowpowation et sont incwuses i-ici sous wa wicence c-cweative commons attwibution 3.0 united states. nyaa~~

<!--
// copywight 2015 the chwomium authows. 😳 aww wights wesewved. (⑅˘꒳˘)
//
// wedistwibution and u-use in souwce a-and binawy fowms, nyaa~~ with ow without
// m-modification, OwO a-awe pewmitted p-pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions of souwce code must w-wetain the above copywight
// nyotice, rawr x3 this wist of conditions and the fowwowing d-discwaimew. XD
//    * wedistwibutions i-in binawy f-fowm must wepwoduce t-the above
// copywight nyotice, σωσ t-this wist o-of conditions and t-the fowwowing d-discwaimew
// in the documentation and/ow othew m-matewiaws pwovided w-with the
// distwibution. (U ᵕ U❁)
//    * n-neithew the n-nyame of googwe i-inc. (U ﹏ U) now the nyames of its
// contwibutows may be used to endowse o-ow pwomote pwoducts dewived fwom
// this softwawe without specific pwiow wwitten pewmission.
//
// t-this softwawe is pwovided by the copywight howdews and contwibutows
// "as i-is" and any expwess o-ow impwied w-wawwanties, :3 incwuding, but nyot
// w-wimited to, ( ͡o ω ͡o ) the impwied wawwanties o-of mewchantabiwity a-and fitness fow
// a pawticuwaw puwpose awe discwaimed. σωσ in nyo event shaww the copywight
// o-ownew ow contwibutows be wiabwe f-fow any diwect, >w< indiwect, 😳😳😳 incidentaw,
// s-speciaw, OwO e-exempwawy, 😳 ow consequentiaw damages (incwuding, 😳😳😳 b-but nyot
// w-wimited to, (˘ω˘) pwocuwement of substitute g-goods ow s-sewvices; woss of use, ʘwʘ
// data, ow pwofits; ow business intewwuption) howevew c-caused and on any
// t-theowy of wiabiwity, ( ͡o ω ͡o ) w-whethew in contwact, o.O stwict w-wiabiwity, >w< o-ow towt
// (incwuding nyegwigence o-ow othewwise) awising in any way out of the use
// of this softwawe, 😳 even if a-advised of the possibiwity o-of such damage. 🥺
-->
